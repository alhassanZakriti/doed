"use client";

import { Button } from "@/components/Button";
import { useLocale } from "@/components/LocaleProvider";
import { Reveal } from "@/components/Reveal";

export function CtaBanner({
  title,
  body,
  primaryHref = "/expertise",
  primaryLabel,
  secondaryHref = "/book-a-consultation",
  secondaryLabel,
}: {
  title?: string;
  body?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  const { t } = useLocale();

  const resolvedTitle = title ?? t.cta.title;
  const resolvedBody = body ?? t.cta.body;
  const resolvedPrimary = primaryLabel ?? t.cta.primary;
  const resolvedSecondary = secondaryLabel ?? t.cta.secondary;

  return (
    <section className="py-10 md:py-16">
      <div className="page-wrap">
        <Reveal from="top">
          <div className="rounded-card bg-orange-500 px-5 py-10 text-center sm:px-6 md:py-16">
            <h2 className="text-2xl font-bold !text-on-accent md:text-[34px]">{resolvedTitle}</h2>
            <p className="mx-auto mt-4 max-w-[640px] text-base leading-relaxed text-on-accent">{resolvedBody}</p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <Button href={primaryHref} variant="primary-invert" className="w-full sm:w-auto">
                {resolvedPrimary}
              </Button>
              <Button href={secondaryHref} variant="outline-invert" className="w-full sm:w-auto">
                {resolvedSecondary}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
