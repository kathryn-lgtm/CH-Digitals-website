import type { Metadata } from "next";
import {
  LandingPageShell,
  type LandingPageData,
} from "@/components/site/landing-page-shell";
import { siteConfig } from "@/lib/site-data";

// Preview route for the LandingPageShell component.
// Not in nav. Noindex. Excluded from sitemap.
// Phase 2 routes copy this pattern with real data + real slug.
export const metadata: Metadata = {
  title: "Landing Page Shell — Preview",
  description: "Internal preview of the LandingPageShell component. Not for public consumption.",
  robots: { index: false, follow: false },
};

const previewData: LandingPageData = {
  path: "/dev/landing-page-preview",
  breadcrumbLabel: "Landing Page Preview",
  hero: {
    eyebrow: "[PREVIEW] Service · Location",
    h1: "[PLACEHOLDER H1 — primary keyword + outcome.]",
    body: "[PLACEHOLDER hero paragraph. Voice-led promise tied to the primary keyword. 1–2 sentences. Aria writes this.]",
    primaryCta: { href: siteConfig.bookingUrl, label: "Book a Strategy Session" },
    secondaryCta: { href: "/work", label: "See the work" },
  },
  problem: {
    eyebrow: "The problem",
    title: "[PLACEHOLDER problem section title.]",
    description: "[PLACEHOLDER description framing the operational pain.]",
    points: [
      "[PLACEHOLDER pain point 1.]",
      "[PLACEHOLDER pain point 2.]",
      "[PLACEHOLDER pain point 3.]",
      "[PLACEHOLDER pain point 4.]",
    ],
  },
  what: {
    eyebrow: "What this is",
    title: "[PLACEHOLDER what-we-do title.]",
    description: "[PLACEHOLDER description of the offering at a glance.]",
    pillars: [
      { title: "[Pillar 1 title]", body: "[Pillar 1 body — one sentence.]" },
      { title: "[Pillar 2 title]", body: "[Pillar 2 body.]" },
      { title: "[Pillar 3 title]", body: "[Pillar 3 body.]" },
    ],
  },
  process: {
    eyebrow: "How it works",
    title: "[PLACEHOLDER process title.]",
    description: "[PLACEHOLDER description.]",
    steps: [
      { name: "Discover", body: "[Step 1 body.]" },
      { name: "Design", body: "[Step 2 body.]" },
      { name: "Deploy", body: "[Step 3 body.]" },
      { name: "Optimise", body: "[Step 4 body.]" },
    ],
  },
  proof: {
    eyebrow: "Proof",
    title: "[PLACEHOLDER proof section title.]",
    description: "[PLACEHOLDER description.]",
    caseStudyHref: "/work/dermagen",
    caseStudyLabel:
      "From a struggling website to a national skincare brand — built from the ground up.",
    metrics: [
      { value: "$592K+", label: "Sales generated" },
      { value: "313K+", label: "Sessions" },
      { value: "54.2%", label: "Checkout conversion" },
    ],
  },
  outcome: {
    eyebrow: "What changes",
    title: "[PLACEHOLDER outcome title.]",
    description: "[PLACEHOLDER outcome description.]",
    outcomes: [
      "[Outcome 1 — operational change.]",
      "[Outcome 2.]",
      "[Outcome 3.]",
      "[Outcome 4.]",
    ],
  },
  localProof: {
    eyebrow: "Local",
    title: "Built in Emerald. Working across regional Queensland and beyond.",
    body: "[PLACEHOLDER — short regional context. Use on pages where local intent matters; skip for national-target pages.]",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Common questions.",
    items: [
      { question: "[Question 1?]", answer: "[Answer 1.]" },
      { question: "[Question 2?]", answer: "[Answer 2.]" },
      { question: "[Question 3?]", answer: "[Answer 3.]" },
      { question: "[Question 4?]", answer: "[Answer 4.]" },
      { question: "[Question 5?]", answer: "[Answer 5.]" },
    ],
  },
  related: [
    {
      href: "/services",
      eyebrow: "Service stack",
      body: "The full service stack.",
      title: "Explore services",
    },
    {
      href: "/work",
      eyebrow: "Proof",
      body: "More case studies.",
      title: "See the work",
    },
    {
      href: "/about",
      eyebrow: "Studio",
      body: "About CH Digitals.",
      title: "About CH Digitals",
    },
  ],
  cta: {
    eyebrow: "Ready to talk?",
    title: "Book a free strategy session and map what this looks like for your business.",
    description:
      "45 minutes. No pitch. An honest look at what you have, what is not working, and what should change.",
    primary: { href: siteConfig.bookingUrl, label: "Book a Strategy Session" },
    secondary: { href: "/work", label: "See the work first" },
  },
  serviceSchema: {
    name: "[Service name for schema]",
    description: "[Service description for schema]",
    serviceType: "[e.g. Web Design]",
    areaServed: "Australia",
  },
};

export default function LandingPagePreview() {
  return <LandingPageShell data={previewData} />;
}
