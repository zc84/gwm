import Link from "next/link";
import { isLocale, type Locale } from "@gwm/shared";
import { notFound } from "next/navigation";
import { getSiteContent } from "../../../lib/content/site";
import { Icon, SiteFooter, SiteHeader } from "../components";

type CountriesPageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ country?: string }>;
};

export default async function CountriesPage({ params, searchParams }: CountriesPageProps) {
  const { locale: localeParam } = await params;
  const { country: countryParam } = await searchParams;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const {
    home: { countries },
  } = getSiteContent(locale);
  const selected =
    countries.find((item) => item.isoCode === countryParam) || countries[0];
  const isRtl = locale === "ar";

  return (
    <main className="gwm-app-shell">
      <SiteHeader locale={locale} />

      <section className="gwm-container pb-6 pt-32">
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-2 text-xs font-black uppercase text-gwm-muted hover:text-white"
        >
          → {isRtl ? "العودة للرئيسية" : "Back to home"}
        </Link>
        <h1 className="gwm-display-xl mt-6 max-w-[14ch]">
          {isRtl ? "اختر منطقتك" : "Choose your region"}
        </h1>
        <p className="gwm-copy mt-4 max-w-xl">
          {isRtl
            ? "اختر من بين 10 أسواق للأسعار المحلية والوكلاء والعروض."
            : "Select among 10 markets for local pricing, dealers and offers."}
        </p>
      </section>

      <section className="gwm-section pt-6">
        <div className="gwm-container grid gap-10 lg:grid-cols-[0.9fr_1.3fr]">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-2">
            {countries.map((country) => (
              <Link
                key={country.isoCode}
                href={`/${locale}/countries?country=${country.isoCode}`}
                className={`flex items-center gap-3 border px-4 py-4 text-sm font-bold ${
                  country.isoCode === selected.isoCode
                    ? "border-white bg-gwm-panel-raised text-white"
                    : "border-gwm-line text-gwm-muted hover:text-white"
                }`}
              >
                <span className="text-xl leading-none">{country.flag}</span>
                <span>{country.country}</span>
              </Link>
            ))}
          </div>

          <div className="border border-gwm-line bg-gwm-panel p-6 md:p-8">
            <p className="gwm-eyebrow mb-2">
              {isRtl ? "يُعرض حالياً" : "Currently viewing"}
            </p>
            <h2 className="flex items-center gap-3 text-2xl font-black text-white">
              <span className="text-2xl leading-none">{selected.flag}</span>
              {selected.country}
            </h2>

            <div className="mt-8">
              <p className="mb-4 flex items-center gap-2 text-sm font-black uppercase text-gwm-muted">
                <Icon name="dealer" />
                {isRtl ? "الوكلاء المحليون" : "Local dealers"} ({selected.dealers.length})
              </p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {selected.dealers.map((dealer) => (
                  <div key={dealer.name} className="border border-gwm-line bg-gwm-panel-soft p-4">
                    <div className="text-sm font-black text-white">{dealer.name}</div>
                    <div className="gwm-copy mt-2 text-xs">{dealer.address}</div>
                    <div className="gwm-caption mt-3">{dealer.hours}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-3 border-t border-gwm-line pt-6 sm:grid-cols-3">
              <p className="text-sm font-black uppercase text-gwm-muted sm:col-span-3">
                {isRtl ? "التواصل الإقليمي" : "Regional contact"}
              </p>
              <div className="flex items-center gap-2 text-sm text-white">
                <Icon name="clock" className="text-gwm-red" />
                {selected.contact.hours}
              </div>
              <a
                href={`mailto:${selected.contact.email}`}
                className="flex items-center gap-2 text-sm text-white hover:text-gwm-red"
              >
                <Icon name="mail" className="text-gwm-red" />
                {selected.contact.email}
              </a>
              <a
                href={`tel:${selected.contact.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-2 text-sm text-white hover:text-gwm-red"
              >
                <Icon name="phone" className="text-gwm-red" />
                {selected.contact.phone}
              </a>
            </div>

            <Link
              href={`/${locale}/forms`}
              className="gwm-button gwm-button-primary mt-8 w-full"
            >
              {selected.label}
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
