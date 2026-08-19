"use client";

import { Badge } from "@/components/Badge";
import { BulletListItem } from "@/components/BulletListItem";
import { Button } from "@/components/Button";
import { CollaborateStepper } from "@/components/CollaborateStepper";
import { ConceptAccordion } from "@/components/ConceptAccordion";
import { ContactForm } from "@/components/ContactForm";
import { ImageBlob } from "@/components/ImageBlob";
import { LogoCarousel } from "@/components/LogoCarousel";
import { useLocale } from "@/components/LocaleProvider";
import { PulseLogo } from "@/components/PulseLogo";
import { Reveal } from "@/components/Reveal";
import Image from "next/image";

const technologies = [
  { name: "Docker", src: "/logos/Rectangle.png" },
  { name: "GitLab", src: "/logos/Rectangle-1.png" },
  { name: "React", src: "/logos/Rectangle-2.png" },
  { name: "Grafana", src: "/logos/Rectangle-4.png" },
  { name: "Vercel", src: "/logos/Rectangle-3.png" },
];

export function HomePageContent() {
  const { t } = useLocale();
  const steps = t.home.steps.map((step, index) => ({ n: index + 1, ...step }));

  return (
    <div className="relative">
      <section className="pt-6 md:pt-10">
        <div className="page-wrap relative mb-[-2.5rem] flex flex-col gap-4 overflow-visible md:mb-[-5em] md:flex-row">
          <ImageBlob
            direction="top"
            mdDirection="top-left"
            className="hero-image h-[200px] w-full sm:h-[260px] md:h-[380px]"
            src="/images/home-hero-left.jpg"
            alt="Colleagues collaborating at a modern office desk"
            priority
          />
          <ImageBlob
            direction="bottom"
            mdDirection="top-right"
            className="hero-image h-[200px] w-full sm:h-[260px] md:h-[380px]"
            src="/images/home-hero-right.jpg"
            alt="Two people talking in a modern office hallway"
            priority
          />
          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <PulseLogo section="header" />
          </div>
        </div>

        <div className="page-wrap-narrow py-10 text-center md:py-14">
          <Badge>{t.home.heroBadge}</Badge>
          <h1 className="heading-hero mt-6 text-navy-text">{t.home.heroTitle}</h1>
          <p className="mt-6 text-base leading-relaxed text-gray-body">{t.home.heroBody}</p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <Button href="/expertise" entrance="1">
              {t.buttons.exploreExpertise}
            </Button>
            <Button href="/book-a-consultation" variant="outline" entrance="2">
              {t.buttons.bookConsultation}
            </Button>
          </div>
        </div>
        <div className="mx-auto max-w-[70rem] border-t border-line" />
      </section>

      <section className="section-y">
        <div className="page-wrap">
          <Reveal from="top" className="mx-auto max-w-[720px] text-center">
            <h2 className="text-[32px] font-bold text-navy-text md:text-[34px]">{t.home.winTitle}</h2>
            <p className="mt-3 text-base text-gray-body">{t.home.winIntro}</p>
          </Reveal>
          <div className="mt-10 grid items-center gap-10 md:mt-12 md:grid-cols-2">
            <Reveal from="left">
              <ul className="space-y-5">
                {t.home.winBullets.map((item) => (
                  <BulletListItem key={item.label} label={item.label} description={item.description} />
                ))}
              </ul>
            </Reveal>
            <Reveal from="right">
              <div className="relative overflow-hidden rounded-card">
                <div className="grid grid-cols-2">
                  <div className="relative h-[180px] border-s-4 border-[#2FA36B] sm:h-[240px] md:h-[340px]">
                    <Image
                      src="/images/home-synergy-left.jpg"
                      alt="Diverse business team collaborating in a modern office"
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 25vw, 50vw"
                    />
                    <div className="absolute inset-x-0 bottom-0 z-1 bg-gradient-to-t from-navy-900/70 to-transparent p-3 sm:p-4">
                      <p className="text-sm font-semibold text-white sm:text-base">{t.home.moroccanExpertise}</p>
                    </div>
                  </div>
                  <div className="relative h-[180px] border-e-4 border-[#E24B4A] sm:h-[240px] md:h-[340px]">
                    <Image
                      src="/images/home-synergy-right.jpg"
                      alt="Team collaborating around a computer in an office"
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 25vw, 50vw"
                    />
                    <div className="absolute inset-x-0 bottom-0 z-1 bg-gradient-to-t from-navy-900/70 to-transparent p-3 text-end sm:p-4">
                      <p className="text-sm font-semibold text-white sm:text-base">{t.home.dutchLeadership}</p>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Badge>{t.home.synergy}</Badge>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-y relative overflow-hidden">
        <Image
          src="/bg-light-blue.png"
          alt=""
          className="object-cover object-top dark:opacity-20"
          sizes="100vw"
          priority
          fill
        />
        <div className="page-wrap relative">
          <Reveal from="top" className="mx-auto max-w-[720px] text-center">
            <h2 className="text-[32px] font-bold text-navy-text md:text-[34px]">{t.home.servicesTitle}</h2>
            <p className="mt-3 text-base text-gray-body">{t.home.servicesIntro}</p>
          </Reveal>
          <Reveal from="top" className="mt-10">
            <ConceptAccordion />
          </Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="page-wrap">
          <Reveal from="top" className="mx-auto max-w-[720px] text-center">
            <h2 className="text-[32px] font-bold text-navy-text md:text-[34px]">{t.home.collaborateTitle}</h2>
            <p className="mt-3 text-base text-gray-body">{t.home.collaborateIntro}</p>
          </Reveal>
          <Reveal from="top">
            <CollaborateStepper steps={steps} />
          </Reveal>
        </div>
      </section>


      <section className="section-y bg-blue-50">
        <div className="page-wrap grid items-start gap-10 md:grid-cols-2 md:gap-12">
          <Reveal from="left">
            <h2 className="text-[32px] font-bold text-navy-text md:text-[34px]">{t.home.contactTitle}</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-body">{t.home.contactBody}</p>
          </Reveal>
          <Reveal from="right">
            <ContactForm />
          </Reveal>
        </div>
      </section>
      
      <section className="section-y">
        <div className="page-wrap">
          <Reveal from="top" className="mx-auto max-w-[720px] text-center">
            <h2 className="text-[32px] font-bold text-navy-text md:text-[34px]">{t.home.technologiesTitle}</h2>
          </Reveal>
          <Reveal from="top" className="mt-10">
            <LogoCarousel logos={technologies} />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
