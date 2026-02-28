"use client";

import { useState, type FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  interests: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  interests: "",
  message: "",
};

const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "8e98b6da-d70f-40e3-b422-37f8c617527d";

const inputClass =
  "w-full px-4 py-3 bg-cream border border-cream-200 text-[#2C2C2C] placeholder-[#2C2C2C]/30 focus:outline-none focus:border-gold transition-colors text-sm";

const labelClass = "block text-xs font-semibold uppercase tracking-[0.1em] text-[#2C2C2C]/60 mb-2";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorDetail, setErrorDetail] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorDetail("");

    if (!WEB3FORMS_KEY || WEB3FORMS_KEY === "your_access_key_here") {
      setStatus("error");
      setErrorDetail("Form API key is not configured. Please contact the site owner.");
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Relocation Inquiry from ${formData.name}`,
          from_name: "INW Basecamp Website",
          replyto: formData.email,
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone || "Not provided",
          "I am interested in": formData.interests || "Not specified",
          Message: formData.message,
        }),
      });

      const data = await response.json();
      if (!data.success) throw new Error(data.message || "Submission failed");

      setStatus("success");
      setFormData(initialFormData);
    } catch (err) {
      setStatus("error");
      setErrorDetail(err instanceof Error ? err.message : "Unknown error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-cream border border-gold/30 p-8 text-center">
        <div className="w-12 h-12 bg-gold/20 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-semibold text-forest mb-2">
          Message Sent
        </h3>
        <p className="text-sm text-[#2C2C2C]/70">
          Thanks for reaching out. Shirin will be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>Full Name *</label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email *</label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={inputClass}
            placeholder="you@email.com"
          />
        </div>
      </div>

      {/* Phone & Interests */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className={labelClass}>Phone</label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={inputClass}
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label htmlFor="interests" className={labelClass}>I am interested in</label>
          <select
            id="interests"
            value={formData.interests}
            onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
            className={inputClass}
          >
            <option value="">Select one</option>
            <option value="Buying">Buying</option>
            <option value="Selling">Selling</option>
            <option value="Relocating">Relocating</option>
            <option value="Just Exploring">Just Exploring</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>Message *</label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={inputClass}
          placeholder="Tell Shirin about your situation, timeline, and what you're looking for..."
        />
      </div>

      {/* Error */}
      {status === "error" && (
        <div className="border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          Something went wrong{errorDetail ? ` (${errorDetail})` : ""}. Please try again or email{" "}
          <a href="mailto:dreamlifeinidaho@gmail.com" className="font-semibold underline">
            dreamlifeinidaho@gmail.com
          </a>.
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full px-8 py-4 bg-gold text-forest font-semibold text-sm tracking-wide hover:bg-gold-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
