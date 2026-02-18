import { cn } from "@/lib/utils";
import Link from "next/link";

type ButtonVariant = "primary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    "bg-[var(--color-accent)] text-white",
    "hover:bg-[var(--color-accent-hover)]",
    "shadow-[0_0_24px_color-mix(in_srgb,var(--color-accent)_25%,transparent)]",
    "hover:shadow-[0_0_32px_color-mix(in_srgb,var(--color-accent)_40%,transparent)]",
    "transition-all duration-500",
  ].join(" "),
  ghost: [
    "bg-transparent text-[var(--color-text-primary)]",
    "border border-[var(--color-surface-muted)]",
    "hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]",
    "transition-all duration-500",
  ].join(" "),
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm tracking-wide",
  lg: "px-8 py-4 text-base tracking-wide",
};

/**
 * Button — supports primary (electric blue CTA) and ghost variants.
 * Pass `href` to render as a Next.js Link.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
  onClick,
  type = "button",
  disabled = false,
  external = false,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2",
    "rounded-[var(--radius-md)] font-medium",
    "cursor-pointer select-none",
    "disabled:opacity-40 disabled:cursor-not-allowed",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
