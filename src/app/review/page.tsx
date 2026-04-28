import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/site/button-link";
import { PageShell } from "@/components/site/page-shell";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Leave a Review",
  description:
    "Thanks for working with CH Digitals. If we've helped you build something that works, a quick Google review means everything.",
  alternates: {
    canonical: "/review",
  },
  // Don't index — this is a private link sent to clients, not for search.
  robots: { index: false, follow: false },
};

type ReviewPageProps = {
  searchParams: Promise<{ ref?: string }>;
};

function formatRef(ref: string | undefined): string | null {
  if (!ref) return null;
  // Light sanitisation — strip anything weird, cap length, title-case dashes.
  const cleaned = ref.replace(/[^a-zA-Z0-9\-_ ]/g, "").slice(0, 40).trim();
  if (!cleaned) return null;
  return cleaned
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default async function ReviewPage({ searchParams }: ReviewPageProps) {
  const { ref } = await searchParams;
  const displayName = formatRef(ref);

  return (
    <PageShell>
      <section className="relative overflow-hidden bg-[var(--color-black)] px-5 py-20 text-white md:px-8 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,169,110,0.16),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(58,119,134,0.12),transparent_38%)]" />
        <div className="relative mx-auto max-w-[820px] text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-gold)]">
            {displayName ? `Hi ${displayName}` : "A small ask"}
          </p>
          <h1 className="mt-6 font-display text-5xl leading-tight tracking-[-0.02em] md:text-6xl">
            Thank you for working with CH Digitals.
          </h1>
          <p className="mt-8 text-lg leading-9 text-white/74 md:text-xl">
            If the work we&apos;ve done together has made a real difference,
            the single biggest thing you can do to help us is leave a short
            Google review. It takes about 60 seconds and it helps other
            regional business owners find us.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[820px]">
          <div className="rounded-[32px] border border-[rgba(200,169,110,0.4)] bg-white p-8 shadow-[0_24px_60px_rgba(10,10,10,0.08)] md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]">
              Step 1 — recommended
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-[var(--color-black)] md:text-4xl">
              Leave a Google review
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--color-copy)]">
              The button below opens our Google review form in a new tab.
              You&apos;ll need to be signed in to a Google account. A sentence
              or two is plenty — what we worked on, what changed, and how
              you&apos;d describe working with us.
            </p>
            <div className="mt-8">
              <ButtonLink href={siteConfig.googleReviewUrl}>
                Open Google review form
              </ButtonLink>
            </div>
            <p className="mt-6 text-sm leading-7 text-[var(--color-meta)]">
              A few prompts if you&apos;re not sure what to say:
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-[var(--color-copy)]">
              <li>· What was the situation before we started working together?</li>
              <li>· What did we build, set up, or change for you?</li>
              <li>· What&apos;s different now — for the business, or for you personally?</li>
              <li>· Would you recommend CH Digitals, and to who?</li>
            </ul>
          </div>

          <div className="mt-6 rounded-[28px] border border-[rgba(10,10,10,0.08)] bg-white p-7 shadow-[0_14px_40px_rgba(10,10,10,0.05)] md:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-meta)]">
              Prefer to send privately?
            </p>
            <h3 className="mt-3 font-display text-2xl leading-tight text-[var(--color-black)]">
              Send Kathryn a note instead
            </h3>
            <p className="mt-4 text-base leading-8 text-[var(--color-copy)]">
              Not everyone&apos;s on Google, and not every piece of feedback
              needs to be public. If you&apos;d rather send a private note —
              good, bad, or anything in between — that&apos;s genuinely useful
              too.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(
                  "Feedback for CH Digitals" + (displayName ? ` — ${displayName}` : "")
                )}`}
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[var(--color-line)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--color-black)] transition hover:border-[var(--color-gold)] hover:text-[var(--color-black)]"
              >
                Email Kathryn directly
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[var(--color-line)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--color-black)] transition hover:border-[var(--color-gold)] hover:text-[var(--color-black)]"
              >
                Use the contact form
              </Link>
            </div>
          </div>

          <p className="mt-10 text-center text-sm leading-7 text-[var(--color-meta)]">
            Either way — thank you. Regional businesses growing properly is
            the entire point of this work.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
