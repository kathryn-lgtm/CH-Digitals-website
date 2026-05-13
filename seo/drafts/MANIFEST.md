# DRAFT manifest — Phase 1a (updated 2026-05-14)

**Sessions:** 2026-05-13 (initial) + 2026-05-14 (decisions-back-to-code follow-up)
**Agent:** Claude (Opus 4.7)
**Rule:** every file prefixed `DRAFT-` is raw material. None wired. Aria refines voice via the Copywriter pattern, then Kathryn read-aloud final. Approved files move to `seo/approved/`, prefix `APPROVED-`. Code wires those in Phase 1b.

## Primary review document

**`seo/drafts/2026-05-14_seo-drafts-review.md`** — every human-facing draft consolidated into one file, organised by section per the 2026-05-14 decisions brief. **This is the single doc Kathryn + Aria review.**

**Action required:** copy that file into OneDrive at `Tier 2/CH Digitals Website SEO/drafts/2026-05-14_seo-drafts-review.md`. Remote agent sessions cannot write directly to OneDrive.

## Source draft files (consolidated into the review doc above)

| Category | File | Pages covered | Priority |
|---|---|---|---|
| Titles + metas | `titles-and-metas/DRAFT-titles-and-metas.md` | 11 routes | High |
| H1 alternates | `h1s/DRAFT-h1-alternates.md` | 6 main pages | High |
| Alt text | `alt-text/DRAFT-image-alt-text.md` | All `<Image>` usages | Low — existing alts mostly fine |
| FAQs | `faqs/DRAFT-faq-skeletons.md` | Home, Services, AI Services, Work, Contact (21 questions) | High |
| Landing-page outlines | `landing-page-outlines/DRAFT-*.md` (10 files) | 10 Phase-2 routes | Medium |
| Redirect map | `redirect-map/DRAFT-redirect-map.md` | n/a | Low — rule documented |
| Internal linking | `internal-linking-map/DRAFT-linking-map.md` | All routes | Medium |
| Schema content | `schema-content/DRAFT-organization-fields.md` | Site-wide | High |
| Schema content | `schema-content/DRAFT-service-schema.md` | `/services` | Medium |

## Decisions locked between sessions (per 2026-05-14 brief)

| Decision | Status | Affects |
|---|---|---|
| 1 — AI portraits stay in place | Locked | Image work paused on those files; brand-guide override noted |
| 2 — Schema: no phone, FB+IG only, areaServed Australia | Locked partial | `areaServed` wired; `sameAs` pending URLs |
| 3 — Homepage title | Deferred | Pending Kathryn review of consolidated doc |
| 4 — /blog noindex | Locked | Wired in commit `757be433` |
| 5 — TypewriterHeading H1 | Verified | Renders as real `<h1>`, no fix needed |
| 6 — Visible breadcrumbs | Locked | Wired across 9 sub-pages in commit `757be433` |

## Borderline drafts (flagged for review)

Per work-order Code Drafting Workflow, anything that touches voice or strategic narrative is flagged:

- Title drafts for `/about` — brand-led, voice-sensitive
- DermaGen meta rewrite — case-study language
- Landing-page outlines — *structure* only; copy lives with Aria
- FAQ answers — starter sentences only

## What Code did **not** draft (per discipline rule)

- Body copy on any existing page
- Voice-led headlines
- Case study narratives
- Founder-voice or about-page copy
- Anything that needs to sound like Kathryn
