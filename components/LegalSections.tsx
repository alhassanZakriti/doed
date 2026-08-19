import { Reveal } from "@/components/Reveal";
import type { ReactNode } from "react";

export type LegalSection = {
  heading: string;
  content: ReactNode;
};

export function LegalSections({ sections }: { sections: LegalSection[] }) {
  return (
    <div className="page-wrap-narrow space-y-6 pb-8">
      {sections.map((section, index) => (
        <Reveal key={section.heading} from="top" delay={Math.min(index * 0.08, 0.4)}>
          <article className="card-interactive rounded-card border border-line bg-surface p-5 sm:p-8">
            <h2 className="text-[21px] font-bold text-navy-text">{section.heading}</h2>
            <div className="mt-4 space-y-3 text-base leading-relaxed text-gray-body">{section.content}</div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
