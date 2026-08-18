import qs from "qs";
import type { Locale } from "@gwm/shared";
import {
  getFallbackHomeContent,
  type HomeBrand,
  type HomeCountry,
  type HomeNewsItem,
  type HomePageContent,
  type HomeStat,
  type HomeVehicle,
  type MediaAsset,
} from "./content/home";

type StrapiResponse<T> = {
  data?: T | null;
  error?: {
    status?: number;
    name?: string;
    message?: string;
  };
};

type StrapiMedia = {
  url?: unknown;
  alternativeText?: unknown;
  alt?: unknown;
};

type StrapiHome = Partial<{
  navItems: unknown;
  languageLabel: unknown;
  hero: unknown;
  filters: unknown;
  stats: unknown;
  brands: unknown;
  featuredVehicles: unknown;
  technology: unknown;
  news: unknown;
  countries: unknown;
}>;

const STRAPI_HOME_POPULATE = {
  hero: {
    populate: {
      media: {
        fields: ["url", "alternativeText"],
      },
    },
  },
  stats: true,
  brands: true,
  featuredVehicles: {
    populate: {
      media: {
        fields: ["url", "alternativeText"],
      },
    },
  },
  technology: true,
  news: {
    populate: {
      image: {
        fields: ["url", "alternativeText"],
      },
    },
  },
  countries: true,
} as const;

function getStrapiBaseUrl(): string | undefined {
  return process.env.STRAPI_API_URL;
}

function asRecord(value: unknown): Record<string, unknown> | undefined {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value as Record<string, unknown>;
  }

  return undefined;
}

function asString(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() ? value : undefined;
}

function asStringArray(value: unknown): string[] | undefined {
  if (!Array.isArray(value)) {
    return undefined;
  }

  const strings = value.filter(
    (item): item is string => typeof item === "string" && item.trim().length > 0,
  );

  return strings.length ? strings : undefined;
}

function asRecordArray(value: unknown): Record<string, unknown>[] | undefined {
  if (!Array.isArray(value)) {
    return undefined;
  }

  const records = value
    .map(asRecord)
    .filter((item): item is Record<string, unknown> => Boolean(item));

  return records.length ? records : undefined;
}

function resolveMediaUrl(url: string, baseUrl: string): string {
  if (/^https?:\/\//.test(url)) {
    return url;
  }

  return new URL(url, baseUrl).toString();
}

function normalizeMedia(value: unknown, baseUrl: string): MediaAsset | undefined {
  const record = asRecord(value) as StrapiMedia | undefined;
  const url = asString(record?.url);

  if (!url) {
    return undefined;
  }

  return {
    url: resolveMediaUrl(url, baseUrl),
    alt: asString(record?.alternativeText) || asString(record?.alt) || "GWM vehicle",
  };
}

function normalizeStats(value: unknown, fallback: HomeStat[]): HomeStat[] {
  const records = asRecordArray(value);

  if (!records) {
    return fallback;
  }

  const stats = records.flatMap((item) => {
    const value = asString(item.value);
    const label = asString(item.label);
    return value && label ? [{ value, label }] : [];
  });

  return stats.length ? stats : fallback;
}

function normalizeBrands(value: unknown, fallback: HomeBrand[]): HomeBrand[] {
  const records = asRecordArray(value);

  if (!records) {
    return fallback;
  }

  const brands = records.flatMap((item) => {
    const name = asString(item.name);
    const summary = asString(item.summary);
    return name && summary ? [{ name, summary }] : [];
  });

  return brands.length ? brands : fallback;
}

