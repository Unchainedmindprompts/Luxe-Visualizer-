"use client";

import { useState, type FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  timeline: string;
  interests: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  timeline: "",
  interests: "",
  message: "",
};

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

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
          from_name: "Basecamp INW Website",
          replyto: formData.email,
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone || "Not provided",
          "Relocation Timeline": formData.timeline || "Not specified",
          "Primary Interest": formData.interests || "Not specified",
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
      <div className="bg-pine-50 border border-pine-200 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-pine-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-pine-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-bold text-slate-950 mb-2">
          Message Sent!
        </h3>
        <p className="text-slate-700">
          Thanks for reaching out! Shirin will be in touch within 24 hours to
          start planning your relocation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pine-500 focus:border-transparent transition-shadow"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pine-500 focus:border-transparent transition-shadow"
            placeholder="you@email.com"
          />
        </div>
      </div>

      {/* Phone & Timeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pine-500 focus:border-transparent transition-shadow"
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label htmlFor="timeline" className="block text-sm font-semibold text-slate-900 mb-2">
            Relocation Timeline
          </label>
          <select
            id="timeline"
            value={formData.timeline}
            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-pine-500 focus:border-transparent transition-shadow"
          >
            <option value="">Select timeline</option>
            <option value="Within 3 months">Within 3 months</option>
            <option value="3 to 6 months">3 to 6 months</option>
            <option value="6 to 12 months">6 to 12 months</option>
            <option value="12+ months">12+ months</option>
            <option value="Just exploring">Just exploring</option>
          </select>
        </div>
      </div>

      {/* Interests */}
      <div>
        <label htmlFor="interests" className="block text-sm font-semibold text-slate-900 mb-2">
          What activities are most important to you?
        </label>
        <select
          id="interests"
          value={formData.interests}
          onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
          className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-pine-500 focus:border-transparent transition-shadow"
        >
          <option value="">Select primary interest</option>
          <option value="Mountain Biking & Trail Riding">Mountain Biking & Trail Riding</option>
          <option value="Lake & Water Sports">Lake & Water Sports</option>
          <option value="Skiing & Snowboarding">Skiing & Snowboarding</option>
          <option value="Hiking & Backpacking">Hiking & Backpacking</option>
          <option value="Family-Friendly Community">Family-Friendly Community</option>
          <option value="All of the Above">All of the Above</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
          Tell us about your dream lifestyle *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pine-500 focus:border-transparent transition-shadow resize-none"
          placeholder="What does your ideal day look like? What are you looking for in a community?"
        />
      </div>

      {/* Error */}
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">
          Something went wrong{errorDetail ? ` (${errorDetail})` : ""}. Please try again or email us directly at{" "}
          <a href="mailto:dreamlifeinidaho@gmail.com" className="font-semibold underline">
            dreamlifeinidaho@gmail.com
          </a>.
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto px-8 py-4 bg-pine-600 text-white font-semibold text-lg rounded-xl hover:bg-pine-700 transition-all shadow-lg shadow-pine-600/25 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
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
