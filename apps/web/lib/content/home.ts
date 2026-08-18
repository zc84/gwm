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
};

export type HomeVehicle = {
  brand: string;
  model: string;
  bodyType: string;
  powertrain: string;
  summary: string;
  ctaLabel: string;
  media?: MediaAsset;
};

export type HomeNewsItem = {
  date: string;
  title: string;
  summary: string;
};

export type HomeCountry = {
  country: string;
  region: string;
  label: string;
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
  technology: {
    eyebrow: string;
    title: string;
    summary: string;
  };
  news: HomeNewsItem[];
  countries: HomeCountry[];
};

export const fallbackHomeContent = {
  en: {
    locale: "en",
    source: "fallback",
    navItems: ["Brands", "Vehicles", "Technology", "News", "Countries"],
    languageLabel: "العربية",
    hero: {
      eyebrow: "GWM Middle East",
      title: "Go With More",
      intro:
        "Explore a regional line-up built around intelligent SUVs, efficient pickups, electrified mobility and aftersales care across the Middle East.",
      primaryCta: "Explore vehicles",
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
        summary: "Smart SUVs for family, business and daily confidence.",
      },
      {
        name: "TANK",
        summary: "Premium off-road engineering with long-distance comfort.",
      },
      {
        name: "ORA",
        summary: "Distinctive electric mobility for the city and beyond.",
      },
      {
        name: "POER",
        summary: "Capable pickups for work, travel and active weekends.",
      },
    ],
    featuredVehicles: [
      {
        brand: "HAVAL",
        model: "H6 HEV",
        bodyType: "SUV",
        powertrain: "Hybrid",
        summary:
          "A confident hybrid SUV with intelligent safety, calm cabin space and everyday efficiency.",
        ctaLabel: "View model",
        media: {
          url: "/media/product-hero.png",
          alt: "Hybrid SUV on a desert highway at dusk",
        },
      },
      {
        brand: "TANK",
        model: "500",
        bodyType: "SUV",
        powertrain: "Petrol",
        summary:
          "Body-on-frame strength, premium appointments and all-terrain technology for regional journeys.",
        ctaLabel: "View model",
        media: {
          url: "/media/home-hero.png",
          alt: "Premium SUV on a regional road at dusk",
        },
      },
      {
        brand: "POER",
        model: "Commercial",
        bodyType: "Pickup",
        powertrain: "Diesel",
        summary:
          "Durable utility with the comfort and connectivity expected from a modern pickup.",
        ctaLabel: "View model",
        media: {
          url: "/media/service-hero.png",
          alt: "Dark vehicle in a premium service environment",
        },
      },
    ],
    technology: {
      eyebrow: "Technology",
      title: "Intelligent platforms for regional roads",
      summary:
        "GWM combines electrified powertrains, driver assistance systems and connected cabin experiences with durability tuned for Middle East conditions.",
    },
    news: [
      {
        date: "2026-08-18",
        title: "GWM expands its regional digital platform",
        summary:
          "The Middle East experience is being shaped around localized content, country journeys and AI-assisted operations.",
      },
      {
        date: "2026-08-12",
        title: "Hybrid SUVs lead the featured line-up",
        summary:
          "Featured models prioritize efficient performance, safety technology and practical family space.",
      },
      {
        date: "2026-08-05",
        title: "Aftersales content moves closer to customers",
        summary:
          "Service, warranty and roadside assistance journeys are being organized for faster regional access.",
      },
    ],
    countries: [
      { country: "United Arab Emirates", region: "GCC", label: "Visit site" },
      { country: "Saudi Arabia", region: "GCC", label: "Visit site" },
      { country: "Qatar", region: "GCC", label: "Visit site" },
      { country: "Kuwait", region: "GCC", label: "Visit site" },
      { country: "Jordan", region: "Levant", label: "Visit site" },
      { country: "Lebanon", region: "Levant", label: "Visit site" },
    ],
  },
  ar: {
    locale: "ar",
    source: "fallback",
    navItems: ["العلامات", "المركبات", "التكنولوجيا", "الأخبار", "الدول"],
    languageLabel: "English",
    hero: {
      eyebrow: "جي دبليو إم الشرق الأوسط",
      title: "انطلق مع المزيد",
      intro:
        "استكشف مجموعة إقليمية تجمع بين سيارات SUV الذكية، والبيك أب العملية، والتنقل الكهربائي، وخدمات ما بعد البيع في الشرق الأوسط.",
      primaryCta: "استكشف المركبات",
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
        name: "HAVAL",
        summary: "سيارات SUV ذكية للعائلة والعمل والثقة اليومية.",
      },
      {
        name: "TANK",
        summary: "هندسة فاخرة للطرق الوعرة مع راحة للمسافات الطويلة.",
      },
      {
        name: "ORA",
        summary: "تنقل كهربائي مميز للمدينة وما بعدها.",
      },
      {
        name: "POER",
        summary: "بيك أب قادرة للعمل والسفر ونهايات الأسبوع النشطة.",
      },
    ],
    featuredVehicles: [
      {
        brand: "HAVAL",
        model: "H6 HEV",
        bodyType: "SUV",
        powertrain: "هايبرد",
        summary:
          "سيارة SUV هايبرد واثقة مع سلامة ذكية، ومساحة داخلية هادئة، وكفاءة للاستخدام اليومي.",
        ctaLabel: "عرض الطراز",
        media: {
          url: "/media/product-hero.png",
          alt: "سيارة SUV هايبرد على طريق صحراوي وقت الغروب",
        },
      },
      {
        brand: "TANK",
        model: "500",
        bodyType: "SUV",
        powertrain: "بنزين",
        summary: "قوة هيكلية، وتجهيزات فاخرة، وتقنيات لجميع التضاريس للرحلات الإقليمية.",
        ctaLabel: "عرض الطراز",
        media: {
          url: "/media/home-hero.png",
          alt: "سيارة SUV فاخرة على طريق إقليمي وقت الغروب",
        },
      },
      {
        brand: "POER",
        model: "Commercial",
        bodyType: "بيك أب",
        powertrain: "ديزل",
        summary: "عملية متينة مع الراحة والاتصال المتوقعين من بيك أب حديثة.",
        ctaLabel: "عرض الطراز",
        media: {
          url: "/media/service-hero.png",
          alt: "مركبة داكنة في مركز خدمة فاخر",
        },
      },
    ],
    technology: {
      eyebrow: "التكنولوجيا",
      title: "منصات ذكية للطرق الإقليمية",
      summary:
        "تجمع GWM بين منظومات الحركة الكهربائية، وأنظمة مساعدة السائق، وتجارب المقصورة المتصلة مع متانة ملائمة لظروف الشرق الأوسط.",
    },
    news: [
      {
        date: "2026-08-18",
        title: "GWM توسع منصتها الرقمية الإقليمية",
        summary:
          "تتشكل تجربة الشرق الأوسط حول محتوى محلي، ورحلات خاصة بكل دولة، وعمليات مدعومة بالذكاء الاصطناعي.",
      },
      {
        date: "2026-08-12",
        title: "سيارات SUV الهايبرد تتصدر المجموعة المختارة",
        summary:
          "تركز الطرازات المختارة على الأداء الكفء وتقنيات السلامة والمساحة العملية للعائلة.",
      },
      {
        date: "2026-08-05",
        title: "محتوى خدمات ما بعد البيع أقرب إلى العملاء",
        summary:
          "يتم تنظيم رحلات الخدمة والضمان والمساعدة على الطريق لتسهيل الوصول الإقليمي.",
      },
    ],
    countries: [
      { country: "الإمارات العربية المتحدة", region: "الخليج", label: "زيارة الموقع" },
      { country: "المملكة العربية السعودية", region: "الخليج", label: "زيارة الموقع" },
      { country: "قطر", region: "الخليج", label: "زيارة الموقع" },
      { country: "الكويت", region: "الخليج", label: "زيارة الموقع" },
      { country: "الأردن", region: "بلاد الشام", label: "زيارة الموقع" },
      { country: "لبنان", region: "بلاد الشام", label: "زيارة الموقع" },
    ],
  },
} satisfies Record<Locale, HomePageContent>;

export function getFallbackHomeContent(locale: Locale): HomePageContent {
  return fallbackHomeContent[locale];
}
