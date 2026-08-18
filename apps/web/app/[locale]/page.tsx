import Link from "next/link";
import { notFound } from "next/navigation";
import { getTextDirection, isLocale, localeLabels, type Locale } from "@gwm/shared";
import { getHomeContent } from "../../lib/strapi";

const navTargets = ["brands", "vehicles", "technology", "news", "countries"];

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

function formatDate(date: string, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === "ar" ? "ar" : "en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

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
            {content.navItems.map((item, index) => (
              <a key={item} href={`#${navTargets[index] || navTargets[0]}`}>
                {item}
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
        ) : (
          <div className="absolute inset-0 bg-[linear-gradient(118deg,#040405_0%,#13161c_44%,#3b0a16_70%,#d50032_100%)]">
            <div className="absolute inset-x-[8%] bottom-[18%] h-[38%] border border-white/12 bg-[linear-gradient(110deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02)_42%,rgba(213,0,50,0.34))]" />
            <div className="absolute bottom-[24%] h-[18%] w-[54%] max-w-[760px] bg-black/45 blur-3xl ltr:right-[4%] rtl:left-[4%]" />
          </div>
        )}
        <div className="gwm-container relative z-10 flex min-h-[min(820px,88vh)] items-end pb-12 pt-32 md:pb-16">
          <div className="max-w-3xl">
            <p className="gwm-eyebrow mb-5">{content.hero.eyebrow}</p>
            <h1 className="gwm-display-xl max-w-[11ch]">{content.hero.title}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78">
              {content.hero.intro}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#vehicles" className="gwm-button gwm-button-primary">
                {content.hero.primaryCta}
              </a>
              <a href="#countries" className="gwm-button gwm-button-secondary">
                {content.hero.secondaryCta}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-gwm-line bg-gwm-panel">
        <div className="gwm-container grid gap-px bg-gwm-line md:grid-cols-4">
          {content.stats.map((stat) => (
            <div key={stat.label} className="bg-gwm-panel px-6 py-6">
              <div className="text-4xl font-black text-white">{stat.value}</div>
              <div className="mt-2 text-xs font-black uppercase text-gwm-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="brands" className="gwm-section">
        <div className="gwm-container">
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="gwm-eyebrow mb-3">{isRtl ? "العلامات" : "Brand grid"}</p>
              <h2 className="gwm-heading-lg">
                {isRtl ? "مجموعة GWM في مكان واحد" : "The GWM portfolio"}
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {content.filters.map((filter, index) => (
                <span
                  key={filter}
                  className={`gwm-chip ${index === 0 ? "gwm-chip-active" : ""}`}
                >
                  {filter}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-px bg-gwm-line md:grid-cols-4">
            {content.brands.map((brand) => (
              <article key={brand.name} className="bg-gwm-panel p-6">
                <div className="mb-16 text-2xl font-black text-white">{brand.name}</div>
                <p className="gwm-copy">{brand.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="vehicles" className="border-y border-gwm-line bg-gwm-panel-soft">
        <div className="gwm-container gwm-section">
          <div className="mb-10 grid gap-6 md:grid-cols-[0.75fr_1.25fr] md:items-end">
            <div>
              <p className="gwm-eyebrow mb-3">
                {isRtl ? "المركبات المختارة" : "Featured vehicles"}
              </p>
              <h2 className="gwm-heading-lg">
                {isRtl ? "جاهزة للسوق الإقليمي" : "Ready for the region"}
              </h2>
            </div>
            <p className="gwm-copy max-w-2xl md:justify-self-end">
              {content.technology.summary}
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {content.featuredVehicles.map((vehicle) => (
              <article
                key={`${vehicle.brand}-${vehicle.model}`}
                className="border border-gwm-line bg-gwm-panel p-5"
              >
                <div
                  aria-label={vehicle.media?.alt}
                  className="mb-5 aspect-[16/10] bg-cover bg-center"
                  role={vehicle.media ? "img" : undefined}
                  style={{
                    backgroundImage: vehicle.media
                      ? `linear-gradient(180deg,rgba(5,5,6,0.08),rgba(5,5,6,0.5)),url(${vehicle.media.url})`
                      : "linear-gradient(135deg,#1a1c22,#050506 58%,#72041e)",
                  }}
                />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase text-gwm-red">
                      {vehicle.brand}
                    </p>
                    <h3 className="mt-2 text-2xl font-black text-white">
                      {vehicle.model}
                    </h3>
                  </div>
                  <div className="text-end text-xs font-bold uppercase text-gwm-muted">
                    <div>{vehicle.bodyType}</div>
                    <div className="mt-1 text-white">{vehicle.powertrain}</div>
                  </div>
                </div>
                <p className="gwm-copy mt-5">{vehicle.summary}</p>
                <a
                  href="#vehicles"
                  className="mt-7 inline-flex border-b border-gwm-red pb-1 text-sm font-black text-white"
                >
                  {vehicle.ctaLabel}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="technology" className="gwm-section">
        <div className="gwm-container grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="gwm-eyebrow mb-3">{content.technology.eyebrow}</p>
            <h2 className="gwm-heading-lg max-w-xl">{content.technology.title}</h2>
          </div>
          <div className="grid gap-px bg-gwm-line sm:grid-cols-3">
            {content.stats.slice(0, 3).map((stat) => (
              <div key={stat.label} className="bg-gwm-panel-raised p-6">
                <div className="text-3xl font-black text-gwm-red">{stat.value}</div>
                <div className="mt-3 text-sm font-bold text-gwm-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="border-y border-gwm-line bg-gwm-panel">
        <div className="gwm-container gwm-section">
          <div className="mb-8 flex items-end justify-between gap-5">
            <div>
              <p className="gwm-eyebrow mb-3">{isRtl ? "الأخبار" : "News"}</p>
              <h2 className="gwm-heading-lg">
                {isRtl ? "آخر التحديثات" : "Latest updates"}
              </h2>
            </div>
          </div>
          <div className="divide-y divide-gwm-line border-y border-gwm-line">
            {content.news.map((item) => (
              <article
                key={`${item.date}-${item.title}`}
                className="grid gap-4 py-6 md:grid-cols-[180px_1fr]"
              >
                <time className="text-sm font-black uppercase text-gwm-red">
                  {formatDate(item.date, locale)}
                </time>
                <div>
                  <h3 className="text-xl font-black text-white">{item.title}</h3>
                  <p className="gwm-copy mt-2 max-w-3xl">{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="countries" className="gwm-section">
        <div className="gwm-container">
          <div className="mb-8">
            <p className="gwm-eyebrow mb-3">
              {isRtl ? "دليل الدول" : "Country directory"}
            </p>
            <h2 className="gwm-heading-lg">
              {isRtl ? "الوصول إلى GWM في الشرق الأوسط" : "Find GWM by market"}
            </h2>
          </div>
          <div className="grid gap-px bg-gwm-line md:grid-cols-2 lg:grid-cols-3">
            {content.countries.map((country) => (
              <a
                key={country.country}
                href="#countries"
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
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-gwm-line bg-black px-6 py-10">
        <div className="gwm-container flex items-center justify-between text-sm font-bold text-gwm-muted">
          <span>GWM Middle East</span>
          <span>{new Date().getFullYear()}</span>
        </div>
      </footer>
    </main>
  );
}
