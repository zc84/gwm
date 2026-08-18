import { isLocale, type Locale } from "@gwm/shared";
import { notFound } from "next/navigation";
import { getSiteContent } from "../../../lib/content/site";
import { PageHero, SectionHeading, SiteFooter, SiteHeader } from "../components";

type NewsPageProps = {
  params: Promise<{ locale: string }>;
};

function formatDate(date: string, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === "ar" ? "ar" : "en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

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
        image="/media/contact-hero.png"
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
                className="grid gap-4 py-8 md:grid-cols-[220px_1fr]"
              >
                <time className="text-sm font-black uppercase text-gwm-red">
                  {formatDate(item.date, locale)}
                </time>
                <div>
                  <h2 className="text-2xl font-black text-white">{item.title}</h2>
                  <p className="gwm-copy mt-3 max-w-3xl">{item.summary}</p>
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
