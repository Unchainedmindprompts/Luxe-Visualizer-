import type { Metadata } from "next";

const SITE_URL = "https://www.inwbasecamp.com";
const SITE_NAME = "Basecamp INW";
const SITE_DESCRIPTION =
  "Your Relocation Scout for Northern Idaho. Discover why Coeur d'Alene and Post Falls are the ultimate basecamp for mountain biking, lake life, skiing, and year-round outdoor living.";

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Northern Idaho Relocation Scout`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Northern Idaho real estate",
    "Coeur d'Alene relocation",
    "Post Falls homes",
    "Idaho lifestyle",
    "mountain biking Idaho",
    "lake life Coeur d'Alene",
    "skiing Northern Idaho",
    "relocation scout",
    "Basecamp INW",
    "North Idaho living",
    "outdoor lifestyle Idaho",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Northern Idaho Relocation Scout`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/images/og-basecamp.jpg`,
        width: 1200,
        height: 630,
        alt: "Basecamp INW - Northern Idaho Relocation Scout",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Northern Idaho Relocation Scout`,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/images/og-basecamp.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export { SITE_URL, SITE_NAME, SITE_DESCRIPTION };
