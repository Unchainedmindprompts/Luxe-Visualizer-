import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 bg-pine-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="topo" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M50 0 C20 25 20 75 50 100" fill="none" stroke="white" strokeWidth="0.5" />
              <path d="M0 50 C25 20 75 20 100 50" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topo)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight text-balance mb-6">
          Ready to Find Your Basecamp?
        </h2>
        <p className="text-lg md:text-xl text-pine-200 leading-relaxed max-w-2xl mx-auto mb-10">
          Whether you&apos;re dreaming about lakefront mornings, post-work trail rides,
          or powder days on the mountain — your Northern Idaho lifestyle starts
          with a conversation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-pine-900 font-semibold text-lg rounded-xl hover:bg-ridge-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Let&apos;s Talk Relocation
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
            href="/articles/geographic-jackpot"
            className="inline-flex items-center justify-center px-8 py-4 bg-pine-800 text-white font-semibold text-lg rounded-xl border border-pine-700 hover:bg-pine-700 transition-all hover:-translate-y-0.5"
          >
            Learn About the Area
          </Link>
        </div>
      </div>
    </section>
  );
}
