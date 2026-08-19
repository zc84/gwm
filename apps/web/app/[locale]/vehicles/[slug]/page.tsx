import Link from "next/link";
import { isLocale, type Locale } from "@gwm/shared";
import { notFound } from "next/navigation";
import {
  getSiteContent,
  getVehicle,
  getVehicleStaticParams,
} from "../../../../lib/content/site";
import {
  CtaBand,
  Icon,
  PhotoPlaceholder,
  SectionHeading,
  SiteFooter,
  SiteHeader,
} from "../../components";
import { Viewer360 } from "../../viewer-360";

type ProductPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return ["en", "ar"].flatMap((locale) =>
    getVehicleStaticParams().map(({ slug }) => ({ locale, slug })),
  );
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { locale: localeParam, slug } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const vehicle = getVehicle(locale, slug);

  if (!vehicle) {
    notFound();
  }

  const { vehicles } = getSiteContent(locale);
  const related = vehicles.filter((item) => item.slug !== vehicle.slug).slice(0, 3);
  const isRtl = locale === "ar";

  return (
    <main className="gwm-app-shell">
      <SiteHeader locale={locale} />

      <section className="gwm-hero-media">
        {vehicle.heroMedia ? (
          <div
            className="absolute inset-0 bg-cover bg-center"
            role="img"
            aria-label={vehicle.heroMedia.alt}
            style={{ backgroundImage: `url(${vehicle.heroMedia.url})` }}
          />
        ) : (
          <PhotoPlaceholder
            label={vehicle.heroPlaceholder}
            className="gwm-photo-placeholder--fill"
          />
        )}
        <div className="gwm-container relative z-10 flex min-h-[min(680px,78vh)] flex-col justify-end pb-12 pt-32 md:pb-16">
          <p className="gwm-eyebrow mb-3">{vehicle.brand}</p>
          <h1 className="gwm-display-xl max-w-[12ch]">{vehicle.model}</h1>
          <p className="mt-3 text-sm font-bold text-white/78">{vehicle.priceLabel}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`/${locale}/forms`} className="gwm-button gwm-button-primary">
              {isRtl ? "احجز تجربة قيادة" : "Book a Test Drive"}
            </Link>
            <Link
              href={`/${locale}/vehicles`}
              className="gwm-button gwm-button-secondary"
            >
              + {isRtl ? "أضف للمقارنة" : "Add to Compare"}
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-gwm-line bg-gwm-panel">
        <div
          className="gwm-container grid gap-px bg-gwm-line"
          style={{
            gridTemplateColumns: `repeat(${vehicle.quickStats.length}, minmax(0, 1fr))`,
          }}
        >
          {vehicle.quickStats.map((stat) => (
            <div key={stat.label} className="bg-gwm-panel px-4 py-6 text-center">
              <div className="text-3xl font-black text-white">
                {stat.value}
                <span className="ml-1 text-sm font-bold text-gwm-muted">{stat.unit}</span>
              </div>
              <div className="mt-2 text-[11px] font-black uppercase text-gwm-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="gwm-section">
        <div className="gwm-container">
          <h2 className="gwm-heading-lg mb-8 text-center">
            {isRtl ? `لماذا ${vehicle.model}` : `Why ${vehicle.model}`}
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {vehicle.whyCards.map((card) => (
              <article key={card.title}>
                {card.media ? (
                  <div
                    className="aspect-[4/3] gwm-media-fade bg-cover bg-center"
                    role="img"
                    aria-label={card.media.alt}
                    style={{ backgroundImage: `url(${card.media.url})` }}
                  />
                ) : (
                  <PhotoPlaceholder label={card.placeholder} className="aspect-[4/3]" />
                )}
                <h3 className="mt-4 text-lg font-black text-white">{card.title}</h3>
                <p className="gwm-copy mt-2 text-sm">{card.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-gwm-line bg-gwm-panel-soft">
        <div className="gwm-container gwm-section">
          <h2 className="gwm-heading-lg mb-6">
            {isRtl ? "هندسة تمنحك المزيد" : "Engineered to go with more"}
          </h2>
          <div className="gwm-tabs mb-6">
            {vehicle.featureBanner.tabs.map((tab, index) => (
              <span
                key={tab}
                className={`gwm-tab ${index === 0 ? "gwm-tab-active" : ""}`}
              >
                {tab}
              </span>
            ))}
          </div>
          {vehicle.featureBanner.media ? (
            <div
              className="aspect-[16/7] gwm-media-fade bg-cover bg-center"
              role="img"
              aria-label={vehicle.featureBanner.media.alt}
              style={{ backgroundImage: `url(${vehicle.featureBanner.media.url})` }}
            />
          ) : (
            <PhotoPlaceholder
              label={vehicle.featureBanner.placeholder}
              className="aspect-[16/7]"
            />
          )}
          <div className="mt-6 max-w-2xl">
            <h3 className="text-lg font-black text-white">
              {vehicle.featureBanner.title}
            </h3>
            <p className="gwm-copy mt-2">{vehicle.featureBanner.description}</p>
          </div>
          <div className="mt-6 flex items-baseline gap-3 border-t border-gwm-line pt-6">
            <span className="text-3xl font-black text-white">
              {vehicle.featureBanner.stat.value}
            </span>
            <span className="text-sm font-bold text-gwm-muted">
              {vehicle.featureBanner.stat.label}
            </span>
          </div>
        </div>
      </section>

      <section className="gwm-section">
        <div className="gwm-container">
          <SectionHeading
            eyebrow={isRtl ? "التفاصيل" : "In the details"}
            title={isRtl ? "المظهر الخارجي" : "Exterior"}
          />
          <div className="grid gap-4 md:grid-cols-3">
            {vehicle.details.exterior.map((shot) => (
              <figure key={shot.caption} className="m-0">
                {shot.media ? (
                  <div
                    className="aspect-[4/3] gwm-media-fade bg-cover bg-center"
                    role="img"
                    aria-label={shot.media.alt}
                    style={{ backgroundImage: `url(${shot.media.url})` }}
                  />
                ) : (
                  <PhotoPlaceholder label={shot.placeholder} className="aspect-[4/3]" />
                )}
                <figcaption className="gwm-copy mt-3 text-sm">{shot.caption}</figcaption>
              </figure>
            ))}
          </div>
          <SectionHeading
            eyebrow={isRtl ? "التفاصيل" : "In the details"}
            title={isRtl ? "المقصورة" : "Interior"}
          />
          <div className="grid gap-4 md:grid-cols-3">
            {vehicle.details.interior.map((shot) => (
              <figure key={shot.caption} className="m-0">
                {shot.media ? (
                  <div
                    className="aspect-[4/3] gwm-media-fade bg-cover bg-center"
                    role="img"
                    aria-label={shot.media.alt}
                    style={{ backgroundImage: `url(${shot.media.url})` }}
                  />
                ) : (
                  <PhotoPlaceholder label={shot.placeholder} className="aspect-[4/3]" />
                )}
                <figcaption className="gwm-copy mt-3 text-sm">{shot.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-gwm-line bg-gwm-panel-soft">
        <div className="gwm-container gwm-section">
          <h2 className="gwm-heading-lg mb-3 text-center">
            {isRtl ? `منظور 360° خارجي` : "360° Exterior"}
          </h2>
          <p className="gwm-caption mb-6 text-center">{vehicle.spinCaption}</p>
          <div className="mx-auto max-w-lg">
            {vehicle.spin360 ? (
              <Viewer360
                frames={vehicle.spin360.frames}
                alt={vehicle.spin360.alt}
                dragLabel={isRtl ? "اسحب للتدوير" : "Drag to rotate"}
              />
            ) : (
              <PhotoPlaceholder
                label={`360° · ${vehicle.model}`}
                className="aspect-square"
              />
            )}
          </div>
        </div>
      </section>

      <section className="gwm-section">
        <div className="gwm-container">
          <h2 className="gwm-heading-lg mb-4 text-center">{vehicle.safety.title}</h2>
          <div className="gwm-tabs mb-6 justify-center">
            {vehicle.safety.tabs.map((tab, index) => (
              <span
                key={tab}
                className={`gwm-tab ${index === 0 ? "gwm-tab-active" : ""}`}
              >
                {tab}
              </span>
            ))}
          </div>
          <PhotoPlaceholder
            label={vehicle.safety.placeholder}
            className="aspect-[16/9]"
          />
          <p className="mt-4 flex items-center gap-2 text-sm font-black text-white">
            <Icon name="shield" className="text-gwm-red" />
            {vehicle.safety.caption}
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {vehicle.safety.features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col items-center border border-gwm-line bg-gwm-panel p-5 text-center"
              >
                <Icon name="shield" className="text-gwm-red" />
                <h3 className="mt-3 text-sm font-black text-white">{feature.title}</h3>
                {feature.summary ? (
                  <p className="gwm-copy mt-2 text-sm">{feature.summary}</p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-gwm-line bg-gwm-panel-soft">
        <div className="gwm-container gwm-section">
          <h2 className="gwm-heading-lg mb-6 text-center">
            {isRtl ? "اختر لونك" : "Choose Your Colour"}
          </h2>
          <PhotoPlaceholder
            label={vehicle.colorPlaceholder}
            className="mx-auto aspect-[16/9] max-w-3xl"
          />
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {vehicle.colors.map((color, index) => (
              <span
                key={color.name}
                className="flex flex-col items-center gap-2 text-xs font-bold text-white"
              >
                <span
                  className={`h-8 w-8 rounded-full border-2 ${index === 0 ? "border-gwm-red" : "border-white/25"}`}
                  style={{ background: color.value }}
                />
                {color.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="gwm-section">
        <div className="gwm-container">
          <SectionHeading
            eyebrow={isRtl ? "الأسعار" : "Pricing"}
            title={isRtl ? "أسعار الفئات" : "Model Pricing"}
          />
          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-gwm-line text-start">
                  <th className="py-3 pe-4 text-xs font-black uppercase text-gwm-muted">
                    {isRtl ? "الفئة" : "Trim"}
                  </th>
                  <th className="py-3 pe-4 text-xs font-black uppercase text-gwm-muted">
                    {isRtl ? "السعر" : "Price"}
                  </th>
                  <th className="py-3 pe-4 text-xs font-black uppercase text-gwm-muted">
                    {isRtl ? "الضريبة" : "VAT"}
                  </th>
                  <th className="py-3 text-xs font-black uppercase text-gwm-muted">
                    {isRtl ? "السعر بعد الضريبة" : "Price w/ VAT"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {vehicle.pricing.map((row) => (
                  <tr key={row.trim} className="border-b border-gwm-line">
                    <td className="py-3 pe-4 font-black text-white">{row.trim}</td>
                    <td className="py-3 pe-4 font-bold text-gwm-muted">{row.price}</td>
                    <td className="py-3 pe-4 font-bold text-gwm-muted">{row.vat}</td>
                    <td className="py-3 font-black text-white">{row.priceWithVat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="gwm-caption mt-4">{vehicle.pricingNote}</p>
          <div className="mt-8 text-center">
            <Link href={`/${locale}/forms`} className="gwm-button gwm-button-primary">
              {vehicle.continueLabel}
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-gwm-line bg-gwm-panel-soft">
        <div className="gwm-container gwm-section">
          <h2 className="gwm-heading-lg mb-6 text-center">
            {isRtl ? "الضمان" : "Warranty"}
          </h2>
          <div className="mx-auto max-w-2xl space-y-2 text-center">
            {vehicle.warranty.map((line) => (
              <p key={line} className="text-sm font-bold text-white">
                {line}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-gwm-line bg-gwm-panel-soft">
        <div className="gwm-container gwm-section">
          <SectionHeading
            eyebrow={isRtl ? "المواصفات" : "Specifications"}
            title={isRtl ? "المواصفات الكاملة" : "Specifications"}
          />
          <div className="grid gap-6 md:grid-cols-2">
            {vehicle.specs.map((group, index) => (
              <div
                key={group.trimName ?? index}
                className="border border-gwm-line bg-gwm-panel p-6"
              >
                {group.trimName ? (
                  <h3 className="mb-4 text-sm font-black uppercase text-gwm-red">
                    {group.trimName}
                  </h3>
                ) : null}
                <div className="divide-y divide-gwm-line">
                  {group.rows.map((row) => (
                    <div key={row.label} className="grid gap-2 py-3 sm:grid-cols-2">
                      <span className="font-bold text-gwm-muted">{row.label}</span>
                      <span className="font-black text-white">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gwm-section">
        <div className="gwm-container">
          <div className="mb-8 flex items-end justify-between gap-5">
            <h2 className="gwm-heading-lg">
              {isRtl ? "قد يعجبك أيضاً" : "You May Also Like"}
            </h2>
            <Link
              href={`/${locale}/vehicles`}
              className="whitespace-nowrap text-xs font-black uppercase text-gwm-red hover:text-white"
            >
              {isRtl ? "عرض الكل" : "View all"} →
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {related.map((item) => (
              <article
                key={item.slug}
                className="border border-gwm-line bg-gwm-panel p-5"
              >
                {item.heroMedia ? (
                  <div
                    className="mb-5 aspect-[4/3] gwm-media-fade bg-cover bg-center"
                    role="img"
                    aria-label={item.heroMedia.alt}
                    style={{ backgroundImage: `url(${item.heroMedia.url})` }}
                  />
                ) : (
                  <PhotoPlaceholder
                    label={item.heroPlaceholder}
                    className="mb-5 aspect-[4/3]"
                  />
                )}
                <h3 className="text-lg font-black text-white">
                  {item.brand} {item.model}
                </h3>
                <p className="gwm-copy mt-1 text-sm">{item.summary}</p>
                <Link
                  href={`/${locale}/vehicles/${item.slug}`}
                  className="mt-4 inline-flex text-xs font-black uppercase text-gwm-red hover:text-white"
                >
                  {isRtl ? "استكشف" : "Explore"} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand locale={locale} />
      <SiteFooter locale={locale} />
    </main>
  );
}
