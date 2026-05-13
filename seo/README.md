# CH Digitals SEO — working folder

This folder holds Phase 1a outputs from the SEO work order
(v2, 2026-05-14). It mirrors the OneDrive structure described in the
brief (`Tier 2/CH Digitals Website SEO/`) because that path is not
reachable from a remote agent session.

## Layout

```
seo/
├── audits/     # crawl + source-code audit reports (Job 1.1)
├── drafts/     # raw material for Aria + Kathryn approval
│   ├── MANIFEST.md
│   ├── titles-and-metas/
│   ├── h1s/
│   ├── alt-text/
│   ├── faqs/
│   ├── landing-page-outlines/
│   ├── redirect-map/
│   ├── internal-linking-map/
│   └── schema-content/
├── approved/   # populated by Kathryn after read-aloud final
└── handover/   # per-session handover docs
```

## Discipline

- Files prefixed `DRAFT-` are not approved. They never get wired.
- Aria refines drafts through the Copywriter pattern.
- Kathryn does the read-aloud final and copies the approved version to
  `approved/` with prefix `APPROVED-`.
- In Phase 1b, Code wires only files from `approved/`.

See `audits/2026-05-13_seo-source-audit.md` for the Job 1.1 audit and
`handover/2026-05-13_phase-1a-handover.md` for the session handover.
