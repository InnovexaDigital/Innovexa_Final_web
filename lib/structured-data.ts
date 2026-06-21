/**
 * Centralized JSON-LD structured data (schema.org) for rich results.
 *
 * Architecture (linked via @id so Google merges them into one knowledge graph):
 *  - Organization / ProfessionalService  → the business entity (NAP, geo, hours, offers)
 *  - WebSite                              → the site entity, published by the organization
 *  - WebPage / FAQPage / BreadcrumbList   → per-page entities
 *
 * Site-wide nodes are emitted from app/layout.tsx; page-specific nodes from each page.
 *
 * NOTE: We intentionally do NOT emit Review or AggregateRating schema. The testimonials
 * are first-party, so marking them up as review snippets would violate Google's review
 * snippet policy and risk a manual action. Do not add it off the testimonials data.
 */
import { company, faqs, services } from "@/lib/site-data";
import { siteUrl } from "@/lib/site-config";

type Schema = Record<string, unknown>;

const ORG_ID = `${siteUrl}/#organization`;
const WEBSITE_ID = `${siteUrl}/#website`;

// Normalize phone to E.164 for schema (e.g. "+91 95660 61075" -> "+919566061075").
const phoneE164 = company.phone.replace(/[^+0-9]/g, "");

const sameAs = [
  `https://instagram.com/${company.instagram}`,
  `https://linkedin.com/company/${company.linkedin}`,
  `https://github.com/${company.github}`,
  `https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}`
];

const logo = {
  "@type": "ImageObject",
  "@id": `${siteUrl}/#logo`,
  url: `${siteUrl}/icon-512.png`,
  contentUrl: `${siteUrl}/icon-512.png`,
  width: 512,
  height: 512,
  caption: company.name
};

/** Organization + LocalBusiness in one node (ProfessionalService is a subtype of both). */
export function organizationSchema(): Schema {
  return {
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: company.name,
    alternateName: "Innovexa",
    url: siteUrl,
    logo,
    image: `${siteUrl}/og.png`,
    description: company.description,
    slogan: "Build. Automate. Scale.",
    email: company.email,
    telephone: phoneE164,
    priceRange: "$$",
    currenciesAccepted: "INR, USD",
    paymentAccepted: "Bank Transfer, UPI, Card",
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      addressLocality: company.address.locality,
      addressRegion: company.address.region,
      postalCode: company.address.postalCode,
      addressCountry: "IN"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: company.geo.latitude,
      longitude: company.geo.longitude
    },
    areaServed: [
      { "@type": "City", name: "Chennai" },
      { "@type": "Country", name: "India" },
      { "@type": "Place", name: "Worldwide" }
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00"
      }
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: phoneE164,
        email: company.email,
        contactType: "customer support",
        areaServed: ["IN", "Worldwide"],
        availableLanguage: ["English", "Tamil"]
      }
    ],
    sameAs,
    knowsAbout: [
      "Website Development",
      "Mobile App Development",
      "AI Automation",
      "Agentic AI",
      "Digital Marketing",
      "Search Engine Optimization",
      "Billing Software Development",
      "Branding",
      "Content Creation"
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.detail,
          provider: { "@id": ORG_ID },
          areaServed: { "@type": "Country", name: "India" }
        }
      }))
    }
  };
}

export function webSiteSchema(): Schema {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: siteUrl,
    name: company.name,
    description: company.description,
    inLanguage: "en",
    publisher: { "@id": ORG_ID }
  };
}

/** Site-wide @graph emitted once in the root layout. */
export function globalGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationSchema(), webSiteSchema()]
  };
}

type Faq = { question: string; answer: string };

export function faqPageSchema(items: Faq[] = faqs, pageUrl: string = siteUrl): Schema {
  return {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    isPartOf: { "@id": WEBSITE_ID },
    inLanguage: "en",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

type ServiceInput = {
  name: string;
  description: string;
  path: string;
};

export function serviceSchema({ name, description, path }: ServiceInput): Schema {
  const url = `${siteUrl}${path}`;
  return {
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    serviceType: name,
    description,
    url,
    provider: { "@id": ORG_ID },
    areaServed: [
      { "@type": "City", name: "Chennai" },
      { "@type": "Country", name: "India" },
      { "@type": "Place", name: "Worldwide" }
    ]
  };
}

type Crumb = { name: string; path: string };

export function breadcrumbSchema(crumbs: Crumb[]): Schema {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${siteUrl}${crumb.path}`
    }))
  };
}

type WebPageInput = {
  path: string;
  name: string;
  description: string;
};

export function webPageSchema({ path, name, description }: WebPageInput): Schema {
  const url = `${siteUrl}${path === "/" ? "" : path}`;
  return {
    "@type": "WebPage",
    "@id": `${url}/#webpage`,
    url: url || siteUrl,
    name,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en",
    primaryImageOfPage: { "@id": `${siteUrl}/#logo` }
  };
}

/** Compose a page-level @graph from the building blocks above. */
export function pageGraph(nodes: Schema[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes
  };
}
