import Link from "next/link";
import { isLocale, type Locale } from "@gwm/shared";
import { notFound } from "next/navigation";
import { getSiteContent } from "../../../lib/content/site";
import { getModelCatalogue, getModelThumbnail } from "../../../lib/content/models";
import {
  PageHero,
  PhotoPlaceholder,
  SectionHeading,
  SiteFooter,
  SiteHeader,
} from "../components";

type VehiclesPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function VehiclesPage({ params }: VehiclesPageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const { vehicles, home, catalogue } = getSiteContent(locale);
  const brandGroups = getModelCatalogue(locale);

  return (
    <main className="gwm-app-shell">
      <SiteHeader locale={locale} />
      <PageHero
        eyebrow={catalogue.hero.eyebrow}
        title={catalogue.hero.title}
        intro={catalogue.hero.intro}
        placeholder={catalogue.hero.placeholder}
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
            eyebrow={catalogue.detailedSection.eyebrow}
            title={catalogue.detailedSection.title}
            summary={catalogue.detailedSection.summary}
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {vehicles.map((vehicle) => (
              <article
                key={vehicle.slug}
                className="border border-gwm-line bg-gwm-panel p-5"
              >
                {vehicle.heroMedia ? (
                  <div
                    className="mb-5 aspect-[16/10] gwm-media-fade bg-cover bg-center"
                    role="img"
                    aria-label={vehicle.heroMedia.alt}
                    style={{ backgroundImage: `url(${vehicle.heroMedia.url})` }}
                  />
                ) : (
                  <PhotoPlaceholder
                    label={vehicle.heroPlaceholder}
                    className="mb-5 aspect-[16/10]"
                  />
                )}
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
                    {catalogue.viewDetailsLabel}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gwm-line bg-gwm-panel-soft">
        <div className="gwm-container gwm-section">
          <SectionHeading
            eyebrow={catalogue.fullRangeSection.eyebrow}
            title={catalogue.fullRangeSection.title}
            summary={catalogue.fullRangeSection.summary}
          />
          <div className="flex flex-col gap-10">
            {brandGroups.map((group) => (
              <div key={group.brand}>
                <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2 border-b border-gwm-line pb-3">
                  <h3 className="text-xl font-black text-white">{group.brand}</h3>
                  <p className="gwm-caption">{group.tagline}</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.models.map((entry) => {
                    const thumbnail = getModelThumbnail(entry.name);
                    return (
                      <article
                        key={entry.name}
                        className="border border-gwm-line bg-gwm-panel p-4"
                      >
                        {thumbnail ? (
                          <div
                            className="-mx-4 -mt-4 mb-4 aspect-[4/3] gwm-media-fade bg-cover bg-center"
                            role="img"
                            aria-label={`${entry.name} exterior shot`}
                            style={{ backgroundImage: `url(${thumbnail})` }}
                          />
                        ) : null}
                        <div className="flex items-start justify-between gap-3">
                          <h4 className="text-lg font-black text-white">{entry.name}</h4>
                          <span className="whitespace-nowrap text-[10px] font-black uppercase text-gwm-muted">
                            {catalogue.statusLabels[entry.status]}
                          </span>
                        </div>
                        <p className="mt-1 text-xs font-bold uppercase text-gwm-red">
                          {entry.segment}
                        </p>
                        <p className="mt-3 text-sm font-bold text-white">
                          {entry.tagline}
                        </p>
                        <p className="gwm-copy mt-2 text-sm">{entry.intro}</p>
                        <div className="mt-5">
                          {entry.slug ? (
                            <Link
                              href={`/${locale}/vehicles/${entry.slug}`}
                              className="border-b border-gwm-red pb-1 text-xs font-black uppercase text-white"
                            >
                              {catalogue.viewDetailsLabel}
                            </Link>
                          ) : (
                            <Link
                              href={`/${locale}/forms`}
                              className="border-b border-gwm-red pb-1 text-xs font-black uppercase text-white"
                            >
                              {catalogue.bookTestDriveLabel}
                            </Link>
                          )}
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
