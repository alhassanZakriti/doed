"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { getDictionary } from "@/lib/i18n";
import type { Dictionary, Locale } from "@/lib/i18n/types";
import { defaultLocale, rtlLocales } from "@/lib/i18n/types";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
  dir: "ltr" | "rtl";
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function readLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;
  const stored = localStorage.getItem("doed-locale");
  if (stored === "en" || stored === "nl" || stored === "fr" || stored === "ar") return stored;
  return defaultLocale;
}

function applyLocale(locale: Locale) {
  document.documentElement.lang = locale;
  document.documentElement.dir = rtlLocales.includes(locale) ? "rtl" : "ltr";
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => readLocale());

  useEffect(() => {
    applyLocale(locale);
    try {
      localStorage.setItem("doed-locale", locale);
    } catch {
      /* ignore */
    }
  }, [locale]);

  const setLocale = (next: Locale) => setLocaleState(next);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: getDictionary(locale),
      dir: rtlLocales.includes(locale) ? ("rtl" as const) : ("ltr" as const),
    }),
    [locale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
