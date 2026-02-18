"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

/* ─── Animation config ───────────────────────────────────────────────────── */

const STAGGER_DELAY = 0.2; // 0.2s between each element

// Cubic bezier tuples — typed explicitly for Framer Motion v12
const EASE_EXECUTIVE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EASE_FADE: [number, number, number, number] = [0.4, 0, 0.2, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * STAGGER_DELAY,
      duration: 0.9,
      ease: EASE_EXECUTIVE,
    },
  }),
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * STAGGER_DELAY,
      duration: 1.2,
      ease: EASE_FADE,
    },
  }),
};

/* ─── Component ─────────────────────────────────────────────────────────── */

export function Hero() {
  return (
    <section
      className="relative min-h-dvh flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "var(--color-bg-deep)" }}
      aria-label="Hero"
    >
      {/* Subtle radial gradient — adds depth without noise */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, color-mix(in srgb, var(--color-accent) 8%, transparent) 0%, transparent 70%)",
        }}
      />

      {/* Subtle grid lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-text-primary) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <Container narrow className="relative z-10 text-center pb-24 pt-32">
        {/* Eyebrow label */}
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-6 inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium"
        >
          <span
            className="block w-1 h-1 rounded-full bg-[var(--color-accent)]"
            aria-hidden="true"
          />
          AI Visibility Strategy
        </motion.p>

        {/* Headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-balance font-light text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight text-[var(--color-text-primary)] mb-8"
        >
          Your Content Is the{" "}
          <span
            className="font-light"
            style={{ color: "var(--color-accent)" }}
          >
            Metadata
          </span>{" "}
          of Reality
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-pretty text-lg sm:text-xl lg:text-2xl text-[var(--color-text-secondary)] font-light leading-relaxed max-w-2xl mx-auto mb-12"
        >
          Zero Click Strategies helps CEOs and founders make their business
          legible to AI agents, wearables, and the next generation of search.
        </motion.p>

        {/* CTA row */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="#audit" variant="primary" size="lg">
            Start Your AI Audit
            <ArrowRight size={16} aria-hidden="true" />
          </Button>
          <Button href="#work" variant="ghost" size="lg">
            View Our Work
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          custom={4}
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-1.5 text-[var(--color-text-muted)]">
            <span className="text-[10px] tracking-[0.2em] uppercase">
              Scroll
            </span>
            <div className="w-px h-10 bg-gradient-to-b from-[var(--color-surface-muted)] to-transparent" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
