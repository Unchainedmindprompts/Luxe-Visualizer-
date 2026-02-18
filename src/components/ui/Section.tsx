import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  /** Alternate background — uses bg-base instead of bg-deep */
  alternate?: boolean;
}

/**
 * Section — semantic <section> with consistent vertical rhythm.
 * Alternates between the two background tokens.
 */
export function Section({
  children,
  className,
  id,
  alternate = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full py-24 lg:py-32",
        alternate
          ? "bg-[var(--color-bg-base)]"
          : "bg-[var(--color-bg-deep)]",
        className
      )}
    >
      {children}
    </section>
  );
}
