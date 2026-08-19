"use client";

import Image from "next/image";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { PageIntro } from "@/components/PageIntro";
import { useLocale } from "@/components/LocaleProvider";
import { Reveal } from "@/components/Reveal";

const itemHrefs = ["/expertise", "/expertise#cloud-infrastructure", "/expertise"];
const itemImages = [
  "/images/about-governance-main.jpg",
  "/images/home-synergy-left.jpg",
  "/images/home-synergy-right.jpg",
];

export function PortfolioPageContent() {
  const { t } = useLocale();
  const p = t.portfolio;

  return (
    <>
      <PageIntro
        badge={p.badge}
        title={
          <>
            {p.titleBefore} <span className="text-orange-500">{p.titleHighlight}</span>
          </>
        }
        body={p.intro}
      />

      <section className="section-y">
        <div className="page-wrap grid gap-8">
          {p.items.map((item, index) => (
            <Reveal key={item.title} from={index % 2 === 0 ? "left" : "right"}>
              <Link
                href={itemHrefs[index]}
                className="card-interactive grid overflow-hidden rounded-card border border-line bg-surface md:grid-cols-2"
              >
                <div className="relative min-h-[180px] sm:min-h-[220px]">
                  <Image
                    src={itemImages[index]}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="flex flex-col justify-center p-5 sm:p-8 md:p-12">
                  <h2 className="text-[21px] font-bold text-navy-text">{item.title}</h2>
                  <p className="mt-3 text-base leading-relaxed text-gray-body">{item.excerpt}</p>
                  <span className="mt-6 text-sm font-bold text-orange-500">{p.exploreLink}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
