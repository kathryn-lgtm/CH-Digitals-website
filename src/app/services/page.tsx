import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/site/page-shell";
import { Section } from "@/components/site/section";
import { ButtonLink } from "@/components/site/button-link";
import { ScrollReveal } from "@/components/site/scroll-reveal";
import { services, siteConfig } from "@/lib/site-data";

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
                Straight fact: this page should feel less like a brochure and more like an operating system. That means clearer layers, stronger contrast, and services that feel connected instead of listed.
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
        eyebrow="What You Get"
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
