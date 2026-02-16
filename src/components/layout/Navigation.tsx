"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/articles/the-60-minute-rule", label: "The 60-Minute Rule" },
  { href: "/articles/four-seasons", label: "Four Seasons" },
  { href: "/articles/geographic-jackpot", label: "Geographic Jackpot" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-pine-600 rounded-lg flex items-center justify-center group-hover:bg-pine-700 transition-colors">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 21l9-18 9 18H3z"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg text-slate-900 leading-none">
                Basecamp
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-pine-600 leading-none">
                INW
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-pine-700 hover:bg-pine-50 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 bg-pine-600 text-white text-sm font-semibold rounded-lg hover:bg-pine-700 transition-colors shadow-sm"
            >
              Start Your Relocation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 animate-fade-in">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-base font-medium text-slate-700 hover:bg-pine-50 hover:text-pine-700 rounded-lg transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3">
              <Link
                href="/contact"
                className="block w-full text-center px-5 py-3 bg-pine-600 text-white font-semibold rounded-lg hover:bg-pine-700 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Start Your Relocation
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
