"use client";

import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { CtaBanner } from "@/components/CtaBanner";
import { IconStatCard } from "@/components/IconStatCard";
import { ImageBlob } from "@/components/ImageBlob";
import { useLocale } from "@/components/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import {
  IconBolt,
  IconCloud,
  IconCode,
  IconCycle,
  IconHeadset,
  IconShield,
} from "@/components/icons";
import type { ComponentType } from "react";

const icons: ComponentType<{ className?: string }>[] = [
  IconCode,
  IconCloud,
  IconCycle,
  IconShield,
  IconBolt,
  IconHeadset,
];

export function ServicesPageContent() {
  const { t } = useLocale();
  const services = t.services.map((service, index) => ({
    ...service,
    icon: icons[index] ?? IconCode,
  }));

  return (
    <>
      <section className="pt-8 md:pt-12">
        <div className="page-wrap grid items-center gap-8 md:grid-cols-2 md:gap-10">
          <Reveal from="left">
            <Badge>{t.servicesPage.badge}</Badge>
            <h1 className="heading-hero mt-6">
              <span className="text-navy-text">{t.servicesPage.title}</span>
              <span className="text-orange-500">{t.servicesPage.titleHighlight}</span>
            </h1>
            <p className="mt-6 max-w-[520px] text-base leading-relaxed text-gray-body">{t.servicesPage.intro}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Button href="/book-a-consultation">{t.buttons.bookConsultation}</Button>
              <Button href="/expertise" variant="outline">
                {t.buttons.exploreExpertise}
              </Button>
            </div>
          </Reveal>
          <Reveal from="right">
            <ImageBlob
              direction="top-right"
              className="h-[240px] w-full sm:h-[320px] md:h-[400px]"
              src="/images/home-hero-left.jpg"
              alt="Colleagues collaborating at a modern office desk"
              priority
            />
          </Reveal>
        </div>
        <div className="mx-auto mt-10 max-w-[70rem] border-t border-line md:mt-14" />
      </section>

      <section className="section-y">
        <div className="page-wrap">
          <Reveal from="top" className="mx-auto max-w-[760px] text-center">
            <h2 className="text-[32px] font-bold text-navy-text md:text-[34px]">{t.servicesPage.gridTitle}</h2>
            <p className="mt-3 text-base text-gray-body">{t.servicesPage.gridIntro}</p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} from="top" delay={index * 0.1}>
                  <IconStatCard icon={<Icon />} title={service.title} description={service.description} />
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {services.map((service, index) => {
        const Icon = service.icon;
        const reverse = index % 2 === 1;
        return (
          <section key={service.title} className={reverse ? "section-y bg-blue-50" : "section-y"}>
            <div className="page-wrap grid items-center gap-8 md:grid-cols-2 md:gap-10">
              <Reveal from={reverse ? "right" : "left"} className={reverse ? "md:order-2" : ""}>
                <div className="mb-4 text-orange-500">
                  <Icon className="h-8 w-8" />
                </div>
                <h2 className="text-[32px] font-bold text-navy-text md:text-[34px]">{service.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-gray-body">{service.description}</p>
                <div className="mt-8">
                  <Button href="/book-a-consultation">{t.buttons.bookConsultation}</Button>
                </div>
              </Reveal>
              <Reveal from={reverse ? "left" : "right"} className={reverse ? "md:order-1" : ""}>
                <article className="card-interactive rounded-card bg-navy-900 p-5 text-white panel-navy sm:p-8 md:p-12">
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-orange-500">
                    {t.servicesPage.winSourcing}
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-white/80">{service.description}</p>
                </article>
              </Reveal>
            </div>
          </section>
        );
      })}

      <CtaBanner />
    </>
  );
}
