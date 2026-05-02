"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

const links: ReadonlyArray<{ href: string; label: string }> = [
  { href: "/tier-list", label: "Tier" },
  { href: "/ecosystem", label: "Ecosystem" },
  { href: "/incident-response", label: "Incident" },
  { href: "/case-studies", label: "Cases" },
  { href: "/scoring", label: "Score" },
];

const LOGO_URL =
  "https://pbs.twimg.com/profile_images/2009076400863772672/rcoQOHsV_400x400.jpg";

export function Navigation() {
  const pathname = usePathname();
  return (
    <header className="border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-3">
          <Link
            href="/"
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
            Built by{" "}
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
            researcher at{" "}
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
            const active = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
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
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
