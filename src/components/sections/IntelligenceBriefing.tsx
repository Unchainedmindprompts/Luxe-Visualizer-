"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

/* ─── Constants ─────────────────────────────────────────────────────────── */

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EASE_HOVER: [number, number, number, number] = [0.4, 0, 0.2, 1];

interface Article {
  tag: string;
  title: string;
  excerpt: string;
}

const ARTICLES: Article[] = [
  {
    tag: "AEO Fundamentals",
    title: "Why Zero-Click Search Is the Biggest Shift Since Mobile",
    excerpt:
      "When AI answers the question before the user clicks, your content strategy has to change completely. Here's where most businesses are getting it wrong.",
  },
  {
    tag: "Agentic AI",
    title: "How to Make Your Business Legible to AI Agents",
    excerpt:
      "AI agents don't browse — they query structured data. If your digital presence isn't optimized for machine comprehension, you're invisible to the next generation of buyers.",
  },
  {
    tag: "Strategy",
    title: "The CEO's Guide to AI Readiness in 2025",
    excerpt:
      "A practical framework for evaluating where your organization stands — and what to prioritize — as AI reshapes how customers discover and choose vendors.",
  },
];

/* ─── Variants ──────────────────────────────────────────────────────────── */

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

/* ─── ArticleCard ───────────────────────────────────────────────────────── */

function ArticleCard({ tag, title, excerpt }: Article) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{
        y: -4,
        transition: { duration: 0.4, ease: EASE_HOVER },
      }}
      className="intel-card group flex flex-col gap-4 p-7 rounded-lg border"
      style={{
        backgroundColor: "var(--color-bg-base)",
        borderColor: "var(--color-surface-muted)",
      }}
    >
      {/* Tag pill */}
      <span
        className="self-start inline-block text-[11px] font-medium tracking-[0.12em] uppercase px-2.5 py-1 rounded"
        style={{
          color: "var(--color-accent)",
          backgroundColor:
            "color-mix(in srgb, var(--color-accent) 10%, transparent)",
        }}
      >
        {tag}
      </span>

      {/* Title */}
      <h3
        className="text-lg font-light leading-snug text-balance"
        style={{ color: "var(--color-text-primary)" }}
      >
        {title}
      </h3>

      {/* Excerpt */}
      <p
        className="text-sm leading-relaxed flex-1"
        style={{ color: "var(--color-text-secondary)" }}
      >
        {excerpt}
      </p>

      {/* Read More link */}
      <Link
        href="#"
        className="intel-read-more inline-flex items-center gap-1.5 text-xs font-medium tracking-wide mt-1 w-fit"
        style={{ color: "var(--color-accent)" }}
        aria-label={`Read more: ${title}`}
      >
        Read More
        <ArrowRight
          size={12}
          className="transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </Link>
    </motion.article>
  );
}

/* ─── IntelligenceBriefing ──────────────────────────────────────────────── */

export function IntelligenceBriefing() {
  return (
    <Section id="intelligence">
      <Container>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="mb-16 text-center"
        >
          <p
            className="mb-4 text-xs tracking-[0.2em] uppercase font-medium"
            style={{ color: "var(--color-accent)" }}
          >
            Intelligence
          </p>
          <h2
            className="text-balance text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-6"
            style={{ color: "var(--color-text-primary)" }}
          >
            Strategic Intelligence Briefing
          </h2>
          <p
            className="text-lg font-light leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Frameworks and field notes from the frontier of AI-powered business
            strategy.
          </p>
        </motion.div>

        {/* Article grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {ARTICLES.map((article) => (
            <ArticleCard key={article.title} {...article} />
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1, ease: EASE, delay: 0.35 }}
          className="flex justify-center"
        >
          <Button href="#" variant="ghost" size="md">
            View All Intelligence
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
}
