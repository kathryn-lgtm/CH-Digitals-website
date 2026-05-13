# Handover — CH Digitals SEO Phase 1a follow-up

**Session date:** 2026-05-14
**Agent:** Claude (Opus 4.7) on the web
**Brief:** `2026-05-14_seo-phase-1a-decisions-back-to-code.md`
**Branch:** `claude/ch-digitals-seo-phase-1a-bNtqw`
**Repo:** `kathryn-lgtm/ch-digitals-website`
**Predecessor handover:** `seo/handover/2026-05-13_phase-1a-handover.md`

## What changed

2 new commits on top of the previous 3:

| SHA | Scope |
|---|---|
| `757be433ac7c9f34929a659c5c0d210ceec790bc` | Visible breadcrumbs (Decision 6), /blog noindex (Decision 4), areaServed schema (Decision 2 partial), Breadcrumbs component extended with `tone` prop |
| (this commit) | Consolidated drafts review doc, updated MANIFEST, this handover |

Full branch history:
```
31b270bd  seo(phase-1a): file source-code audit, drafts, manifest, and handover
83091738  seo(phase-1a): wire BreadcrumbList schema on sub-pages + Article on DermaGen
6db7850e  seo(phase-1a): add JSON-LD schema infra, breadcrumbs, sitemap fix
     +    seo(phase-1a follow-up): visible breadcrumbs, /blog noindex, areaServed schema  ← 757be433
     +    seo(phase-1a follow-up): drafts review doc + handover                            ← this commit
```

## Decisions executed

### Decision 1 — AI portraits + brand fonts ✅ verified, no changes needed

Audited home and About page hero blocks around `kathryn-about-fresh.jpg` and `kathryn-home-founder.jpg`. Font usage is already consistent with brand-guide v2026-05-07:

- `globals.css` defines `--font-sans: "DM Sans Variable"` (body) and `--font-display: "Fraunces Variable"` (`.font-display` class).
- Home hero H1 uses `font-display` (Fraunces) ✅
- Home founder section H2 "Hi, I'm Kathryn" uses `font-display` (Fraunces) ✅
- About hero H1 uses `font-display` (Fraunces) ✅
- About `<h2>Hi, I'm Kathryn.</h2>` uses `font-display` (Fraunces) ✅
- All eyebrows + body copy inherit DM Sans via the body default ✅

No edits were needed. AI portraits stay in place per the lock.

### Decision 2 — Organization schema ✅ partial, sameAs pending

Updated `src/lib/schema.ts`:
- `telephone`: deliberately omitted
- `areaServed`: `{ "@type": "Country", "name": "Australia" }` wired
- `sameAs`: NOT wired — awaiting Kathryn-supplied Facebook + Instagram URLs

**Recommendation noted in `2026-05-14_seo-drafts-review.md` Section 8:** if Kathryn wants a structured `[Country + AdministrativeArea]` array for stronger QLD signal, it's a 4-line change in `schema.ts`. Default left as single `Country: Australia` for cleanest broad signal.

### Decision 3 — Homepage title ⏸ deferred

Drafts now live in the consolidated review doc — see Section 1, `/` Home, options A/B/C plus the recommendation. **Option A** is recommended: remove `title: "Home"` from `src/app/page.tsx` so the strong layout default ("CH Digitals | Websites, Systems, and AI Automation") renders. One-line change once Kathryn picks.

### Decision 4 — /blog noindex ✅ done

- `src/app/blog/page.tsx`: added `robots: { index: false, follow: true }` to metadata.
- `src/app/sitemap.ts`: removed `/blog` entry.
- Re-index trigger documented in code comment and in the handover: **when 5+ articles ship in any cluster.** Alex tracks this.

### Decision 5 — TypewriterHeading H1 ✅ verified, no fix needed

Read the source of `src/components/site/typewriter-heading.tsx`:

```tsx
return (
  <h1
    className={`max-w-[11ch] font-display text-[clamp(2rem,5.2vw,4.1rem)] leading-[0.96] tracking-[-0.04em] text-white ${className}`}
    aria-label={fullText.replace(/\n/g, " ")}
  >
    {renderedLines.map((line, index) => (
      <span key={`${line}-${index}`} className="block">
        {line || " "}
      </span>
    ))}
    ...
  </h1>
);
```

Real semantic `<h1>` element with `font-display` (Fraunces), `aria-label` flattens the four animated lines for screen readers and SEO. No fix needed.

### Decision 6 — Visible breadcrumbs ✅ done across 9 sub-pages

- `src/components/site/breadcrumbs.tsx`: extended with `tone: "light" | "dark"` prop. Light tone uses meta-gray trail + black current. Dark tone uses white/45 trail + white/85 current. Sized at `text-[11px]` so it nests under the eyebrow rather than competing with it.
- All 9 sub-pages now have `<Breadcrumbs visible tone="..." />` placed as the first element inside the hero's container, above the eyebrow:
  - Light: `/about`, `/services`, `/work`, `/contact`, `/blog`, `/privacy`
  - Dark: `/ai-services`, `/bce`, `/work/dermagen`
- `/work/dermagen` previously had a hand-rolled "Work › DermaGen" breadcrumb in the hero. That's been replaced by the shared component (now 3 levels, dark tone, schema unchanged).
- `/blog` uses `flex justify-center` className to match its centered hero.

No page genuinely couldn't accommodate visible breadcrumbs — nothing was skipped or flagged back.

## Workflow fix — consolidated review doc

Filed at `seo/drafts/2026-05-14_seo-drafts-review.md`. Contains, in one file:

