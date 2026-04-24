import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getSupabaseServerClient } from "@/lib/supabase";

type WaitlistPayload = {
  name?: string;
  email?: string;
  businessName?: string;
  utm?: {
    source?: string;
    medium?: string;
    campaign?: string;
    content?: string;
    term?: string;
  };
  referrer?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function confirmationEmailHtml(firstName: string) {
  const greeting = firstName ? `Hi ${firstName},` : "Hi,";
  return `
    <div style="font-family: -apple-system, Segoe UI, Roboto, sans-serif; font-size: 15px; line-height: 1.7; color: #1f2933; max-width: 560px;">
      <p>${greeting}</p>
      <p>You're on the waitlist for the Business Clarity Engine. When early access opens in 2026, you'll hear from us first.</p>
      <p>While you wait — the <em>Small Business Claude Playbook</em> is where most people start. It's ten prompts that surface what's actually blocking your business, in about two hours. <a href="https://www.chdigitals.com.au/playbook" style="color: #1f2933; text-decoration: underline;">Read more on chdigitals.com.au &rarr;</a></p>
      <p>If anything comes up in the meantime, reply to this email. I read every one.</p>
      <p style="margin-top: 32px;">— Kathryn<br/>CH Digitals</p>
    </div>
  `;
}

function confirmationEmailText(firstName: string) {
  const greeting = firstName ? `Hi ${firstName},` : "Hi,";
  return [
    greeting,
    "",
    "You're on the waitlist for the Business Clarity Engine. When early access opens in 2026, you'll hear from us first.",
    "",
    "While you wait — the Small Business Claude Playbook is where most people start. It's ten prompts that surface what's actually blocking your business, in about two hours.",
    "Read more on chdigitals.com.au: https://www.chdigitals.com.au/playbook",
    "",
    "If anything comes up in the meantime, reply to this email. I read every one.",
    "",
    "— Kathryn",
    "CH Digitals",
  ].join("\n");
}

export async function POST(request: Request) {
  let body: WaitlistPayload;
  try {
    body = (await request.json()) as WaitlistPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase();
  const name = body.name?.trim() || null;
  const businessName = body.businessName?.trim() || null;

  if (!email || !EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { error: "A valid email is required." },
      { status: 400 },
    );
  }

  // 1. Persist to Supabase (BCE project, bce_waitlist table)
  try {
    const supabase = getSupabaseServerClient();
    const userAgent = request.headers.get("user-agent") || null;

    const { error } = await supabase.from("bce_waitlist").upsert(
      {
        email,
        name,
        business_name: businessName,
        utm_source: body.utm?.source || null,
        utm_medium: body.utm?.medium || null,
        utm_campaign: body.utm?.campaign || null,
        utm_content: body.utm?.content || null,
        utm_term: body.utm?.term || null,
        referrer: body.referrer || null,
        user_agent: userAgent,
      },
      { onConflict: "email" },
    );

    if (error) {
      console.error("[bce-waitlist] Supabase insert failed:", error.message);
      return NextResponse.json(
        { error: "We couldn't save your spot. Please try again in a minute." },
        { status: 500 },
      );
    }
  } catch (error) {
    console.error("[bce-waitlist] Supabase client error:", error);
    return NextResponse.json(
      { error: "We couldn't save your spot. Please try again in a minute." },
      { status: 500 },
    );
  }

  // 2. Send confirmation email (await so it doesn't die on Vercel's serverless close)
  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const firstName = name?.split(" ")[0] || "";

      await resend.emails.send({
        from:
          process.env.BCE_WAITLIST_FROM_EMAIL ??
          "CH Digitals <hello@chdigitals.com.au>",
        to: email,
        replyTo:
          process.env.BCE_WAITLIST_REPLY_TO ?? "kathryn@chdigitals.com.au",
        subject: "You're on the list — BCE early access",
        html: confirmationEmailHtml(firstName),
        text: confirmationEmailText(firstName),
      });
    } catch (error) {
      // Don't fail the whole request if email sending hiccups —
      // the lead is already captured in Supabase.
      console.error("[bce-waitlist] Resend send failed:", error);
    }
  }

  return NextResponse.json({
    message: "You're on the list. Check your inbox for confirmation.",
  });
}
