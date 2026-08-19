"use client";

import {
  IconBolt,
  IconCloud,
  IconCode,
  IconCycle,
  IconHeadset,
  IconShield,
} from "@/components/icons";
import { useLocale } from "@/components/LocaleProvider";
import { useState } from "react";
import { IconChevron } from "@/components/icons";

const icons = [IconCode, IconCloud, IconCycle, IconShield, IconBolt, IconHeadset];
const defaultOpen = [true, false, false, false, false, false];

export function ConceptAccordion() {
  const { t } = useLocale();
  const items = t.services.map((service, index) => ({
    ...service,
    icon: icons[index] ?? IconCode,
    defaultOpen: defaultOpen[index] ?? false,
  }));

  const [open, setOpen] = useState<Record<number, boolean>>(() =>
    Object.fromEntries(items.map((item, index) => [index, item.defaultOpen])),
  );

  return (
    <div className="grid gap-2 rounded-card bg-navy-900 p-5 text-white panel-navy md:grid-cols-2 md:p-8">
      {items.map((item, index) => {
        const Icon = item.icon;
        const isOpen = open[index];

        return (
          <div
            key={item.title}
            className="border-b border-white/10 py-4 last:border-b-0 md:even:border-b md:[&:nth-last-child(-n+1)]:border-b-0"
          >
            <button
              type="button"
              className="flex min-h-11 w-full items-start gap-3 text-start"
              aria-expanded={isOpen}
              onClick={() => setOpen((current) => ({ ...current, [index]: !current[index] }))}
            >
              <span className="mt-0.5 text-orange-500">
                <Icon className="h-5 w-5" />
              </span>
              <span className="flex-1 text-base font-semibold">{item.title}</span>
              <IconChevron className="mt-0.5 h-5 w-5 shrink-0 text-white/70" open={isOpen} />
            </button>
            {isOpen ? (
              <p className="mt-3 ps-8 text-sm leading-relaxed text-white/75">{item.description}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
