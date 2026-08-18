import type { Locale } from "@gwm/shared";
import { getFallbackHomeContent, type HomePageContent } from "./home";

export type Vehicle = {
  slug: string;
  brand: string;
  model: string;
  bodyType: string;
  powertrain: string;
  priceLabel: string;
  summary: string;
  media: {
    url: string;
    alt: string;
  };
  highlights: string[];
  specs: Array<{ label: string; value: string }>;
  colors: Array<{ name: string; value: string }>;
};

export type ServiceContent = {
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  stats: Array<{ value: string; label: string }>;
  care: Array<{ title: string; summary: string }>;
  warranty: Array<{ title: string; detail: string }>;
  faq: Array<{ question: string; answer: string }>;
};

export type FormContent = {
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  types: string[];
  fields: Array<{
    label: string;
    placeholder: string;
    type?: "text" | "email" | "tel" | "select" | "textarea";
  }>;
  consent: string;
  submitLabel: string;
};

export type SiteContent = {
  home: HomePageContent;
  vehicles: Vehicle[];
  service: ServiceContent;
  forms: FormContent;
};

const content = {
  en: {
    home: {
      ...getFallbackHomeContent("en"),
      hero: {
        ...getFallbackHomeContent("en").hero,
        media: {
          url: "/media/home-hero.png",
          alt: "Dark SUV on a Middle East road at dusk",
        },
      },
    },
    vehicles: [
      {
        slug: "haval-h6-hev",
        brand: "HAVAL",
        model: "H6 HEV",
        bodyType: "SUV",
        powertrain: "Hybrid",
        priceLabel: "Regional launch model",
        summary:
          "An intelligent hybrid SUV built for family use, daily efficiency and confident regional travel.",
        media: {
          url: "/media/product-hero.png",
          alt: "Hybrid SUV on a desert highway at dusk",
        },
        highlights: [
          "Hybrid powertrain tuned for smooth city and highway driving",
          "Driver assistance features for daily confidence",
          "Flexible cabin with quiet materials and connected displays",
        ],
        specs: [
          { label: "Powertrain", value: "Hybrid" },
          { label: "Body", value: "5-seat SUV" },
          { label: "Drive", value: "Front wheel drive" },
          { label: "Safety", value: "Advanced driver assistance" },
        ],
        colors: [
          { name: "Obsidian Black", value: "#050506" },
          { name: "Pearl White", value: "#f7f7f2" },
          { name: "Graphite", value: "#343946" },
          { name: "Signal Red", value: "#d50032" },
        ],
      },
      {
        slug: "tank-500",
        brand: "TANK",
        model: "500",
        bodyType: "SUV",
        powertrain: "Petrol",
        priceLabel: "Premium off-road",
        summary:
          "A premium body-on-frame SUV with long-distance comfort and serious all-terrain capability.",
        media: {
          url: "/media/home-hero.png",
          alt: "Premium SUV on a regional road at dusk",
        },
        highlights: [
          "Off-road drive modes and robust chassis engineering",
          "Premium cabin layout for long regional journeys",
          "Large SUV presence with practical family space",
        ],
        specs: [
          { label: "Powertrain", value: "Petrol" },
          { label: "Body", value: "Large SUV" },
          { label: "Drive", value: "4WD" },
          { label: "Terrain", value: "Multi-mode control" },
        ],
        colors: [
          { name: "Deep Black", value: "#050506" },
          { name: "Desert Bronze", value: "#8a6a45" },
          { name: "Steel Gray", value: "#6f747d" },
          { name: "White", value: "#ffffff" },
        ],
      },
      {
        slug: "poer-commercial",
        brand: "POER",
        model: "Commercial",
        bodyType: "Pickup",
        powertrain: "Diesel",
        priceLabel: "Work-ready pickup",
        summary:
          "A durable pickup for business, utility and weekend use with the comfort expected from a modern cabin.",
        media: {
          url: "/media/service-hero.png",
          alt: "Dark vehicle in a premium service environment",
        },
        highlights: [
          "Durable load capability for business and fleet needs",
          "Comfortable cabin technology for daily use",
          "Configured for regional work and travel conditions",
        ],
        specs: [
          { label: "Powertrain", value: "Diesel" },
          { label: "Body", value: "Double cab pickup" },
          { label: "Drive", value: "4WD available" },
          { label: "Use", value: "Fleet and private" },
        ],
        colors: [
          { name: "Black", value: "#050506" },
          { name: "Silver", value: "#a7abb2" },
          { name: "White", value: "#ffffff" },
          { name: "Blue Gray", value: "#27313f" },
        ],
      },
    ],
    service: {
      hero: {
        eyebrow: "Genuine care",
        title: "Care that goes with more",
        intro:
          "Plan service, warranty support and roadside assistance through a clear ownership journey built for regional customers.",
      },
      stats: [
        { value: "7/24", label: "Roadside support" },
        { value: "30+", label: "Dealer hubs" },
        { value: "10", label: "Markets covered" },
      ],
      care: [
        {
          title: "Book service",
          summary:
            "Choose your market, vehicle and preferred dealer to begin a service booking request.",
        },
        {
          title: "Warranty clarity",
          summary:
            "Review coverage, maintenance expectations and ownership documents in one place.",
        },
        {
          title: "Roadside assistance",
          summary:
            "Get regional contact paths for urgent support and ownership peace of mind.",
        },
      ],
      warranty: [
        { title: "Basic coverage", detail: "Market-specific vehicle warranty guidance." },
        {
          title: "Service plans",
          detail: "Prepaid maintenance options for selected models.",
        },
        { title: "Handbooks", detail: "Owner manuals and quick-start support content." },
      ],
      faq: [
        {
          question: "Can I book service online?",
          answer:
            "The MVP captures your request and routes it to the selected market flow.",
        },
        {
          question: "Where are warranty terms shown?",
          answer: "Warranty content is organized by market and vehicle family.",
        },
      ],
    },
    forms: {
      hero: {
        eyebrow: "Start your journey",
        title: "One form for every request",
        intro:
          "Request a test drive, brochure, dealer contact, fleet conversation or service booking from one focused page.",
      },
      types: ["Test drive", "Brochure", "Dealer enquiry", "Fleet", "Service"],
      fields: [
        { label: "Full name", placeholder: "Enter your name" },
        { label: "Email", placeholder: "name@example.com", type: "email" },
        { label: "Phone", placeholder: "+971 50 000 0000", type: "tel" },
        { label: "Country", placeholder: "Select country", type: "select" },
        { label: "Vehicle", placeholder: "Select model", type: "select" },
        { label: "Message", placeholder: "Tell us what you need", type: "textarea" },
      ],
      consent:
        "I agree to be contacted by GWM Middle East or an authorized regional partner about my request.",
      submitLabel: "Submit request",
    },
  },
  ar: {
    home: {
      ...getFallbackHomeContent("ar"),
      hero: {
        ...getFallbackHomeContent("ar").hero,
        media: {
          url: "/media/home-hero.png",
          alt: "سيارة SUV داكنة على طريق في الشرق الأوسط وقت الغروب",
        },
      },
    },
    vehicles: [
      {
        slug: "haval-h6-hev",
        brand: "HAVAL",
        model: "H6 HEV",
        bodyType: "SUV",
        powertrain: "هايبرد",
        priceLabel: "طراز إطلاق إقليمي",
        summary: "سيارة SUV هايبرد ذكية للعائلة والكفاءة اليومية والسفر الإقليمي بثقة.",
        media: {
          url: "/media/product-hero.png",
          alt: "سيارة SUV هايبرد على طريق صحراوي وقت الغروب",
        },
        highlights: [
          "منظومة هايبرد لقيادة سلسة داخل المدينة وعلى الطرق السريعة",
          "ميزات مساعدة السائق لتعزيز الثقة اليومية",
          "مقصورة مرنة بمواد هادئة وشاشات متصلة",
        ],
        specs: [
          { label: "منظومة الحركة", value: "هايبرد" },
          { label: "الفئة", value: "SUV بخمسة مقاعد" },
          { label: "الدفع", value: "دفع أمامي" },
          { label: "السلامة", value: "مساعدة متقدمة للسائق" },
        ],
        colors: [
          { name: "أسود", value: "#050506" },
          { name: "أبيض لؤلؤي", value: "#f7f7f2" },
          { name: "جرافيت", value: "#343946" },
          { name: "أحمر", value: "#d50032" },
        ],
      },
      {
        slug: "tank-500",
        brand: "TANK",
        model: "500",
        bodyType: "SUV",
        powertrain: "بنزين",
        priceLabel: "فخامة للطرق الوعرة",
        summary:
          "سيارة SUV فاخرة بهيكل قوي وراحة للمسافات الطويلة وقدرة جادة لجميع التضاريس.",
        media: {
          url: "/media/home-hero.png",
          alt: "سيارة SUV فاخرة على طريق إقليمي وقت الغروب",
        },
        highlights: [
          "أنماط قيادة للطرق الوعرة وهندسة هيكل قوية",
          "مقصورة فاخرة للرحلات الإقليمية الطويلة",
          "حضور SUV كبير مع مساحة عملية للعائلة",
        ],
        specs: [
          { label: "منظومة الحركة", value: "بنزين" },
          { label: "الفئة", value: "SUV كبيرة" },
          { label: "الدفع", value: "4WD" },
          { label: "التضاريس", value: "تحكم متعدد الأنماط" },
        ],
        colors: [
          { name: "أسود عميق", value: "#050506" },
          { name: "برونزي صحراوي", value: "#8a6a45" },
          { name: "رمادي", value: "#6f747d" },
          { name: "أبيض", value: "#ffffff" },
        ],
      },
      {
        slug: "poer-commercial",
        brand: "POER",
        model: "Commercial",
        bodyType: "بيك أب",
        powertrain: "ديزل",
        priceLabel: "بيك أب جاهزة للعمل",
        summary:
          "بيك أب متينة للأعمال والاستخدام اليومي مع الراحة المتوقعة من مقصورة حديثة.",
        media: {
          url: "/media/service-hero.png",
          alt: "مركبة داكنة في مركز خدمة فاخر",
        },
        highlights: [
          "قدرة تحميل متينة لاحتياجات الأعمال والأساطيل",
          "تقنيات مقصورة مريحة للاستخدام اليومي",
          "ملائمة لظروف العمل والسفر الإقليمية",
        ],
        specs: [
          { label: "منظومة الحركة", value: "ديزل" },
          { label: "الفئة", value: "بيك أب مزدوجة المقصورة" },
          { label: "الدفع", value: "4WD متاح" },
          { label: "الاستخدام", value: "أساطيل وأفراد" },
        ],
        colors: [
          { name: "أسود", value: "#050506" },
          { name: "فضي", value: "#a7abb2" },
          { name: "أبيض", value: "#ffffff" },
          { name: "أزرق رمادي", value: "#27313f" },
        ],
      },
    ],
    service: {
      hero: {
        eyebrow: "عناية أصلية",
        title: "عناية ترافقك أكثر",
        intro:
          "خطط للصيانة والضمان والمساعدة على الطريق من خلال رحلة ملكية واضحة للعملاء في المنطقة.",
      },
      stats: [
        { value: "7/24", label: "دعم على الطريق" },
        { value: "+30", label: "مراكز وكلاء" },
        { value: "10", label: "أسواق مشمولة" },
      ],
      care: [
        {
          title: "احجز الصيانة",
          summary: "اختر السوق والمركبة والوكيل المفضل لبدء طلب الصيانة.",
        },
        {
          title: "وضوح الضمان",
          summary: "راجع التغطية ومتطلبات الصيانة ووثائق الملكية في مكان واحد.",
        },
        {
          title: "المساعدة على الطريق",
          summary: "احصل على مسارات تواصل إقليمية للدعم العاجل وراحة البال.",
        },
      ],
      warranty: [
        { title: "التغطية الأساسية", detail: "إرشادات ضمان حسب السوق." },
        { title: "خطط الصيانة", detail: "خيارات صيانة مسبقة الدفع لطرازات مختارة." },
        { title: "الكتيبات", detail: "أدلة المالك ومحتوى دعم سريع." },
      ],
      faq: [
        {
          question: "هل يمكنني حجز الصيانة عبر الإنترنت؟",
          answer: "يلتقط MVP طلبك ويوجهه إلى مسار السوق المحدد.",
        },
        {
          question: "أين تظهر شروط الضمان؟",
          answer: "يتم تنظيم محتوى الضمان حسب السوق وفئة المركبة.",
        },
      ],
    },
    forms: {
      hero: {
        eyebrow: "ابدأ رحلتك",
        title: "نموذج واحد لكل طلب",
        intro:
          "اطلب تجربة قيادة أو كتيباً أو تواصلاً مع الوكيل أو محادثة أسطول أو حجز صيانة من صفحة واحدة مركزة.",
      },
      types: ["تجربة قيادة", "كتيب", "استفسار وكيل", "أسطول", "صيانة"],
      fields: [
        { label: "الاسم الكامل", placeholder: "أدخل اسمك" },
        { label: "البريد الإلكتروني", placeholder: "name@example.com", type: "email" },
        { label: "الهاتف", placeholder: "+971 50 000 0000", type: "tel" },
        { label: "الدولة", placeholder: "اختر الدولة", type: "select" },
        { label: "المركبة", placeholder: "اختر الطراز", type: "select" },
        { label: "الرسالة", placeholder: "اكتب ما تحتاجه", type: "textarea" },
      ],
      consent:
        "أوافق على أن تتواصل معي GWM الشرق الأوسط أو أحد شركائها المعتمدين بخصوص طلبي.",
      submitLabel: "إرسال الطلب",
    },
  },
} satisfies Record<Locale, SiteContent>;

export function getSiteContent(locale: Locale): SiteContent {
  return content[locale];
}

export function getVehicle(locale: Locale, slug: string): Vehicle | undefined {
  return content[locale].vehicles.find((vehicle) => vehicle.slug === slug);
}

export function getVehicleStaticParams() {
  return content.en.vehicles.map((vehicle) => ({ slug: vehicle.slug }));
}
