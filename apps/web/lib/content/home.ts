import type { Locale } from "@gwm/shared";

export type MediaAsset = {
  url: string;
  alt: string;
};

export type HomeStat = {
  value: string;
  label: string;
};

export type HomeBrand = {
  name: string;
  summary: string;
  placeholder: string;
  href: string;
  media?: MediaAsset;
};

export type HomeVehicle = {
  brand: string;
  model: string;
  bodyType: string;
  powertrain: string;
  summary: string;
  ctaLabel: string;
  placeholder: string;
  href: string;
  media?: MediaAsset;
};

export type HomeNewsItem = {
  date: string;
  title: string;
};

export type Dealer = {
  name: string;
  address: string;
  hours: string;
};

export type HomeCountry = {
  country: string;
  isoCode: string;
  flag: string;
  region: string;
  label: string;
  dealers: Dealer[];
  contact: {
    hours: string;
    email: string;
    phone: string;
  };
};

export type TechFeature = {
  title: string;
  summary: string;
  learnMoreLabel: string;
};

export type HomePageContent = {
  locale: Locale;
  source: "strapi" | "fallback";
  navItems: string[];
  languageLabel: string;
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    primaryCta: string;
    secondaryCta: string;
    media?: MediaAsset;
  };
  filters: string[];
  stats: HomeStat[];
  brands: HomeBrand[];
  featuredVehicles: HomeVehicle[];
  viewAllLabel: string;
  technology: {
    eyebrow: string;
    title: string;
    ctaLabel: string;
    placeholder: string;
    caption: string;
    media?: MediaAsset;
    stats: HomeStat[];
    features: TechFeature[];
  };
  news: HomeNewsItem[];
  newsAllLabel: string;
  countries: HomeCountry[];
  networkTitle: string;
  networkMapLabel: string;
  findDealerLabel: string;
};

