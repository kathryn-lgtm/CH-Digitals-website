# Handover — CH Digitals SEO Phase 1a

**Session date:** 2026-05-13
**Agent:** Claude (Opus 4.7) on the web
**Branch:** `claude/ch-digitals-seo-phase-1a-bNtqw`
**Repo:** `kathryn-lgtm/ch-digitals-website`
**Brief:** v2 SEO Work Order (2026-05-14), Phase 1a only

## What changed

3 commits on the branch (in order):

| SHA | Scope |
|---|---|
| `6db7850eefc9a3ef1c5be9bdb86b3424aefaeef9` | Schema infrastructure (`src/lib/schema.ts`, `JsonLd`, `Breadcrumbs`), sitemap fix, layout metadata expansion, site-wide Organization + WebSite JSON-LD |
| `83091738292d5459ed8215fbf2e2169859482a3a` | BreadcrumbList wired on all 9 sub-pages; Article schema on `/work/dermagen` |
| (this commit) | Audit, drafts, manifest, handover — all under `seo/` |

## What was checked

- Every route in `src/app/` opened and inspected
- Metadata (title, description, canonical) verified on all 11 routes
- Schema markup output validated against schema.org types in source (Rich Results Test verification still needs to run against the deployed preview — blocked from this session)
- Internal links cross-referenced against route map — no dead source links
- Image alt text inventoried across all `<Image>` usages
- robots.ts + sitemap.ts behaviour traced

## What's still open

**Code-side, in this PR/branch:**
- Nothing. Phase 1a Code work is complete on the branch.

**Blocked items requiring tools/access not in this session:**
Full list with manual-check instructions is at the end of `seo/audits/2026-05-13_seo-source-audit.md`. Summary:
- External crawl with Screaming Frog/Sitebulb
- PageSpeed Insights on 6 key pages
- GSC verification + sitemap submission + coverage report
- Rich Results Test on every template
- Mobile device test on real iOS + Android
- Image file-size inventory (need filesystem access)

**Approval-gated (Kathryn lane):**
- Title + meta + H1 drafts (filed in `seo/drafts/`) need Aria refinement and Kathryn read-aloud final before Phase 1b wiring
- Organization schema gaps (telephone, sameAs, areaServed) need factual confirmation
- Service schema content per /services needs decision on price/area
- FAQ skeletons need Aria + Kathryn answers before wiring
- Visible-breadcrumb design call: option (a) schema-only or (b) replace eyebrow with visible breadcrumb on sub-pages
- `/blog` noindex recommendation pending decision
- AI portraits replacement status (4 days past brand-guide deadline)

## Who owns the next action

| Owner | Action |
|---|---|
| Alex | File this handover; route blocked items to Kathryn/Alex for manual completion |
| Kathryn | Answer the open questions in the section below, decide on visible breadcrumb call, confirm AI portrait status |
| Aria | Take `seo/drafts/titles-and-metas/`, `h1s/`, `faqs/` through the Copywriter pattern |
| Kathryn (after Aria) | Read-aloud final pass, copy approved versions into `seo/approved/` |
| Code (Phase 1b) | Wire approved files into pages once `seo/approved/` is populated |

## Assumptions made

1. The OneDrive path `Tier 2/CH Digitals Website SEO/` is not reachable from this remote agent session, so drafts/audit/handover were saved into the repo at `seo/`. The folder mirrors the brief's structure and can be moved/symlinked into OneDrive without restructuring.
2. `/review` is correctly noindex — confirmed in source, excluded from sitemap.
3. The DermaGen visible breadcrumb in the hero is acceptable as-is and was not refactored to use the new `<Breadcrumbs visible={true} />` component.
4. Organization schema uses `Organization` type (not yet upgraded to `LocalBusiness`) until Kathryn confirms physical walk-in / opening hours.
5. No production publish was attempted. Hook 4 approval phrase was not requested.

## Risks / known issues

- **Schema not yet validated against deployed URL.** Source-level structure is correct, but Rich Results Test must run against a real preview URL before claiming "zero errors" per the Definition of Done. Schema can produce subtle errors that only show up post-render.
- **TypewriterHeading on /ai-services** — needs verification that its lines render inside a single `<h1>` element. If it renders multiple `<h1>`s or non-heading elements, that's an H1 validity issue.
- **AI portraits live past replacement deadline** — not blocking Phase 1a Code work but blocks image optimization (Job 1.7) on those two files.
- **Layout-level `title.default` is shadowed by /page setting `title: "Home"`.** This means the homepage renders "Home | CH Digitals" not "CH Digitals | Websites, Systems, and AI Automation". Drafted fix in `titles-and-metas/`.

