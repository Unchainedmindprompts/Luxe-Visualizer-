import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getArticleBySlug, getArticleSlugs } from "@/lib/articles";
import { generateArticleSchema } from "@/lib/schema";
import AuthorBio from "@/components/sections/AuthorBio";

interface ArticlePageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = getArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  try {
    const { frontmatter } = getArticleBySlug(params.slug);
    return {
      title: frontmatter.title,
      description: frontmatter.description,
      openGraph: {
        title: frontmatter.title,
        description: frontmatter.description,
        type: "article",
        publishedTime: frontmatter.date,
        modifiedTime: frontmatter.updated || frontmatter.date,
        images: [
          {
            url: frontmatter.image,
            width: 1200,
            height: 630,
            alt: frontmatter.imageAlt,
          },
        ],
      },
    };
  } catch {
    return {};
  }
}

const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-slate-950 mb-8" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-950 mt-20 mb-6" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="font-display text-2xl font-bold text-slate-950 mt-12 mb-4" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-lg leading-relaxed text-slate-900 mb-6" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-outside ml-6 space-y-2 text-lg text-slate-900 mb-6" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-outside ml-6 space-y-2 text-lg text-slate-900 mb-6" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-4 border-pine-500 pl-6 italic text-slate-700 my-10 text-lg" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-slate-950" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-pine-600 font-medium underline decoration-pine-600/30 underline-offset-2 hover:decoration-pine-600 hover:text-pine-700 transition-colors" {...props} />
  ),
};

export default function ArticlePage({ params }: ArticlePageProps) {
  let article;
  try {
    article = getArticleBySlug(params.slug);
  } catch {
    notFound();
  }

  const { frontmatter, content } = article;

  const articleSchema = generateArticleSchema({
    title: frontmatter.title,
    description: frontmatter.description,
    slug: params.slug,
    datePublished: frontmatter.date,
    dateModified: frontmatter.updated,
    image: frontmatter.image,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero — dual-layer overlay matches homepage for consistent nav/text protection */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <Image
          src={frontmatter.image}
          alt={frontmatter.imageAlt}
          fill
          priority
          quality={85}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/30 to-slate-900/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/30 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          {frontmatter.tags && (
            <div className="flex flex-wrap gap-2 mb-4">
              {frontmatter.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-medium text-white/90 border border-white/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-sm">
            {frontmatter.title}
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl drop-shadow-sm">
            {frontmatter.description}
          </p>
        </div>
      </section>

      {/* Article Content — explicit white background matches homepage sections */}
      <article className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <MDXRemote source={content} components={mdxComponents} />
        </div>
      </article>

      {/* Author Bio */}
      <AuthorBio />

      {/* Bottom CTA */}
      <section className="py-16 bg-pine-50 border-t border-pine-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-950 mb-4">
            Ready to See It for Yourself?
          </h2>
          <p className="text-lg text-slate-700 mb-8">
            Connect with your Relocation Scout and start exploring Northern Idaho.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-pine-600 text-white font-semibold text-lg rounded-xl hover:bg-pine-700 transition-all shadow-lg shadow-pine-600/25"
          >
            Start Your Relocation
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
