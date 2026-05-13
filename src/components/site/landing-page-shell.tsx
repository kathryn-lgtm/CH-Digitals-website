import Link from "next/link";
import { ButtonLink } from "@/components/site/button-link";
import { PageShell } from "@/components/site/page-shell";
import { Section } from "@/components/site/section";
import { Breadcrumbs } from "@/components/site/breadcrumbs";
import { RelatedLinks, type RelatedLink } from "@/components/site/related-links";
import { JsonLd } from "@/components/seo/json-ld";
import { faqSchema, serviceSchema } from "@/lib/schema";

export type LandingHero = {
  eyebrow?: string;
  h1: string;
  body: string;
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
};

export type LandingProblem = {
  eyebrow?: string;
  title: string;
  description?: string;
  points?: string[];
};

export type LandingWhatPillar = { title: string; body: string };
export type LandingWhat = {
  eyebrow?: string;
  title: string;
  description?: string;
  pillars?: LandingWhatPillar[];
};

export type LandingProcessStep = { name: string; body: string };
export type LandingProcess = {
  eyebrow?: string;
  title: string;
  description?: string;
  steps: LandingProcessStep[];
};

export type LandingProof = {
  eyebrow?: string;
  title: string;
  description?: string;
  caseStudyHref?: string;
  caseStudyLabel?: string;
  metrics?: { value: string; label: string }[];
};

export type LandingOutcome = {
  eyebrow?: string;
  title: string;
  description?: string;
  outcomes?: string[];
};

export type LandingLocalProof = {
  eyebrow?: string;
  title: string;
  body: string;
};

export type LandingFaq = {
  eyebrow?: string;
  title: string;
  items: { question: string; answer: string }[];
};

export type LandingCta = {
  eyebrow?: string;
  title: string;
  description?: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
};

export type LandingPageData = {
  /** URL path to this page, e.g. "/digital-agency-emerald-qld". Used for breadcrumb schema. */
  path: string;
  /** Short display name for breadcrumbs. */
  breadcrumbLabel: string;
  hero: LandingHero;
  problem?: LandingProblem;
  what?: LandingWhat;
  process?: LandingProcess;
  proof?: LandingProof;
  outcome?: LandingOutcome;
  localProof?: LandingLocalProof;
  faq?: LandingFaq;
  related?: RelatedLink[];
  cta: LandingCta;
  /** Optional Service schema wiring. */
  serviceSchema?: {
    name: string;
    description: string;
    serviceType?: string;
    areaServed?: string;
  };
};

type LandingPageShellProps = {
  data: LandingPageData;
};

