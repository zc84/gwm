import Link from "next/link";
import { isLocale, type Locale } from "@gwm/shared";
import { notFound } from "next/navigation";
import {
  getSiteContent,
  getVehicle,
  getVehicleStaticParams,
} from "../../../../lib/content/site";
import {
  PageHero,
  SectionHeading,
  SiteFooter,
  SiteHeader,
  StatBand,
} from "../../components";

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

  const { service } = getSiteContent(locale);

  return (
    <main className="gwm-app-shell">
      <SiteHeader locale={locale} />
      <PageHero
        eyebrow={vehicle.brand}
        title={vehicle.model}
        intro={vehicle.summary}
        image="/media/product-hero.png"
      >
        <div className="flex flex-wrap gap-3">
          <Link href={`/${locale}/forms`} className="gwm-button gwm-button-primary">
            {locale === "ar" ? "احجز تجربة قيادة" : "Book a test drive"}
          </Link>
          <Link href={`/${locale}/forms`} className="gwm-button gwm-button-secondary">
            {locale === "ar" ? "طلب كتيب" : "Request brochure"}
          </Link>
        </div>
      </PageHero>

      <nav className="sticky top-0 z-10 border-y border-gwm-line bg-black/90 backdrop-blur">
        <div className="gwm-container flex gap-2 overflow-x-auto py-3 text-xs font-black uppercase text-gwm-muted">
          {[
            "overview",
            "design",
            "performance",
            "interior",
            "specifications",
            "gallery",
          ].map((item, index) => (
            <a
              key={item}
              href={`#${item}`}
              className={`gwm-chip whitespace-nowrap ${index === 0 ? "gwm-chip-active" : ""}`}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      <StatBand stats={service.stats} />

      <section id="overview" className="gwm-section">
        <div className="gwm-container">
          <SectionHeading
            eyebrow={locale === "ar" ? "نظرة عامة" : "Overview"}
            title={
              locale === "ar" ? "مصممة لرحلات متعددة" : "Built for multiple journeys"
            }
            summary={vehicle.summary}
          />
          <div className="grid gap-px bg-gwm-line md:grid-cols-3">
            {vehicle.highlights.map((highlight, index) => (
              <article key={highlight} className="bg-gwm-panel p-6">
                <span className="text-sm font-black text-gwm-red">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-12 text-lg font-bold leading-7 text-white">
                  {highlight}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="design" className="border-y border-gwm-line bg-gwm-panel-soft">
        <div className="gwm-container gwm-section grid gap-8 md:grid-cols-2">
          <div className="aspect-[4/3] bg-[linear-gradient(135deg,#050506,#1a1c22_56%,#72041e)]" />
          <div>
            <p className="gwm-eyebrow mb-3">{locale === "ar" ? "التصميم" : "Design"}</p>
            <h2 className="gwm-heading-lg">
              {locale === "ar"
                ? "حضور قوي بتفاصيل دقيقة"
                : "Strong presence, precise details"}
            </h2>
            <p className="gwm-copy mt-5">
              {locale === "ar"
                ? "توازن الواجهة بين الحضور الجريء والتفاصيل العملية لرحلات المدينة والطرق المفتوحة."
                : "The exterior balances bold road presence with functional detail for city use and open-road travel."}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {vehicle.colors.map((color) => (
                <span
                  key={color.name}
                  className="flex items-center gap-2 text-sm font-bold text-white"
                >
                  <span
                    className="h-5 w-5 rounded-full border border-white/25"
                    style={{ background: color.value }}
                  />
                  {color.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="performance" className="gwm-section">
        <div className="gwm-container">
          <SectionHeading
            eyebrow={locale === "ar" ? "الأداء" : "Performance"}
            title={
              locale === "ar" ? "أرقام واضحة للقرار" : "Clear numbers for the decision"
            }
          />
          <div className="grid gap-px bg-gwm-line md:grid-cols-4">
            {vehicle.specs.map((spec) => (
              <div key={spec.label} className="bg-gwm-panel p-5">
                <div className="text-xs font-black uppercase text-gwm-muted">
                  {spec.label}
                </div>
                <div className="mt-4 text-xl font-black text-white">{spec.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="interior" className="border-y border-gwm-line bg-gwm-panel">
        <div className="gwm-container gwm-section">
          <SectionHeading
            eyebrow={locale === "ar" ? "المقصورة" : "Interior"}
            title={locale === "ar" ? "مساحة هادئة ومتصلة" : "A calm connected cabin"}
            summary={
              locale === "ar"
                ? "مواد داكنة، شاشات واضحة، ومساحة عملية تجعل الرحلات اليومية والطويلة أكثر راحة."
                : "Dark materials, clear displays and practical space make daily and long-distance trips easier."
            }
          />
        </div>
      </section>

      <section id="specifications" className="gwm-section">
        <div className="gwm-container">
          <SectionHeading
            eyebrow={locale === "ar" ? "المواصفات" : "Specifications"}
            title={locale === "ar" ? "جدول سريع" : "Quick spec table"}
          />
          <div className="divide-y divide-gwm-line border-y border-gwm-line">
            {vehicle.specs.map((spec) => (
              <div key={spec.label} className="grid gap-2 py-4 md:grid-cols-2">
                <span className="font-bold text-gwm-muted">{spec.label}</span>
                <span className="font-black text-white">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="border-t border-gwm-line bg-gwm-panel-soft">
        <div className="gwm-container gwm-section">
          <SectionHeading
            eyebrow={locale === "ar" ? "المعرض" : "Gallery"}
            title={locale === "ar" ? "لقطات من الرحلة" : "Journey views"}
          />
          <div className="grid gap-4 md:grid-cols-3">
            {["Exterior", "Cabin", "Terrain"].map((item) => (
              <div
                key={item}
                className="aspect-[4/3] bg-[linear-gradient(135deg,#14151a,#050506,#72041e)]"
              />
            ))}
          </div>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
