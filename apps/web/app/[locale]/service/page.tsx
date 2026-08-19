import Link from "next/link";
import { isLocale, type Locale } from "@gwm/shared";
import { notFound } from "next/navigation";
import { getSiteContent } from "../../../lib/content/site";
import {
  CtaBand,
  Icon,
  PageHero,
  QuickActionBar,
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
  const { service, vehicles } = getSiteContent(locale);

  return (
    <main className="gwm-app-shell">
      <SiteHeader locale={locale} />
      <PageHero
        eyebrow={service.hero.eyebrow}
        title={service.hero.title}
        intro={service.hero.intro}
        image="/media/service-hero.png"
        backLink={{ href: `/${locale}`, label: service.hero.backLabel }}
      />

      <StatBand stats={service.stats} />

      <section className="gwm-section">
        <div className="gwm-container">
          <h2 className="gwm-heading-lg mb-8">{service.needsTitle}</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {service.needs.map((item) => (
              <article key={item.title} className="border border-gwm-line bg-gwm-panel p-5">
                <Icon name={item.icon} className="text-gwm-red" />
                <h3 className="mt-4 text-lg font-black text-white">{item.title}</h3>
                <p className="gwm-copy mt-2 text-sm">{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-gwm-line bg-gwm-panel-soft">
        <div className="gwm-container gwm-section">
          <h2 className="gwm-heading-lg mb-8">{service.plansTitle}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {service.plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative border p-6 ${plan.featured ? "border-gwm-red bg-gwm-panel-raised" : "border-gwm-line bg-gwm-panel"}`}
              >
                {plan.badge ? (
                  <span className="absolute end-6 top-6 rounded-full bg-gwm-red px-2 py-0.5 text-[10px] font-black uppercase text-white">
                    {plan.badge}
                  </span>
                ) : null}
                <h3 className="text-xl font-black text-white">{plan.name}</h3>
                <p className="mt-1 text-sm font-bold text-gwm-muted">{plan.price}</p>
                <ul className="mt-5 space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gwm-copy">
                      <Icon name="check" className="mt-0.5 shrink-0 text-gwm-red" />
                      <span className="gwm-copy">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/${locale}/forms`}
                  className={`gwm-button mt-6 w-full ${plan.featured ? "gwm-button-primary" : "gwm-button-secondary"}`}
                >
                  {plan.ctaLabel}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gwm-section">
        <div className="gwm-container">
          <SectionHeading eyebrow={service.hero.eyebrow} title={service.ownership.title} summary={service.ownership.summary} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {service.ownership.features.map((feature) => (
              <div key={feature.title} className="border border-gwm-line bg-gwm-panel p-5">
                <Icon name={feature.icon} className="text-gwm-red" />
                <h3 className="mt-4 text-sm font-black text-white">{feature.title}</h3>
                <p className="gwm-copy mt-2 text-sm">{feature.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-gwm-line bg-gwm-panel-soft">
        <div className="gwm-container gwm-section">
          <h2 className="gwm-heading-lg mb-8">{service.handbooksTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {vehicles.map((vehicle) => (
              <a
                key={vehicle.slug}
                href="#"
                className="flex items-center justify-between gap-4 border border-gwm-line bg-gwm-panel p-5 hover:bg-gwm-panel-raised"
              >
                <div className="flex items-center gap-3">
                  <Icon name="manual" className="text-gwm-red" />
                  <div>
                    <div className="text-sm font-black text-white">
                      {vehicle.brand} {vehicle.model}
                    </div>
                    <div className="gwm-caption mt-1">{service.handbookKind}</div>
                  </div>
                </div>
                <Icon name="download" className="text-gwm-muted" />
              </a>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href={`/${locale}/countries`} className="gwm-button gwm-button-secondary">
              {service.findServiceLabel}
            </Link>
          </div>
        </div>
      </section>

      <section className="gwm-section">
        <div className="gwm-container">
          <h2 className="gwm-heading-lg mb-8">{service.faqTitle}</h2>
          <div className="divide-y divide-gwm-line border-y border-gwm-line">
            {service.faq.map((item, index) => (
              <details key={item.question} className="group py-5" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-black text-white">
                  {item.question}
                  <span className="text-gwm-red group-open:hidden">+</span>
                  <span className="hidden text-gwm-red group-open:inline">−</span>
                </summary>
                <p className="gwm-copy mt-4 max-w-3xl">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand locale={locale} />
      <QuickActionBar locale={locale} />
      <SiteFooter locale={locale} />
    </main>
  );
}
