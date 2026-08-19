import { isLocale, type Locale } from "@gwm/shared";
import { notFound } from "next/navigation";
import { getSiteContent } from "../../../lib/content/site";
import { PageHero, SectionHeading, SiteFooter, SiteHeader } from "../components";

type NewsPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function NewsPage({ params }: NewsPageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const {
    home: { news },
  } = getSiteContent(locale);

  return (
    <main className="gwm-app-shell">
      <SiteHeader locale={locale} />
      <PageHero
        eyebrow={locale === "ar" ? "الأخبار" : "News"}
        title={locale === "ar" ? "آخر تحديثات GWM" : "Latest from GWM"}
        intro={
          locale === "ar"
            ? "محتوى ثابت للـ MVP يغطي أخبار المنتجات والخدمة والمنصة الإقليمية."
            : "Static MVP content covering product, service and regional platform updates."
        }
        placeholder={locale === "ar" ? "صورة: غرفة أخبار GWM" : "Photo: GWM newsroom"}
      />

      <section className="gwm-section">
        <div className="gwm-container">
          <SectionHeading
            eyebrow={locale === "ar" ? "المستجدات" : "Updates"}
            title={locale === "ar" ? "قائمة تحريرية مركزة" : "A focused editorial list"}
          />
          <div className="divide-y divide-gwm-line border-y border-gwm-line">
            {news.map((item) => (
              <article
                key={`${item.date}-${item.title}`}
                className="flex items-center justify-between gap-4 py-6"
              >
                <div>
                  <time className="text-xs font-black uppercase text-gwm-muted">
                    {item.date}
                  </time>
                  <h2 className="mt-1 text-xl font-black text-white">{item.title}</h2>
                </div>
                <span className="text-gwm-red">→</span>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
