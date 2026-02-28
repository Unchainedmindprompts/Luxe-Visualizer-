import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  generateBreadcrumbSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Shirin Abplanalp | Northern Idaho Realtor · eXp Realty",
  description:
    "Meet Shirin Abplanalp — licensed Northern Idaho realtor at eXp Realty who relocated here herself. She helps active families find not just a house, but a life they love.",
  alternates: {
    canonical: "https://www.inwbasecamp.com/about",
  },
  openGraph: {
    type: "profile",
    url: "https://www.inwbasecamp.com/about",
    title: "About Shirin Abplanalp | Northern Idaho Realtor · eXp Realty",
    description:
      "Meet Shirin Abplanalp — licensed Northern Idaho realtor at eXp Realty who relocated here herself. She helps active families find not just a house, but a life they love.",
    images: [
      {
        url: "https://www.inwbasecamp.com/images/shirin-abplanalp.jpg",
        width: 1200,
        height: 630,
        alt: "Shirin Abplanalp — Northern Idaho Realtor",
      },
    ],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shirin Abplanalp",
  jobTitle: "Licensed Real Estate Agent",
  worksFor: {
    "@type": "Organization",
    name: "eXp Realty",
  },
  url: "https://www.inwbasecamp.com/about",
  image: "https://www.inwbasecamp.com/images/shirin-abplanalp.jpg",
  telephone: "+1-208-660-7468",
  email: "dreamlifeinidaho@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "510 S Clearwater Loop, Suite 100",
    addressLocality: "Post Falls",
    addressRegion: "ID",
    postalCode: "83854",
    addressCountry: "US",
  },
  knowsAbout: [
    "Northern Idaho Real Estate",
    "Relocation Services",
    "Coeur d'Alene Real Estate",
    "Post Falls Real Estate",
    "Lifestyle-Based Relocation",
  ],
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", path: "" },
  { name: "About", path: "/about" },
]);

const differentiators = [
  {
    title: "Local Knowledge",
    description:
      "Shirin relocated to Northern Idaho herself, living the lifestyle she helps others find. She knows every neighborhood, trail, and hidden gem in the region.",
  },
  {
    title: "Relocation Expertise",
    description:
      "With experience navigating major relocations across the American West, Shirin understands the unique questions, fears, and logistics that come with making a big move.",
  },
  {
    title: "Lifestyle Match",
    description:
      "Shirin starts every relationship by understanding how you want to live — not just where you want to live. She matches properties to people based on life, not just specs.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 bg-forest overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/bluff-panorama.jpg"
            alt="Northern Idaho landscape"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-forest/80 to-forest" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-4">
            Northern Idaho Realtor · eXp Realty
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight">
            Meet Shirin Abplanalp
          </h1>
        </div>
      </section>

      {/* Section 1: Her Story */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Photo */}
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/shirin-abplanalp.jpg"
                  alt="Shirin Abplanalp, licensed realtor at eXp Realty in Northern Idaho"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 80vw, 45vw"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border-2 border-gold/30 -z-10" />
            </div>

            {/* Story */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-6">
                My Story
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-forest mb-8 leading-tight">
                I Made This Move. Now I Help Others Make Theirs.
              </h2>

              <div className="space-y-6 text-base leading-relaxed text-[#2C2C2C]">
                <p>
                  I spent over 15 years in Bend, Oregon — a place I loved deeply.
                  Great trails, a vibrant community, incredible natural beauty. But
                  somewhere along the way, Bend became something different. The growth
                  changed it. The cost changed it. We started asking the question so
                  many active families ask eventually: is there somewhere better?
                </p>
                <p>
                  When we first drove through Northern Idaho, we didn&apos;t expect
                  to be blown away. But the moment we saw Coeur d&apos;Alene Lake
                  glittering at the base of those mountains, felt the quiet of the
                  forest, and realized how accessible everything was — we knew.
                  This was it.
                </p>
                <p>
                  Making the move from Bend to the Coeur d&apos;Alene area was one
                  of the best decisions of our lives. The community here is exactly
                  what we&apos;d hoped for — outdoor-obsessed, genuinely kind, and
                  proud of this place. I fell in love with the region and became
                  determined to help other families find what we found.
                </p>
                <p>
                  That&apos;s why I became a licensed realtor at eXp Realty and
                  created INW Basecamp. Because I know what it&apos;s like to make
                  this leap — and I know how much easier it is when you have someone
                  who&apos;s already walked the path guiding you through it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Why She's Different */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-4">
              The Difference
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-forest leading-tight">
              Why Work With Shirin
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((item, i) => (
              <div key={item.title} className="border-t-2 border-gold pt-8">
                <span className="font-display text-5xl font-semibold text-cream-300 block mb-4 select-none">
                  0{i + 1}
                </span>
                <h3 className="font-display text-2xl font-semibold text-forest mb-4">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed text-[#2C2C2C]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: eXp Realty */}
      <section className="py-16 md:py-20 bg-cream border-t border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="flex-shrink-0">
              <div className="relative w-48 h-24 overflow-hidden">
                <Image
                  src="/images/exp-realty-logo.jpg"
                  alt="eXp Realty logo"
                  fill
                  className="object-contain"
                  sizes="192px"
                />
              </div>
            </div>
            <div className="max-w-xl">
              <h3 className="font-display text-2xl font-semibold text-forest mb-3">
                Proud to Be Part of eXp Realty
              </h3>
              <p className="text-base leading-relaxed text-[#2C2C2C]">
                eXp Realty is one of the fastest-growing and most innovative brokerages
                in the world, giving agents the tools, technology, and support to deliver
                a premium experience for clients. For buyers and sellers, that means
                access to cutting-edge market data, seamless digital transaction management,
                and an agent who is supported by a world-class network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: INW Basecamp Mission */}
      <section className="py-24 md:py-32 bg-forest">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-6">
            Our Mission
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white leading-tight mb-8">
            What INW Basecamp Is All About
          </h2>
          <p className="text-lg text-white/75 leading-relaxed mb-6">
            INW Basecamp is an honest, experience-based resource for people considering
            a move to Northern Idaho. It&apos;s the resource I wished existed when I
            was researching the area from Bend — the real talk about neighborhoods,
            seasons, community, market conditions, and lifestyle.
          </p>
          <p className="text-lg text-white/75 leading-relaxed mb-12">
            If you&apos;re an active family or outdoor-obsessed individual who wants to
            find a place where your lifestyle can truly thrive — this site is for you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 bg-gold text-forest font-semibold text-base tracking-wide hover:bg-gold-500 transition-colors"
          >
            Let&apos;s Start the Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
