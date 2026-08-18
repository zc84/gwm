import Link from "next/link";
import { isLocale, type Locale } from "@gwm/shared";
import { notFound } from "next/navigation";
import { getSiteContent } from "../../../lib/content/site";
import { PageHero, SectionHeading, SiteFooter, SiteHeader } from "../components";

type VehiclesPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function VehiclesPage({ params }: VehiclesPageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const { vehicles, home } = getSiteContent(locale);

  return (
    <main className="gwm-app-shell">
      <SiteHeader locale={locale} />
      <PageHero
        eyebrow={locale === "ar" ? "المركبات" : "Vehicle catalogue"}
        title={locale === "ar" ? "اختر مركبتك" : "Choose your drive"}
        intro={
          locale === "ar"
            ? "استعرض سيارات SUV والبيك أب والطرازات الهجينة من عائلة GWM الإقليمية."
            : "Explore SUVs, pickups and hybrid models from the regional GWM family."
        }
        image="/media/home-hero.png"
      >
        <div className="flex flex-wrap gap-2">
          {home.filters.map((filter, index) => (
            <span
              key={filter}
              className={`gwm-chip ${index === 0 ? "gwm-chip-active" : ""}`}
            >
              {filter}
            </span>
          ))}
        </div>
      </PageHero>

      <section className="gwm-section">
        <div className="gwm-container">
          <SectionHeading
            eyebrow={locale === "ar" ? "المجموعة" : "Line-up"}
            title={locale === "ar" ? "مركبات جاهزة للمنطقة" : "Regional-ready vehicles"}
            summary={
              locale === "ar"
                ? "كل بطاقة تعرض العائلة، نوع الهيكل، منظومة الحركة ومسار الطلب التالي."
                : "Each card surfaces brand family, body type, powertrain and the next customer action."
            }
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {vehicles.map((vehicle) => (
              <article
                key={vehicle.slug}
                className="border border-gwm-line bg-gwm-panel p-5"
              >
                <div
                  aria-label={vehicle.media.alt}
                  className="mb-5 aspect-[16/10] bg-cover bg-center"
                  role="img"
                  style={{
                    backgroundImage: `linear-gradient(180deg,rgba(5,5,6,0.05),rgba(5,5,6,0.54)),url(${vehicle.media.url})`,
                  }}
                />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase text-gwm-red">
                      {vehicle.brand}
                    </p>
                    <h2 className="mt-2 text-2xl font-black text-white">
                      {vehicle.model}
                    </h2>
                  </div>
                  <div className="text-end text-xs font-bold uppercase text-gwm-muted">
                    <div>{vehicle.bodyType}</div>
                    <div className="mt-1 text-white">{vehicle.powertrain}</div>
                  </div>
                </div>
                <p className="gwm-copy mt-5">{vehicle.summary}</p>
                <div className="mt-7 flex items-center justify-between gap-4">
                  <span className="text-xs font-bold text-gwm-muted">
                    {vehicle.priceLabel}
                  </span>
                  <Link
                    href={`/${locale}/vehicles/${vehicle.slug}`}
                    className="border-b border-gwm-red pb-1 text-sm font-black text-white"
                  >
                    {locale === "ar" ? "عرض التفاصيل" : "View details"}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
