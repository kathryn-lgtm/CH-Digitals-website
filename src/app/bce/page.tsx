import type { Metadata } from "next";
import Image from "next/image";
import { BceWaitlistForm } from "@/components/site/bce-waitlist-form";
import { PageShell } from "@/components/site/page-shell";

export const metadata: Metadata = {
  title: "Business Clarity Engine — Early Access",
  description:
    "The Business Clarity Engine is a guided business system that helps you think clearly, make better decisions, and take the right action. Early access opening in 2026.",
  alternates: {
    canonical: "/bce",
  },
};

const pillars = [
  {
    name: "Direction",
    body: "Understand what you should actually be focusing on — before you spend another month on the wrong thing.",
  },
  {
    name: "Clarity",
    body: "Structure your idea, your audience, and the real problem you solve. Not guesswork. A working map.",
  },
  {
    name: "Action",
    body: "Specific next steps grounded in your real situation. Not a to-do list. One move, this week, that's it.",
  },
];

const whoFor = [
  "Founders with ideas but no clear direction",
  "Business owners feeling stuck or scattered",
  "Anyone tired of AI tools that start from zero every time",
];

export default function BcePage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-[var(--color-black)] px-5 py-20 text-white md:px-8 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,169,110,0.14),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(58,119,134,0.12),transparent_35%)]" />
        <div className="relative mx-auto max-w-[1200px]">
          <div className="flex items-center gap-4">
            <Image
              src="/images/bce/bce-inverted.svg"
              alt="Business Clarity Engine"
              width={64}
              height={64}
              className="h-14 w-14 md:h-16 md:w-16"
              priority
            />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c8bc8a]">
              BCE · Early access opening in 2026
            </p>
          </div>
          <h1 className="reveal-up mt-7 max-w-4xl font-display text-5xl leading-none tracking-[-0.03em] md:text-7xl">
            Most business owners aren&apos;t lacking ideas. They&apos;re lacking clarity.
          </h1>
          <p className="reveal-up reveal-delay-1 mt-8 max-w-3xl text-lg leading-9 text-white/70 md:text-xl">
            The Business Clarity Engine is a guided business system. It helps you think clearly, make better decisions, and take the right action at the right time. Not a tool. Not another AI interface. A system that understands your business and evolves with it.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]">
            The shape of it
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-[var(--color-black)] md:text-5xl">
            Direction. Clarity. Action. In that order.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.name}
                className="rounded-[28px] border border-[rgba(10,10,10,0.08)] bg-white p-7 shadow-[0_18px_45px_rgba(10,10,10,0.05)]"
              >
                <p className="font-display text-5xl leading-none text-[rgba(10,10,10,0.12)]">
                  0{index + 1}
                </p>
                <h3 className="mt-5 font-display text-2xl text-[var(--color-black)]">
                  {pillar.name}
                </h3>
                <p className="mt-3 text-base leading-8 text-[var(--color-copy)]">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]">
              Who it&apos;s for
            </p>
            <h2 className="font-display text-4xl leading-tight text-[var(--color-black)] md:text-5xl">
              Built for the moment you&apos;re tired of starting from zero.
            </h2>
            <ul className="space-y-4 pt-2">
              {whoFor.map((line) => (
                <li
                  key={line}
                  className="flex gap-3 text-base leading-8 text-[var(--color-copy)]"
                >
                  <span className="mt-[0.65em] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-gold)]" />
                  {line}
                </li>
              ))}
            </ul>
            <p className="pt-4 text-base leading-8 text-[var(--color-copy)]">
              You&apos;ll finish a session with one clear direction, the real problem worth solving, and the next right move — not another twenty-item to-do list.
            </p>
          </div>

          <div className="space-y-5">
            <div className="rounded-[28px] border border-[rgba(200,169,110,0.35)] bg-[linear-gradient(135deg,rgba(10,10,10,0.97),rgba(31,41,51,0.97))] p-7 text-white shadow-[0_24px_60px_rgba(10,10,10,0.12)] md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]">
                Waitlist
              </p>
              <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">
                Be first through the door.
              </h2>
              <p className="mt-4 text-base leading-8 text-white/75">
                Early access is opening in 2026. Join the list and we&apos;ll reach out when your spot is ready.
              </p>
            </div>
            <BceWaitlistForm />
            <p className="text-xs text-[var(--color-meta)]">
              Built by Kathryn at CH Digitals. You can reply to any email from us.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
