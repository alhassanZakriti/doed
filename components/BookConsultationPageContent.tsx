"use client";

import { ConsultationForm } from "@/components/ConsultationForm";
import { PageIntro } from "@/components/PageIntro";
import { useLocale } from "@/components/LocaleProvider";
import { Reveal } from "@/components/Reveal";

export function BookConsultationPageContent() {
  const { t } = useLocale();
  const copy = t.bookConsultationPage;

  return (
    <>
      <PageIntro
        badge={copy.badge}
        title={
          <>
            {copy.title} <span className="text-orange-500">{copy.titleHighlight}</span>
          </>
        }
        body={copy.intro}
      />
      <section className="section-y">
        <div className="page-wrap-narrow">
          <Reveal from="top">
            <ConsultationForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
