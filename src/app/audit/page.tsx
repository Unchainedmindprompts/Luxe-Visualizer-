import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { AuditForm } from "@/components/audit/AuditForm";

export const metadata: Metadata = {
  title: "AI Readiness Audit",
  description:
    "Discover where your business stands in the age of AI-first search. Answer 4 questions and get your personalized risk score.",
};

export default function AuditPage() {
  return (
    <>
      <Navigation />

      <main
        className="min-h-dvh flex items-start py-32 lg:py-40"
        style={{ backgroundColor: "var(--color-bg-deep)" }}
      >
        <Container narrow>
          {/* Page header */}
          <div className="mb-12">
            <p
              className="mb-4 text-xs tracking-[0.2em] uppercase font-medium"
              style={{ color: "var(--color-accent)" }}
            >
              Audit
            </p>
            <h1
              className="text-4xl sm:text-5xl font-light tracking-tight mb-5"
              style={{ color: "var(--color-text-primary)" }}
            >
              AI Readiness Audit
            </h1>
            <p
              className="text-lg font-light leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              In 4 questions, find out where your business stands in the age of
              AI-first search — and what to do about it.
            </p>
          </div>

          {/* Form card */}
          <div
            className="rounded-xl border p-8 sm:p-10"
            style={{
              backgroundColor: "var(--color-bg-base)",
              borderColor: "var(--color-surface-muted)",
            }}
          >
            <AuditForm />
          </div>

          {/* Trust footnote */}
          <p
            className="mt-8 text-center text-xs leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            Your information is never sold or shared. Used only to deliver your
            results and, if you opt in, to follow up with relevant resources.
          </p>
        </Container>
      </main>

      <Footer />
    </>
  );
}
