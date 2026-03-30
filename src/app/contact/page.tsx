import type { Metadata } from "next";
import { ContactForm } from "@/components/site/contact-form";
import { ButtonLink } from "@/components/site/button-link";
import { PageShell } from "@/components/site/page-shell";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a strategy session with CH Digitals or send through the business problem you need solved across websites, systems, marketing, or AI automation.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <PageShell>
      <section className="bg-[var(--color-cream)] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-meta)]">
            Contact
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl leading-tight text-[var(--color-black)] md:text-7xl">
            Book a strategy session, or send through the problem you need solved.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-copy)]">
            The Google Calendar booking link is the primary path. The form is here if you would rather outline your business, timeline, or blockers first.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="space-y-5 rounded-[28px] border border-[var(--color-line)] bg-[var(--color-black)] p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]">
              Primary CTA
            </p>
            <h2 className="font-display text-4xl leading-tight">
              Book your strategy session.
            </h2>
            <p className="text-base leading-8 text-white/72">
              If you already know you want to talk, use the calendar link and we can get straight into the conversation.
            </p>
            <ButtonLink href={siteConfig.bookingUrl}>Open booking calendar</ButtonLink>
            <div className="border-t border-white/10 pt-5 text-sm text-white/65">
              <p>{siteConfig.location}</p>
              <p className="mt-2">{siteConfig.contactEmail}</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </PageShell>
  );
}
