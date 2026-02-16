import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Start Your Northern Idaho Relocation",
  description:
    "Connect with your Relocation Scout. Tell us about your dream lifestyle and we'll help you find the perfect basecamp in Coeur d'Alene or Post Falls, Idaho.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero — dual-layer overlay matches homepage */}
      <section className="relative h-[40vh] min-h-[320px] flex items-end overflow-hidden">
        <Image
          src="/images/community.jpg"
          alt="Northern Idaho community and mountain landscape"
          fill
          priority
          quality={85}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/30 to-slate-900/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-pine-400 mb-3">
            Get in Touch
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-sm">
            Start Your
            <span className="text-pine-400"> Relocation</span> Journey
          </h1>
          <p className="mt-4 text-lg text-white/90 max-w-2xl drop-shadow-sm">
            Whether you&apos;re 12 months out or ready to move next month,
            we&apos;re here to help you navigate the Northern Idaho market and
            find a home that matches your lifestyle.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Info */}
            <div>
              {/* What to Expect */}
              <div className="space-y-6">
                <h2 className="font-display text-2xl font-bold text-slate-950">
                  What to Expect
                </h2>
                {[
                  {
                    title: "Personalized Area Tour",
                    description:
                      "We'll match neighborhoods to your lifestyle — whether that's trailside in Fernan or lakefront on Hayden.",
                  },
                  {
                    title: "Market Intelligence",
                    description:
                      "Get real-time insights on pricing, inventory, and opportunities across Coeur d'Alene, Post Falls, and Hayden.",
                  },
                  {
                    title: "Lifestyle-First Approach",
                    description:
                      "We don't just sell houses. We help you find the basecamp that unlocks your ideal Northern Idaho lifestyle.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-pine-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-pine-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-950">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-700 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-200 shadow-sm">
              <h2 className="font-display text-2xl font-bold text-slate-950 mb-2">
                Tell Us About Your Dream
              </h2>
              <p className="text-slate-700 mb-8">
                Fill out the form below and we&apos;ll reach out within 24 hours.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
