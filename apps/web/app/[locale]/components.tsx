import Link from "next/link";
import { localeLabels, type Locale } from "@gwm/shared";

const navItems = [
  { href: "", en: "Home", ar: "الرئيسية" },
  { href: "vehicles", en: "Vehicles", ar: "المركبات" },
  { href: "service", en: "Service", ar: "الصيانة" },
  { href: "countries", en: "Countries", ar: "الدول" },
  { href: "news", en: "News", ar: "الأخبار" },
  { href: "forms", en: "Contact", ar: "تواصل" },
] as const;

export function SiteHeader({ locale }: { locale: Locale }) {
  const alternateLocale = locale === "en" ? "ar" : "en";

  return (
    <header className="absolute inset-x-0 top-0 z-20 border-b border-white/10 bg-black/45 backdrop-blur">
      <div className="gwm-container flex h-20 items-center justify-between">
        <Link href={`/${locale}`} className="text-2xl font-black text-white">
          GWM
        </Link>
        <nav className="hidden items-center gap-7 text-xs font-black uppercase text-white/78 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href || "home"}
              href={`/${locale}${item.href ? `/${item.href}` : ""}`}
            >
              {item[locale]}
            </Link>
          ))}
        </nav>
        <Link
          href={`/${alternateLocale}`}
          className="border-b border-white/50 text-sm font-bold text-white"
          aria-label={localeLabels[alternateLocale]}
        >
          {localeLabels[alternateLocale]}
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter({ locale }: { locale: Locale }) {
  const columns = [
    {
      title: locale === "ar" ? "التسوق" : "Shop",
      links:
        locale === "ar"
          ? ["المركبات", "العروض", "الكتالوج"]
          : ["Vehicles", "Offers", "Brochures"],
    },
    {
      title: locale === "ar" ? "الملكية" : "Ownership",
      links:
        locale === "ar"
          ? ["الصيانة", "الضمان", "المساعدة"]
          : ["Service", "Warranty", "Assistance"],
    },
    {
      title: locale === "ar" ? "الشركة" : "Company",
      links:
        locale === "ar"
          ? ["عن GWM", "الأخبار", "الدول"]
          : ["About GWM", "News", "Countries"],
    },
  ];

  return (
    <footer className="border-t border-gwm-line bg-black">
      <div className="gwm-container grid gap-8 py-10 md:grid-cols-[1.2fr_2fr]">
        <div>
          <div className="text-2xl font-black text-white">GWM</div>
          <p className="gwm-copy mt-4 max-w-sm">
            {locale === "ar"
              ? "منصة إقليمية ثابتة المحتوى لرحلات المركبات والخدمة والعملاء."
              : "A static-content regional platform for vehicle, service and customer journeys."}
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-black text-white">{column.title}</h3>
              <ul className="mt-4 space-y-2 text-sm font-bold text-gwm-muted">
                {column.links.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="gwm-hero-media">
      <div
        className="absolute inset-0 bg-cover bg-center"
        role="img"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="gwm-container relative z-10 flex min-h-[min(760px,82vh)] items-end pb-12 pt-32 md:pb-16">
        <div className="max-w-3xl">
          <p className="gwm-eyebrow mb-5">{eyebrow}</p>
          <h1 className="gwm-display-xl max-w-[12ch]">{title}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78">{intro}</p>
          {children ? <div className="mt-9">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  summary,
}: {
  eyebrow: string;
  title: string;
  summary?: string;
}) {
  return (
    <div className="mb-8 grid gap-4 md:grid-cols-[0.8fr_1.2fr] md:items-end">
      <div>
        <p className="gwm-eyebrow mb-3">{eyebrow}</p>
        <h2 className="gwm-heading-lg">{title}</h2>
      </div>
      {summary ? (
        <p className="gwm-copy max-w-2xl md:justify-self-end">{summary}</p>
      ) : null}
    </div>
  );
}

export function StatBand({ stats }: { stats: Array<{ value: string; label: string }> }) {
  return (
    <section className="border-y border-gwm-line bg-gwm-panel">
      <div className="gwm-container grid gap-px bg-gwm-line md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-gwm-panel px-6 py-6">
            <div className="text-4xl font-black text-white">{stat.value}</div>
            <div className="mt-2 text-xs font-black uppercase text-gwm-muted">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
