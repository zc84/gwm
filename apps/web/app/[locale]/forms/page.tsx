import { isLocale, type Locale } from "@gwm/shared";
import { notFound } from "next/navigation";
import { getSiteContent } from "../../../lib/content/site";
import {
  Icon,
  PageHero,
  QuickActionBar,
  SectionHeading,
  SiteFooter,
  SiteHeader,
} from "../components";

type FormsPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function FormsPage({ params }: FormsPageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const { forms, vehicles, home } = getSiteContent(locale);

  return (
    <main className="gwm-app-shell">
      <SiteHeader locale={locale} />
      <PageHero
        eyebrow={forms.hero.eyebrow}
        title={forms.hero.title}
        intro={forms.hero.intro}
        image="/media/contact-hero.png"
      />

      <section className="gwm-section">
        <div className="gwm-container">
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {forms.tabs.map((tab, index) => (
              <span
                key={tab}
                className={`gwm-chip ${index === 0 ? "gwm-chip-active" : ""}`}
              >
                {tab}
              </span>
            ))}
          </div>

          <form className="mx-auto max-w-3xl border border-gwm-line bg-gwm-panel p-5 md:p-8">
            <SectionHeading
              eyebrow={forms.hero.eyebrow}
              title={forms.formTitle}
              summary={forms.formSubtitle}
            />
            <div className="grid gap-4 md:grid-cols-2">
              {forms.fields.map((field) => (
                <label key={field.label} className={field.half ? "" : "md:col-span-2"}>
                  <span className="text-sm font-black text-white">{field.label}</span>
                  {field.type === "select" ? (
                    <select className="mt-2 min-h-12 w-full border border-gwm-line bg-gwm-panel-soft px-4 text-gwm-muted">
                      <option>{field.placeholder}</option>
                      {field.label === "Model" || field.label === "الموديل المطلوب"
                        ? vehicles.map((vehicle) => (
                            <option
                              key={vehicle.slug}
                            >{`${vehicle.brand} ${vehicle.model}`}</option>
                          ))
                        : field.label === "Country" || field.label === "الدولة"
                          ? home.countries.map((country) => (
                              <option key={country.country}>{country.country}</option>
                            ))
                          : null}
                    </select>
                  ) : (
                    <input
                      className="mt-2 min-h-12 w-full border border-gwm-line bg-gwm-panel-soft px-4 text-white"
                      placeholder={field.placeholder}
                      type={field.type || "text"}
                    />
                  )}
                </label>
              ))}
            </div>

            <label className="mt-6 flex items-start gap-3 border border-gwm-line bg-gwm-panel-soft p-4 text-sm leading-6 text-gwm-muted">
              <input type="checkbox" className="mt-1" />
              <span className="flex items-center gap-2 text-white">
                <Icon name="shield" className="text-gwm-red" />
                {forms.notRobotLabel}
              </span>
            </label>
            <p className="gwm-caption mt-2">{forms.notRobotHint}</p>

            <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-gwm-muted">
              <input type="checkbox" className="mt-1" />
              <span>{forms.consent}</span>
            </label>
            <button
              type="button"
              className="gwm-button gwm-button-primary mt-7 w-full md:w-auto"
            >
              {forms.submitLabel}
            </button>
          </form>
        </div>
      </section>

      <QuickActionBar locale={locale} />
      <SiteFooter locale={locale} />
    </main>
  );
}
