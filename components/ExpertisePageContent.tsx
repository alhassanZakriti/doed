"use client";

import { Badge } from "@/components/Badge";
import { BulletListItem } from "@/components/BulletListItem";
import { Button } from "@/components/Button";
import { CtaBanner } from "@/components/CtaBanner";
import { IconStatCard } from "@/components/IconStatCard";
import { ImageBlob } from "@/components/ImageBlob";
import { useLocale } from "@/components/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import { TechPill } from "@/components/TechPill";
import { IconArrow, IconBolt, IconCloud, IconFlagNL, IconLayers, IconShield } from "@/components/icons";

const cloudIcons = [IconCloud, IconLayers, IconShield, IconBolt];
const devopsPills = ["Kubernetes", "Docker", "Datadog", "Terraform", "Ansible", "Jenkins", "GitHub Actions"];
const softwareStack = ["Python / PyTorch", "Go", "PostgreSQL", "React / Next.js", "Node.js (TypeScript)"];

export function ExpertisePageContent() {
  const { t } = useLocale();
  const e = t.expertise;
  const categories = e.categories;

  return (
    <>
      <section className="pt-8 md:pt-12">
        <div className="page-wrap grid items-center gap-8 md:grid-cols-2 md:gap-10">
          <Reveal from="left">
            <Badge>{e.badge}</Badge>
            <h1 className="heading-hero mt-6">
              <span className="text-navy-text">{e.titleLine1} </span>
              <span className="text-orange-500">{e.titleHighlight}</span>
            </h1>
            <p className="mt-6 max-w-[520px] text-base leading-relaxed text-gray-body">{e.intro}</p>
            <a
              href="#expertise-categories"
              className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-navy-text underline underline-offset-4"
            >
              <IconFlagNL />
              {e.exploreCapabilities}
            </a>
          </Reveal>
          <Reveal from="right">
            <ImageBlob
              direction="top-right"
              className="h-[240px] w-full sm:h-[320px] md:h-[400px]"
              src="/images/expertise-hero.jpg"
              alt={e.heroAlt}
              priority
            />
          </Reveal>
        </div>
      </section>

      <section id="expertise-categories" className="section-y scroll-mt-24 bg-blue-50">
        <div className="page-wrap">
          <Reveal from="top">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.tabs.map((tab, index) => (
                <span
                  key={tab}
                  className={`rounded-button px-3 py-2 text-xs font-bold uppercase tracking-[0.08em] sm:px-4 sm:text-sm ${
                    index === 0
                      ? "bg-surface text-orange-500 shadow-[0_2px_8px_rgba(14,42,69,0.08)]"
                      : "bg-transparent text-gray-body"
                  }`}
                >
                  {tab}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal from="top" className="mt-10">
            <h2 className="text-[32px] font-bold text-navy-text md:text-[34px]">{categories.softwareTitle}</h2>
            <p className="mt-4 max-w-[720px] text-base leading-relaxed text-gray-body">{categories.softwareBody}</p>
            <div className="mt-8 rounded-card border-s-4 border-orange-500 bg-surface p-5 sm:p-8">
              <p className="text-sm font-bold text-navy-text">{categories.caseHighlightLabel}</p>
              <p className="mt-2 text-base leading-relaxed text-gray-body">{categories.caseHighlightBody}</p>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <article className="rounded-card bg-orange-50 p-5 sm:p-8">
                <h3 className="text-[21px] font-bold text-navy-text">{categories.techStackTitle}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {softwareStack.map((name) => (
                    <TechPill key={name}>{name}</TechPill>
                  ))}
                </div>
              </article>
              <article className="rounded-card bg-blue-50 p-5 sm:p-8">
                <h3 className="text-[21px] font-bold text-navy-text">{categories.capabilitiesTitle}</h3>
                <ul className="mt-4 space-y-3">
                  {categories.capabilityBullets.map((label) => (
                    <BulletListItem key={label} label={label} />
                  ))}
                </ul>
              </article>
            </div>
            <div className="mt-10 text-center">
              <Button href="/get-started?service=ai-project">{categories.startAiProject}</Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="cloud-infrastructure" className="section-y scroll-mt-24">
        <div className="page-wrap grid items-start gap-10 md:grid-cols-2 md:gap-12">
          <Reveal from="left">
            <h2 className="text-[32px] font-bold text-navy-text md:text-[34px]">{e.cloudTitle}</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-body">{e.cloudIntro}</p>
            <a
              href="/downloads/migration-guide.pdf"
              download
              className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-orange-500"
            >
              {e.migrationGuide} <IconArrow />
            </a>
          </Reveal>
          <Reveal from="right">
            <div className="grid gap-4 sm:grid-cols-2">
              {e.cloudCards.map((card, index) => {
                const Icon = cloudIcons[index];
                return (
                  <IconStatCard
                    key={card.title}
                    icon={<Icon />}
                    title={card.title}
                    description={card.description}
                  />
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-8">
        <div className="page-wrap">
          <div className="grid gap-10 rounded-card bg-navy-900 p-5 sm:p-8 md:grid-cols-2 md:p-12 panel-navy">
            <Reveal from="left">
              <h2 className="text-[32px] font-bold md:text-[34px]">
                <span className="text-white">{e.devopsTitleWhite} </span>
                <span className="text-orange-500">{e.devopsTitleAccent}</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/75">{e.devopsIntro}</p>
              <div className="mt-8 grid grid-cols-2 gap-6 md:mt-10 md:gap-8">
                <div>
                  <p className="text-[32px] font-extrabold leading-none text-orange-500 sm:text-[44px]">99.99%</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-white/70">{e.uptimeLabel}</p>
                </div>
                <div>
                  <p className="text-[32px] font-extrabold leading-none text-orange-500 sm:text-[44px]">15min</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-white/70">{e.mttrLabel}</p>
                </div>
              </div>
              <div className="mt-8 md:mt-10">
                <Button href="/get-started?service=pipeline-audit" className="w-full sm:w-auto">
                  {e.requestAudit}
                </Button>
              </div>
            </Reveal>
            <Reveal from="right">
              <div className="flex flex-wrap content-start gap-3 self-center">
                {devopsPills.map((name) => (
                  <TechPill key={name} tone="on-dark">
                    {name}
                  </TechPill>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <CtaBanner primaryHref="/services" primaryLabel={t.buttons.exploreServices} />
    </>
  );
}
