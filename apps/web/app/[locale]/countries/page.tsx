import Link from "next/link";
import { isLocale, type Locale } from "@gwm/shared";
import { notFound } from "next/navigation";
import { getSiteContent } from "../../../lib/content/site";
import { PageHero, SectionHeading, SiteFooter, SiteHeader } from "../components";

type CountriesPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function CountriesPage({ params }: CountriesPageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const {
    home: { countries },
  } = getSiteContent(locale);
  const selected = countries[0];

  return (
    <main className="gwm-app-shell">
      <SiteHeader locale={locale} />
      <PageHero
        eyebrow={locale === "ar" ? "دليل الدول" : "Country directory"}
        title={locale === "ar" ? "اختر منطقتك" : "Choose your region"}
        intro={
          locale === "ar"
            ? "ابدأ من سوقك للوصول إلى الوكلاء والخدمة والتواصل المحلي."
            : "Start from your market to reach dealers, service and local contact paths."
        }
        image="/media/contact-hero.png"
      />

      <section className="gwm-section">
        <div className="gwm-container grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="border border-gwm-line bg-gwm-panel p-5">
            <p className="gwm-eyebrow mb-5">{locale === "ar" ? "الأسواق" : "Markets"}</p>
            <div className="space-y-2">
              {countries.map((country, index) => (
                <a
                  key={country.country}
                  href={`#${country.country}`}
                  className={`flex items-center justify-between border border-gwm-line px-4 py-3 text-sm font-bold ${
                    index === 0
                      ? "bg-gwm-red text-white"
                      : "bg-gwm-panel-raised text-gwm-muted"
                  }`}
                >
                  <span>{country.country}</span>
                  <span>{index === 0 ? "●" : "○"}</span>
                </a>
              ))}
            </div>
          </aside>

          <section className="border border-gwm-line bg-gwm-panel p-6">
            <SectionHeading
              eyebrow={selected.region}
              title={selected.country}
              summary={
                locale === "ar"
                  ? "ابدأ من السوق المحدد للوصول إلى مراكز البيع والخدمة والتواصل."
                  : "Use the selected market to reach sales, service and contact destinations."
              }
            />
            <div className="grid gap-4 md:grid-cols-3">
              {[
                locale === "ar" ? "المبيعات" : "Sales",
                locale === "ar" ? "الصيانة" : "Service",
                locale === "ar" ? "الدعم" : "Support",
              ].map((item) => (
                <div key={item} className="bg-gwm-panel-raised p-5">
                  <div className="text-sm font-black text-gwm-red">{item}</div>
                  <p className="gwm-copy mt-8">
                    {locale === "ar"
                      ? "مسار إقليمي تجريبي للـ MVP."
                      : "MVP regional destination path."}
                  </p>
                </div>
              ))}
            </div>
            <Link
              href={`/${locale}/forms`}
              className="gwm-button gwm-button-primary mt-8"
            >
              {selected.label}
            </Link>
          </section>
        </div>
      </section>

      <section className="border-t border-gwm-line bg-gwm-panel-soft">
        <div className="gwm-container gwm-section">
          <SectionHeading
            eyebrow={locale === "ar" ? "كل الأسواق" : "All markets"}
            title={
              locale === "ar" ? "دليل مسطح وسريع" : "Flat directory for quick access"
            }
          />
          <div className="grid gap-px bg-gwm-line md:grid-cols-2 lg:grid-cols-3">
            {countries.map((country) => (
              <Link
                key={country.country}
                href={`/${locale}/forms`}
                className="grid min-h-32 bg-gwm-panel p-5 transition-colors hover:bg-gwm-panel-raised"
              >
                <span className="text-xs font-black uppercase text-gwm-muted">
                  {country.region}
                </span>
                <span className="self-end text-xl font-black text-white">
                  {country.country}
                </span>
                <span className="mt-3 text-sm font-bold text-gwm-red">
                  {country.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
