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
export type Trim = { name: string; price: string; featured: boolean; note?: string };

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
    features: Array<{ title: string; summary: string }>;
  };
  colors: Array<{ name: string; value: string }>;
  colorPlaceholder: string;
  trims: Trim[];
  continueLabel: string;
  specs: Array<{ label: string; value: string }>;
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
        slug: "haval-h6-hev",
        brand: "HAVAL",
        model: "H6 HEV",
        bodyType: "SUV",
        powertrain: "Hybrid",
        priceLabel: "Starting from AED 109,900",
        summary:
          "An intelligent hybrid SUV built for family use, daily efficiency and confident regional travel.",
        heroPlaceholder: "Photo: Haval H6 HEV, action shot",
        heroMedia: {
          url: "/media/product-hero.png",
          alt: "Haval H6 HEV on a desert highway at dusk",
        },
        spin360: {
          frames: buildSpinFrames("haval-h6-hev", "HAVAL_h6-hev_MY26_EXT360"),
          alt: "360 degree exterior spin of the Haval H6 HEV",
        },
        quickStats: [
          { value: "245", unit: "PS", label: "Combined power" },
          { value: "530", unit: "km", label: "Hybrid range" },
          { value: "5.4", unit: "L/100km", label: "Fuel economy" },
          { value: "5", unit: "seats", label: "Family cabin" },
        ],
        whyCards: [
          {
            title: "Built for Every Commute",
            summary: "Smart hybrid tuning delivers effortless city and highway driving.",
            placeholder: "Photo: H6 HEV city driving",
            media: {
              url: "/media/vehicles/haval-h6-hev/02_exterior_lifestyle.webp",
              alt: "Haval H6 HEV exterior lifestyle shot",
            },
          },
          {
            title: "A Cabin That Rewards",
            summary: "A 14.6-inch display, connected apps and quiet cabin materials.",
            placeholder: "Photo: H6 HEV cabin dashboard",
            media: {
              url: "/media/vehicles/haval-h6-hev/03_interior_cockpit.webp",
              alt: "Haval H6 HEV interior cockpit",
            },
          },
          {
            title: "Confidence by Design",
            summary:
              "A wide stance and driver-assistance suite built for family peace of mind.",
            placeholder: "Photo: H6 HEV rear three-quarter",
            media: {
              url: "/media/vehicles/haval-h6-hev/05_rear_side_profile.webp",
              alt: "Haval H6 HEV rear side profile",
            },
          },
        ],
        featureBanner: {
          tabs: ["Hybrid System", "Safety Suite", "Coffee OS", "Efficiency"],
          title: "Intelligent Hybrid Drive",
          description:
            "By coordinating the engine and electric motor, the H6 HEV blends smooth power delivery with everyday efficiency.",
          stat: { value: "5.4L", label: "Fuel economy per 100km" },
          placeholder: "Photo: H6 HEV hybrid powertrain feature",
          media: {
            url: "/media/vehicles/haval-h6-hev/04_feature_detail.webp",
            alt: "Haval H6 HEV hybrid powertrain feature",
          },
        },
        details: {
          exterior: [
            {
              caption: "Full LED headlights & signature grille",
              placeholder: "Photo: front grille detail",
              media: {
                url: "/media/vehicles/haval-h6-hev/01_hero_exterior.webp",
                alt: "Haval H6 HEV front exterior detail",
              },
            },
            {
              caption: "18-inch machined alloy wheels",
              placeholder: "Photo: alloy wheel detail",
              media: {
                url: "/media/vehicles/haval-h6-hev/04_feature_detail.webp",
                alt: "Haval H6 HEV feature detail",
              },
            },
            {
              caption: "Tailgate-mounted spare styling cues",
              placeholder: "Photo: rear tailgate detail",
              media: {
                url: "/media/vehicles/haval-h6-hev/05_rear_side_profile.webp",
                alt: "Haval H6 HEV rear tailgate detail",
              },
            },
          ],
          interior: [
            {
              caption: "14.6-inch Coffee OS touchscreen",
              placeholder: "Photo: infotainment screen detail",
              media: {
                url: "/media/vehicles/haval-h6-hev/03_interior_cockpit.webp",
                alt: "Haval H6 HEV interior cockpit",
              },
            },
            {
              caption: "Heated and ventilated front seats",
              placeholder: "Photo: front seat detail",
            },
            {
              caption: "Dual-zone climate console",
              placeholder: "Photo: climate console detail",
            },
          ],
        },
        spinCaption: "Drag to spin the H6 HEV, or use the slider to explore every angle.",
        safety: {
          title: "Engineered to Protect",
          tabs: ["Airbags", "Intelligent Driving", "Body Structure"],
          placeholder: "Photo: H6 HEV safety X-ray diagram",
          caption: "7-airbag protection",
          features: [
            {
              title: "Dual front airbags",
              summary: "Comprehensive airbag array whether every occupant is seated.",
            },
            {
              title: "Front seat side airbags",
              summary: "Dual front side and full-length side curtain airbags.",
            },
            {
              title: "Full-height side curtains",
              summary: "Extended coverage across all rows of seating.",
            },
            {
              title: "Driver knee airbag",
              summary: "Additional lower-body protection for the driver.",
            },
          ],
        },
        colors: [
          { name: "Obsidian Black", value: "#050506" },
          { name: "Pearl White", value: "#f7f7f2" },
          { name: "Graphite", value: "#343946" },
          { name: "Signal Red", value: "#d50032" },
        ],
        colorPlaceholder: "Photo: H6 HEV in selected colour, studio",
        trims: [
          { name: "Elite", price: "AED 109,900", featured: false },
          { name: "Premium", price: "AED 119,900", featured: true, note: "Most popular" },
          { name: "Ultra", price: "AED 129,900", featured: false },
        ],
        continueLabel: "Continue",
        specs: [
          { label: "Engine & Performance", value: "1.5T Hybrid" },
          { label: "Max Power", value: "245 PS" },
          { label: "Max Torque", value: "530 Nm combined" },
          { label: "Transmission", value: "DHT 2-speed" },
          { label: "Drivetrain", value: "Front-wheel drive" },
          { label: "Body", value: "5-seat SUV" },
          { label: "Dimensions", value: "4,653 × 1,886 × 1,730 mm" },
        ],
      },
      {
        slug: "tank-500",
        brand: "TANK",
        model: "500",
        bodyType: "SUV",
        powertrain: "Petrol",
        priceLabel: "Starting from AED 149,900",
        summary:
          "A premium body-on-frame SUV with long-distance comfort and serious all-terrain capability.",
        heroPlaceholder: "Photo: Tank 500 desert action shot",
        heroMedia: {
          url: "/media/vehicles/tank-500/01_hero_exterior.webp",
          alt: "TANK 500 exterior hero shot",
        },
        spin360: {
          frames: buildSpinFrames("tank-500", "TANK_tank-500_MY26_EXT360"),
          alt: "360 degree exterior spin of the TANK 500",
        },
        quickStats: [
          { value: "354", unit: "PS", label: "Twin-turbo power" },
          { value: "480", unit: "Nm", label: "Peak torque" },
          { value: "700", unit: "km", label: "Touring range" },
          { value: "33", unit: "°", label: "Approach angle" },
        ],
        whyCards: [
          {
            title: "Built for Every Terrain",
            summary:
              "Selectable terrain modes and a locking centre differential for serious off-road control.",
            placeholder: "Photo: Tank 500 off-road climb",
            media: {
              url: "/media/vehicles/tank-500/02_exterior_lifestyle.webp",
              alt: "TANK 500 exterior lifestyle shot",
            },
          },
          {
            title: "A Cabin That Rewards",
            summary:
              "Twin 12.3-inch displays, napa leather seats and a full-length panoramic roof.",
            placeholder: "Photo: Tank 500 cabin dashboard",
            media: {
              url: "/media/vehicles/tank-500/03_interior_cockpit.webp",
              alt: "TANK 500 interior cockpit",
            },
          },
          {
            title: "Iconic by Design",
            summary:
              "A boxy, retro-modern silhouette with a spare wheel mounted tailgate.",
            placeholder: "Photo: Tank 500 rear three-quarter",
            media: {
              url: "/media/vehicles/tank-500/05_rear_side_profile.webp",
              alt: "TANK 500 rear side profile",
            },
          },
        ],
        featureBanner: {
          tabs: ["Tank Turn", "Hi4-T Hybrid", "Coffee OS", "All-Terrain"],
          title: "Intelligent Tank Turn",
          description:
            "By independently braking the wheels, the TANK 500 pivots around its own axis — turning tight switchbacks and narrow trails into effortless manoeuvres.",
          stat: { value: "=0m", label: "Turning radius on roll" },
          placeholder: "Photo: Tank 500 tank-turn demonstration",
          media: {
            url: "/media/vehicles/tank-500/04_feature_detail.webp",
            alt: "TANK 500 tank-turn feature demonstration",
          },
        },
        details: {
          exterior: [
            {
              caption: "Round LED headlights & signature grille",
              placeholder: "Photo: front grille detail",
              media: {
                url: "/media/vehicles/tank-500/01_hero_exterior.webp",
                alt: "TANK 500 front exterior detail",
              },
            },
            {
              caption: "18-inch all-terrain alloy wheels",
              placeholder: "Photo: alloy wheel detail",
              media: {
                url: "/media/vehicles/tank-500/04_feature_detail.webp",
                alt: "TANK 500 feature detail",
              },
            },
            {
              caption: "Tailgate-mounted spare wheel",
              placeholder: "Photo: rear tailgate detail",
              media: {
                url: "/media/vehicles/tank-500/05_rear_side_profile.webp",
                alt: "TANK 500 rear tailgate detail",
              },
            },
          ],
          interior: [
            {
              caption: "Twin 12.3-inch digital displays",
              placeholder: "Photo: dashboard display detail",
              media: {
                url: "/media/vehicles/tank-500/03_interior_cockpit.webp",
                alt: "TANK 500 interior cockpit",
              },
            },
            {
              caption: "Quilted napa leather seats",
              placeholder: "Photo: seat stitching detail",
            },
            {
              caption: "Full-length panoramic roof",
              placeholder: "Photo: panoramic roof detail",
            },
          ],
        },
        spinCaption:
          "Drag to spin the TANK 500, or use the slider to explore every angle.",
        safety: {
          title: "Engineered to Protect",
          tabs: ["Airbags", "Intelligent Driving", "Body Structure"],
          placeholder: "Photo: Tank 500 safety X-ray diagram",
          caption: "7-airbag protection",
          features: [
            {
              title: "Dual front airbags",
              summary: "Comprehensive airbag array whether every occupant is seated.",
            },
            {
              title: "Front seat side airbags",
              summary: "Dual front side and full-length side curtain airbags.",
            },
            {
              title: "Full-height side curtains",
              summary: "Extended coverage across all rows of seating.",
            },
            {
              title: "Driver knee airbag",
              summary: "Additional lower-body protection for the driver.",
            },
          ],
        },
        colors: [
          { name: "Deep Black", value: "#050506" },
          { name: "Desert Bronze", value: "#8a6a45" },
          { name: "Steel Gray", value: "#6f747d" },
          { name: "White", value: "#ffffff" },
        ],
        colorPlaceholder: "Photo: Tank 500 in selected colour, studio",
        trims: [
          { name: "Adventure", price: "AED 149,900", featured: false },
          { name: "Lux", price: "AED 164,900", featured: true, note: "Most popular" },
          { name: "Ultra", price: "AED 178,900", featured: false },
        ],
        continueLabel: "Continue",
        specs: [
          { label: "Engine & Performance", value: "3.0T Turbocharged Petrol" },
          { label: "Max Power", value: "354 PS @ 5,500 rpm" },
          { label: "Max Torque", value: "480 Nm @ 1,800–5,000 rpm" },
          { label: "Transmission", value: "9-Speed Automatic" },
          { label: "Drivetrain", value: "Selectable 4WD" },
          { label: "Off-Road Capability", value: "Locking centre & rear differential" },
          { label: "Dimensions", value: "5,078 × 1,934 × 1,905 mm" },
        ],
      },
      {
        slug: "poer-commercial",
        brand: "POER",
        model: "Commercial",
        bodyType: "Pickup",
        powertrain: "Diesel",
        priceLabel: "Starting from AED 99,900",
        summary:
          "A durable pickup for business, utility and weekend use with the comfort expected from a modern cabin.",
        heroPlaceholder: "Photo: Poer Commercial work-site action shot",
        heroMedia: {
          url: "/media/vehicles/poer-commercial/01_hero_exterior.webp",
          alt: "POER 2.4T Commercial exterior hero shot",
        },
        spin360: {
          frames: buildSpinFrames(
            "poer-commercial",
            "POER_poer-2-4t-commercial_MY26_EXT360",
          ),
          alt: "360 degree exterior spin of the POER Commercial",
        },
        quickStats: [
          { value: "184", unit: "PS", label: "Diesel power" },
          { value: "480", unit: "Nm", label: "Peak torque" },
          { value: "1,000", unit: "kg", label: "Payload capacity" },
          { value: "3,500", unit: "kg", label: "Towing capacity" },
        ],
        whyCards: [
          {
            title: "Built for Every Job",
            summary: "A reinforced ladder-frame chassis rated for heavy daily loads.",
            placeholder: "Photo: Poer Commercial loaded bed",
            media: {
              url: "/media/vehicles/poer-commercial/02_exterior_lifestyle.webp",
              alt: "POER Commercial exterior lifestyle shot",
            },
          },
          {
            title: "A Cabin That Rewards",
            summary:
              "A 12.3-inch display, durable trim and comfortable long-shift seating.",
            placeholder: "Photo: Poer Commercial cabin dashboard",
            media: {
              url: "/media/vehicles/poer-commercial/03_interior_cockpit.webp",
              alt: "POER Commercial interior cockpit",
            },
          },
          {
            title: "Work-Ready by Design",
            summary:
              "A double-cab layout with a wide bed and tie-down rated load points.",
            placeholder: "Photo: Poer Commercial rear three-quarter",
            media: {
              url: "/media/vehicles/poer-commercial/05_rear_side_profile.webp",
              alt: "POER Commercial rear side profile",
            },
          },
        ],
        featureBanner: {
          tabs: ["4WD System", "Payload", "Coffee OS", "Durability"],
          title: "Built to Carry More",
          description:
            "A reinforced frame, multi-link rear suspension and selectable 4WD keep the Poer Commercial steady under heavy loads and on loose terrain.",
          stat: { value: "1,000kg", label: "Maximum payload" },
          placeholder: "Photo: Poer Commercial towing demonstration",
          media: {
            url: "/media/vehicles/poer-commercial/04_feature_detail.webp",
            alt: "POER Commercial towing feature demonstration",
          },
        },
        details: {
          exterior: [
            {
              caption: "LED headlights & signature grille",
              placeholder: "Photo: front grille detail",
              media: {
                url: "/media/vehicles/poer-commercial/01_hero_exterior.webp",
                alt: "POER Commercial front exterior detail",
              },
            },
            {
              caption: "17-inch work-rated alloy wheels",
              placeholder: "Photo: alloy wheel detail",
              media: {
                url: "/media/vehicles/poer-commercial/04_feature_detail.webp",
                alt: "POER Commercial feature detail",
              },
            },
            {
              caption: "Reinforced load bed & tie-downs",
              placeholder: "Photo: load bed detail",
              media: {
                url: "/media/vehicles/poer-commercial/05_rear_side_profile.webp",
                alt: "POER Commercial load bed detail",
              },
            },
          ],
          interior: [
            {
              caption: "12.3-inch Coffee OS touchscreen",
              placeholder: "Photo: infotainment screen detail",
              media: {
                url: "/media/vehicles/poer-commercial/03_interior_cockpit.webp",
                alt: "POER Commercial interior cockpit",
              },
            },
            {
              caption: "Durable wear-resistant upholstery",
              placeholder: "Photo: seat upholstery detail",
            },
            {
              caption: "Double-cab rear bench seating",
              placeholder: "Photo: rear bench detail",
            },
          ],
        },
        spinCaption:
          "Drag to spin the Poer Commercial, or use the slider to explore every angle.",
        safety: {
          title: "Engineered to Protect",
          tabs: ["Airbags", "Intelligent Driving", "Body Structure"],
          placeholder: "Photo: Poer Commercial safety X-ray diagram",
          caption: "6-airbag protection",
          features: [
            {
              title: "Dual front airbags",
              summary: "Comprehensive airbag array whether every occupant is seated.",
            },
            {
              title: "Front seat side airbags",
              summary: "Dual front side airbags for the driver and passenger.",
            },
            {
              title: "Full-height side curtains",
              summary: "Extended coverage across both rows of seating.",
            },
            {
              title: "Reinforced cabin frame",
              summary: "A high-strength steel cabin cell for cab intrusion protection.",
            },
          ],
        },
        colors: [
          { name: "Black", value: "#050506" },
          { name: "Silver", value: "#a7abb2" },
          { name: "White", value: "#ffffff" },
          { name: "Blue Gray", value: "#27313f" },
        ],
        colorPlaceholder: "Photo: Poer Commercial in selected colour, studio",
        trims: [
          { name: "Standard", price: "AED 99,900", featured: false },
          {
            name: "Business",
            price: "AED 109,900",
            featured: true,
            note: "Most popular",
          },
          { name: "Fleet", price: "AED 94,900", featured: false, note: "Volume pricing" },
        ],
        continueLabel: "Continue",
        specs: [
          { label: "Engine & Performance", value: "2.0T Turbo Diesel" },
          { label: "Max Power", value: "184 PS @ 3,600 rpm" },
          { label: "Max Torque", value: "480 Nm @ 1,500–2,500 rpm" },
          { label: "Transmission", value: "8-Speed Automatic" },
          { label: "Drivetrain", value: "Selectable 4WD" },
          { label: "Body", value: "Double cab pickup" },
          { label: "Dimensions", value: "5,410 × 1,997 × 1,872 mm" },
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
        slug: "haval-h6-hev",
        brand: "هافال",
        model: "H6 HEV",
        bodyType: "SUV",
        powertrain: "هايبرد",
        priceLabel: "يبدأ من 109,900 درهم",
        summary: "سيارة SUV هايبرد ذكية للعائلة والكفاءة اليومية والسفر الإقليمي بثقة.",
        heroPlaceholder: "صورة: هافال H6 HEV، لقطة حركة",
        heroMedia: {
          url: "/media/product-hero.png",
          alt: "هافال H6 HEV على طريق صحراوي وقت الغروب",
        },
        spin360: {
          frames: buildSpinFrames("haval-h6-hev", "HAVAL_h6-hev_MY26_EXT360"),
          alt: "منظور دوراني 360 درجة للمظهر الخارجي لهافال H6 HEV",
        },
        quickStats: [
          { value: "245", unit: "حصان", label: "القوة المجمعة" },
          { value: "530", unit: "كم", label: "مدى الهايبرد" },
          { value: "5.4", unit: "لتر/100كم", label: "كفاءة الوقود" },
          { value: "5", unit: "مقاعد", label: "مقصورة عائلية" },
        ],
        whyCards: [
          {
            title: "لكل تنقلاتك اليومية",
            summary: "ضبط هايبرد ذكي لقيادة سلسة داخل المدينة وعلى الطرق السريعة.",
            placeholder: "صورة: H6 HEV قيادة في المدينة",
            media: {
              url: "/media/vehicles/haval-h6-hev/02_exterior_lifestyle.webp",
              alt: "لقطة نمط حياة لهافال H6 HEV",
            },
          },
          {
            title: "مقصورة تستحق",
            summary: "شاشة 14.6 بوصة، تطبيقات متصلة، ومواد مقصورة هادئة.",
            placeholder: "صورة: H6 HEV لوحة القيادة",
            media: {
              url: "/media/vehicles/haval-h6-hev/03_interior_cockpit.webp",
              alt: "مقصورة قيادة هافال H6 HEV",
            },
          },
          {
            title: "ثقة بالتصميم",
            summary: "حضور عريض ومنظومة مساعدة سائق لراحة بال العائلة.",
            placeholder: "صورة: H6 HEV خلفية جانبية",
            media: {
              url: "/media/vehicles/haval-h6-hev/05_rear_side_profile.webp",
              alt: "الجانب الخلفي لهافال H6 HEV",
            },
          },
        ],
        featureBanner: {
          tabs: ["منظومة الهايبرد", "منظومة السلامة", "Coffee OS", "الكفاءة"],
          title: "دفع هايبرد ذكي",
          description:
            "بتنسيق المحرك والمحرك الكهربائي، يجمع H6 HEV بين قوة سلسة وكفاءة يومية.",
          stat: { value: "5.4 لتر", label: "استهلاك الوقود لكل 100 كم" },
          placeholder: "صورة: منظومة الهايبرد في H6 HEV",
          media: {
            url: "/media/vehicles/haval-h6-hev/04_feature_detail.webp",
            alt: "ميزة نظام الهايبرد لهافال H6 HEV",
          },
        },
        details: {
          exterior: [
            {
              caption: "مصابيح LED كاملة وشبك أمامي مميز",
              placeholder: "صورة: تفاصيل الشبك الأمامي",
              media: {
                url: "/media/vehicles/haval-h6-hev/01_hero_exterior.webp",
                alt: "تفاصيل المظهر الأمامي لهافال H6 HEV",
              },
            },
            {
              caption: "جنوط سبيكة مشغولة 18 بوصة",
              placeholder: "صورة: تفاصيل الجنط",
              media: {
                url: "/media/vehicles/haval-h6-hev/04_feature_detail.webp",
                alt: "تفاصيل ميزة هافال H6 HEV",
              },
            },
            {
              caption: "لمسات تصميم عند الباب الخلفي",
              placeholder: "صورة: تفاصيل الباب الخلفي",
              media: {
                url: "/media/vehicles/haval-h6-hev/05_rear_side_profile.webp",
                alt: "تفاصيل الباب الخلفي لهافال H6 HEV",
              },
            },
          ],
          interior: [
            {
              caption: "شاشة Coffee OS بحجم 14.6 بوصة",
              placeholder: "صورة: تفاصيل شاشة المعلومات",
              media: {
                url: "/media/vehicles/haval-h6-hev/03_interior_cockpit.webp",
                alt: "مقصورة قيادة هافال H6 HEV",
              },
            },
            {
              caption: "مقاعد أمامية مدفأة ومهواة",
              placeholder: "صورة: تفاصيل المقعد الأمامي",
            },
            {
              caption: "وحدة تحكم مناخ مزدوجة المنطقة",
              placeholder: "صورة: تفاصيل وحدة التحكم",
            },
          ],
        },
        spinCaption: "اسحب لتدوير H6 HEV، أو استخدم الشريط لاستكشاف كل زاوية.",
        safety: {
          title: "مصممة للحماية",
          tabs: ["الوسائد الهوائية", "القيادة الذكية", "هيكل السيارة"],
          placeholder: "صورة: مخطط أشعة السلامة لـ H6 HEV",
          caption: "حماية بـ 7 وسائد هوائية",
          features: [
            { title: "وسادتان أماميتان", summary: "منظومة وسائد شاملة لكل راكب." },
            {
              title: "وسائد جانبية أمامية",
              summary: "وسائد جانبية أمامية وستائر جانبية كاملة الطول.",
            },
            {
              title: "ستائر جانبية كاملة الارتفاع",
              summary: "تغطية ممتدة عبر جميع صفوف المقاعد.",
            },
            {
              title: "وسادة ركبة السائق",
              summary: "حماية إضافية للجزء السفلي من جسم السائق.",
            },
          ],
        },
        colors: [
          { name: "أسود", value: "#050506" },
          { name: "أبيض لؤلؤي", value: "#f7f7f2" },
          { name: "جرافيت", value: "#343946" },
          { name: "أحمر", value: "#d50032" },
        ],
        colorPlaceholder: "صورة: H6 HEV باللون المختار، استوديو",
        trims: [
          { name: "Elite", price: "109,900 درهم", featured: false },
          {
            name: "Premium",
            price: "119,900 درهم",
            featured: true,
            note: "الأكثر طلباً",
          },
          { name: "Ultra", price: "129,900 درهم", featured: false },
        ],
        continueLabel: "متابعة",
        specs: [
          { label: "المحرك والأداء", value: "1.5T هايبرد" },
          { label: "أقصى قوة", value: "245 حصان" },
          { label: "أقصى عزم", value: "530 نيوتن متر مجمع" },
          { label: "ناقل الحركة", value: "DHT بسرعتين" },
          { label: "نظام الدفع", value: "دفع أمامي" },
          { label: "الفئة", value: "SUV بخمسة مقاعد" },
          { label: "الأبعاد", value: "4,653 × 1,886 × 1,730 مم" },
        ],
      },
      {
        slug: "tank-500",
        brand: "تانك",
        model: "500",
        bodyType: "SUV",
        powertrain: "بنزين",
        priceLabel: "يبدأ من 149,900 درهم",
        summary:
          "سيارة SUV فاخرة بهيكل قوي وراحة للمسافات الطويلة وقدرة جادة لجميع التضاريس.",
        heroPlaceholder: "صورة: تانك 500، لقطة حركة صحراوية",
        heroMedia: {
          url: "/media/vehicles/tank-500/01_hero_exterior.webp",
          alt: "لقطة المظهر الخارجي الرئيسية لتانك 500",
        },
        spin360: {
          frames: buildSpinFrames("tank-500", "TANK_tank-500_MY26_EXT360"),
          alt: "منظور دوراني 360 درجة للمظهر الخارجي لتانك 500",
        },
        quickStats: [
          { value: "354", unit: "حصان", label: "قوة توين توربو" },
          { value: "480", unit: "نيوتن متر", label: "أقصى عزم" },
          { value: "700", unit: "كم", label: "مدى الرحلات" },
          { value: "33", unit: "°", label: "زاوية الاقتراب" },
        ],
        whyCards: [
          {
            title: "لكل التضاريس",
            summary: "أنماط تضاريس قابلة للاختيار وقفل تفاضلي مركزي لتحكم وعر جاد.",
            placeholder: "صورة: تانك 500 تسلق وعر",
            media: {
              url: "/media/vehicles/tank-500/02_exterior_lifestyle.webp",
              alt: "لقطة نمط حياة لتانك 500",
            },
          },
          {
            title: "مقصورة تستحق",
            summary: "شاشتان بحجم 12.3 بوصة، مقاعد جلد نابا، وسقف بانورامي كامل.",
            placeholder: "صورة: تانك 500 لوحة القيادة",
            media: {
              url: "/media/vehicles/tank-500/03_interior_cockpit.webp",
              alt: "مقصورة قيادة تانك 500",
            },
          },
          {
            title: "تصميم أيقوني",
            summary: "هيكل مربع بطابع كلاسيكي حديث مع إطار احتياطي على الباب الخلفي.",
            placeholder: "صورة: تانك 500 خلفية جانبية",
            media: {
              url: "/media/vehicles/tank-500/05_rear_side_profile.webp",
              alt: "الجانب الخلفي لتانك 500",
            },
          },
        ],
        featureBanner: {
          tabs: ["دوران تانك", "Hi4-T هايبرد", "Coffee OS", "جميع التضاريس"],
          title: "دوران تانك الذكي",
          description:
            "بكبح العجلات بشكل مستقل، تدور TANK 500 حول محورها — لتحويل المنعطفات الضيقة والمسارات الوعرة إلى مناورات سهلة.",
          stat: { value: "=0م", label: "نصف قطر الدوران أثناء الدحرجة" },
          placeholder: "صورة: عرض دوران تانك",
          media: {
            url: "/media/vehicles/tank-500/04_feature_detail.webp",
            alt: "ميزة دوران تانك لتانك 500",
          },
        },
        details: {
          exterior: [
            {
              caption: "مصابيح LED دائرية وشبك أمامي مميز",
              placeholder: "صورة: تفاصيل الشبك الأمامي",
              media: {
                url: "/media/vehicles/tank-500/01_hero_exterior.webp",
                alt: "تفاصيل المظهر الأمامي لتانك 500",
              },
            },
            {
              caption: "جنوط سبيكة 18 بوصة لجميع التضاريس",
              placeholder: "صورة: تفاصيل الجنط",
              media: {
                url: "/media/vehicles/tank-500/04_feature_detail.webp",
                alt: "تفاصيل ميزة تانك 500",
              },
            },
            {
              caption: "إطار احتياطي على الباب الخلفي",
              placeholder: "صورة: تفاصيل الباب الخلفي",
              media: {
                url: "/media/vehicles/tank-500/05_rear_side_profile.webp",
                alt: "تفاصيل الباب الخلفي لتانك 500",
              },
            },
          ],
          interior: [
            {
              caption: "شاشتان رقميتان 12.3 بوصة",
              placeholder: "صورة: تفاصيل الشاشة",
              media: {
                url: "/media/vehicles/tank-500/03_interior_cockpit.webp",
                alt: "مقصورة قيادة تانك 500",
              },
            },
            { caption: "مقاعد جلد نابا مبطنة", placeholder: "صورة: تفاصيل خياطة المقعد" },
            {
              caption: "سقف بانورامي كامل الطول",
              placeholder: "صورة: تفاصيل السقف البانورامي",
            },
          ],
        },
        spinCaption: "اسحب لتدوير TANK 500، أو استخدم الشريط لاستكشاف كل زاوية.",
        safety: {
          title: "مصممة للحماية",
          tabs: ["الوسائد الهوائية", "القيادة الذكية", "هيكل السيارة"],
          placeholder: "صورة: مخطط أشعة السلامة لتانك 500",
          caption: "حماية بـ 7 وسائد هوائية",
          features: [
            { title: "وسادتان أماميتان", summary: "منظومة وسائد شاملة لكل راكب." },
            {
              title: "وسائد جانبية أمامية",
              summary: "وسائد جانبية أمامية وستائر جانبية كاملة الطول.",
            },
            {
              title: "ستائر جانبية كاملة الارتفاع",
              summary: "تغطية ممتدة عبر جميع صفوف المقاعد.",
            },
            {
              title: "وسادة ركبة السائق",
              summary: "حماية إضافية للجزء السفلي من جسم السائق.",
            },
          ],
        },
        colors: [
          { name: "أسود عميق", value: "#050506" },
          { name: "برونزي صحراوي", value: "#8a6a45" },
          { name: "رمادي", value: "#6f747d" },
          { name: "أبيض", value: "#ffffff" },
        ],
        colorPlaceholder: "صورة: تانك 500 باللون المختار، استوديو",
        trims: [
          { name: "Adventure", price: "149,900 درهم", featured: false },
          { name: "Lux", price: "164,900 درهم", featured: true, note: "الأكثر طلباً" },
          { name: "Ultra", price: "178,900 درهم", featured: false },
        ],
        continueLabel: "متابعة",
        specs: [
          { label: "المحرك والأداء", value: "3.0T بنزين توربو" },
          { label: "أقصى قوة", value: "354 حصان عند 5,500 دورة" },
          { label: "أقصى عزم", value: "480 نيوتن متر عند 1,800–5,000 دورة" },
          { label: "ناقل الحركة", value: "أوتوماتيك 9 سرعات" },
          { label: "نظام الدفع", value: "دفع رباعي قابل للاختيار" },
          { label: "قدرة الطرق الوعرة", value: "قفل تفاضلي مركزي وخلفي" },
          { label: "الأبعاد", value: "5,078 × 1,934 × 1,905 مم" },
        ],
      },
      {
        slug: "poer-commercial",
        brand: "بوير",
        model: "Commercial",
        bodyType: "بيك أب",
        powertrain: "ديزل",
        priceLabel: "يبدأ من 99,900 درهم",
        summary:
          "بيك أب متينة للأعمال والاستخدام اليومي مع الراحة المتوقعة من مقصورة حديثة.",
        heroPlaceholder: "صورة: بوير Commercial، لقطة حركة في موقع عمل",
        heroMedia: {
          url: "/media/vehicles/poer-commercial/01_hero_exterior.webp",
          alt: "لقطة المظهر الخارجي الرئيسية لبوير 2.4T Commercial",
        },
        spin360: {
          frames: buildSpinFrames(
            "poer-commercial",
            "POER_poer-2-4t-commercial_MY26_EXT360",
          ),
          alt: "منظور دوراني 360 درجة للمظهر الخارجي لبوير Commercial",
        },
        quickStats: [
          { value: "184", unit: "حصان", label: "قوة الديزل" },
          { value: "480", unit: "نيوتن متر", label: "أقصى عزم" },
          { value: "1,000", unit: "كجم", label: "الحمولة القصوى" },
          { value: "3,500", unit: "كجم", label: "قدرة السحب" },
        ],
        whyCards: [
          {
            title: "لكل مهمة عمل",
            summary: "هيكل مقوّى من نوع السلم مصنف لتحمل أحمال يومية ثقيلة.",
            placeholder: "صورة: بوير Commercial محملة",
            media: {
              url: "/media/vehicles/poer-commercial/02_exterior_lifestyle.webp",
              alt: "لقطة نمط حياة لبوير Commercial",
            },
          },
          {
            title: "مقصورة تستحق",
            summary: "شاشة 12.3 بوصة، تشطيبات متينة، ومقاعد مريحة للورديات الطويلة.",
            placeholder: "صورة: بوير Commercial لوحة القيادة",
            media: {
              url: "/media/vehicles/poer-commercial/03_interior_cockpit.webp",
              alt: "مقصورة قيادة بوير Commercial",
            },
          },
          {
            title: "جاهزة للعمل بالتصميم",
            summary: "مقصورة مزدوجة مع صندوق عريض ونقاط تثبيت مصنفة للحمولة.",
            placeholder: "صورة: بوير Commercial خلفية جانبية",
            media: {
              url: "/media/vehicles/poer-commercial/05_rear_side_profile.webp",
              alt: "الجانب الخلفي لبوير Commercial",
            },
          },
        ],
        featureBanner: {
          tabs: ["نظام الدفع الرباعي", "الحمولة", "Coffee OS", "المتانة"],
          title: "مصممة لحمل المزيد",
          description:
            "هيكل مقوّى، تعليق خلفي متعدد الوصلات، ودفع رباعي قابل للاختيار يبقيان بوير Commercial ثابتة تحت الأحمال الثقيلة وعلى الطرق غير الممهدة.",
          stat: { value: "1,000كجم", label: "أقصى حمولة" },
          placeholder: "صورة: عرض سحب بوير Commercial",
          media: {
            url: "/media/vehicles/poer-commercial/04_feature_detail.webp",
            alt: "ميزة سحب بوير Commercial",
          },
        },
        details: {
          exterior: [
            {
              caption: "مصابيح LED وشبك أمامي مميز",
              placeholder: "صورة: تفاصيل الشبك الأمامي",
              media: {
                url: "/media/vehicles/poer-commercial/01_hero_exterior.webp",
                alt: "تفاصيل المظهر الأمامي لبوير Commercial",
              },
            },
            {
              caption: "جنوط سبيكة 17 بوصة مصنفة للعمل",
              placeholder: "صورة: تفاصيل الجنط",
              media: {
                url: "/media/vehicles/poer-commercial/04_feature_detail.webp",
                alt: "تفاصيل ميزة بوير Commercial",
              },
            },
            {
              caption: "صندوق حمولة مقوى ونقاط تثبيت",
              placeholder: "صورة: تفاصيل صندوق الحمولة",
              media: {
                url: "/media/vehicles/poer-commercial/05_rear_side_profile.webp",
                alt: "تفاصيل صندوق الحمولة لبوير Commercial",
              },
            },
          ],
          interior: [
            {
              caption: "شاشة Coffee OS بحجم 12.3 بوصة",
              placeholder: "صورة: تفاصيل شاشة المعلومات",
              media: {
                url: "/media/vehicles/poer-commercial/03_interior_cockpit.webp",
                alt: "مقصورة قيادة بوير Commercial",
              },
            },
            {
              caption: "تنجيد متين مقاوم للتآكل",
              placeholder: "صورة: تفاصيل تنجيد المقعد",
            },
            {
              caption: "مقاعد خلفية لمقصورة مزدوجة",
              placeholder: "صورة: تفاصيل المقعد الخلفي",
            },
          ],
        },
        spinCaption: "اسحب لتدوير بوير Commercial، أو استخدم الشريط لاستكشاف كل زاوية.",
        safety: {
          title: "مصممة للحماية",
          tabs: ["الوسائد الهوائية", "القيادة الذكية", "هيكل السيارة"],
          placeholder: "صورة: مخطط أشعة السلامة لبوير Commercial",
          caption: "حماية بـ 6 وسائد هوائية",
          features: [
            { title: "وسادتان أماميتان", summary: "منظومة وسائد شاملة لكل راكب." },
            {
              title: "وسائد جانبية أمامية",
              summary: "وسائد جانبية أمامية للسائق والراكب.",
            },
            {
              title: "ستائر جانبية كاملة الارتفاع",
              summary: "تغطية ممتدة عبر كلا صفي المقاعد.",
            },
            {
              title: "هيكل مقصورة مقوى",
              summary: "خلية مقصورة فولاذية عالية القوة للحماية من التصادم.",
            },
          ],
        },
        colors: [
          { name: "أسود", value: "#050506" },
          { name: "فضي", value: "#a7abb2" },
          { name: "أبيض", value: "#ffffff" },
          { name: "أزرق رمادي", value: "#27313f" },
        ],
        colorPlaceholder: "صورة: بوير Commercial باللون المختار، استوديو",
        trims: [
          { name: "Standard", price: "99,900 درهم", featured: false },
          {
            name: "Business",
            price: "109,900 درهم",
            featured: true,
            note: "الأكثر طلباً",
          },
          { name: "Fleet", price: "94,900 درهم", featured: false, note: "تسعير كميات" },
        ],
        continueLabel: "متابعة",
        specs: [
          { label: "المحرك والأداء", value: "2.0T ديزل توربو" },
          { label: "أقصى قوة", value: "184 حصان عند 3,600 دورة" },
          { label: "أقصى عزم", value: "480 نيوتن متر عند 1,500–2,500 دورة" },
          { label: "ناقل الحركة", value: "أوتوماتيك 8 سرعات" },
          { label: "نظام الدفع", value: "دفع رباعي قابل للاختيار" },
          { label: "الفئة", value: "بيك أب مزدوجة المقصورة" },
          { label: "الأبعاد", value: "5,410 × 1,997 × 1,872 مم" },
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
