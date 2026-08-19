"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Wordmark } from "@/components/DdMark";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLocale } from "@/components/LocaleProvider";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  const pathname = usePathname();
  const { t } = useLocale();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  const links = [
    { href: "/services", label: t.nav.services },
    { href: "/about", label: t.nav.about },
    { href: "/expertise", label: t.nav.expertise },
    { href: "/tools", label: t.nav.tools },
  ];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background text-navy-text shadow-[0_4px_12px_rgba(14,42,69,0.05)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.35)]">
      <div className="page-wrap flex items-center justify-between gap-4 py-4 md:py-5">
        <Link href="/" className="shrink-0 text-navy-text" onClick={close}>
          <Wordmark />
        </Link>
        <nav className="hidden items-center gap-x-6 text-sm font-semibold lg:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 ${
                  active ? "text-orange-500" : "text-navy-text"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <LanguageSwitcher />
          <ThemeToggle />
        </nav>
        <div className="flex items-center gap-1 lg:hidden">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-button text-navy-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => setOpen((current) => !current)}
          >
            <span className="sr-only">{open ? t.nav.closeMenu : t.nav.openMenu}</span>
            <span className="relative block h-3.5 w-5" aria-hidden="true">
              <span
                className={`absolute start-0 block h-0.5 w-full bg-current transition-transform duration-200 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute start-0 top-1.5 block h-0.5 w-full bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute start-0 block h-0.5 w-full bg-current transition-transform duration-200 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>
      {open ? (
        <nav id="mobile-nav" className="border-t border-line px-4 py-3 sm:px-6 lg:hidden">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className={`flex min-h-11 items-center text-sm font-semibold ${
                  active ? "text-orange-500" : "text-navy-text"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      ) : null}
    </header>
  );
}
