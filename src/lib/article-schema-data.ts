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

  "dog-friendly-living-inland-northwest": {
    keywords: [
      "dog-friendly Coeur d'Alene Idaho",
      "dog-friendly trails Coeur d'Alene",
      "best places to live with a dog Idaho",
      "off-leash dog parks CDA",
      "dog-friendly breweries Coeur d'Alene",
      "dog-friendly patios Coeur d'Alene",
      "lake access dogs Idaho",
      "dog-friendly relocation Inland Northwest",
      "dog-friendly hiking Post Falls Idaho",
      "Tubbs Hill dogs allowed",
      "Centennial Trail dogs Coeur d'Alene",
      "Atlas Waterfront Dog Park CDA",
      "dog beach Sandpoint Idaho",
      "pet-friendly living North Idaho",
      "dog-friendly outdoor recreation Spokane CDA",
      "best dog parks Coeur d'Alene Post Falls",
      "INW dog owner relocation guide",
    ],
    about: [
      { "@type": "Place", name: "Coeur d'Alene", address: { "@type": "PostalAddress", addressLocality: "Coeur d'Alene", addressRegion: "Idaho", addressCountry: "US" }, description: "City in Northern Idaho known for dog-friendly trails, off-leash parks, lake access, and pet-welcoming breweries and restaurants" },
      { "@type": "Place", name: "Post Falls", address: { "@type": "PostalAddress", addressLocality: "Post Falls", addressRegion: "Idaho", addressCountry: "US" }, description: "City west of Coeur d'Alene with dog parks, Spokane River access, and dog-friendly coffee shops and restaurants" },
      { "@type": "Place", name: "Inland Northwest", description: "Region spanning North Idaho and Eastern Washington, including Coeur d'Alene, Post Falls, Hayden, Rathdrum, and Sandpoint — known for outdoor recreation and dog-friendly culture" },
      { "@type": "Place", name: "Tubbs Hill", description: "120-acre nature area in downtown Coeur d'Alene with a two-mile loop trail, lake views, and hidden dog-friendly swimming beaches. Leashed dogs welcome on all trails." },
      { "@type": "Place", name: "North Idaho Centennial Trail", description: "23-mile paved trail from the Idaho-Washington state line to Higgins Point on Lake Coeur d'Alene. Leash-friendly, flat, and passes through downtown CDA, Post Falls, and forested areas along the Spokane River." },
      { "@type": "Place", name: "Mineral Ridge National Recreation Trail", description: "3.3-mile scenic loop trail east of Coeur d'Alene along the Lake Coeur d'Alene Scenic Byway with bald eagle viewing and panoramic lake views. Dogs on leash welcome." },
      { "@type": "Place", name: "McEuen Park Dog Park", description: "Fenced off-leash dog park in downtown Coeur d'Alene with agility equipment, water fountain, shade structures, and separate areas for different dog sizes. Steps from the lakefront and Tubbs Hill." },
      { "@type": "Place", name: "Atlas Waterfront Dog Park", description: "12.5-acre waterfront park on the north side of Coeur d'Alene with a dedicated dog swim area, ADA-accessible beach access, kayak launch, and direct Centennial Trail connection." },
      { "@type": "Place", name: "Central Bark Dog Park", description: "Fully fenced 1.8-acre off-leash dog park on CDA's west side with open grass and room to run." },
      { "@type": "Place", name: "Pawfoot Dog Park", description: "Off-leash dog park at Croffoot Park in Hayden, Idaho with separate large/small dog sections. Open 6 AM to 9 PM daily." },
      { "@type": "Place", name: "Q'emiln Park", description: "Dog-friendly park in Post Falls along the Spokane River with trails, a swimming beach, and river access." },
      { "@type": "Place", name: "Lake Coeur d'Alene", description: "25-mile lake in Northern Idaho with dog-accessible beaches at Tubbs Hill, Atlas Waterfront Park, and Beacon Point. Lake Coeur d'Alene Cruises welcomes leashed dogs at no extra charge." },
      { "@type": "Place", name: "Dog Beach Park Sandpoint", description: "Off-leash sandy dog beach on Lake Pend Oreille in Sandpoint, Idaho with a dock ramp for dogs and doggie shower stations." },
      { "@type": "Place", name: "Spokane River", description: "River running through Post Falls with multiple dog-accessible swimming and wading points at Q'emiln Park and Blackwell Island Recreation Site." },
      { "@type": "Place", name: "Idaho Panhandle National Forests", description: "Over 2.5 million acres of public land surrounding the Coeur d'Alene area with dog-friendly trails including Caribou Ridge, Marie Creek, and the Pulaski Tunnel Trail." },
      { "@type": "Place", name: "Sandpoint", address: { "@type": "PostalAddress", addressLocality: "Sandpoint", addressRegion: "Idaho", addressCountry: "US" }, description: "Dog-friendly lakeside town 45 minutes north of Coeur d'Alene with Dog Beach Park, downtown shops welcoming dogs, and water bowls along First Avenue." },
      { "@type": "Place", name: "Lake Pend Oreille", description: "One of the largest and deepest natural lakes in the western US, located near Sandpoint, Idaho. Home to Dog Beach Park, one of the best off-leash dog beaches in Idaho." },
    ],
    mentions: [
      { "@type": "LocalBusiness", name: "Daft Badger Brewing", description: "Brewery and restaurant on N. Government Way in Coeur d'Alene with a covered, heated dog-friendly patio open year-round, 365 days. Known for huckleberry BBQ bacon finished in house-brewed stout." },
      { "@type": "LocalBusiness", name: "Vantage Point Brewing", description: "Brewery on E. Coeur d'Alene Lake Drive with a massive grassy lawn, large umbrellas, and an explicitly dog-centric outdoor space." },
      { "@type": "LocalBusiness", name: "Sweet Lou's Restaurant & Tap House", description: "Restaurant in Coeur d'Alene with a heated and covered dog-friendly patio serving American comfort food." },
      { "@type": "LocalBusiness", name: "Capone's Pub & Grill", description: "Pub in Coeur d'Alene with outdoor tables and a dedicated dog menu." },
      { "@type": "LocalBusiness", name: "The Buoy Bar & Grill", description: "Waterfront restaurant with deck seating overlooking Lake Coeur d'Alene. Dog-friendly outdoor dining." },
      { "@type": "LocalBusiness", name: "Paragon Brewing", description: "Brewery in Coeur d'Alene with a dog-friendly beer garden and fire pit." },
      { "@type": "LocalBusiness", name: "Trails End Brewery", description: "Brewery with brick-oven pizza and outdoor dog-friendly tables." },
      { "@type": "LocalBusiness", name: "Republic Kitchen & Taphouse", description: "Restaurant and taphouse in Post Falls with picnic tables and a grassy area for dogs." },
      { "@type": "LocalBusiness", name: "Trailbreaker Cider", description: "Cidery in Liberty Lake, Washington with one of the most dog-centric outdoor spaces in the region — large grassy area, shade, water stations, and tableside patio service." },
      { "@type": "LocalBusiness", name: "Terre Coffee & Bakery", description: "Coffee shop with dog-friendly outdoor seating." },
      { "@type": "LocalBusiness", name: "Thomas Hammer Coffee Roasters", description: "Coffee roaster in Post Falls with dog-friendly outdoor seating." },
      { "@type": "LocalBusiness", name: "Hayden Pet Medical Center", description: "AAHA-accredited veterinary hospital serving the greater Coeur d'Alene area." },
      { "@type": "LocalBusiness", name: "Pampurred Pet", description: "Locally owned pet boutique in Coeur d'Alene focused on premium food and treats." },
      { "@type": "LocalBusiness", name: "The Labrador Store & More", description: "Dog-focused retail shop in The Resort Plaza Shops in Coeur d'Alene — dogs welcome inside." },
      { "@type": "LocalBusiness", name: "Evergroom Luxury Mobile Pet Grooming", description: "Mobile pet grooming service that comes to your home in the Coeur d'Alene area." },
      { "@type": "Organization", name: "Lake Coeur d'Alene Cruises", description: "Scenic lake cruise operator that welcomes well-behaved leashed dogs on daily cruises at no additional charge." },
      { "@type": "WebSite", name: "Sniffspot", description: "Platform listing over 50 rentable private off-leash dog spaces in the greater CDA area, including fenced multi-acre properties with trails and swimming access." },
    ],
    faqs: [
      {
        question: "Is Coeur d'Alene Idaho dog-friendly?",
        answer: "Yes, Coeur d'Alene is exceptionally dog-friendly. The city and surrounding Inland Northwest region offer dedicated off-leash dog parks (McEuen Park, Atlas Waterfront, Central Bark), hundreds of miles of leash-friendly trails (Tubbs Hill, the 23-mile Centennial Trail, Mineral Ridge), dog-accessible lake beaches, and a thriving brewery and restaurant patio scene that welcomes dogs. The area is surrounded by 2.5 million acres of Idaho Panhandle National Forests with dog-friendly trails. Many locals consider the INW one of the best regions in the country for dog owners due to the combination of outdoor access, uncrowded spaces, and a culture where bringing your dog is expected rather than just tolerated.",
      },
      {
        question: "What are the best dog-friendly trails near Coeur d'Alene?",
        answer: "Top dog-friendly trails near Coeur d'Alene include: Tubbs Hill, a two-mile lakeside loop in downtown CDA with hidden swimming beaches for dogs; the North Idaho Centennial Trail, 23 miles of paved, flat path from the state line to Higgins Point; Mineral Ridge, a scenic 3.3-mile loop with bald eagle viewing and panoramic lake views; and the trails in the Idaho Panhandle National Forests, including Caribou Ridge (9 miles), Marie Creek (10 miles), and the Pulaski Tunnel Trail near Wallace. Leashed dogs are welcome on all of these trails. North of CDA near Sandpoint, the Mickinnick Trail, Pend Oreille Bay Trail, and Round Lake State Park also welcome leashed dogs.",
      },
      {
        question: "Are there off-leash dog parks in Coeur d'Alene and Post Falls?",
        answer: "Yes, the area has multiple dedicated off-leash dog parks. In Coeur d'Alene: McEuen Park Dog Park downtown (fenced, agility equipment, separate small/large dog areas), Atlas Waterfront Dog Park (12.5 acres with a dog swim area and Centennial Trail access), and Central Bark Dog Park (1.8 fenced acres). In Hayden: Pawfoot Dog Park with separate sections and water access. In Post Falls: Park in the Meadows with agility equipment and Q'emiln Park with river swimming. Additionally, the Sniffspot platform lists over 50 rentable private off-leash spaces in the greater CDA area, including fenced multi-acre properties.",
      },
      {
        question: "Can dogs swim in Lake Coeur d'Alene?",
        answer: "Yes, though the main public beaches (City Beach, NIC Beach) don't allow dogs on the sand. Dog-friendly swimming access includes: the beaches along the Tubbs Hill trail, the dedicated dog swim area at Atlas Waterfront Park, Beacon Point, and various pull-offs along the Lake Coeur d'Alene Scenic Byway. If you have a boat or paddleboard, the entire lake is open. Lake Coeur d'Alene Cruises also welcomes leashed dogs on daily scenic cruises at no extra charge. For the best off-leash dog beach experience, Dog Beach Park in Sandpoint (45 minutes north) on Lake Pend Oreille offers a sandy beach with a dock ramp and doggie shower stations.",
      },
      {
        question: "What are the best dog-friendly restaurants and breweries in Coeur d'Alene?",
        answer: "Top dog-friendly dining spots in the CDA area include: Daft Badger Brewing (covered heated patio, dog-friendly year-round 365 days), Vantage Point Brewing (large grassy lawn designed with dogs in mind), Capone's Pub & Grill (outdoor tables with a dedicated dog menu), The Buoy Bar & Grill (deck overlooking the lake), and Sweet Lou's (heated covered patio). The brewery circuit is especially dog-friendly — Paragon Brewing has a beer garden with a fire pit, Trails End Brewery has outdoor dog-friendly tables, and Trailbreaker Cider in Liberty Lake has one of the most dog-centric outdoor spaces in the region. Important tip: not every patio in the INW is dog-friendly despite appearances — always call ahead to confirm.",
      },
      {
        question: "How does Coeur d'Alene compare to Bend Oregon for dog owners?",
        answer: "The Inland Northwest offers significant advantages over Bend for dog owners. The INW has more lake access, more trail options, less crowding, and a culture where dogs are a standard part of daily life. You're surrounded by 2.5 million acres of national forest (versus Bend's Deschutes National Forest), dozens of lakes with dog-accessible swimming, and trails that would be packed in Bend are largely uncrowded here. Property is more affordable with fenced yards as a standard feature rather than a luxury. The tradeoff is that the INW is slightly more structured than Portland or Bend — leash rules are enforced in city parks, and main downtown beaches restrict dogs. But the sheer volume of outdoor access more than compensates.",
      },
      {
        question: "What is dog ownership like in winter in Coeur d'Alene?",
        answer: "Winter changes the dog routine but doesn't stop it. November through March, many outdoor patios shut down (though Daft Badger's heated patio stays open year-round), dog park water fountains are turned off, and trail conditions shift to snow and ice. The Centennial Trail stays accessible through most of winter, but shorter days mean more headlamp walks. The off-leash dog parks remain open. Many dog owners shift to snowshoeing and winter trail walking with their dogs on the national forest trails. Indoor pet infrastructure — vets, groomers, and pet shops — operates year-round with strong coverage across the CDA, Post Falls, and Hayden area.",
      },
      {
        question: "Are there good veterinarians near Coeur d'Alene Idaho?",
        answer: "Yes, the Inland Northwest has strong veterinary coverage. Established practices include Lakewood Animal Hospital, Prairie Animal Hospital, Alpine Animal Hospital, Lake City Pet Hospital, and Hayden Pet Medical Center (AAHA accredited). Doc Holly Pet Vet is popular for routine care. For grooming, options range from Posh Paws Pet Spa and The Zen Puppy to mobile services like Evergroom Luxury Mobile Pet Grooming and North Idaho Pet Stop's mobile grooming van. Pet retail includes locally owned shops like Pampurred Pet (premium food and treats), GoodDog (gear and accessories), and The Labrador Store & More in The Resort Plaza Shops, where dogs are welcome inside.",
      },
    ],
    breadcrumbTitle: "Dog-Friendly Living in the Inland Northwest",
  },

  "only-one-place-made-us-stay": {
    keywords: [
      "Coeur d'Alene vs Bend Oregon",
      "Coeur d'Alene vs Sedona Arizona",
      "Coeur d'Alene vs Prescott Arizona",
      "best mountain town to live in",
      "best outdoor lifestyle town in the West",
      "relocating to Coeur d'Alene Idaho",
      "why we moved to Coeur d'Alene",
      "Bend Oregon housing crisis",
      "Sedona Arizona livability",
      "Prescott Arizona isolation",
      "CDA vs Bend cost of living",
      "best place to live for mountain biking",
      "Silver Mountain bike park review",
      "best small towns for outdoor recreation",
      "moving from Bend to Coeur d'Alene",
      "Inland Northwest relocation comparison",
      "best places to live in Idaho",
      "mountain town comparison West",
      "Coeur d'Alene livability",
      "best lake towns to live in America",
    ],
    about: [
      { "@type": "Place", name: "Coeur d'Alene", address: { "@type": "PostalAddress", addressLocality: "Coeur d'Alene", addressRegion: "Idaho", addressCountry: "US" }, description: "City in Northern Idaho on a 30-mile glacial lake surrounded by the Idaho Panhandle National Forests — 2.5 million acres of public land" },
      { "@type": "Place", name: "Bend", address: { "@type": "PostalAddress", addressLocality: "Bend", addressRegion: "Oregon", addressCountry: "US" }, description: "Outdoor lifestyle destination in Central Oregon known for Mt. Bachelor, the Deschutes River, and craft breweries — population tripled from 35,000 to over 100,000" },
      { "@type": "Place", name: "Sedona", address: { "@type": "PostalAddress", addressLocality: "Sedona", addressRegion: "Arizona", addressCountry: "US" }, description: "Red rock destination in Arizona with 10,000 permanent residents absorbing 2.8 to 5 million visitors per year" },
      { "@type": "Place", name: "Prescott", address: { "@type": "PostalAddress", addressLocality: "Prescott", addressRegion: "Arizona", addressCountry: "US" }, description: "Small mountain city in Arizona at 5,400 feet with Courthouse Square and Whiskey Row — 100 to 110 miles from Phoenix Sky Harbor" },
      { "@type": "Place", name: "Austin", address: { "@type": "PostalAddress", addressLocality: "Austin", addressRegion: "Texas", addressCountry: "US" }, description: "Texas capital known for music, food, and tech — limited mountain recreation and explosive growth" },
      { "@type": "Place", name: "Issaquah", address: { "@type": "PostalAddress", addressLocality: "Issaquah", addressRegion: "Washington", addressCountry: "US" }, description: "City in the Cascade foothills east of Seattle with Tiger Mountain access and 226 cloudy days per year" },
      { "@type": "Place", name: "Mesa", address: { "@type": "PostalAddress", addressLocality: "Mesa", addressRegion: "Arizona", addressCountry: "US" }, description: "City in the Phoenix metro area with access to the Superstition Mountains and Hawes Trail System" },
      { "@type": "Place", name: "Show Low", address: { "@type": "PostalAddress", addressLocality: "Show Low", addressRegion: "Arizona", addressCountry: "US" }, description: "Town in the White Mountains of Arizona at 6,400 feet near Sunrise Park Resort" },
      { "@type": "Place", name: "Pinetop-Lakeside", address: { "@type": "PostalAddress", addressLocality: "Pinetop-Lakeside", addressRegion: "Arizona", addressCountry: "US" }, description: "Mountain community in the White Mountains of Arizona adjacent to Show Low" },
      { "@type": "Place", name: "Lake Coeur d'Alene", description: "30-mile glacial lake in Northern Idaho surrounded by forested mountains" },
      { "@type": "Place", name: "Inland Northwest", description: "Region spanning North Idaho and Eastern Washington including Coeur d'Alene, Post Falls, Spokane, and surrounding communities" },
      { "@type": "Place", name: "Idaho Panhandle National Forests", description: "2.5 million acres of public land surrounding the Coeur d'Alene area" },
      { "@type": "Place", name: "Big Sur", description: "Dramatic coastal stretch along Highway 1 in California — one of the most spectacular drives in the world" },
      { "@type": "Place", name: "Oak Creek Canyon", description: "Scenic canyon north of Sedona, Arizona along SR 89A" },
      { "@type": "Place", name: "Mt. Bachelor", description: "Ski resort and bike park near Bend, Oregon in the Cascade Range" },
      { "@type": "Place", name: "Smith Rock State Park", description: "Rock climbing and hiking destination near Bend, Oregon" },
      { "@type": "Place", name: "Deschutes River", description: "Major river running through Bend, Oregon popular for recreation" },
    ],
    mentions: [
      { "@type": "Place", name: "Silver Mountain Resort", description: "Ski resort and lift-served mountain bike park in Kellogg, Idaho — best lift-served mountain biking outside of Whistler according to the authors" },
      { "@type": "Place", name: "Schweitzer Mountain Resort", description: "Major ski resort near Sandpoint, Idaho" },
      { "@type": "Place", name: "Lookout Pass Ski Area", description: "Ski area on the Idaho-Montana border known for heavy snowfall" },
      { "@type": "Place", name: "Canfield Mountain Trail System", description: "Mountain biking trail network in Coeur d'Alene, Idaho" },
      { "@type": "Place", name: "Beacon Hill Trail System", description: "Mountain biking trail network in Spokane, Washington across the state line from CDA" },
      { "@type": "Place", name: "Sherman Avenue", description: "Main downtown street in Coeur d'Alene with restaurants, breweries, and locally owned shops" },
      { "@type": "Place", name: "McEuen Park", description: "Waterfront park in downtown Coeur d'Alene" },
      { "@type": "Place", name: "Tubbs Hill", description: "120-acre nature area in downtown Coeur d'Alene with lakeside trails" },
      { "@type": "Place", name: "Centennial Trail", description: "23-mile paved trail connecting Coeur d'Alene to Spokane" },
      { "@type": "Place", name: "Sunrise Park Resort", description: "Ski resort and bike park in the White Mountains of Arizona on the Fort Apache Indian Reservation — Arizona's only lift-served downhill mountain biking" },
      { "@type": "Place", name: "Wanoga Trail System", description: "Mountain biking trail network near Mt. Bachelor in Bend, Oregon" },
      { "@type": "Place", name: "Hawes Trail System", description: "Desert singletrack mountain biking network in Mesa, Arizona" },
      { "@type": "Place", name: "Tiger Mountain", description: "Mountain with trail system in Issaquah, Washington east of Seattle" },
      { "@type": "Place", name: "Cathedral Rock", description: "Iconic red rock formation in Sedona, Arizona" },
      { "@type": "Place", name: "Spokane International Airport", description: "Major airport 35 minutes from Coeur d'Alene with 23 nonstop destinations" },
      { "@type": "Place", name: "Redmond Municipal Airport", description: "Regional airport serving Bend, Oregon with around 10 nonstop routes" },
      { "@type": "Place", name: "Superstition Mountains", description: "Mountain range east of Mesa, Arizona" },
      { "@type": "Place", name: "Lady Bird Lake", description: "Reservoir on the Colorado River in downtown Austin, Texas" },
      { "@type": "Place", name: "Barton Springs Pool", description: "Natural spring-fed swimming pool in Austin, Texas" },
    ],
    faqs: [
      {
        question: "How does Coeur d'Alene compare to Bend Oregon for outdoor living?",
        answer: "Coeur d'Alene offers comparable natural beauty and outdoor culture to Bend but with significantly better livability. Bend's population tripled from 35,000 to over 100,000, causing a housing crisis — the city needs 15,700+ new homes in the next eight years. Over half of Bend's neighborhoods are classified as unaffordable even at the area median income of $123,500. CDA matches Bend's outdoor access with a 30-mile glacial lake, 2.5 million acres of national forest, and trail systems like Canfield Mountain and Silver Mountain's bike park, but without the overcrowding, traffic backups, and 45-minute restaurant waits that now define Bend. You can buy a home with a fenced yard and mountain views in CDA for what a condo in Bend's Old Mill District costs.",
      },
      {
        question: "Is Sedona Arizona a good place to live full time?",
        answer: "Sedona's natural beauty is genuinely world-class — the red rock formations are unlike anything else in the American West. However, Sedona is fundamentally a tourist destination, not a functional residential community. A town of 10,000 permanent residents absorbs 2.8 to 5 million visitors per year. The two main highways (SR 89A and SR 179) become parking lots on weekends and most afternoons March through October, with no viable infrastructure fixes due to geographic constraints. The town's economy, dining, and shopping are oriented around tourism rather than residents. It's an incredible place to visit for a long weekend, but full-time livability is severely compromised by traffic, tourist infrastructure, and the lack of an authentic residential community feel.",
      },
      {
        question: "Is Prescott Arizona a good place to relocate?",
        answer: "Prescott has genuine small-town charm with Courthouse Square and Whiskey Row, but it falls short for people seeking a vibrant outdoor lifestyle community. The town is isolated — Phoenix Sky Harbor is a 2 to 2.5 hour drive, and Prescott's own regional airport has extremely limited commercial service. At 5,400 feet, winters are colder than most people expect for Arizona without the ski-town culture that makes cold weather worthwhile. The summer monsoon season brings disruptive thunderstorms. The dining and cultural scene is thin compared to places like Bend, Austin, or Coeur d'Alene. Prescott works for people seeking quiet retirement-style living, but for those wanting an active, connected outdoor lifestyle community, it doesn't deliver.",
      },
      {
        question: "What is the best mountain town to live in out West?",
        answer: "After living in Bend (Oregon), Issaquah (Washington), Austin (Texas), and Mesa (Arizona), and extensively exploring Sedona, Prescott, the White Mountains, and the California coast, the authors concluded that Coeur d'Alene, Idaho offers the best combination of natural beauty, outdoor recreation, community character, affordability, and connectivity. CDA sits on a 30-mile glacial lake surrounded by 2.5 million acres of public land, has a vibrant downtown with real restaurants and breweries, offers world-class mountain biking and skiing within an hour's drive, and is just 35 minutes from Spokane International Airport with 23 nonstop destinations. Unlike most mountain towns, CDA hasn't yet been overwhelmed by the growth that has compromised livability in places like Bend.",
      },
      {
        question: "How is the mountain biking near Coeur d'Alene Idaho?",
        answer: "Coeur d'Alene has exceptional mountain biking that rivals or exceeds most Western mountain towns. Local trail networks include Canfield Mountain in CDA and Beacon Hill across the state line in Spokane — both are legitimate networks that would be headline attractions in most mountain towns. Silver Mountain's bike park, a 75-minute drive from CDA, offers what the authors describe as the best lift-served mountain biking they've ridden outside of Whistler — with trail quality, vertical, and variety that compete with big-name parks. The surrounding Idaho Panhandle National Forests add hundreds of miles of backcountry singletrack. Unlike crowded trail systems in Bend or other popular mountain towns, CDA's trails remain largely uncrowded.",
      },
      {
        question: "Is Coeur d'Alene Idaho affordable compared to Bend Oregon?",
        answer: "Coeur d'Alene is significantly more affordable than Bend, Oregon. Bend's area median income is over $123,000 and even at that level, over half the city's neighborhoods are classified as unaffordable — a book was published in 2025 about Bend's housing crisis. CDA's housing market is active but not yet broken by the speculative growth that consumed Bend. You can purchase a home with a fenced yard and mountain views in CDA for what a condo in Bend's Old Mill District costs. CDA also benefits from Idaho's tax structure, including no state inheritance tax and relatively lower property tax rates compared to Oregon.",
      },
      {
        question: "What are the White Mountains of Arizona like for living?",
        answer: "The White Mountains (Show Low and Pinetop area) offer genuinely beautiful scenery — ponderosa forests, meadows, and four-season living at 6,400 feet. Sunrise Park Resort provides Arizona's only lift-served downhill mountain biking and skiing. However, there's no real town infrastructure — it's a highway corridor without a downtown core, walkable district, or community gathering places. The coffee shops, breweries, and Friday-night energy that make a place feel alive don't exist. Sunrise Park sits on the Fort Apache Indian Reservation, limiting surrounding recreation infrastructure. The area has potential but currently functions as a weekend destination rather than a viable year-round community.",
      },
      {
        question: "Can you live on the California coast?",
        answer: "While the California and Oregon coast is spectacular to drive — Highway 1 from Astoria to Big Sur is one of the most beautiful drives in the world — the coastal towns have significant livability challenges. Northern California and Oregon coastal towns are either unaffordably expensive, depressingly gray for most of the year (rain, wind, and fog October through May), or both. Charming towns like Mendocino, Cannon Beach, and Yachats function as vacation destinations rather than communities with diverse economies and real infrastructure. The Big Sur stretch has essentially nowhere to live — it's a scenic highway with a few resorts. The California coast works beautifully as a road trip, not as a relocation strategy.",
      },
    ],
    breadcrumbTitle: "Only One Place Made Us Stay",
  },
};

export function getArticleSchemaData(slug: string): ArticleSchemaData | null {
  return articleSchemaData[slug] ?? null;
}