1. Title tag suggestions (11 routes)
2. Meta description suggestions
3. H1 alternates (6 main pages)
4. FAQ skeletons (21 questions, 5 pages)
5. Landing page outlines (10 routes)
6. Alt-text inventory
7. Redirect map
8. Internal linking map proposal
9. Schema-content gaps

Each section follows the brief's format: page/route, current state, proposed, rationale.

**Action required for Kathryn:** copy that file into OneDrive at `Tier 2/CH Digitals Website SEO/drafts/2026-05-14_seo-drafts-review.md`. The remote agent session has no OneDrive write access, so the file lives in the repo to be moved.

Once Kathryn has read the doc, Decision 3 (homepage title) resolves and Aria can begin the Copywriter pass on Sections 1–4.

## Date discrepancy answer

Previous-session files dated 2026-05-13 reflect the date provided by the system context at the start of that session (the `currentDate` system reminder said `Today's date is 2026-05-13`). This session's `currentDate` reads `2026-05-13` too, but the brief is dated 2026-05-14 and locks today as 2026-05-14, so the new files in this session are dated 2026-05-14 per the brief. No file content is affected; just a clock-source discrepancy between the system reminder and the human-authored brief. Worth noting in a future lessons entry that brief dates take precedence over system reminders when they disagree.

## Drafts manifest confirmation

`seo/drafts/MANIFEST.md` updated in this commit. Now lists:
- The primary consolidated review doc as the entry point
- All source draft files (still in place; they consolidate INTO the review doc, not replaced by it)
- Decisions locked between sessions
- Borderline-draft flags

## Risks / known issues

- Schema still not validated against a deployed URL. Rich Results Test verification still requires a preview deploy. Test URLs: `/`, `/services`, `/ai-services`, `/work`, `/work/dermagen`, `/about`, `/contact`, `/bce`, `/privacy`.
- Visible breadcrumbs were placed inside the hero containers without screenshots from a real render. If on a real device the breadcrumb feels too close to the eyebrow or too thin against the cream background, the spacing/sizing classes in `breadcrumbs.tsx` and the `className="mb-6"` on each call site are the touch points.
- `sameAs` schema gap remains until Kathryn supplies the FB + IG URLs.
- Layout `title.default` shadowed by `/page.tsx` `title: "Home"` is still active in production source until Decision 3 lands.

## Open items NOT for Code (still pending, per brief)

- **FB + IG URLs** for schema `sameAs` — Kathryn to supply
- **Real photo replacement** for AI portraits — Pixel + Kathryn task
- **Brand-guide update** to record the AI portrait deadline extension — owner Kathryn
- **Blocked-jobs sweep** (Screaming Frog, GSC, GA4, PageSpeed, image-file-size inventory, mobile device test, index bloat) — Alex or Kathryn; manual-check instructions remain in `seo/audits/2026-05-13_seo-source-audit.md`

## Rollback for this follow-up session

This session's publishable rollback target is **commit `757be433ac7c9f34929a659c5c0d210ceec790bc`** — every technical change (visible breadcrumbs + /blog noindex + areaServed schema + Breadcrumbs component extension) is in that single commit. To revert:

```
git revert 757be433ac7c9f34929a659c5c0d210ceec790bc
```

or to revert this whole session and the previous one back to clean main:

```
git reset --hard 712a6302a6cdbc8f214911e83422f394ed9ce785
```

This commit (drafts review doc + MANIFEST + handover) lives entirely under `seo/` and does not affect what gets deployed; it doesn't need to be in the rollback.

## Hook 4 — production publish

Batch-publishable scope from both sessions:
- All schema infrastructure (`6db7850`)
- BreadcrumbList + Article schema on sub-pages (`83091738`)
- Visible breadcrumbs + /blog noindex + areaServed (`757be433`)

One staging review, one approval phrase, one rollback commit.

**Required from Kathryn before publish:** type, in the same chat session as the publish:
```
APPROVE LIVE PUBLISH — CH Digitals — 2026-MM-DD
```

Staging QA checklist (from v2 brief) before requesting the phrase:
- All 11 pages render correctly (homepage, services, blog, work, contact, plus the 6 others)
- Mobile + desktop nav works
- Forms + booking links work
- Metadata present (titles, descriptions, canonicals) and no "Home | CH Digitals" regression
- Schema validates in Rich Results Test on each template (home, services, work, work/dermagen, ai-services, about, contact, bce)
- No obvious layout regressions, especially around the new visible breadcrumbs above each hero
- PageSpeed score not dropped vs current production

## Surprises / candidates for new lessons

1. **Decision sequencing.** The brief flagged that Decision 3 couldn't be made because Kathryn couldn't see the drafts. The fix (single consolidated review doc) should probably be standard for any SEO/copy work order from now on — one doc per session that consolidates everything voice-facing, rather than a folder of per-asset draft files. Folder layout still has value for Code-side tracking, but the human review surface is one file.

2. **Date discrepancies between system reminders and human briefs** are subtle but consistent. Future Code sessions should default to the brief date when they disagree. Adding to lessons.md candidates.

3. **Component tone props for dark/light hero variations** were a small but useful pattern that Breadcrumbs now demonstrates. Worth applying to any future shared element that needs to render across the site's two hero styles (cream vs black).

## Kathryn-time spent (estimate)

This session: 0 (autonomous remote agent execution; brief was the input, no interactive turns).

Previous session: 0 (also autonomous).

Total Phase 1a Code time spent so far across both sessions: probably 6–7 hours of agent execution. Kathryn-time gets spent in the **next** step — reading the consolidated review doc (~20 min), running the blocked-jobs sweep with Alex (~1 hour), and providing the 4 outstanding pieces of info (FB+IG URLs, hosting access, decision on homepage title, decision on LocalBusiness vs Organization upgrade).
