import Image from "next/image";
import Link from "next/link";

export default function LeadCapture() {
  return (
    <section className="relative overflow-hidden">
      {/* Full bleed background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/lakefront-dock.jpg"
          alt="Long wooden dock stretching across a calm Northern Idaho lake at golden hour"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-forest/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-40 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-6">
          Start the Conversation
        </p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-8">
          Ready to Find Your Basecamp?
        </h2>
        <p className="text-lg text-white/75 leading-relaxed max-w-2xl mx-auto mb-12">
          Whether you are dreaming about lakefront mornings, post-work trail rides,
          or powder days on the mountain — your Northern Idaho lifestyle starts
          with a conversation.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-10 py-4 bg-gold text-forest font-semibold text-base tracking-wide hover:bg-gold-500 transition-colors"
        >
          Let&apos;s Talk Relocation
        </Link>
      </div>
    </section>
  );
}
