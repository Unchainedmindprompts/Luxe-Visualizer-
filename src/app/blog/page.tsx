import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Blog | Northern Idaho Lifestyle & Relocation Insights",
  description:
    "Explore in-depth guides on relocating to Northern Idaho — from outdoor recreation and four-season living to the geographic advantages of Coeur d'Alene and Post Falls.",
};

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-pine-600 mb-3">
            From the Field
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            Relocation Intel
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Deep dives on what makes Northern Idaho one of the most compelling
            lifestyle relocations in the country. Written by your Relocation
            Scout.
          </p>
        </div>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-200/80 hover:border-pine-300 hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-1 p-6">
                {/* Tags */}
                {article.tags && article.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {article.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="inline-block px-2.5 py-0.5 bg-pine-50 text-pine-700 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Title */}
                <h2 className="font-display text-xl font-bold text-slate-900 group-hover:text-pine-700 transition-colors mb-2">
                  {article.title}
                </h2>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 flex-1">
                  {article.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between mt-5 pt-5 border-t border-slate-100">
                  <time
                    dateTime={article.date}
                    className="text-xs text-slate-400 font-medium"
                  >
                    {new Date(article.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span className="inline-flex items-center text-sm font-medium text-pine-600 group-hover:text-pine-700">
                    Read
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
