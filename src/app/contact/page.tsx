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
              {/* Direct Contact */}
              <div className="mb-10 space-y-4">
                <h2 className="font-display text-2xl font-bold text-slate-950">
                  Reach Out Directly
                </h2>
                <p className="text-slate-700">
                  <span className="font-semibold text-slate-950">Shirin Abplanalp</span> — Founder &amp; Relocation Scout
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="tel:+12086607468"
                    className="inline-flex items-center gap-2 text-pine-700 hover:text-pine-900 transition-colors font-medium"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    (208) 660-7468
                  </a>
                  <a
                    href="mailto:dreamlifeinidaho@gmail.com"
                    className="inline-flex items-center gap-2 text-pine-700 hover:text-pine-900 transition-colors font-medium"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    dreamlifeinidaho@gmail.com
                  </a>
                </div>
              </div>

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
