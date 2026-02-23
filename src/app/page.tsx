import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ValueProps from "@/components/sections/ValueProps";
import LifestyleShowcase from "@/components/sections/LifestyleShowcase";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Basecamp INW | Northern Idaho Relocation Scout",
  description:
    "Your Northern Idaho Relocation Scout. Coeur d'Alene and Post Falls are the ultimate basecamp for mountain biking, lake life, skiing, and outdoor living.",
  alternates: {
    canonical: "https://www.inwbasecamp.com",
  },
  openGraph: {
    type: "website",
    url: "https://www.inwbasecamp.com",
    title: "Basecamp INW | Northern Idaho Relocation Scout",
    description:
      "Your Northern Idaho Relocation Scout. Coeur d'Alene and Post Falls are the ultimate basecamp for mountain biking, lake life, skiing, and outdoor living.",
    images: [
      {
        url: "https://www.inwbasecamp.com/images/og-basecamp.jpg",
        width: 1200,
        height: 630,
        alt: "Basecamp INW - Northern Idaho Relocation Scout",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProps />
      <LifestyleShowcase />
      <CTASection />
    </>
  );
}
