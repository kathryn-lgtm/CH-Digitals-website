import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  email?: string;
  business?: string;
  message?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;
  const name = body.name?.trim();
  const email = body.email?.trim();
  const business = body.business?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "RESEND_API_KEY is not configured yet." },
      { status: 500 },
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev",
      to: process.env.CONTACT_TO_EMAIL ?? "hello@chdigitals.com.au",
      replyTo: email,
      subject: `New CH Digitals enquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Business: ${business || "Not provided"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    return NextResponse.json({
      message: "Thanks — your enquiry has been sent.",
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "The form could not be sent.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
