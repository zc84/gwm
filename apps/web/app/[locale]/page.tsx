import Link from "next/link";
import { notFound } from "next/navigation";
import { getTextDirection, isLocale, localeLabels, type Locale } from "@gwm/shared";
import { getHomeContent } from "../../lib/strapi";
import { CtaBand, PhotoPlaceholder, QuickActionBar, SiteFooter } from "./components";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const content = await getHomeContent(locale);
  const alternateLocale = locale === "en" ? "ar" : "en";
  const isRtl = getTextDirection(locale) === "rtl";

  return (
    <main className="gwm-app-shell text-gwm-text">
      <header className="absolute inset-x-0 top-0 z-20 border-b border-white/10 bg-black/45 backdrop-blur">
        <div className="gwm-container flex h-20 items-center justify-between">
          <Link href={`/${locale}`} className="text-2xl font-black text-white">
            GWM
          </Link>
          <nav className="hidden items-center gap-7 text-xs font-black uppercase text-white/78 md:flex">
            {[
              { label: content.navItems[0], href: "#brands" },
              { label: content.navItems[1], href: `/${locale}/vehicles` },
              { label: content.navItems[2], href: `/${locale}` },
              { label: content.navItems[3], href: "#technology" },
              { label: content.navItems[4], href: `/${locale}/forms` },
            ].map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <Link
            href={`/${alternateLocale}`}
            className="border-b border-white/50 text-sm font-bold text-white"
            aria-label={localeLabels[alternateLocale]}
          >
            {content.languageLabel}
          </Link>
        </div>
      </header>

      <section className="gwm-hero-media">
        {content.hero.media ? (
          <div
            aria-label={content.hero.media.alt}
            className="absolute inset-0 bg-cover bg-center"
            role="img"
            style={{ backgroundImage: `url(${content.hero.media.url})` }}
          />
        ) : null}
        <div className="gwm-container relative z-10 flex min-h-[min(820px,88vh)] flex-col justify-end pb-16 pt-32 md:pb-20">
          <div className="max-w-3xl">
            <p className="gwm-eyebrow mb-5">{content.hero.eyebrow}</p>
            <h1 className="gwm-display-xl max-w-[11ch]">{content.hero.title}</h1>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#vehicles" className="gwm-button gwm-button-primary">
                {content.hero.primaryCta} →
              </a>
            </div>
          </div>
          <div className="mt-10 flex gap-2">
            {[0, 1, 2, 3, 4].map((dot) => (
              <span
                key={dot}
                className={`h-1.5 w-6 rounded-full ${dot === 2 ? "bg-gwm-red" : "bg-white/25"}`}
              />
            ))}
          </div>
        </div>
      </section>

      <QuickActionBar locale={locale} />

      <section id="brands" className="gwm-section">
        <div className="gwm-container">
          <h2 className="gwm-heading-lg mb-8 text-center">
            {isRtl ? "استكشف عائلة GWM" : "Explore the GWM Family"}
          </h2>
          <div className="grid gap-4 md:grid-cols-4">
            {content.brands.map((brand) => (
              <article key={brand.name} className="border border-gwm-line bg-gwm-panel p-5">
                <PhotoPlaceholder label={brand.placeholder} className="mb-5 aspect-[4/3]" />
                <div className="text-lg font-black uppercase text-white">{brand.name}</div>
                <p className="gwm-copy mt-2 text-sm">{brand.summary}</p>
                <Link
                  href={`/${locale}${brand.href}`}
                  className="mt-5 inline-flex text-xs font-black uppercase text-gwm-red hover:text-white"
                >
                  {isRtl ? `استكشف ${brand.name}` : `Explore ${brand.name}`} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="vehicles" className="border-y border-gwm-line bg-gwm-panel-soft">
        <div className="gwm-container gwm-section">
          <div className="mb-8 flex items-end justify-between gap-5">
            <h2 className="gwm-heading-lg">{isRtl ? "الطرازات المختارة" : "Featured Models"}</h2>
            <Link
              href={`/${locale}/vehicles`}
              className="whitespace-nowrap text-xs font-black uppercase text-gwm-red hover:text-white"
            >
              {content.viewAllLabel} →
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {content.featuredVehicles.map((vehicle) => (
              <article
                key={`${vehicle.brand}-${vehicle.model}`}
                className="border border-gwm-line bg-gwm-panel p-5"
              >
                <PhotoPlaceholder label={vehicle.placeholder} className="mb-5 aspect-[4/3]" />
                <h3 className="text-xl font-black text-white">
                  {vehicle.brand} {vehicle.model}
                </h3>
                <p className="gwm-copy mt-1 text-sm">{vehicle.summary}</p>
                <Link
                  href={`/${locale}${vehicle.href}`}
                  className="mt-5 inline-flex text-xs font-black uppercase text-gwm-red hover:text-white"
                >
                  {vehicle.ctaLabel} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="technology" className="gwm-section">
        <div className="gwm-container">
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <h2 className="gwm-heading-lg max-w-xl">{content.technology.title}</h2>
            <a
              href="#technology"
              className="gwm-button gwm-button-secondary whitespace-nowrap"
            >
              {content.technology.ctaLabel}
            </a>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
            <div className="relative">
              <PhotoPlaceholder label={content.technology.placeholder} className="aspect-[4/3]" />
              <p className="mt-3 text-sm font-bold text-white">{content.technology.caption}</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-3 gap-px bg-gwm-line">
                {content.technology.stats.map((stat) => (
                  <div key={stat.label} className="bg-gwm-panel px-3 py-4 text-center">
                    <div className="text-xl font-black text-white">{stat.value}</div>
                    <div className="mt-1 text-[10px] font-black uppercase text-gwm-muted">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              {content.technology.features.map((feature) => (
                <div key={feature.title} className="border border-gwm-line bg-gwm-panel p-4">
                  <h3 className="text-sm font-black text-white">{feature.title}</h3>
                  <p className="gwm-copy mt-2 text-sm">{feature.summary}</p>
                  <a
                    href="#technology"
                    className="mt-3 inline-flex text-xs font-black uppercase text-gwm-red hover:text-white"
                  >
                    {feature.learnMoreLabel} →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="countries" className="border-y border-gwm-line bg-gwm-panel">
        <div className="gwm-container gwm-section">
          <div className="mb-8 flex items-end justify-between gap-5">
            <h2 className="gwm-heading-lg">{content.networkTitle}</h2>
            <Link
              href={`/${locale}/countries`}
              className="whitespace-nowrap text-xs font-black uppercase text-gwm-red hover:text-white"
            >
              {content.networkMapLabel} →
            </Link>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {content.countries.map((country) => (
              <Link
                key={country.country}
                href={`/${locale}/countries`}
                className="w-36 shrink-0"
              >
                <PhotoPlaceholder
                  label={`${country.isoCode} skyline`}
                  className="aspect-[3/4]"
                />
                <div className="mt-2 text-xs font-black uppercase text-gwm-muted">
                  {country.flag} {country.isoCode}
                </div>
                <div className="text-sm font-bold text-white">{country.country}</div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href={`/${locale}/countries`} className="gwm-button gwm-button-secondary">
              {content.findDealerLabel}
            </Link>
          </div>
        </div>
      </section>

      <section className="gwm-section">
        <div className="gwm-container">
          <div className="border border-gwm-line bg-gwm-panel p-6 md:p-8">
            <div className="mb-6 flex items-center justify-between gap-5">
              <h2 className="gwm-heading-lg">{isRtl ? "آخر أخبار GWM" : "Latest from GWM"}</h2>
              <Link
                href={`/${locale}/news`}
                className="text-xs font-black uppercase text-gwm-red hover:text-white"
              >
                {content.newsAllLabel} →
              </Link>
            </div>
            <div className="divide-y divide-gwm-line">
              {content.news.map((item) => (
                <Link
                  key={`${item.date}-${item.title}`}
                  href={`/${locale}/news`}
                  className="flex items-center justify-between gap-4 py-4"
                >
                  <div>
                    <div className="text-xs font-black uppercase text-gwm-muted">{item.date}</div>
                    <div className="mt-1 font-bold text-white">{item.title}</div>
                  </div>
                  <span className="text-gwm-red">→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand locale={locale} />
      <SiteFooter locale={locale} />
    </main>
  );
}
