DRAFT — not approved. Factual gaps. Kathryn confirms before wiring expanded schema.

# Organization / LocalBusiness schema — field gaps

## Already wired (in `src/lib/schema.ts` and rendered on every page)

```json
{
  "@type": "Organization",
  "@id": "https://www.chdigitals.com.au/#organization",
  "name": "CH Digitals",
  "url": "https://www.chdigitals.com.au",
  "logo": "https://www.chdigitals.com.au/images/brand/logo-transparent.png",
  "email": "Kathryn@chdigitals.com.au",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "9-13 King Street",
    "addressLocality": "Emerald",
    "addressRegion": "QLD",
    "postalCode": "4720",
    "addressCountry": "AU"
  },
  "founder": { "@type": "Person", "name": "Kathryn Weekley", "jobTitle": "Founder", "url": "https://www.chdigitals.com.au/about" }
}
```

Values sourced from `src/lib/site-data.ts` and the existing About page. Verify they're accurate.

## Gaps for Kathryn (factual, no voice)

| Field | Recommendation | Decision |
|---|---|---|
| `telephone` | Add a primary contact number if one exists for the business. | **Kathryn:** confirm a number, or confirm we deliberately don't publish one (then leave out). |
| `sameAs` | URLs of confirmed social/professional profiles (LinkedIn, Instagram, Facebook page, Shopify Partner directory listing, etc.) | **Kathryn:** paste the URLs you want associated. |
| `areaServed` | Open Question 4 in work order — Emerald only, Central Highlands, or wider regional QLD? | **Kathryn:** pick one of: `"Emerald QLD"`, `"Central Highlands, QLD"`, `"Regional Queensland, Australia"`. |
| `LocalBusiness` upgrade | The current `Organization` type is generic. If physical office hours / walk-in is a thing, upgrade `@type` to `["Organization", "LocalBusiness"]` and add `openingHoursSpecification`. | **Kathryn:** confirm physical walk-in or appointment-only. |
| `image` | Recommended for richer Google Business panel. Suggest using `/images/founder/kathryn-services.jpg` (real photo, not the AI portraits) at 1200×630. | **Kathryn:** confirm which image, or supply new. |

## Once values land

Update `organizationSchema()` in `src/lib/schema.ts` with the confirmed fields. Validate via https://search.google.com/test/rich-results on the deployed home URL. Schema validates with zero errors per work-order Definition of Done.
