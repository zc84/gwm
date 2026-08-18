export const supportedLocales = ["en", "ar"] as const;

export type Locale = (typeof supportedLocales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
};

export const localeDirections: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  ar: "rtl",
};

export function isLocale(value: string): value is Locale {
  return supportedLocales.includes(value as Locale);
}

export function getTextDirection(locale: Locale): "ltr" | "rtl" {
  return localeDirections[locale];
}
