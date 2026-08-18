export const gwmV2Colors = {
  black: "#050506",
  canvas: "#080808",
  panel: "#0f1014",
  panelRaised: "#14151a",
  panelSoft: "#1a1c22",
  line: "#242832",
  lineStrong: "#343946",
  text: "#f7f7f2",
  muted: "#a7abb2",
  subtle: "#6f747d",
  red: "#d50032",
  redHot: "#f0063c",
  redDark: "#72041e",
  white: "#ffffff",
} as const;

export const gwmV2Typography = {
  fontFamily: {
    latin: ["Arial", "Helvetica", "sans-serif"],
    arabic: ["Arial", "Tahoma", "sans-serif"],
    mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
  },
  scale: {
    displayXl: {
      fontSize: "64px",
      lineHeight: "0.9",
      fontWeight: 900,
    },
    displayLg: {
      fontSize: "48px",
      lineHeight: "0.95",
      fontWeight: 900,
    },
    headingLg: {
      fontSize: "32px",
      lineHeight: "1.05",
      fontWeight: 900,
    },
    headingMd: {
      fontSize: "22px",
      lineHeight: "1.15",
      fontWeight: 800,
    },
    body: {
      fontSize: "16px",
      lineHeight: "1.65",
      fontWeight: 400,
    },
    caption: {
      fontSize: "12px",
      lineHeight: "1.35",
      fontWeight: 700,
    },
  },
} as const;

export const gwmV2Spacing = {
  pageXMobile: "20px",
  pageXDesktop: "32px",
  sectionYMobile: "56px",
  sectionYDesktop: "88px",
  cardPadding: "24px",
  controlHeight: "44px",
  contentMax: "1180px",
} as const;

export const gwmV2Radius = {
  xs: "6px",
  sm: "8px",
  md: "12px",
  lg: "18px",
  pill: "999px",
} as const;

export const gwmV2Shadow = {
  panel: "0 18px 60px rgba(0, 0, 0, 0.35)",
  redGlow: "0 14px 34px rgba(213, 0, 50, 0.35)",
} as const;

export const gwmV2Components = [
  "AppShell",
  "BrandHeader",
  "HeroMedia",
  "ActionPill",
  "TabRail",
  "StatStrip",
  "VehicleCard",
  "InfoCard",
  "FeatureGrid",
  "SpecTable",
  "GalleryRail",
  "AccordionRow",
  "FormField",
  "ConversionBand",
  "MobileActionBar",
  "BrandFooter",
] as const;

export const gwmV2DesignSources = [
  {
    file: "specs/design/V2_Homepage.png",
    page: "homepage",
    viewport: "desktop",
    direction: "ltr",
  },
  {
    file: "specs/design/V2_Homepage_Mobile.png",
    page: "homepage",
    viewport: "mobile",
    direction: "ltr",
  },
  {
    file: "specs/design/V2_Homepage_RTL.png",
    page: "homepage",
    viewport: "desktop",
    direction: "rtl",
  },
  {
    file: "specs/design/V2_Product Page.png",
    page: "product",
    viewport: "desktop",
    direction: "ltr",
  },
  {
    file: "specs/design/V2_Product Page_RTL.png",
    page: "product",
    viewport: "desktop",
    direction: "rtl",
  },
  {
    file: "specs/design/V2_Product page_mobile.png",
    page: "product",
    viewport: "mobile",
    direction: "ltr",
  },
  {
    file: "specs/design/V2_Service.png",
    page: "service",
    viewport: "desktop",
    direction: "ltr",
  },
  {
    file: "specs/design/V2_Service_RTL.png",
    page: "service",
    viewport: "desktop",
    direction: "rtl",
  },
  {
    file: "specs/design/V2_Service_mobile.png",
    page: "service",
    viewport: "mobile",
    direction: "ltr",
  },
  {
    file: "specs/design/V2_Country_RTL.png",
    page: "country",
    viewport: "desktop",
    direction: "rtl",
  },
  {
    file: "specs/design/V2_Country_mobile.png",
    page: "country",
    viewport: "mobile",
    direction: "ltr",
  },
  {
    file: "specs/design/V2_Forms_RTL.png",
    page: "forms",
    viewport: "desktop",
    direction: "rtl",
  },
  {
    file: "specs/design/V2_Forms_mobile.png",
    page: "forms",
    viewport: "mobile",
    direction: "ltr",
  },
] as const;

export const gwmV2Brand = {
  name: "GWM Middle East V2",
  colors: gwmV2Colors,
  typography: gwmV2Typography,
  spacing: gwmV2Spacing,
  radius: gwmV2Radius,
  shadow: gwmV2Shadow,
  components: gwmV2Components,
  designSources: gwmV2DesignSources,
} as const;

export type GwmV2Color = keyof typeof gwmV2Colors;
export type GwmV2Component = (typeof gwmV2Components)[number];