function normalizeVehicles(value: unknown, fallback: HomeVehicle[]): HomeVehicle[] {
  const records = asRecordArray(value);

  if (!records) {
    return fallback;
  }

  const vehicles = records.flatMap((item) => {
    const brand = asString(item.brand);
    const model = asString(item.model);
    const bodyType = asString(item.bodyType);
    const powertrain = asString(item.powertrain);
    const summary = asString(item.summary);

    return brand && model && bodyType && powertrain && summary
      ? [
          {
            brand,
            model,
            bodyType,
            powertrain,
            summary,
            ctaLabel: asString(item.ctaLabel) || fallback[0].ctaLabel,
          },
        ]
      : [];
  });

  return vehicles.length ? vehicles : fallback;
}

function normalizeNews(value: unknown, fallback: HomeNewsItem[]): HomeNewsItem[] {
  const records = asRecordArray(value);

  if (!records) {
    return fallback;
  }

  const news = records.flatMap((item) => {
    const date = asString(item.date);
    const title = asString(item.title);
    const summary = asString(item.summary);
    return date && title && summary ? [{ date, title, summary }] : [];
  });

  return news.length ? news : fallback;
}

function normalizeCountries(value: unknown, fallback: HomeCountry[]): HomeCountry[] {
  const records = asRecordArray(value);

  if (!records) {
    return fallback;
  }

  const countries = records.flatMap((item) => {
    const country = asString(item.country);
    const region = asString(item.region);
    return country && region
      ? [{ country, region, label: asString(item.label) || fallback[0].label }]
      : [];
  });

  return countries.length ? countries : fallback;
}

function normalizeHomeContent(
  locale: Locale,
  entry: StrapiHome,
  baseUrl: string,
): HomePageContent {
  const fallback = getFallbackHomeContent(locale);
  const hero = asRecord(entry.hero);
  const technology = asRecord(entry.technology);

  return {
    locale,
    source: "strapi",
    navItems: asStringArray(entry.navItems) || fallback.navItems,
    languageLabel: asString(entry.languageLabel) || fallback.languageLabel,
    hero: {
      eyebrow: asString(hero?.eyebrow) || fallback.hero.eyebrow,
      title: asString(hero?.title) || fallback.hero.title,
      intro: asString(hero?.intro) || fallback.hero.intro,
      primaryCta: asString(hero?.primaryCta) || fallback.hero.primaryCta,
      secondaryCta: asString(hero?.secondaryCta) || fallback.hero.secondaryCta,
      media: normalizeMedia(hero?.media, baseUrl) || fallback.hero.media,
    },
    filters: asStringArray(entry.filters) || fallback.filters,
    stats: normalizeStats(entry.stats, fallback.stats),
    brands: normalizeBrands(entry.brands, fallback.brands),
    featuredVehicles: normalizeVehicles(
      entry.featuredVehicles,
      fallback.featuredVehicles,
    ),
    technology: {
      eyebrow: asString(technology?.eyebrow) || fallback.technology.eyebrow,
      title: asString(technology?.title) || fallback.technology.title,
      summary: asString(technology?.summary) || fallback.technology.summary,
    },
    news: normalizeNews(entry.news, fallback.news),
    countries: normalizeCountries(entry.countries, fallback.countries),
  };
}

export async function getHomeContent(locale: Locale): Promise<HomePageContent> {
  const baseUrl = getStrapiBaseUrl();

  if (!baseUrl) {
    return getFallbackHomeContent(locale);
  }

  const query = qs.stringify(
    {
      locale,
      status: "published",
      populate: STRAPI_HOME_POPULATE,
    },
    { encodeValuesOnly: true },
  );

  try {
    const response = await fetch(`${baseUrl}/api/homepage?${query}`, {
      headers: {
        ...(process.env.STRAPI_API_TOKEN
          ? { Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}` }
          : {}),
      },
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      return getFallbackHomeContent(locale);
    }

    const payload = (await response.json()) as StrapiResponse<StrapiHome>;

    if (!payload.data || payload.error) {
      return getFallbackHomeContent(locale);
    }

    return normalizeHomeContent(locale, payload.data, baseUrl);
  } catch {
    return getFallbackHomeContent(locale);
  }
}
