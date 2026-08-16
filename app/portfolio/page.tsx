import { CtaBanner } from "@/components/CtaBanner";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";
import Image from "next/image";
import Link from "next/link";

const work = [
  {
    href: "/expertise",
    image: "/images/about-governance-main.jpg",
    alt: "Diverse team collaborates around a table in office",
    title: "Case Highlight: Finance Engine",
    excerpt:
      "Implemented an LLM-powered document processing pipeline for an Amsterdam bank, reducing manual review time by 82%.",
  },
  {
    href: "/expertise#cloud-infrastructure",
    image: "/images/home-synergy-left.jpg",
    alt: "Diverse business team collaborating in a modern office",
    title: "Cloud Infrastructure & Migration",
    excerpt: "We specialize in hybrid and multi-cloud strategies.",
  },
  {
    href: "/expertise",
    image: "/images/home-synergy-right.jpg",
    alt: "Team collaborating around a computer in an office",
    title: "High-Velocity DevOps",
    excerpt:
      "By automating the entire delivery pipeline, we enable your team to ship code daily with zero downtime.",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <PageIntro
        badge="PORTFOLIO"
        title={
          <>
            Work delivered with <span className="text-orange-500">executive clarity.</span>
          </>
        }
        body="We deliver functional teams and solutions, not just individual contractors."
      />

      <section className="section-y">
        <div className="page-wrap grid gap-8">
          {work.map((item, index) => (
            <Reveal key={item.title} from={index % 2 === 0 ? "left" : "right"}>
              <Link
                href={item.href}
                className="card-interactive grid overflow-hidden rounded-card border border-navy-900/10 bg-white md:grid-cols-2"
              >
                <div className="relative min-h-[180px] sm:min-h-[220px]">
                  <Image src={item.image} alt={item.alt} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
                </div>
                <div className="flex flex-col justify-center p-5 sm:p-8 md:p-12">
                  <h2 className="text-[21px] font-bold text-navy-text">{item.title}</h2>
                  <p className="mt-3 text-base leading-relaxed text-gray-body">{item.excerpt}</p>
                  <span className="mt-6 text-sm font-bold text-orange-500">Explore Our Expertise</span>
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
