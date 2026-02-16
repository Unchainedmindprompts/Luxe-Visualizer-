import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "./metadata";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    image: `${SITE_URL}/images/og-basecamp.jpg`,
    telephone: "+1-208-660-7468",
    email: "dreamlifeinidhao@gmail.com",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-208-660-7468",
      email: "dreamlifeinidhao@gmail.com",
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Coeur d'Alene",
      addressRegion: "ID",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 47.6777,
      longitude: -116.7805,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Coeur d'Alene",
        "@id": "https://www.wikidata.org/wiki/Q486894",
      },
      {
        "@type": "City",
        name: "Post Falls",
        "@id": "https://www.wikidata.org/wiki/Q985402",
      },
      {
        "@type": "City",
        name: "Hayden",
      },
      {
        "@type": "City",
        name: "Rathdrum",
      },
      {
        "@type": "AdministrativeArea",
        name: "Kootenai County",
      },
    ],
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "17:00",
    },
  };
}

export function generateRealEstateAgentSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${SITE_URL}/#agent`,
    name: SITE_NAME,
    description:
      "Relocation Scout specializing in lifestyle-driven real estate in Northern Idaho's Coeur d'Alene and Post Falls region.",
    url: SITE_URL,
    image: `${SITE_URL}/images/og-basecamp.jpg`,
    telephone: "+1-208-660-7468",
    email: "dreamlifeinidhao@gmail.com",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-208-660-7468",
      email: "dreamlifeinidhao@gmail.com",
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Coeur d'Alene",
      addressRegion: "ID",
      postalCode: "83814",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 47.6777,
        longitude: -116.7805,
      },
      geoRadius: "50000",
    },
    knowsAbout: [
      "Northern Idaho Real Estate",
      "Coeur d'Alene Relocation",
      "Post Falls Real Estate",
      "Lifestyle Relocation",
      "Outdoor Recreation",
      "Mountain Biking",
      "Lake Activities",
      "Skiing",
    ],
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: {
      "@id": `${SITE_URL}/#agent`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/articles?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  keywords?: string[];
  about?: Record<string, unknown>[];
  mentions?: Record<string, unknown>[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: `${SITE_URL}/articles/${article.slug}`,
    image: article.image || `${SITE_URL}/images/og-basecamp.jpg`,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/articles/${article.slug}`,
    },
    ...(article.keywords && { keywords: article.keywords }),
    ...(article.about && { about: article.about }),
    ...(article.mentions && { mentions: article.mentions }),
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
