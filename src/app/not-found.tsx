import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Basecamp INW",
  description:
    "The page you're looking for doesn't exist. Explore Northern Idaho relocation resources on Basecamp INW.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-white px-4">
      <div className="max-w-lg w-full text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-pine-600 mb-4">
          404 — Page Not Found
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-950 mb-6">
          We couldn&apos;t find that page.
        </h1>
        <p className="text-lg text-slate-700 mb-10">
          It may have been moved or no longer exists. Head back to the homepage
          or browse our relocation guides.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-pine-600 text-white font-semibold text-lg rounded-xl hover:bg-pine-700 transition-all shadow-lg shadow-pine-600/25"
          >
            Go to Homepage
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-8 py-4 border border-slate-200 text-slate-800 font-semibold text-lg rounded-xl hover:border-pine-300 hover:text-pine-700 transition-all"
          >
            Browse Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
