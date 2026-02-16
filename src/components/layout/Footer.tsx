import Link from "next/link";

const footerLinks = {
  explore: [
    { href: "/articles/the-60-minute-rule", label: "The 60-Minute Rule" },
    { href: "/articles/four-seasons", label: "Four Seasons" },
    { href: "/articles/geographic-jackpot", label: "Geographic Jackpot" },
  ],
  connect: [
    { href: "/contact", label: "Contact Us" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-pine-600 rounded-lg flex items-center justify-center">
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
                <span className="font-display font-bold text-lg text-white leading-none">
                  Basecamp
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-pine-400 leading-none">
                  INW
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Your Relocation Scout for Northern Idaho. We help active
              families and outdoor enthusiasts find their perfect basecamp in
              the Coeur d&apos;Alene and Post Falls region.
            </p>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Explore
            </h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-pine-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Connect
            </h3>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-pine-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-sm text-slate-400">
                Coeur d&apos;Alene &amp; Post Falls, Idaho
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Basecamp INW. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Northern Idaho&apos;s Premier Relocation Scout
          </p>
        </div>
      </div>
    </footer>
  );
}
