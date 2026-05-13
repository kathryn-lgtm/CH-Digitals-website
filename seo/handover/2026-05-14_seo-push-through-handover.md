# Handover — SEO Push-through session

**Session date:** 2026-05-14
**Agent:** Claude (Opus 4.7) on the web
**Brief:** `2026-05-14_seo-push-through-brief.md`
**Branch:** `claude/ch-digitals-seo-phase-1a-bNtqw`
**Repo:** `kathryn-lgtm/ch-digitals-website`
**Predecessor handovers:**
- `seo/handover/2026-05-13_phase-1a-handover.md`
- `seo/handover/2026-05-14_phase-1a-followup-handover.md`

## What this session was for

Push-through scope while Alex offline and OneDrive routing being set up. Code finishes everything that doesn't need Alex's blocked-jobs sweep, doesn't need Kathryn's voice approval, and doesn't need external tooling.

## Per-priority status

| # | Priority | Status | Commit | Notes |
|---|---|---|---|---|
| P1 | Image compression | **Inventory only, no compression** | `0f572d90` + `c6335a79` | Remote agent has no binary image tooling. Filed inventory + hold-all decision per Kathryn. Two large unused PNGs (1.97 MB + 3.92 MB) and ~10 smaller unreferenced assets stay in place pending real-photo replacement and OG image wiring. Compression itself still needs desktop Code or CI. |
| P2 | DermaGen reusable component | **Done** | `f8076c2a` | DermaGen rendered identically pre/post-refactor. `CaseStudyPage` component, extended `CaseStudy` type, spec doc for Phase 3 fill-in. |
| P3 | Internal linking map | **Done (Phase 1a interim)** | `abcd4ee8` | `RelatedLinks` component + cross-links on 7 main pages. Targets are existing routes; Phase 2 sub-service targets blocked. |
| P4 | Accessibility + semantic HTML | **Done** | `b18c85d9` | Skip-to-content link, focus-visible rings on forms, aria-live status regions, dynamic hamburger labels, decorative-image fixes. Audit doc filed. |
| P5 | Landing page shell + preview | **Done** | `b96fe640` | `LandingPageShell` component with 8 optional sections, preview at `/dev/landing-page-preview` (noindex), spec doc for Phase 2 wiring. |
| P6 | lessons.md entries | **Drafted, pending OneDrive copy** | `0f572d90` | Three entries filed at `seo/drafts/lessons-md-entries.md` for Kathryn to paste into the canonical OneDrive `lessons.md`. |

## Branch commit history (this session adds 5 commits on top of the 5 from prior sessions)

```
b18c85d9  seo(push-through P4): accessibility + semantic HTML fixes
b96fe640  seo(push-through P5): LandingPageShell + preview + spec
f8076c2a  seo(push-through P2): refactor DermaGen into reusable CaseStudyPage
abcd4ee8  seo(push-through P3): RelatedLinks + cross-links on 7 pages
c6335a79  seo(push-through P1): update image inventory to reflect hold-all
0f572d90  seo(push-through P1+P6): image inventory + lessons.md draft entries
——— prior sessions ———
dfc8babb  seo(phase-1a follow-up): consolidated drafts review doc + handover
757be433  seo(phase-1a follow-up): visible breadcrumbs, /blog noindex, areaServed
31b270bd  seo(phase-1a): file source-code audit, drafts, manifest, handover
83091738  seo(phase-1a): wire BreadcrumbList schema on sub-pages + Article on DermaGen
6db7850e  seo(phase-1a): add JSON-LD schema infra, breadcrumbs, sitemap fix
```

## What changed in code this session

**New components:**
- `src/components/site/related-links.tsx` (P3)
- `src/components/site/case-study-page.tsx` (P2)
- `src/components/site/landing-page-shell.tsx` (P5)

**New routes:**
- `src/app/dev/landing-page-preview/page.tsx` (P5, noindex)

**Modified components:**
- `src/components/site/page-shell.tsx` (P4)
- `src/components/site/site-header.tsx` (P4)
- `src/components/site/contact-form.tsx` (P4)
- `src/components/site/bce-waitlist-form.tsx` (P4)
- `src/components/site/demo-form.tsx` (P4)

