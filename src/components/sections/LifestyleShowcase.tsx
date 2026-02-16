import Image from "next/image";

const activities = [
  {
    title: "Mountain Biking",
    description: "World-class singletrack across Canfield Mountain, Beacon Hill, and endless Forest Service trails.",
    image: "/images/mountain-biking.jpg",
    imageAlt: "Mountain biker jumping off a dirt ramp on a forest trail surrounded by tall pines and ferns",
  },
  {
    title: "Lake Life",
    description: "Coeur d'Alene Lake, Hayden Lake, and Priest Lake — crystal-clear waters surrounded by mountains.",
    image: "/images/lakefront-dock.jpg",
    imageAlt: "Long wooden dock stretching across a calm Northern Idaho lake with forested hills",
  },
  {
    title: "Skiing & Snowboarding",
    description: "Schweitzer Mountain, Silver Mountain, and Lookout Pass deliver legendary Pacific Northwest powder.",
    image: "/images/skiing.jpg",
    imageAlt: "Skier launching off a powder-covered slope with snow spraying against a bright blue sky and mountain backdrop",
  },
  {
    title: "Community & Culture",
    description: "Farmers markets, craft breweries, live music, and a tight-knit community that feels like home.",
    image: "/images/local-brewery.jpg",
    imageAlt: "Playland Pier mural in downtown Coeur d'Alene showcasing local history and culture",
  },
];

export default function LifestyleShowcase() {
  return (
    <section className="py-24 md:py-32 bg-ridge-50 bg-noise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-ridge-600 mb-3">
            The Lifestyle
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight text-balance">
            Every Day Feels Like a Vacation
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            This isn&apos;t a once-a-year destination trip. This is your daily
            reality when you plant your basecamp in Northern Idaho.
          </p>
        </div>

        {/* Activity Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((activity, index) => (
            <div
              key={activity.title}
              className={`group relative overflow-hidden rounded-2xl ${
                index === 0 ? "md:row-span-2 aspect-[3/4] md:aspect-auto" : "aspect-[16/10]"
              }`}
            >
              <Image
                src={activity.image}
                alt={activity.imageAlt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes={index === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 50vw"}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-2">
                  {activity.title}
                </h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-md">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
