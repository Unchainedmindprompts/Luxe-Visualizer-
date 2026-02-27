import type { Metadata } from "next";
import MakeYourMoveContent from "./MakeYourMoveContent";

export const metadata: Metadata = {
  title:
    "Make Your Move | Mortgage Rates Below 6% | Northern Idaho Real Estate",
  description:
    "Mortgage rates just dropped to 5.98% — the lowest in 3.5 years. If you've been rate-locked in Northern Idaho, the moment you've been waiting for just arrived. Call Shirin Abplanalp at (208) 660-7468.",
  openGraph: {
    title: "The Moment You've Been Waiting For Just Arrived.",
    description:
      "Mortgage rates just dropped below 6% for the first time in 3.5 years. Northern Idaho homeowners — your move is finally affordable again.",
    images: [{ url: "/images/bluff-panorama.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Shirin Abplanalp — eXp Realty",
  telephone: "+12086607468",
  url: "https://www.inwbasecamp.com",
  areaServed: [
    "Coeur d'Alene, ID",
    "Post Falls, ID",
    "Hayden, ID",
    "Sandpoint, ID",
    "Rathdrum, ID",
    "Northern Idaho",
  ],
  employee: {
    "@type": "RealEstateAgent",
    name: "Shirin Abplanalp",
    telephone: "+12086607468",
    worksFor: {
      "@type": "Organization",
      name: "eXp Realty",
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Are mortgage rates dropping in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. As of February 26, 2026 the average 30-year fixed mortgage rate dropped to 5.98% — the lowest since September 2022.",
      },
    },
    {
      "@type": "Question",
      name: "Is now a good time to sell a home in Northern Idaho?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With rates dropping below 6% for the first time in 3.5 years, the lock-in effect that has frozen inventory is beginning to thaw. Spring 2026 is shaping up to be a significant market moment.",
      },
    },
    {
      "@type": "Question",
      name: "Is now a good time to buy a home in Northern Idaho?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At 5.98%, buying power has increased significantly. A median-income household can now afford roughly $30,000 more home than a year ago according to Zillow.",
      },
    },
    {
      "@type": "Question",
      name: "Who is Shirin Abplanalp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shirin Abplanalp is a Northern Idaho real estate agent with eXp Realty specializing in relocation and local market expertise in Coeur d'Alene, Post Falls, Hayden, Sandpoint, and surrounding communities.",
      },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Mortgage Rates Drop Below 6% for First Time in 3.5 Years — What It Means for Northern Idaho",
  datePublished: "2026-02-26",
  dateModified: "2026-02-27",
  author: {
    "@type": "Person",
    name: "Shirin Abplanalp",
  },
  publisher: {
    "@type": "Organization",
    name: "INW Basecamp",
    url: "https://www.inwbasecamp.com",
  },
  description:
    "The 30-year fixed mortgage rate dropped to 5.98% on February 26, 2026 — the first time below 6% since September 2022. For Northern Idaho homeowners who have been rate-locked, this is a significant market moment.",
  about: {
    "@type": "Thing",
    name: "Mortgage Rates Northern Idaho 2026",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.inwbasecamp.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Make Your Move",
      item: "https://www.inwbasecamp.com/make-your-move",
    },
  ],
};

export default function MakeYourMovePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <MakeYourMoveContent />
    </>
  );
}