**Modified data:**
- `src/lib/site-data.ts` (P2) — added `CaseStudy` type + DermaGen entry extended with `meta`, `schema`, `storyParagraphs`, `resultCallout`, `detailCards`, `relatedLinks`, `shortName`. No prose rewritten.

**Modified pages:**
- `src/app/work/dermagen/page.tsx` (P2) — collapsed from ~190 lines to ~15 lines
- `src/app/about/page.tsx` (P3) — added `<RelatedLinks>`
- `src/app/services/page.tsx` (P3) — added `<RelatedLinks>`
- `src/app/ai-services/page.tsx` (P3) — added `<RelatedLinks>`
- `src/app/work/page.tsx` (P3) — added `<RelatedLinks>`
- `src/app/contact/page.tsx` (P3) — added `<RelatedLinks>`
- `src/app/bce/page.tsx` (P3) — added `<RelatedLinks>`

**New docs in `seo/`:**
- `seo/audits/2026-05-14_image-compression.md` (P1)
- `seo/audits/2026-05-14_accessibility-pass.md` (P4)
- `seo/drafts/lessons-md-entries.md` (P6)
- `seo/drafts/case-study-template-spec.md` (P2)
- `seo/drafts/landing-page-component-spec.md` (P5)
- `seo/drafts/internal-linking-map/DRAFT-linking-map.md` (P3 — updated, not new)
- `seo/handover/2026-05-14_seo-push-through-handover.md` (this file)

## What was deliberately not done (and why)

| Item | Reason |
|---|---|
| Delete unused image assets | Kathryn decision: hold all images. Source material may be needed for real-photo replacement and OG image. |
| Run actual image compression | Remote agent has no binary tooling. Desktop Code or CI required. |
| Write any case-study or landing-page copy | Voice-led, Aria + Kathryn lane. |
| Wire any of the 10 Phase 2 routes | Architecture, URL slugs, and copy all gated on Kathryn + Aria. Shell is ready; pages are not. |
| Add Phase 2 routes to navigation | Architecture decision, Kathryn lane. |
| Add `/dev/landing-page-preview` to sitemap | Intentionally noindex. Internal preview only. |
| Rewrite any body copy on existing pages | Voice lane. P3 only added new structural blocks; no existing prose was edited. |
| Wire `sameAs` schema URLs | Still pending FB + IG URLs from Kathryn. |
| Verify schema on a deployed URL via Rich Results Test | Still blocked on deploy access. |
| Run live PageSpeed audit | Still blocked on tool access. |
| Run live Lighthouse accessibility audit | Still blocked on tool access. Source-code pass covers structural issues; live run will surface contrast and tap-target findings. |
| GSC / GA4 verification | Still blocked on access. |
| Screaming Frog crawl | Still blocked on tool access. |
| Mobile device real-world test | Still blocked. |
| Copy review doc + lessons entries into OneDrive | Still blocked until Dispatch is live. Files staged in repo with clear copy-target paths. |

## Rollback strategy

Four publishable groupings on the branch (from prior + this session):

| Commit | What it ships | Rollback command |
|---|---|---|
| `6db7850e` | Schema infrastructure, sitemap fix, OG/Twitter metadata, Organization + WebSite JSON-LD | `git revert 6db7850e` |
| `83091738` | BreadcrumbList on sub-pages, Article on DermaGen | `git revert 83091738` |
| `757be433` | Visible breadcrumbs, /blog noindex, areaServed schema | `git revert 757be433` |
| **`b18c85d9`** (latest publishable target) | + RelatedLinks cross-links, CaseStudyPage refactor, LandingPageShell, accessibility fixes | `git revert b18c85d9` for just-this; or chain reverts for batched rollback |

Full session rollback (back to clean `main`): `git reset --hard 712a6302` on the branch.

Docs-only commits (`31b270bd`, `dfc8babb`, `0f572d90`, `c6335a79`, plus this handover commit) live entirely under `seo/` and don't affect what gets deployed; they don't need to be in a production rollback plan.

## Hook 4 — production publish guidance

Nothing has been deployed. All five technical commits are stacked on the feature branch. When Kathryn is ready to ship:

1. Open a preview deploy from the branch.
2. Run the v2 staging QA checklist (renders, nav, forms, metadata, schema validation, no layout regressions, PageSpeed not below baseline).
3. Type the approval phrase in the same session as the publish:
   ```
   APPROVE LIVE PUBLISH — CH Digitals — YYYY-MM-DD
   ```
