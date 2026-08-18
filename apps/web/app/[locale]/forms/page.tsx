import { isLocale, type Locale } from "@gwm/shared";
import { notFound } from "next/navigation";
import { getSiteContent } from "../../../lib/content/site";
import { PageHero, SectionHeading, SiteFooter, SiteHeader } from "../components";

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
        <div className="gwm-container grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="border border-gwm-line bg-gwm-panel p-5">
            <p className="gwm-eyebrow mb-5">
              {locale === "ar" ? "نوع الطلب" : "Request type"}
            </p>
            <div className="flex flex-wrap gap-2 lg:flex-col">
              {forms.types.map((type, index) => (
                <span
                  key={type}
                  className={`gwm-chip ${index === 0 ? "gwm-chip-active" : ""}`}
                >
                  {type}
                </span>
              ))}
            </div>
          </aside>

          <form className="border border-gwm-line bg-gwm-panel p-5">
            <SectionHeading
              eyebrow={locale === "ar" ? "بياناتك" : "Your details"}
              title={
                locale === "ar"
                  ? "أكمل الطلب في صفحة واحدة"
                  : "Complete the request in one page"
              }
              summary={
                locale === "ar"
                  ? "النموذج ثابت حالياً وسيتم ربطه بواجهات API في ملحمة النماذج والعملاء."
                  : "The form is static now and will connect to API routes in the forms and leads epic."
              }
            />
            <div className="grid gap-4 md:grid-cols-2">
              {forms.fields.map((field) => (
                <label
                  key={field.label}
                  className={field.type === "textarea" ? "md:col-span-2" : ""}
                >
                  <span className="text-sm font-black text-white">{field.label}</span>
                  {field.type === "select" ? (
                    <select className="mt-2 min-h-12 w-full border border-gwm-line bg-gwm-panel-soft px-4 text-gwm-muted">
                      <option>{field.placeholder}</option>
                      {field.label === (locale === "ar" ? "المركبة" : "Vehicle")
                        ? vehicles.map((vehicle) => (
                            <option
                              key={vehicle.slug}
                            >{`${vehicle.brand} ${vehicle.model}`}</option>
                          ))
                        : home.countries.map((country) => (
                            <option key={country.country}>{country.country}</option>
                          ))}
                    </select>
                  ) : field.type === "textarea" ? (
                    <textarea
                      className="mt-2 min-h-32 w-full border border-gwm-line bg-gwm-panel-soft px-4 py-3 text-white"
                      placeholder={field.placeholder}
                    />
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

      <SiteFooter locale={locale} />
    </main>
  );
}
