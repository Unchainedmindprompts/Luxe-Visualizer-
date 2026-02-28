import Image from "next/image";
import Link from "next/link";

export default function ShirinIntro() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Shirin's photo */}
          <div className="relative">
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 overflow-hidden">
              <Image
                src="/images/shirin-abplanalp.jpg"
                alt="Shirin Abplanalp, licensed realtor at eXp Realty, Northern Idaho"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 45vw"
              />
            </div>
            {/* Decorative gold accent */}
            <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border-2 border-gold/30 -z-10" />
          </div>

          {/* Right: Story */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-4">
              Your Relocation Expert
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-forest leading-tight mb-8">
              Your Local Expert. Your Relocation Scout.
            </h2>

            {/* Gold left rule */}
            <div className="border-l-4 border-gold pl-6 mb-8">
              <p className="text-lg leading-relaxed text-[#2C2C2C]">
                Shirin Abplanalp is a licensed Northern Idaho realtor with eXp Realty
                who relocated here herself — giving her firsthand knowledge of what it
                takes to make the move.
              </p>
            </div>

            <p className="text-base leading-relaxed text-[#2C2C2C] mb-8">
              She combines deep local market expertise with genuine passion for this
              region to help families find not just a house, but a life they love.
              Whether you&apos;re months away from making the leap or just starting
              to explore, Shirin is your guide from first question to closing day.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-forest hover:text-gold-600 transition-colors group"
            >
              Meet Shirin
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
