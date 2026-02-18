"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { AuditForm } from "@/components/audit/AuditForm";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function AuditSection() {
  return (
    <Section id="audit">
      <Container narrow>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="mb-12 text-center"
        >
          <p
            className="mb-4 text-xs tracking-[0.2em] uppercase font-medium"
            style={{ color: "var(--color-accent)" }}
          >
            Audit
          </p>
          <h2
            className="text-balance text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-6"
            style={{ color: "var(--color-text-primary)" }}
          >
            Take the AI Readiness Audit
          </h2>
          <p
            className="text-lg font-light leading-relaxed max-w-xl mx-auto"
            style={{ color: "var(--color-text-secondary)" }}
          >
            In 4 questions, find out where your business stands in the age of
            AI-first search.
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
          className="rounded-xl border p-8 sm:p-10"
          style={{
            backgroundColor: "var(--color-bg-base)",
            borderColor: "var(--color-surface-muted)",
          }}
        >
          <AuditForm />
        </motion.div>
      </Container>
    </Section>
  );
}
