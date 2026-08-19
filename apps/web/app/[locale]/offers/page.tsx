import Link from "next/link";
import { isLocale, type Locale } from "@gwm/shared";
import { notFound } from "next/navigation";
import { getSiteContent } from "../../../lib/content/site";
import { PageHero, SiteFooter, SiteHeader } from "../components";

type OffersPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function OffersPage({ params }: OffersPageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const { offers } = getSiteContent(locale);

  return (
    <main className="gwm-app-shell">
      <SiteHeader locale={locale} />
      <PageHero
        eyebrow={offers.hero.eyebrow}
        title={offers.hero.title}
        intro={offers.hero.intro}
        placeholder={offers.hero.placeholder}
      />

      <section className="gwm-section">
        <div className="gwm-container">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {offers.offers.map((offer) => (
              <article
                key={offer.title}
                className="flex flex-col border border-gwm-line bg-gwm-panel p-5"
              >
                <p className="text-xs font-black uppercase text-gwm-red">
                  {offer.brand} {offer.model}
                </p>
                <h2 className="mt-3 text-xl font-black text-white">{offer.title}</h2>
                <p className="gwm-caption mt-2">{offer.validity}</p>
                <p className="gwm-copy mt-4 flex-1 text-sm">{offer.terms}</p>
                <Link
                  href={`/${locale}/forms`}
                  className="gwm-button gwm-button-secondary mt-6 w-full"
                >
                  {offer.ctaLabel}
                </Link>
              </article>
            ))}
          </div>
          <p className="gwm-caption mt-8 max-w-2xl">{offers.disclaimer}</p>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
