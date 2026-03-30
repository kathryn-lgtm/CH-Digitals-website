import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/site/page-shell";
import { Section } from "@/components/site/section";
import { ButtonLink } from "@/components/site/button-link";
import { credentials, siteConfig, values } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Kathryn and learn how CH Digitals helps regional Queensland businesses build stronger websites, clearer systems, and practical long-term digital infrastructure.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <PageShell>
      <section className="bg-[var(--color-cream)] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-meta)]">
            About Kathryn
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl leading-tight text-[var(--color-black)] md:text-7xl">
            Built in regional Queensland. Built for businesses that mean something.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-copy)]">
            CH Digitals exists because regional businesses deserve the same quality of digital infrastructure as anyone in the city - without the city price tag or city attitude.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.95fr_0.8fr] lg:items-start">
          <div className="space-y-8 reveal-up">
            <div className="max-w-3xl space-y-4">
              <h2 className="font-display text-4xl leading-tight text-[var(--color-black)] md:text-5xl">
                Hi, I&apos;m Kathryn.
              </h2>
            </div>
            <div className="max-w-2xl space-y-6">
              <p className="text-lg leading-8 text-[var(--color-copy)]">
                I&apos;ve spent seven years helping businesses in the Central Highlands and beyond build the kind of digital presence that actually does something. Not just looks good. Does something.
              </p>
              <p className="text-lg leading-8 text-[var(--color-copy)]">
                I started CH Digitals because I kept watching good businesses struggle with bad digital systems: websites that didn&apos;t convert, tools that didn&apos;t talk to each other, and marketing that ran on hope.
              </p>
              <p className="text-lg leading-8 text-[var(--color-copy)]">
                These days I work with 30+ businesses across Queensland - from trades to health, retail to professional services - building systems that let them focus on the work they are actually good at.
              </p>
              <p className="text-lg leading-8 text-[var(--color-copy)]">
                I&apos;m a Shopify Partner, HubSpot Certified, and Klaviyo Certified - but more importantly, I&apos;ve been doing this long enough to know what works, what doesn&apos;t, and how to tell the difference before budget gets wasted.
              </p>
            </div>
          </div>
          <div className="lg:pt-4 reveal-up reveal-delay-2">
            <div className="h-[500px] overflow-hidden rounded-[32px] border border-[rgba(200,169,110,0.22)] shadow-[0_25px_80px_rgba(10,10,10,0.08)] md:h-[560px] lg:h-[600px]">
              <Image
                src="/images/founder/kathryn-about-fresh.jpg"
                alt="Kathryn seated at a table"
                width={768}
                height={1024}
                className="h-full w-full object-cover object-[50%_34%]"
              />
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="What We Stand For"
        title="A few things we believe."
        description="The business is not interested in overpromising. The point is to build infrastructure that makes the operation stronger, clearer, and easier to run."
        className="bg-[var(--color-cream)]"
      >
        <div className="relative">
          <div className="pointer-events-none absolute left-[6%] right-[6%] top-9 hidden h-px bg-[linear-gradient(90deg,rgba(200,169,110,0),rgba(200,169,110,0.45),rgba(200,169,110,0))] lg:block" />
          <div className="grid gap-6 md:grid-cols-2">
          {values.map((value, index) => (
            <article
              key={value.title}
              className={`relative overflow-hidden rounded-[30px] border p-8 shadow-[0_16px_40px_rgba(10,10,10,0.05)] ${
                index % 2 === 0
                  ? "border-[rgba(200,169,110,0.28)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(245,243,239,0.98))]"
                  : "border-[rgba(10,10,10,0.08)] bg-white"
              }`}
            >
              <div
                className={`pointer-events-none absolute inset-x-0 top-0 h-1 ${
                  index % 2 === 0
                    ? "bg-[linear-gradient(90deg,rgba(200,169,110,0.78),rgba(200,169,110,0.18))]"
                    : "bg-[linear-gradient(90deg,rgba(31,41,51,0.18),rgba(200,169,110,0.4))]"
                }`}
              />
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-meta)]">
                  Principle 0{index + 1}
                </span>
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-gold)] shadow-[0_0_14px_rgba(200,169,110,0.38)]" />
              </div>
              <h2 className="max-w-[16ch] font-display text-3xl leading-tight text-[var(--color-black)]">
                {value.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-[var(--color-copy)]">{value.body}</p>
            </article>
          ))}
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Credentials"
        title="Certified in the tools we use."
        description="Kept understated on purpose. The work should carry the weight, but the credibility is there."
      >
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {credentials.map((item, index) => (
            <div
              key={item}
              className={`relative overflow-hidden rounded-[26px] border p-6 shadow-[0_16px_40px_rgba(10,10,10,0.05)] ${
                index % 2 === 0
                  ? "border-[rgba(200,169,110,0.3)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(245,243,239,0.98))]"
                  : "border-[rgba(10,10,10,0.08)] bg-white"
              }`}
            >
              <div
                className={`pointer-events-none absolute inset-x-0 top-0 h-1 ${
                  index % 2 === 0
                    ? "bg-[linear-gradient(90deg,rgba(200,169,110,0.82),rgba(200,169,110,0.2))]"
                    : "bg-[linear-gradient(90deg,rgba(31,41,51,0.18),rgba(200,169,110,0.42))]"
                }`}
              />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-meta)]">
                    Credential 0{index + 1}
                  </p>
                  <p className="mt-4 font-display text-2xl leading-tight text-[var(--color-black)]">
                    {item}
                  </p>
                </div>
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--color-gold)] shadow-[0_0_14px_rgba(200,169,110,0.4)]" />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-[var(--color-black)] px-5 py-16 text-white md:px-8 md:py-24">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 rounded-[32px] border border-white/10 bg-white/5 p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl leading-tight">
              If you&apos;ve read this far, we probably think the same way about your business.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/74">
              Let&apos;s have a conversation about where you are, where you want to be, and whether we&apos;re the right fit to help you get there.
            </p>
          </div>
          <ButtonLink href={siteConfig.bookingUrl}>Book a Strategy Session</ButtonLink>
        </div>
      </section>
    </PageShell>
  );
}
