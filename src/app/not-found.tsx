import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | INW Basecamp",
  description:
    "The page you're looking for doesn't exist. Explore Northern Idaho real estate and relocation resources on INW Basecamp.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-cream px-4">
      <div className="max-w-lg w-full text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-4">
          404 — Page Not Found
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-forest mb-6">
          We couldn&apos;t find that page.
        </h1>
        <p className="text-lg text-[#2C2C2C]/70 mb-10">
          It may have been moved or no longer exists. Head back to the homepage
          or browse our relocation guides.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-gold text-forest font-semibold text-base tracking-wide hover:bg-gold-500 transition-colors"
          >
            Go to Homepage
          </Link>
          <Link
            href="/articles"
            className="inline-flex items-center justify-center px-8 py-4 border border-forest/20 text-forest font-semibold text-base hover:border-forest/50 transition-colors"
          >
            Browse Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
