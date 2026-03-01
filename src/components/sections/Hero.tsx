import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/IMG_3429.jpeg"
          alt="Marina and boat docks along a rocky pine-covered bluff on a Northern Idaho lake"
          fill
          priority
          quality={75}
          className="object-cover"
          sizes="(max-width: 640px) 640px, (max-width: 1080px) 1080px, (max-width: 1920px) 1920px, 2048px"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest/60 via-forest/40 to-forest/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
        <div className="max-w-3xl">
          {/* Gold eyebrow */}
          <p className="animate-fade-in text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-6">
            Northern Idaho Real Estate &amp; Relocation
          </p>

          {/* Main Headline */}
          <h1 className="animate-slide-up font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-white leading-[1.05] tracking-tight mb-6">
            Find Your Northern Idaho Basecamp
          </h1>

          {/* Subheadline */}
          <p
            className="animate-slide-up text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl mb-10 font-sans"
            style={{ animationDelay: "0.15s" }}
          >
            Shirin Abplanalp helps active families relocate, root down, and thrive
            in one of the most beautiful places in America.
          </p>

          {/* CTAs */}
          <div
            className="animate-slide-up flex flex-col sm:flex-row gap-4"
            style={{ animationDelay: "0.3s" }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-forest font-semibold text-base tracking-wide hover:bg-gold-500 transition-colors"
            >
              Start Your Relocation
            </Link>
            <Link
              href="/articles/the-60-minute-rule"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold text-base tracking-wide border border-white/40 hover:border-white hover:bg-white/10 transition-all"
            >
              Explore the Lifestyle
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/50">
            Scroll
          </span>
          <svg
            className="w-5 h-5 text-white/40"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
