import Link from "next/link";
import { isLocale, type Locale } from "@gwm/shared";
import { notFound } from "next/navigation";
import { getSiteContent } from "../../../lib/content/site";
import {
  PageHero,
  SectionHeading,
  SiteFooter,
  SiteHeader,
  StatBand,
} from "../components";

type ServicePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ServicePage({ params }: ServicePageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const { service } = getSiteContent(locale);

  return (
    <main className="gwm-app-shell">
      <SiteHeader locale={locale} />
      <PageHero
        eyebrow={service.hero.eyebrow}
        title={service.hero.title}
        intro={service.hero.intro}
        image="/media/service-hero.png"
      >
        <Link href={`/${locale}/forms`} className="gwm-button gwm-button-primary">
          {locale === "ar" ? "ابدأ طلب الصيانة" : "Start service request"}
        </Link>
      </PageHero>

      <StatBand stats={service.stats} />

      <section className="gwm-section">
        <div className="gwm-container">
          <SectionHeading
            eyebrow={locale === "ar" ? "كل ما تحتاجه" : "Everything you need"}
            title={locale === "ar" ? "رحلة صيانة واضحة" : "A clear ownership flow"}
            summary={
              locale === "ar"
                ? "تنظم الصفحة الخطوات الأساسية من الحجز إلى الوثائق والدعم العاجل."
                : "The page organizes core steps from booking to documents and urgent support."
            }
          />
          <div className="grid gap-px bg-gwm-line md:grid-cols-3">
            {service.care.map((item, index) => (
              <article key={item.title} className="bg-gwm-panel p-6">
                <span className="text-sm font-black text-gwm-red">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-12 text-xl font-black text-white">{item.title}</h2>
                <p className="gwm-copy mt-4">{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-gwm-line bg-gwm-panel-soft">
        <div className="gwm-container gwm-section">
          <SectionHeading
            eyebrow={locale === "ar" ? "راحة مسبقة" : "Prepared peace of mind"}
            title={
              locale === "ar"
                ? "الضمان والخطط والكتيبات"
                : "Warranty, plans and handbooks"
            }
          />
          <div className="grid gap-4 md:grid-cols-3">
            {service.warranty.map((item) => (
              <article
                key={item.title}
                className="border border-gwm-line bg-gwm-panel p-6"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="gwm-copy mt-4">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gwm-section">
        <div className="gwm-container">
          <SectionHeading
            eyebrow={locale === "ar" ? "أسئلة متكررة" : "Frequently asked"}
            title={locale === "ar" ? "إجابات مختصرة" : "Short answers"}
          />
          <div className="divide-y divide-gwm-line border-y border-gwm-line">
            {service.faq.map((item) => (
              <details key={item.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-black text-white">
                  {item.question}
                  <span className="text-gwm-red">+</span>
                </summary>
                <p className="gwm-copy mt-4 max-w-3xl">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gwm-red">
        <div className="gwm-container flex flex-col gap-5 py-8 md:flex-row md:items-center md:justify-between">
          <h2 className="text-2xl font-black text-white">
            {locale === "ar" ? "جاهز للتواصل مع GWM؟" : "Ready to talk with GWM?"}
          </h2>
          <Link href={`/${locale}/forms`} className="gwm-button bg-black text-white">
            {locale === "ar" ? "تواصل الآن" : "Contact now"}
          </Link>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
