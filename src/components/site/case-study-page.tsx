import Link from "next/link";
import { ButtonLink } from "@/components/site/button-link";
import { PageShell } from "@/components/site/page-shell";
import { Section } from "@/components/site/section";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { RelatedLinks } from "@/components/site/related-links";
import { JsonLd } from "@/components/seo/json-ld";
import { articleSchema } from "@/lib/schema";
import { siteConfig, type CaseStudy } from "@/lib/site-data";

type CaseStudyPageProps = {
  caseStudy: CaseStudy;
};

export function CaseStudyPage({ caseStudy }: CaseStudyPageProps) {
  const path = `/work/${caseStudy.slug}`;
  const shortName = caseStudy.shortName ?? caseStudy.client;
  const schemaDescription = caseStudy.schema?.description ?? caseStudy.story;
  const storyParagraphs = caseStudy.storyParagraphs ?? [caseStudy.story];
  const detailCards = caseStudy.detailCards ?? [];
  const relatedLinks = caseStudy.relatedLinks ?? [];

  return (
    <PageShell>
      <JsonLd
        data={articleSchema({
          headline: caseStudy.headline,
          description: schemaDescription,
          path,
        })}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--color-black)] px-5 py-20 text-white md:px-8 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,169,110,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(58,119,134,0.18),transparent_30%)]" />
        <div className="relative mx-auto max-w-[1200px]">
          <Breadcrumbs
            visible
            tone="dark"
            className="mb-6"
            items={[
              { name: "Home", href: "/" },
              { name: "Work", href: "/work" },
              { name: shortName, href: path },
            ]}
          />
          <h1 className="mt-2 max-w-4xl font-display text-5xl leading-none tracking-[-0.03em] md:text-7xl">
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
            {storyParagraphs.map((paragraph, index) => (
              <p key={index} className="text-lg leading-9 text-[var(--color-copy)]">
                {paragraph}
              </p>
            ))}
            {caseStudy.resultCallout ? (
              <div className="rounded-[28px] border border-[rgba(200,169,110,0.3)] bg-[var(--color-cream)] px-7 py-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]">
                  The result
                </p>
                <p className="mt-3 text-xl leading-8 text-[var(--color-black)]">
                  {caseStudy.resultCallout}
                </p>
              </div>
            ) : null}
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

      {/* The Work */}
      <Section
        eyebrow="The Work"
        title="What CH Digitals built and owned across the engagement."
        className="bg-[var(--color-cream)]"
      >
        <div
          className={`grid gap-6 ${
            detailCards.length > 0 ? "lg:grid-cols-2" : ""
          }`}
        >
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
          {detailCards.length > 0 ? (
            <div className="space-y-5">
              {detailCards.map((card) => (
                <div
                  key={`${card.eyebrow}-${card.title}`}
                  className="rounded-[28px] border border-[var(--color-line)] bg-white p-7"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]">
                    {card.eyebrow}
                  </p>
                  <p className="mt-3 text-2xl font-display text-[var(--color-black)]">
                    {card.title}
                  </p>
                  <p className="mt-3 text-base leading-8 text-[var(--color-copy)]">
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </Section>

      {relatedLinks.length > 0 ? (
        <RelatedLinks tone="light" heading="Explore further" items={relatedLinks} />
      ) : null}

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
                  Visit {shortName}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
