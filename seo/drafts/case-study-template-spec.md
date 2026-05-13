DRAFT — not approved. **Fill-in-the-blanks template for Phase 3 case studies.** Kathryn uses this when writing the 5 new case studies (ch-tools, the-birth-teacher, vulcan-tilt, emerald-golf-club, the-social-hub) so the content drops straight into the existing `<CaseStudyPage>` component.

# Case study data shape spec

**Component:** `src/components/site/case-study-page.tsx`
**Data location:** `src/lib/site-data.ts` → `caseStudies` array
**Type:** `CaseStudy` (exported from `site-data.ts`)
**Live example:** DermaGen — `/work/dermagen`

## How a new case study ships

1. Kathryn fills in the template below for the new client.
2. Aria refines voice on the prose fields (headline, story paragraphs, result callout, detail card bodies).
3. Code drops the object into the `caseStudies` array in `site-data.ts`.
4. Code creates a thin route file at `src/app/work/<slug>/page.tsx` (5 lines, mirrors `dermagen/page.tsx`).
5. Sitemap gets the new entry added.

That's it. The component handles layout, schema, breadcrumbs, related links, and the CTA.

---

## Required fields

| Field | Type | Notes |
|---|---|---|
| `slug` | string | URL slug. Goes into `/work/<slug>`. Lowercase, hyphens only. |
| `client` | string | Full client name. Used in hero subtitle and (if `shortName` absent) breadcrumbs / Visit button. |
| `industry` | string | One-line industry descriptor (e.g. "Natural, botanical & compounded skincare"). Shown in hero. |
| `website` | string | Full URL with `https://`. Used in the "Visit X" CTA button. |
| `headline` | string | The H1 — voice-led, outcome-focused. One sentence. |
| `story` | string | Single-paragraph summary used on the `/work` index page. Voice-led. |
| `metrics` | array of `{ value, label }` | Real numbers. First 3 go in hero. All shown in sidebar. Keep `value` short, `label` descriptive. |
| `services` | array of strings | Bullet list — what CH Digitals owned in the engagement. |

## Optional fields (recommended to fill)

| Field | Type | Notes |
|---|---|---|
| `shortName` | string | Short display name for breadcrumbs + Visit button (e.g. "DermaGen", not "DermaGen by Botanical Chemist"). Defaults to `client`. |
| `meta.title` | string | SEO title. Sweet spot 50–60 chars before the `" \| CH Digitals"` suffix. |
| `meta.description` | string | SEO description. 140–160 chars. |
| `schema.description` | string | Article JSON-LD description. Defaults to `story` if absent. |
| `storyParagraphs` | array of strings | 2–4 paragraphs telling the challenge. Rendered as the body of the "The Challenge" section. Defaults to `[story]`. |
| `resultCallout` | string | One-sentence outcome highlighted in a callout box under the story. Section hides if absent. |
| `detailCards` | array of `{ eyebrow, title, body }` | 2–4 detail cards in the "The Work" section. Pattern: `eyebrow="Platform"`, `title="Shopify"`, `body="..."`. Section adjusts column count automatically. |
| `relatedLinks` | array of `{ href, eyebrow, body, title }` | Cards above the bottom CTA. 2–3 internal links to other parts of the site. Section hides if absent. |

## Future fields (not yet wired — add when first case study needs them)

Named in the Phase 3 brief but not in the current `CaseStudy` type. When Kathryn writes a case study that needs one of these, Code adds the type + the render block to `case-study-page.tsx`:

- `location` — city/region the client is based in
- `problem` — short framing of the operational problem before the engagement
- `beforeState` — quantitative or qualitative "before" snapshot
- `whatChanged` — paragraph on what changed operationally for the team after the build
- `clientQuote` — `{ quote, author, role? }` — testimonial pulled from the client
- `screenshots` — array of `{ src, alt, caption? }` for before/after or build screenshots

These aren't required. The DermaGen case study works without them. They're a Phase 3 wishlist.

---

