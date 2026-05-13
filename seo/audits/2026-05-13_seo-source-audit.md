# CH Digitals SEO — Source-Code Audit

**Phase 1a Job 1.1**
**Date:** 2026-05-13
**Agent:** Claude (Opus 4.7)
**Scope:** Source-code inspection of `kathryn-lgtm/ch-digitals-website` Next.js 16 repo on `main` at SHA `712a6302`.
**Blocked items:** crawler, PageSpeed Insights, Search Console, mobile device testing — see end of file for manual-check instructions per work-order Access Assumption.

## Top 10 issues (and what was done)

| # | Finding | Severity | Status |
|---|---|---|---|
| 1 | Sitemap missed 4 indexable routes (`/blog`, `/bce`, `/privacy`, `/work/dermagen`) | High | Fixed in `6db7850` |
| 2 | No JSON-LD schema anywhere on the site | High | Organization + WebSite added in `6db7850`; Article + BreadcrumbList in `83091738` |
| 3 | No BreadcrumbList schema, no visible breadcrumbs on most sub-pages | Medium | Schema added on all sub-pages; visible design call flagged to Kathryn |
| 4 | AI portraits (`kathryn-about-fresh.jpg`, `kathryn-home-founder.jpg`) still in source after brand-guide replacement deadline of 2026-05-09 | High | **FLAG** — image-optimization paused on these two files |
| 5 | DermaGen meta description is 233 chars — over the 160-char SERP truncation point | Low | Draft rewrite in `seo/drafts/titles-and-metas/` |
| 6 | Page titles are short (e.g. "Home" → 17-char rendered title) and not keyword-optimised | Medium | Drafts produced; Aria + Kathryn approve before wiring |
| 7 | No FAQ sections anywhere — missed FAQPage schema + featured-snippet opportunity | Medium | FAQ skeletons drafted in `seo/drafts/faqs/` |
| 8 | No Open Graph image — share previews show no image | Low | Twitter card + OG type/locale/siteName added; image awaits Kathryn confirmation of source asset |
| 9 | Telephone, sameAs profiles, exact areaServed missing from Organization schema | Medium | Draft in `seo/drafts/schema-content/`; gaps flagged to Kathryn |
| 10 | `/blog` is indexable but contains only "Insights are coming" — thin content | Low | Recommend noindex until content lands. Flagged for Kathryn decision. |

## Already strong (no action needed)

