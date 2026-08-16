"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Wordmark } from "@/components/DdMark";

const links = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/expertise", label: "Expertise" },
  { href: "/tools", label: "Tools" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="relative z-50 bg-white text-navy-900 shadow-[0_4px_12px_rgba(14,42,69,0.05)]">
      <div className="page-wrap flex items-center justify-between gap-4 py-4 md:py-5">
        <Link href="/" className="shrink-0 text-navy-900" onClick={close}>
          <Wordmark />
        </Link>
        <nav className="hidden items-center gap-x-8 text-sm font-semibold md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link key={link.label} href={link.href} className={active ? "text-orange-500" : "text-navy-900"}>
                {link.label}
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-button text-navy-900 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((current) => !current)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="relative block h-3.5 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 block h-0.5 w-full bg-current transition-transform duration-200 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-0.5 w-full bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-full bg-current transition-transform duration-200 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-navy-900/10 px-4 py-3 sm:px-6 md:hidden"
        >
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={close}
                className={`flex min-h-11 items-center text-sm font-semibold ${
                  active ? "text-orange-500" : "text-navy-900"
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
