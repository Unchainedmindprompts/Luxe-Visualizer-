import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/articles", label: "Articles" },
  { href: "/contact", label: "Contact" },
];

const articleLinks = [
  { href: "/articles/the-60-minute-rule", label: "The 60-Minute Rule" },
  { href: "/articles/four-seasons", label: "Four Seasons" },
  { href: "/articles/geographic-jackpot", label: "Geographic Jackpot" },
];

export default function Footer() {
  return (
    <footer className="bg-forest text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Left */}
          <div>
            <Link href="/" className="block mb-4">
              <span className="font-display text-2xl font-semibold text-white tracking-wide">
                INW Basecamp
              </span>
              <span className="block text-[11px] font-medium uppercase tracking-[0.2em] text-gold mt-0.5">
                Northern Idaho Real Estate
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-white/60 max-w-xs mt-4">
              Shirin Abplanalp helps active families relocate, root down, and thrive
              in Northern Idaho&apos;s most beautiful communities.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/20 flex-shrink-0">
                <Image
                  src="/images/shirin-abplanalp.jpg"
                  alt="Shirin Abplanalp, licensed realtor at eXp Realty"
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Shirin Abplanalp</p>
                <p className="text-xs text-white/50">Licensed Realtor · eXp Realty</p>
              </div>
            </div>
          </div>

          {/* Navigation Center */}
          <div className="md:flex md:gap-16">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-4">
                Navigate
              </h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 md:mt-0">
              <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-4">
                Articles
              </h3>
              <ul className="space-y-3">
                {articleLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Right */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+12086607468"
                  className="text-sm text-white/60 hover:text-gold transition-colors"
                >
                  (208) 660-7468
                </a>
              </li>
              <li>
                <a
                  href="mailto:dreamlifeinidaho@gmail.com"
                  className="text-sm text-white/60 hover:text-gold transition-colors break-all"
                >
                  dreamlifeinidaho@gmail.com
                </a>
              </li>
              <li className="text-sm text-white/60 leading-relaxed pt-2">
                510 S Clearwater Loop, Suite 100<br />
                Post Falls, ID 83854
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-2.5 bg-gold text-forest text-sm font-semibold hover:bg-gold-500 transition-colors"
              >
                Let&apos;s Talk Relocation
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} INW Basecamp. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Shirin Abplanalp · Licensed Realtor · eXp Realty · Northern Idaho
          </p>
        </div>
      </div>
    </footer>
  );
}