- `metadataBase` set on root layout
- `title.template = "%s | CH Digitals"` keeps brand suffix consistent
- Per-page `alternates.canonical` on every route
- `robots.ts` exists and allows all
- `/review` correctly `robots: { index: false, follow: false }` (private client link)
- GA4 (`G-XKNMZFM8XX`) + Meta Pixel (`197332876517534`) wired in `layout.tsx` with `afterInteractive` strategy (won't block FCP)
- All images use `next/image`
- Hero images carry `priority` prop
- All CTAs use `min-h-12` (≥ 44px tap target)
- Mobile menu (hamburger) works in source

## Per-route inventory (11 routes)

| Route | Title (rendered) | Description chars | Canonical | H1 source | Notes |
|---|---|---|---|---|---|
| `/` | CH Digitals \| Websites, Systems, and AI Automation | 174 | `/` | heroContent.title | OK |
| `/about` | About \| CH Digitals | 188 | `/about` | inline | Two H2s for "Hi, I'm Kathryn" — fine |
| `/services` | Services \| CH Digitals | 167 | `/services` | inline | OK |
| `/ai-services` | AI Services \| CH Digitals | 158 | `/ai-services` | TypewriterHeading | Verify TypewriterHeading renders as `<h1>` |
| `/work` | Work \| CH Digitals | 174 | `/work` | inline | OK |
| `/work/dermagen` | DermaGen Case Study — $592K+ in Sales \| CH Digitals | **233 ⚠** | `/work/dermagen` | caseStudy.headline | Meta over 160 — draft rewrite filed |
| `/contact` | Contact \| CH Digitals | 175 | `/contact` | inline | OK |
| `/blog` | Blog \| CH Digitals | 153 | `/blog` | inline | Thin content — noindex recommendation |
| `/bce` | Business Clarity Engine — Early Access \| CH Digitals | 189 | `/bce` | inline | OK |
| `/privacy` | Privacy Policy \| CH Digitals | 84 | `/privacy` | inline | OK |
| `/review` | Leave a Review \| CH Digitals | 158 | `/review` | inline | Correctly noindex |

## Per-job status

### Job 1.1 — Full technical crawl
**Blocked.** No Screaming Frog/Sitebulb access in session. Source-code inspection above covers what a crawl would find for an internal route map. External crawl still needed to surface: outbound 404s, redirect chains from old URLs, third-party link rot, real-world response times.

**Manual check (Kathryn or Alex):**
```
# Free Screaming Frog (up to 500 URLs)
# 1. Download https://www.screamingfrog.co.uk/seo-spider/
# 2. Enter https://www.chdigitals.com.au
# 3. Run → export Bulk Export → "All Outlinks"
# 4. Save to seo/audits/ as 2026-MM-DD_crawl-results.csv
```

### Job 1.2 — Sitemap + robots ✅
Fixed in `6db7850`. Sitemap now enumerates 10 indexable routes explicitly. Submit at https://search.google.com/search-console after deploy.

### Job 1.3 — GSC + GA4 confirmation
- **GA4:** Wired in source. Verify hits arrive in https://analytics.google.com/ → Reports → Realtime after deploy.
- **GSC:** Blocked from session. Verify property at https://search.google.com/search-console (ownership token in DNS or `next` metadata `verification.google` field — not currently in source, so likely DNS-verified).
- **GA4 ↔ GSC link:** Confirm in GA4 Admin → Product links → Search Console.

### Job 1.4 — 404s + redirect chains
**Blocked** — needs crawl. Static-source check: every internal `<Link href=...>` and `Link to ...` references a route that exists in `src/app/`. No source-level dead links.

### Job 1.5 — Canonicals ✅
Every route has self-referencing `alternates.canonical`. No conflicts, no canonicals pointing to 404s or redirected URLs.

### Job 1.6 — Page speed
**Blocked.** PageSpeed Insights access required. Run after deploy at https://pagespeed.web.dev/ on each of: `/`, `/services`, `/ai-services`, `/work`, `/work/dermagen`, `/contact`.

Source-side observations:
- Next.js 16.2.1 + React 19. Modern, fast defaults.
- 3 variable-font families loaded (DM Sans, Fraunces, JetBrains Mono). JetBrains Mono usage looks confined to mono labels; consider dropping if not load-bearing. **Kathryn decision — design call.**
- Analytics scripts both `afterInteractive` — won't block FCP.
- No image domains configured in `next.config.ts` — all images local. Good.

### Job 1.7 — Image optimisation
**Cannot inspect file sizes from session.** Alt text drafted in `seo/drafts/alt-text/`.

**⚠ Paused on AI portraits** per work-order rule:
- `public/images/founder/kathryn-about-fresh.jpg` (used on `/` and `/about`)
- `public/images/founder/kathryn-home-founder.jpg` (used on `/`)

Brand-guide v2026-05-07 set 2026-05-09 as replacement deadline. Today is 2026-05-13 — 4 days past. **Flag to Kathryn before any optimization work touches these files.**

### Job 1.8 — Schema markup ✅ partial
Wired:
- **Organization** + **WebSite** at root layout (every page inherits)
- **BreadcrumbList** on all 9 sub-pages
- **Article** on `/work/dermagen`

Drafted, pending Kathryn approval (`seo/drafts/schema-content/`):
- LocalBusiness fields (telephone, sameAs, areaServed boundary)
- Service schema per `/services` (needs price range, areaServed)
- FAQPage — ready to wire once FAQ copy approved

### Job 1.9 — Mobile rendering
**Blocked from session.** Source-side: responsive Tailwind utilities throughout, hamburger menu present, 48px+ tap targets. Manual check on real iOS + Android device required.

### Job 1.10 — Index bloat
**Blocked** — GSC required. Source-side: only intentional routes; no tag/archive routes; no internal search; `/review` correctly noindexed.

**Recommendation:** Add `robots: { index: false, follow: true }` to `/blog` until real content lands.

### Job 1.11 — Breadcrumbs ✅
BreadcrumbList schema on all 9 sub-pages via new `<Breadcrumbs />` component. DermaGen retains its existing visible breadcrumb in the hero.

**Design call flagged:** every sub-page currently uses an eyebrow+H1 pattern (e.g. "Work" eyebrow above the H1 on `/work`). Adding visible breadcrumbs above the eyebrow would duplicate that signal. Two options for Kathryn:
- (a) keep eyebrow, leave breadcrumbs schema-only (current state)
- (b) replace eyebrow with the breadcrumb component on sub-pages (match `/work/dermagen` pattern)

One-line toggle (`visible={true}` on each `<Breadcrumbs>`) if option (b) is approved.

## What was changed in code

| Commit | Files | Scope |
|---|---|---|
| `6db7850eefc9a3ef1c5be9bdb86b3424aefaeef9` | schema lib, JsonLd, Breadcrumbs components; sitemap; layout | Infrastructure + Jobs 1.2 / 1.5 / 1.8 (partial) / 1.11 schema part |
| `83091738292d5459ed8215fbf2e2169859482a3a` | 8 sub-page pages.tsx | BreadcrumbList wired, Article on DermaGen |

## Rollback

Branch is `claude/ch-digitals-seo-phase-1a-bNtqw`. Last clean main is `712a6302a6cdbc8f214911e83422f394ed9ce785`.

```
# Revert one commit (granular)
git revert 83091738292d5459ed8215fbf2e2169859482a3a

# Revert both
git revert 83091738292d5459ed8215fbf2e2169859482a3a 6db7850eefc9a3ef1c5be9bdb86b3424aefaeef9

# Hard reset branch to pre-Phase-1a state
git reset --hard 712a6302a6cdbc8f214911e83422f394ed9ce785
```

Nothing has been merged to `main`. Nothing has been deployed to production. Hook 4 approval phrase has not been requested.

## Blocked-item summary (for Kathryn / Alex manual completion)

| Item | What to do | Where to log result |
|---|---|---|
| Crawl with Screaming Frog/Sitebulb | Run external crawl, export CSV | `seo/audits/YYYY-MM-DD_crawl-results.*` |
| PageSpeed scores on 6 key pages | Run pagespeed.web.dev, screenshot mobile + desktop | `seo/audits/YYYY-MM-DD_pagespeed.md` |
| GSC verification + sitemap submit + coverage report | Log in, submit `/sitemap.xml`, screenshot Pages report | `seo/audits/YYYY-MM-DD_gsc.md` |
| Rich Results Test on every template (home, services, work, work/dermagen) | Submit deployed URLs to https://search.google.com/test/rich-results | `seo/audits/YYYY-MM-DD_rich-results.md` |
| Mobile device test (iOS + Android) | Walk through nav, forms, CTAs, FAQ if added, booking link | `seo/audits/YYYY-MM-DD_mobile.md` |
| Image file-size inventory | `ls -lah public/images/**/*` locally; flag anything > 200KB | `seo/audits/YYYY-MM-DD_image-sizes.md` |
