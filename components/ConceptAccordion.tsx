"use client";

import { useState } from "react";
import {
  IconChevron,
  IconCloud,
  IconCode,
  IconCycle,
  IconHeadset,
  IconShield,
} from "@/components/icons";

const items = [
  {
    title: "Software Development & AI",
    defaultOpen: true,
    icon: IconCode,
    description:
      "Custom software, web applications, and intelligent automation. From API integrations to full SaaS platforms and AI implementations (LLM/RAG). Tech: .NET · Java · PHP · Laravel · React · Angular · Vue.js · Node.js",
  },
  {
    title: "DevOps & Automation",
    defaultOpen: true,
    icon: IconCycle,
    description: "Accelerating time-to-market through automation…",
  },
  {
    title: "Cloud & Infrastructure",
    defaultOpen: false,
    icon: IconCloud,
    description: "Secure, scalable, and stable IT foundations. Design…",
  },
  {
    title: "Cybersecurity & Risk Management",
    defaultOpen: false,
    icon: IconShield,
    description: "Protection against digital threats and compliance…",
  },
  {
    title: "IT Support & Helpdesk",
    defaultOpen: false,
    icon: IconHeadset,
    description: undefined,
  },
];

export function ConceptAccordion() {
  const [open, setOpen] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(items.map((item) => [item.title, item.defaultOpen])),
  );

  return (
    <div className="grid gap-2 rounded-card bg-navy-900 p-5 text-white md:grid-cols-2 md:p-8">
      {items.map((item) => {
        const Icon = item.icon;
        const isOpen = open[item.title];
        const canExpand = Boolean(item.description);

        return (
          <div key={item.title} className="border-b border-white/10 py-4 last:border-b-0 md:even:border-b md:[&:nth-last-child(-n+1)]:border-b-0">
            <button
              type="button"
              className="flex min-h-11 w-full items-start gap-3 text-left"
              aria-expanded={isOpen}
              onClick={() => {
                if (!canExpand) return;
                setOpen((current) => ({ ...current, [item.title]: !current[item.title] }));
              }}
            >
              <span className="mt-0.5 text-orange-500">
                <Icon className="h-5 w-5" />
              </span>
              <span className="flex-1 text-base font-semibold">{item.title}</span>
              {canExpand ? (
                <IconChevron className="mt-0.5 h-5 w-5 shrink-0 text-white/70" open={isOpen} />
              ) : (
                <IconChevron className="mt-0.5 h-5 w-5 shrink-0 text-white/70" open={false} />
              )}
            </button>
            {canExpand && isOpen ? (
              <p className="mt-3 pl-8 text-sm leading-relaxed text-white/75">{item.description}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
