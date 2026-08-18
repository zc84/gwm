import type { MetadataRoute } from "next";
import { supportedLocales } from "@gwm/shared";
import { getVehicleStaticParams } from "../lib/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const routes = ["", "vehicles", "service", "countries", "forms", "news"];
  const vehicleRoutes = getVehicleStaticParams().map(({ slug }) => `vehicles/${slug}`);

  return supportedLocales.flatMap((locale) =>
    [...routes, ...vehicleRoutes].map((route) => ({
      url: `${siteUrl}/${locale}${route ? `/${route}` : ""}`,
      lastModified: new Date("2026-08-18"),
    })),
  );
}
