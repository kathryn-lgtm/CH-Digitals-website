import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/site/page-shell";
import { Section } from "@/components/site/section";
import { ButtonLink } from "@/components/site/button-link";
import { ScrollReveal } from "@/components/site/scroll-reveal";
import {
  pricingCategories,
  pricingTerms,
  retainerTiers,
  services,
  siteConfig,
  testimonials,
} from "@/lib/site-data";

function fmtAUD(n: number): string {
  return n.toLocaleString("en-AU", { style: "currency", currency: "AUD", maximumFractionDigits: 0 });
}

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore CH Digitals services across website design, marketing systems, social media, e-commerce, business integrations, and ongoing digital support.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-[var(--color-cream)] px-5 py-16 md:px-8 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,169,110,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(31,41,51,0.1),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="space-y-6 reveal-up">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-meta)]">
              Services
            </p>
            <h1 className="max-w-4xl font-display text-5xl leading-tight text-[var(--color-black)] md:text-7xl">
              Everything your business needs online. Nothing it doesn&apos;t.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[var(--color-copy)]">
              We do not sell a bundle of disconnected deliverables. We build the right mix of website, systems, marketing, and automation so the business runs more cleanly and converts more consistently.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-[24px] border border-[var(--color-line)] bg-white px-5 py-5 shadow-[0_14px_35px_rgba(10,10,10,0.04)]">
                <p className="font-display text-3xl text-[var(--color-black)]">Strategy</p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-copy)]">
                  Scope shaped around what the business actually needs.
                </p>
              </div>
              <div className="rounded-[24px] border border-[var(--color-line)] bg-white px-5 py-5 shadow-[0_14px_35px_rgba(10,10,10,0.04)]">
                <p className="font-display text-3xl text-[var(--color-black)]">Systems</p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-copy)]">
                  Platforms and integrations built to work together.
                </p>
              </div>
              <div className="rounded-[24px] border border-[var(--color-line)] bg-white px-5 py-5 shadow-[0_14px_35px_rgba(10,10,10,0.04)]">
                <p className="font-display text-3xl text-[var(--color-black)]">Support</p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-copy)]">
                  Ongoing guidance instead of launch-and-disappear delivery.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[36px] border border-[var(--color-line)] bg-white p-3 shadow-[0_30px_90px_rgba(10,10,10,0.08)] reveal-up reveal-delay-2">
            <div className="overflow-hidden rounded-[28px]">
              <Image
                src="/images/founder/kathryn-services.jpg"
                alt="Kathryn meeting with clients"
                width={768}
                height={1024}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="absolute bottom-6 left-6 max-w-[20rem] rounded-[24px] border border-white/10 bg-[rgba(10,10,10,0.74)] px-5 py-4 text-white backdrop-blur-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-gold)]">
                Built around fit
              </p>
              <p className="mt-2 text-sm leading-6 text-white/76">
                The right scope is the one that removes friction, sharpens the offer, and gives the business cleaner infrastructure to grow on.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--color-black)] px-5 pb-24 pt-18 text-white md:px-8 md:pb-28 md:pt-24">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(200,169,110,0.08),transparent_26%),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:100%_100%,80px_80px]" />
        <div className="relative mx-auto max-w-[1200px]">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="space-y-5 reveal-up">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]">
                Service Architecture
              </p>
              <h2 className="max-w-2xl font-display text-4xl leading-tight md:text-5xl">
                Strategy, systems, and execution built as one stack.
              </h2>
              <p className="max-w-xl text-lg leading-8 text-white/72">
                Every service connects to the others. Website without strategy is just a brochure. Automation without systems is noise. We build the combination that fits your business — nothing more, nothing less.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["Clarity first", "Scope the right work before anything gets built."],
                ["Connected tools", "Website, CRM, content, email, and automation working together."],
                ["Long-term support", "A system you can keep improving instead of replacing."],
              ].map(([title, body], index) => (
                <div
                  key={title}
                  className={`rounded-[26px] border border-white/10 bg-white/6 p-5 backdrop-blur-sm reveal-up ${
                    index === 1 ? "reveal-delay-1" : index === 2 ? "reveal-delay-2" : ""
                  }`}
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-gold)]">
                    {title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/72">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section
        title="Core services built around systems, not one-off fixes."
        description="Each engagement is designed to reduce manual workload, remove digital clutter, and make the business easier to run."
        className="relative -mt-12 md:-mt-18"
      >
        <div className="relative grid gap-6">
          <div className="pointer-events-none absolute bottom-0 left-[2.2rem] top-0 hidden w-px bg-[linear-gradient(180deg,rgba(200,169,110,0),rgba(200,169,110,0.5),rgba(200,169,110,0))] lg:block" />
          {services.map((service, index) => (
            <ScrollReveal
              key={service.title}
              delayMs={index * 70}
              className={`${
                index % 2 === 0 ? "lg:translate-x-6" : "lg:-translate-x-2"
              }`}
            >
              <article className="relative overflow-hidden rounded-[34px] border border-[rgba(200,169,110,0.65)] bg-white p-8 shadow-[0_24px_70px_rgba(10,10,10,0.08)] lg:p-10">
                <div className="pointer-events-none absolute inset-y-0 left-0 w-[min(31%,250px)] bg-[linear-gradient(135deg,rgba(200,169,110,0.11),rgba(200,169,110,0.02)_55%,transparent)]" />
                <div className="pointer-events-none absolute left-6 top-6 h-14 w-1 rounded-full bg-[linear-gradient(180deg,var(--color-gold),rgba(200,169,110,0.12))]" />
                <div className="relative grid gap-8 lg:grid-cols-[0.62fr_1.38fr] xl:grid-cols-[0.58fr_1.42fr]">
                  <div className="space-y-4 pl-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-meta)]">
                      0{index + 1} Service
                    </p>
                    <h2 className="max-w-[18rem] font-display text-4xl leading-tight text-[var(--color-black)]">
                      {service.title}
                    </h2>
                    <p className="max-w-[18rem] text-lg leading-8 text-[var(--color-copy)]">
                      {service.summary}
                    </p>
                    <div className="inline-flex rounded-full border border-[var(--color-line)] bg-[var(--color-cream)]/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-meta)]">
                      Built to remove friction
                    </div>
                  </div>
                  <div className="space-y-6 border-t border-[rgba(10,10,10,0.06)] pt-1 lg:border-l lg:border-t-0 lg:pl-9 lg:pt-0">
                    <p className="max-w-[44rem] text-base leading-8 text-[var(--color-copy)]">
                      {service.body}
                    </p>
                    <div className="grid gap-3 md:grid-cols-2">
                      {service.items.map((item) => (
                        <div
                          key={item}
                          className="relative rounded-[22px] border border-[rgba(200,169,110,0.2)] bg-[linear-gradient(180deg,rgba(31,41,51,0.98),rgba(17,24,29,0.98))] px-4 py-4 pl-10 text-sm leading-7 text-white/84 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                        >
                          <span className="absolute left-4 top-5 h-2.5 w-2.5 rounded-full bg-[var(--color-gold)]" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="How We Engage"
        title="Transparent ranges. Scope built around your business."
        description="Every engagement starts with a conversation about what is actually holding the business back. Pricing below is published openly so you can self-qualify before we talk."
        className="bg-[var(--color-cream)]"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              step: "01",
              title: "Free strategy session",
              body: "We start with a 45-minute conversation. No pitch, no slides — just an honest look at what you have, what is not working, and what a stronger system would look like. Free, no obligation.",
              cta: "Book your session",
              href: siteConfig.bookingUrl,
              highlight: true,
            },
            {
              step: "02",
              title: "Scoped to your situation",
              body: "After the session, we map out what should be built, in what order, and at what investment. The scope reflects your actual needs — not a predetermined package with services you do not need.",
              cta: null,
              href: null,
              highlight: false,
            },
            {
              step: "03",
              title: "Build, launch, keep improving",
              body: "We build what we agreed. You go live with confidence. Then we stay close — monthly check-ins, performance reviews, and proactive recommendations as the business grows.",
              cta: null,
              href: null,
              highlight: false,
            },
          ].map((item) => (
            <div
              key={item.step}
              className={`relative overflow-hidden rounded-[30px] border p-8 ${
                item.highlight
                  ? "border-[rgba(200,169,110,0.5)] bg-[linear-gradient(180deg,rgba(10,10,10,0.98),rgba(31,41,51,0.98))] text-white shadow-[0_24px_60px_rgba(10,10,10,0.14)]"
                  : "border-[rgba(10,10,10,0.08)] bg-white shadow-[0_14px_40px_rgba(10,10,10,0.05)]"
              }`}
            >
              <div
                className={`pointer-events-none absolute inset-x-0 top-0 h-1 ${
                  item.highlight
                    ? "bg-[linear-gradient(90deg,rgba(200,169,110,0.9),rgba(101,148,154,0.3))]"
                    : "bg-[linear-gradient(90deg,rgba(200,169,110,0.4),rgba(200,169,110,0.05))]"
                }`}
              />
              <p className={`text-xs font-semibold uppercase tracking-[0.28em] ${item.highlight ? "text-[var(--color-gold)]" : "text-[var(--color-meta)]"}`}>
                {item.step}
              </p>
              <h3 className={`mt-5 font-display text-2xl leading-tight ${item.highlight ? "text-white" : "text-[var(--color-black)]"}`}>
                {item.title}
              </h3>
              <p className={`mt-4 text-base leading-8 ${item.highlight ? "text-white/74" : "text-[var(--color-copy)]"}`}>
                {item.body}
              </p>
              {item.cta && item.href ? (
                <div className="mt-8">
                  <ButtonLink href={item.href}>{item.cta}</ButtonLink>
                </div>
              ) : null}
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-[28px] border border-[rgba(200,169,110,0.28)] bg-[rgba(255,255,255,0.72)] p-7 backdrop-blur-sm md:p-9">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]">
                What to expect
              </p>
              <p className="mt-3 max-w-2xl text-lg leading-8 text-[var(--color-copy)]">
                Custom scope. Clear timelines. No disappearing after launch. Most clients stay long-term because the work keeps producing returns — not because they are locked in.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <ButtonLink href={siteConfig.bookingUrl}>Book a Strategy Session</ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Pricing"
        title="Transparent ranges. Tailored quotes."
        description="Every engagement is custom-scoped, but here's what most clients invest. Final pricing is confirmed in writing after your free strategy session."
        className="bg-white"
      >
        <div id="pricing" className="scroll-mt-24" />
        <div className="space-y-6">
          {pricingCategories.map((cat) => (
            <article
              key={cat.key}
              className="rounded-[28px] border border-[rgba(10,10,10,0.08)] bg-white p-7 shadow-[0_14px_40px_rgba(10,10,10,0.05)] md:p-9"
            >
              <div className="grid gap-6 lg:grid-cols-[0.45fr_1.55fr] lg:items-start">
                <div>
                  <h3 className="font-display text-2xl leading-tight text-[var(--color-black)] md:text-3xl">
                    {cat.title}
                  </h3>
                  <p className="mt-3 max-w-[22rem] text-sm leading-7 text-[var(--color-copy)]">
                    {cat.summary}
                  </p>
                </div>
                <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                  {cat.tiers.map((tier) => (
                    <div
                      key={tier.label}
                      className="rounded-[20px] border border-[rgba(200,169,110,0.28)] bg-[var(--color-cream)]/70 p-5"
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-meta)]">
                        {tier.label}
                      </p>
                      <p className="mt-2 font-display text-3xl text-[var(--color-black)]">
                        from {fmtAUD(tier.from)}
                      </p>
                      <p className="mt-3 text-xs leading-6 text-[var(--color-copy)]">
                        {tier.scope}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}

          <article className="rounded-[28px] border border-[rgba(200,169,110,0.4)] bg-[linear-gradient(180deg,rgba(10,10,10,0.98),rgba(31,41,51,0.98))] p-7 text-white shadow-[0_24px_60px_rgba(10,10,10,0.14)] md:p-9">
            <div className="grid gap-6 lg:grid-cols-[0.45fr_1.55fr] lg:items-start">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]">
                  Ongoing Partnership
                </p>
                <h3 className="mt-3 font-display text-2xl leading-tight md:text-3xl">
                  Monthly retainers
                </h3>
                <p className="mt-3 max-w-[22rem] text-sm leading-7 text-white/72">
                  Stay close after launch. Hosting, updates, content, strategy — at the cadence the business actually needs.
                </p>
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                {retainerTiers.map((tier) => (
                  <div
                    key={tier.label}
                    className="rounded-[20px] border border-white/12 bg-white/[0.05] p-5"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold)]">
                      {tier.label}
                    </p>
                    <p className="mt-2 font-display text-3xl text-white">
                      from {fmtAUD(tier.monthlyFrom)}
                      <span className="ml-1 text-sm font-normal text-white/60">/ month</span>
                    </p>
                    <p className="mt-3 text-xs leading-6 text-white/70">{tier.scope}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className="rounded-[28px] border border-[rgba(10,10,10,0.08)] bg-[var(--color-cream)] p-7 md:p-9">
            <div className="grid gap-6 lg:grid-cols-[0.45fr_1.55fr] lg:items-start">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--color-meta)]">
                  How it works
                </p>
                <h3 className="mt-3 font-display text-2xl leading-tight text-[var(--color-black)] md:text-3xl">
                  What to expect on price
                </h3>
              </div>
              <div className="grid gap-3 text-sm leading-7 text-[var(--color-copy)] md:grid-cols-2">
                <div className="rounded-[18px] border border-[var(--color-line)] bg-white px-4 py-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold)]">
                    Free first step
                  </p>
                  <p className="mt-2">{pricingTerms.freeStrategySession}</p>
                </div>
                <div className="rounded-[18px] border border-[var(--color-line)] bg-white px-4 py-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold)]">
                    Payment terms
                  </p>
                  <p className="mt-2">{pricingTerms.paymentSplit} {pricingTerms.gstNote}</p>
                </div>
                <div className="rounded-[18px] border border-[var(--color-line)] bg-white px-4 py-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold)]">
                    Bundle savings
                  </p>
                  <ul className="mt-2 space-y-1">
                    {pricingTerms.bundleDiscounts.map((d) => (
                      <li key={d}>· {d}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-[18px] border border-[var(--color-line)] bg-white px-4 py-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold)]">
                    TSH members
                  </p>
                  <p className="mt-2">{pricingTerms.tshMemberDiscounts}</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </Section>

      <Section
        eyebrow="What clients say"
        title="Built on retention, not pitches."
        description="Most CH Digitals clients stay long-term because the work keeps producing returns."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={`${testimonial.author}-${index}`}
              className="rounded-[28px] border border-[rgba(10,10,10,0.08)] bg-white p-7 shadow-[0_18px_45px_rgba(10,10,10,0.05)]"
            >
              <p className="text-base leading-8 text-[var(--color-copy)]">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-8 border-t border-[var(--color-line)] pt-5">
                <p className="font-semibold text-[var(--color-black)]">{testimonial.author}</p>
                {testimonial.company ? (
                  <p className="mt-1 text-sm text-[var(--color-meta)]">{testimonial.company}</p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <section className="bg-[var(--color-black)] px-5 py-16 text-white md:px-8 md:py-24">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 rounded-[32px] border border-white/10 bg-white/5 p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]">
              Need the right mix?
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight">
              The best scope is the one that matches the business, not a template.
            </h2>
            <p className="mt-4 text-lg leading-8 text-white/72">
              If you are not sure which combination of services actually makes sense, that is exactly what the strategy session is for.
            </p>
          </div>
          <ButtonLink href={siteConfig.bookingUrl}>Book a Strategy Session</ButtonLink>
        </div>
      </section>
    </PageShell>
  );
}