## Final file locations

- Code changes: `src/lib/schema.ts`, `src/components/seo/json-ld.tsx`, `src/components/site/breadcrumbs.tsx`, `src/app/sitemap.ts`, `src/app/layout.tsx`, 8 sub-page `page.tsx` files
- Drafts: `seo/drafts/`
- Audit: `seo/audits/2026-05-13_seo-source-audit.md`
- This handover: `seo/handover/2026-05-13_phase-1a-handover.md`
- Branch: `claude/ch-digitals-seo-phase-1a-bNtqw`
- No PR opened (per repo rule: only on explicit user request)

## Rollback

Nothing has been merged to `main`. Nothing has been deployed to production. Three options:

1. **Discard branch entirely:** `git push origin --delete claude/ch-digitals-seo-phase-1a-bNtqw`
2. **Revert specific commits:** `git revert <sha>` for any of the three. They're additive and ordered, so individual reverts are safe.
3. **Hard reset to pre-Phase-1a state:** `git reset --hard 712a6302a6cdbc8f214911e83422f394ed9ce785` on the branch

Code has access to push to the branch. Kathryn (or anyone with repo write) has access to merge or revert.

## Drafts produced this session

| Category | Count | Location |
|---|---|---|
| Title + meta drafts | 11 routes covered in 1 file | `seo/drafts/titles-and-metas/` |
| H1 alternates | 6 main pages in 1 file | `seo/drafts/h1s/` |
| Alt text inventory | All `<Image>` usages | `seo/drafts/alt-text/` |
| FAQ skeletons | 5 pages, 21 questions total | `seo/drafts/faqs/` |
| Landing page outlines | 10 separate files (Phase 2 routes) | `seo/drafts/landing-page-outlines/` |
| Redirect map | n/a (rule documented) | `seo/drafts/redirect-map/` |
| Internal linking map | 1 file | `seo/drafts/internal-linking-map/` |
| Schema content | 2 files (Organization gaps + Service) | `seo/drafts/schema-content/` |

Full listing: `seo/drafts/MANIFEST.md`.

## Open questions for Kathryn (resolve before Phase 1b or Phase 2 starts)

1. **AI portraits status** — `kathryn-about-fresh.jpg` and `kathryn-home-founder.jpg`: replaced yet, or still pending? Image optimization (Job 1.7) blocks on this.
2. **Visible breadcrumb decision** — keep eyebrow+H1 with schema-only breadcrumbs (current), or replace eyebrow with visible breadcrumb on sub-pages?
3. **`/blog` noindex** — add `noindex` until real content lands?
4. **Organization schema gaps** — see `DRAFT-organization-fields.md` (phone, sameAs URLs, areaServed boundary, LocalBusiness vs Organization).
5. **Service schema price** — publish a price range in schema, or leave out? Recommend leaving out.
6. **TypewriterHeading H1 rendering** — single `<h1>` or multiple? Quick browser DevTools check needed.
7. **Hosting/deploy access** — brief Open Question 7. Code cannot deploy from this session; branch needs Kathryn/team to deploy preview for staging QA + Rich Results Test.
8. **GSC/GA4 access** — Code cannot complete Jobs 1.3 and 1.10 from this session. Either grant access in a future session or complete manually per the audit's blocked-items table.

## Surprises / candidates for new lessons

1. **The layout `title.default` is silently shadowed if a page sets its own `title`** — even if that page is the homepage. Worth a `lessons.md` entry: "On Next.js App Router, the homepage `page.tsx` setting `title: "Home"` overrides the layout's `default`. To use the layout default, omit `title` from the homepage."

2. **Drafts location.** The brief assumes OneDrive write access via Hook 2's `additional_write_targets`. From a remote agent session that doesn't have a configured Hook 2, drafts have to land somewhere accessible — the repo at `seo/` is the cleanest fallback. Worth documenting in the work-order template that remote agent sessions store drafts in-repo.

3. **TypewriterHeading** is a hidden semantic risk — any component that wraps display copy should be checked for its rendered tag, because a CSS-only "H1" is invisible to SEO. Worth a lint rule or a code-review note: "any component named *Heading must export `as=h1` semantics or document the rendered tag."

## Kathryn-time spent (estimate)

This session: 0 (autonomous remote agent session, no interactive turns required from Kathryn).
Phase 1a remaining Kathryn-time (per brief estimate, ~2–2.5 hours): now blocked on the 8 open questions above + the manual-check items in the audit. Realistic next chunk: ~30 minutes to answer the 8 open questions, then ~1 hour for Aria refinement of drafts, then ~30 minutes for Kathryn read-aloud final.
