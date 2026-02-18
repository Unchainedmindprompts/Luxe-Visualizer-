"use client";

import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  CalendarCheck,
  Download,
  AlertTriangle,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";

/* ─── Easing ────────────────────────────────────────────────────────────── */

const EASE: [number, number, number, number] = [0.4, 0, 0.2, 1];
const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ─────────────────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────────────────── */

interface QuestionConfig {
  question: string;
  options: string[];
  scores: number[];
}

const QUESTIONS: QuestionConfig[] = [
  {
    question:
      "When someone searches for your service in ChatGPT or Perplexity, does your business appear?",
    options: [
      "Yes, consistently",
      "Sometimes",
      "Rarely or never",
      "I've never checked",
    ],
    scores: [0, 10, 25, 40],
  },
  {
    question: "How would you describe your current content strategy?",
    options: [
      "We publish structured, AI-optimized content regularly",
      "We have a blog but it's inconsistent",
      "We have a website but minimal content",
      "We have no content strategy",
    ],
    scores: [0, 15, 30, 45],
  },
  {
    question:
      "Are your competitors appearing in AI-generated answers for your core keywords?",
    options: [
      "No, we dominate",
      "It's about even",
      "They appear more than us",
      "I don't know",
    ],
    scores: [0, 10, 30, 20],
  },
];

const TOTAL_STEPS = 4;

/* ─────────────────────────────────────────────────────────────────────────
   SCORING
───────────────────────────────────────────────────────────────────────── */

interface RiskTier {
  label: string;
  sublabel: string;
  color: string;
  icon: React.ElementType;
  interpretation: string;
}

function getRiskTier(score: number): RiskTier {
  if (score <= 20) {
    return {
      label: "Low Risk",
      sublabel: "You're ahead of the curve. Let's keep it that way.",
      color: "#3b82f6",
      icon: ShieldCheck,
      interpretation:
        "Your business has a meaningful head start in AI visibility. That said, the landscape is shifting fast. Zero Click Strategies can help you turn this early advantage into a durable, compounding lead — before your competitors close the gap.",
    };
  }
  if (score <= 50) {
    return {
      label: "Moderate Risk",
      sublabel: "Gaps exist. Competitors may be gaining ground in AI channels.",
      color: "#f59e0b",
      icon: AlertCircle,
      interpretation:
        "Gaps exist in your AI presence, and competitors may already be gaining ground in channels you're not monitoring. This is the critical window to act — the organizations that invest in AI visibility now will become the default answers tomorrow. A strategy session will identify exactly where to focus first.",
    };
  }
  return {
    label: "High Risk",
    sublabel: "Your business has limited AI visibility. Action is needed now.",
    color: "#ef4444",
    icon: AlertTriangle,
    interpretation:
      "Your business has limited visibility in AI-driven discovery channels. As AI becomes the primary interface for finding products and services, this gap will compound. The good news: this is fixable — but the window for catching up is narrowing. Let's build an action plan now.",
  };
}

/* ─────────────────────────────────────────────────────────────────────────
   ANIMATION VARIANTS
───────────────────────────────────────────────────────────────────────── */

const slideVariants: Variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 52 : -52,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: EASE },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -52 : 52,
    opacity: 0,
    transition: { duration: 0.25, ease: EASE },
  }),
};

/* ─────────────────────────────────────────────────────────────────────────
   PROGRESS BAR
───────────────────────────────────────────────────────────────────────── */

