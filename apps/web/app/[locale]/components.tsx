import Link from "next/link";
import { localeLabels, type Locale } from "@gwm/shared";

const navItems = [
  { href: "vehicles", en: "Brands", ar: "العلامات", target: "vehicles" },
  { href: "vehicles", en: "Vehicles", ar: "المركبات", target: "" },
  { href: "", en: "About GWM", ar: "عن GWM", target: "" },
  { href: "", en: "Technology", ar: "التكنولوجيا", target: "technology" },
  { href: "forms", en: "Contact Us", ar: "اتصل بنا", target: "" },
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
          {navItems.map((item, index) => (
            <Link
              key={`${item.href}-${index}`}
              href={`/${locale}${item.href ? `/${item.href}` : ""}${item.target ? `#${item.target}` : ""}`}
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

function IconGlyph({ name }: { name: string }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "testDrive":
      return (
        <svg {...common}>
          <path d="M3 13l1.6-4.8A2 2 0 0 1 6.5 7h11a2 2 0 0 1 1.9 1.2L21 13" />
          <path d="M3 13h18v4a1 1 0 0 1-1 1h-1.2a1 1 0 0 1-1-.8L17.5 16h-11l-.3 1.2a1 1 0 0 1-1 .8H4a1 1 0 0 1-1-1z" />
          <circle cx="7.5" cy="17.5" r="1.5" />
          <circle cx="16.5" cy="17.5" r="1.5" />
        </svg>
      );
    case "dealer":
      return (
        <svg {...common}>
          <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21z" />
          <circle cx="12" cy="9.5" r="2.3" />
        </svg>
      );
    case "brochure":
      return (
        <svg {...common}>
          <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H12v16H5.5A1.5 1.5 0 0 1 4 18.5z" />
          <path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H12v16h6.5a1.5 1.5 0 0 0 1.5-1.5z" />
        </svg>
      );
    case "askAi":
      return (
        <svg {...common}>
          <path d="M12 3l1.6 3.8L17.5 8l-3.9 1.2L12 13l-1.6-3.8L6.5 8l3.9-1.2z" />
          <path d="M19 14l.8 1.9L21.7 17l-1.9.8L19 19.7l-.8-1.9-1.9-.8 1.9-.8z" />
        </svg>
      );
    case "wrench":
      return (
        <svg {...common}>
          <path d="M14.7 6.3a4 4 0 0 0-5.4 5l-6 6 2.4 2.4 6-6a4 4 0 0 0 5-5.4l-2.6 2.6-2-2z" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6z" />
        </svg>
      );
    case "book":
      return (
        <svg {...common}>
          <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H19a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5.5A1.5 1.5 0 0 1 4 18.5z" />
          <path d="M8 4v16" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...common}>
          <rect x="3.5" y="5" width="17" height="16" rx="1.5" />
          <path d="M3.5 10h17M8 3v4M16 3v4" />
        </svg>
      );
    case "gift":
      return (
        <svg {...common}>
          <rect x="3.5" y="9" width="17" height="4" />
          <rect x="5" y="13" width="14" height="8" />
          <path d="M12 9v12M12 9c-1.8 0-3.4-1.4-3.4-3.2S9.5 3 11 3.6 12 6.5 12 9zM12 9c1.8 0 3.4-1.4 3.4-3.2S14.5 3 13 3.6 12 6.5 12 9z" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M6 3h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a1.5 1.5 0 0 1-1.6 1.5A17 17 0 0 1 4.5 4.6 1.5 1.5 0 0 1 6 3z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
          <path d="M4 6.5l8 6.5 8-6.5" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7.5V12l3 2" />
        </svg>
      );
    case "app":
      return (
        <svg {...common}>
          <rect x="6" y="2.5" width="12" height="19" rx="2" />
          <path d="M11 18.5h2" />
        </svg>
      );
    case "bell":
      return (
        <svg {...common}>
          <path d="M6 17h12l-1.4-2.1a5 5 0 0 1-.8-2.7V10a3.8 3.8 0 0 0-7.6 0v2.2a5 5 0 0 1-.8 2.7z" />
          <path d="M10 19.5a2 2 0 0 0 4 0" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <path d="M4 12.5l5 5L20 6" />
        </svg>
      );
    case "download":
      return (
        <svg {...common}>
          <path d="M12 3v12m0 0l-4-4m4 4l4-4" />
          <path d="M4 17.5V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1.5" />
        </svg>
      );
    case "manual":
      return (
        <svg {...common}>
          <rect x="4" y="3.5" width="16" height="17" rx="1.5" />
          <path d="M8 8h8M8 12h8M8 16h5" />
        </svg>
      );
    case "parts":
      return (
        <svg {...common}>
          <path d="M9.5 4.5l1.5 1.5 2-2 1.9 1.9-2 2 1.5 1.5-6.1 6.1-1.5-1.5-2 2L2.9 14 5 12l-1.5-1.5z" />
          <path d="M14.5 14.5l5 5" />
        </svg>
      );
    case "compare":
      return (
        <svg {...common}>
          <path d="M8 4v13M8 17l-3-3M8 17l3-3" />
          <path d="M16 20V7M16 7l-3 3M16 7l3 3" />
        </svg>
      );
    default:
      return <svg {...common} />;
  }
}

const quickActions = [
  { key: "testDrive", en: "Test Drive", ar: "تجربة القيادة", href: "/forms" },
  { key: "dealer", en: "Dealer", ar: "الوكيل", href: "/countries" },
  { key: "brochure", en: "Brochure", ar: "الكتيب", href: "/forms" },
  { key: "askAi", en: "Ask AI", ar: "اسأل الذكاء الاصطناعي", href: "/forms" },
] as const;

export function QuickActionBar({ locale }: { locale: Locale }) {
  return (
    <div className="border-y border-gwm-line bg-black">
      <div className="gwm-container grid grid-cols-2 divide-x divide-gwm-line rtl:divide-x-reverse sm:grid-cols-4">
        {quickActions.map((action) => (
          <Link
            key={action.key}
            href={`/${locale}${action.href}`}
            className="flex flex-col items-center gap-2 py-6 text-xs font-black uppercase tracking-wide text-gwm-muted transition-colors hover:text-white"
          >
            <IconGlyph name={action.key} />
            <span className="text-center">{action[locale]}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Icon({ name, className }: { name: string; className?: string }) {
  return (
    <span className={className}>
      <IconGlyph name={name} />
    </span>
  );
}

/**
 * Honest stand-in for photography this MVP does not have (no image
 * generation tool available). Deliberately not styled to look like a
 * finished photo, so it reads as a placeholder to swap out, not content.
 */
export function PhotoPlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div className={`gwm-photo-placeholder ${className}`} role="img" aria-label={label}>
      <span>{label}</span>
    </div>
  );
}

export function SiteFooter({ locale }: { locale: Locale }) {
  const columns = [
    {
      title: locale === "ar" ? "المركبات" : "Vehicles",
      links:
        locale === "ar"
          ? ["هافال", "تانك", "أورا", "بوير", "وي", "مقارنة الطرازات"]
          : ["Haval", "Tank", "Ora", "Poer", "Wey", "Compare Models"],
      href: `/${locale}/vehicles`,
    },
    {
      title: locale === "ar" ? "الملكية" : "Owners",
      links:
        locale === "ar"
          ? ["أدلة المالك", "الضمان", "عناية GWM", "حجز الصيانة", "قطع غيار أصلية"]
          : ["Owner Manuals", "Warranty", "GWM Care", "Service Booking", "Genuine Parts"],
      href: `/${locale}/service`,
    },
    {
      title: locale === "ar" ? "الشركة" : "Company",
      links:
        locale === "ar"
          ? ["غرفة الأخبار", "عن GWM", "الوظائف", "التكنولوجيا", "الاستدامة", "رياضة السيارات"]
          : ["Newsroom", "About GWM", "Careers", "Technology", "Sustainability", "Motorsport"],
      href: `/${locale}/news`,
    },
    {
      title: locale === "ar" ? "الدعم" : "Support",
      links:
        locale === "ar"
          ? ["اتصل بنا", "ابحث عن وكيل", "الأسئلة الشائعة", "الأسطول والأعمال"]
          : ["Contact Us", "Find a Dealer", "FAQ", "Fleet & Business"],
      href: `/${locale}/forms`,
    },
  ];

  const socials = ["X", "YouTube", "Facebook", "TikTok", "Instagram"];
  const legal =
    locale === "ar"
      ? ["سياسة الخصوصية", "شروط الاستخدام", "سياسة الكوكيز", "إمكانية الوصول"]
      : ["Privacy Policy", "Terms of Use", "Cookie Policy", "Accessibility"];

  return (
    <footer className="border-t border-gwm-line bg-black">
      <div className="gwm-container grid gap-10 py-12 lg:grid-cols-[1.1fr_2fr]">
        <div>
          <div className="text-2xl font-black text-white">GWM</div>
          <p className="gwm-caption mt-2">
            {locale === "ar" ? "انطلق مع المزيد" : "Go with more"}
          </p>
          <p className="mt-6 text-xs font-black uppercase text-gwm-muted">
            {locale === "ar" ? "تابع GWM" : "Follow GWM"}
          </p>
          <div className="mt-3 flex flex-wrap gap-3">
            {socials.map((social) => (
              <a
                key={social}
                href="#"
                className="border border-gwm-line px-3 py-1.5 text-xs font-bold text-gwm-muted hover:text-white"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-black text-white">{column.title}</h3>
              <ul className="mt-4 space-y-2 text-sm font-bold text-gwm-muted">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link href={column.href} className="hover:text-white">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-gwm-line">
        <div className="gwm-container flex flex-col gap-3 py-5 text-xs font-bold text-gwm-subtle md:flex-row md:items-center md:justify-between">
          <span>
            {locale === "ar"
              ? "© 2026 شركة جريت وول موتور المحدودة. جميع الحقوق محفوظة."
              : "© 2026 Great Wall Motor Company Limited. All rights reserved."}
          </span>
          <div className="flex flex-wrap gap-4">
            {legal.map((item) => (
              <a key={item} href="#" className="hover:text-white">
                {item}
              </a>
            ))}
          </div>
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
  placeholder,
  children,
  backLink,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
  placeholder?: string;
  children?: React.ReactNode;
  backLink?: { href: string; label: string };
}) {
  return (
    <section className="gwm-hero-media">
      {image ? (
        <div
          className="absolute inset-0 bg-cover bg-center"
          role="img"
          style={{ backgroundImage: `url(${image})` }}
        />
      ) : placeholder ? (
        <PhotoPlaceholder label={placeholder} className="gwm-photo-placeholder--fill" />
      ) : null}
      <div className="gwm-container relative z-10 flex min-h-[min(760px,82vh)] flex-col justify-end pb-12 pt-32 md:pb-16">
        {backLink ? (
          <Link
            href={backLink.href}
            className="mb-auto inline-flex w-fit items-center gap-2 text-xs font-black uppercase text-white/78 hover:text-white"
          >
            ← {backLink.label}
          </Link>
        ) : null}
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
  action,
}: {
  eyebrow: string;
  title: string;
  summary?: string;
  action?: { href: string; label: string };
}) {
  return (
    <div className="mb-8 grid gap-4 md:grid-cols-[0.8fr_1.2fr] md:items-end">
      <div>
        <p className="gwm-eyebrow mb-3">{eyebrow}</p>
        <h2 className="gwm-heading-lg">{title}</h2>
      </div>
      <div className="flex items-end justify-between gap-4 md:justify-self-end md:flex-col md:items-end">
        {summary ? <p className="gwm-copy max-w-2xl">{summary}</p> : null}
        {action ? (
          <Link
            href={action.href}
            className="whitespace-nowrap text-xs font-black uppercase text-gwm-red hover:text-white"
          >
            {action.label} →
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export function StatBand({ stats }: { stats: Array<{ value: string; label: string }> }) {
  return (
    <section className="border-y border-gwm-line bg-gwm-panel">
      <div
        className="gwm-container grid gap-px bg-gwm-line"
        style={{ gridTemplateColumns: `repeat(${stats.length}, minmax(0, 1fr))` }}
      >
        {stats.map((stat) => (
          <div key={stat.label} className="bg-gwm-panel px-6 py-6 text-center md:text-start">
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

export function CtaBand({ locale }: { locale: Locale }) {
  return (
    <section className="gwm-section">
      <div className="gwm-container">
        <div className="gwm-conversion-band">
          <p className="text-xs font-black uppercase text-white/80">
            {locale === "ar" ? "تقنية للاستمتاع بكل رحلة" : "Tech to enjoy every journey"}
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            {locale === "ar" ? "جاهز لتنطلق مع المزيد؟" : "Ready to Go With More?"}
          </h2>
          <Link
            href={`/${locale}/forms`}
            className="gwm-button mt-6 inline-flex bg-black text-white"
          >
            {locale === "ar" ? "احجز تجربة قيادة" : "Book a Test Drive"}
          </Link>
        </div>
      </div>
    </section>
  );
}