## Blank template

Copy this block, fill in the bracketed fields, paste into the `caseStudies` array in `src/lib/site-data.ts`:

```typescript
{
  slug: "<slug>",
  client: "<Full client name>",
  shortName: "<Short name>",
  industry: "<One-line industry descriptor>",
  website: "https://<client-domain>",
  headline: "<Voice-led outcome-focused one-sentence headline>",
  story:
    "<Single-paragraph summary used on /work index. 2–3 sentences.>",
  metrics: [
    { value: "<value>", label: "<label>" },
    // 3–6 entries. First 3 go in hero.
  ],
  services: [
    "<Service 1>",
    "<Service 2>",
    // 4–8 entries.
  ],
  meta: {
    title: "<50–60 char SEO title without the suffix>",
    description:
      "<140–160 char SEO description>",
  },
  schema: {
    description:
      "<Article schema description — can be a tighter rewrite of `story`>",
  },
  storyParagraphs: [
    "<Paragraph 1 — the before state and the brief>",
    "<Paragraph 2 — the constraint or problem>",
    "<Paragraph 3 — the result framing (sets up the callout)>",
  ],
  resultCallout:
    "<One-sentence quantified outcome — e.g. 'Within six months of the rebuild, X went from $Y to $Z'>",
  detailCards: [
    {
      eyebrow: "<Category, e.g. 'Platform'>",
      title: "<Tool or focus, e.g. 'Shopify'>",
      body: "<Paragraph on what was built / how it works>",
    },
    // 2–4 entries.
  ],
  relatedLinks: [
    {
      href: "/services",
      eyebrow: "Service stack",
      body: "<Short body>",
      title: "<Action-led title>",
    },
    // 2–3 entries.
  ],
},
```

## Aria's lane

These fields are voice-led; Aria refines after Kathryn drafts:
- `headline`
- `story`
- `storyParagraphs`
- `resultCallout`
- `detailCards[].body`
- `meta.description`
- `relatedLinks[].body`, `relatedLinks[].title`

These are structural; Code can populate without voice review:
- `slug`, `client`, `shortName`, `industry`, `website`
- `metrics` (real numbers only)
- `services` (factual list)
- `meta.title` (within SEO targets)
- `detailCards[].eyebrow`, `.title`
- `relatedLinks[].href`, `.eyebrow`

## Per-case-study route file

Matches `src/app/work/dermagen/page.tsx`. Five lines plus imports:

```typescript
import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/site/case-study-page";
import { caseStudies } from "@/lib/site-data";

const caseStudy = caseStudies.find((cs) => cs.slug === "<slug>")!;

export const metadata: Metadata = {
  title: caseStudy.meta?.title ?? `${caseStudy.shortName ?? caseStudy.client} Case Study`,
  description: caseStudy.meta?.description ?? caseStudy.story,
  alternates: { canonical: `/work/${caseStudy.slug}` },
};

export default function Page() {
  return <CaseStudyPage caseStudy={caseStudy} />;
}
```

That's the entire per-case-study file. Layout, schema, breadcrumbs, related links, CTA — all in `CaseStudyPage`.

## Sitemap update

When a new case study ships, add an entry to `src/app/sitemap.ts`:

```typescript
{ path: "/work/<slug>", changeFrequency: "monthly", priority: 0.7 },
```

## What this refactor changed

- `src/lib/site-data.ts` — added explicit `CaseStudy` type and extended the DermaGen entry with `meta`, `schema`, `storyParagraphs`, `resultCallout`, `detailCards`, `relatedLinks`, `shortName`. **No prose was rewritten** — exact strings moved from JSX to data.
- `src/components/site/case-study-page.tsx` — new component encapsulating the layout.
- `src/app/work/dermagen/page.tsx` — collapsed from ~190 lines to ~15 lines.

DermaGen renders identically pre/post-refactor: same H1, same metrics, same paragraphs, same detail cards, same Article schema, same related links, same CTA. Visual + schema parity preserved.
