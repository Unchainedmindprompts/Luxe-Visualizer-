import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bluff-panorama.jpg"
          alt="Marina and boat docks along a rocky pine-covered bluff on a Northern Idaho lake"
          fill
          priority
          quality={85}
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient overlays for depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/30 to-slate-900/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-sm font-medium text-white/90 mb-8">
              <svg
                className="w-4 h-4 text-pine-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              Your Relocation Scout &mdash; Coeur d&apos;Alene &amp; Post Falls, ID
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-slide-up font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            Find Your
            <span className="block text-pine-400">
              Northern Idaho
            </span>
            Basecamp
          </h1>

          {/* Subheadline */}
          <p className="animate-slide-up text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl mb-10" style={{ animationDelay: "0.15s" }}>
            Mountain biking. Lake life. World-class skiing. Discover why active
            families are relocating to the Inland Northwest &mdash; where every day
            feels like a vacation and your next trail is minutes away.
          </p>

          {/* CTA Buttons */}
          <div className="animate-slide-up flex flex-col sm:flex-row gap-4" style={{ animationDelay: "0.3s" }}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-pine-600 text-white font-semibold text-lg rounded-xl hover:bg-pine-700 transition-all shadow-lg shadow-pine-600/25 hover:shadow-xl hover:shadow-pine-600/30 hover:-translate-y-0.5"
            >
              Start Your Relocation
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
            <Link
              href="/articles/the-60-minute-rule"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold text-lg rounded-xl border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-0.5"
            >
              Explore the Lifestyle
            </Link>
          </div>

          {/* Activity Tags */}
          <div className="animate-fade-in mt-16 flex flex-wrap gap-3" style={{ animationDelay: "0.5s" }}>
            {[
              { icon: "M12 3v18m-9-9l9-9 9 9", label: "Mountain Biking" },
              { icon: "M12 3C6.5 3 2 6.5 2 12s4.5 9 10 9 10-4.5 10-9S17.5 3 12 3z", label: "Lake Life" },
              { icon: "M3 21l9-18 9 18H3z", label: "Skiing & Snowboarding" },
              { icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945", label: "Hiking & Trails" },
            ].map((activity) => (
              <span
                key={activity.label}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-sm text-white/70"
              >
                <svg
                  className="w-4 h-4 text-pine-400/80"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={activity.icon}
                  />
                </svg>
                {activity.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-white/50"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
          />
        </svg>
      </div>
    </section>
  );
}
