"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const PHONE = "(208) 660-7468";
const PHONE_HREF = "tel:+12086607468";

/* ── Icons ─────────────────────────────────────────────────────────────── */

function MoveUpIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-8 h-8"
      aria-hidden="true"
    >
      <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
      <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.432z" />
    </svg>
  );
}

function DownsizeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8"
      aria-hidden="true"
    >
      <path d="M3 9.5L12 3l9 6.5" />
      <path d="M9 21V12h6v9" />
      <path d="M3 21h18" />
      <path d="M19 9.5V21" />
      <path d="M5 9.5V21" />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-8 h-8"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M15.75 1.5a6.75 6.75 0 00-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 00-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 00.75-.75v-1.5h1.5A.75.75 0 009 19.5V18h1.5a.75.75 0 00.53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1015.75 1.5zm0 3a.75.75 0 000 1.5A2.25 2.25 0 0118 8.25a.75.75 0 001.5 0 3.75 3.75 0 00-3.75-3.75z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LocationPinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-8 h-8"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.003 3.5-4.697 3.5-8.327a8 8 0 10-16 0c0 3.63 1.556 6.326 3.5 8.327a19.583 19.583 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

/* ── Scroll animation hook ──────────────────────────────────────────────── */

function useScrollAnimations() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("az-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const els = document.querySelectorAll(".az-animate");
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ── Gold section label ─────────────────────────────────────────────────── */

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs uppercase tracking-[0.22em] text-[#d4a94a] mb-4 font-semibold font-dm-sans">
      {children}
    </p>
  );
}

/* ── Main page component ────────────────────────────────────────────────── */

