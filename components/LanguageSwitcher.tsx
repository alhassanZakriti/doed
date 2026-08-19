"use client";

import { useLocale } from "@/components/LocaleProvider";
import { locales, type Locale } from "@/lib/i18n/types";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale, t } = useLocale();

  return (
    <label className={`inline-flex items-center gap-2 ${className}`}>
      <span className="sr-only">{t.lang.label}</span>
      <select
        value={locale}
        onChange={(event) => setLocale(event.target.value as Locale)}
        aria-label={t.lang.label}
        className="field-control min-h-11 cursor-pointer rounded-button border bg-background px-3 py-2 text-sm font-semibold text-navy-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
      >
        {locales.map((code) => (
          <option key={code} value={code}>
            {t.lang[code]}
          </option>
        ))}
      </select>
    </label>
  );
}
