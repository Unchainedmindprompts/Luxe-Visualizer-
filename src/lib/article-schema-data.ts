import type { FAQItem } from "./schema";

/**
 * Per-article rich schema data — keywords, entity references, FAQ, and
 * breadcrumb overrides that get injected alongside the base Article schema.
 *
 * Keyed by article slug. Articles without an entry here still get the
 * standard Article JSON-LD from generateArticleSchema().
 */

interface ArticleSchemaData {
  keywords?: string[];
  about?: Record<string, unknown>[];
  mentions?: Record<string, unknown>[];
  faqs?: FAQItem[];
  breadcrumbTitle?: string;
}

const articleSchemaData: Record<string, ArticleSchemaData> = {
  "best-time-to-move-to-coeur-dalene": {
    keywords: [
      "best time to move to Coeur d'Alene",
      "when to move to CDA Idaho",
      "Coeur d'Alene seasons",
      "relocating to North Idaho timing",
      "Coeur d'Alene real estate market seasonal",
      "Inland Northwest weather month by month",
      "moving to Coeur d'Alene winter",
      "CDA fall relocation",
      "Coeur d'Alene spring weather",
      "best month buy home Coeur d'Alene",
    ],
    about: [
      { "@type": "Place", name: "Coeur d'Alene", address: { "@type": "PostalAddress", addressLocality: "Coeur d'Alene", addressRegion: "Idaho", addressCountry: "US" } },
      { "@type": "Place", name: "Inland Northwest" },
      { "@type": "Place", name: "Lake Coeur d'Alene" },
      { "@type": "Place", name: "Tubbs Hill", description: "Popular hiking area in downtown Coeur d'Alene, Idaho" },
      { "@type": "Place", name: "Mineral Ridge Trail", description: "Scenic hiking trail near Lake Coeur d'Alene with wildlife viewing" },
      { "@type": "Place", name: "Centennial Trail", description: "23-mile paved trail connecting Coeur d'Alene to Spokane, Washington" },
      { "@type": "Place", name: "Canfield Mountain Trail System", description: "Mountain biking trail network in Coeur d'Alene, Idaho" },
      { "@type": "Place", name: "Beacon Hill Trail System", description: "Mountain biking trail network in Spokane, Washington" },
      { "@type": "Place", name: "Silver Mountain Resort", description: "Ski resort and lift-served mountain bike park in Kellogg, Idaho" },
      { "@type": "Place", name: "Schweitzer Mountain Resort", description: "Major ski resort near Sandpoint, Idaho" },
      { "@type": "Place", name: "Lookout Pass Ski Area", description: "Ski area on the Idaho-Montana border" },
      { "@type": "Place", name: "Sanders Beach", description: "Public beach in Coeur d'Alene on Lake Coeur d'Alene" },
      { "@type": "Place", name: "North Idaho College", description: "Community college in Coeur d'Alene, Idaho" },
      { "@type": "Place", name: "Spokane River" },
      { "@type": "Place", name: "Coeur d'Alene National Forest" },
      { "@type": "Place", name: "St. Joe River" },
    ],
    mentions: [
      { "@type": "LocalBusiness", name: "Daft Badger Brewing", description: "Brewery and restaurant in Coeur d'Alene, Idaho" },
      { "@type": "LocalBusiness", name: "Vantage Point Brewing", description: "Brewery with patio dining in Coeur d'Alene, Idaho" },
      { "@type": "Thing", name: "Art on the Green", description: "Annual arts festival at North Idaho College in Coeur d'Alene, held each August" },
      { "@type": "Thing", name: "Coeur d'Alene Holiday Lighting Ceremony", description: "Annual holiday lighting event the Friday after Thanksgiving in downtown Coeur d'Alene" },
    ],
    faqs: [
      {
        question: "What is the best time of year to move to Coeur d'Alene Idaho?",
        answer: "The best time to move depends on your priorities. September and April offer the strongest combination of reasonable real estate conditions, pleasant weather, and time to get established before the next seasonal shift. November through February offer the best real estate deals with less competition and more negotiating power. June through August let you experience CDA at its peak but come with the highest real estate competition and moving costs. Families with school-age children often target late May through June for a full summer to settle in before the school year.",
      },
      {
        question: "What are winters really like in Coeur d'Alene?",
        answer: "January and February in CDA average highs in the low-to-mid 30s and lows in the low 20s with real snow. The bigger adjustment for most newcomers is the limited daylight — sunrise around 7:45 AM and sunset by 4:30 PM in January, with frequent overcast skies. The cold is manageable but the gray stretch from November to February requires adjustment, especially for people coming from sunnier climates like Arizona or California. The tradeoff is uncrowded ski resorts, a tighter community feel, and a quiet downtown that belongs to locals rather than tourists.",
      },
      {
        question: "When is the best time to buy a home in Coeur d'Alene?",
        answer: "The CDA real estate market follows strong seasonal patterns. November through February offers the least competition and most negotiating leverage — sellers with winter listings are typically motivated. The spring market (March through May) provides early access to new inventory before peak-season buyers arrive. The summer months (June through August) have the most inventory but also the most competition, particularly for properties with views, acreage, or lake access. September and October offer a sweet spot as the summer frenzy cools and sellers who didn't sell during peak season become more flexible on pricing.",
      },
      {
        question: "Does Coeur d'Alene get wildfire smoke?",
        answer: "Yes, wildfire smoke can affect air quality in Coeur d'Alene, typically during late July through August. The severity varies year to year — some summers it barely registers while others can bring reduced air quality for days or a couple weeks at a stretch. Importantly, the smoke is almost never from local fires — it's typically imported from large fire complexes in Central Washington, Eastern Oregon, or British Columbia. It's a regional weather event more than a local hazard. This is a reality of living anywhere in the mountain West, affecting similar communities like Bend, Bozeman, and Missoula. People with respiratory sensitivities should factor this into their relocation planning.",
      },
      {
        question: "What is the best month to visit Coeur d'Alene before relocating?",
        answer: "Visit in a season that concerns you most. If you've only seen CDA in summer and worry about winter, visit in January or February. If you're nervous about the area being too remote or quiet, visit in September when the town is at its most authentic — tourists have left but the weather is still beautiful. The people who thrive long-term in the Inland Northwest are those who walked in with realistic expectations about all four seasons, not just the postcard version.",
      },
      {
        question: "How does the school enrollment process work for families moving to Coeur d'Alene?",
        answer: "Mid-year enrollment in the Coeur d'Alene school district is straightforward and handled regularly. Class sizes in North Idaho are generally smaller than the metro areas most transplants are coming from (Seattle, Portland, Phoenix, the Bay Area), so transferring students aren't walking into overcrowded situations. April is a strategic enrollment window — kids get a quarter to acclimate and make friends before summer break, then start the next school year as a familiar face rather than the new student in September.",
      },
      {
        question: "What is September like in Coeur d'Alene Idaho?",
        answer: "September is widely considered the favorite month among long-time CDA residents. Temperatures settle into the 65-to-75-degree range, the tourists leave, the lake is still swimmable into mid-September, and the trails are empty. Mountain biking is arguably at its best with perfect trail conditions and golden light. The western larches begin their transformation to gold in the surrounding mountains by late September into October, creating a fall foliage display that rivals New England but is largely unknown outside the region.",
      },
      {
        question: "Is spring a good time to move to Coeur d'Alene?",
        answer: "March can be CDA's least appealing month — muddy trails, gray skies, and temperatures stuck in the 38-to-48-degree range between winter and spring. But April brings a rapid transformation with 12-plus hours of daylight, early wildflowers, and the community coming alive after winter. April is also one of the most strategic moving windows: the real estate market is waking up with fresh inventory, but summer competition hasn't arrived yet. For families, April gives kids a quarter to settle in before summer break.",
      },
    ],
    breadcrumbTitle: "The Best Time to Move to Coeur d'Alene",
  },

  "why-your-dog-will-love-class-b-van-life": {
    keywords: [
      "best RV for dogs",
      "Class B van life with dogs",
      "dog-friendly camper van",
      "Class B motorhome pet friendly",
      "traveling with dogs in RV",
      "Sprinter van dog owner",
      "dog-friendly trails Coeur d'Alene",
      "dog-friendly trails Spokane",
      "van life pets Inland Northwest",
      "best camper van for families with dogs",
      "Class B van everyday use",
      "Sportsmobile dog travel",
      "RV climate control pets",
    ],
    about: [
      { "@type": "Thing", name: "Class B Motorhome", description: "A camper van built on a standard commercial van chassis, designed for everyday driving and overnight travel" },
      { "@type": "Thing", name: "Van Life", description: "A lifestyle of living, traveling, or adventuring in a converted or purpose-built camper van" },
      { "@type": "Thing", name: "Dog-Friendly Travel", description: "Traveling with pets using RV and camper van accommodations" },
      { "@type": "Place", name: "Coeur d'Alene", address: { "@type": "PostalAddress", addressLocality: "Coeur d'Alene", addressRegion: "Idaho", addressCountry: "US" } },
      { "@type": "Place", name: "Inland Northwest" },
      { "@type": "Place", name: "Spokane", address: { "@type": "PostalAddress", addressLocality: "Spokane", addressRegion: "Washington", addressCountry: "US" } },
      { "@type": "Place", name: "Tubbs Hill", description: "Two-mile lakeside hiking loop in downtown Coeur d'Alene, Idaho with dog-friendly beaches" },
      { "@type": "Place", name: "Centennial Trail", description: "63-mile paved trail stretching from Spokane into Idaho along the Spokane River" },
      { "@type": "Place", name: "Q'emiln Park", description: "Dog-friendly park near Post Falls, Idaho with trails, swimming, and rock climbing" },
      { "@type": "Place", name: "Mineral Ridge", description: "Moderate switchback trail on Lake Coeur d'Alene with bald eagle viewing" },
      { "@type": "Place", name: "Iller Creek and Rocks of Sharon", description: "360-degree viewpoint trails through Spokane's South Hill" },
    ],
    mentions: [
      { "@type": "Product", name: "Mercedes Sprinter 170 EXT", description: "Extended-length Mercedes-Benz Sprinter van chassis used for Class B motorhome conversions" },
      { "@type": "Organization", name: "Sportsmobile", description: "Custom adventure van builder specializing in 4x4 Sprinter and Ford conversions" },
      { "@type": "LocalBusiness", name: "Bretz RV & Marine", description: "RV and marine dealership in Liberty Lake, Washington" },
      { "@type": "Product", name: "Truma Combi Heater", description: "Diesel-fired independent heating system for RVs and camper vans" },
      { "@type": "Product", name: "Espar Heater", description: "Diesel-fired independent heating system for RVs and camper vans" },
      { "@type": "Organization", name: "Go RVing", description: "RV industry association providing RV travel statistics and resources" },
    ],
    faqs: [
      {
        question: "What is the best RV for traveling with dogs?",
        answer: "A Class B camper van is ideal for dog owners because of its everyday usability, built-in climate control, and compact size that fits in any parking lot. Unlike larger RVs that sit in storage, a Class B becomes your daily driver — meaning your dog comes along for routine errands, day trips, and spontaneous adventures, not just planned vacations.",
      },
      {
        question: "Can I leave my dog in a camper van while I'm away?",
        answer: "Yes, with the right setup. Modern Class B vans feature independent heating systems (like Truma or Espar), roof ventilation fans, and shore power air conditioning that maintain comfortable temperatures regardless of outside weather. Many owners also use pet temperature monitors that send alerts to your phone if conditions change.",
      },
      {
        question: "Are Class B vans practical for everyday use?",
        answer: "Absolutely. Class B vans are built on standard commercial van chassis (Mercedes Sprinter, Ford Transit, Ram ProMaster) and drive like any full-size van. Some fit in normal parking spaces, and use regular gas stations. Most Class B owners report using their van daily, not just for camping trips.",
      },
      {
        question: "What dog-friendly trails are near Spokane and Coeur d'Alene?",
        answer: "The Inland Northwest offers exceptional dog-friendly hiking, including Tubbs Hill on Lake Coeur d'Alene, the 63-mile Centennial Trail along the Spokane River, Q'emiln Park near Post Falls, Mineral Ridge overlooking Lake Coeur d'Alene, and Iller Creek on Spokane's South Hill. All allow leashed dogs and are within an hour of the metro area.",
      },
      {
        question: "How much do Class B camper vans cost?",
        answer: "New Class B camper vans typically range from $120,000 to $250,000+ depending on the chassis, builder, and options. Quality pre-owned models can be found starting around $60,000–$90,000. While the upfront cost is significant, many owners find the quality-of-life return — especially for active families with dogs — makes it one of their best investments.",
      },
    ],
    breadcrumbTitle: "Why Your Dog Will Love Class B Van Life",
  },
};

export function getArticleSchemaData(slug: string): ArticleSchemaData | null {
  return articleSchemaData[slug] ?? null;
}
