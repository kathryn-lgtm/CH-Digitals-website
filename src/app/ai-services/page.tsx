import type { Metadata } from "next";
import { DemoForm } from "@/components/site/demo-form";
import { ButtonLink } from "@/components/site/button-link";
import { PageShell } from "@/components/site/page-shell";
import { Section } from "@/components/site/section";
import { TypewriterHeading } from "@/components/site/typewriter-heading";
import { aiBuildSteps, aiServices, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "AI Services",
  description:
    "CH Digitals builds AI agents, automation systems, lead follow-up workflows, and custom AI integrations for small and medium businesses.",
  alternates: {
    canonical: "/ai-services",
  },
};

export default function AiServicesPage() {
  return (
    <PageShell>
      <section className="bg-[var(--color-black)] px-5 py-16 text-white md:px-8 md:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]">
              CH Digitals · AI Services
            </p>
            <TypewriterHeading
              lines={[
                "Your competitors",
                "are figuring out AI.",
                "You should already",
                "be using it.",
              ]}
            />
            <p className="reveal-up reveal-delay-1 max-w-xl text-lg leading-8 text-white/72">
              We build custom AI agents and automation systems for small and medium businesses - so you stop doing work a machine could handle and start doing the work only you can.
            </p>
            <div className="reveal-up reveal-delay-2 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href={siteConfig.bookingUrl}>Book a Strategy Session</ButtonLink>
              <a
                href="#demo"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
              >
                Try the Demo
              </a>
            </div>
          </div>
          <div className="reveal-up reveal-delay-3">
            <DemoForm />
          </div>
        </div>
      </section>

      <Section
        eyebrow="What It Means"
        title="Not hype. Actual automation that saves real hours."
        description="AI agents are software that can think, decide, and act on your behalf inside your existing systems. The point is not novelty. The point is operational value."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {aiServices.map((service, index) => (
            <article
              key={service.title}
              className={`reveal-up relative overflow-hidden rounded-[30px] border p-8 shadow-[0_18px_50px_rgba(10,10,10,0.06)] ${
                index % 2 === 0
                  ? "border-[rgba(31,41,51,0.14)] bg-[linear-gradient(180deg,rgba(31,41,51,0.98),rgba(17,24,29,0.98))] text-white"
                  : "border-[rgba(200,169,110,0.32)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(245,243,239,0.98))]"
              }`}
            >
              <div
                className={`pointer-events-none absolute inset-x-0 top-0 h-px ${
                  index % 2 === 0
                    ? "bg-[linear-gradient(90deg,rgba(200,169,110,0),rgba(200,169,110,0.9),rgba(101,148,154,0.5),rgba(200,169,110,0))]"
                    : "bg-[linear-gradient(90deg,rgba(200,169,110,0),rgba(200,169,110,0.72),rgba(200,169,110,0))]"
                }`}
              />
              <div className="mb-6 flex items-center justify-between gap-4">
                <p
                  className={`font-mono text-[11px] uppercase tracking-[0.24em] ${
                    index % 2 === 0 ? "text-[var(--color-gold)]" : "text-[var(--color-meta)]"
                  }`}
                >
                  AI capability 0{index + 1}
                </p>
                <span
                  className={`inline-flex rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] ${
                    index % 2 === 0
                      ? "border-white/10 bg-white/5 text-white/55"
                      : "border-[rgba(200,169,110,0.24)] bg-white/65 text-[var(--color-meta)]"
                  }`}
                >
                  Live system
                </span>
              </div>
              <h2
                className={`max-w-[18ch] font-display text-3xl leading-tight ${
                  index % 2 === 0 ? "text-white" : "text-[var(--color-black)]"
                }`}
              >
                {service.title}
              </h2>
              <p
                className={`mt-5 max-w-[34rem] text-base leading-8 ${
                  index % 2 === 0 ? "text-white/72" : "text-[var(--color-copy)]"
                }`}
              >
                {service.body}
              </p>
              <div className="mt-8 flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-gold)] shadow-[0_0_18px_rgba(200,169,110,0.45)]" />
                <span
                  className={`text-[10px] font-semibold uppercase tracking-[0.24em] ${
                    index % 2 === 0 ? "text-white/46" : "text-[var(--color-meta)]"
                  }`}
                >
                  Built for operational value
                </span>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Live Demo"
        title="See what AI could do for your business."
        description="Describe your business or your biggest operational challenge in a sentence or two. The demo returns three specific automation opportunities tied to business value."
        className="bg-[var(--color-cream)]"
      >
        <div id="demo" className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="reveal-up rounded-[28px] border border-[var(--color-line)] bg-white p-8">
            <h2 className="font-display text-3xl text-[var(--color-black)]">
              What the demo is for
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-copy)]">
              This is not a generic chatbot. It is a guided opportunity mapper designed to show where AI could remove repetitive work, speed up response time, or tighten follow-up inside a small business.
            </p>
          </div>
          <div className="reveal-up reveal-delay-1">
            <DemoForm />
          </div>
        </div>
      </Section>

      <Section
        eyebrow="How It Works"
        title="From 'what could AI do for us?' to live and working - in weeks, not months."
      >
        <div className="relative">
          <div className="pointer-events-none absolute left-[11%] right-[11%] top-12 hidden h-px bg-[linear-gradient(90deg,rgba(200,169,110,0),rgba(200,169,110,0.55),rgba(101,148,154,0.42),rgba(200,169,110,0))] lg:block" />
          <div className="grid gap-6 md:grid-cols-3">
            {aiBuildSteps.map((step, index) => (
              <article
                key={step.title}
                className={`group reveal-up relative overflow-hidden rounded-[30px] border p-8 shadow-[0_18px_50px_rgba(10,10,10,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(10,10,10,0.1)] ${
                  index === 1
                    ? "border-[rgba(31,41,51,0.14)] bg-[linear-gradient(180deg,rgba(31,41,51,0.98),rgba(17,24,29,0.98))]"
                    : "border-[rgba(200,169,110,0.26)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(245,243,239,0.98))]"
                }`}
              >
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-px ${
                    index === 1
                      ? "bg-[linear-gradient(90deg,rgba(200,169,110,0),rgba(200,169,110,0.9),rgba(101,148,154,0.5),rgba(200,169,110,0))]"
                      : "bg-[linear-gradient(90deg,rgba(200,169,110,0),rgba(200,169,110,0.7),rgba(200,169,110,0))]"
                  }`}
                />
                <div className="mb-6 flex items-center justify-between gap-4">
                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.28em] ${
                      index === 1 ? "text-[var(--color-gold)]" : "text-[var(--color-meta)]"
                    }`}
                  >
                    0{index + 1}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-gold)] shadow-[0_0_16px_rgba(200,169,110,0.45)] transition duration-300 group-hover:scale-125" />
                    <span
                      className={`font-mono text-[10px] uppercase tracking-[0.22em] ${
                        index === 1 ? "text-white/48" : "text-[var(--color-meta)]"
                      }`}
                    >
                      {index === 0 ? "signal found" : index === 1 ? "system build" : "learning live"}
                    </span>
                  </div>
                </div>
                <h2
                  className={`font-display text-3xl leading-tight ${
                    index === 1 ? "text-white" : "text-[var(--color-black)]"
                  }`}
                >
                  {step.title}
                </h2>
                <p
                  className={`mt-4 text-base leading-8 ${
                    index === 1 ? "text-white/72" : "text-[var(--color-copy)]"
                  }`}
                >
                  {step.body}
                </p>
                <div className="mt-8 flex items-center justify-between">
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-[0.24em] ${
                      index === 1 ? "text-[var(--color-gold)]" : "text-[var(--color-meta)]"
                    }`}
                  >
                    {index === 0 ? "Map and prioritise" : index === 1 ? "Build and connect" : "Deploy and refine"}
                  </span>
                  <span
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-full border text-sm transition duration-300 group-hover:translate-x-0.5 ${
                      index === 1
                        ? "border-white/10 bg-white/5 text-[var(--color-gold)]"
                        : "border-[rgba(200,169,110,0.26)] bg-white/70 text-[var(--color-gold)]"
                    }`}
                  >
                    →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
