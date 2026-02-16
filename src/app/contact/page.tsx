import type { Metadata } from "next";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Start Your Northern Idaho Relocation",
  description:
    "Connect with your Relocation Scout. Tell us about your dream lifestyle and we'll help you find the perfect basecamp in Coeur d'Alene or Post Falls, Idaho.",
};

export default function ContactPage() {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Info */}
          <div>
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-pine-600 mb-3">
              Get in Touch
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
              Start Your
              <span className="text-pine-600"> Relocation</span> Journey
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Whether you&apos;re 12 months out or ready to move next month,
              we&apos;re here to help you navigate the Northern Idaho market and
              find a home that matches your lifestyle.
            </p>

            {/* What to Expect */}
            <div className="space-y-6">
              <h2 className="font-display text-xl font-semibold text-slate-900">
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
                    <h3 className="font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-ridge-50 rounded-2xl p-8 md:p-10">
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-2">
              Tell Us About Your Dream
            </h2>
            <p className="text-slate-600 mb-8">
              Fill out the form below and we&apos;ll reach out within 24 hours.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
