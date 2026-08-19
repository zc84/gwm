import type { Locale } from "@gwm/shared";
import { getFallbackHomeContent, type HomePageContent } from "./home";
import type { ModelStatus } from "./models";

export type QuickStat = { value: string; unit: string; label: string };
export type WhyCard = {
  title: string;
  summary: string;
  placeholder: string;
  media?: { url: string; alt: string };
};
export type DetailShot = {
  caption: string;
  placeholder: string;
  media?: { url: string; alt: string };
};
export type PricingRow = { trim: string; price: string; vat: string; priceWithVat: string };
export type SpecGroup = {
  trimName?: string;
  rows: Array<{ label: string; value: string }>;
};

export type Vehicle = {
  slug: string;
  brand: string;
  model: string;
  bodyType: string;
  powertrain: string;
  priceLabel: string;
  summary: string;
  heroPlaceholder: string;
  heroMedia?: { url: string; alt: string };
  spin360?: { frames: string[]; alt: string };
  quickStats: QuickStat[];
  whyCards: WhyCard[];
  featureBanner: {
    tabs: string[];
    title: string;
    description: string;
    stat: { value: string; label: string };
    placeholder: string;
    media?: { url: string; alt: string };
  };
  details: {
    exterior: DetailShot[];
    interior: DetailShot[];
  };
  spinCaption: string;
  safety: {
    title: string;
    tabs: string[];
    placeholder: string;
    caption: string;
    features: Array<{ title: string; summary?: string }>;
  };
  colors: Array<{ name: string; value: string }>;
  colorPlaceholder: string;
  pricing: PricingRow[];
  pricingNote: string;
  warranty: string[];
  continueLabel: string;
  specs: SpecGroup[];
};

export type ServiceContent = {
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    backLabel: string;
  };
  stats: Array<{ value: string; label: string }>;
  needsTitle: string;
  needs: Array<{ icon: string; title: string; summary: string }>;
  plansTitle: string;
  plans: Array<{
    name: string;
    price: string;
    featured: boolean;
    badge?: string;
    features: string[];
    ctaLabel: string;
  }>;
  ownership: {
    title: string;
    summary: string;
    features: Array<{ icon: string; title: string; summary: string }>;
  };
  handbooksTitle: string;
  handbookKind: string;
  findServiceLabel: string;
  faqTitle: string;
  faq: Array<{ question: string; answer: string }>;
};

export type FormContent = {
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  tabs: string[];
  formTitle: string;
  formSubtitle: string;
  fields: Array<{
    label: string;
    placeholder: string;
    type?: "text" | "email" | "tel" | "select" | "date";
    half?: boolean;
  }>;
  notRobotLabel: string;
  notRobotHint: string;
  consent: string;
  submitLabel: string;
};

export type CatalogueContent = {
  hero: { eyebrow: string; title: string; intro: string; placeholder: string };
  detailedSection: { eyebrow: string; title: string; summary: string };
  fullRangeSection: { eyebrow: string; title: string; summary: string };
  discoverLabel: string;
  bookTestDriveLabel: string;
  viewDetailsLabel: string;
  statusLabels: Record<ModelStatus, string>;
  brandFilter: { label: string; allOption: string };
};

export type NewsPageContent = {
  hero: { eyebrow: string; title: string; intro: string; placeholder: string };
  section: { eyebrow: string; title: string };
};

export type AboutContent = {
  hero: { eyebrow: string; title: string; intro: string; placeholder: string };
  sections: Array<{ title: string; summary: string }>;
  disclaimer: string;
};

export type OfferCard = {
  brand: string;
  model: string;
  title: string;
  validity: string;
  terms: string;
  ctaLabel: string;
};

export type OffersContent = {
  hero: { eyebrow: string; title: string; intro: string; placeholder: string };
  offers: OfferCard[];
  disclaimer: string;
};

export type SiteContent = {
  home: HomePageContent;
  vehicles: Vehicle[];
  service: ServiceContent;
  forms: FormContent;
  catalogue: CatalogueContent;
  news: NewsPageContent;
  about: AboutContent;
  offers: OffersContent;
};

function buildSpinFrames(
  dir: string,
  filePrefix: string,
  count = 36,
  stepDegrees = 10,
): string[] {
  return Array.from(
    { length: count },
    (_, i) =>
      `/media/360/${dir}/frames/${filePrefix}_${String(i * stepDegrees).padStart(3, "0")}.webp`,
  );
}

