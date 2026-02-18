"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Solutions", href: "#solutions" },
  { label: "Intelligence", href: "#intelligence" },
  { label: "Audit", href: "#audit" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "transition-all duration-700",
        scrolled
          ? "glass border-b border-subtle"
          : "bg-transparent"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label="Zero Click Strategies — home"
          >
            {/* Wordmark dot */}
            <span
              className="block w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] transition-transform duration-500 group-hover:scale-150"
              aria-hidden="true"
            />
            <span className="text-sm font-medium tracking-[0.08em] text-[var(--color-text-primary)] uppercase">
              Zero Click Strategies
            </span>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className={cn(
                    "text-sm text-[var(--color-text-secondary)]",
                    "hover:text-[var(--color-text-primary)]",
                    "transition-colors duration-300",
                    "tracking-wide"
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button href="#contact" variant="primary" size="sm">
              Book a Strategy Call
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-300 p-1"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </Container>

      {/* Mobile drawer */}
      <div
        className={cn(
          "md:hidden glass border-t border-subtle",
          "overflow-hidden transition-all duration-500",
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
        aria-hidden={!mobileOpen}
      >
        <Container>
          <ul className="flex flex-col gap-1 py-6" role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="block py-3 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-300 tracking-wide"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Button
                href="#contact"
                variant="primary"
                size="sm"
                className="w-full"
              >
                Book a Strategy Call
              </Button>
            </li>
          </ul>
        </Container>
      </div>
    </header>
  );
}
