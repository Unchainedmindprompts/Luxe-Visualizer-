import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getArticleBySlug, getArticleSlugs } from "@/lib/articles";
import {
  generateArticleSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";
import { getArticleSchemaData } from "@/lib/article-schema-data";
import AuthorBio from "@/components/sections/AuthorBio";

interface ArticlePageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = getArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

const SITE_URL = "https://www.inwbasecamp.com";

function trimMetaDescription(text: string, maxLength = 160): string {
  if (text.length <= maxLength) return text;
  const trimmed = text.slice(0, maxLength);
  const lastSpace = trimmed.lastIndexOf(" ");
  return (lastSpace > 120 ? trimmed.slice(0, lastSpace) : trimmed) + "…";
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  try {
    const { frontmatter } = getArticleBySlug(params.slug);
    const canonicalUrl = `${SITE_URL}/articles/${params.slug}`;
    const metaDescription = trimMetaDescription(frontmatter.description);
    return {
      title: frontmatter.title,
      description: metaDescription,
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: frontmatter.title,
        description: metaDescription,
        type: "article",
        url: canonicalUrl,
        publishedTime: frontmatter.date,
        modifiedTime: frontmatter.updated || frontmatter.date,
        images: [
          {
            url: `${SITE_URL}${frontmatter.image}`,
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

// MDX components styled to match new design system
const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="font-display text-4xl md:text-5xl font-semibold text-forest tracking-tight mb-8 leading-tight"
      {...props}
    />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="font-display text-3xl md:text-4xl font-semibold text-forest tracking-tight mt-20 mb-6 leading-tight"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="font-display text-2xl font-semibold text-forest mt-12 mb-4"
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-lg leading-relaxed text-[#2C2C2C] mb-6" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className="list-disc list-outside ml-6 space-y-2 text-lg text-[#2C2C2C] mb-6"
      {...props}
    />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className="list-decimal list-outside ml-6 space-y-2 text-lg text-[#2C2C2C] mb-6"
      {...props}
    />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-gold pl-6 italic text-[#2C2C2C] my-10 text-lg"
      {...props}
    />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-forest" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="text-pine-600 font-medium underline decoration-pine-600/30 underline-offset-2 hover:decoration-pine-600 hover:text-pine-700 transition-colors"
      {...props}
    />
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
  const richData = getArticleSchemaData(params.slug);

  const articleSchema = generateArticleSchema({
    title: frontmatter.title,
    description: frontmatter.description,
    slug: params.slug,
    datePublished: frontmatter.date,
    dateModified: frontmatter.updated,
    image: frontmatter.image,
    keywords: richData?.keywords,
    about: richData?.about,
    mentions: richData?.mentions,
  });

  const faqSchema = richData?.faqs ? generateFAQSchema(richData.faqs) : null;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", path: "" },
    { name: "Articles", path: "/articles" },
    {
      name: richData?.breadcrumbTitle || frontmatter.title,
      path: `/articles/${params.slug}`,
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Article Hero */}
      <section className="relative h-[60vh] min-h-[440px] flex items-end overflow-hidden">
        <Image
          src={frontmatter.image}
          alt={frontmatter.imageAlt}
          fill
          priority
          quality={85}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/40 via-forest/30 to-forest/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 w-full">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-5">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white/80 transition-colors">Articles</Link>
            <span>/</span>
            <span className="text-white/70 line-clamp-1">{frontmatter.title}</span>
          </nav>

          {/* Tags */}
          {frontmatter.tags && (
            <div className="flex flex-wrap gap-2 mb-5">
              {frontmatter.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="inline-block px-3 py-1 bg-gold text-forest text-xs font-semibold uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight">
            {frontmatter.title}
          </h1>
          <p className="mt-4 text-base text-white/80 max-w-2xl leading-relaxed">
            {frontmatter.description}
          </p>
          <div className="mt-4 flex items-center gap-3 text-xs text-white/50">
            <time dateTime={frontmatter.date}>
              {new Date(frontmatter.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <span>·</span>
            <span>Shirin Abplanalp</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 md:py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <MDXRemote source={content} components={mdxComponents} />
        </div>
      </article>

      {/* Author Bio */}
      <AuthorBio />

      {/* Bottom CTA */}
      <section className="py-16 md:py-20 bg-forest">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-4">
            Ready to Make the Move?
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4">
            Ready to See It for Yourself?
          </h2>
          <p className="text-base text-white/70 mb-8">
            Connect with Shirin and start exploring Northern Idaho.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gold text-forest font-semibold text-base tracking-wide hover:bg-gold-500 transition-colors"
          >
            Start Your Relocation
          </Link>
        </div>
      </section>
    </>
  );
}
