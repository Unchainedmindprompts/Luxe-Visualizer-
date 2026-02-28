import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllArticles } from "@/lib/articles";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Articles | Northern Idaho Real Estate & Lifestyle Guides",
  description:
    "Market insights, lifestyle guides, and relocation intelligence from Northern Idaho. Written by Shirin Abplanalp, licensed realtor at eXp Realty.",
  alternates: {
    canonical: "https://www.inwbasecamp.com/articles",
  },
  openGraph: {
    type: "website",
    url: "https://www.inwbasecamp.com/articles",
    title: "Articles | Northern Idaho Real Estate & Lifestyle Guides",
    description:
      "Market insights, lifestyle guides, and relocation intelligence from Northern Idaho. Written by Shirin Abplanalp, licensed realtor at eXp Realty.",
    images: [
      {
        url: "https://www.inwbasecamp.com/images/og-basecamp.jpg",
        width: 1200,
        height: 630,
        alt: "INW Basecamp Articles",
      },
    ],
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "INW Basecamp Articles",
  description:
    "Market insights, lifestyle guides, and relocation intelligence from Northern Idaho.",
  url: "https://www.inwbasecamp.com/articles",
  publisher: {
    "@type": "Person",
    name: "Shirin Abplanalp",
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", path: "" },
  { name: "Articles", path: "/articles" },
]);

function getCategory(tags: string[]): string {
  if (!tags || tags.length === 0) return "Lifestyle";
  const tag = tags[0].toLowerCase();
  if (tag.includes("relocation")) return "Relocation";
  if (tag.includes("market")) return "Market Updates";
  if (tag.includes("neighborhood")) return "Neighborhood Guides";
  return "Lifestyle";
}

function readTime(description: string): string {
  const words = description.split(" ").length;
  const mins = Math.max(3, Math.ceil(words / 200) + 4);
  return `${mins} min read`;
}

export default function ArticlesPage() {
  const articles = getAllArticles();
  const [featured, ...rest] = articles;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Header */}
      <section className="pt-32 pb-16 md:pt-44 md:pb-24 bg-cream border-b border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-4">
            Field Notes
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-forest leading-tight mb-6">
            From The Field
          </h1>
          <p className="text-lg text-[#2C2C2C]/70 max-w-xl leading-relaxed">
            Market insights, lifestyle guides, and relocation intelligence from
            Northern Idaho.
          </p>
        </div>
      </section>

      {/* Featured Article — full-width editorial */}
      {featured && (
        <section className="bg-white border-b border-cream-200">
          <Link
            href={`/articles/${featured.slug}`}
            className="group block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-gold text-forest text-xs font-semibold uppercase tracking-wider">
                    {getCategory(featured.tags)}
                  </span>
                </div>
              </div>
              <div>
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#2C2C2C]/40 block mb-4">
                  Featured Article
                </span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-forest group-hover:text-gold-600 transition-colors leading-tight mb-5">
                  {featured.title}
                </h2>
                <p className="text-base leading-relaxed text-[#2C2C2C]/70 mb-6">
                  {featured.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-[#2C2C2C]/40">
                  <time dateTime={featured.date}>
                    {new Date(featured.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                  <span>·</span>
                  <span>{readTime(featured.description)}</span>
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-forest group-hover:text-gold-600 transition-colors">
                  Read Article
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Article Grid */}
      {rest.length > 0 && (
        <section className="py-16 md:py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rest.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="group flex flex-col bg-white"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-gold text-forest text-xs font-semibold uppercase tracking-wider">
                        {getCategory(article.tags)}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="flex flex-col flex-1 p-6">
                    <h2 className="font-display text-xl md:text-2xl font-semibold text-forest group-hover:text-gold-600 transition-colors leading-tight mb-3">
                      {article.title}
                    </h2>
                    <p className="text-sm text-[#2C2C2C]/70 leading-relaxed line-clamp-3 flex-1">
                      {article.description}
                    </p>
                    <div className="mt-5 pt-5 border-t border-cream-200 flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-[#2C2C2C]/40">
                        <time dateTime={article.date}>
                          {new Date(article.date).toLocaleDateString("en-US", {
                            month: "long",
                            year: "numeric",
                          })}
                        </time>
                        <span>·</span>
                        <span>{readTime(article.description)}</span>
                      </div>
                      <span className="text-xs font-semibold text-forest group-hover:text-gold-600 transition-colors">
                        Read →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
