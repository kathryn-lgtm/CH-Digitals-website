import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/site/button-link";
import { PageShell } from "@/components/site/page-shell";
import { Section } from "@/components/site/section";
import {
  caseStudies,
  clientLogos,
  frameworkSteps,
  heroContent,
  pillars,
  positioning,
  siteConfig,
  stats,
  testimonials,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Home",
  description:
    "CH Digitals builds websites, systems, and AI automation for regional Queensland businesses ready to reduce admin, improve conversion, and grow with better digital infrastructure.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const pillarLinks = [
    { href: "/services", label: "Explore website systems" },
    { href: "/services", label: "See systems services" },
    { href: "/services", label: "View marketing support" },
    { href: "/ai-services", label: "See AI services" },
  ];

  const featuredCaseStudy = caseStudies[0];

  return (
    <PageShell>
      <section className="relative overflow-hidden bg-[var(--color-black)] px-5 py-20 text-white md:px-8 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,169,110,0.14),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(58,119,134,0.12),transparent_35%)]" />
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left — headline and CTAs */}
          <div className="space-y-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-gold)]">
              {heroContent.eyebrow}
            </p>
            <div className="space-y-7">
              <h1 className="reveal-up max-w-3xl font-display text-5xl leading-none tracking-[-0.03em] md:text-7xl">
                {heroContent.title}
              </h1>
              <p className="reveal-up reveal-delay-1 max-w-xl text-lg leading-9 text-white/70 md:text-xl">
                {heroContent.body}
              </p>
            </div>
            <div className="reveal-up reveal-delay-2 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href={siteConfig.bookingUrl}>Book a Strategy Session</ButtonLink>
              <ButtonLink href="/work" variant="secondary" className="border-white/30 text-white">
                See Our Work
              </ButtonLink>
            </div>
            <div className="grid gap-3 pt-2 sm:grid-cols-3">
              <Link
                href="/services"
                className="rounded-[22px] border border-white/10 bg-white/[0.04] px-4 py-4 transition hover:-translate-y-0.5 hover:border-[var(--color-gold)] hover:bg-white/[0.06]"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold)]">
                  Core services
                </p>
                <p className="mt-2 text-sm leading-7 text-white/70">
                  Website, marketing, systems, and support built to work together.
                </p>
              </Link>
              <Link
                href="/ai-services"
                className="rounded-[22px] border border-white/10 bg-white/[0.04] px-4 py-4 transition hover:-translate-y-0.5 hover:border-[var(--color-gold)] hover:bg-white/[0.06]"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold)]">
                  AI services
                </p>
                <p className="mt-2 text-sm leading-7 text-white/70">
                  Practical automation and AI systems designed for small business.
                </p>
              </Link>
              <Link
                href="/work/dermagen"
                className="rounded-[22px] border border-white/10 bg-white/[0.04] px-4 py-4 transition hover:-translate-y-0.5 hover:border-[var(--color-gold)] hover:bg-white/[0.06]"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold)]">
                  Proven results
                </p>
                <p className="mt-2 text-sm leading-7 text-white/70">
                  See the DermaGen case study and the kind of system-level work behind it.
                </p>
              </Link>
            </div>
          </div>
          {/* Right — Kathryn photo */}
          <div className="relative hidden lg:block">
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
              <Image
                src="/images/founder/kathryn-about-fresh.jpg"
                alt="Kathryn Weekley — founder of CH Digitals"
                width={600}
                height={700}
                className="h-[580px] w-full object-cover object-[center_25%]"
                priority
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.55)_0%,transparent_50%)]" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-gold)]">
                  Kathryn Weekley
                </p>
                <p className="mt-1 text-sm leading-6 text-white/80">
                  Founder · CH Digitals · Central Highlands, Queensland
                </p>
              </div>
            </div>
            {/* Floating stat */}
            <Link href="/work/dermagen" className="absolute -left-8 top-10 rounded-[20px] border border-white/10 bg-black/80 px-5 py-4 backdrop-blur-xl shadow-[0_18px_40px_rgba(0,0,0,0.4)] transition hover:border-[var(--color-gold)]">
              <p className="font-display text-3xl text-white">$592K+</p>
              <p className="mt-1 text-xs text-white/60">Generated for 1 client</p>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)]">Read case study →</p>
            </Link>
            <div className="absolute -right-6 bottom-24 rounded-[20px] border border-white/10 bg-black/80 px-5 py-4 backdrop-blur-xl shadow-[0_18px_40px_rgba(0,0,0,0.4)]">
              <p className="font-display text-3xl text-white">30+</p>
              <p className="mt-1 text-xs text-white/60">Active clients</p>
            </div>
          </div>
        </div>
      </section>

      <Section title={positioning.title} description={positioning.body} className="bg-[var(--color-cream)]">
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <Link
            href="/services"
            className="group rounded-[34px] border border-[rgba(200,169,110,0.35)] bg-[linear-gradient(135deg,rgba(10,10,10,0.97),rgba(31,41,51,0.97))] p-8 text-white shadow-[0_24px_60px_rgba(10,10,10,0.12)] transition hover:-translate-y-0.5 hover:shadow-[0_30px_70px_rgba(10,10,10,0.16)] md:p-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]">
              What changes
            </p>
            <h3 className="mt-5 max-w-xl font-display text-4xl leading-tight md:text-5xl">
              Better systems. Less admin. More room to grow.
            </h3>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/74">
              The point is not a prettier website alone. The point is a cleaner digital operation that brings strategy, automation, and delivery into one working system.
            </p>
            <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold)]">
              Explore the service stack
            </p>
          </Link>
          <div className="grid gap-4">
            {stats.map((stat, index) => (
              <Link
                key={stat.value}
                href={index === 0 ? "/about" : index === 1 ? "/work" : "/services"}
                className="group rounded-[28px] border border-[rgba(10,10,10,0.08)] bg-white/92 px-6 py-6 shadow-[0_14px_35px_rgba(10,10,10,0.04)] transition hover:-translate-y-0.5 hover:border-[var(--color-gold)] hover:bg-white"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-display text-5xl leading-none text-[var(--color-black)]">
                      {stat.value}
                    </p>
                    <p className="mt-3 max-w-[24ch] text-sm leading-7 text-[var(--color-copy)]">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Section
        title="A four-phase framework designed to remove guesswork."
        description="Every engagement follows the same process. It is structured to surface what matters, build the right system, and keep it working long after launch."
      >
        <div className="relative">
          <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-[linear-gradient(90deg,rgba(200,169,110,0),rgba(200,169,110,0.5),rgba(200,169,110,0))] lg:block" />
          <div className="grid gap-6 lg:grid-cols-4">
          {frameworkSteps.map((step, index) => (
            <div
              key={step.name}
              className={`relative overflow-hidden rounded-[30px] border p-8 shadow-[0_18px_50px_rgba(10,10,10,0.06)] ${
                index % 2 === 0
                  ? "border-[rgba(200,169,110,0.36)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(245,243,239,0.98))]"
                  : "border-[rgba(31,41,51,0.12)] bg-[linear-gradient(180deg,rgba(31,41,51,0.98),rgba(17,24,29,0.98))]"
              }`}
            >
              <div
                className={`pointer-events-none absolute inset-x-0 top-0 h-1 ${
                  index % 2 === 0
                    ? "bg-[linear-gradient(90deg,rgba(200,169,110,0.82),rgba(200,169,110,0.22))]"
                    : "bg-[linear-gradient(90deg,rgba(200,169,110,0.9),rgba(101,148,154,0.3))]"
                }`}
              />
              <div className="mb-6">
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.28em] ${
                    index % 2 === 0 ? "text-[var(--color-meta)]" : "text-[var(--color-gold)]"
                  }`}
                >
                0{index + 1}
                </p>
              </div>
              <h3
                className={`mb-4 font-display text-3xl ${
                  index % 2 === 0 ? "text-[var(--color-black)]" : "text-white"
                }`}
              >
                {step.name}
              </h3>
              <p
                className={`text-base leading-8 ${
                  index % 2 === 0 ? "text-[var(--color-copy)]" : "text-white/74"
                }`}
              >
                {step.body}
              </p>
            </div>
          ))}
          </div>
        </div>
      </Section>

      <Section
        title="Trusted by regional businesses building something real."
        description="The work spans skincare, agriculture, trades, education, media, and service businesses across Queensland and beyond."
        className="bg-[var(--color-cream)]"
      >
        <div className="space-y-8">
          <Link
            href="/work/dermagen"
            className="group block rounded-[34px] border border-[rgba(200,169,110,0.45)] bg-[linear-gradient(135deg,rgba(10,10,10,0.97),rgba(31,41,51,0.97))] p-8 text-white shadow-[0_24px_60px_rgba(10,10,10,0.14)] transition hover:-translate-y-0.5 hover:shadow-[0_30px_75px_rgba(10,10,10,0.2)] md:p-10"
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]">
                  Featured case study
                </p>
                <h3 className="mt-4 max-w-xl font-display text-3xl leading-tight md:text-4xl">
                  {featuredCaseStudy.headline}
                </h3>
              </div>
            </div>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/74">
              {featuredCaseStudy.story}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {featuredCaseStudy.metrics.slice(0, 3).map((metric) => (
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
            <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold)]">
              Read the DermaGen case study
            </p>
          </Link>

          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial, index) =>
              testimonial.href ? (
              <Link
                key={`${testimonial.author}-${testimonial.company}`}
                href={testimonial.href}
                className="rounded-[28px] border border-[rgba(200,169,110,0.3)] bg-white p-7 shadow-[0_18px_45px_rgba(10,10,10,0.07)] transition hover:-translate-y-0.5 hover:border-[var(--color-gold)] hover:shadow-[0_20px_50px_rgba(10,10,10,0.1)]"
              >
                <p className="text-base leading-8 text-[var(--color-copy)]">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="mt-8 flex items-end justify-between gap-4 border-t border-[var(--color-line)] pt-5">
                  <div>
                    <p className="font-semibold text-[var(--color-black)]">{testimonial.author}</p>
                    {testimonial.company ? (
                      <p className="mt-1 text-sm text-[var(--color-meta)]">{testimonial.company}</p>
                    ) : null}
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)]">
                    View proof
                  </span>
                </div>
              </Link>
              ) : (
              <article
                key={`${testimonial.author}-${testimonial.company}`}
                className={`rounded-[28px] border p-7 ${
                  index % 2 === 0
                    ? "border-[rgba(10,10,10,0.08)] bg-white shadow-[0_18px_45px_rgba(10,10,10,0.05)]"
                    : "border-[rgba(10,10,10,0.08)] bg-[rgba(255,255,255,0.72)] backdrop-blur-sm"
                }`}
              >
                <p className="text-base leading-8 text-[var(--color-copy)]">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="mt-8 border-t border-[var(--color-line)] pt-5">
                  <p className="font-semibold text-[var(--color-black)]">{testimonial.author}</p>
                  {testimonial.company ? (
                    <p className="mt-1 text-sm text-[var(--color-meta)]">{testimonial.company}</p>
                  ) : null}
                </div>
              </article>
              )
            )}
          </div>

          <div className="space-y-5">
              <div className="rounded-[30px] border border-[rgba(10,10,10,0.08)] bg-[rgba(255,255,255,0.62)] p-6 shadow-[0_18px_45px_rgba(10,10,10,0.05)] backdrop-blur-sm md:p-8">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]">
                      Client roster
                    </p>
                    <h3 className="mt-4 font-display text-3xl leading-tight text-[var(--color-black)]">
                      Brands we have helped build online.
                    </h3>
                  </div>
                </div>
                <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--color-copy)]">
                  From skincare to agriculture, trades to media — regional businesses building something real.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {clientLogos.map((logo, index) =>
                  logo.href ? (
                  <Link
                    key={logo.name}
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex min-h-32 items-center justify-center rounded-[24px] border border-[rgba(10,10,10,0.08)] bg-white p-5 transition hover:-translate-y-0.5 hover:border-[var(--color-gold)] hover:shadow-[0_18px_45px_rgba(10,10,10,0.08)]"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={220}
                      height={110}
                      className="h-auto max-h-18 w-auto max-w-full object-contain transition group-hover:scale-[1.02]"
                    />
                  </Link>
                  ) : (
                  <div
                    key={logo.name}
                    className={`group flex min-h-32 items-center justify-center rounded-[24px] border p-5 ${
                      index % 3 === 0
                        ? "border-[rgba(200,169,110,0.18)] bg-[rgba(255,255,255,0.78)]"
                        : index % 3 === 1
                          ? "border-[rgba(10,10,10,0.06)] bg-[rgba(245,243,239,0.94)]"
                          : "border-[rgba(31,41,51,0.08)] bg-[rgba(255,255,255,0.68)]"
                    }`}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={220}
                      height={110}
                      className="h-auto max-h-18 w-auto max-w-full object-contain"
                    />
                  </div>
                  )
                )}
              </div>
            </div>
        </div>
      </Section>

      <Section
        title="Built in regional Queensland, with a bias for systems that do real work."
        description="CH Digitals exists because capable businesses should not be held back by weak websites, disconnected tools, or digital work that creates more admin instead of removing it."
      >
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div className="relative">
            <div className="relative h-[520px] overflow-hidden rounded-[32px] border border-[rgba(200,169,110,0.28)] bg-[var(--color-cream)] shadow-[0_30px_80px_rgba(10,10,10,0.08)] md:h-[580px] lg:h-[640px]">
              <Image
                src="/images/founder/kathryn-home-founder.jpg"
                alt="Kathryn smiling while working at a desk"
                width={768}
                height={1024}
                className="h-full w-full object-cover object-[48%_42%]"
              />
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-[22px] border border-[var(--color-line)] bg-[var(--color-cream)] px-4 py-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-meta)]">
                  Experience
                </p>
                <p className="mt-2 font-display text-3xl text-[var(--color-black)]">7 years</p>
              </div>
              <div className="rounded-[22px] border border-[var(--color-line)] bg-[var(--color-cream)] px-4 py-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-meta)]">
                  Active clients
                </p>
                <p className="mt-2 font-display text-3xl text-[var(--color-black)]">30+</p>
              </div>
              <div className="rounded-[22px] border border-[var(--color-line)] bg-[var(--color-cream)] px-4 py-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-meta)]">
                  Base
                </p>
                <p className="mt-2 font-display text-3xl text-[var(--color-black)]">QLD</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]">
              Hi, I&apos;m Kathryn.
            </p>
            <p className="max-w-2xl text-xl leading-9 text-[var(--color-copy)]">
              I&apos;ve spent seven years helping businesses in the Central Highlands and beyond build digital systems that actually do something. Not just look good. Do something.
            </p>
            <div className="rounded-[28px] border border-[rgba(200,169,110,0.3)] bg-[var(--color-cream)] px-6 py-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold)]">
                Why CH Digitals exists
              </p>
              <p className="mt-3 text-lg leading-8 text-[var(--color-copy)]">
                I started CH Digitals because I kept watching good businesses struggle with bad digital systems: websites that did not convert, tools that did not talk to each other, and marketing that ran on hope.
              </p>
            </div>
            <p className="text-lg leading-8 text-[var(--color-copy)]">
              Today I work with 30+ businesses across Queensland, building the systems that let them focus on the work they are actually good at and increasingly building with AI because the window to move early is right now.
            </p>
            <p className="text-lg leading-8 text-[var(--color-copy)]">
              The work is strategic, but it stays human. Clear language. Better systems. Less wasted effort.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href="/about"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[var(--color-line)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--color-black)] transition hover:border-[var(--color-gold)] hover:text-[var(--color-black)]"
              >
                Read more about Kathryn
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[var(--color-line)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--color-black)] transition hover:border-[var(--color-gold)] hover:text-[var(--color-black)]"
              >
                Start a conversation
              </Link>
            </div>
            <div className="flex flex-wrap gap-3 pt-1">
              <span className="rounded-full border border-[rgba(200,169,110,0.34)] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(245,243,239,0.95))] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-black)] shadow-[0_14px_30px_rgba(10,10,10,0.05),inset_0_1px_0_rgba(255,255,255,0.9)]">
                Shopify Partner
              </span>
              <span className="rounded-full border border-[rgba(200,169,110,0.34)] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(245,243,239,0.95))] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-black)] shadow-[0_14px_30px_rgba(10,10,10,0.05),inset_0_1px_0_rgba(255,255,255,0.9)]">
                HubSpot Certified
              </span>
              <span className="rounded-full border border-[rgba(200,169,110,0.34)] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(245,243,239,0.95))] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-black)] shadow-[0_14px_30px_rgba(10,10,10,0.05),inset_0_1px_0_rgba(255,255,255,0.9)]">
                Klaviyo Certified
              </span>
            </div>
          </div>
        </div>
      </Section>

      <section className="bg-[var(--color-black)] px-5 py-16 text-white md:px-8 md:py-24">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-8 rounded-[36px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-8 md:flex-row md:items-end md:justify-between md:p-12">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]">
              Ready to stop patching and start building?
            </p>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Book a free strategy session and map what actually needs to change.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/74">
              We&apos;ll look at what you have, identify what is holding you back, and outline what a stronger digital system should look like.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <ButtonLink href={siteConfig.bookingUrl}>Book a Strategy Session</ButtonLink>
            <Link
              href="/services"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
            >
              Explore services
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
