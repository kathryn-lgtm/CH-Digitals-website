import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/site/page-shell";
import { Section } from "@/components/site/section";
import { caseStudies } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Work",
  description:
    "See CH Digitals case study work, including the DermaGen rebuild, and how better digital systems translated into stronger revenue, conversion, and growth.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkPage() {
  const [featuredCaseStudy] = caseStudies;

  return (
    <PageShell>
      <section className="bg-[var(--color-cream)] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-meta)]">
            Work
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl leading-tight text-[var(--color-black)] md:text-7xl">
            Case studies that show what happens when the right system is built properly.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-copy)]">
            This is not a portfolio of pretty screens. It is a record of businesses getting stronger because the digital infrastructure finally matched the quality of the offer.
          </p>
        </div>
      </section>

      <Section
        eyebrow="Featured Case Study"
        title={featuredCaseStudy.client}
        description={featuredCaseStudy.headline}
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-[32px] border border-[var(--color-line)] bg-white p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-meta)]">
              Industry
            </p>
            <p className="mt-2 text-lg text-[var(--color-copy)]">{featuredCaseStudy.industry}</p>
            <p className="mt-6 text-base leading-8 text-[var(--color-copy)]">
              {featuredCaseStudy.story}
            </p>
            <p className="mt-6 text-base leading-8 text-[var(--color-copy)]">
              In the first six months after the Shopify rebuild, DermaGen went from roughly $500 per month in revenue to $30,000 per month. The three-year analytics snapshot recorded $592K+ in revenue, 313K+ sessions, 6,542 orders, and a 54.2% checkout conversion rate.
            </p>
            <Link
              href={featuredCaseStudy.website}
              className="mt-8 inline-flex text-sm font-semibold uppercase tracking-[0.08em] text-[var(--color-navy)] transition hover:text-[var(--color-gold)]"
            >
              Visit DermaGen
            </Link>
          </article>
          <div className="grid gap-5">
            {featuredCaseStudy.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-[28px] border border-[var(--color-line)] bg-[var(--color-cream)] p-7"
              >
                <p className="font-display text-4xl text-[var(--color-black)]">{metric.value}</p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-copy)]">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Services Delivered"
        title="What CH Digitals owned across the engagement."
        className="bg-[var(--color-cream)]"
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featuredCaseStudy.services.map((service) => (
            <div
              key={service}
              className="rounded-[24px] border border-[var(--color-line)] bg-white px-5 py-4 text-sm text-[var(--color-copy)]"
            >
              {service}
            </div>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