export const fallbackHomeContent = {
  en: {
    locale: "en",
    source: "fallback",
    navItems: ["Brands", "Vehicles", "About GWM", "Technology", "Contact Us"],
    languageLabel: "العربية",
    hero: {
      eyebrow: "GWM Tank",
      title: "Conquer Every Terrain",
      intro:
        "Explore a regional line-up built around intelligent SUVs, efficient pickups, electrified mobility and aftersales care across the Middle East.",
      primaryCta: "Discover more",
      secondaryCta: "Find a dealer",
      media: {
        url: "/media/home-hero.png",
        alt: "Dark SUV on a Middle East road at dusk",
      },
    },
    filters: ["All", "SUV", "Pickup", "Hybrid", "Electric"],
    stats: [
      { value: "10", label: "Regional markets" },
      { value: "6", label: "GWM brands" },
      { value: "7/24", label: "Customer care" },
      { value: "30+", label: "Dealer hubs" },
    ],
    brands: [
      {
        name: "HAVAL",
        summary: "Smart family SUVs for everyday life.",
        placeholder: "Photo: Haval line-up, studio",
        href: "/vehicles",
        media: {
          url: "/media/vehicles/all-new-h6/01_hero_exterior.webp",
          alt: "Haval All-New H6 exterior hero shot",
        },
      },
      {
        name: "GWM TANK",
        summary: "Premium luxury off-road icons.",
        placeholder: "Photo: Tank off-road action",
        href: "/vehicles",
        media: {
          url: "/media/vehicles/tank-300/02_exterior_lifestyle.webp",
          alt: "TANK 300 off-road lifestyle shot",
        },
      },
      {
        name: "WEY",
        summary: "Advanced intelligent luxury SUVs.",
        placeholder: "Photo: Wey studio profile",
        href: "/vehicles",
        media: {
          url: "/media/vehicles/wey-07/01_hero_exterior.webp",
          alt: "WEY 07 exterior hero shot",
        },
      },
      {
        name: "ORA",
        summary: "Pure electric fashion-forward coupes.",
        placeholder: "Photo: Ora city night",
        href: "/vehicles",
        media: {
          url: "/media/vehicles/ora-07/02_exterior_lifestyle.webp",
          alt: "ORA 07 exterior lifestyle shot",
        },
      },
    ],
    featuredVehicles: [
      {
        brand: "HAVAL",
        model: "H6",
        bodyType: "SUV",
        powertrain: "Hybrid",
        summary: "Intelligent family SUV",
        ctaLabel: "Explore",
        placeholder: "Photo: Haval H6, three-quarter front",
        href: "/vehicles/haval-h6-hev",
        media: {
          url: "/media/vehicles/haval-h6-hev/01_hero_exterior.webp",
          alt: "Haval H6 HEV exterior hero shot",
        },
      },
      {
        brand: "TANK",
        model: "300",
        bodyType: "SUV",
        powertrain: "Petrol",
        summary: "Smart luxury off-roader",
        ctaLabel: "Explore",
        placeholder: "Photo: Tank 300 desert",
        href: "/vehicles/tank-500",
        media: {
          url: "/media/vehicles/tank-300/01_hero_exterior.webp",
          alt: "TANK 300 exterior hero shot",
        },
      },
      {
        brand: "ORA",
        model: "07",
        bodyType: "Coupe",
        powertrain: "Electric",
        summary: "Electric sports coupe",
        ctaLabel: "Explore",
        placeholder: "Photo: Ora 07 studio",
        href: "/vehicles",
        media: {
          url: "/media/vehicles/ora-07/01_hero_exterior.webp",
          alt: "ORA 07 exterior hero shot",
        },
      },
      {
        brand: "POER",
        model: "Sahar",
        bodyType: "Pickup",
        powertrain: "Diesel",
        summary: "High-performance pickup",
        ctaLabel: "Explore",
        placeholder: "Photo: Poer Sahar night",
        href: "/vehicles/poer-commercial",
        media: {
          url: "/media/vehicles/sahar-poer/01_hero_exterior.webp",
          alt: "SAHAR POER exterior hero shot",
        },
      },
    ],
    viewAllLabel: "View all",
    technology: {
      eyebrow: "Forest Ecosystem",
      title: "Forest Ecosystem Intelligence Platform",
      ctaLabel: "Explore technology",
      placeholder: "Photo: Coffee OS 3 dashboard",
      caption: "Coffee OS 3 - AI Intelligent Space",
      media: {
        url: "/media/vehicles/haval-h6-hev/03_interior_cockpit.webp",
        alt: "Haval H6 HEV interior cockpit with Coffee OS 3 display",
      },
      stats: [
        { value: "15M+", label: "Global users" },
        { value: "170+", label: "Countries" },
        { value: "25K+", label: "R&D staff" },
      ],
      features: [
        {
          title: "Hi4 Technology",
          summary:
            "Intelligent four-wheel-drive hybrid. Performance, efficiency and proactive response, made simple.",
          learnMoreLabel: "Learn more",
        },
        {
          title: "Coffee OS 3",
          summary:
            "AI-powered intelligent cabin: voice, vision and proactive routines, your way.",
          learnMoreLabel: "Learn more",
        },
        {
          title: "Coffee Pilot Ultra",
          summary:
            "Full-scenario navigate-on-autopilot with L2+ ADAS and 360° surround view and transparent chassis.",
          learnMoreLabel: "Learn more",
        },
      ],
    },
    news: [
      { date: "Jul 2026", title: "TANK 700 Hi4-Z Arrives in the Middle East" },
      { date: "Jun 2026", title: "Coffee OS 3 Rolls Out Across Middle East Fleet" },
      { date: "May 2026", title: "GWM Expands Dealer Network to 80+ Points Across GCC" },
    ],
    newsAllLabel: "All",
    networkTitle: "GWM Middle East Network",
    networkMapLabel: "Map",
    findDealerLabel: "Find your nearest dealer",
    countries: [
      {
        country: "United Arab Emirates",
        isoCode: "AE",
        flag: "🇦🇪",
        region: "GCC",
        label: "Continue to United Arab Emirates",
        dealers: [
          {
            name: "GWM Dubai — Sheikh Zayed Road",
            address: "Al Quoz 1, Dubai",
            hours: "Sat–Thu, 8:00–20:00 Gulf time",
          },
          {
            name: "GWM Abu Dhabi — Airport Road",
            address: "Al Zahia, Abu Dhabi",
            hours: "Sat–Thu, 8:00–20:00 Gulf time",
          },
          {
            name: "GWM Sharjah — Al Wahda Street",
            address: "Industrial Area 5, Sharjah",
            hours: "Sat–Thu, 8:00–20:00 Gulf time",
          },
        ],
        contact: {
          hours: "Sat–Thu, 8:00–20:00 Gulf time",
          email: "care.uae@gwm-me.com",
          phone: "800 496 000",
        },
      },
      {
        country: "Saudi Arabia",
        isoCode: "SA",
        flag: "🇸🇦",
        region: "GCC",
        label: "Continue to Saudi Arabia",
        dealers: [
          {
            name: "Automall Showroom",
            address: "King Abdulaziz Rd, Al Mohammadiyyah, Jeddah 23617",
            hours: "Sat–Thu, 8:30–12:30 & 16:30–21:00",
          },
          {
            name: "Khurais Showroom",
            address: "Khurais Rd, Ar Rawdah, Riyadh 13211",
            hours: "Sat–Thu, 8:30–12:30 & 16:30–21:00",
          },
          {
            name: "Khobar Showroom",
            address: "King Fahd Road, Al Rakah Al Janubiyah, Al Khobar 34226",
            hours: "Sat–Thu, 8:30–12:30 & 16:30–21:00",
          },
        ],
        contact: {
          hours: "Sat–Thu, 8:00 AM–6:00 PM",
          email: "care.sa@gwm-me.com",
          phone: "800 124 2223",
        },
      },
      {
        country: "Qatar",
        isoCode: "QA",
        flag: "🇶🇦",
        region: "GCC",
        label: "Continue to Qatar",
        dealers: [
          {
            name: "GWM Doha West Bay",
            address: "Al Corniche Street, Doha",
            hours: "Sat–Thu, 9:00–20:00",
          },
          {
            name: "GWM Al Rayyan",
            address: "Airport Road, Al Rayyan",
            hours: "Sat–Thu, 9:00–20:00",
          },
        ],
        contact: {
          hours: "Sat–Thu, 9:00 AM–8:00 PM",
          email: "care.qa@gwm-me.com",
          phone: "800 700 100",
        },
      },
      {
        country: "Kuwait",
        isoCode: "KW",
        flag: "🇰🇼",
        region: "GCC",
        label: "Continue to Kuwait",
        dealers: [
          {
            name: "GWM Kuwait City",
            address: "Al Soor Street, Kuwait City",
            hours: "Sat–Thu, 9:00–20:00",
          },
          {
            name: "GWM Hawally",
            address: "Tunis Street, Hawally",
            hours: "Sat–Thu, 9:00–20:00",
          },
        ],
        contact: {
          hours: "Sat–Thu, 9:00 AM–8:00 PM",
          email: "care.kw@gwm-me.com",
          phone: "1807 100",
        },
      },
      {
        country: "Bahrain",
        isoCode: "BH",
        flag: "🇧🇭",
        region: "GCC",
        label: "Continue to Bahrain",
        dealers: [
          {
            name: "GWM Manama",
            address: "Sheikh Khalifa Highway, Manama",
            hours: "Sat–Thu, 9:00–20:00",
          },
          {
            name: "GWM Riffa",
            address: "Shaikh Salman Highway, Riffa",
            hours: "Sat–Thu, 9:00–20:00",
          },
        ],
        contact: {
          hours: "Sat–Thu, 9:00 AM–8:00 PM",
          email: "care.bh@gwm-me.com",
          phone: "800 800 96",
        },
      },
      {
        country: "Oman",
        isoCode: "OM",
        flag: "🇴🇲",
        region: "GCC",
        label: "Continue to Oman",
        dealers: [
          {
            name: "GWM Muscat",
            address: "Sultan Qaboos Street, Muscat",
            hours: "Sat–Thu, 9:00–20:00",
          },
          {
            name: "GWM Salalah",
            address: "Al Salam Street, Salalah",
            hours: "Sat–Thu, 9:00–20:00",
          },
        ],
        contact: {
          hours: "Sat–Thu, 9:00 AM–8:00 PM",
          email: "care.om@gwm-me.com",
          phone: "800 73369",
        },
      },
      {
        country: "Jordan",
        isoCode: "JO",
        flag: "🇯🇴",
        region: "Levant",
        label: "Continue to Jordan",
        dealers: [
          {
            name: "GWM Amman",
            address: "Zahran Street, Amman",
            hours: "Sun–Thu, 9:00–19:00",
          },
          {
            name: "GWM Irbid",
            address: "Baghdad Street, Irbid",
            hours: "Sun–Thu, 9:00–19:00",
          },
        ],
        contact: {
          hours: "Sun–Thu, 9:00 AM–7:00 PM",
          email: "care.jo@gwm-me.com",
          phone: "080 022 900",
        },
      },
      {
        country: "Lebanon",
        isoCode: "LB",
        flag: "🇱🇧",
        region: "Levant",
        label: "Continue to Lebanon",
        dealers: [
          {
            name: "GWM Beirut",
            address: "Charles Helou Avenue, Beirut",
            hours: "Mon–Sat, 9:00–19:00",
          },
          {
            name: "GWM Jounieh",
            address: "Coastal Highway, Jounieh",
            hours: "Mon–Sat, 9:00–19:00",
          },
        ],
        contact: {
          hours: "Mon–Sat, 9:00 AM–7:00 PM",
          email: "care.lb@gwm-me.com",
          phone: "1233",
        },
      },
      {
        country: "Iraq",
        isoCode: "IQ",
        flag: "🇮🇶",
        region: "Levant",
        label: "Continue to Iraq",
        dealers: [
          {
            name: "GWM Baghdad",
            address: "Al Mansour District, Baghdad",
            hours: "Sun–Thu, 9:00–19:00",
          },
          {
            name: "GWM Erbil",
            address: "60 Meter Road, Erbil",
            hours: "Sun–Thu, 9:00–19:00",
          },
        ],
        contact: {
          hours: "Sun–Thu, 9:00 AM–7:00 PM",
          email: "care.iq@gwm-me.com",
          phone: "800 100 200",
        },
      },
      {
        country: "Syria",
        isoCode: "SY",
        flag: "🇸🇾",
        region: "Levant",
        label: "Continue to Syria",
        dealers: [
          {
            name: "GWM Damascus",
            address: "Mezzeh Highway, Damascus",
            hours: "Sun–Thu, 9:00–19:00",
          },
          {
            name: "GWM Aleppo",
            address: "Al Furqan Street, Aleppo",
            hours: "Sun–Thu, 9:00–19:00",
          },
        ],
        contact: {
          hours: "Sun–Thu, 9:00 AM–7:00 PM",
          email: "care.sy@gwm-me.com",
          phone: "011 800 100",
        },
      },
    ],
  },
  ar: {
    locale: "ar",
    source: "fallback",
    navItems: ["العلامات التجارية", "المركبات", "عن GWM", "التكنولوجيا", "اتصل بنا"],
    languageLabel: "English",
    hero: {
      eyebrow: "جي دبليو إم تانك",
      title: "تغلّب على كل تضاريس",
      intro:
        "استكشف مجموعة إقليمية تجمع بين سيارات SUV الذكية، والبيك أب العملية، والتنقل الكهربائي، وخدمات ما بعد البيع في الشرق الأوسط.",
      primaryCta: "اكتشف المزيد",
      secondaryCta: "ابحث عن وكيل",
      media: {
        url: "/media/home-hero.png",
        alt: "سيارة SUV داكنة على طريق في الشرق الأوسط وقت الغروب",
      },
    },
    filters: ["الكل", "SUV", "بيك أب", "هايبرد", "كهربائية"],
    stats: [
      { value: "10", label: "أسواق إقليمية" },
      { value: "6", label: "علامات GWM" },
      { value: "7/24", label: "رعاية العملاء" },
      { value: "+30", label: "مراكز وكلاء" },
    ],
    brands: [
      {
        name: "هافال",
        summary: "سيارات SUV عائلية ذكية للحياة اليومية.",
        placeholder: "صورة: تشكيلة هافال، استوديو",
        href: "/vehicles",
        media: {
          url: "/media/vehicles/all-new-h6/01_hero_exterior.webp",
          alt: "هافال All-New H6، لقطة خارجية رئيسية",
        },
      },
      {
        name: "جي دبليو إم تانك",
        summary: "رموز فاخرة للطرق الوعرة.",
        placeholder: "صورة: تانك في مشهد وعر",
        href: "/vehicles",
        media: {
          url: "/media/vehicles/tank-300/02_exterior_lifestyle.webp",
          alt: "تانك 300، لقطة نمط حياة للطرق الوعرة",
        },
      },
      {
        name: "وي",
        summary: "سيارات SUV فاخرة وذكية متقدمة.",
        placeholder: "صورة: وي، استوديو",
        href: "/vehicles",
        media: {
          url: "/media/vehicles/wey-07/01_hero_exterior.webp",
          alt: "وي 07، لقطة خارجية رئيسية",
        },
      },
      {
        name: "أورا",
        summary: "سيارات كوبيه كهربائية عصرية بالكامل.",
        placeholder: "صورة: أورا في المدينة ليلاً",
        href: "/vehicles",
        media: {
          url: "/media/vehicles/ora-07/02_exterior_lifestyle.webp",
          alt: "أورا 07، لقطة نمط حياة خارجية",
        },
      },
    ],
    featuredVehicles: [
      {
        brand: "هافال",
        model: "H6",
        bodyType: "SUV",
        powertrain: "هايبرد",
        summary: "SUV عائلية ذكية",
        ctaLabel: "استكشف",
        placeholder: "صورة: هافال H6، أمامية جانبية",
        href: "/vehicles/haval-h6-hev",
        media: {
          url: "/media/vehicles/haval-h6-hev/01_hero_exterior.webp",
          alt: "هافال H6 HEV، لقطة خارجية رئيسية",
        },
      },
      {
        brand: "تانك",
        model: "300",
        bodyType: "SUV",
        powertrain: "بنزين",
        summary: "فخامة ذكية للطرق الوعرة",
        ctaLabel: "استكشف",
        placeholder: "صورة: تانك 300 في الصحراء",
        href: "/vehicles/tank-500",
        media: {
          url: "/media/vehicles/tank-300/01_hero_exterior.webp",
          alt: "تانك 300، لقطة خارجية رئيسية",
        },
      },
      {
        brand: "أورا",
        model: "07",
        bodyType: "كوبيه",
        powertrain: "كهربائي",
        summary: "كوبيه رياضية كهربائية",
        ctaLabel: "استكشف",
        placeholder: "صورة: أورا 07، استوديو",
        href: "/vehicles",
        media: {
          url: "/media/vehicles/ora-07/01_hero_exterior.webp",
          alt: "أورا 07، لقطة خارجية رئيسية",
        },
      },
      {
        brand: "بوير",
        model: "Sahar",
        bodyType: "بيك أب",
        powertrain: "ديزل",
        summary: "بيك أب عالية الأداء",
        ctaLabel: "استكشف",
        placeholder: "صورة: بوير Sahar ليلاً",
        href: "/vehicles/poer-commercial",
        media: {
          url: "/media/vehicles/sahar-poer/01_hero_exterior.webp",
          alt: "سيهار بوير، لقطة خارجية رئيسية",
        },
      },
    ],
    viewAllLabel: "عرض الكل",
    technology: {
      eyebrow: "منظومة الغابة",
      title: "منصة ذكاء منظومة الغابة",
      ctaLabel: "استكشف التكنولوجيا",
      placeholder: "صورة: لوحة قيادة Coffee OS 3",
      caption: "Coffee OS 3 - مساحة ذكية بالذكاء الاصطناعي",
      media: {
        url: "/media/vehicles/haval-h6-hev/03_interior_cockpit.webp",
        alt: "مقصورة قيادة هافال H6 HEV مع شاشة Coffee OS 3",
      },
      stats: [
        { value: "+15M", label: "مستخدمون عالميون" },
        { value: "+170", label: "دولة" },
        { value: "+25K", label: "طاقم بحث وتطوير" },
      ],
      features: [
        {
          title: "تقنية Hi4",
          summary: "دفع رباعي هجين ذكي. أداء وكفاءة واستجابة استباقية ببساطة.",
          learnMoreLabel: "اعرف المزيد",
        },
        {
          title: "Coffee OS 3",
          summary: "مقصورة ذكية بالذكاء الاصطناعي: صوت ورؤية وروتين استباقي بأسلوبك.",
          learnMoreLabel: "اعرف المزيد",
        },
        {
          title: "Coffee Pilot Ultra",
          summary: "قيادة ذاتية شاملة بمساعدة متقدمة، ورؤية محيطية 360° وهيكل شفاف.",
          learnMoreLabel: "اعرف المزيد",
        },
      ],
    },
    news: [
      { date: "يوليو 2026", title: "وصول TANK 700 Hi4-Z إلى الشرق الأوسط" },
      { date: "يونيو 2026", title: "طرح Coffee OS 3 عبر أسطول الشرق الأوسط" },
      {
        date: "مايو 2026",
        title: "GWM توسّع شبكة الوكلاء إلى أكثر من 80 نقطة في الخليج",
      },
    ],
    newsAllLabel: "الكل",
    networkTitle: "شبكة GWM في الشرق الأوسط",
    networkMapLabel: "الخريطة",
    findDealerLabel: "ابحث عن أقرب وكيل",
    countries: [
      {
        country: "الإمارات العربية المتحدة",
        isoCode: "AE",
        flag: "🇦🇪",
        region: "الخليج",
        label: "الاستمرار إلى الإمارات العربية المتحدة",
        dealers: [
          {
            name: "جي دبليو إم دبي — شارع الشيخ زايد",
            address: "القوز 1، دبي",
            hours: "السبت–الخميس، 8:00–20:00 بتوقيت الخليج",
          },
          {
            name: "جي دبليو إم أبوظبي — طريق المطار",
            address: "الزاهية، أبوظبي",
            hours: "السبت–الخميس، 8:00–20:00 بتوقيت الخليج",
          },
          {
            name: "جي دبليو إم الشارقة — شارع الوحدة",
            address: "المنطقة الصناعية 5، الشارقة",
            hours: "السبت–الخميس، 8:00–20:00 بتوقيت الخليج",
          },
        ],
        contact: {
          hours: "السبت–الخميس، 8:00–20:00 بتوقيت الخليج",
          email: "care.uae@gwm-me.com",
          phone: "800 496 000",
        },
      },
      {
        country: "المملكة العربية السعودية",
        isoCode: "SA",
        flag: "🇸🇦",
        region: "الخليج",
        label: "الاستمرار إلى المملكة العربية السعودية",
        dealers: [
          {
            name: "معرض أوتومول",
            address: "طريق الملك عبدالعزيز، المحمدية، جدة 23617",
            hours: "السبت–الخميس، 8:30–12:30 و16:30–21:00",
          },
          {
            name: "معرض خريص",
            address: "طريق خريص، الروضة، الرياض 13211",
            hours: "السبت–الخميس، 8:30–12:30 و16:30–21:00",
          },
          {
            name: "معرض الخبر",
            address: "طريق الملك فهد، الراكة الجنوبية، الخبر 34226",
            hours: "السبت–الخميس، 8:30–12:30 و16:30–21:00",
          },
        ],
        contact: {
          hours: "السبت–الخميس، 8:00 ص–6:00 م",
          email: "care.sa@gwm-me.com",
          phone: "800 124 2223",
        },
      },
      {
        country: "قطر",
        isoCode: "QA",
        flag: "🇶🇦",
        region: "الخليج",
        label: "الاستمرار إلى قطر",
        dealers: [
          {
            name: "جي دبليو إم الخليج الغربي",
            address: "شارع الكورنيش، الدوحة",
            hours: "السبت–الخميس، 9:00–20:00",
          },
          {
            name: "جي دبليو إم الريان",
            address: "طريق المطار، الريان",
            hours: "السبت–الخميس، 9:00–20:00",
          },
        ],
        contact: {
          hours: "السبت–الخميس، 9:00 ص–8:00 م",
          email: "care.qa@gwm-me.com",
          phone: "800 700 100",
        },
      },
      {
        country: "الكويت",
        isoCode: "KW",
        flag: "🇰🇼",
        region: "الخليج",
        label: "الاستمرار إلى الكويت",
        dealers: [
          {
            name: "جي دبليو إم مدينة الكويت",
            address: "شارع السور، مدينة الكويت",
            hours: "السبت–الخميس، 9:00–20:00",
          },
          {
            name: "جي دبليو إم حولي",
            address: "شارع تونس، حولي",
            hours: "السبت–الخميس، 9:00–20:00",
          },
        ],
        contact: {
          hours: "السبت–الخميس، 9:00 ص–8:00 م",
          email: "care.kw@gwm-me.com",
          phone: "1807 100",
        },
      },
      {
        country: "البحرين",
        isoCode: "BH",
        flag: "🇧🇭",
        region: "الخليج",
        label: "الاستمرار إلى البحرين",
        dealers: [
          {
            name: "جي دبليو إم المنامة",
            address: "طريق الشيخ خليفة، المنامة",
            hours: "السبت–الخميس، 9:00–20:00",
          },
          {
            name: "جي دبليو إم الرفاع",
            address: "طريق الشيخ سلمان، الرفاع",
            hours: "السبت–الخميس، 9:00–20:00",
          },
        ],
        contact: {
          hours: "السبت–الخميس، 9:00 ص–8:00 م",
          email: "care.bh@gwm-me.com",
          phone: "800 800 96",
        },
      },
      {
        country: "عُمان",
        isoCode: "OM",
        flag: "🇴🇲",
        region: "الخليج",
        label: "الاستمرار إلى عُمان",
        dealers: [
          {
            name: "جي دبليو إم مسقط",
            address: "شارع السلطان قابوس، مسقط",
            hours: "السبت–الخميس، 9:00–20:00",
          },
          {
            name: "جي دبليو إم صلالة",
            address: "شارع السلام، صلالة",
            hours: "السبت–الخميس، 9:00–20:00",
          },
        ],
        contact: {
          hours: "السبت–الخميس، 9:00 ص–8:00 م",
          email: "care.om@gwm-me.com",
          phone: "800 73369",
        },
      },
      {
        country: "الأردن",
        isoCode: "JO",
        flag: "🇯🇴",
        region: "بلاد الشام",
        label: "الاستمرار إلى الأردن",
        dealers: [
          {
            name: "جي دبليو إم عمّان",
            address: "شارع زهران، عمّان",
            hours: "الأحد–الخميس، 9:00–19:00",
          },
          {
            name: "جي دبليو إم إربد",
            address: "شارع بغداد، إربد",
            hours: "الأحد–الخميس، 9:00–19:00",
          },
        ],
        contact: {
          hours: "الأحد–الخميس، 9:00 ص–7:00 م",
          email: "care.jo@gwm-me.com",
          phone: "080 022 900",
        },
      },
      {
        country: "لبنان",
        isoCode: "LB",
        flag: "🇱🇧",
        region: "بلاد الشام",
        label: "الاستمرار إلى لبنان",
        dealers: [
          {
            name: "جي دبليو إم بيروت",
            address: "شارع شارل حلو، بيروت",
            hours: "الاثنين–السبت، 9:00–19:00",
          },
          {
            name: "جي دبليو إم جونية",
            address: "الطريق الساحلي، جونية",
            hours: "الاثنين–السبت، 9:00–19:00",
          },
        ],
        contact: {
          hours: "الاثنين–السبت، 9:00 ص–7:00 م",
          email: "care.lb@gwm-me.com",
          phone: "1233",
        },
      },
      {
        country: "العراق",
        isoCode: "IQ",
        flag: "🇮🇶",
        region: "بلاد الشام",
        label: "الاستمرار إلى العراق",
        dealers: [
          {
            name: "جي دبليو إم بغداد",
            address: "حي المنصور، بغداد",
            hours: "الأحد–الخميس، 9:00–19:00",
          },
          {
            name: "جي دبليو إم أربيل",
            address: "شارع 60 متر، أربيل",
            hours: "الأحد–الخميس، 9:00–19:00",
          },
        ],
        contact: {
          hours: "الأحد–الخميس، 9:00 ص–7:00 م",
          email: "care.iq@gwm-me.com",
          phone: "800 100 200",
        },
      },
      {
        country: "سوريا",
        isoCode: "SY",
        flag: "🇸🇾",
        region: "بلاد الشام",
        label: "الاستمرار إلى سوريا",
        dealers: [
          {
            name: "جي دبليو إم دمشق",
            address: "طريق المزة، دمشق",
            hours: "الأحد–الخميس، 9:00–19:00",
          },
          {
            name: "جي دبليو إم حلب",
            address: "شارع الفرقان، حلب",
            hours: "الأحد–الخميس، 9:00–19:00",
          },
        ],
        contact: {
          hours: "الأحد–الخميس، 9:00 ص–7:00 م",
          email: "care.sy@gwm-me.com",
          phone: "011 800 100",
        },
      },
    ],
  },
} satisfies Record<Locale, HomePageContent>;

export function getFallbackHomeContent(locale: Locale): HomePageContent {
  return fallbackHomeContent[locale];
}