function ProgressBar({ step }: { step: number }) {
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-3">
        <span
          className="text-[11px] tracking-[0.18em] uppercase font-medium"
          style={{ color: "var(--color-accent)" }}
        >
          AI Readiness Audit
        </span>
        <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>
          Step {step + 1} of {TOTAL_STEPS}
        </span>
      </div>

      {/* Four segment bar */}
      <div
        className="flex gap-1.5"
        role="progressbar"
        aria-valuenow={step + 1}
        aria-valuemin={1}
        aria-valuemax={TOTAL_STEPS}
        aria-label={`Step ${step + 1} of ${TOTAL_STEPS}`}
      >
        {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
          <div
            key={i}
            className="flex-1 h-[2px] rounded-full overflow-hidden"
            style={{ backgroundColor: "var(--color-surface-muted)" }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: "var(--color-accent)" }}
              initial={false}
              animate={{ width: i <= step ? "100%" : "0%" }}
              transition={{ duration: 0.5, ease: EASE_OUT }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   RADIO CARD
───────────────────────────────────────────────────────────────────────── */

function RadioCard({
  label,
  selected,
  onSelect,
}: {
  label: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className="w-full text-left flex items-center gap-4 px-5 py-4 rounded-lg border transition-colors duration-300"
      style={{
        backgroundColor: selected
          ? "color-mix(in srgb, var(--color-accent) 8%, var(--color-surface-elevated))"
          : "var(--color-surface-elevated)",
        borderColor: selected
          ? "var(--color-accent)"
          : "var(--color-surface-muted)",
      }}
      onMouseEnter={(e) => {
        if (!selected)
          e.currentTarget.style.borderColor = "var(--color-text-muted)";
      }}
      onMouseLeave={(e) => {
        if (!selected)
          e.currentTarget.style.borderColor = "var(--color-surface-muted)";
      }}
    >
      {/* Radio indicator */}
      <div
        className="flex-shrink-0 flex items-center justify-center w-4 h-4 rounded-full border-2 transition-colors duration-300"
        style={{
          borderColor: selected
            ? "var(--color-accent)"
            : "var(--color-text-muted)",
        }}
      >
        {selected && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.15, ease: EASE_OUT }}
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: "var(--color-accent)" }}
          />
        )}
      </div>

      {/* Label */}
      <span
        className="text-sm leading-snug"
        style={{
          color: selected
            ? "var(--color-text-primary)"
            : "var(--color-text-secondary)",
        }}
      >
        {label}
      </span>
    </button>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   QUESTION VIEW
───────────────────────────────────────────────────────────────────────── */

