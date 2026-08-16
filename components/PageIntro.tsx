import { Badge } from "@/components/Badge";
import { Reveal } from "@/components/Reveal";
import type { ReactNode } from "react";

export function PageIntro({
  badge,
  title,
  body,
  actions,
}: {
  badge: string;
  title: ReactNode;
  body: string;
  actions?: ReactNode;
}) {
  return (
    <section className="pt-8 md:pt-12">
      <div className="page-wrap-narrow text-center">
        <Reveal from="top">
          <Badge>{badge}</Badge>
          <h1 className="heading-hero mt-6 text-navy-text">{title}</h1>
          <p className="mx-auto mt-6 max-w-[640px] text-base leading-relaxed text-gray-body">{body}</p>
          {actions ? (
            <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              {actions}
            </div>
          ) : null}
        </Reveal>
      </div>
      <div className="mx-auto mt-10 max-w-[70rem] border-t border-navy-900/10 md:mt-14" />
    </section>
  );
}
