import type { Metadata } from "next";
import { getTextDirection, isLocale, type Locale } from "@gwm/shared";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "GWM Middle East",
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;

  return (
    <html lang={locale} dir={getTextDirection(locale)}>
      <body>{children}</body>
    </html>
  );
}
