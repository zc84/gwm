import Link from "next/link";
import { getTextDirection, localeLabels, type Locale } from "@gwm/shared";

const copy = {
  en: {
    nav: ["Brands", "Vehicles", "About GWM", "Technology", "Contact us"],
    language: "العربية",
    eyebrow: "GWM Middle East",
    title: "Go With More",
    intro:
      "A production-aligned foundation for the regional website, ready for catalogue pages, CMS content, leads and AI-assisted operations.",
    primaryCta: "Explore vehicles",
    secondaryCta: "Find a dealer",
    stats: [
      ["10", "Markets"],
      ["+63", "Owners"],
      ["7/24", "GWM Care"],
      ["6", "Sub-brands"],
    ],
    sections: ["Brand grid", "Featured models", "Country directory"],
    footer: "Epic 1 foundation shell",
  },
  ar: {
    nav: ["العلامات التجارية", "المركبات", "عن GWM", "التكنولوجيا", "اتصل بنا"],
    language: "English",
    eyebrow: "جي دبليو إم الشرق الأوسط",
    title: "انطلق مع المزيد",
    intro:
      "أساس قابل للنشر للمنصة الإقليمية، جاهز لصفحات المركبات والمحتوى وإدارة العملاء وعمليات الذكاء الاصطناعي.",
    primaryCta: "استكشف المركبات",
    secondaryCta: "ابحث عن وكيل",
    stats: [
      ["10", "الأسواق"],
      ["+63", "المالكون"],
      ["7/24", "رعاية GWM"],
      ["6", "العلامات"],
    ],
    sections: ["شبكة العلامات", "الموديلات المميزة", "دليل الدول"],
    footer: "هيكل التأسيس للملحمة الأولى",
  },
} satisfies Record<Locale, Record<string, unknown>>;

type HomePageProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const t = copy[locale];
  const alternateLocale = locale === "en" ? "ar" : "en";
  const isRtl = getTextDirection(locale) === "rtl";

  return (
    <main className="min-h-screen bg-white text-ink">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link
          href={`/${locale}`}
          className="text-xl font-black tracking-normal text-signal"
        >
          GWM
        </Link>
        <nav className="hidden items-center gap-8 text-xs font-bold uppercase md:flex">
          {(t.nav as string[]).map((item) => (
            <a key={item} href="#foundation">
              {item}
            </a>
          ))}
        </nav>
        <Link
          href={`/${alternateLocale}`}
          className="border-b border-ink text-sm font-bold"
          aria-label={localeLabels[alternateLocale]}
        >
          {t.language as string}
        </Link>
      </header>

      <section className="border-y border-line bg-mist">
        <div className="mx-auto grid min-h-[520px] max-w-7xl items-end px-6 py-16 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <div className={isRtl ? "md:order-2" : ""}>
            <p className="mb-5 text-xs font-black uppercase tracking-[0.18em] text-signal">
              {t.eyebrow as string}
            </p>
            <h1 className="max-w-3xl text-6xl font-black leading-[0.95] tracking-normal md:text-8xl">
              {t.title as string}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
              {t.intro as string}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#foundation"
                className="border border-signal bg-signal px-6 py-3 text-sm font-black uppercase text-white"
              >
                {t.primaryCta as string}
              </a>
              <a
                href="#foundation"
                className="border border-ink px-6 py-3 text-sm font-black uppercase"
              >
                {t.secondaryCta as string}
              </a>
            </div>
          </div>
          <div className="mt-12 border border-line bg-white p-6 md:mt-0">
            <div className="aspect-[16/10] bg-[linear-gradient(135deg,#f8fafc_0%,#dfe5eb_55%,#ffffff_55%)]" />
            <div className="mt-6 grid grid-cols-2 border-l border-t border-line">
              {(t.stats as string[][]).map(([value, label]) => (
                <div key={label} className="border-b border-r border-line p-5">
                  <div className="text-3xl font-black text-ink">{value}</div>
                  <div className="mt-2 text-xs font-bold uppercase text-slate-500">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="foundation" className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-4 md:grid-cols-3">
          {(t.sections as string[]).map((section, index) => (
            <div key={section} className="border border-line p-8">
              <span className="text-sm font-black text-signal">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-12 text-2xl font-black">{section}</h2>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-line bg-mist px-6 py-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between text-sm font-bold">
          <span>GWM</span>
          <span>{t.footer as string}</span>
        </div>
      </footer>
    </main>
  );
}