export default function MakeYourMoveContent() {
  const [showSticky, setShowSticky] = useState(false);
  useScrollAnimations();

  useEffect(() => {
    const onScroll = () =>
      setShowSticky(window.scrollY > window.innerHeight * 0.85);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="font-dm-sans text-slate-900 overflow-x-hidden">

      {/* ── 1. HERO ───────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center justify-center"
        aria-label="Hero"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/bluff-panorama.jpg"
            alt="Dramatic aerial view of Northern Idaho mountains and lake"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/75" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto py-20">
          <div className="animate-fade-in">
            <p className="text-xs uppercase tracking-[0.22em] text-[#d4a94a] mb-6 font-semibold font-dm-sans">
              Northern Idaho Real Estate &middot; February 2026
            </p>
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.12] mb-6 text-balance">
              The Moment You&rsquo;ve Been Waiting For
              <br className="hidden sm:block" /> Just Arrived.
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-10 font-dm-sans">
              Mortgage rates just dropped below 6% for the first time in 3.5
              years. If you&rsquo;ve been waiting to make your move in Northern
              Idaho &mdash; that wait is over.
            </p>
            <a
              href={PHONE_HREF}
              className="inline-block bg-[#d4a94a] text-[#1a3a2a] px-8 py-4 text-xs font-bold tracking-[0.15em] uppercase hover:bg-[#c49a3a] transition-colors shadow-lg font-dm-sans"
            >
              Talk to Shirin &nbsp;&mdash;&nbsp; {PHONE}
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs font-dm-sans animate-fade-in">
            <span className="uppercase tracking-widest">Scroll</span>
            <div className="w-px h-10 bg-white/25" />
          </div>
        </div>
      </section>

      {/* ── 2. PAIN POINT ─────────────────────────────────────────────────── */}
      <section
        className="bg-[#f7f3ed] py-24 md:py-36 px-6"
        aria-label="The rate lock-in problem"
      >
        <div className="max-w-3xl mx-auto">
          <div className="az-animate">
            <Label>The Problem</Label>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.15] mb-10 text-balance">
              You Wanted to Move. Your Rate Held You Back.
            </h2>
          </div>

          <div className="az-animate" style={{ transitionDelay: "0.1s" }}>
            <p className="text-lg sm:text-xl leading-relaxed text-slate-700 mb-6">
              For the past three years, thousands of Northern Idaho homeowners
              have been quietly trapped. You bought or refinanced when rates were
              low &mdash; 2.5%, 3%, maybe 3.5%. Then rates climbed to 7%, 7.5%,
              even 7.8% at their peak in 2023.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed text-slate-700 mb-6">
              Moving meant giving up your rate. Upgrading meant a dramatically
              higher payment. Downsizing felt like it cost more than it saved.
              So you waited.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed text-slate-700 mb-6">
              You are not alone. This is called the lock-in effect &mdash; and
              it has frozen the Northern Idaho housing market for years.
            </p>
          </div>

          <div className="az-animate" style={{ transitionDelay: "0.2s" }}>
            <p className="font-playfair text-2xl sm:text-3xl font-bold text-[#1a3a2a] leading-tight">
              Until now.
            </p>
          </div>

          {/* Stat callout */}
          <div
            className="az-animate mt-14 bg-white border-l-4 border-[#d4a94a] p-8 sm:p-10"
            style={{ transitionDelay: "0.28s" }}
          >
            <p className="font-playfair text-5xl sm:text-6xl font-bold text-slate-900 mb-3">
              5.5 Million
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              households that couldn&rsquo;t qualify for a mortgage a year ago
              &mdash; now qualify at today&rsquo;s rates.
            </p>
            <p className="text-xs text-slate-400 uppercase tracking-wider mt-4 font-dm-sans">
              Source: National Association of Realtors
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. THE ANSWER ─────────────────────────────────────────────────── */}
      <section
        className="bg-[#1a3a2a] py-24 md:py-36 px-6 text-white"
        aria-label="The answer — rate drop"
      >
        <div className="max-w-6xl mx-auto">
          <div className="az-animate text-center mb-16">
            <Label>The Answer</Label>
            <h2 className="font-playfair text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.05]">
              5.98%.
            </h2>
            <p className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold text-[#d4a94a] mt-3">
              That Number Just Changed Everything.
            </p>
          </div>

          {/* Stat cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                stat: "−0.78%",
                label: "Rate Drop in 12 Months",
                body: "A year ago rates were 6.76%. That\u2019s nearly a full point drop in 12 months.",
                delay: "0.05s",
              },
              {
                stat: "$400–500",
                label: "Monthly Savings",
                body: "A $500K home saves $400\u2013500/month at today\u2019s rate vs. last year.",
                delay: "0.12s",
              },
              {
                stat: "March",
                label: "Spring Season Starts",
                body: "Spring buying season starts in March. Inventory is moving right now.",
                delay: "0.19s",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="az-animate bg-white/10 border border-white/15 p-8"
                style={{ transitionDelay: card.delay }}
              >
                <p className="font-playfair text-4xl sm:text-5xl font-bold text-[#d4a94a] mb-2">
                  {card.stat}
                </p>
                <p className="text-xs uppercase tracking-[0.18em] text-white/50 mb-4 font-dm-sans">
                  {card.label}
                </p>
                <p className="text-white/75 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>

          {/* Body copy */}
          <div
            className="az-animate max-w-3xl mx-auto text-center"
            style={{ transitionDelay: "0.25s" }}
          >
            <p className="text-lg text-white/75 leading-relaxed mb-6">
              Sub-6% mortgage rates are a psychological milestone that buyers
              and sellers have been waiting for. Freddie Mac&rsquo;s chief
              economist called it &ldquo;meaningful&rdquo; and said it
              &ldquo;will drive more potential buyers into the market for spring
              homebuying season.&rdquo;
            </p>
            <p className="text-lg text-white/75 leading-relaxed">
              For Northern Idaho specifically &mdash; this matters. Our market
              has seen compressed inventory for years because sellers
              didn&rsquo;t want to give up their low rates. That dam is starting
              to break. And the buyers who move first get the best selection.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. WHO THIS IS FOR ────────────────────────────────────────────── */}
      <section
        className="bg-[#f7f3ed] py-24 md:py-36 px-6"
        aria-label="Who this is for"
      >
        <div className="max-w-6xl mx-auto">
          <div className="az-animate text-center mb-16">
            <Label>Is This You?</Label>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.15] text-balance">
              You&rsquo;ve Been Thinking About It.
              <br className="hidden sm:block" /> Now Is the Time to Act.
            </h2>
          </div>

          {/* 2×2 scenario grid */}
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                Icon: MoveUpIcon,
                title: "The Move-Up Buyer",
                body: "Your family has outgrown your current home. You\u2019ve been watching rates waiting for the right moment. At 5.98% your upgrade is finally affordable again.",
                delay: "0.05s",
              },
              {
                Icon: DownsizeIcon,
                title: "The Downsizer",
                body: "The kids are gone and the house is too big. You want to free up equity and simplify. A rate below 6% makes your next chapter financially smart.",
                delay: "0.1s",
              },
              {
                Icon: KeyIcon,
                title: "The First-Time Buyer",
                body: "You\u2019ve been renting and watching. At 5.98% your monthly payment on a Northern Idaho home is hundreds less than it was just 12 months ago.",
                delay: "0.15s",
              },
              {
                Icon: LocationPinIcon,
                title: "The Relocator",
                body: "You\u2019re moving to Northern Idaho from Seattle, Portland, or Boise. Your dollar goes dramatically further here \u2014 and now your rate does too.",
                delay: "0.2s",
              },
            ].map(({ Icon, title, body, delay }, i) => (
              <div
                key={i}
                className="az-animate bg-white p-8 sm:p-10 border border-[#e8e2d9]"
                style={{ transitionDelay: delay }}
              >
                <div className="w-14 h-14 flex items-center justify-center bg-[#1a3a2a]/8 mb-6 text-[#1a3a2a]">
                  <Icon />
                </div>
                <h3 className="font-playfair text-xl font-bold text-slate-900 mb-3">
                  {title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <div
            className="az-animate text-center mt-14"
            style={{ transitionDelay: "0.25s" }}
          >
            <a
              href={PHONE_HREF}
              className="inline-block bg-[#1a3a2a] text-white px-10 py-4 text-xs font-bold tracking-[0.15em] uppercase hover:bg-[#1a3a2a]/90 transition-colors font-dm-sans"
            >
              Talk to Shirin &nbsp;&mdash;&nbsp; {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* ── 5. LOCAL MARKET ───────────────────────────────────────────────── */}
      <section
        className="bg-[#1a3a2a] py-24 md:py-36 px-6 text-white"
        aria-label="The Northern Idaho market"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Text column */}
            <div>
              <div className="az-animate">
                <Label>The Northern Idaho Market</Label>
                <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.15] mb-8 text-balance">
                  Why Northern Idaho. Why Now.
                </h2>
              </div>

              <div className="az-animate" style={{ transitionDelay: "0.1s" }}>
                <p className="text-lg text-white/75 leading-relaxed mb-6">
                  Coeur d&rsquo;Alene, Post Falls, Hayden, Sandpoint, Rathdrum
                  &mdash; the Inland Northwest has been one of the most
                  sought-after relocation destinations in the country for the
                  past five years.
                </p>
                <p className="text-lg text-white/75 leading-relaxed mb-6">
                  Outdoor lifestyle. Lower cost of living than the Pacific
                  Coast. No state income tax on wages. Crystal lakes, mountain
                  trails, and four genuine seasons.
                </p>
                <p className="text-lg text-white/75 leading-relaxed">
                  The buyers are coming &mdash; from Phoenix, Seattle, Portland,
                  and beyond. The question for local homeowners is whether you
                  make your move before spring inventory tightens, or after.
                </p>
              </div>

              <div
                className="az-animate mt-10 border-t border-white/15 pt-10"
                style={{ transitionDelay: "0.2s" }}
              >
                <p className="font-playfair text-lg italic text-white/55 leading-relaxed">
                  &ldquo;Shirin Abplanalp has helped families navigate this
                  market through every rate environment. She knows Northern
                  Idaho &mdash; she lives here, she works here, and she&rsquo;s
                  ready to help you make your move.&rdquo;
                </p>
              </div>
            </div>

            {/* Image column */}
            <div className="az-animate" style={{ transitionDelay: "0.25s" }}>
              <div className="relative h-[420px] sm:h-[560px]">
                <Image
                  src="/images/lakefront-dock.jpg"
                  alt="Crystal-clear Northern Idaho lake viewed from a dock"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a2a]/50 to-transparent" />
              </div>
              <p className="mt-3 text-white/30 text-xs text-center uppercase tracking-wider font-dm-sans">
                Lake Coeur d&rsquo;Alene &middot; Northern Idaho
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. ABOUT SHIRIN ───────────────────────────────────────────────── */}
      <section
        className="bg-[#f7f3ed] py-24 md:py-36 px-6"
        aria-label="About Shirin Abplanalp"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Photo */}
            <div className="az-animate order-2 md:order-1">
              <div className="relative h-[480px] sm:h-[580px]">
                <Image
                  src="/images/shirin-abplanalp.jpg"
                  alt="Shirin Abplanalp, Northern Idaho real estate specialist at eXp Realty"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="order-1 md:order-2">
              <div className="az-animate">
                <Label>Your Northern Idaho Guide.</Label>
                <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-2">
                  Shirin Abplanalp
                </h2>
                <p className="text-xs text-slate-400 uppercase tracking-widest mb-5 font-dm-sans">
                  Northern Idaho Relocation Specialist &middot; eXp Realty
                </p>
                <div className="mb-8">
                  <Image
                    src="/images/exp-realty-logo.jpg"
                    alt="eXp Realty"
                    width={120}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>

              <div
                className="az-animate"
                style={{ transitionDelay: "0.1s" }}
              >
                <p className="text-lg leading-relaxed text-slate-700 mb-6">
                  Shirin Abplanalp is a Northern Idaho relocation specialist
                  with eXp Realty. Having relocated here herself, she
                  understands both the local market and what it means to make a
                  major life move.
                </p>
                <p className="text-lg leading-relaxed text-slate-700 mb-6">
                  Whether you&rsquo;re selling your current home, buying your
                  next one, or both &mdash; Shirin guides you through every step
                  with local knowledge, honest advice, and genuine care.
                </p>
                <p className="text-lg leading-relaxed text-slate-700">
                  No pressure. No sales tactics. Just clarity on your best next
                  move.
                </p>
              </div>

              <div
                className="az-animate mt-10 space-y-4"
                style={{ transitionDelay: "0.2s" }}
              >
                <a
                  href={PHONE_HREF}
                  className="block text-center bg-[#d4a94a] text-[#1a3a2a] px-8 py-4 text-sm font-bold tracking-[0.12em] uppercase hover:bg-[#c49a3a] transition-colors font-dm-sans"
                >
                  Call or Text Shirin &nbsp;&mdash;&nbsp; {PHONE}
                </a>
                <p className="text-center text-sm text-slate-500">
                  Or visit{" "}
                  <a
                    href="https://www.inwbasecamp.com"
                    className="text-[#1a3a2a] underline underline-offset-2 hover:text-[#d4a94a] transition-colors"
                  >
                    inwbasecamp.com
                  </a>{" "}
                  for Northern Idaho relocation resources
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. FINAL CTA ──────────────────────────────────────────────────── */}
      <section
        className="bg-[#1a3a2a] py-24 md:py-40 px-6"
        id="contact"
        aria-label="Final call to action"
      >
        <div className="max-w-2xl mx-auto text-center">
          <div className="az-animate">
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.15] mb-6 text-balance">
              Rates Won&rsquo;t Stay Here Forever.
            </h2>
            <p className="text-white/65 text-lg leading-relaxed mb-12">
              The window is open. Let&rsquo;s talk about your move.
            </p>
          </div>

          <div className="az-animate" style={{ transitionDelay: "0.1s" }}>
            <a
              href={PHONE_HREF}
              className="inline-block bg-[#d4a94a] text-[#1a3a2a] px-12 py-5 text-sm font-bold tracking-[0.15em] uppercase hover:bg-[#c49a3a] transition-colors shadow-xl font-dm-sans"
            >
              Call Shirin &nbsp;&mdash;&nbsp; {PHONE}
            </a>
            <p className="mt-6 text-white/35 text-xs uppercase tracking-[0.18em] font-dm-sans">
              Shirin Abplanalp &middot; eXp Realty &middot; Northern Idaho
            </p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer
        className="bg-[#0d1610] py-10 px-6 pb-24 sm:pb-10"
        aria-label="Footer"
      >
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a
            href="https://www.inwbasecamp.com"
            aria-label="INW Basecamp home"
          >
            <Image
              src="/images/logo.png"
              alt="INW Basecamp"
              width={130}
              height={34}
              className="object-contain brightness-0 invert opacity-60 hover:opacity-90 transition-opacity"
            />
          </a>

          {/* Copyright + link */}
          <div className="text-center sm:text-right">
            <p className="text-white/30 text-xs font-dm-sans">
              &copy; 2026 INW Basecamp &middot; Shirin Abplanalp &middot; eXp
              Realty
            </p>
            <a
              href="https://www.inwbasecamp.com"
              className="text-white/30 text-xs hover:text-white/60 transition-colors font-dm-sans"
            >
              inwbasecamp.com
            </a>
          </div>
        </div>
      </footer>

      {/* ── STICKY MOBILE BAR (full-width, appears after scroll) ──────────── */}
      <div
        className={`sm:hidden fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ${
          showSticky
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-full pointer-events-none"
        }`}
        aria-hidden={!showSticky}
      >
        <a
          href={PHONE_HREF}
          className="flex items-center justify-center gap-2.5 bg-[#d4a94a] text-[#1a3a2a] py-4 text-sm font-bold tracking-[0.12em] uppercase font-dm-sans w-full"
          tabIndex={showSticky ? 0 : -1}
        >
          <PhoneIcon />
          Call Shirin &nbsp;{PHONE}
        </a>
      </div>

      {/* ── STICKY DESKTOP FLOATING BUTTON (appears after scroll) ─────────── */}
      <div
        className={`hidden sm:block fixed bottom-6 right-6 z-50 transition-all duration-300 ${
          showSticky
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-3 pointer-events-none"
        }`}
        aria-hidden={!showSticky}
      >
        <a
          href={PHONE_HREF}
          className="flex items-center gap-2.5 bg-[#d4a94a] text-[#1a3a2a] px-5 py-3.5 text-xs font-bold tracking-[0.12em] uppercase shadow-2xl hover:bg-[#c49a3a] transition-colors font-dm-sans"
          tabIndex={showSticky ? 0 : -1}
        >
          <PhoneIcon />
          Call Shirin
        </a>
      </div>
    </div>
  );
}
