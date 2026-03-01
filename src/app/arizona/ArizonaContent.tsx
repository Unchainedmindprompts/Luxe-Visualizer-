"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const PHONE = "(208) 660-7468";
const PHONE_HREF = "tel:+12086607468";

/* ── tiny inline SVG icons ──────────────────────────────────────────── */
function PlaneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
    </svg>
  );
}

function PinIcon() {
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
        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.003 3.5-4.697 3.5-8.327a8 8 0 10-16 0c0 3.63 1.556 6.326 3.5 8.327a19.583 19.583 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function CityIcon() {
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
        d="M3 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5H15v-18a.75.75 0 000-1.5H3zM6.75 19.5v-2.25a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75zM6 6.75A.75.75 0 016.75 6h.75a.75.75 0 010 1.5h-.75A.75.75 0 016 6.75zM6.75 9a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM6 12.75a.75.75 0 01.75-.75h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zM10.5 6a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zm-.75 3.75A.75.75 0 0110.5 9h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zM10.5 12a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM16.5 6.75v15h5.25a.75.75 0 000-1.5H21v-12a.75.75 0 000-1.5h-4.5zm1.5 4.5a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008zm.75 2.25a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75v-.008a.75.75 0 00-.75-.75h-.008zM18 17.25a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z"
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

/* ── useScrollAnimations hook ────────────────────────────────────────── */
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

/* ── Section label ──────────────────────────────────────────────────── */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs uppercase tracking-[0.22em] text-[#d4a94a] mb-4 font-semibold font-dm-sans">
      {children}
    </p>
  );
}

/* ── Main component ─────────────────────────────────────────────────── */
export default function ArizonaContent() {
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
      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center justify-center"
        aria-label="Hero"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/bluff-panorama.jpg"
            alt="Panoramic view of Northern Idaho mountains and lake"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/50 to-black/75" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto py-20">
          <div className="animate-fade-in">
            <p className="text-xs uppercase tracking-[0.22em] text-[#d4a94a] mb-6 font-semibold font-dm-sans">
              For North Scottsdale &middot; Cave Creek &middot; Paradise Valley
            </p>
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.12] mb-6 text-balance">
              You Already Know What July
              <br className="hidden sm:block" /> Feels Like in Phoenix.
              <span className="block mt-3 text-[#d4a94a]">
                There&rsquo;s Another Way.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-10 font-dm-sans">
              Northern Idaho is where Phoenix Valley families escape the heat
              &mdash; and end up staying all summer. Whether you&rsquo;re
              dreaming of a summer escape, a second home, or a permanent move
              &mdash; if you&rsquo;ve ever felt trapped by the heat, this is
              for you.
            </p>
            <a
              href={PHONE_HREF}
              className="inline-block bg-[#d4a94a] text-[#1a3a2a] px-8 py-4 text-xs font-bold tracking-[0.15em] uppercase hover:bg-[#c49a3a] transition-colors shadow-lg font-dm-sans"
            >
              Call Shirin &nbsp;&middot;&nbsp; {PHONE}
            </a>
          </div>

          {/* Scroll cue */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs font-dm-sans animate-fade-in">
            <span className="uppercase tracking-widest">Scroll</span>
            <div className="w-px h-10 bg-white/25" />
          </div>
        </div>
      </section>

      {/* ── 2. PAIN + PERSONAL STORY ─────────────────────────────────── */}
      <section
        className="bg-[#f7f3ed] py-24 md:py-36 px-6"
        aria-label="The heat problem"
      >
        <div className="max-w-3xl mx-auto">
          <div className="az-animate">
            <Label>You Know This Feeling</Label>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.15] mb-10 text-balance">
              The Door That Hits You
              <br /> Like a Wall of Heat
            </h2>
          </div>

          <div className="az-animate" style={{ transitionDelay: "0.1s" }}>
            <p className="text-lg sm:text-xl leading-relaxed text-slate-700 mb-6">
              You step outside and it hits you before you&rsquo;re even off the
              porch. The pool &mdash; the pool you thought would save you &mdash;
              is ninety degrees. Bathwater. Your morning hike got moved to
              5&nbsp;a.m., then 4&nbsp;a.m., then you just stopped trying.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed text-slate-700 mb-6">
              July arrives. Then August. September stretches on. It
              doesn&rsquo;t cool down until after Halloween. There&rsquo;s no
              relief in the evening, no relief at night. You watch the
              thermometer hit 115&deg; and feel this particular kind of
              trapped &mdash; surrounded by a beautiful life, with nowhere
              outside to actually live it.
            </p>
          </div>

          {/* Pull quote */}
          <blockquote
            className="az-animate my-12 border-l-4 border-[#d4a94a] pl-8"
            style={{ transitionDelay: "0.2s" }}
          >
            <p className="font-playfair text-xl sm:text-2xl italic text-slate-800 leading-relaxed">
              &ldquo;Every single day from July onward, one of us would say
              it&nbsp;&mdash; we need to get out of here.&rdquo;
            </p>
            <footer className="mt-4 text-xs text-slate-400 uppercase tracking-wider font-dm-sans">
              &mdash; Shirin Abplanalp &middot; Mesa, AZ &middot; 2023&ndash;2025
            </footer>
          </blockquote>

          <div className="az-animate" style={{ transitionDelay: "0.15s" }}>
            <p className="text-lg sm:text-xl leading-relaxed text-slate-700 mb-6">
              Mark and I lived in Mesa from April 2023 to March 2025 &mdash;
              right through two of the hottest summers on record. Mark was
              mountain biking the Hawes trail system before sunrise, because by
              7&nbsp;a.m. it was already over. I&rsquo;d watch the days stretch
              out in 115-degree heat and feel that particular brand of
              cabin fever you can only get when you&rsquo;re stuck inside the
              most beautiful house on the block.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed text-slate-700">
              We weren&rsquo;t miserable. We loved Arizona. But every summer,
              the heat became a wall between us and the outdoor life we
              actually wanted to be living. Then we found Northern Idaho &mdash;
              and everything changed.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. NORTHERN IDAHO CONTRAST ───────────────────────────────── */}
      <section
        className="bg-[#1a3a2a] py-24 md:py-36 px-6 text-white"
        aria-label="Northern Idaho summers"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Text column */}
            <div>
              <div className="az-animate">
                <Label>The Other Side</Label>
                <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.15] mb-8 text-balance">
                  What a Real Summer
                  <br /> Actually Feels Like
                </h2>
              </div>

              <div
                className="az-animate"
                style={{ transitionDelay: "0.1s" }}
              >
                <p className="text-lg text-white/75 leading-relaxed mb-10">
                  Coeur d&rsquo;Alene has some of the longest summer days in
                  the continental US. You wake up wanting to go outside. The
                  lakes &mdash; Coeur d&rsquo;Alene, Hayden, Priest &mdash;
                  are crystal blue and cold enough to actually swim in.
                  Not&nbsp;a muddy reservoir. Glacial-fed, impossibly clear.
                </p>
              </div>

              <ul
                className="space-y-6 az-animate"
                style={{ transitionDelay: "0.2s" }}
              >
                {[
                  {
                    title: "Mountain biking at noon in July",
                    desc: "Trails you can actually ride mid-day. No 4\u00a0a.m. alarms required.",
                  },
                  {
                    title: "Cool evenings. Real ones.",
                    desc: "Fire-pit weather by 8\u00a0p.m. A jacket at the start of your morning ride.",
                  },
                  {
                    title: "Crystal-clear glacial lakes",
                    desc: "Water you want to be in, not just sit next to.",
                  },
                  {
                    title: "The longest summer days",
                    desc: "CDA is one of the northernmost resort cities in the US. The light lasts until nearly 10\u00a0p.m.",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span
                      className="mt-1.5 w-1 h-1 flex-shrink-0 rounded-full bg-[#d4a94a] self-start"
                      style={{ minHeight: "8px", minWidth: "8px" }}
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-semibold text-white text-base mb-1 font-dm-sans">
                        {item.title}
                      </h3>
                      <p className="text-white/55 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image column */}
            <div
              className="az-animate"
              style={{ transitionDelay: "0.25s" }}
            >
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

      {/* ── 4. INVESTMENT ────────────────────────────────────────────── */}
      <section
        className="bg-white py-24 md:py-36 px-6"
        aria-label="Investment case"
      >
        <div className="max-w-6xl mx-auto">
          <div className="az-animate text-center mb-16">
            <Label>The Practical Side</Label>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.15] text-balance">
              It&rsquo;s Also a Smart Investment
            </h2>
            <p className="mt-5 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              You&rsquo;re not asking whether you can afford this. You&rsquo;re
              asking whether it&rsquo;s the right move. It is.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: investment points */}
            <div className="space-y-10">
              {[
                {
                  title: "One of the fastest-growing regions in the country",
                  body: "Northern Idaho real estate has been appreciating consistently. CDA and the surrounding area have seen sustained demand from buyers relocating from California, Arizona, and the Pacific Northwest. This is not a sleepy market.",
                  delay: "0s",
                },
                {
                  title: "Gozzer Ranch & luxury communities",
                  body: "Gozzer Ranch is a world-class private golf and lake club on Lake Coeur d\u2019Al\u00e8ne \u2014 one of the top private clubs in the country. Beyond Gozzer, the region offers lakefront estates, mountain retreats, and custom homes that rival anything in Scottsdale or Paradise Valley.",
                  delay: "0.1s",
                },
                {
                  title: "A solid asset, not just a lifestyle purchase",
                  body: "This isn\u2019t just somewhere to escape the heat. It\u2019s a real estate investment in a market with genuine appreciation tailwinds, strong vacation rental demand, and long-term lifestyle value that compounds every year you own it.",
                  delay: "0.2s",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="az-animate"
                  style={{ transitionDelay: item.delay }}
                >
                  <h3 className="font-playfair text-xl font-semibold text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>

            {/* Right: logistics + quote */}
            <div className="space-y-10">
              <div
                className="az-animate bg-[#f7f3ed] p-8 sm:p-10"
                style={{ transitionDelay: "0.05s" }}
              >
                <h3 className="font-playfair text-xl font-semibold text-slate-900 mb-6">
                  Getting Here Is Easier Than You Think
                </h3>
                <ul className="space-y-5">
                  {[
                    {
                      icon: <PlaneIcon />,
                      title: "Phoenix Sky Harbor \u2192 Spokane International",
                      desc: "Direct flights. Just 2\u00a0hours 15\u00a0minutes.",
                    },
                    {
                      icon: <PinIcon />,
                      title: "Spokane is minutes from the Idaho border",
                      desc: "You land and you\u2019re practically there.",
                    },
                    {
                      icon: <CityIcon />,
                      title: "Real amenities. Not the middle of nowhere.",
                      desc: "CDA has excellent dining, shopping, healthcare, and services. Everything you\u2019re used to, surrounded by mountains and water.",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-[#d4a94a] mt-0.5 flex-shrink-0">
                        {item.icon}
                      </span>
                      <div>
                        <p className="font-semibold text-slate-800 text-sm mb-0.5">
                          {item.title}
                        </p>
                        <p className="text-slate-500 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <blockquote
                className="az-animate border-l-4 border-[#1a3a2a] pl-6"
                style={{ transitionDelay: "0.15s" }}
              >
                <p className="font-playfair text-lg italic text-slate-700 leading-relaxed">
                  &ldquo;Most of our Arizona clients are surprised how easy the
                  transition is. The hardest part is deciding which trail to
                  ride first.&rdquo;
                </p>
                <footer className="mt-3 text-xs text-slate-400 uppercase tracking-wider font-dm-sans">
                  &mdash; Shirin Abplanalp
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. ABOUT SHIRIN ──────────────────────────────────────────── */}
      <section
        className="bg-[#f7f3ed] py-24 md:py-36 px-6"
        aria-label="About Shirin"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Photo */}
            <div className="az-animate order-2 md:order-1">
              <div className="relative h-[480px] sm:h-[560px]">
                <Image
                  src="/images/shirin-abplanalp.jpg"
                  alt="Shirin Abplanalp, Northern Idaho relocation specialist"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="order-1 md:order-2">
              <div className="az-animate">
                <Label>Your Guide</Label>
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
                  Shirin and her husband Mark lived in Mesa, Arizona &mdash;
                  right through two of the hottest summers on record. They know
                  both worlds: the heat you&rsquo;re trying to escape, and the
                  life waiting on the other side of a 2-hour flight.
                </p>
                <p className="text-lg leading-relaxed text-slate-700 mb-8">
                  She specializes in helping active, outdoorsy buyers from the
                  Southwest find their perfect Northern Idaho basecamp &mdash;
                  whether that&rsquo;s a lakefront property on Coeur
                  d&rsquo;Alene, a mountain retreat in the forests, or a luxury
                  home in a private community like Gozzer Ranch.
                </p>
              </div>

              <blockquote
                className="az-animate border-l-4 border-[#d4a94a] pl-6 my-8"
                style={{ transitionDelay: "0.2s" }}
              >
                <p className="font-playfair text-xl italic text-slate-800 leading-relaxed">
                  &ldquo;She&rsquo;s not a sales agent.
                  She&rsquo;s a scout.&rdquo;
                </p>
              </blockquote>

              <div
                className="az-animate"
                style={{ transitionDelay: "0.25s" }}
              >
                <p className="text-lg leading-relaxed text-slate-700">
                  She&rsquo;s walked these trails. She&rsquo;s swum in these
                  lakes. She knows which neighborhoods feel like your
                  neighborhood &mdash; and which properties will still make you
                  smile five years from now.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. CTA ───────────────────────────────────────────────────── */}
      <section
        className="bg-[#1a3a2a] py-24 md:py-40 px-6"
        id="contact"
        aria-label="Call to action"
      >
        <div className="max-w-2xl mx-auto text-center">
          <div className="az-animate">
            <Label>Let&rsquo;s Talk</Label>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.15] mb-6 text-balance">
              Ready to See
              <br /> What&rsquo;s Waiting?
            </h2>
            <p className="text-white/65 text-lg leading-relaxed mb-12">
              Call or text Shirin directly. No forms, no funnels &mdash; just
              a real conversation about what Northern Idaho looks like for you.
            </p>
          </div>

          <div
            className="az-animate"
            style={{ transitionDelay: "0.1s" }}
          >
            <a
              href={PHONE_HREF}
              className="block font-playfair text-4xl sm:text-5xl font-bold text-[#d4a94a] hover:text-[#e8c05e] transition-colors mb-3"
              aria-label={`Call Shirin at ${PHONE}`}
            >
              {PHONE}
            </a>
            <p className="text-white/35 text-xs uppercase tracking-[0.18em] mb-10 font-dm-sans">
              Call or Text &middot; Shirin Abplanalp &middot; eXp Realty
            </p>
            <a
              href={PHONE_HREF}
              className="inline-block bg-[#d4a94a] text-[#1a3a2a] px-10 py-5 text-xs font-bold tracking-[0.15em] uppercase hover:bg-[#c49a3a] transition-colors shadow-xl font-dm-sans"
            >
              Call Shirin Now
            </a>
          </div>

          <div
            className="az-animate mt-16 pt-16 border-t border-white/10"
            style={{ transitionDelay: "0.25s" }}
          >
            <p className="font-playfair text-lg italic text-white/40 leading-relaxed max-w-lg mx-auto">
              &ldquo;Most of our Arizona clients are surprised how easy the
              transition is. The hardest part is deciding which trail to ride
              first.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ── STICKY CALL BUTTON ───────────────────────────────────────── */}
      <div
        className={`fixed bottom-5 right-5 z-50 transition-all duration-300 ${
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
