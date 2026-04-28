# STRUCTURE.md — CH-Digitals-website-main

## One sentence

chdigitals.com.au — the agency's public website, lead magnet hub, and Phase-3 placeholder for the BCE app route.

## Audience

SMEs, prospects, lead magnet downloaders, Gumroad template buyers.

## What it does

- Public marketing site
- Lead magnet downloads (linked to Gumroad)
- Roadmap session booking
- BCE waitlist (Phase 3 placeholder)

## Stack

- Next.js + Supabase + Vercel
- TypeScript, Tailwind

## Where it integrates

- **Brand:** CH Digital
- **Folder:** `6. PRODUCT/websites/CH-Digitals-website-main/`
- **Repo:** `github.com/kathryn-lgtm/CH-Digitals-website`
- **Depends on:** Supabase (lead capture), Vercel
- **Feeds:** leads → `5. SALES/CRM.md`, downloads → `2. FINANCE/REVENUE_LOG.md`

## Owner

Kathryn (strategic) + Claude Code (execution).

## Review cadence

Per-build. Monthly content review.

## Last updated

2026-04-25 — STRUCTURE.md created during restructure.

## Notes

- `node_modules/` and `.next/` stripped before move per decision #12. Run `npm install`.
- `.claude/settings.local.json` deleted per decision #13. Re-init before next Code session.
- Existing `CLAUDE.md` and `DOCS/` preserved.
