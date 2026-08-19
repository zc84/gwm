import type { Locale } from "@gwm/shared";

/**
 * Lightweight catalogue-only model seed data, sourced from the GWM Middle
 * East bilingual content seed pack. Deliberately omits specs/prices/trims —
 * those are market-owned CMS fields per the source brief, not shared
 * hard-coded copy. Models with a full detail page set `slug` to the matching
 * entry in `SiteContent.vehicles`; the rest link out to the lead forms.
 */
export type ModelStatus = "live" | "referenced" | "seed";

export type ModelEntry = {
  name: string;
  status: ModelStatus;
  segment: string;
  tagline: string;
  intro: string;
  slug?: string;
};

export type BrandGroup = {
  brand: string;
  tagline: string;
  models: ModelEntry[];
};

/**
 * Model name -> media pack image folder, sourced from
 * `GWM_ME_Website_Content_Media_Pack/Vehicles/vehicle_master.json`. Every
 * catalogue entry above has a matching folder of 5 stills under
 * `apps/web/public/media/vehicles/<slug>/`.
 */
const modelImageSlugs: Record<string, string> = {
  Jolion: "jolion",
  "Jolion Pro": "jolion-pro",
  "Jolion Max": "jolion-max",
  "All-New H6": "all-new-h6",
  "H6 HEV": "h6-hev",
  "H6 GT": "h6-gt",
  H7: "h7",
  H9: "h9",
  V7: "v7",
  DARGO: "dargo",
  "TANK 300": "tank-300",
  "TANK 300 HEV": "tank-300-hev",
  "TANK 300 Polar Edition": "tank-300-polar-edition",
  "TANK 400": "tank-400",
  "TANK 400 Hi4-T": "tank-400-hi4-t",
  "TANK 500": "tank-500",
  "TANK 500 HEV": "tank-500-hev",
  "TANK 500 Hi4-T": "tank-500-hi4-t",
  "TANK 500 Hi4-Z": "tank-500-hi4-z",
  "TANK 700": "tank-700",
  "ORA 03 Pure": "ora-03-pure",
  "ORA 03 Pro": "ora-03-pro",
  "ORA 03 GT": "ora-03-gt",
  "ORA 07": "ora-07",
  "ORA 07 Touring": "ora-07-touring",
  "ORA 5": "ora-5",
  "Good Cat Standard": "good-cat-standard",
  "Good Cat Long Range": "good-cat-long-range",
  "Good Cat GT": "good-cat-gt",
  "Ballet Cat": "ballet-cat",
  "WEY 03": "wey-03",
  "WEY 05": "wey-05",
  "WEY 07": "wey-07",
  "WEY 80": "wey-80",
  "WEY G9": "wey-g9",
  "Coffee 01": "coffee-01",
  "Coffee 02": "coffee-02",
  "Mocha DHT-PHEV": "mocha-dht-phev",
  Lanshan: "lanshan",
  Gaoshan: "gaoshan",
  "POER Facelift": "poer-facelift",
  "POER 2.4T Passenger": "poer-2-4t-passenger",
  "POER 2.4T Commercial": "poer-2-4t-commercial",
  "POER Off-Road": "poer-off-road",
  "POER King Kong": "poer-king-kong",
  "King Kong 8AT": "king-kong-8at",
  "Wingle 5": "wingle-5",
  "Wingle 7": "wingle-7",
  "SAHAR POER": "sahar-poer",
  "SAHAR POER Hi4-T": "sahar-poer-hi4-t",
};

export function getModelThumbnail(name: string): string | undefined {
  const slug = modelImageSlugs[name];
  return slug ? `/media/vehicles/${slug}/01_hero_exterior.webp` : undefined;
}