export function LandingPageShell({ data }: LandingPageShellProps) {
  return (
    <PageShell>
      {data.serviceSchema ? (
        <JsonLd
          data={serviceSchema({
            name: data.serviceSchema.name,
            description: data.serviceSchema.description,
            path: data.path,
            serviceType: data.serviceSchema.serviceType,
            areaServed: data.serviceSchema.areaServed,
          })}
        />
      ) : null}
      {data.faq ? <JsonLd data={faqSchema(data.faq.items)} /> : null}

      {/* Hero */}
      <section className="bg-[var(--color-cream)] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <Breadcrumbs
            visible
            tone="light"
            className="mb-6"
            items={[
              { name: "Home", href: "/" },
              { name: data.breadcrumbLabel, href: data.path },
            ]}
          />
          {data.hero.eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-meta)]">
              {data.hero.eyebrow}
            </p>
          ) : null}
          <h1 className="mt-4 max-w-4xl font-display text-5xl leading-tight text-[var(--color-black)] md:text-7xl">
            {data.hero.h1}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-copy)]">
            {data.hero.body}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href={data.hero.primaryCta.href}>{data.hero.primaryCta.label}</ButtonLink>
            {data.hero.secondaryCta ? (
              <Link
                href={data.hero.secondaryCta.href}
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[var(--color-line)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--color-black)] transition hover:border-[var(--color-gold)]"
              >
                {data.hero.secondaryCta.label}
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      {/* Problem */}
      {data.problem ? (
        <Section
          eyebrow={data.problem.eyebrow}
          title={data.problem.title}
          description={data.problem.description}
        >
          {data.problem.points && data.problem.points.length > 0 ? (
            <ul className="grid gap-3 md:grid-cols-2">
              {data.problem.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 rounded-[22px] border border-[var(--color-line)] bg-white px-5 py-4 text-base leading-8 text-[var(--color-copy)]"
                >
                  <span className="mt-[0.55em] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-gold)]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </Section>
      ) : null}

      {/* What this is */}
      {data.what ? (
        <Section
          eyebrow={data.what.eyebrow}
          title={data.what.title}
          description={data.what.description}
          className="bg-[var(--color-cream)]"
        >
          {data.what.pillars && data.what.pillars.length > 0 ? (
            <div
              className={`grid gap-6 ${
                data.what.pillars.length === 2
                  ? "md:grid-cols-2"
                  : data.what.pillars.length === 4
                    ? "md:grid-cols-2 lg:grid-cols-4"
                    : "md:grid-cols-3"
              }`}
            >
              {data.what.pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-[28px] border border-[var(--color-line)] bg-white p-7 shadow-[0_18px_45px_rgba(10,10,10,0.05)]"
                >
                  <h3 className="font-display text-2xl leading-tight text-[var(--color-black)]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-base leading-8 text-[var(--color-copy)]">
                    {pillar.body}
                  </p>
                </div>
              ))}
            </div>
          ) : null}
        </Section>
      ) : null}

      {/* Process */}
      {data.process ? (
        <Section
          eyebrow={data.process.eyebrow}
          title={data.process.title}
          description={data.process.description}
        >
          <div className="divide-y divide-[var(--color-line)]">
            {data.process.steps.map((step, index) => (
              <div
                key={step.name}
                className="grid gap-6 py-10 first:pt-0 last:pb-0 lg:grid-cols-[120px_1fr_2fr] lg:items-baseline lg:gap-14"
              >
                <p className="font-display text-6xl leading-none text-[rgba(10,10,10,0.1)] lg:text-8xl">
                  0{index + 1}
                </p>
                <h3 className="font-display text-3xl leading-tight text-[var(--color-black)] lg:text-4xl">
                  {step.name}
                </h3>
                <p className="text-lg leading-9 text-[var(--color-copy)]">{step.body}</p>
              </div>
            ))}
          </div>
        </Section>
      ) : null}

      {/* Proof */}
      {data.proof ? (
        <Section
          eyebrow={data.proof.eyebrow}
          title={data.proof.title}
          description={data.proof.description}
          className="bg-[var(--color-cream)]"
        >
          {data.proof.caseStudyHref ? (
            <Link
              href={data.proof.caseStudyHref}
              className="group block rounded-[32px] border border-[rgba(200,169,110,0.45)] bg-[linear-gradient(135deg,rgba(10,10,10,0.97),rgba(31,41,51,0.97))] p-8 text-white shadow-[0_24px_60px_rgba(10,10,10,0.14)] transition hover:-translate-y-0.5 md:p-10"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]">
                Featured case study
              </p>
              <h3 className="mt-4 max-w-2xl font-display text-3xl leading-tight md:text-4xl">
                {data.proof.caseStudyLabel ?? "Read the case study"}
              </h3>
              {data.proof.metrics && data.proof.metrics.length > 0 ? (
                <div
                  className={`mt-8 grid gap-3 ${
                    data.proof.metrics.length === 2
                      ? "sm:grid-cols-2"
                      : data.proof.metrics.length === 4
                        ? "sm:grid-cols-2 lg:grid-cols-4"
                        : "sm:grid-cols-3"
                  }`}
                >
                  {data.proof.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-[22px] border border-white/10 bg-white/[0.04] px-4 py-4"
                    >
                      <p className="font-display text-3xl text-white">{metric.value}</p>
                      <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/54">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}
              <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold)]">
                Read the case study →
              </p>
            </Link>
          ) : data.proof.metrics && data.proof.metrics.length > 0 ? (
            <div
              className={`grid gap-3 ${
                data.proof.metrics.length === 2
                  ? "sm:grid-cols-2"
                  : data.proof.metrics.length === 4
                    ? "sm:grid-cols-2 lg:grid-cols-4"
                    : "sm:grid-cols-3"
              }`}
            >
              {data.proof.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-[24px] border border-[var(--color-line)] bg-white px-5 py-5"
                >
                  <p className="font-display text-3xl text-[var(--color-black)]">{metric.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[var(--color-meta)]">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          ) : null}
        </Section>
      ) : null}

      {/* Outcome */}
      {data.outcome ? (
        <Section
          eyebrow={data.outcome.eyebrow}
          title={data.outcome.title}
          description={data.outcome.description}
        >
          {data.outcome.outcomes && data.outcome.outcomes.length > 0 ? (
            <ul className="grid gap-3 md:grid-cols-2">
              {data.outcome.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="flex gap-3 rounded-[22px] border border-[rgba(200,169,110,0.3)] bg-white px-5 py-4 text-base leading-8 text-[var(--color-copy)]"
                >
                  <span className="mt-[0.55em] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-gold)]" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </Section>
      ) : null}

      {/* Local proof callout */}
      {data.localProof ? (
        <section className="bg-[var(--color-cream)] px-5 py-12 md:px-8">
          <div className="mx-auto max-w-[1200px]">
            <div className="rounded-[28px] border border-[rgba(200,169,110,0.35)] bg-white p-7 shadow-[0_14px_40px_rgba(10,10,10,0.05)] md:p-9">
              {data.localProof.eyebrow ? (
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]">
                  {data.localProof.eyebrow}
                </p>
              ) : null}
              <h3 className="mt-3 max-w-3xl font-display text-2xl leading-tight text-[var(--color-black)] md:text-3xl">
                {data.localProof.title}
              </h3>
              <p className="mt-3 max-w-3xl text-base leading-8 text-[var(--color-copy)]">
                {data.localProof.body}
              </p>
            </div>
          </div>
        </section>
      ) : null}

      {/* FAQ */}
      {data.faq ? (
        <Section
          eyebrow={data.faq.eyebrow}
          title={data.faq.title}
        >
          <div className="divide-y divide-[var(--color-line)]">
            {data.faq.items.map((item) => (
              <div
                key={item.question}
                className="grid gap-4 py-8 first:pt-0 last:pb-0 lg:grid-cols-[1fr_2fr] lg:gap-16"
              >
                <h3 className="font-display text-xl leading-tight text-[var(--color-black)] lg:text-2xl">
                  {item.question}
                </h3>
                <p className="text-base leading-8 text-[var(--color-copy)]">{item.answer}</p>
              </div>
            ))}
          </div>
        </Section>
      ) : null}

      {/* Related */}
      {data.related && data.related.length > 0 ? (
        <RelatedLinks tone="light" heading="Explore further" items={data.related} />
      ) : null}

      {/* CTA */}
      <section className="bg-[var(--color-black)] px-5 py-16 text-white md:px-8 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="rounded-[36px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-8 md:p-12">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                {data.cta.eyebrow ? (
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]">
                    {data.cta.eyebrow}
                  </p>
                ) : null}
                <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
                  {data.cta.title}
                </h2>
                {data.cta.description ? (
                  <p className="mt-5 text-lg leading-8 text-white/72">{data.cta.description}</p>
                ) : null}
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <ButtonLink href={data.cta.primary.href}>{data.cta.primary.label}</ButtonLink>
                {data.cta.secondary ? (
                  <Link
                    href={data.cta.secondary.href}
                    className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
                  >
                    {data.cta.secondary.label}
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
