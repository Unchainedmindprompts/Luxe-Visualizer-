const features = [
  {
    title: "The 60-Minute Rule",
    description:
      "Lakes, ski resorts, mountain bike trails, and river rapids — all within 60 minutes of your front door. No other region packs this much adventure into such a compact radius.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    href: "/articles/the-60-minute-rule",
  },
  {
    title: "Four Seasons of Adventure",
    description:
      "Unlike the endless brown of the Southwest or the gray of the Pacific Coast, Northern Idaho delivers four distinct, jaw-dropping seasons — each one packed with its own outdoor playground.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    href: "/articles/four-seasons",
  },
  {
    title: "The Geographic Jackpot",
    description:
      "Positioned at the intersection of mountains, lakes, and river valleys, Coeur d'Alene and Post Falls sit in one of the most geographically gifted corridors in the American West.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
    href: "/articles/geographic-jackpot",
  },
];

export default function ValueProps() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-pine-600 mb-3">
            Why Northern Idaho
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight text-balance">
            Your Lifestyle, Amplified
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Northern Idaho isn&apos;t just a place to live — it&apos;s a place
            to thrive. Here&apos;s why active families are making the move.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <a
              key={feature.title}
              href={feature.href}
              className="group relative bg-ridge-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 border border-transparent hover:border-slate-200"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-pine-100 rounded-xl flex items-center justify-center text-pine-700 group-hover:bg-pine-600 group-hover:text-white transition-colors mb-6">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3 group-hover:text-pine-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Arrow */}
              <div className="mt-6 flex items-center text-pine-600 font-medium text-sm group-hover:text-pine-700">
                Read More
                <svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
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
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
