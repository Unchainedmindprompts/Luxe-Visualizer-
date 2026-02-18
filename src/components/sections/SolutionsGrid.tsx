"use client";

import { motion, type Variants } from "framer-motion";
import { Cpu, Eye, Users, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

/* ─── Constants ─────────────────────────────────────────────────────────── */

// Typed as tuple — required by Framer Motion v12 for cubic bezier
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EASE_HOVER: [number, number, number, number] = [0.4, 0, 0.2, 1];

interface SolutionTile {
  icon: LucideIcon;
  title: string;
  body: string;
}

const SOLUTIONS: SolutionTile[] = [
  {
    icon: Cpu,
    title: "Agentic Readiness",
    body: "We audit and restructure your digital content so AI agents can discover, parse, and recommend your business accurately — across every platform and model.",
  },
  {
    icon: Eye,
    title: "Multimodal Visibility",
    body: "From voice search to visual AI to wearable interfaces, we ensure your brand surfaces in every emerging channel where your customers are asking questions.",
  },
  {
    icon: Users,
    title: "Human-in-the-Loop Architecture",
    body: "AI handles discovery. Your team closes the deal. We design systems that hand off seamlessly from automated touchpoints to high-value human conversations.",
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
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

/* ─── SolutionCard ──────────────────────────────────────────────────────── */

function SolutionCard({ icon: Icon, title, body }: SolutionTile) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{
        y: -6,
        transition: { duration: 0.45, ease: EASE_HOVER },
      }}
      className="solution-card group relative flex flex-col gap-5 p-8 rounded-lg border"
      style={{
        backgroundColor: "var(--color-surface-elevated)",
        borderColor: "var(--color-surface-muted)",
      }}
    >
      {/* Icon container */}
      <div
        className="solution-icon flex items-center justify-center w-11 h-11 rounded-md"
        style={{
          backgroundColor:
            "color-mix(in srgb, var(--color-accent) 12%, transparent)",
          color: "var(--color-accent)",
        }}
      >
        <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-3">
        <h3
          className="text-lg font-medium leading-snug"
          style={{ color: "var(--color-text-primary)" }}
        >
          {title}
        </h3>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {body}
        </p>
      </div>

      {/* Accent border glow on hover — rendered via CSS (.solution-card:hover) */}
    </motion.article>
  );
}

/* ─── SolutionsGrid ─────────────────────────────────────────────────────── */

export function SolutionsGrid() {
  return (
    <Section alternate id="solutions">
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
            Solutions
          </p>
          <h2
            className="text-balance text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight"
            style={{ color: "var(--color-text-primary)" }}
          >
            Where We Focus
          </h2>
        </motion.div>

        {/* Card grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {SOLUTIONS.map((solution) => (
            <SolutionCard key={solution.title} {...solution} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
