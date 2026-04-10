import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/site/button-link";
import { PageShell } from "@/components/site/page-shell";
import { Section } from "@/components/site/section";
import { caseStudies, siteConfig } from "@/lib/site-data";

const caseStudy = caseStudies.find((cs) => cs.slug === "dermagen")!;

export const metadata: Metadata = {
  title: "DermaGen Case Study — $592K+ in Sales",
  description:
    "How CH Digitals rebuilt DermaGen's digital presence from a non-converting website into a national skincare brand generating $592K+ in sales, 313K+ sessions, and a 54.2% checkout conversion rate.",
  alternates: {
    canonical: "/work/dermagen",
  },
};

export default function DermaGenCaseStudy() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--color-black)] px-5 py-20 text-white md:px-8 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,169,110,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(58,119,134,0.18),transparent_30%)]" />
        <div className="relative mx-auto max-w-[1200px]">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/work"
              className="text-xs font-semibold uppercase tracking-[0.28em] text-white/40 transition hover:text-white/70"
            >
              Work
            </Link>
            <span className="text-white/20">›</span>
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]">
              DermaGen
            </span>
          </div>
          <h1 className="mt-8 max-w-4xl font-display text-5xl leading-none tracking-[-0.03em] md:text-7xl">
            {caseStudy.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
            {caseStudy.industry} — {caseStudy.client}
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {caseStudy.metrics.slice(0, 3).map((metric) => (
              <div
                key={metric.label}
                className="rounded-[24px] border border-white/10 bg-white/[0.04] px-5 py-5"
              >
                <p className="font-display text-4xl text-white">{metric.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/54">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Story */}
      <Section
        eyebrow="The Challenge"
        title="Great products. A digital presence that was holding them back."
      >
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-lg leading-9 text-[var(--color-copy)]">
              DermaGen by Botanical Chemist came to CH Digitals with a strong product range and genuine clinical expertise. What they did not have was a digital presence that communicated any of it — or a store that actually converted.
            </p>
            <p className="text-lg leading-9 text-[var(--color-copy)]">
              The website was not performing. The email marketing was minimal. There was no real SEO strategy. Revenue from the online store was roughly $500 per month — well below what the product quality and existing customer loyalty should have been producing.
            </p>
            <p className="text-lg leading-9 text-[var(--color-copy)]">
              The brief was clear: rebuild the digital infrastructure so it actually matched the depth of the offer, and build systems underneath it that could scale.
            </p>
            <div className="rounded-[28px] border border-[rgba(200,169,110,0.3)] bg-[var(--color-cream)] px-7 py-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]">
                The result
              </p>
              <p className="mt-3 text-xl leading-8 text-[var(--color-black)]">
                Within six months of the Shopify rebuild, DermaGen went from ~$500/month to $30,000/month in online revenue. Over three years, the system generated $592K+ in total sales.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            {caseStudy.metrics.map((metric) => (
              <div
                key={metric.label}
                className="flex items-center justify-between rounded-[22px] border border-[rgba(200,169,110,0.25)] bg-white px-6 py-5 shadow-[0_10px_30px_rgba(10,10,10,0.05)]"
              >
                <p className="text-sm leading-7 text-[var(--color-copy)]">{metric.label}</p>
                <p className="font-display text-3xl text-[var(--color-black)]">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* What Was Built */}
      <Section
        eyebrow="The Work"
        title="What CH Digitals built and owned across the engagement."
        className="bg-[var(--color-cream)]"
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[30px] border border-[rgba(200,169,110,0.4)] bg-[linear-gradient(135deg,rgba(10,10,10,0.97),rgba(31,41,51,0.97))] p-8 text-white md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]">
              Services delivered
            </p>
            <div className="mt-6 grid gap-3">
              {caseStudy.services.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-3 rounded-[18px] border border-white/8 bg-white/[0.04] px-4 py-3"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--color-gold)]" />
                  <p className="text-sm leading-7 text-white/84">{service}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-5">
            <div className="rounded-[28px] border border-[var(--color-line)] bg-white p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]">
                Platform
              </p>
              <p className="mt-3 text-2xl font-display text-[var(--color-black)]">Shopify</p>
              <p className="mt-3 text-base leading-8 text-[var(--color-copy)]">
                The store was rebuilt on Shopify with custom design, proper product architecture, and clean collection structure — built to convert and built to scale.
              </p>
            </div>
            <div className="rounded-[28px] border border-[var(--color-line)] bg-white p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]">
                Email
              </p>
              <p className="mt-3 text-2xl font-display text-[var(--color-black)]">Klaviyo</p>
              <p className="mt-3 text-base leading-8 text-[var(--color-copy)]">
                Email marketing via Klaviyo built the subscriber base to 10,000+ in two years — with flows for welcome, post-purchase, browse abandonment, and re-engagement.
              </p>
            </div>
            <div className="rounded-[28px] border border-[var(--color-line)] bg-white p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]">
                Ongoing
              </p>
              <p className="mt-3 text-2xl font-display text-[var(--color-black)]">Partnership</p>
              <p className="mt-3 text-base leading-8 text-[var(--color-copy)]">
                CH Digitals stayed close — monthly performance reviews, SEO refinement, content updates, and strategic guidance as DermaGen grew nationally.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-[var(--color-black)] px-5 py-16 text-white md:px-8 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="rounded-[36px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-8 md:p-12">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]">
                  Want results like this?
                </p>
                <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
                  Book a free strategy session and map what a stronger digital system looks like for your business.
                </h2>
                <p className="mt-5 text-lg leading-8 text-white/72">
                  Every engagement starts the same way — an honest look at what you have, what is not working, and what needs to change.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <ButtonLink href={siteConfig.bookingUrl}>Book a Strategy Session</ButtonLink>
                <Link
                  href={caseStudy.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
                >
                  Visit DermaGen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
