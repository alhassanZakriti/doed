"use client";

import { CtaBanner } from "@/components/CtaBanner";
import { PageIntro } from "@/components/PageIntro";
import { useLocale } from "@/components/LocaleProvider";
import { Reveal } from "@/components/Reveal";

export function HelpPageContent() {
  const { t } = useLocale();
  const h = t.help;

  return (
    <>
      <PageIntro
        badge={h.badge}
        title={
          <>
            {h.titleBefore} <span className="text-orange-500">{h.titleHighlight}</span>
          </>
        }
        body={h.intro}
      />

      <section className="section-y">
        <div className="page-wrap-narrow space-y-4">
          {h.faqs.map((item, index) => (
            <Reveal key={item.q} from="top" delay={index * 0.08}>
              <article className="card-interactive rounded-card border border-line bg-surface p-5 sm:p-8">
                <h2 className="text-[21px] font-bold text-navy-text">{item.q}</h2>
                <p className="mt-3 text-base leading-relaxed text-gray-body">{item.a}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
