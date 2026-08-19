import { ar } from "@/lib/i18n/dictionaries/ar";
import { en } from "@/lib/i18n/dictionaries/en";
import { fr } from "@/lib/i18n/dictionaries/fr";
import { nl } from "@/lib/i18n/dictionaries/nl";
import type { Dictionary, Locale } from "@/lib/i18n/types";

const dictionaries: Record<Locale, Dictionary> = { en, nl, fr, ar };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? en;
}

export { dictionaries };
