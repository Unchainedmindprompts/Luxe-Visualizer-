import Image from "next/image";

const pillars = [
  {
    title: "Mountain Biking",
    description: "World-class singletrack on Canfield Mountain, Beacon Hill, and endless Forest Service trails.",
    image: "/images/mountain-biking.jpg",
    imageAlt: "Mountain biker riding through a pine forest in Northern Idaho",
  },
  {
    title: "Lake Life",
    description: "Crystal-clear Coeur d'Alene Lake, Hayden Lake, and Priest Lake — surrounded by mountains.",
    image: "/images/lakefront-dock.jpg",
    imageAlt: "Calm Northern Idaho lake with forested mountain backdrop",
  },
  {
    title: "Skiing & Snowboarding",
    description: "Schweitzer Mountain, Silver Mountain, and Lookout Pass deliver legendary Pacific Northwest powder.",
    image: "/images/skiing.jpg",
    imageAlt: "Skier on a powder-covered slope in Northern Idaho",
  },
  {
    title: "Community & Culture",
    description: "Farmers markets, craft breweries, live music, and a tight-knit community that feels like home.",
    image: "/images/local-brewery.jpg",
    imageAlt: "Community life in downtown Coeur d'Alene, Northern Idaho",
  },
];

export default function LifestylePillars() {
  return (
    <section className="py-24 md:py-32 bg-forest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-4">
            Why Northern Idaho
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
            Your Lifestyle, Amplified
          </h2>
        </div>

        {/* Lifestyle Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group relative overflow-hidden aspect-[3/4]"
            >
              <Image
                src={pillar.image}
                alt={pillar.imageAlt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/30 to-transparent" />
              {/* Gold top accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-xl font-semibold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
