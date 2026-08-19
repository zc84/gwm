import { isLocale, type Locale } from "@gwm/shared";
import { notFound } from "next/navigation";
import { getSiteContent } from "../../../lib/content/site";
import { PageHero, SiteFooter, SiteHeader } from "../components";

type AboutPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const { about } = getSiteContent(locale);

  return (
    <main className="gwm-app-shell">
      <SiteHeader locale={locale} />
      <PageHero
        eyebrow={about.hero.eyebrow}
        title={about.hero.title}
        intro={about.hero.intro}
        placeholder={about.hero.placeholder}
      />

      <section className="gwm-section">
        <div className="gwm-container">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {about.sections.map((section) => (
              <article key={section.title} className="border border-gwm-line bg-gwm-panel p-5">
                <h2 className="text-lg font-black text-white">{section.title}</h2>
                <p className="gwm-copy mt-3 text-sm">{section.summary}</p>
              </article>
            ))}
          </div>
          <p className="gwm-caption mt-8 max-w-2xl">{about.disclaimer}</p>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
