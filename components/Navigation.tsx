"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { DEFAULT_LANG, isLang, type Lang } from "@/lib/i18n";

const NAV_LABELS: Readonly<
  Record<Lang, ReadonlyArray<{ href: string; label: string }>>
> = {
  ko: [
    { href: "/tier-list", label: "Security Audit" },
    { href: "/ecosystem", label: "Ecosystem" },
    { href: "/incident-response", label: "Incident" },
    { href: "/case-studies", label: "Cases" },
    { href: "/scoring", label: "Score" },
  ],
  en: [
    { href: "/tier-list", label: "Security Audit" },
    { href: "/ecosystem", label: "Ecosystem" },
    { href: "/incident-response", label: "Incident" },
    { href: "/case-studies", label: "Cases" },
    { href: "/scoring", label: "Score" },
  ],
};

const ATTRIBUTION: Readonly<
  Record<Lang, { built: string; researcher: string }>
> = {
  ko: { built: "Built by", researcher: "researcher at" },
  en: { built: "Built by", researcher: "researcher at" },
};

const LOGO_URL =
  "https://pbs.twimg.com/profile_images/2009076400863772672/rcoQOHsV_400x400.jpg";

function langFromPathname(pathname: string): Lang {
  const seg = pathname.split("/")[1];
  return isLang(seg) ? seg : DEFAULT_LANG;
}

function pathWithoutLang(pathname: string): string {
  const segments = pathname.split("/");
  if (isLang(segments[1])) {
    segments.splice(1, 1);
  }
  const result = segments.join("/");
  return result === "" ? "/" : result;
}

export function Navigation() {
  const pathname = usePathname();
  const lang = langFromPathname(pathname);
  const otherLang: Lang = lang === "ko" ? "en" : "ko";
  const stripped = pathWithoutLang(pathname);
  const links = NAV_LABELS[lang];
  const attribution = ATTRIBUTION[lang];

  return (
    <header className="border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-3">
          <Link
            href={`/${lang}`}
            className="flex items-center gap-3 group"
            aria-label="Home"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={LOGO_URL}
              alt="logo"
              className="h-9 w-9 rounded-md border border-neutral-200 dark:border-neutral-800"
            />
            <span className="font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 leading-tight">
              security score
            </span>
          </Link>
          <span className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-tight border-l border-neutral-200 dark:border-neutral-800 pl-3 hidden sm:block">
            {attribution.built}{" "}
            <a
              href="https://x.com/c4lvin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors underline-offset-2 hover:underline"
            >
              @c4lvin
            </a>
            ,
            <br />
            {attribution.researcher}{" "}
            <a
              href="https://4pillars.io"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors underline-offset-2 hover:underline"
            >
              Four Pillars
            </a>
          </span>
        </div>
        <div className="flex items-center gap-5 text-sm">
          {links.map((link) => {
            const fullHref = `/${lang}${link.href}`;
            const active = pathname.startsWith(fullHref);
            return (
              <Link
                key={link.href}
                href={fullHref}
                className={[
                  "transition-colors",
                  active
                    ? "text-neutral-900 dark:text-neutral-50"
                    : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50",
                ].join(" ")}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href={`/${otherLang}${stripped === "/" ? "" : stripped}`}
            className="h-7 px-2 rounded-md border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 hover:border-neutral-900 dark:hover:border-neutral-50 transition-colors flex items-center text-[11px] font-medium uppercase tracking-wider"
            aria-label={`Switch to ${otherLang.toUpperCase()}`}
          >
            {otherLang.toUpperCase()}
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
