import qs from "qs";
import type { Locale } from "@gwm/shared";
import { getFallbackHomeContent, type HomePageContent, type HomeStat, type MediaAsset } from "./content/home";

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

/**
 * Only the hero/filters/stats/nav are Strapi-driven for now. Brands, featured
 * vehicles, technology, news and countries carry richer nested structures
 * (photo placeholders, dealer directories, tech feature lists) that don't
 * have a Strapi content type defined yet, so they always come from the
 * typed fallback bundle in ./content/home until that schema exists.
 */
function normalizeHomeContent(
  locale: Locale,
  entry: StrapiHome,
  baseUrl: string,
): HomePageContent {
  const fallback = getFallbackHomeContent(locale);
  const hero = asRecord(entry.hero);

  return {
    ...fallback,
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
