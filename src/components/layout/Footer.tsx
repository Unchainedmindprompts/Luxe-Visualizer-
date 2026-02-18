import Link from "next/link";
import { Linkedin, Twitter, Youtube } from "lucide-react";
import { Container } from "@/components/ui/Container";

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "X / Twitter", href: "#", icon: Twitter },
  { label: "YouTube", href: "#", icon: Youtube },
];

const FOOTER_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t"
      style={{
        backgroundColor: "var(--color-bg-deep)",
        borderColor:
          "color-mix(in srgb, var(--color-surface-muted) 60%, transparent)",
      }}
    >
      <Container>
        <div className="py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand + copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <span
                className="block w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: "var(--color-accent)" }}
                aria-hidden="true"
              />
              <span
                className="text-xs font-medium tracking-[0.1em] uppercase"
                style={{ color: "var(--color-text-primary)" }}
              >
                Zero Click Strategies
              </span>
            </div>
            <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
              &copy; {year} Zero Click Strategies. All rights reserved.
            </p>
          </div>

          {/* Footer links — CSS hover only, no JS handlers */}
          <nav aria-label="Footer navigation">
            <ul className="flex items-center gap-6" role="list">
              {FOOTER_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="footer-link text-xs transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-5" aria-label="Social media">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="social-link transition-colors duration-300"
              >
                <Icon size={16} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
