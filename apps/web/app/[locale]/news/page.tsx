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
    home: { news: newsItems },
    news,
  } = getSiteContent(locale);

  return (
    <main className="gwm-app-shell">
      <SiteHeader locale={locale} />
      <PageHero
        eyebrow={news.hero.eyebrow}
        title={news.hero.title}
        intro={news.hero.intro}
        placeholder={news.hero.placeholder}
      />

      <section className="gwm-section">
        <div className="gwm-container">
          <SectionHeading eyebrow={news.section.eyebrow} title={news.section.title} />
          <div className="divide-y divide-gwm-line border-y border-gwm-line">
            {newsItems.map((item) => (
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
