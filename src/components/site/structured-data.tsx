import { siteConfig } from "@/lib/site-data";

/**
 * LocalBusiness (ProfessionalService) structured data.
 *
 * Feeds Google the business name, address, and contact details for the local
 * pack and rich results. Only verified facts from siteConfig are included —
 * telephone, opening hours, geo coordinates, and aggregateRating are
 * deliberately omitted until real, sourced values exist. Do not add a
 * star/review rating here without genuine review data behind it.
 */
export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.contactEmail,
    address: {
      "@type": "PostalAddress",
      streetAddress: "9-13 King Street",
      addressLocality: "Emerald",
      addressRegion: "QLD",
      postalCode: "4720",
      addressCountry: "AU",
    },
    areaServed: [
      { "@type": "Place", name: "Central Highlands, Queensland" },
      { "@type": "State", name: "Queensland" },
    ],
    sameAs: [
      "https://www.instagram.com/ch_digitals/",
      "https://www.facebook.com/chdigitals",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
