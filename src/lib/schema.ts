import { siteConfig } from "@/lib/site-data";

export type BreadcrumbItem = { name: string; href: string };

const orgId = `${siteConfig.url}/#organization`;

// One primary business entity for the site. Every other schema block
// that needs a publisher/provider references this @id so search engines
// see a single CH Digitals entity, not competing copies.
//
// Some fields are intentionally left out until Kathryn confirms them:
//   - telephone (open question 5 in the work order)
//   - sameAs social profiles (need confirmed URLs)
//   - areaServed boundary (open question 4)
// See seo/drafts/schema-content/DRAFT-organization-fields.md for the
// proposed values once those decisions land.
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": orgId,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/brand/logo-transparent.png`,
    email: siteConfig.contactEmail,
    address: {
      "@type": "PostalAddress",
      streetAddress: "9-13 King Street",
      addressLocality: "Emerald",
      addressRegion: "QLD",
      postalCode: "4720",
      addressCountry: "AU",
    },
    founder: {
      "@type": "Person",
      name: "Kathryn Weekley",
      jobTitle: "Founder",
      url: `${siteConfig.url}/about`,
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: { "@id": orgId },
    inLanguage: "en-AU",
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.href}`,
    })),
  };
}

export function articleSchema(args: {
  headline: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
}) {
  const image = args.image
    ? args.image.startsWith("http")
      ? args.image
      : `${siteConfig.url}${args.image}`
    : undefined;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: args.headline,
    description: args.description,
    url: `${siteConfig.url}${args.path}`,
    mainEntityOfPage: `${siteConfig.url}${args.path}`,
    author: {
      "@type": "Person",
      name: "Kathryn Weekley",
      url: `${siteConfig.url}/about`,
    },
    publisher: { "@id": orgId },
    ...(args.datePublished ? { datePublished: args.datePublished } : {}),
    ...(args.dateModified ? { dateModified: args.dateModified } : {}),
    ...(image ? { image } : {}),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function serviceSchema(args: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
  areaServed?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: args.name,
    description: args.description,
    url: `${siteConfig.url}${args.path}`,
    provider: { "@id": orgId },
    ...(args.serviceType ? { serviceType: args.serviceType } : {}),
    ...(args.areaServed ? { areaServed: args.areaServed } : {}),
  };
}
