import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import ShirinIntro from "@/components/sections/ValueProps";
import LifestylePillars from "@/components/sections/LifestyleShowcase";
import LeadCapture from "@/components/sections/CTASection";
import { getAllArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "INW Basecamp | Northern Idaho Real Estate & Relocation",
  description:
    "Shirin Abplanalp helps active families relocate to Northern Idaho. Licensed realtor at eXp Realty specializing in Coeur d'Alene, Post Falls, and the Inland Northwest.",
  alternates: {
    canonical: "https://www.inwbasecamp.com",
  },
  openGraph: {
    type: "website",
    url: "https://www.inwbasecamp.com",
    title: "INW Basecamp | Northern Idaho Real Estate & Relocation",
    description:
      "Shirin Abplanalp helps active families relocate to Northern Idaho. Licensed realtor at eXp Realty specializing in Coeur d'Alene, Post Falls, and the Inland Northwest.",
    images: [
      {
        url: "https://www.inwbasecamp.com/images/og-basecamp.jpg",
        width: 1200,
        height: 630,
        alt: "INW Basecamp - Northern Idaho Real Estate & Relocation",
      },
    ],
  },
};

function categoryLabel(tags: string[]): string {
  if (!tags || tags.length === 0) return "Article";
  const tag = tags[0];
  if (tag.toLowerCase().includes("relocation")) return "Relocation";
  if (tag.toLowerCase().includes("lifestyle")) return "Lifestyle";
  if (tag.toLowerCase().includes("market")) return "Market";
  return tag;
}

export default function HomePage() {
  const articles = getAllArticles();
  const featuredArticles = articles.slice(0, 3);

  return (
    <>
      {/* Section 1: Hero */}
      <Hero />

      {/* Section 2: Shirin Introduction */}
      <ShirinIntro />

      {/* Section 3: Why Northern Idaho — Lifestyle Pillars */}
      <LifestylePillars />

      {/* Section 4: The 60-Minute Rule Editorial Feature */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-8">
              The Geographic Advantage
            </p>
            {/* Large pull quote */}
            <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-forest leading-tight mb-10 border-l-4 border-gold pl-8">
              Lakes, ski resorts, mountain bike trails, and river rapids — all within
              60 minutes of your front door.
            </blockquote>
            <p className="text-lg leading-relaxed text-[#2C2C2C] mb-6 pl-8 border-l-4 border-cream-200">
              No other region in the American West packs this much adventure into
              such a compact radius. From your front door in Coeur d&apos;Alene or
              Post Falls, you can be carving powder at Schweitzer, paddling on
              pristine Priest Lake, or ripping singletrack on Canfield Mountain —
              all before dinner.
            </p>
            <p className="text-lg leading-relaxed text-[#2C2C2C] mb-10 pl-8 border-l-4 border-cream-200">
              This is what Shirin calls the 60-Minute Rule: the reason active
              families keep choosing Northern Idaho as their forever basecamp.
            </p>
            <div className="pl-8">
              <Link
                href="/articles/the-60-minute-rule"
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-forest hover:text-gold-600 transition-colors group"
              >
                Read the full article
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Featured Articles */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-3">
                Field Notes
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-forest">
                From The Field
              </h2>
            </div>
            <Link
              href="/articles"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-[#2C2C2C] hover:text-gold-600 transition-colors group"
            >
              All Articles
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden mb-5">
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Gold category tag */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-gold text-forest text-xs font-semibold uppercase tracking-wider">
                      {categoryLabel(article.tags)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1">
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-forest group-hover:text-gold-600 transition-colors leading-tight mb-3">
                    {article.title}
                  </h3>
                  <p className="text-sm text-[#2C2C2C]/70 leading-relaxed line-clamp-3 flex-1">
                    {article.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-[#2C2C2C]/50">
                    <time dateTime={article.date}>
                      {new Date(article.date).toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 sm:hidden">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-forest hover:text-gold-600 transition-colors"
            >
              View all articles →
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: Lead Capture CTA */}
      <LeadCapture />
    </>
  );
}