function QuestionView({
  config,
  answer,
  onAnswer,
}: {
  config: QuestionConfig;
  answer: number | null;
  onAnswer: (i: number) => void;
}) {
  return (
    <div className="flex flex-col gap-7">
      <h3
        className="text-xl sm:text-2xl font-light leading-snug text-balance"
        style={{ color: "var(--color-text-primary)" }}
      >
        {config.question}
      </h3>
      <div className="flex flex-col gap-3">
        {config.options.map((option, i) => (
          <RadioCard
            key={option}
            label={option}
            selected={answer === i}
            onSelect={() => onAnswer(i)}
          />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   CONTACT VIEW
───────────────────────────────────────────────────────────────────────── */

interface ContactData {
  firstName: string;
  lastName: string;
  businessName: string;
  email: string;
  challenge: string;
}

function ContactView({
  data,
  onChange,
}: {
  data: ContactData;
  onChange: (u: Partial<ContactData>) => void;
}) {
  const labelClass =
    "text-[11px] font-medium tracking-[0.12em] uppercase";

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h3
          className="text-xl sm:text-2xl font-light mb-2"
          style={{ color: "var(--color-text-primary)" }}
        >
          Where should we send your results?
        </h3>
        <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
          Your audit score and recommendations will be tailored to your
          business.
        </p>
      </div>

      {/* First + Last name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="flex flex-col gap-2">
          <span className={labelClass} style={{ color: "var(--color-text-secondary)" }}>
            First Name{" "}
            <span style={{ color: "var(--color-accent)" }}>*</span>
          </span>
          <input
            type="text"
            required
            autoComplete="given-name"
            value={data.firstName}
            onChange={(e) => onChange({ firstName: e.target.value })}
            placeholder="Sarah"
            className="audit-input"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className={labelClass} style={{ color: "var(--color-text-secondary)" }}>
            Last Name{" "}
            <span style={{ color: "var(--color-accent)" }}>*</span>
          </span>
          <input
            type="text"
            required
            autoComplete="family-name"
            value={data.lastName}
            onChange={(e) => onChange({ lastName: e.target.value })}
            placeholder="Chen"
            className="audit-input"
          />
        </label>
      </div>

      {/* Business Name */}
      <label className="flex flex-col gap-2">
        <span className={labelClass} style={{ color: "var(--color-text-secondary)" }}>
          Business Name{" "}
          <span style={{ color: "var(--color-accent)" }}>*</span>
        </span>
        <input
          type="text"
          required
          autoComplete="organization"
          value={data.businessName}
          onChange={(e) => onChange({ businessName: e.target.value })}
          placeholder="Acme Corp"
          className="audit-input"
        />
      </label>

      {/* Email */}
      <label className="flex flex-col gap-2">
        <span className={labelClass} style={{ color: "var(--color-text-secondary)" }}>
          Work Email{" "}
          <span style={{ color: "var(--color-accent)" }}>*</span>
        </span>
        <input
          type="email"
          required
          autoComplete="email"
          value={data.email}
          onChange={(e) => onChange({ email: e.target.value })}
          placeholder="sarah@acmecorp.com"
          className="audit-input"
        />
      </label>

      {/* Biggest challenge — optional */}
      <label className="flex flex-col gap-2">
        <span className={labelClass} style={{ color: "var(--color-text-secondary)" }}>
          Biggest AI Challenge{" "}
          <span style={{ color: "var(--color-text-muted)" }}>(optional)</span>
        </span>
        <textarea
          value={data.challenge}
          onChange={(e) => onChange({ challenge: e.target.value })}
          placeholder="In one sentence, describe your biggest concern about AI search…"
          rows={3}
          className="audit-input resize-none"
        />
      </label>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   RESULTS VIEW
───────────────────────────────────────────────────────────────────────── */

function ResultsView({
  score,
  contact,
}: {
  score: number;
  contact: ContactData;
}) {
  const tier = getRiskTier(score);
  const Icon = tier.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE_OUT }}
      className="flex flex-col gap-8"
    >
      {/* Score header */}
      <div className="flex flex-col items-center text-center gap-4 pt-2 pb-2">
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.1 }}
          className="flex items-center justify-center w-16 h-16 rounded-full"
          style={{
            backgroundColor: `color-mix(in srgb, ${tier.color} 14%, transparent)`,
          }}
        >
          <Icon size={28} style={{ color: tier.color }} aria-hidden="true" />
        </motion.div>

        <div>
          <p
            className="text-[11px] tracking-[0.2em] uppercase font-medium mb-2"
            style={{ color: tier.color }}
          >
            Your Result
          </p>
          <h3
            className="text-3xl sm:text-4xl font-light tracking-tight mb-2"
            style={{ color: "var(--color-text-primary)" }}
          >
            {tier.label}
          </h3>
          <p
            className="text-sm font-light mb-4"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {tier.sublabel}
          </p>
          {/* Score badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs"
            style={{
              backgroundColor: "var(--color-surface-elevated)",
              color: "var(--color-text-secondary)",
            }}
          >
            Risk Score:{" "}
            <span
              className="font-semibold"
              style={{ color: "var(--color-text-primary)" }}
            >
              {score}
            </span>
            <span style={{ color: "var(--color-text-muted)" }}>/ 100</span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        className="h-px"
        style={{
          backgroundColor:
            "color-mix(in srgb, var(--color-surface-muted) 70%, transparent)",
        }}
      />

      {/* Interpretation */}
      <div
        className="rounded-lg p-6 border"
        style={{
          backgroundColor: "var(--color-surface-elevated)",
          borderColor: "var(--color-surface-muted)",
        }}
      >
        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {tier.interpretation}
        </p>
      </div>

      {/* CTAs */}
      <div className="flex flex-col gap-3">
        <a
          href="[INSERT YOUR GHL BOOKING URL]"
          className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 rounded-md text-sm font-medium text-white transition-all duration-300 hover:opacity-90"
          style={{
            backgroundColor: "var(--color-accent)",
            boxShadow:
              "0 0 28px color-mix(in srgb, var(--color-accent) 30%, transparent)",
          }}
        >
          <CalendarCheck size={16} aria-hidden="true" />
          Book Your Free Strategy Call
        </a>
        <a
          href="#"
          className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 rounded-md text-sm font-medium border transition-all duration-300"
          style={{
            borderColor: "var(--color-surface-muted)",
            color: "var(--color-text-primary)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--color-accent)";
            e.currentTarget.style.color = "var(--color-accent)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--color-surface-muted)";
            e.currentTarget.style.color = "var(--color-text-primary)";
          }}
        >
          <Download size={16} aria-hidden="true" />
          Download the AI Readiness Checklist
        </a>
      </div>

      {/* Email confirmation note */}
      <p
        className="text-center text-xs"
        style={{ color: "var(--color-text-muted)" }}
      >
        Results sent to{" "}
        <span style={{ color: "var(--color-text-secondary)" }}>
          {contact.email}
        </span>
      </p>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   MAIN FORM COMPONENT
───────────────────────────────────────────────────────────────────────── */

export function AuditForm() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [answers, setAnswers] = useState<(number | null)[]>([null, null, null]);
  const [contact, setContact] = useState<ContactData>({
    firstName: "",
    lastName: "",
    businessName: "",
    email: "",
    challenge: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const isQuestion = step < 3;
  const isContact = step === 3;

  // Next is enabled when: question step has a selection, contact step has required fields
  const canAdvance = isQuestion
    ? answers[step] !== null
    : contact.firstName.trim() !== "" &&
      contact.lastName.trim() !== "" &&
      contact.businessName.trim() !== "" &&
      contact.email.includes("@");

  function goNext() {
    if (!canAdvance) return;
    if (isContact) {
      // Tally score and reveal results
      const total = QUESTIONS.reduce((acc, q, i) => {
        const ans = answers[i];
        return acc + (ans !== null ? q.scores[ans] : 0);
      }, 0);
      setScore(total);
      setSubmitted(true);
    } else {
      setDirection(1);
      setStep((s) => s + 1);
    }
  }

  function goBack() {
    setDirection(-1);
    setStep((s) => s - 1);
  }

  // Results screen — no navigation chrome
  if (submitted) {
    return <ResultsView score={score} contact={contact} />;
  }

  return (
    <div>
      <ProgressBar step={step} />

      {/* Animated step panel */}
      <div
        className="relative overflow-hidden"
        style={{ minHeight: "360px" }}
      >
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={step}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {isQuestion ? (
              <QuestionView
                config={QUESTIONS[step]}
                answer={answers[step]}
                onAnswer={(i) => {
                  setAnswers((prev) => {
                    const next = [...prev];
                    next[step] = i;
                    return next;
                  });
                }}
              />
            ) : (
              <ContactView
                data={contact}
                onChange={(u) =>
                  setContact((prev) => ({ ...prev, ...u }))
                }
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Back / Next navigation */}
      <div
        className="flex items-center justify-between mt-8 pt-6 border-t"
        style={{
          borderColor:
            "color-mix(in srgb, var(--color-surface-muted) 60%, transparent)",
        }}
      >
        {/* Back */}
        <button
          type="button"
          onClick={goBack}
          disabled={step === 0}
          className="inline-flex items-center gap-1.5 text-sm transition-all duration-300"
          style={{
            color: "var(--color-text-secondary)",
            opacity: step === 0 ? 0 : 1,
            pointerEvents: step === 0 ? "none" : "auto",
          }}
        >
          <ChevronLeft size={15} aria-hidden="true" />
          Back
        </button>

        {/* Next / Submit */}
        <button
          type="button"
          onClick={goNext}
          disabled={!canAdvance}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium transition-all duration-500"
          style={{
            backgroundColor: canAdvance
              ? "var(--color-accent)"
              : "var(--color-surface-elevated)",
            color: canAdvance ? "#ffffff" : "var(--color-text-muted)",
            cursor: canAdvance ? "pointer" : "not-allowed",
            boxShadow: canAdvance
              ? "0 0 20px color-mix(in srgb, var(--color-accent) 28%, transparent)"
              : "none",
          }}
        >
          {isContact ? "Get My Results" : "Next"}
          <ChevronRight size={15} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
