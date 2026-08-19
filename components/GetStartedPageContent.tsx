"use client";

import { useSearchParams } from "next/navigation";
import { GetStartedForm } from "@/components/GetStartedForm";
import { PageIntro } from "@/components/PageIntro";
import { useLocale } from "@/components/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import { resolveGetStartedService } from "@/lib/forms/services";

export function GetStartedPageContent() {
  const { t } = useLocale();
  const copy = t.getStartedPage;
  const searchParams = useSearchParams();
  const initialService = resolveGetStartedService(searchParams.get("service"));

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
            <GetStartedForm initialService={initialService} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
