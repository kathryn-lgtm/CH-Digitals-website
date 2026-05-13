DRAFT — not approved. Strategic call — Kathryn approves before any further wiring beyond what landed in commit `<P3>`.

# Internal linking map proposal (updated 2026-05-14)

**Principle:** every page is at most 2 clicks from the homepage. Pillar page (`/digital-systems-regional-businesses`, once it exists) anchors the cluster.

## Status of original linking map proposals

| Proposal | Status |
|---|---|
| 1. `Related services` block at the bottom of each main page — linking to 2-3 service sub-pages | **Partially implemented as `<RelatedLinks>`** wiring on 7 pages. Targets are existing routes for now; will swap to sub-services when Phase 2 routes ship. |
| 2. `Also from CH Digitals` block at the bottom of each case study — links to other case studies | **Blocked.** Only one case study exists (DermaGen). Phase 3 dependency. |
| 3. Footer: third column listing top 4 sub-services | **Blocked.** Sub-services don't exist yet. Phase 2 dependency. |

## What was wired (Phase 1a interim)

New `<RelatedLinks>` component (`src/components/site/related-links.tsx`) added with light/dark tone variants. Placed as a section between the last content section and the bottom CTA on every main page. Each page now cross-links to 3 other in-site routes.

### Per-page wiring

| Page | Tone | Links to |
|---|---|---|
| `/about` | light | `/services`, `/work`, `/ai-services` |
| `/services` | light | `/ai-services`, `/work/dermagen`, `/about` |
| `/ai-services` | dark | `/services`, `/work`, `/bce` |
| `/work` | light | `/services`, `/ai-services`, `/about` |
| `/work/dermagen` | dark | `/services`, `/ai-services`, `/about` |
| `/contact` | light | `/services`, `/work`, `/about` |
| `/bce` | light | `/ai-services`, `/work`, `/about` |

### Skipped

| Page | Reason |
|---|---|
| `/` Home | Already has 4 link cards in hero + many in-body links. Adding more would dilute. |
| `/blog` | Noindex placeholder. |
| `/privacy` | Pure legal copy. No SEO value. |

## Eyebrow/body/title content

Each card pulls language from the linked page's existing metadata description, trimmed to fit. Aria may want to refine voice on these in Phase 1b — they're functional, not voice-led. Specifically:

- Eyebrow: short category label ("Service stack", "AI", "Proof", "Studio", "BCE")
- Body: one-sentence factual summary of the target page
- Title: action-led (e.g. "Explore services", "See AI services", "About CH Digitals")

If Aria wants different voice, the text lives in each page file as plain `items` prop on `<RelatedLinks>` — swap in place, no component edit needed.

## Anchor text rule

Avoid `click here`, `read more`, `learn more`. Use the target page's primary keyword/intent as the link text. Card titles already follow this pattern.

## Future cluster (when Phase 2/3 land)

```
Home
├── Services (hub)
│   ├── Website Design Emerald QLD
│   ├── Shopify Designer QLD
│   ├── CRM Setup
│   ├── Business Reporting Dashboard
│   ├── Klaviyo Email Marketing
│   └── SEO Audit
├── AI Services (hub)
│   ├── AI Automation Small Business
│   └── Small Business Automation QLD
├── Work → DermaGen + (CH Tools, Birth Teacher, Vulcan Tilt, Emerald Golf, Social Hub when they ship)
├── About
├── Contact
├── Blog
├── BCE
└── Digital Systems for Regional Business (pillar)
```

When Phase 2 sub-services land, swap the `<RelatedLinks>` `items` on /services and /ai-services to point at the new sub-pages instead of cross-hub links.