const content = {
  en: {
    home: getFallbackHomeContent("en"),
    vehicles: [
      {
        slug: "all-new-h6",
        brand: "HAVAL",
        model: "All-New H6",
        bodyType: "SUV",
        powertrain: "Petrol",
        priceLabel: "Starting from SAR 89,900",
        summary:
          "A versatile family SUV balancing modern design, intelligent assistance and comfortable long-distance usability.",
        heroPlaceholder: "Photo: All-New Haval H6, exterior hero shot",
        heroMedia: {
          url: "/media/vehicles/all-new-h6/01_hero_exterior.webp",
          alt: "All-New Haval H6 exterior hero shot",
        },
        spin360: {
          frames: buildSpinFrames("haval-h6-hev", "HAVAL_h6-hev_MY26_EXT360"),
          alt: "360 degree exterior spin of the All-New Haval H6",
        },
        quickStats: [
          { value: "SUV", unit: "", label: "Segment" },
          { value: "2.0T", unit: "235 HP", label: "Engine" },
          { value: "385", unit: "Nm", label: "Torque" },
          { value: "9DCT", unit: "", label: "Transmission" },
        ],
        whyCards: [
          {
            title: "Engineered for Confidence",
            summary:
              "A Head-Up Display, a 540° panoramic view and an intelligent driving suite with 18+ assist functions, built on a body that's 71% high-strength steel.",
            placeholder: "Photo: All-New H6 safety technology",
            media: {
              url: "/media/vehicles/all-new-h6/02_exterior_lifestyle.webp",
              alt: "All-New Haval H6 exterior lifestyle shot",
            },
          },
          {
            title: "A Cabin That Rewards",
            summary:
              "A 14.6-inch central touchscreen, ventilated seats, a multi-functional trunk and wireless Apple CarPlay & Android Auto.",
            placeholder: "Photo: All-New H6 cabin dashboard",
            media: {
              url: "/media/vehicles/all-new-h6/03_interior_cockpit.webp",
              alt: "All-New Haval H6 interior cockpit",
            },
          },
          {
            title: "Confidence by Design",
            summary:
              "A panoramic sunroof, high-intensity LED daytime running lights and 19-inch aluminium wheels.",
            placeholder: "Photo: All-New H6 rear three-quarter",
            media: {
              url: "/media/vehicles/all-new-h6/05_rear_side_profile.webp",
              alt: "All-New Haval H6 rear side profile",
            },
          },
        ],
        featureBanner: {
          tabs: ["Safety", "Interior", "Exterior"],
          title: "Smart Innovation at Your Fingertips",
          description:
            "The all-new Haval H6 redefines modern driving with a 14.6-inch touchscreen, a Head-Up Display (HUD), a 540° panoramic view, and voice control with no connection required.",
          stat: { value: "14.6\"", label: "Central touchscreen" },
          placeholder: "Photo: All-New H6 technology feature",
          media: {
            url: "/media/vehicles/all-new-h6/04_feature_detail.webp",
            alt: "All-New Haval H6 technology feature",
          },
        },
        details: {
          exterior: [
            {
              caption: "Panoramic sunroof",
              placeholder: "Photo: panoramic sunroof detail",
              media: {
                url: "/media/vehicles/all-new-h6/01_hero_exterior.webp",
                alt: "All-New Haval H6 front exterior detail",
              },
            },
            {
              caption: "High-intensity LED daytime running lights",
              placeholder: "Photo: LED daytime running lights",
              media: {
                url: "/media/vehicles/all-new-h6/02_exterior_lifestyle.webp",
                alt: "All-New Haval H6 exterior lifestyle detail",
              },
            },
            {
              caption: "19-inch aluminium wheels",
              placeholder: "Photo: alloy wheel detail",
              media: {
                url: "/media/vehicles/all-new-h6/05_rear_side_profile.webp",
                alt: "All-New Haval H6 wheel detail",
              },
            },
          ],
          interior: [
            {
              caption: "14.6-inch central touchscreen",
              placeholder: "Photo: infotainment screen detail",
              media: {
                url: "/media/vehicles/all-new-h6/03_interior_cockpit.webp",
                alt: "All-New Haval H6 interior cockpit",
              },
            },
            {
              caption: "Multi-functional trunk",
              placeholder: "Photo: trunk detail",
              media: {
                url: "/media/vehicles/all-new-h6/04_feature_detail.webp",
                alt: "All-New Haval H6 feature detail",
              },
            },
            {
              caption: "Seat ventilation",
              placeholder: "Photo: seat ventilation detail",
            },
          ],
        },
        spinCaption:
          "Drag to spin the All-New H6, or use the slider to explore every angle.",
        safety: {
          title: "Advanced Protection, Intelligent Confidence",
          tabs: ["Airbags", "Intelligent Driving", "Body Structure"],
          placeholder: "Photo: All-New H6 safety systems",
          caption: "6 airbags on a body that's 71% high-strength steel",
          features: [
            { title: "Head-Up Display (HUD)" },
            { title: "540° Panoramic View" },
            { title: "18+ Intelligent Driving Assist Functions" },
            { title: "71% High-Strength Steel Body" },
          ],
        },
        colors: [
          { name: "Obsidian Black", value: "#050506" },
          { name: "Pearl White", value: "#f7f7f2" },
          { name: "Graphite", value: "#343946" },
          { name: "Signal Red", value: "#d50032" },
        ],
        colorPlaceholder: "Photo: All-New H6 in selected colour, studio",
        pricing: [
          { trim: "Active", price: "78,174", vat: "11,726", priceWithVat: "89,900" },
          { trim: "Premium", price: "86,000", vat: "12,900", priceWithVat: "98,900" },
        ],
        pricingNote:
          "*Full specifications, models and options are available in the specifications brochure. Prices displayed are in SAR.",
        warranty: [
          "Engine & Transmission: 10 years, unlimited mileage",
          "Bumper to bumper: 6 years or 200,000 km, whichever comes first (excludes wear-and-tear parts)",
        ],
        continueLabel: "Continue",
        specs: [
          {
            rows: [
              { label: "Engine", value: "2.0L / 4-Cylinder Turbo" },
              { label: "HP and Torque", value: "234 HP / 385 Nm" },
              { label: "Transmission", value: "9-Speed Dual-Clutch (9DCT)" },
              { label: "Fuel Consumption", value: "16.9 km/L" },
              { label: "Drive Mode", value: "FWD" },
            ],
          },
        ],
      },
      {
        slug: "tank-500",
        brand: "TANK",
        model: "500",
        bodyType: "SUV",
        powertrain: "Petrol",
        priceLabel: "Starting from SAR 158,900",
        summary:
          "A large premium SUV balancing sophisticated comfort, road presence and confident off-road engineering.",
        heroPlaceholder: "Photo: Tank 500 exterior hero shot",
        heroMedia: {
          url: "/media/vehicles/tank-500/01_hero_exterior.webp",
          alt: "TANK 500 exterior hero shot",
        },
        spin360: {
          frames: buildSpinFrames("tank-500", "TANK_tank-500_MY26_EXT360"),
          alt: "360 degree exterior spin of the TANK 500",
        },
        quickStats: [
          { value: "SUV", unit: "", label: "Segment" },
          { value: "3.0L", unit: "", label: "Engine" },
          { value: "500", unit: "Nm", label: "Torque" },
          { value: "9AT", unit: "", label: "Transmission" },
        ],
        whyCards: [
          {
            title: "Seamless 9-Speed Automatic",
            summary:
              "Precise gear shifts and optimal power delivery for a quieter, more efficient ride, on the highway or in the city.",
            placeholder: "Photo: Tank 500 on the move",
            media: {
              url: "/media/vehicles/tank-500/02_exterior_lifestyle.webp",
              alt: "TANK 500 exterior lifestyle shot",
            },
          },
          {
            title: "A Cabin That Rewards",
            summary:
              "Wireless charging, leather seats, a 14.6-inch screen and massage function for the front seats.",
            placeholder: "Photo: Tank 500 cabin dashboard",
            media: {
              url: "/media/vehicles/tank-500/03_interior_cockpit.webp",
              alt: "TANK 500 interior cockpit",
            },
          },
          {
            title: "Confidence by Design",
            summary:
              "A 360° camera, lane assist and blind-spot detection back a commanding road presence.",
            placeholder: "Photo: Tank 500 rear three-quarter",
            media: {
              url: "/media/vehicles/tank-500/05_rear_side_profile.webp",
              alt: "TANK 500 rear side profile",
            },
          },
        ],
        featureBanner: {
          tabs: ["Safety", "Interior", "Exterior"],
          title: "Cutting-Edge Connectivity and Entertainment",
          description:
            "The TANK 500's infotainment system offers a seamless blend of connectivity and entertainment — an intuitive interface, effortless smartphone integration and premium audio quality.",
          stat: { value: "9AT", label: "Automatic transmission" },
          placeholder: "Photo: Tank 500 technology feature",
          media: {
            url: "/media/vehicles/tank-500/04_feature_detail.webp",
            alt: "TANK 500 technology feature",
          },
        },
        details: {
          exterior: [
            {
              caption: "LED lights, front and rear",
              placeholder: "Photo: LED lighting detail",
              media: {
                url: "/media/vehicles/tank-500/01_hero_exterior.webp",
                alt: "TANK 500 front exterior detail",
              },
            },
            {
              caption: "Panoramic sunroof",
              placeholder: "Photo: panoramic sunroof detail",
              media: {
                url: "/media/vehicles/tank-500/04_feature_detail.webp",
                alt: "TANK 500 feature detail",
              },
            },
            {
              caption: "Sound insulation glass",
              placeholder: "Photo: rear tailgate detail",
              media: {
                url: "/media/vehicles/tank-500/05_rear_side_profile.webp",
                alt: "TANK 500 rear side profile detail",
              },
            },
          ],
          interior: [
            {
              caption: "Wireless charger",
              placeholder: "Photo: wireless charger detail",
              media: {
                url: "/media/vehicles/tank-500/03_interior_cockpit.webp",
                alt: "TANK 500 interior cockpit",
              },
            },
            {
              caption: "Leather seats",
              placeholder: "Photo: leather seat detail",
            },
            {
              caption: "14.6-inch central screen",
              placeholder: "Photo: central screen detail",
            },
          ],
        },
        spinCaption:
          "Drag to spin the TANK 500, or use the slider to explore every angle.",
        safety: {
          title: "Safety Suite",
          tabs: ["Camera", "Lane Assist", "Blind Spot"],
          placeholder: "Photo: Tank 500 safety systems",
          caption: "360° camera, lane assist and blind-spot detection",
          features: [
            { title: "360° View Camera" },
            { title: "Lane Assist" },
            { title: "Blind Spot Detection" },
          ],
        },
        colors: [
          { name: "Deep Black", value: "#050506" },
          { name: "Desert Bronze", value: "#8a6a45" },
          { name: "Steel Gray", value: "#6f747d" },
          { name: "White", value: "#ffffff" },
        ],
        colorPlaceholder: "Photo: Tank 500 in selected colour, studio",
        pricing: [
          { trim: "Rock Elite", price: "192,900", vat: "28,935", priceWithVat: "221,835" },
          { trim: "Elite Urban", price: "188,900", vat: "28,335", priceWithVat: "217,235" },
          {
            trim: "Business Urban",
            price: "158,900",
            vat: "23,835",
            priceWithVat: "182,735",
          },
          { trim: "Business", price: "158,900", vat: "23,835", priceWithVat: "182,735" },
        ],
        pricingNote:
          "*Full specifications, models and options are available in the specifications brochure. Prices displayed are in SAR.",
        warranty: [
          "Engine & Transmission: 10 years or 1,000,000 km, whichever comes first",
          "Bumper to bumper: 6 years or 200,000 km, whichever comes first (excludes wear-and-tear parts)",
        ],
        continueLabel: "Continue",
        specs: [
          {
            rows: [
              { label: "Engine", value: "3.0L / 6-Cylinder Turbo" },
              { label: "HP and Torque", value: "348 HP / 500 Nm" },
              { label: "Transmission", value: "9-Speed Automatic (9AT)" },
              { label: "Fuel Consumption", value: "11.9 km/L" },
              { label: "Drive Mode", value: "4WD" },
            ],
          },
        ],
      },
      {
        slug: "poer-facelift",
        brand: "POER",
        model: "Facelift",
        bodyType: "Pickup",
        powertrain: "Diesel",
        priceLabel: "Starting from SAR 88,900",
        summary:
          "A premium pickup engineered for work, family and adventure, combining robust capability with connected cabin technology.",
        heroPlaceholder: "Photo: POER Facelift exterior hero shot",
        heroMedia: {
          url: "/media/vehicles/poer-facelift/01_hero_exterior.webp",
          alt: "POER Facelift exterior hero shot",
        },
        spin360: {
          frames: buildSpinFrames(
            "poer-commercial",
            "POER_poer-2-4t-commercial_MY26_EXT360",
          ),
          alt: "360 degree exterior spin of the POER Facelift",
        },
        quickStats: [
          { value: "Pick-Up", unit: "", label: "Segment" },
          { value: "2.4T", unit: "", label: "Engine" },
          { value: "480", unit: "Nm", label: "Torque" },
          { value: "9-Speed", unit: "Automatic", label: "Transmission" },
        ],
        whyCards: [
          {
            title: "Outstanding Performance",
            summary:
              "The all-new 2.4T diesel engine pairs with a 9-speed automatic transmission for smooth acceleration and confident control over rough terrain.",
            placeholder: "Photo: POER Facelift on the move",
            media: {
              url: "/media/vehicles/poer-facelift/02_exterior_lifestyle.webp",
              alt: "POER Facelift exterior lifestyle shot",
            },
          },
          {
            title: "Premium and Intelligent Driving",
            summary:
              "A spacious leather cabin, a 12.3-inch touchscreen with Apple CarPlay & Android Auto, and a 7-inch digital instrument cluster.",
            placeholder: "Photo: POER Facelift cabin dashboard",
            media: {
              url: "/media/vehicles/poer-facelift/03_interior_cockpit.webp",
              alt: "POER Facelift interior cockpit",
            },
          },
          {
            title: "Built to Explore",
            summary:
              "265/60 R18 wheels, a smart key with remote start and full LED lighting, front and rear.",
            placeholder: "Photo: POER Facelift rear three-quarter",
            media: {
              url: "/media/vehicles/poer-facelift/05_rear_side_profile.webp",
              alt: "POER Facelift rear side profile",
            },
          },
        ],
        featureBanner: {
          tabs: ["Safety", "Interior", "Exterior"],
          title: "Premium and Intelligent Driving",
          description:
            "A spacious cabin with leather seats for maximum comfort on long journeys, a 12.3-inch centre touchscreen with Apple CarPlay and Android Auto, and a 7-inch digital instrument cluster make every trip more comfortable and enjoyable.",
          stat: { value: "12.3\"", label: "Touchscreen display" },
          placeholder: "Photo: POER Facelift technology feature",
          media: {
            url: "/media/vehicles/poer-facelift/04_feature_detail.webp",
            alt: "POER Facelift technology feature",
          },
        },
        details: {
          exterior: [
            {
              caption: "265/60 R18 alloy wheels",
              placeholder: "Photo: alloy wheel detail",
              media: {
                url: "/media/vehicles/poer-facelift/01_hero_exterior.webp",
                alt: "POER Facelift front exterior detail",
              },
            },
            {
              caption: "Smart key with remote start",
              placeholder: "Photo: smart key detail",
              media: {
                url: "/media/vehicles/poer-facelift/04_feature_detail.webp",
                alt: "POER Facelift feature detail",
              },
            },
            {
              caption: "LED headlights & fog lights, front and rear",
              placeholder: "Photo: LED lighting detail",
              media: {
                url: "/media/vehicles/poer-facelift/05_rear_side_profile.webp",
                alt: "POER Facelift rear lighting detail",
              },
            },
          ],
          interior: [
            {
              caption: "12.3-inch multitouch screen",
              placeholder: "Photo: infotainment screen detail",
              media: {
                url: "/media/vehicles/poer-facelift/03_interior_cockpit.webp",
                alt: "POER Facelift interior cockpit",
              },
            },
            {
              caption: "Apple CarPlay & Android Auto",
              placeholder: "Photo: CarPlay screen detail",
            },
            {
              caption: "6-speaker audio system",
              placeholder: "Photo: speaker detail",
            },
          ],
        },
        spinCaption:
          "Drag to spin the POER Facelift, or use the slider to explore every angle.",
        safety: {
          title: "Advanced Stability and Control",
          tabs: ["Airbags", "Intelligent Driving", "Body Structure"],
          placeholder: "Photo: POER Facelift safety systems",
          caption: "Lane change assist and a 360° omniview camera system",
          features: [
            { title: "Lane Change Assist (LCA)" },
            { title: "Cruise Control System (CCS)" },
            { title: "360° Camera – Omniview System" },
            { title: "Traffic Sign Recognition (TSR)" },
          ],
        },
        colors: [
          { name: "Black", value: "#050506" },
          { name: "Silver", value: "#a7abb2" },
          { name: "White", value: "#ffffff" },
          { name: "Blue Gray", value: "#27313f" },
        ],
        colorPlaceholder: "Photo: POER Facelift in selected colour, studio",
        pricing: [
          {
            trim: "FL LUX Diesel 2.0T",
            price: "88,900",
            vat: "13,335",
            priceWithVat: "102,235",
          },
          { trim: "FL LUX IND", price: "93,900", vat: "14,085", priceWithVat: "107,985" },
          { trim: "FL S-LUX IND", price: "99,900", vat: "14,985", priceWithVat: "114,885" },
        ],
        pricingNote:
          "*Full specifications, models and options are available in the specifications brochure. Prices displayed are in SAR.",
        warranty: [
          "6 years or 150,000 km, whichever comes first (excludes wear-and-tear parts)",
        ],
        continueLabel: "Continue",
        specs: [
          {
            trimName: "POER FL S-Luxury Diesel",
            rows: [
              { label: "Engine", value: "2.4L Turbo 4-Cylinder Diesel" },
              { label: "HP and Torque", value: "181 HP / 480 Nm" },
              { label: "Transmission", value: "9-Speed Automatic" },
              { label: "Fuel Consumption", value: "13.3 km/L" },
              { label: "Drive Mode", value: "4WD" },
            ],
          },
          {
            trimName: "POER FL Luxury Diesel",
            rows: [
              { label: "Engine", value: "2.0L Turbo 4-Cylinder Diesel" },
              { label: "HP and Torque", value: "160 HP / 400 Nm" },
              { label: "Transmission", value: "8-Speed ZF Automatic" },
              { label: "Fuel Consumption", value: "13.5 km/L" },
              { label: "Drive Mode", value: "4WD" },
            ],
          },
        ],
      },
      {
        slug: "wingle-7",
        brand: "POER",
        model: "Wingle 7",
        bodyType: "Pickup",
        powertrain: "Petrol/Diesel",
        priceLabel: "Starting from SAR 58,000",
        summary:
          "A versatile pickup balancing work-ready toughness with more modern cabin comfort and daily usability.",
        heroPlaceholder: "Photo: Wingle 7 exterior hero shot",
        heroMedia: {
          url: "/media/vehicles/wingle-7/01_hero_exterior.webp",
          alt: "Wingle 7 exterior hero shot",
        },
        quickStats: [
          { value: "Pick-Up", unit: "", label: "Segment" },
          { value: "4-Cylinder", unit: "", label: "Engine" },
          { value: "225", unit: "Nm", label: "Torque" },
          { value: "5-Speed", unit: "MT", label: "Transmission" },
        ],
        whyCards: [
          {
            title: "Built for Every Condition",
            summary:
              "Standard, Sport, Economy and Snow drive modes adapt to the road ahead, with petrol and diesel options available.",
            placeholder: "Photo: Wingle 7 on the move",
            media: {
              url: "/media/vehicles/wingle-7/02_exterior_lifestyle.webp",
              alt: "Wingle 7 exterior lifestyle shot",
            },
          },
          {
            title: "Immersive Audio Experience",
            summary:
              "A 6-speaker sound system delivers rich, clear audio, turning every trip into a mobile concert hall.",
            placeholder: "Photo: Wingle 7 cabin dashboard",
            media: {
              url: "/media/vehicles/wingle-7/03_interior_cockpit.webp",
              alt: "Wingle 7 interior cockpit",
            },
          },
          {
            title: "Advanced Stability and Control",
            summary:
              "An electronic stability program automatically reduces traction loss to help keep you in control.",
            placeholder: "Photo: Wingle 7 rear three-quarter",
            media: {
              url: "/media/vehicles/wingle-7/05_rear_side_profile.webp",
              alt: "Wingle 7 rear side profile",
            },
          },
        ],
        featureBanner: {
          tabs: ["Safety", "Interior", "Exterior"],
          title: "Immersive Audio Experience",
          description:
            "Enjoy superior sound quality with the Wingle 7's 6-speaker audio system, delivering rich, clear audio on every journey.",
          stat: { value: "6", label: "Speaker audio system" },
          placeholder: "Photo: Wingle 7 technology feature",
          media: {
            url: "/media/vehicles/wingle-7/04_feature_detail.webp",
            alt: "Wingle 7 technology feature",
          },
        },
        details: {
          exterior: [
            {
              caption: "16-inch alloy wheels",
              placeholder: "Photo: alloy wheel detail",
              media: {
                url: "/media/vehicles/wingle-7/01_hero_exterior.webp",
                alt: "Wingle 7 front exterior detail",
              },
            },
          ],
          interior: [
            {
              caption: "6-speaker audio system",
              placeholder: "Photo: speaker detail",
              media: {
                url: "/media/vehicles/wingle-7/03_interior_cockpit.webp",
                alt: "Wingle 7 interior cockpit",
              },
            },
            {
              caption: "Dust filter",
              placeholder: "Photo: cabin air filter detail",
            },
          ],
        },
        spinCaption: "Drag to spin the Wingle 7, or use the slider to explore every angle.",
        safety: {
          title: "Advanced Stability and Control",
          tabs: ["Stability", "Monitoring", "Visibility"],
          placeholder: "Photo: Wingle 7 safety systems",
          caption: "Electronic stability program with a reverse camera",
          features: [
            { title: "Electronic Stability Program" },
            { title: "Tire Pressure Monitoring System" },
            { title: "Reverse Camera" },
          ],
        },
        colors: [
          { name: "Black", value: "#050506" },
          { name: "Silver", value: "#a7abb2" },
          { name: "White", value: "#ffffff" },
        ],
        colorPlaceholder: "Photo: Wingle 7 in selected colour, studio",
        pricing: [
          { trim: "FL LUX Diesel", price: "58,000", vat: "8,700", priceWithVat: "66,700" },
          {
            trim: "FL LUX Diesel 4x4",
            price: "63,000",
            vat: "9,540",
            priceWithVat: "72,450",
          },
        ],
        pricingNote:
          "*Full specifications, models and options are available in the specifications brochure. Prices displayed are in SAR.",
        warranty: [
          "6 years or 150,000 km, whichever comes first (excludes wear-and-tear parts)",
        ],
        continueLabel: "Continue",
        specs: [
          {
            trimName: "FL LUX Diesel",
            rows: [
              { label: "Engine", value: "2.0L Turbo 4-Cylinder Diesel" },
              { label: "HP and Torque", value: "134 HP / 300 Nm" },
              { label: "Transmission", value: "6-Speed Manual" },
              { label: "Fuel Consumption", value: "14.9 km/L" },
              { label: "Drive Mode", value: "4WD" },
            ],
          },
          {
            trimName: "FL LUX Diesel 4x4",
            rows: [
              { label: "Engine", value: "2.0L Turbo 4-Cylinder Diesel" },
              { label: "HP and Torque", value: "134 HP / 300 Nm" },
              { label: "Transmission", value: "6-Speed Manual" },
              { label: "Fuel Consumption", value: "15.3 km/L" },
              { label: "Drive Mode", value: "RWD" },
            ],
          },
        ],
      },
    ],
    service: {
      hero: {
        eyebrow: "Owners & Aftersales",
        title: "Care that goes with more",
        intro:
          "Keep your GWM at its best with genuine service, transparent warranty and support wherever the journey takes you.",
        backLabel: "Back to home",
      },
      stats: [
        { value: "5 yr", label: "Vehicle warranty" },
        { value: "8 yr", label: "Battery warranty" },
        { value: "24/7", label: "Roadside help" },
      ],
      needsTitle: "Everything your GWM needs",
      needs: [
        {
          icon: "wrench",
          title: "Service & Maintenance",
          summary: "Scheduled servicing by GWM-trained technicians.",
        },
        {
          icon: "shield",
          title: "Warranty",
          summary: "Industry-leading 5-year cover with transparent terms.",
        },
        {
          icon: "manual",
          title: "Owner's Manuals",
          summary: "Download the handbook and guides for your model.",
        },
        {
          icon: "calendar",
          title: "Service Booking",
          summary: "Reserve a slot at your preferred dealer in a few taps.",
        },
        {
          icon: "heart",
          title: "GWM Care",
          summary: "The ownership programme that goes with you everywhere.",
        },
        {
          icon: "parts",
          title: "Genuine Parts",
          summary: "Engineered for your GWM — quality and fit guaranteed.",
        },
      ],
      plansTitle: "Prepaid peace of mind",
      plans: [
        {
          name: "Essential Care",
          price: "From AED 899 / yr",
          featured: false,
          features: [
            "Oil & filter change",
            "Multi-point inspection",
            "Fluid top-up",
            "Software updates",
          ],
          ctaLabel: "Choose Essential Care",
        },
        {
          name: "Total Care",
          price: "From AED 1,690 / yr",
          featured: true,
          badge: "Popular",
          features: [
            "Everything in Essential",
            "Brake & tyre service",
            "Cabin & AC service",
            "Priority booking",
            "Free pickup & drop-off",
          ],
          ctaLabel: "Choose Total Care",
        },
      ],
      ownership: {
        title: "Ownership that goes with more",
        summary:
          "GWM Care brings every ownership benefit together in one connected programme — so support is always a tap away.",
        features: [
          {
            icon: "roadside",
            title: "24/7 Roadside",
            summary: "Towing & emergency help region-wide.",
          },
          {
            icon: "app",
            title: "GWM App",
            summary: "Vehicle status & bookings on your phone.",
          },
          {
            icon: "bell",
            title: "Service Reminders",
            summary: "Never miss a scheduled service.",
          },
          {
            icon: "shield",
            title: "Warranty Tracking",
            summary: "View cover & history any time.",
          },
        ],
      },
      handbooksTitle: "Download your handbook",
      handbookKind: "Owner's Manual · PDF",
      findServiceLabel: "Find a service centre",
      faqTitle: "Frequently asked",
      faq: [
        {
          question: "How often should I service my GWM?",
          answer:
            "We recommend a service every 10,000 km or 12 months, whichever comes first. Your vehicle's on-board system will also remind you when a service is due.",
        },
        {
          question: "What does the warranty cover?",
          answer:
            "The 5-year vehicle warranty covers manufacturing defects across the powertrain, electronics and chassis, with an 8-year cover on hybrid and EV battery packs.",
        },
        {
          question: "Do you offer roadside assistance?",
          answer:
            "Yes — GWM Care includes 24/7 roadside assistance across all markets covered by this platform, including towing and emergency callouts.",
        },
        {
          question: "Can I book a service online?",
          answer:
            "The MVP captures your request and routes it to the selected market flow; live dealer slot booking is part of the forms and leads API epic.",
        },
      ],
    },
    forms: {
      hero: {
        eyebrow: "Get in touch",
        title: "Start your journey",
        intro:
          "Whether you'd like to book a test drive, request a brochure, or simply want to get in touch — we're here to help at every step.",
      },
      tabs: ["Test Drive", "Contact Us", "Fleet", "Brochure", "Delivery"],
      formTitle: "Book a Test Drive",
      formSubtitle: "Feel the road. Book a test drive at your nearest showroom.",
      fields: [
        { label: "First Name", placeholder: "Ahmed", half: true },
        { label: "Family Name", placeholder: "Al Rashid", half: true },
        { label: "Email", placeholder: "ahmed@email.com", type: "email", half: true },
        { label: "Phone", placeholder: "+971 50 000 0000", type: "tel", half: true },
        { label: "Country", placeholder: "Select country", type: "select", half: true },
        { label: "Model", placeholder: "Select model", type: "select", half: true },
        { label: "Preferred Date", placeholder: "", type: "date", half: true },
        { label: "Preferred Time", placeholder: "Any time", type: "select", half: true },
      ],
      notRobotLabel: "I'm not a robot",
      notRobotHint: "This helps us protect against unwanted messages.",
      consent:
        "I agree to the processing of my personal data by GWM and its authorized distributors to respond to this request, in accordance with the Privacy Policy (GDPR / PDPL).",
      submitLabel: "Request a Test Drive",
    },
    catalogue: {
      hero: {
        eyebrow: "Vehicle Catalogue",
        title: "Find your GWM.",
        intro: "Browse by brand, body style and powertrain.",
        placeholder: "Photo: GWM line-up, studio",
      },
      detailedSection: {
        eyebrow: "Line-up",
        title: "Regional-ready vehicles",
        summary:
          "Each card surfaces brand family, body type, powertrain and the next customer action.",
      },
      fullRangeSection: {
        eyebrow: "Full Range",
        title: "Explore the GWM family by brand",
        summary:
          "Model availability varies by market. Status reflects the current Saudi reference catalogue used to build this content seed; local launch and availability must be confirmed before publication.",
      },
      discoverLabel: "Discover",
      bookTestDriveLabel: "Book a Test Drive",
      viewDetailsLabel: "View details",
      statusLabels: {
        live: "Available now",
        referenced: "Selected markets",
        seed: "Coming soon",
      },
      brandFilter: { label: "Sort by manufacturer", allOption: "All manufacturers" },
    },
    news: {
      hero: {
        eyebrow: "News",
        title: "Latest market news and launches",
        intro:
          "Product launches, events and corporate stories from across the GWM Middle East network.",
        placeholder: "Photo: GWM newsroom",
      },
      section: {
        eyebrow: "Updates",
        title: "A focused editorial list",
      },
    },
    about: {
      hero: {
        eyebrow: "About GWM",
        title: "Technology built for better journeys",
        intro:
          "Great Wall Motor Middle East brings together SUVs, pickups, hybrid and electric mobility under one regional platform, backed by GWM's global engineering and manufacturing scale.",
        placeholder: "Photo: GWM global manufacturing",
      },
      sections: [
        {
          title: "GWM Overview",
          summary:
            "Great Wall Motor is a multi-brand automotive group building SUVs, pickups, hybrid and electric vehicles for markets around the world, including a growing regional presence across the Middle East.",
        },
        {
          title: "Global Footprint",
          summary:
            "GWM vehicles and aftersales support reach markets across Asia, Europe, Africa, Latin America and the Middle East, backed by regional distributor and dealer networks.",
        },
        {
          title: "Brand Portfolio",
          summary:
            "HAVAL, GWM TANK, ORA, WEY and GWM POER each address a distinct customer need — from family SUVs and luxury off-roaders to electric mobility and premium pickups.",
        },
        {
          title: "R&D and Intelligent Mobility",
          summary:
            "Ongoing investment in hybrid architectures, intelligent four-wheel drive and connected cockpit technology shapes every new GWM model.",
        },
        {
          title: "Manufacturing and Quality",
          summary:
            "Vehicles sold in this region are built to GWM's global manufacturing and quality standards, with market-specific specification and testing.",
        },
        {
          title: "Sustainability Direction",
          summary:
            "GWM is expanding its hybrid and electric line-up as part of a broader move toward lower-emission mobility across every brand.",
        },
      ],
      disclaimer:
        "Facts and figures on this page are illustrative placeholders; live metrics are centrally governed and dated before publication.",
    },
    offers: {
      hero: {
        eyebrow: "Offers",
        title: "Current offers for your market",
        intro:
          "Model-specific offers, updated by market. Pricing and finance terms shown here require local approval before publication.",
        placeholder: "Photo: GWM showroom promotion",
      },
      offers: [
        {
          brand: "HAVAL",
          model: "H6 HEV",
          title: "Complimentary service plan on H6 HEV",
          validity: "Ends 30 Sep 2026",
          terms:
            "Applies to new retail contracts signed within the offer period. Subject to dealer stock and market approval.",
          ctaLabel: "Get a Quote",
        },
        {
          brand: "TANK",
          model: "500",
          title: "Extended warranty upgrade on TANK 500",
          validity: "Ends 30 Sep 2026",
          terms:
            "Available on select trims while stocks last. Terms vary by market and are subject to change without notice.",
          ctaLabel: "Get a Quote",
        },
        {
          brand: "POER",
          model: "Commercial",
          title: "Fleet finance rates on POER Commercial",
          validity: "Ends 30 Sep 2026",
          terms:
            "For registered fleet and business customers. Finance rates require market approval.",
          ctaLabel: "Enquire for Fleet",
        },
      ],
      disclaimer:
        "All offers shown are indicative content seeds. Final pricing, finance terms and validity must be approved by the local market before publication.",
    },
  },
  ar: {
    home: getFallbackHomeContent("ar"),
    vehicles: [
      {
        slug: "all-new-h6",
        brand: "هافال",
        model: "All-New H6",
        bodyType: "SUV",
        powertrain: "بنزين",
        priceLabel: "يبدأ من 89,900 ريال",
        summary:
          "سيارة SUV عائلية متعددة الاستخدامات تجمع بين التصميم العصري والمساعدة الذكية والراحة في الرحلات الطويلة.",
        heroPlaceholder: "صورة: هافال H6 الجديدة كليًا، لقطة خارجية",
        heroMedia: {
          url: "/media/vehicles/all-new-h6/01_hero_exterior.webp",
          alt: "صورة خارجية لهافال H6 الجديدة كليًا",
        },
        spin360: {
          frames: buildSpinFrames("haval-h6-hev", "HAVAL_h6-hev_MY26_EXT360"),
          alt: "منظور دوراني 360 درجة لهافال H6 الجديدة كليًا",
        },
        quickStats: [
          { value: "SUV", unit: "", label: "النوع" },
          { value: "2.0T", unit: "235 حصان", label: "المحرك" },
          { value: "385", unit: "نيوتن متر", label: "عزم الدوران" },
          { value: "9DCT", unit: "", label: "ناقل الحركة" },
        ],
        whyCards: [
          {
            title: "هندسة تمنحك الثقة",
            summary:
              "عرض معلومات على الزجاج الأمامي (HUD)، ورؤية بانورامية بزاوية 540°، ونظام قيادة ذكي بأكثر من 18 وظيفة مساعدة، على هيكل مصنوع بنسبة 71% من الفولاذ عالي الصلابة.",
            placeholder: "صورة: تقنيات سلامة هافال H6 الجديدة",
            media: {
              url: "/media/vehicles/all-new-h6/02_exterior_lifestyle.webp",
              alt: "لقطة نمط حياة لهافال H6 الجديدة كليًا",
            },
          },
          {
            title: "مقصورة تستحق",
            summary:
              "شاشة وسطية 14.6 بوصة، تبريد للمقاعد، شنطة متعددة الاستخدامات، وتوافق لاسلكي مع Apple CarPlay وAndroid Auto.",
            placeholder: "صورة: مقصورة هافال H6 الجديدة",
            media: {
              url: "/media/vehicles/all-new-h6/03_interior_cockpit.webp",
              alt: "مقصورة قيادة هافال H6 الجديدة كليًا",
            },
          },
          {
            title: "ثقة بالتصميم",
            summary:
              "فتحة سقف بانورامية، أضواء نهارية عالية السطوع، وعجلات ألمنيوم مقاس 19 إنش.",
            placeholder: "صورة: هافال H6 الجديدة من الخلف",
            media: {
              url: "/media/vehicles/all-new-h6/05_rear_side_profile.webp",
              alt: "الجانب الخلفي لهافال H6 الجديدة كليًا",
            },
          },
        ],
        featureBanner: {
          tabs: ["السلامة", "التصميم الداخلي", "المظهر الخارجي"],
          title: "ابتكار ذكي بين يديك",
          description:
            "صُمّمت HAVAL H6 لتُعيد تعريف مفهوم القيادة العصرية، من خلال شاشة وسطية بقياس 14.6 بوصة وعرض معلومات على الزجاج الأمامي (HUD) ورؤية بانورامية بزاوية 540° وتحكم صوتي بدون الحاجة إلى اتصال.",
          stat: { value: "14.6 بوصة", label: "شاشة وسطية" },
          placeholder: "صورة: ميزة تقنية هافال H6 الجديدة",
          media: {
            url: "/media/vehicles/all-new-h6/04_feature_detail.webp",
            alt: "ميزة تقنية لهافال H6 الجديدة كليًا",
          },
        },
        details: {
          exterior: [
            {
              caption: "فتحة سقف بانورامية",
              placeholder: "صورة: تفاصيل فتحة السقف",
              media: {
                url: "/media/vehicles/all-new-h6/01_hero_exterior.webp",
                alt: "تفاصيل المظهر الأمامي لهافال H6 الجديدة كليًا",
              },
            },
            {
              caption: "أضواء نهارية عالية السطوع",
              placeholder: "صورة: تفاصيل الإضاءة النهارية",
              media: {
                url: "/media/vehicles/all-new-h6/02_exterior_lifestyle.webp",
                alt: "لقطة نمط حياة لهافال H6 الجديدة كليًا",
              },
            },
            {
              caption: "عجلات ألمنيوم مقاس 19 إنش",
              placeholder: "صورة: تفاصيل الجنط",
              media: {
                url: "/media/vehicles/all-new-h6/05_rear_side_profile.webp",
                alt: "تفاصيل جنط هافال H6 الجديدة كليًا",
              },
            },
          ],
          interior: [
            {
              caption: "شاشة وسطية 14.6 بوصة",
              placeholder: "صورة: تفاصيل شاشة المعلومات",
              media: {
                url: "/media/vehicles/all-new-h6/03_interior_cockpit.webp",
                alt: "مقصورة قيادة هافال H6 الجديدة كليًا",
              },
            },
            {
              caption: "شنطة متعددة الاستخدامات",
              placeholder: "صورة: تفاصيل الشنطة",
              media: {
                url: "/media/vehicles/all-new-h6/04_feature_detail.webp",
                alt: "ميزة هافال H6 الجديدة كليًا",
              },
            },
            {
              caption: "تبريد مقاعد",
              placeholder: "صورة: تفاصيل تبريد المقاعد",
            },
          ],
        },
        spinCaption:
          "اسحب لتدوير هافال H6 الجديدة كليًا، أو استخدم الشريط لاستكشاف كل زاوية.",
        safety: {
          title: "حماية متقدمة وثقة ذكية",
          tabs: ["الوسائد الهوائية", "القيادة الذكية", "هيكل السيارة"],
          placeholder: "صورة: أنظمة سلامة هافال H6 الجديدة",
          caption: "6 وسائد هوائية على هيكل 71% فولاذ عالي الصلابة",
          features: [
            { title: "عرض معلومات على الزجاج الأمامي (HUD)" },
            { title: "رؤية بانورامية بزاوية 540°" },
            { title: "نظام قيادة ذكي بأكثر من 18 وظيفة مساعدة" },
            { title: "هيكل فائق الصلابة بنسبة 71% فولاذ" },
          ],
        },
        colors: [
          { name: "أسود", value: "#050506" },
          { name: "أبيض لؤلؤي", value: "#f7f7f2" },
          { name: "جرافيت", value: "#343946" },
          { name: "أحمر", value: "#d50032" },
        ],
        colorPlaceholder: "صورة: هافال H6 الجديدة كليًا باللون المختار، استوديو",
        pricing: [
          { trim: "Active", price: "78,174", vat: "11,726", priceWithVat: "89,900" },
          { trim: "Premium", price: "86,000", vat: "12,900", priceWithVat: "98,900" },
        ],
        pricingNote:
          "*المواصفات الكاملة للمركبة، والموديلات، والخيارات متوفرة في كتيب المواصفات. الأسعار المعروضة بالريال السعودي.",
        warranty: [
          "10 سنوات مفتوح الكيلومترات للمحرك وناقل الحركة فقط",
          "6 سنوات أو 200 ألف كيلومتر أيهما أسبق على كامل السيارة ما عدا القطع الاستهلاكية",
        ],
        continueLabel: "متابعة",
        specs: [
          {
            rows: [
              { label: "المحرك", value: "2.0 لتر / 4 سلندر توربو" },
              { label: "القدرة الحصانية والعزم", value: "234 حصان / 385 نيوتن متر" },
              { label: "ناقل الحركة", value: "9 سرعات مزدوج الكلاتش (9DCT)" },
              { label: "استهلاك الوقود", value: "16.9 كم/لتر" },
              { label: "نظام القيادة", value: "دفع أمامي" },
            ],
          },
        ],
      },
      {
        slug: "tank-500",
        brand: "تانك",
        model: "500",
        bodyType: "SUV",
        powertrain: "بنزين",
        priceLabel: "يبدأ من 158,900 ريال",
        summary:
          "سيارة SUV فاخرة كبيرة تجمع بين الراحة الفائقة والحضور القوي على الطريق وهندسة موثوقة للطرق الوعرة.",
        heroPlaceholder: "صورة: تانك 500، لقطة خارجية",
        heroMedia: {
          url: "/media/vehicles/tank-500/01_hero_exterior.webp",
          alt: "لقطة المظهر الخارجي الرئيسية لتانك 500",
        },
        spin360: {
          frames: buildSpinFrames("tank-500", "TANK_tank-500_MY26_EXT360"),
          alt: "منظور دوراني 360 درجة للمظهر الخارجي لتانك 500",
        },
        quickStats: [
          { value: "SUV", unit: "", label: "النوع" },
          { value: "3.0", unit: "لتر", label: "المحرك" },
          { value: "500", unit: "نيوتن متر", label: "عزم الدوران" },
          { value: "9AT", unit: "", label: "ناقل الحركة" },
        ],
        whyCards: [
          {
            title: "ناقل حركة أوتوماتيكي سلس بـ9 سرعات",
            summary:
              "تبديلات تروس دقيقة وتوصيل مثالي للطاقة لتجربة أكثر هدوءًا وكفاءة، على الطريق السريع أو داخل المدينة.",
            placeholder: "صورة: تانك 500 على الطريق",
            media: {
              url: "/media/vehicles/tank-500/02_exterior_lifestyle.webp",
              alt: "لقطة نمط حياة لتانك 500",
            },
          },
          {
            title: "مقصورة تستحق",
            summary:
              "شاحن لاسلكي، مقاعد جلدية، شاشة 14.6 بوصة، وميزة تدليك للمقاعد الأمامية.",
            placeholder: "صورة: تانك 500 لوحة القيادة",
            media: {
              url: "/media/vehicles/tank-500/03_interior_cockpit.webp",
              alt: "مقصورة قيادة تانك 500",
            },
          },
          {
            title: "ثقة بالتصميم",
            summary:
              "كاميرا محيطية 360 درجة، مساعد الحفاظ على المسار، وتنبيه النقاط العمياء يدعمان حضورًا قويًا على الطريق.",
            placeholder: "صورة: تانك 500 خلفية جانبية",
            media: {
              url: "/media/vehicles/tank-500/05_rear_side_profile.webp",
              alt: "الجانب الخلفي لتانك 500",
            },
          },
        ],
        featureBanner: {
          tabs: ["السلامة", "التصميم الداخلي", "المظهر الخارجي"],
          title: "اتصال وترفيه متطور",
          description:
            "نظام الترفيه والمعلومات في Tank 500 يقدم مزيجاً سلساً من الاتصال والترفيه. استمتع بواجهة مستخدم بديهية، تكامل سهل مع الهواتف الذكية، وجودة صوت ممتازة.",
          stat: { value: "9AT", label: "ناقل حركة أوتوماتيكي" },
          placeholder: "صورة: ميزة تقنية تانك 500",
          media: {
            url: "/media/vehicles/tank-500/04_feature_detail.webp",
            alt: "ميزة تقنية لتانك 500",
          },
        },
        details: {
          exterior: [
            {
              caption: "إضاءات LED أمامية وخلفية",
              placeholder: "صورة: تفاصيل الإضاءة",
              media: {
                url: "/media/vehicles/tank-500/01_hero_exterior.webp",
                alt: "تفاصيل المظهر الأمامي لتانك 500",
              },
            },
            {
              caption: "فتحة سقف بانورامية",
              placeholder: "صورة: تفاصيل فتحة السقف",
              media: {
                url: "/media/vehicles/tank-500/04_feature_detail.webp",
                alt: "تفاصيل ميزة تانك 500",
              },
            },
            {
              caption: "زجاج عازل للصوت",
              placeholder: "صورة: تفاصيل الباب الخلفي",
              media: {
                url: "/media/vehicles/tank-500/05_rear_side_profile.webp",
                alt: "تفاصيل الجانب الخلفي لتانك 500",
              },
            },
          ],
          interior: [
            {
              caption: "شاحن لاسلكي",
              placeholder: "صورة: تفاصيل الشاحن اللاسلكي",
              media: {
                url: "/media/vehicles/tank-500/03_interior_cockpit.webp",
                alt: "مقصورة قيادة تانك 500",
              },
            },
            { caption: "مقاعد جلدية", placeholder: "صورة: تفاصيل المقاعد الجلدية" },
            {
              caption: "شاشة وسطية 14.6 بوصة",
              placeholder: "صورة: تفاصيل الشاشة الوسطية",
            },
          ],
        },
        spinCaption: "اسحب لتدوير TANK 500، أو استخدم الشريط لاستكشاف كل زاوية.",
        safety: {
          title: "مجموعة السلامة",
          tabs: ["الكاميرا", "مساعد المسار", "النقطة العمياء"],
          placeholder: "صورة: أنظمة سلامة تانك 500",
          caption: "كاميرا محيطية 360 درجة، مساعد الحفاظ على المسار، وتنبيه النقاط العمياء",
          features: [
            { title: "كاميرا محيطية 360 درجة" },
            { title: "مساعد الحفاظ على المسار" },
            { title: "تنبيه النقاط العمياء" },
          ],
        },
        colors: [
          { name: "أسود عميق", value: "#050506" },
          { name: "برونزي صحراوي", value: "#8a6a45" },
          { name: "رمادي", value: "#6f747d" },
          { name: "أبيض", value: "#ffffff" },
        ],
        colorPlaceholder: "صورة: تانك 500 باللون المختار، استوديو",
        pricing: [
          { trim: "Rock Elite", price: "192,900", vat: "28,935", priceWithVat: "221,835" },
          { trim: "Elite Urban", price: "188,900", vat: "28,335", priceWithVat: "217,235" },
          {
            trim: "Business Urban",
            price: "158,900",
            vat: "23,835",
            priceWithVat: "182,735",
          },
          { trim: "Business", price: "158,900", vat: "23,835", priceWithVat: "182,735" },
        ],
        pricingNote:
          "*المواصفات الكاملة للمركبة، والموديلات، والخيارات متوفرة في كتيب المواصفات. الأسعار المعروضة بالريال السعودي.",
        warranty: [
          "10 سنوات أو 1,000,000 كيلومتر أيهما أسبق للمحرك وناقل الحركة فقط",
          "6 سنوات أو 200 ألف كيلومتر أيهما أسبق على كامل السيارة ما عدا القطع الاستهلاكية",
        ],
        continueLabel: "متابعة",
        specs: [
          {
            rows: [
              { label: "المحرك", value: "3.0 لتر / 6 سلندر توربو" },
              { label: "القدرة الحصانية والعزم", value: "348 حصان / 500 نيوتن متر" },
              { label: "ناقل الحركة", value: "أوتوماتيكي 9 سرعات (9AT)" },
              { label: "استهلاك الوقود", value: "11.9 كم/لتر" },
              { label: "نظام القيادة", value: "دفع رباعي" },
            ],
          },
        ],
      },
      {
        slug: "poer-facelift",
        brand: "بوير",
        model: "Facelift",
        bodyType: "بيك أب",
        powertrain: "ديزل",
        priceLabel: "يبدأ من 88,900 ريال",
        summary:
          "بيك أب فاخر يجمع بين متطلبات العمل والعائلة والمغامرة، مع قدرات قوية وتقنيات اتصال داخل المقصورة.",
        heroPlaceholder: "صورة: بوير Facelift، لقطة خارجية",
        heroMedia: {
          url: "/media/vehicles/poer-facelift/01_hero_exterior.webp",
          alt: "لقطة المظهر الخارجي الرئيسية لبوير Facelift",
        },
        spin360: {
          frames: buildSpinFrames(
            "poer-commercial",
            "POER_poer-2-4t-commercial_MY26_EXT360",
          ),
          alt: "منظور دوراني 360 درجة للمظهر الخارجي لبوير Facelift",
        },
        quickStats: [
          { value: "بيك أب", unit: "", label: "النوع" },
          { value: "2.4T", unit: "", label: "المحرك" },
          { value: "480", unit: "نيوتن متر", label: "عزم الدوران" },
          { value: "9 سرعات", unit: "أوتوماتيكي", label: "ناقل الحركة" },
        ],
        whyCards: [
          {
            title: "أداء استثنائي",
            summary:
              "محرك الديزل الجديد 2.4T يقترن بناقل حركة أوتوماتيكي بـ9 سرعات لتسارع سلس وتحكم واثق على التضاريس الوعرة.",
            placeholder: "صورة: بوير Facelift على الطريق",
            media: {
              url: "/media/vehicles/poer-facelift/02_exterior_lifestyle.webp",
              alt: "لقطة نمط حياة لبوير Facelift",
            },
          },
          {
            title: "قيادة ذكية ومريحة",
            summary:
              "مقصورة واسعة بمقاعد جلدية، شاشة وسطية 12.3 إنش تدعم Apple CarPlay وAndroid Auto، ولوحة عدادات رقمية 7 إنش.",
            placeholder: "صورة: بوير Facelift لوحة القيادة",
            media: {
              url: "/media/vehicles/poer-facelift/03_interior_cockpit.webp",
              alt: "مقصورة قيادة بوير Facelift",
            },
          },
          {
            title: "جاهزة للاستكشاف",
            summary:
              "إطارات 265/60 R18، مفتاح ذكي مع تشغيل عن بُعد، وإضاءة LED كاملة أمامًا وخلفًا.",
            placeholder: "صورة: بوير Facelift خلفية جانبية",
            media: {
              url: "/media/vehicles/poer-facelift/05_rear_side_profile.webp",
              alt: "الجانب الخلفي لبوير Facelift",
            },
          },
        ],
        featureBanner: {
          tabs: ["مواصفات السلامة", "التصميم الداخلي", "المظهر الخارجي"],
          title: "قيادة ذكية ومريحة",
          description:
            "استمتع بقيادة مريحة مع تكنولوجيا متقدمة. تتميز بمقصورة واسعة، ومقاعد من الجلد لضمان راحة قصوى في الرحلات الطويلة، مع شاشة وسطية للترفيه مقاس 12.3 إنش تدعم Apple CarPlay وAndroid Auto، ولوحة عدادات رقمية مقاس 7 إنش.",
          stat: { value: "12.3 بوصة", label: "شاشة لمس" },
          placeholder: "صورة: ميزة تقنية بوير Facelift",
          media: {
            url: "/media/vehicles/poer-facelift/04_feature_detail.webp",
            alt: "ميزة تقنية لبوير Facelift",
          },
        },
        details: {
          exterior: [
            {
              caption: "إطارات 265/60 R18",
              placeholder: "صورة: تفاصيل الإطارات",
              media: {
                url: "/media/vehicles/poer-facelift/01_hero_exterior.webp",
                alt: "تفاصيل المظهر الأمامي لبوير Facelift",
              },
            },
            {
              caption: "مفتاح ذكي مع تشغيل عن بعد",
              placeholder: "صورة: تفاصيل المفتاح الذكي",
              media: {
                url: "/media/vehicles/poer-facelift/04_feature_detail.webp",
                alt: "تفاصيل ميزة بوير Facelift",
              },
            },
            {
              caption: "إضاءات LED وكشافات ضباب أمامية وخلفية",
              placeholder: "صورة: تفاصيل الإضاءة",
              media: {
                url: "/media/vehicles/poer-facelift/05_rear_side_profile.webp",
                alt: "تفاصيل إضاءة بوير Facelift",
              },
            },
          ],
          interior: [
            {
              caption: "شاشة لمس متعددة 12.3 إنش",
              placeholder: "صورة: تفاصيل شاشة المعلومات",
              media: {
                url: "/media/vehicles/poer-facelift/03_interior_cockpit.webp",
                alt: "مقصورة قيادة بوير Facelift",
              },
            },
            {
              caption: "Apple CarPlay وAndroid Auto",
              placeholder: "صورة: تفاصيل شاشة CarPlay",
            },
            {
              caption: "نظام صوت بـ6 مكبرات",
              placeholder: "صورة: تفاصيل مكبرات الصوت",
            },
          ],
        },
        spinCaption: "اسحب لتدوير بوير Facelift، أو استخدم الشريط لاستكشاف كل زاوية.",
        safety: {
          title: "ثبات وتحكم متقدمان",
          tabs: ["الوسائد الهوائية", "القيادة الذكية", "هيكل السيارة"],
          placeholder: "صورة: أنظمة سلامة بوير Facelift",
          caption: "مساعد تغيير المسار وكاميرا محيطية 360 درجة",
          features: [
            { title: "مساعد تغيير المسار (LCA)" },
            { title: "نظام تثبيت السرعة (CCS)" },
            { title: "كاميرا 360 درجة – نظام Omniview" },
            { title: "التعرف على إشارات المرور (TSR)" },
          ],
        },
        colors: [
          { name: "أسود", value: "#050506" },
          { name: "فضي", value: "#a7abb2" },
          { name: "أبيض", value: "#ffffff" },
          { name: "أزرق رمادي", value: "#27313f" },
        ],
        colorPlaceholder: "صورة: بوير Facelift باللون المختار، استوديو",
        pricing: [
          {
            trim: "FL LUX Diesel 2.0T",
            price: "88,900",
            vat: "13,335",
            priceWithVat: "102,235",
          },
          { trim: "FL LUX IND", price: "93,900", vat: "14,085", priceWithVat: "107,985" },
          { trim: "FL S-LUX IND", price: "99,900", vat: "14,985", priceWithVat: "114,885" },
        ],
        pricingNote:
          "*المواصفات الكاملة للمركبة، والموديلات، والخيارات متوفرة في كتيب المواصفات. الأسعار المعروضة بالريال السعودي.",
        warranty: [
          "6 سنوات أو 150 ألف كيلومتر أيهما أسبق على كامل السيارة ما عدا القطع الاستهلاكية",
        ],
        continueLabel: "متابعة",
        specs: [
          {
            trimName: "POER FL S-Luxury Diesel",
            rows: [
              { label: "المحرك", value: "2.4 لتر توربو 4 سلندر ديزل" },
              { label: "القدرة الحصانية والعزم", value: "181 حصان / 480 نيوتن متر" },
              { label: "ناقل الحركة", value: "أوتوماتيكي 9 سرعات" },
              { label: "استهلاك الوقود", value: "13.3 كم/لتر" },
              { label: "نظام القيادة", value: "دفع رباعي" },
            ],
          },
          {
            trimName: "POER FL Luxury Diesel",
            rows: [
              { label: "المحرك", value: "2.0 لتر توربو 4 سلندر ديزل" },
              { label: "القدرة الحصانية والعزم", value: "160 حصان / 400 نيوتن متر" },
              { label: "ناقل الحركة", value: "ZF أوتوماتيكي 8 سرعات" },
              { label: "استهلاك الوقود", value: "13.5 كم/لتر" },
              { label: "نظام القيادة", value: "دفع رباعي" },
            ],
          },
        ],
      },
      {
        slug: "wingle-7",
        brand: "بوير",
        model: "Wingle 7",
        bodyType: "بيك أب",
        powertrain: "بنزين/ديزل",
        priceLabel: "يبدأ من 58,000 ريال",
        summary:
          "بيك أب متعدد الاستخدامات يجمع بين الصلابة للعمل وراحة المقصورة العصرية وسهولة الاستخدام اليومي.",
        heroPlaceholder: "صورة: Wingle 7، لقطة خارجية",
        heroMedia: {
          url: "/media/vehicles/wingle-7/01_hero_exterior.webp",
          alt: "لقطة المظهر الخارجي الرئيسية لـ Wingle 7",
        },
        quickStats: [
          { value: "بيك أب", unit: "", label: "النوع" },
          { value: "4 سلندر", unit: "", label: "المحرك" },
          { value: "225", unit: "نيوتن متر", label: "عزم الدوران" },
          { value: "5 سرعات", unit: "يدوي", label: "ناقل الحركة" },
        ],
        whyCards: [
          {
            title: "لكل ظروف الطريق",
            summary:
              "أوضاع القيادة القياسية والرياضية والاقتصادية والثلجية تتكيف مع الطريق، مع توفر خياري البنزين والديزل.",
            placeholder: "صورة: Wingle 7 على الطريق",
            media: {
              url: "/media/vehicles/wingle-7/02_exterior_lifestyle.webp",
              alt: "لقطة نمط حياة لـ Wingle 7",
            },
          },
          {
            title: "تجربة صوت غامرة",
            summary: "نظام صوت بـ6 مكبرات يمنحك صوتًا غنيًا وواضحًا في كل رحلة.",
            placeholder: "صورة: Wingle 7 لوحة القيادة",
            media: {
              url: "/media/vehicles/wingle-7/03_interior_cockpit.webp",
              alt: "مقصورة قيادة Wingle 7",
            },
          },
          {
            title: "ثبات وتحكم متقدمان",
            summary:
              "برنامج الثبات الإلكتروني يقلل تلقائيًا من فقدان الثبات ليبقيك متحكمًا في القيادة.",
            placeholder: "صورة: Wingle 7 خلفية جانبية",
            media: {
              url: "/media/vehicles/wingle-7/05_rear_side_profile.webp",
              alt: "الجانب الخلفي لـ Wingle 7",
            },
          },
        ],
        featureBanner: {
          tabs: ["مواصفات السلامة", "التصميم الداخلي", "المظهر الخارجي"],
          title: "تجربة صوت غامرة",
          description:
            "استمتع بجودة صوت متفوقة مع نظام صوت مكون من 6 مكبرات. يوفر صوتًا غنيًا وواضحًا، ويحوّل مركبتك إلى قاعة حفلات متنقلة.",
          stat: { value: "6", label: "نظام صوت بمكبرات" },
          placeholder: "صورة: ميزة تقنية Wingle 7",
          media: {
            url: "/media/vehicles/wingle-7/04_feature_detail.webp",
            alt: "ميزة تقنية لـ Wingle 7",
          },
        },
        details: {
          exterior: [
            {
              caption: "عجلات سبيكة 16 بوصة",
              placeholder: "صورة: تفاصيل الجنط",
              media: {
                url: "/media/vehicles/wingle-7/01_hero_exterior.webp",
                alt: "تفاصيل المظهر الأمامي لـ Wingle 7",
              },
            },
          ],
          interior: [
            {
              caption: "نظام صوت بـ6 مكبرات",
              placeholder: "صورة: تفاصيل مكبرات الصوت",
              media: {
                url: "/media/vehicles/wingle-7/03_interior_cockpit.webp",
                alt: "مقصورة قيادة Wingle 7",
              },
            },
            {
              caption: "فلتر غبار",
              placeholder: "صورة: تفاصيل فلتر الهواء",
            },
          ],
        },
        spinCaption: "اسحب لتدوير Wingle 7، أو استخدم الشريط لاستكشاف كل زاوية.",
        safety: {
          title: "ثبات وتحكم متقدمان",
          tabs: ["الثبات", "المراقبة", "الرؤية"],
          placeholder: "صورة: أنظمة سلامة Wingle 7",
          caption: "برنامج ثبات إلكتروني مع كاميرا خلفية",
          features: [
            { title: "نظام الاستقرار الإلكتروني" },
            { title: "نظام مراقبة ضغط الإطارات" },
            { title: "كاميرا الرجوع للخلف" },
          ],
        },
        colors: [
          { name: "أسود", value: "#050506" },
          { name: "فضي", value: "#a7abb2" },
          { name: "أبيض", value: "#ffffff" },
        ],
        colorPlaceholder: "صورة: Wingle 7 باللون المختار، استوديو",
        pricing: [
          { trim: "FL LUX Diesel", price: "58,000", vat: "8,700", priceWithVat: "66,700" },
          {
            trim: "FL LUX Diesel 4x4",
            price: "63,000",
            vat: "9,540",
            priceWithVat: "72,450",
          },
        ],
        pricingNote:
          "*المواصفات الكاملة للمركبة، والموديلات، والخيارات متوفرة في كتيب المواصفات. الأسعار المعروضة بالريال السعودي.",
        warranty: [
          "6 سنوات أو 150 ألف كيلومتر أيهما أسبق على كامل السيارة ما عدا القطع الاستهلاكية",
        ],
        continueLabel: "متابعة",
        specs: [
          {
            trimName: "FL LUX Diesel",
            rows: [
              { label: "المحرك", value: "2.0 لتر توربو 4 سلندر ديزل" },
              { label: "القدرة الحصانية والعزم", value: "134 حصان / 300 نيوتن متر" },
              { label: "ناقل الحركة", value: "يدوي 6 سرعات" },
              { label: "استهلاك الوقود", value: "14.9 كم/لتر" },
              { label: "نظام القيادة", value: "دفع رباعي" },
            ],
          },
          {
            trimName: "FL LUX Diesel 4x4",
            rows: [
              { label: "المحرك", value: "2.0 لتر توربو 4 سلندر ديزل" },
              { label: "القدرة الحصانية والعزم", value: "134 حصان / 300 نيوتن متر" },
              { label: "ناقل الحركة", value: "يدوي 6 سرعات" },
              { label: "استهلاك الوقود", value: "15.3 كم/لتر" },
              { label: "نظام القيادة", value: "دفع خلفي" },
            ],
          },
        ],
      },
    ],
    service: {
      hero: {
        eyebrow: "الملكية وخدمات ما بعد البيع",
        title: "عناية ترافقك أكثر",
        intro:
          "حافظ على أفضل أداء لسيارتك GWM مع صيانة أصلية، وضمان شفاف، ودعم أينما أخذتك الرحلة.",
        backLabel: "العودة للرئيسية",
      },
      stats: [
        { value: "5 سنوات", label: "ضمان المركبة" },
        { value: "8 سنوات", label: "ضمان البطارية" },
        { value: "24/7", label: "مساعدة على الطريق" },
      ],
      needsTitle: "كل ما تحتاجه سيارتك GWM",
      needs: [
        {
          icon: "wrench",
          title: "الصيانة",
          summary: "صيانة مجدولة بواسطة فنيين مدربين من GWM.",
        },
        {
          icon: "shield",
          title: "الضمان",
          summary: "تغطية رائدة لمدة 5 سنوات بشروط شفافة.",
        },
        {
          icon: "manual",
          title: "أدلة المالك",
          summary: "حمّل الدليل والكتيبات الخاصة بطرازك.",
        },
        {
          icon: "calendar",
          title: "حجز الصيانة",
          summary: "احجز موعداً لدى وكيلك المفضل خلال ثوانٍ.",
        },
        {
          icon: "heart",
          title: "عناية GWM",
          summary: "برنامج الملكية الذي يرافقك أينما ذهبت.",
        },
        {
          icon: "parts",
          title: "قطع غيار أصلية",
          summary: "مصممة لسيارتك GWM — جودة وملاءمة مضمونة.",
        },
      ],
      plansTitle: "راحة بال مسبقة الدفع",
      plans: [
        {
          name: "العناية الأساسية",
          price: "تبدأ من 899 درهم / سنة",
          featured: false,
          features: [
            "تغيير الزيت والفلتر",
            "فحص شامل متعدد النقاط",
            "تعبئة السوائل",
            "تحديثات البرامج",
          ],
          ctaLabel: "اختر العناية الأساسية",
        },
        {
          name: "العناية الشاملة",
          price: "تبدأ من 1,690 درهم / سنة",
          featured: true,
          badge: "الأكثر طلباً",
          features: [
            "كل ما في العناية الأساسية",
            "خدمة الفرامل والإطارات",
            "خدمة المقصورة والتكييف",
            "أولوية الحجز",
            "استلام وتوصيل مجاني",
          ],
          ctaLabel: "اختر العناية الشاملة",
        },
      ],
      ownership: {
        title: "ملكية ترافقك أكثر",
        summary:
          "يجمع برنامج عناية GWM كل مزايا الملكية في برنامج واحد متصل — بحيث يكون الدعم دائماً في متناول يدك.",
        features: [
          {
            icon: "roadside",
            title: "مساعدة 24/7",
            summary: "سحب ومساعدة طارئة في كل المنطقة.",
          },
          {
            icon: "app",
            title: "تطبيق GWM",
            summary: "حالة السيارة والحجوزات على هاتفك.",
          },
          { icon: "bell", title: "تذكير بالصيانة", summary: "لن تفوتك أي صيانة مجدولة." },
          {
            icon: "shield",
            title: "تتبع الضمان",
            summary: "اطلع على التغطية والسجل في أي وقت.",
          },
        ],
      },
      handbooksTitle: "حمّل دليل المالك",
      handbookKind: "دليل المالك · PDF",
      findServiceLabel: "ابحث عن مركز صيانة",
      faqTitle: "الأسئلة الشائعة",
      faq: [
        {
          question: "كم مرة يجب أن أصيّن سيارتي GWM؟",
          answer:
            "ننصح بالصيانة كل 10,000 كم أو 12 شهراً أيهما أقرب. سيذكرك النظام المدمج في سيارتك أيضاً عند حلول موعد الصيانة.",
        },
        {
          question: "ماذا يغطي الضمان؟",
          answer:
            "يغطي ضمان المركبة لمدة 5 سنوات عيوب التصنيع في منظومة الحركة والإلكترونيات والهيكل، مع تغطية 8 سنوات لحزم بطاريات الهايبرد والكهربائية.",
        },
        {
          question: "هل تقدمون مساعدة على الطريق؟",
          answer:
            "نعم — يشمل برنامج عناية GWM مساعدة على الطريق على مدار الساعة في جميع الأسواق المشمولة بهذه المنصة.",
        },
        {
          question: "هل يمكنني حجز الصيانة عبر الإنترنت؟",
          answer:
            "يلتقط MVP طلبك ويوجهه إلى مسار السوق المحدد؛ سيكون حجز مواعيد الوكلاء المباشر جزءاً من ملحمة النماذج والعملاء.",
        },
      ],
    },
    forms: {
      hero: {
        eyebrow: "تواصل معنا",
        title: "ابدأ رحلتك",
        intro:
          "سواء كنت ترغب في حجز تجربة قيادة، أو طلب كتيّب، أو ببساطة تريد التواصل معنا - نحن هنا لمساعدتك في كل خطوة على الطريق.",
      },
      tabs: ["تجربة القيادة", "اتصل بنا", "الأسطول", "الكتيب", "الاستلام"],
      formTitle: "احجز تجربة قيادة",
      formSubtitle: "اشعر بالطريق. احجز تجربة قيادة في أقرب صالة عرض.",
      fields: [
        { label: "الاسم الأول", placeholder: "أحمد", half: true },
        { label: "اسم العائلة", placeholder: "الراشد", half: true },
        {
          label: "البريد الإلكتروني",
          placeholder: "ahmed@email.com",
          type: "email",
          half: true,
        },
        { label: "الهاتف", placeholder: "+971 50 000 0000", type: "tel", half: true },
        { label: "الدولة", placeholder: "اختر الدولة", type: "select", half: true },
        {
          label: "الموديل المطلوب",
          placeholder: "اختر الموديل",
          type: "select",
          half: true,
        },
        { label: "التاريخ المفضل", placeholder: "", type: "date", half: true },
        { label: "الوقت المفضل", placeholder: "أي وقت", type: "select", half: true },
      ],
      notRobotLabel: "أنا لست روبوت",
      notRobotHint: "يساعدنا هذا في الحماية من الرسائل غير المرغوب فيها.",
      consent:
        "أوافق على معالجة بياناتي الشخصية من قبل GWM وموزعيها المعتمدين للرد على هذا الطلب، وفقاً لسياسة الخصوصية (GDPR / PDPL).",
      submitLabel: "طلب تجربة قيادة",
    },
    catalogue: {
      hero: {
        eyebrow: "كتالوج السيارات",
        title: "اعثر على GWM المناسبة لك",
        intro: "تصفح حسب العلامة ونوع الهيكل ونظام الدفع.",
        placeholder: "صورة: تشكيلة GWM، استوديو",
      },
      detailedSection: {
        eyebrow: "المجموعة",
        title: "مركبات جاهزة للمنطقة",
        summary: "كل بطاقة تعرض العائلة، نوع الهيكل، منظومة الحركة ومسار الطلب التالي.",
      },
      fullRangeSection: {
        eyebrow: "التشكيلة الكاملة",
        title: "استكشف عائلة GWM حسب العلامة",
        summary:
          "يختلف توفر الطراز حسب السوق. تعكس الحالة المعروضة كتالوج السعودية المرجعي الحالي المستخدم لإعداد هذا المحتوى؛ يجب تأكيد الإطلاق والتوفر المحلي قبل النشر.",
      },
      discoverLabel: "اكتشف",
      bookTestDriveLabel: "احجز تجربة قيادة",
      viewDetailsLabel: "عرض التفاصيل",
      statusLabels: {
        live: "متوفرة حالياً",
        referenced: "أسواق مختارة",
        seed: "قريباً",
      },
      brandFilter: { label: "الترتيب حسب الشركة المصنعة", allOption: "كل الشركات المصنعة" },
    },
    news: {
      hero: {
        eyebrow: "الأخبار",
        title: "أحدث أخبار السوق والإطلاقات",
        intro: "إطلاقات المنتجات والفعاليات وأخبار الشركة من شبكة GWM في الشرق الأوسط.",
        placeholder: "صورة: غرفة أخبار GWM",
      },
      section: {
        eyebrow: "المستجدات",
        title: "قائمة تحريرية مركزة",
      },
    },
    about: {
      hero: {
        eyebrow: "عن GWM",
        title: "تقنيات مصممة لرحلات أفضل",
        intro:
          "تجمع جريت وول موتور في الشرق الأوسط سيارات SUV والبيك أب والتنقل الهجين والكهربائي في منصة إقليمية واحدة، بدعم من نطاق الهندسة والتصنيع العالمي لـ GWM.",
        placeholder: "صورة: تصنيع GWM العالمي",
      },
      sections: [
        {
          title: "نظرة عامة على GWM",
          summary:
            "شركة جريت وول موتور مجموعة سيارات متعددة العلامات تصنع سيارات SUV والبيك أب والمركبات الهجينة والكهربائية لأسواق حول العالم، مع حضور إقليمي متنامٍ في الشرق الأوسط.",
        },
        {
          title: "الحضور العالمي",
          summary:
            "تصل سيارات GWM وخدمات ما بعد البيع إلى أسواق في آسيا وأوروبا وأفريقيا وأمريكا اللاتينية والشرق الأوسط، بدعم من شبكات موزعين ووكلاء إقليمية.",
        },
        {
          title: "محفظة العلامات",
          summary:
            "تلبي كل من هافال وجي دبليو إم تانك وأورا ووي وجي دبليو إم بوير حاجة مختلفة للعملاء - من سيارات SUV العائلية إلى الطرازات الفاخرة للطرق الوعرة والتنقل الكهربائي والبيك أب الفاخرة.",
        },
        {
          title: "البحث والتطوير والتنقل الذكي",
          summary:
            "استثمار مستمر في الأنظمة الهجينة والدفع الرباعي الذكي وتقنيات المقصورة المتصلة يشكل كل طراز جديد من GWM.",
        },
        {
          title: "التصنيع والجودة",
          summary:
            "تُصنع السيارات المباعة في هذه المنطقة وفق معايير GWM العالمية للتصنيع والجودة، مع مواصفات واختبارات خاصة بكل سوق.",
        },
        {
          title: "توجهات الاستدامة",
          summary:
            "تعمل GWM على توسيع تشكيلتها الهجينة والكهربائية كجزء من توجه أوسع نحو تنقل أقل انبعاثات في جميع علاماتها.",
        },
      ],
      disclaimer:
        "الأرقام والحقائق في هذه الصفحة هي عناصر توضيحية مؤقتة؛ يتم إدارة المقاييس الفعلية مركزياً وتحديد تاريخها قبل النشر.",
    },
    offers: {
      hero: {
        eyebrow: "العروض",
        title: "العروض الحالية في سوقك",
        intro:
          "عروض خاصة بكل طراز، مُحدثة حسب السوق. تتطلب الأسعار وشروط التمويل الظاهرة هنا اعتماد السوق قبل النشر.",
        placeholder: "صورة: عرض ترويجي في صالة عرض GWM",
      },
      offers: [
        {
          brand: "هافال",
          model: "H6 HEV",
          title: "خطة صيانة مجانية مع H6 HEV",
          validity: "ينتهي في 30 سبتمبر 2026",
          terms:
            "تنطبق على عقود البيع الجديدة الموقعة خلال فترة العرض. تخضع لتوفر المخزون واعتماد السوق.",
          ctaLabel: "اطلب عرض سعر",
        },
        {
          brand: "تانك",
          model: "500",
          title: "ترقية ضمان ممتد مع TANK 500",
          validity: "ينتهي في 30 سبتمبر 2026",
          terms:
            "متوفر على فئات مختارة حتى نفاد الكمية. تختلف الشروط حسب السوق وقابلة للتغيير دون إشعار.",
          ctaLabel: "اطلب عرض سعر",
        },
        {
          brand: "بوير",
          model: "Commercial",
          title: "أسعار تمويل للأساطيل مع بوير Commercial",
          validity: "ينتهي في 30 سبتمبر 2026",
          terms: "لعملاء الأساطيل والأعمال المسجلين. تتطلب أسعار التمويل اعتماد السوق.",
          ctaLabel: "استفسار للأساطيل",
        },
      ],
      disclaimer:
        "جميع العروض المعروضة هي محتوى تجريبي إرشادي. يجب اعتماد الأسعار النهائية وشروط التمويل وفترة الصلاحية من السوق المحلي قبل النشر.",
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
