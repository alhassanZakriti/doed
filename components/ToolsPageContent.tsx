"use client";

import { Button } from "@/components/Button";
import { CtaBanner } from "@/components/CtaBanner";
import { LogoCarousel } from "@/components/LogoCarousel";
import { PageIntro } from "@/components/PageIntro";
import { useLocale } from "@/components/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import { TechPill } from "@/components/TechPill";

const technologies = [
  { name: "Docker", src: "/logos/Rectangle.png" },
  { name: "GitLab", src: "/logos/Rectangle-1.png" },
  { name: "React", src: "/logos/Rectangle-2.png" },
  { name: "Vercel", src: "/logos/Rectangle-3.png" },
  { name: "Grafana", src: "/logos/Rectangle-4.png" },
];

const stack = [".NET", "Java", "PHP", "Laravel", "React", "Angular", "Vue.js", "Node.js"];
const devops = ["Kubernetes", "Docker", "Datadog", "Terraform", "Ansible", "Jenkins", "GitHub Actions"];

export function ToolsPageContent() {
  const { t } = useLocale();
  const tools = t.tools;

  return (
    <>
      <PageIntro
        badge={tools.badge}
        title={
          <>
            {tools.titleBefore} <span className="text-orange-500">{tools.titleHighlight}</span>
          </>
        }
        body={tools.intro}
        actions={
          <>
            <Button href="/services">{t.buttons.exploreServices}</Button>
            <Button href="/book-a-consultation" variant="outline">
              {t.buttons.bookConsultation}
            </Button>
          </>
        }
      />

      <section className="section-y">
        <div className="page-wrap">
          <Reveal from="top" className="mx-auto max-w-[720px] text-center">
            <h2 className="text-[32px] font-bold text-navy-text md:text-[34px]">{tools.technologiesTitle}</h2>
            <p className="mt-3 text-base text-gray-body">{tools.technologiesIntro}</p>
          </Reveal>
          <Reveal from="top" className="mt-10">
            <LogoCarousel logos={technologies} />
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-blue-50">
        <div className="page-wrap grid gap-10 md:grid-cols-2">
          <Reveal from="left">
            <h2 className="text-[32px] font-bold text-navy-text md:text-[34px]">{tools.softwareStackTitle}</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-body">{tools.softwareStackTech}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {stack.map((name) => (
                <TechPill key={name}>{name}</TechPill>
              ))}
            </div>
          </Reveal>
          <Reveal from="right">
            <div className="rounded-card bg-navy-900 p-5 sm:p-8 md:p-12 panel-navy">
              <h2 className="text-[32px] font-bold md:text-[34px]">
                <span className="text-white">{tools.devopsTitleWhite} </span>
                <span className="text-orange-500">{tools.devopsTitleAccent}</span>
              </h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {devops.map((name) => (
                  <TechPill key={name} tone="on-dark">
                    {name}
                  </TechPill>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
