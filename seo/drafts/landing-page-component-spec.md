DRAFT — not approved. **Component spec for Phase 2 landing pages.** Lives at `src/components/site/landing-page-shell.tsx`. Preview live at `/dev/landing-page-preview` (noindex, not in nav).

# Landing Page Shell — component spec

**Component:** `src/components/site/landing-page-shell.tsx`
**Data type:** `LandingPageData` (exported from the same file)
**Preview route:** `/dev/landing-page-preview`
**Live use:** none yet — Phase 2 routes will adopt it

## What it is

A single reusable shell for search-led landing pages, covering every section in the SEO scorecard template: hero, problem, what-this-is, process, proof, outcome, local-proof, FAQ, related links, CTA. Each section after the hero is **optional**: pass the data, the section renders; omit it, the section hides.

JSON-LD wiring for Service + FAQPage is automatic when the corresponding data is present. BreadcrumbList ships via the `<Breadcrumbs>` component inside the hero.

## Section order (top to bottom)

1. **Hero** (required) — cream background, breadcrumb + eyebrow + H1 + body + primary/secondary CTAs.
2. **Problem** (optional) — white background, 2-column point list framing the operational pain.
3. **What this is** (optional) — cream background, 2-4 pillar cards.
4. **Process** (optional) — white background, numbered step list (mirrors the existing `frameworkSteps` pattern).
5. **Proof** (optional) — cream background, featured case-study tile (link to a CaseStudyPage) plus optional metric grid.
6. **Outcome** (optional) — white background, list of operational outcomes.
7. **Local proof** (optional) — cream, single inline callout for regional context.
8. **FAQ** (optional) — white, question + answer pairs. Emits `FAQPage` JSON-LD when present.
9. **Related links** (optional) — cream, 3-card grid using `<RelatedLinks>`.
10. **CTA** (required) — black background, eyebrow + title + body + primary/secondary CTAs.

All sections inherit brand-guide v2026-05-07 typography: Fraunces for headlines (`font-display`), DM Sans for body (inherited).

## Data shape (TypeScript)

Full type lives in `src/components/site/landing-page-shell.tsx`. Top-level shape:

```typescript
type LandingPageData = {
  path: string;             // "/digital-agency-emerald-qld"
  breadcrumbLabel: string;  // "Digital Agency Emerald QLD"
  hero: LandingHero;        // required
  problem?: LandingProblem;
  what?: LandingWhat;
  process?: LandingProcess;
  proof?: LandingProof;
  outcome?: LandingOutcome;
  localProof?: LandingLocalProof;
  faq?: LandingFaq;
  related?: RelatedLink[];
  cta: LandingCta;          // required
  serviceSchema?: {
    name: string;
    description: string;
    serviceType?: string;
    areaServed?: string;
  };
};
```

## How a Phase 2 route ships

For each of the 10 Phase 2 routes:

1. Aria writes the copy for each section (eyebrows, headings, body text, FAQ answers, outcomes, etc.).
2. Code creates `src/app/<slug>/page.tsx` matching this pattern:

```typescript
import type { Metadata } from "next";
import { LandingPageShell, type LandingPageData } from "@/components/site/landing-page-shell";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "[Phase 1b approved title]",
  description: "[Phase 1b approved description]",
  alternates: { canonical: "/<slug>" },
};

const data: LandingPageData = {
  path: "/<slug>",
  breadcrumbLabel: "<Short label>",
  hero: { /* approved copy */ },
  // ...other approved sections...
  cta: { /* approved copy */ },
};

export default function Page() {
  return <LandingPageShell data={data} />;
}
```

3. Add the route to `src/app/sitemap.ts` with priority `0.8`.
4. Add internal links from the parent hub (e.g. `/services` for service sub-pages) once approved.

No new components needed. No design decisions needed (the shell handles layout). Only inputs from humans are copy and the linking decisions.

## What this component does NOT do

- It doesn't decide URLs or page architecture. That's a Kathryn call per the Phase 2 brief.
- It doesn't write copy. Every text field is a placeholder until Aria + Kathryn approve.
- It doesn't add itself to nav. Phase 2 pages live outside the main nav by default; Kathryn decides if/when any get promoted.
- It doesn't add itself to the sitemap. Phase 2 commits add each route to `sitemap.ts` explicitly.

## What's open for design decisions (Pixel lane)

Flagged for Pixel if the shell needs visual variation in Phase 2:

- **Hero background variation.** Currently fixed to cream. Some landing pages may want a black hero (more impactful for AI/automation pages). The shell could accept a `tone` prop to flip the hero.
- **Illustrations / icons** inside the pillar cards. Currently text-only. Pixel could supply per-page icons.
- **CTA button styling.** Reuses the standard `<ButtonLink>` primary variant. If Phase 2 wants a different CTA visual, Pixel + Kathryn decide.

## Preview route

Live at `/dev/landing-page-preview` (noindex via `robots: { index: false, follow: false }`). Demonstrates every section filled with `[PLACEHOLDER]` text so design review can happen against rendered HTML.

## What this refactor doesn't break

- No existing route was modified.
- No existing component was modified.
- The `<RelatedLinks>` and `<Breadcrumbs>` components are reused as-is.
- Schema builders (`faqSchema`, `serviceSchema`) reused from `src/lib/schema.ts`.
