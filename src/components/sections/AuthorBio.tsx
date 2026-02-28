import Image from "next/image";
import Link from "next/link";

export default function AuthorBio() {
  return (
    <section className="py-12 md:py-16 bg-cream border-t border-cream-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="w-20 h-20 overflow-hidden ring-2 ring-gold/30">
              <Image
                src="/images/shirin-abplanalp.jpg"
                alt="Shirin Abplanalp, licensed realtor at eXp Realty"
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Bio Content */}
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-1">
              Written by
            </p>
            <h3 className="font-display text-xl font-semibold text-forest mb-1">
              Shirin Abplanalp
            </h3>
            <p className="text-xs text-[#2C2C2C]/50 mb-4">
              Licensed Realtor · eXp Realty · Northern Idaho
            </p>
            <p className="text-sm text-[#2C2C2C]/70 leading-relaxed mb-5">
              Shirin is a licensed realtor at eXp Realty and the founder of INW
              Basecamp. She relocated to Northern Idaho herself — giving her
              firsthand knowledge of the Coeur d&apos;Alene area, the lifestyle, and
              the real estate market. She helps active families find not just a
              house, but the life they&apos;ve been dreaming about.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-2.5 bg-gold text-forest text-sm font-semibold hover:bg-gold-500 transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                href="/articles"
                className="inline-flex items-center px-5 py-2.5 bg-transparent text-forest text-sm font-semibold border border-forest/20 hover:border-forest/50 transition-colors"
              >
                More Articles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