4. Merge or fast-forward to main; deploy from main.

Recommend one publish for everything on the branch — it's already a coherent SEO Phase 1a unit. One staging review, one approval phrase, one rollback target (`b18c85d9`).

## What still needs human action

### From Kathryn (non-blocking, but unblock when possible)
- Supply Facebook + Instagram URLs for schema `sameAs`. Code wires when received.
- Decide on homepage title (review doc at `seo/drafts/2026-05-14_seo-drafts-review.md`, Section 1, recommended Option A).
- Decide on AI portrait replacement timeline (Pixel + Kathryn task).
- Copy `seo/drafts/2026-05-14_seo-drafts-review.md` into OneDrive when Dispatch is live, so Aria can review.
- Copy `seo/drafts/lessons-md-entries.md` entries into the canonical OneDrive `lessons.md`.
- Approve the LocalBusiness upgrade decision (current schema is `Organization`; if physical walk-in / appointment hours apply, upgrade to `LocalBusiness` with `openingHoursSpecification`).

### From Alex (when back online)
- Blocked-jobs sweep: Screaming Frog crawl, GSC verification + sitemap submission + coverage report, GA4 confirmation, PageSpeed audit on 6 key pages, image file-size inventory from local disk, mobile device test, index bloat check. Manual instructions remain in `seo/audits/2026-05-13_seo-source-audit.md`.

### From Aria (when drafts land in OneDrive)
- Run titles + metas + H1s through the Copywriter pattern. Reference file: `seo/drafts/2026-05-14_seo-drafts-review.md` Sections 1–2.
- Refine FAQ skeletons (Section 3) into Kathryn's voice.
- Refine landing-page-outline copy when Phase 2 unblocks (Section 4 of the review doc).

### From Pixel (when AI portraits replacement happens)
- Brief and shoot real photos to replace `kathryn-about-fresh.jpg` and `kathryn-home-founder.jpg`.
- Brand-guide update at next review to record the AI portrait deadline extension.
- (Phase 2) Design call on whether `LandingPageShell` needs a hero `tone` prop variant for AI-led pages, illustration support in pillar cards, or a custom CTA visual.

## Surprises / lessons captured this session

1. **Component-extraction-as-prep pattern.** P2 and P5 are the cleanest kind of Phase-1a work: code that doesn't ship anything new visually, but turns each future content addition (case study, landing page) from a 200-line custom build into a 15-line wrapper around a typed data object. The spec docs are the deliverable for Kathryn — fill-in-the-blanks templates with no JSX in sight.

2. **"Push-through" is a real mode.** When primary review channels are blocked (Alex offline, OneDrive routing pending), there's still 8+ hours of useful Code work in any session: technical scaffolding, accessibility passes, internal linking, component refactors, spec docs. The block is on review surface, not on work surface. Worth a lessons.md entry: "Most SEO sessions have a push-through mode — plan for it rather than waiting on reviews."

3. **The data-shape contract is the SEO scorecard.** P2's `CaseStudy` type and P5's `LandingPageData` type both ended up mirroring the SEO scorecard's recommended template. The lesson: when SEO defines what good content looks like, the TypeScript type can carry that contract — making it impossible to ship a case study or landing page that's missing structural elements (metrics, FAQ schema, proof links) the SEO scorecard called out.

4. **Skip-to-content is genuinely missed in Tailwind-heavy codebases.** P4 found `outline-none` applied to every form input without a `focus-visible` replacement. This is a common Tailwind antipattern: `outline-none` ships visual cleanliness at the cost of keyboard-user focus indicators. Worth adding to the brand-guide or a lint rule.

## Kathryn-time spent (estimate)

This session: ~5 minutes (one decision in chat: "skip the deletion, move forward").

Full Phase 1a so far across three sessions: ~10 minutes of interactive Kathryn time, plus ~3 hours of agent execution time.

Next step blocks on Aria + Kathryn voice review of the consolidated drafts doc, plus the Alex blocked-jobs sweep. After that, everything on the branch is ready to ship in one batched publish.

## Session done

All six priorities from the push-through brief addressed (P1 and P6 partially — outputs filed, manual copy or tooling needed to finish). Branch ready for staging deploy + Hook 4 approval phrase when Kathryn decides to ship.
