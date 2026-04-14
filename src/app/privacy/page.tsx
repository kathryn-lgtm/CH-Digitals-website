import type { Metadata } from "next";
import { PageShell } from "@/components/site/page-shell";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for CH Digitals — how we collect, use, and protect your data.",
  alternates: {
    canonical: "/privacy",
  },
};

const sections = [
  {
    title: "Who we are",
    body: `CH Digitals is a digital agency based in Emerald, Queensland, Australia. We build websites, digital systems, and AI-powered automation for regional businesses. Our website is located at https://www.chdigitals.com.au and we can be contacted at ${siteConfig.contactEmail}.`,
  },
  {
    title: "What data we collect",
    body: `We collect data in the following ways:

Contact and enquiry forms — When you submit a form on this website, we collect your name, email address, business name, and any message you provide. This information is used solely to respond to your enquiry.

Google Analytics 4 — We use Google Analytics to understand how visitors use our site. This collects anonymised data including pages visited, time on site, browser type, and general location. No personally identifiable information is collected through GA4. You can opt out via Google's opt-out browser add-on.

Meta Pixel — We use the Meta (Facebook) Pixel to measure the effectiveness of our advertising and to understand how visitors interact with our site. The Pixel may collect data including pages viewed and actions taken on this site. This data is processed by Meta in accordance with Meta's Data Policy. You can manage your ad preferences via your Facebook account settings.

Booking system — When you book a strategy session via Google Calendar, your data is handled by Google in accordance with Google's Privacy Policy.`,
  },
  {
    title: "How we use your data",
    body: `We use the data we collect to:
— Respond to enquiries and service requests
— Understand how our website is being used and improve it
— Measure the performance of our advertising
— Fulfil services agreed with clients

We do not sell your data to third parties. We do not use your data for automated decision-making or profiling.`,
  },
  {
    title: "Third-party integrations",
    body: `Our website and business operations use the following third-party services, each with their own privacy policies:

— Google Analytics (analytics.google.com)
— Meta Pixel / Facebook (facebook.com/policy)
— Resend (resend.com/privacy) — used to process contact form submissions
— Vercel (vercel.com/legal/privacy-policy) — our website hosting provider
— Google Calendar (policies.google.com/privacy) — used for booking sessions

If you are a client, we may also use tools including Shopify, HubSpot, Klaviyo, and others as part of delivering services. Use of these tools is governed by their respective privacy policies.`,
  },
  {
    title: "Data retention",
    body: `Enquiry and contact form data is retained for as long as is necessary to respond to and fulfil your request, and for a reasonable period thereafter for record-keeping purposes. Analytics data is retained in accordance with the default settings of Google Analytics 4 (14 months).`,
  },
  {
    title: "Your rights",
    body: `Under Australian Privacy Law (Privacy Act 1988) and where applicable the GDPR, you have the right to:
— Access the personal data we hold about you
— Request correction of inaccurate data
— Request deletion of your data
— Withdraw consent for data processing at any time

To exercise any of these rights, or to request deletion of your data, please contact us at ${siteConfig.contactEmail}. We will respond within 30 days.`,
  },
  {
    title: "Data deletion requests",
    body: `To request deletion of any personal data we hold about you — including data collected via our website, contact forms, or third-party integrations — email us at ${siteConfig.contactEmail} with the subject line "Data Deletion Request". We will process your request within 30 days and confirm when deletion is complete.`,
  },
  {
    title: "Cookies",
    body: `Our website uses cookies to support analytics (Google Analytics 4) and advertising measurement (Meta Pixel). By continuing to use this site, you consent to the use of these cookies. You can manage cookie preferences through your browser settings.`,
  },
  {
    title: "Changes to this policy",
    body: `We may update this Privacy Policy from time to time. The date of the most recent update is shown at the bottom of this page. Continued use of our website after any update constitutes acceptance of the revised policy.`,
  },
  {
    title: "Contact",
    body: `For any privacy-related questions or requests, contact us at:\n\nCH Digitals\n${siteConfig.location}\n${siteConfig.contactEmail}`,
  },
];

export default function PrivacyPage() {
  return (
    <PageShell>
      <section className="bg-[var(--color-cream)] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-meta)]">
            Legal
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-tight text-[var(--color-black)] md:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-6 text-base text-[var(--color-meta)]">
            Last updated: April 2026
          </p>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[860px]">
          <div className="divide-y divide-[var(--color-line)]">
            {sections.map((section) => (
              <div key={section.title} className="grid gap-6 py-10 first:pt-0 last:pb-0 lg:grid-cols-[220px_1fr] lg:gap-16">
                <h2 className="font-display text-xl leading-tight text-[var(--color-black)]">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.body.split("\n").filter(Boolean).map((para, i) => (
                    <p key={i} className="text-base leading-8 text-[var(--color-copy)]">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
