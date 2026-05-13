DRAFT — not approved. Field content per service. Kathryn confirms before wiring.

# Service schema — /services and per-service pages

Schema builder is in `src/lib/schema.ts` (`serviceSchema`). Not yet wired on `/services` because the field content (price range, areaServed boundary) needs approval.

## Proposed wiring for /services

One `ItemList` of `Service` items, each referencing the primary organization as provider. Below is the *content* for each of the 6 services currently in `site-data.ts`.

### 1. Website Design & Development
```json
{
  "@type": "Service",
  "name": "Website Design & Development",
  "serviceType": "Web Design",
  "description": "Custom websites built to convert — fast, mobile-first, and designed around your customers.",
  "provider": { "@id": "https://www.chdigitals.com.au/#organization" },
  "areaServed": "<TBC — see DRAFT-organization-fields.md>"
}
```

### 2. Marketing Strategy & Systems
`serviceType`: "Digital Marketing Strategy"

### 3. Social Media Strategy & Content
`serviceType`: "Social Media Marketing"

### 4. Business Systems Integration
`serviceType`: "Business Systems Integration"

### 5. E-commerce
`serviceType`: "E-commerce Development"

### 6. Ongoing Partnership & Support
`serviceType`: "Digital Marketing Consulting"

## Gaps for Kathryn

| Field | Decision |
|---|---|
| `areaServed` | Same value across all 6 services. See `DRAFT-organization-fields.md`. |
| `offers` / `priceRange` | Do you want to publish a price range (e.g. "$5,000–$25,000") in schema? Most agencies do not. **Recommend leaving out.** |
| `audience` | Optional. Could narrow to `audienceType: "Small to medium business"`. **Recommend leaving out for cleanliness.** |

Once confirmed, wire on `/services` and on each Phase-2 landing page that targets a single service.
