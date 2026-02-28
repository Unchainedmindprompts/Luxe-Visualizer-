import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ui/ContactForm";
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Shirin Abplanalp | Northern Idaho Relocation",
  description:
    "Connect with Shirin Abplanalp, licensed realtor at eXp Realty. Start your Northern Idaho relocation conversation today — (208) 660-7468.",
  alternates: {
    canonical: "https://www.inwbasecamp.com/contact",
  },
  openGraph: {
    type: "website",
    url: "https://www.inwbasecamp.com/contact",
    title: "Contact Shirin Abplanalp | Northern Idaho Relocation",
    description:
      "Connect with Shirin Abplanalp, licensed realtor at eXp Realty. Start your Northern Idaho relocation conversation today — (208) 660-7468.",
    images: [
      {
        url: "https://www.inwbasecamp.com/images/og-basecamp.jpg",
        width: 1200,
        height: 630,
        alt: "Contact INW Basecamp",
      },
    ],
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", path: "" },
  { name: "Contact", path: "/contact" },
]);

export default function ContactPage() {
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-44 md:pb-24 bg-cream border-b border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-4">
            Let&apos;s Talk
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-forest leading-tight">
            Ready to Find Your Basecamp?
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Shirin info */}
            <div>
              <div className="flex items-start gap-5 mb-10">
                <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-gold/30">
                  <Image
                    src="/images/shirin-abplanalp.jpg"
                    alt="Shirin Abplanalp, licensed realtor at eXp Realty"
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-semibold text-forest">
                    Shirin Abplanalp
                  </h2>
                  <p className="text-sm text-[#2C2C2C]/60 mt-1">
                    Licensed Realtor · eXp Realty · Northern Idaho
                  </p>
                </div>
              </div>

              <p className="text-base leading-relaxed text-[#2C2C2C] mb-8 border-l-4 border-gold pl-5">
                Whether you&apos;re 18 months out or ready to move next spring —
                the best time to start this conversation is now. I&apos;ll help you
                understand the market, explore the best neighborhoods for your
                lifestyle, and build a plan that makes your move feel possible.
              </p>

              <div className="space-y-4 mb-10">
                <a
                  href="tel:+12086607468"
                  className="flex items-center gap-3 text-[#2C2C2C] hover:text-gold-600 transition-colors group"
                >
                  <div className="w-10 h-10 bg-forest flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#2C2C2C]/40 mb-0.5">Phone</p>
                    <span className="font-medium">(208) 660-7468</span>
                  </div>
                </a>

                <a
                  href="mailto:dreamlifeinidaho@gmail.com"
                  className="flex items-center gap-3 text-[#2C2C2C] hover:text-gold-600 transition-colors group"
                >
                  <div className="w-10 h-10 bg-forest flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#2C2C2C]/40 mb-0.5">Email</p>
                    <span className="font-medium">dreamlifeinidaho@gmail.com</span>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-[#2C2C2C]">
                  <div className="w-10 h-10 bg-forest flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#2C2C2C]/40 mb-0.5">Office</p>
                    <span className="font-medium">
                      510 S Clearwater Loop, Suite 100<br />
                      Post Falls, ID 83854
                    </span>
                  </div>
                </div>
              </div>

              {/* Testimonials placeholder */}
              <div className="bg-white border border-cream-200 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  Client Stories
                </p>
                <p className="text-sm text-[#2C2C2C]/50 italic">
                  Testimonials coming soon — in the meantime, reach out directly to
                  hear about Shirin&apos;s work from her clients.
                </p>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <div className="bg-white p-8 md:p-10 border border-cream-200">
                <h2 className="font-display text-2xl font-semibold text-forest mb-2">
                  Start the Conversation
                </h2>
                <p className="text-sm text-[#2C2C2C]/60 mb-8">
                  Tell Shirin about yourself and she&apos;ll reach out within 24 hours.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
