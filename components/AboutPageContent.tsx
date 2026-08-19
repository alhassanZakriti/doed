"use client";

import { Badge } from "@/components/Badge";
import { BulletListItem } from "@/components/BulletListItem";
import { CtaBanner } from "@/components/CtaBanner";
import { ImageBlob } from "@/components/ImageBlob";
import { useLocale } from "@/components/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import { IconFlagNL, IconLoop, IconNetwork } from "@/components/icons";

export function AboutPageContent() {
  const { t } = useLocale();
  const a = t.about;

  return (
    <>
      <section className="pt-8 md:pt-12">
        <div className="page-wrap grid items-center gap-8 md:grid-cols-2 md:gap-10">
          <Reveal from="left">
            <Badge>{a.badge}</Badge>
            <h1 className="heading-hero mt-6">
              <span className="text-navy-text">{a.titleLine1}</span>
              <br />
              <span className="text-orange-500">{a.titleHighlight}</span>
            </h1>
            <p className="mt-6 max-w-[520px] text-base leading-relaxed text-gray-body">{a.intro}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm font-semibold text-navy-text">
              <span className="flex items-center gap-2">
                <IconFlagNL />
                {a.netherlands}
              </span>
              <span className="h-px w-8 bg-foreground/20 sm:w-12" aria-hidden="true" />
              <span className="flex items-center gap-2">
                <IconNetwork className="text-orange-500" />
                {a.morocco}
              </span>
            </div>
          </Reveal>
          <Reveal from="right">
            <ImageBlob
              direction="top-right"
              className="h-[240px] w-full sm:h-[320px] md:h-[400px]"
              src="/images/about-hero.jpg"
              alt={a.heroAlt}
              priority
            />
          </Reveal>
        </div>
        <div className="mx-auto mt-10 max-w-[70rem] border-t border-line md:mt-14" />
      </section>

      <section className="section-y">
        <div className="page-wrap">
          <Reveal from="top" className="mx-auto max-w-[760px] text-center">
            <h2 className="text-[32px] font-bold text-navy-text md:text-[34px]">{a.advantageTitle}</h2>
            <p className="mt-3 text-base text-gray-body">{a.advantageIntro}</p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-2">
            <Reveal from="left">
              <article className="rounded-card bg-blue-50 p-5 sm:p-8">
                <h3 className="text-[21px] font-bold text-navy-text">{a.strategicGovernanceTitle}</h3>
                <p className="mt-3 text-base leading-relaxed text-gray-body">{a.strategicGovernanceBody}</p>
                <ul className="mt-6 space-y-3">
                  {a.governanceBullets.map((label) => (
                    <BulletListItem key={label} label={label} />
                  ))}
                </ul>
              </article>
            </Reveal>
            <Reveal from="right">
              <article className="rounded-card bg-navy-900 p-5 text-white panel-navy sm:p-8">
                <div className="mb-4 text-orange-500">
                  <IconLoop />
                </div>
                <h3 className="text-[21px] font-bold">{a.seamlessSynergyTitle}</h3>
                <p className="mt-3 text-base leading-relaxed text-white/75">{a.seamlessSynergyBody}</p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-y bg-blue-50">
        <div className="page-wrap">
          <Reveal from="top">
            <h2 className="text-center text-[32px] font-bold text-navy-text md:text-[34px]">{a.structureTitle}</h2>
          </Reveal>
          <div className="mt-10 grid items-center gap-10 md:mt-12 md:grid-cols-2 md:gap-12">
            <Reveal from="left">
              <ul className="space-y-8">
                {a.governanceSteps.map((item) => (
                  <BulletListItem key={item.label} label={item.label} description={item.description} stacked />
                ))}
              </ul>
            </Reveal>
            <Reveal from="right">
              <div className="relative grid grid-cols-1 gap-4 md:block md:h-[420px]">
                <ImageBlob
                  direction="top-right"
                  className="h-[220px] w-full sm:h-[280px] md:h-[320px] md:w-[85%]"
                  src="/images/about-governance-main.jpg"
                  alt={a.governanceMainAlt}
                  sizes="(min-width: 768px) 40vw, 90vw"
                />
                <ImageBlob
                  direction="bottom-left"
                  className="h-[160px] w-[85%] justify-self-end sm:h-[200px] md:absolute md:bottom-0 md:end-0 md:h-[200px] md:w-[55%]"
                  src="/images/about-governance-secondary.jpg"
                  alt={a.governanceSecondaryAlt}
                  sizes="(min-width: 768px) 25vw, 55vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