export const modelCatalogue: Record<Locale, BrandGroup[]> = {
  en: [
    {
      brand: "HAVAL",
      tagline: "Intelligent SUVs for everyday confidence.",
      models: [
        {
          name: "Jolion",
          status: "live",
          segment: "Compact SUV",
          tagline: "Confident city versatility",
          intro:
            "A practical, technology-led SUV for everyday driving, family routines and connected urban journeys.",
        },
        {
          name: "Jolion Pro",
          status: "referenced",
          segment: "Compact SUV",
          tagline: "More space for everyday ambition",
          intro:
            "A refined compact SUV concept focused on usable space, comfort and intuitive technology.",
        },
        {
          name: "Jolion Max",
          status: "seed",
          segment: "Compact SUV",
          tagline: "Smart comfort, made effortless",
          intro:
            "A modern compact SUV positioned around easy connectivity, flexible cabin use and confident road manners.",
        },
        {
          name: "All-New H6",
          status: "live",
          segment: "Mid-size SUV",
          tagline: "Everyday intelligence, elevated",
          intro:
            "A versatile family SUV balancing modern design, intelligent assistance and comfortable long-distance usability.",
          slug: "all-new-h6",
        },
        {
          name: "H6 HEV",
          status: "live",
          segment: "Hybrid SUV",
          tagline: "Hybrid efficiency without compromise",
          intro:
            "A hybrid SUV proposition designed to combine smooth urban driving with responsive performance and reduced fuel demand.",
        },
        {
          name: "H6 GT",
          status: "live",
          segment: "Sport SUV",
          tagline: "Sporting character for every day",
          intro:
            "A coupe-inspired SUV with a bolder visual attitude, driver-focused feel and everyday practicality.",
        },
        {
          name: "H7",
          status: "live",
          segment: "Mid-size SUV",
          tagline: "Designed to go beyond routine",
          intro:
            "A confident SUV for customers seeking more road presence, flexible capability and a premium-feeling cabin.",
        },
        {
          name: "H9",
          status: "live",
          segment: "Large SUV",
          tagline: "Family comfort. Adventure capability.",
          intro:
            "A large SUV conceived for family space, premium comfort and the confidence to move beyond paved roads.",
        },
        {
          name: "V7",
          status: "live",
          segment: "SUV",
          tagline: "A venture for every lifestyle",
          intro:
            "A versatile lifestyle SUV concept combining distinctive design, practical flexibility and technology-led convenience.",
        },
        {
          name: "DARGO",
          status: "seed",
          segment: "Adventure SUV",
          tagline: "Built for the road less ordinary",
          intro:
            "An adventure-oriented SUV seed entry for customers who value expressive design, confident capability and weekend exploration.",
        },
      ],
    },
    {
      brand: "GWM TANK",
      tagline: "Premium off-road capability with refined comfort.",
      models: [
        {
          name: "TANK 300",
          status: "live",
          segment: "Luxury off-road SUV",
          tagline: "Master every terrain with confidence",
          intro:
            "A premium off-road SUV combining rugged capability with a refined cabin and intelligent driving support.",
        },
        {
          name: "TANK 300 HEV",
          status: "seed",
          segment: "Hybrid off-road SUV",
          tagline: "Electrified confidence, off-road DNA",
          intro:
            "A hybrid off-road proposition designed to add smoother electrified response to the TANK 300 adventure formula.",
        },
        {
          name: "TANK 300 Polar Edition",
          status: "seed",
          segment: "Special-edition off-road SUV",
          tagline: "Extreme character for extreme places",
          intro:
            "A special-edition content entry centred on expedition styling, cold-weather adventure and distinctive equipment themes.",
        },
        {
          name: "TANK 400",
          status: "seed",
          segment: "Luxury off-road SUV",
          tagline: "Modern strength, intelligently expressed",
          intro:
            "A bold off-road SUV seed positioned between urban refinement and serious all-terrain capability.",
        },
        {
          name: "TANK 400 Hi4-T",
          status: "seed",
          segment: "PHEV off-road SUV",
          tagline: "Hybrid power for the path ahead",
          intro:
            "A plug-in hybrid off-road seed entry designed around strong response, intelligent energy use and all-terrain confidence.",
        },
        {
          name: "TANK 500",
          status: "live",
          segment: "Luxury large SUV",
          tagline: "Premium comfort. Serious capability.",
          intro:
            "A large premium SUV balancing sophisticated comfort, road presence and confident off-road engineering.",
          slug: "tank-500",
        },
        {
          name: "TANK 500 HEV",
          status: "seed",
          segment: "Hybrid luxury SUV",
          tagline: "Luxury moves smarter",
          intro:
            "A hybrid luxury SUV concept bringing electrified efficiency to a spacious and capable premium platform.",
        },
        {
          name: "TANK 500 Hi4-T",
          status: "seed",
          segment: "PHEV luxury off-road SUV",
          tagline: "Plug-in performance, all-terrain confidence",
          intro:
            "A plug-in hybrid off-road proposition focused on premium touring, high capability and intelligent energy management.",
        },
        {
          name: "TANK 500 Hi4-Z",
          status: "seed",
          segment: "PHEV off-road SUV",
          tagline: "Long-range electrified adventure",
          intro:
            "A next-generation electrified off-road seed entry designed for customers who want daily usability and extended adventure capability.",
        },
        {
          name: "TANK 700",
          status: "live",
          segment: "Flagship luxury off-road SUV",
          tagline: "Flagship luxury beyond the ordinary",
          intro:
            "A flagship luxury off-road SUV positioned around commanding design, premium craftsmanship and advanced all-terrain performance.",
        },
      ],
    },
    {
      brand: "ORA",
      tagline: "Expressive electric mobility for modern lifestyles.",
      models: [
        {
          name: "ORA 03 Pure",
          status: "seed",
          segment: "Electric hatchback",
          tagline: "Electric simplicity for the city",
          intro:
            "An accessible electric hatchback seed focused on easy daily use, compact dimensions and connected convenience.",
        },
        {
          name: "ORA 03 Pro",
          status: "seed",
          segment: "Electric hatchback",
          tagline: "More comfort in every electric mile",
          intro:
            "A higher-content ORA 03 seed variant adding comfort and technology emphasis to the urban EV formula.",
        },
        {
          name: "ORA 03 GT",
          status: "seed",
          segment: "Performance-styled EV",
          tagline: "Electric style with extra attitude",
          intro:
            "A sport-styled electric hatchback proposition with expressive details and a more dynamic visual character.",
        },
        {
          name: "ORA 07",
          status: "seed",
          segment: "Electric fastback",
          tagline: "Elegant electric motion",
          intro:
            "A sleek electric fastback seed combining distinctive design, quiet driving and technology-led comfort.",
        },
        {
          name: "ORA 07 Touring",
          status: "seed",
          segment: "Electric touring vehicle",
          tagline: "More room for electric journeys",
          intro:
            "A touring-oriented electric seed entry adding practical cargo flexibility to ORA's expressive design language.",
        },
        {
          name: "ORA 5",
          status: "seed",
          segment: "Electric SUV",
          tagline: "Smart electric freedom, reimagined",
          intro:
            "A compact electric SUV seed for modern urban lifestyles, practical exploration and intuitive technology.",
        },
        {
          name: "Good Cat Standard",
          status: "seed",
          segment: "Electric hatchback",
          tagline: "Playful design. Everyday electric.",
          intro:
            "A market-alias seed entry for ORA's compact EV family, centred on friendly design and daily usability.",
        },
        {
          name: "Good Cat Long Range",
          status: "seed",
          segment: "Electric hatchback",
          tagline: "Go farther with the same easy character",
          intro:
            "A range-focused content variant for the Good Cat/ORA 03 family, intended for CMS and localisation testing.",
        },
        {
          name: "Good Cat GT",
          status: "seed",
          segment: "Electric hatchback",
          tagline: "Sportier expression, electric heart",
          intro:
            "A GT-styled market-alias entry using a more dynamic visual and messaging treatment for electric mobility.",
        },
        {
          name: "Ballet Cat",
          status: "seed",
          segment: "Electric lifestyle car",
          tagline: "Distinctive electric design with personality",
          intro:
            "A lifestyle-focused EV seed entry created to exercise expressive design, colour and editorial storytelling in the CMS.",
        },
      ],
    },
    {
      brand: "WEY",
      tagline: "Premium electrified mobility centred on intelligent comfort.",
      models: [
        {
          name: "WEY 03",
          status: "seed",
          segment: "Premium electrified SUV",
          tagline: "Premium intelligence in a compact form",
          intro:
            "A premium electrified SUV seed focused on refined comfort, connected technology and effortless daily usability.",
        },
        {
          name: "WEY 05",
          status: "seed",
          segment: "Premium PHEV SUV",
          tagline: "Refined performance for modern journeys",
          intro:
            "A premium plug-in hybrid SUV proposition balancing quiet electrified driving with long-distance versatility.",
        },
        {
          name: "WEY 07",
          status: "referenced",
          segment: "Premium large SUV",
          tagline: "Intelligence made spacious",
          intro:
            "A premium large SUV centred on family comfort, intelligent assistance and an advanced connected cabin.",
        },
        {
          name: "WEY 80",
          status: "referenced",
          segment: "Premium MPV",
          tagline: "First-class comfort for every passenger",
          intro:
            "A premium MPV designed around generous space, executive comfort and intelligent family or business travel.",
        },
        {
          name: "WEY G9",
          status: "seed",
          segment: "Premium MPV",
          tagline: "A smarter premium space to move",
          intro:
            "A next-generation premium MPV seed focused on intelligent cabin experiences, flexible seating and refined travel.",
        },
        {
          name: "Coffee 01",
          status: "seed",
          segment: "Premium PHEV SUV",
          tagline: "Connected luxury, confidently delivered",
          intro:
            "A regional-alias seed for WEY's premium PHEV portfolio, combining comfort, connectivity and everyday performance.",
        },
        {
          name: "Coffee 02",
          status: "seed",
          segment: "Premium electrified SUV",
          tagline: "Compact premium, intelligently connected",
          intro:
            "A compact premium seed entry designed for localisation and alias testing across regional WEY portfolios.",
        },
        {
          name: "Mocha DHT-PHEV",
          status: "seed",
          segment: "Premium PHEV SUV",
          tagline: "Smooth hybrid performance, premium calm",
          intro:
            "A plug-in hybrid premium SUV seed centred on smooth power delivery, cabin refinement and intelligent energy use.",
        },
        {
          name: "Lanshan",
          status: "seed",
          segment: "Premium large SUV",
          tagline: "Space, intelligence and quiet confidence",
          intro:
            "A large premium electrified SUV seed for family travel, spacious seating and technology-rich journeys.",
        },
        {
          name: "Gaoshan",
          status: "seed",
          segment: "Premium MPV",
          tagline: "Premium travel, thoughtfully arranged",
          intro:
            "A premium MPV seed entry designed around flexible seating, quiet comfort and high-value passenger experience.",
        },
      ],
    },
    {
      brand: "GWM POER",
      tagline: "Pickups engineered for work, travel and adventure.",
      models: [
        {
          name: "POER Facelift",
          status: "live",
          segment: "Premium pickup",
          tagline: "Strength, capability and everyday refinement",
          intro:
            "A premium pickup engineered for work, family and adventure, combining robust capability with connected cabin technology.",
          slug: "poer-facelift",
        },
        {
          name: "POER 2.4T Passenger",
          status: "seed",
          segment: "Passenger pickup",
          tagline: "Pickup capability with passenger comfort",
          intro:
            "A passenger-focused pickup seed combining strong utility with comfort-oriented equipment and everyday versatility.",
        },
        {
          name: "POER 2.4T Commercial",
          status: "seed",
          segment: "Commercial pickup",
          tagline: "Built to keep business moving",
          intro:
            "A commercial pickup seed designed around dependable utility, payload-focused use cases and fleet suitability.",
        },
        {
          name: "POER Off-Road",
          status: "seed",
          segment: "Off-road pickup",
          tagline: "Work hard. Explore farther.",
          intro:
            "An off-road pickup proposition pairing everyday utility with more adventurous terrain capability and rugged visual treatment.",
        },
        {
          name: "POER King Kong",
          status: "referenced",
          segment: "Commercial pickup",
          tagline: "Serious capability for serious work",
          intro:
            "A work-oriented pickup designed for customers who prioritise durability, utility and confident daily performance.",
        },
        {
          name: "King Kong 8AT",
          status: "seed",
          segment: "Automatic commercial pickup",
          tagline: "More convenience for the working day",
          intro:
            "An automatic-transmission seed variant adding easier daily operation to a durable commercial pickup proposition.",
        },
        {
          name: "Wingle 5",
          status: "referenced",
          segment: "Utility pickup",
          tagline: "Straightforward strength for everyday jobs",
          intro:
            "A straightforward utility pickup seed focused on dependable transport and practical ownership.",
        },
        {
          name: "Wingle 7",
          status: "live",
          segment: "Utility pickup",
          tagline: "Practical capability, modernised",
          intro:
            "A versatile pickup balancing work-ready toughness with more modern cabin comfort and daily usability.",
          slug: "wingle-7",
        },
        {
          name: "SAHAR POER",
          status: "seed",
          segment: "Premium lifestyle pickup",
          tagline: "Premium pickup freedom for every horizon",
          intro:
            "A premium lifestyle pickup seed positioned around long-distance touring, strong road presence and flexible adventure use.",
        },
        {
          name: "SAHAR POER Hi4-T",
          status: "seed",
          segment: "PHEV premium pickup",
          tagline: "Electrified power for bigger adventures",
          intro:
            "A plug-in hybrid premium pickup seed combining electrified response with practical touring and all-terrain ambition.",
        },
      ],
    },
  ],
  ar: [
    {
      brand: "هافال",
      tagline: "سيارات SUV ذكية لثقة يومية.",
      models: [
        {
          name: "Jolion",
          status: "live",
          segment: "SUV مدمجة",
          tagline: "مرونة واثقة للمدينة",
          intro:
            "سيارة SUV عملية مدعومة بالتقنيات، مناسبة للقيادة اليومية واحتياجات العائلة والتنقل الذكي داخل المدينة.",
        },
        {
          name: "Jolion Pro",
          status: "referenced",
          segment: "SUV مدمجة",
          tagline: "مساحة أكبر لطموحات كل يوم",
          intro:
            "تصور لسيارة SUV مدمجة تجمع بين المساحة العملية والراحة والتقنيات سهلة الاستخدام.",
        },
        {
          name: "Jolion Max",
          status: "seed",
          segment: "SUV مدمجة",
          tagline: "راحة ذكية بكل بساطة",
          intro:
            "سيارة SUV مدمجة عصرية تركز على الاتصال السهل ومرونة المقصورة والثبات الواثق على الطريق.",
        },
        {
          name: "All-New H6",
          status: "live",
          segment: "SUV متوسطة",
          tagline: "ذكاء يومي بمستوى أعلى",
          intro:
            "سيارة SUV عائلية متعددة الاستخدامات تجمع بين التصميم العصري والمساعدة الذكية والراحة في الرحلات الطويلة.",
          slug: "all-new-h6",
        },
        {
          name: "H6 HEV",
          status: "live",
          segment: "SUV هجينة",
          tagline: "كفاءة هجينة دون تنازل",
          intro:
            "سيارة SUV هجينة تجمع بين السلاسة داخل المدينة والاستجابة الجيدة مع كفاءة أعلى في استهلاك الوقود.",
        },
        {
          name: "H6 GT",
          status: "live",
          segment: "SUV رياضية",
          tagline: "طابع رياضي لكل يوم",
          intro:
            "سيارة SUV بروح كوبيه تجمع بين الحضور الجريء والإحساس الرياضي والعملية للاستخدام اليومي.",
        },
        {
          name: "H7",
          status: "live",
          segment: "SUV متوسطة",
          tagline: "مصممة لتتجاوز الروتين",
          intro:
            "سيارة SUV واثقة لمن يبحث عن حضور أقوى على الطريق وقدرات مرنة ومقصورة بطابع راقٍ.",
        },
        {
          name: "H9",
          status: "live",
          segment: "SUV كبيرة",
          tagline: "راحة للعائلة وقدرات للمغامرة",
          intro:
            "سيارة SUV كبيرة توفر مساحة عائلية وراحة راقية وثقة للانطلاق خارج الطرق المعبدة.",
        },
        {
          name: "V7",
          status: "live",
          segment: "SUV",
          tagline: "مغامرة تناسب كل أسلوب حياة",
          intro:
            "سيارة SUV متعددة الاستخدامات تجمع بين التصميم المميز والمرونة العملية والراحة المدعومة بالتقنيات.",
        },
        {
          name: "DARGO",
          status: "seed",
          segment: "SUV مغامرات",
          tagline: "مصممة للطرق غير التقليدية",
          intro:
            "طراز تجريبي ضمن المحتوى لسيارة SUV موجهة للمغامرة، تجمع بين التصميم اللافت والقدرات الواثقة واستكشاف عطلة نهاية الأسبوع.",
        },
      ],
    },
    {
      brand: "جي دبليو إم تانك",
      tagline: "قدرات فاخرة للطرق الوعرة مع راحة راقية.",
      models: [
        {
          name: "TANK 300",
          status: "live",
          segment: "SUV فاخرة للطرق الوعرة",
          tagline: "تجاوز كل التضاريس بثقة",
          intro:
            "سيارة SUV فاخرة للطرق الوعرة تجمع بين القدرات القوية والمقصورة الراقية وتقنيات مساعدة السائق.",
        },
        {
          name: "TANK 300 HEV",
          status: "seed",
          segment: "SUV هجينة للطرق الوعرة",
          tagline: "ثقة كهربائية بروح الطرق الوعرة",
          intro:
            "نسخة هجينة موجهة للطرق الوعرة تضيف استجابة كهربائية أكثر سلاسة إلى شخصية TANK 300 المغامرة.",
        },
        {
          name: "TANK 300 Polar Edition",
          status: "seed",
          segment: "SUV طراز خاص للطرق الوعرة",
          tagline: "شخصية استثنائية للأماكن القاسية",
          intro:
            "طراز خاص ضمن المحتوى يركز على هوية الاستكشاف والمغامرات في الأجواء القاسية وتجهيزات مميزة.",
        },
        {
          name: "TANK 400",
          status: "seed",
          segment: "SUV فاخرة للطرق الوعرة",
          tagline: "قوة عصرية بذكاء",
          intro:
            "طراز SUV جريء يجمع بين الرقي داخل المدينة والقدرات الجادة على مختلف التضاريس.",
        },
        {
          name: "TANK 400 Hi4-T",
          status: "seed",
          segment: "SUV هجينة قابلة للشحن للطرق الوعرة",
          tagline: "قوة هجينة للطريق القادم",
          intro:
            "طراز هجين قابل للشحن موجه للطرق الوعرة، يركز على الاستجابة القوية وإدارة الطاقة الذكية والثقة على مختلف التضاريس.",
        },
        {
          name: "TANK 500",
          status: "live",
          segment: "SUV كبيرة فاخرة",
          tagline: "راحة فاخرة وقدرات حقيقية",
          intro:
            "سيارة SUV كبيرة وفاخرة تجمع بين الراحة الراقية والحضور القوي والهندسة الموثوقة للطرق الوعرة.",
          slug: "tank-500",
        },
        {
          name: "TANK 500 HEV",
          status: "seed",
          segment: "SUV فاخرة هجينة",
          tagline: "الفخامة تتحرك بذكاء",
          intro: "سيارة SUV فاخرة هجينة تضيف الكفاءة الكهربائية إلى منصة رحبة وقادرة.",
        },
        {
          name: "TANK 500 Hi4-T",
          status: "seed",
          segment: "SUV فاخرة هجينة قابلة للشحن للطرق الوعرة",
          tagline: "أداء قابل للشحن وثقة على كل التضاريس",
          intro:
            "طراز هجين قابل للشحن يركز على الرحلات الراقية والقدرات العالية وإدارة الطاقة الذكية.",
        },
        {
          name: "TANK 500 Hi4-Z",
          status: "seed",
          segment: "SUV هجينة قابلة للشحن للطرق الوعرة",
          tagline: "مغامرة كهربائية بمدى ممتد",
          intro:
            "طراز متقدم ضمن المحتوى للطرق الوعرة والكهرباء، موجه لمن يريد الاستخدام اليومي وقدرات أكبر للمغامرة.",
        },
        {
          name: "TANK 700",
          status: "live",
          segment: "SUV فاخرة رائدة للطرق الوعرة",
          tagline: "فخامة رائدة تتجاوز المألوف",
          intro:
            "سيارة SUV فاخرة رائدة للطرق الوعرة تجمع بين التصميم المهيب والحرفية الراقية والأداء المتقدم على مختلف التضاريس.",
        },
      ],
    },
    {
      brand: "أورا",
      tagline: "تنقل كهربائي بتصميم معبر لأسلوب الحياة العصري.",
      models: [
        {
          name: "ORA 03 Pure",
          status: "seed",
          segment: "هاتشباك كهربائية",
          tagline: "بساطة كهربائية للمدينة",
          intro:
            "طراز كهربائي مدمج يركز على سهولة الاستخدام اليومي والأبعاد المناسبة للمدينة والاتصال الذكي.",
        },
        {
          name: "ORA 03 Pro",
          status: "seed",
          segment: "هاتشباك كهربائية",
          tagline: "راحة أكبر في كل كيلومتر كهربائي",
          intro:
            "نسخة أعلى تجهيزاً من ORA 03 تضيف مزيداً من الراحة والتقنيات إلى تجربة السيارة الكهربائية داخل المدينة.",
        },
        {
          name: "ORA 03 GT",
          status: "seed",
          segment: "كهربائية بطابع رياضي",
          tagline: "أناقة كهربائية بطابع أكثر جرأة",
          intro:
            "سيارة كهربائية مدمجة بطابع رياضي وتفاصيل جريئة وشخصية بصرية أكثر ديناميكية.",
        },
        {
          name: "ORA 07",
          status: "seed",
          segment: "فاستباك كهربائية",
          tagline: "أناقة كهربائية في الحركة",
          intro:
            "سيارة كهربائية انسيابية تجمع بين التصميم المميز والقيادة الهادئة والراحة المدعومة بالتقنيات.",
        },
        {
          name: "ORA 07 Touring",
          status: "seed",
          segment: "سيارة كهربائية للرحلات",
          tagline: "مساحة أكبر للرحلات الكهربائية",
          intro:
            "طراز كهربائي موجه للرحلات يضيف مرونة أكبر للأمتعة مع الحفاظ على لغة تصميم ORA المميزة.",
        },
        {
          name: "ORA 5",
          status: "seed",
          segment: "SUV كهربائية",
          tagline: "حرية كهربائية ذكية برؤية جديدة",
          intro:
            "سيارة SUV كهربائية مدمجة لأسلوب الحياة العصري، تجمع بين الاستكشاف العملي والتقنيات سهلة الاستخدام.",
        },
        {
          name: "Good Cat Standard",
          status: "seed",
          segment: "هاتشباك كهربائية",
          tagline: "تصميم مرح وتجربة كهربائية يومية",
          intro:
            "طراز باسم سوقي بديل ضمن عائلة ORA الكهربائية المدمجة، يركز على التصميم الودود وسهولة الاستخدام اليومي.",
        },
        {
          name: "Good Cat Long Range",
          status: "seed",
          segment: "هاتشباك كهربائية",
          tagline: "مدى أبعد بالشخصية السهلة نفسها",
          intro:
            "نسخة محتوى تركز على المدى ضمن عائلة Good Cat/ORA 03، مخصصة لاختبار إدارة المحتوى والتوطين.",
        },
        {
          name: "Good Cat GT",
          status: "seed",
          segment: "هاتشباك كهربائية",
          tagline: "تعبير رياضي بقلب كهربائي",
          intro:
            "طراز GT باسم سوقي بديل مع معالجة بصرية ورسائل أكثر ديناميكية للتنقل الكهربائي.",
        },
        {
          name: "Ballet Cat",
          status: "seed",
          segment: "سيارة كهربائية لأسلوب الحياة",
          tagline: "تصميم كهربائي مميز بشخصية واضحة",
          intro:
            "طراز كهربائي موجه لأسلوب الحياة، مخصص لاختبار التصميم التعبيري والألوان والسرد التحريري في نظام إدارة المحتوى.",
        },
      ],
    },
    {
      brand: "وي",
      tagline: "تنقل كهربائي فاخر يتمحور حول الراحة الذكية.",
      models: [
        {
          name: "WEY 03",
          status: "seed",
          segment: "SUV كهربائية فاخرة",
          tagline: "ذكاء فاخر بحجم مدمج",
          intro:
            "سيارة SUV كهربائية فاخرة تركز على الراحة الراقية والتقنيات المتصلة وسهولة الاستخدام اليومي.",
        },
        {
          name: "WEY 05",
          status: "seed",
          segment: "SUV فاخرة هجينة قابلة للشحن",
          tagline: "أداء راقٍ للرحلات العصرية",
          intro:
            "سيارة SUV فاخرة هجينة قابلة للشحن تجمع بين القيادة الكهربائية الهادئة والمرونة في الرحلات الطويلة.",
        },
        {
          name: "WEY 07",
          status: "referenced",
          segment: "SUV كبيرة فاخرة",
          tagline: "ذكاء بمساحة أرحب",
          intro:
            "سيارة SUV كبيرة وفاخرة تركز على راحة العائلة والمساعدة الذكية والمقصورة المتصلة المتقدمة.",
        },
        {
          name: "WEY 80",
          status: "referenced",
          segment: "MPV فاخرة",
          tagline: "راحة من الدرجة الأولى لكل راكب",
          intro:
            "سيارة MPV فاخرة توفر مساحة رحبة وراحة تنفيذية وتقنيات ذكية لرحلات العائلة أو الأعمال.",
        },
        {
          name: "WEY G9",
          status: "seed",
          segment: "MPV فاخرة",
          tagline: "مساحة فاخرة أذكى للتنقل",
          intro:
            "طراز MPV فاخر من الجيل الجديد يركز على تجربة المقصورة الذكية ومرونة المقاعد والرحلات الراقية.",
        },
        {
          name: "Coffee 01",
          status: "seed",
          segment: "SUV فاخرة هجينة قابلة للشحن",
          tagline: "فخامة متصلة بثقة",
          intro:
            "طراز باسم سوقي بديل ضمن مجموعة WEY الهجينة الفاخرة، يجمع بين الراحة والاتصال والأداء اليومي.",
        },
        {
          name: "Coffee 02",
          status: "seed",
          segment: "SUV كهربائية فاخرة مدمجة",
          tagline: "فخامة مدمجة واتصال ذكي",
          intro:
            "طراز فاخر مدمج مخصص لاختبار التوطين وإدارة الأسماء السوقية المختلفة ضمن مجموعة WEY.",
        },
        {
          name: "Mocha DHT-PHEV",
          status: "seed",
          segment: "SUV فاخرة هجينة قابلة للشحن",
          tagline: "أداء هجين سلس وراحة فاخرة",
          intro:
            "سيارة SUV فاخرة هجينة قابلة للشحن تركز على سلاسة القوة وهدوء المقصورة وإدارة الطاقة الذكية.",
        },
        {
          name: "Lanshan",
          status: "seed",
          segment: "SUV كبيرة فاخرة",
          tagline: "مساحة وذكاء وثقة هادئة",
          intro:
            "سيارة SUV كهربائية كبيرة وفاخرة للعائلة، توفر رحابة وتقنيات متقدمة للرحلات.",
        },
        {
          name: "Gaoshan",
          status: "seed",
          segment: "MPV فاخرة",
          tagline: "رحلات فاخرة بتفاصيل مدروسة",
          intro:
            "طراز MPV فاخر يركز على مرونة المقاعد والراحة الهادئة وتجربة راقية للركاب.",
        },
      ],
    },
    {
      brand: "جي دبليو إم بوير",
      tagline: "سيارات بيك أب مصممة للعمل والرحلات والمغامرة.",
      models: [
        {
          name: "POER Facelift",
          status: "live",
          segment: "بيك أب فاخرة",
          tagline: "قوة وقدرة وراحة يومية",
          intro:
            "بيك أب فاخر يجمع بين متطلبات العمل والعائلة والمغامرة، مع قدرات قوية وتقنيات اتصال داخل المقصورة.",
          slug: "poer-facelift",
        },
        {
          name: "POER 2.4T Passenger",
          status: "seed",
          segment: "بيك أب للركاب",
          tagline: "قدرات البيك أب براحة الركاب",
          intro:
            "طراز بيك أب يركز على راحة الركاب مع الحفاظ على القدرات العملية والمرونة للاستخدام اليومي.",
        },
        {
          name: "POER 2.4T Commercial",
          status: "seed",
          segment: "بيك أب تجارية",
          tagline: "مصمم لاستمرار أعمالك",
          intro:
            "طراز بيك أب تجاري يركز على الاعتمادية والاستخدامات العملية والملاءمة لأساطيل الأعمال.",
        },
        {
          name: "POER Off-Road",
          status: "seed",
          segment: "بيك أب للطرق الوعرة",
          tagline: "اعمل بقوة واستكشف أبعد",
          intro:
            "بيك أب للطرق الوعرة يجمع بين العملية اليومية والقدرات المغامرة والتصميم القوي.",
        },
        {
          name: "POER King Kong",
          status: "referenced",
          segment: "بيك أب تجارية",
          tagline: "قدرات حقيقية للأعمال الجادة",
          intro:
            "بيك أب موجه للعمل لمن يضع الاعتمادية والعملية والأداء الواثق في الاستخدام اليومي في المقدمة.",
        },
        {
          name: "King Kong 8AT",
          status: "seed",
          segment: "بيك أب تجارية أوتوماتيكية",
          tagline: "راحة أكبر ليوم العمل",
          intro:
            "نسخة أوتوماتيكية ضمن المحتوى تضيف سهولة أكبر في الاستخدام اليومي إلى طراز بيك أب تجاري متين.",
        },
        {
          name: "Wingle 5",
          status: "referenced",
          segment: "بيك أب عملية",
          tagline: "قوة عملية لمهام كل يوم",
          intro: "بيك أب عملي يركز على النقل الموثوق وتجربة ملكية بسيطة وعملية.",
        },
        {
          name: "Wingle 7",
          status: "live",
          segment: "بيك أب عملية",
          tagline: "قدرات عملية بروح عصرية",
          intro:
            "بيك أب متعدد الاستخدامات يجمع بين الصلابة للعمل وراحة المقصورة العصرية وسهولة الاستخدام اليومي.",
          slug: "wingle-7",
        },
        {
          name: "SAHAR POER",
          status: "seed",
          segment: "بيك أب فاخرة لأسلوب الحياة",
          tagline: "حرية بيك أب فاخرة لكل أفق",
          intro:
            "بيك أب فاخر لأسلوب الحياة يركز على الرحلات الطويلة والحضور القوي والمرونة للمغامرات.",
        },
        {
          name: "SAHAR POER Hi4-T",
          status: "seed",
          segment: "بيك أب فاخرة هجينة قابلة للشحن",
          tagline: "قوة كهربائية لمغامرات أكبر",
          intro:
            "بيك أب فاخر هجين قابل للشحن يجمع بين الاستجابة الكهربائية والعملية في الرحلات والطموح على مختلف التضاريس.",
        },
      ],
    },
  ],
};

export function getModelCatalogue(locale: Locale): BrandGroup[] {
  return modelCatalogue[locale];
}
