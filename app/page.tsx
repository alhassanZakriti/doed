import { Badge } from "@/components/Badge";
import { BulletListItem } from "@/components/BulletListItem";
import { Button } from "@/components/Button";
import { CollaborateStepper } from "@/components/CollaborateStepper";
import { ConceptAccordion } from "@/components/ConceptAccordion";
import { ImageBlob } from "@/components/ImageBlob";
import { LogoCarousel } from "@/components/LogoCarousel";
import { PulseLogo } from "@/components/PulseLogo";
import { Reveal } from "@/components/Reveal";
import Image from "next/image";

const whyChoose = [
  {
    label: "Dutch Project Leadership:",
    description: "Your business context is understood and protected in your own language and time zone.",
  },
  {
    label: "International Capacity:",
    description: "Direct access to a pool of top-tier engineers without long recruitment processes.",
  },
  {
    label: "Expert Squads:",
    description: "We assemble teams that have already developed synergy, minimizing onboarding time.",
  },
  {
    label: "Optimal Value Engineering:",
    description: "High-end engineering at an attractive rate, without losing control.",
  },
];

const technologies = [
  { name: "Docker", src: "/logos/Rectangle.png" },
  { name: "GitLab", src: "/logos/Rectangle-1.png" },
  { name: "React", src: "/logos/Rectangle-2.png" },
  { name: "Vercel", src: "/logos/Rectangle-3.png" },
  { name: "Grafana", src: "/logos/Rectangle-4.png" },
];

const collabSteps = [
  { n: 1, title: "DISCOVERY", caption: "We analyze your organization, current challenges, and ambitions." },
  { n: 2, title: "ANALYSIS", caption: "In-depth inventory of the current situation and definition of objectives." },
  {
    n: 3,
    title: "STRATEGY & DESIGN",
    caption: "Assembly of the optimal solution and selection of the right Expert Squad.",
  },
  { n: 4, title: "IMPLEMENTATION", caption: "Careful execution by our specialists under strict Dutch governance." },
  { n: 5, title: "MANAGEMENT & OPTIMIZATION", caption: "Continuous support to keep your IT environment future-proof." },
];

export default function Home() {
  return (
    <div className="relative">
      <section className="pt-6 md:pt-10">
        <div className="page-wrap relative mb-[-2.5rem] flex flex-col gap-4 overflow-visible md:mb-[-5em] md:flex-row">
          <ImageBlob
            direction="top"
            mdDirection="top-left"
            className="hero-image h-[200px] w-full sm:h-[260px] md:h-[380px] "
            src="/images/home-hero-left.jpg"
            alt="Colleagues collaborating at a modern office desk"
            priority
          />
          <ImageBlob
            direction="bottom"
            mdDirection="top-right"
            className="hero-image h-[200px] w-full sm:h-[260px] md:h-[380px] "
            src="/images/home-hero-right.jpg"
            alt="Two people talking in a modern office hallway"
            priority
          />
          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <PulseLogo section="header" />
          </div>
        </div>

        <div className="page-wrap-narrow py-10 text-center md:py-14">
          <Badge>EXPERIENCE YOU CAN TRUST.</Badge>
          <h1 className="heading-hero mt-6 text-navy-text">
            Your Dedicated Contact Point in the Netherlands.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-gray-body">
            At DOED, continuity is key. Throughout your project, you will have one dedicated contact person in the
            Netherlands acting as your project manager and quality assurance lead. With decades of IT experience, we
            guide your projects from the initial concept to final delivery. Behind this local governance stands a team
            of over 20 highly qualified IT engineers in Morocco. This hybrid structure allows us to scale rapidly
            without compromising on quality or communication.
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <Button href="/expertise" entrance="1">
              Explore Our Expertise
            </Button>
            <Button href="/contact" variant="outline" entrance="2">
              Book a Consultation
            </Button>
          </div>
        </div>
        <div className="mx-auto max-w-[70rem] border-t border-navy-900/10" />
      </section>

      <section className="section-y">
        <div className="page-wrap">
          <Reveal from="top" className="mx-auto max-w-[720px] text-center">
            <h2 className="text-[32px] font-bold text-navy-text md:text-[34px]">Why Choose Win-Sourcing?</h2>
            <p className="mt-3 text-base text-gray-body">
              We don&apos;t believe in traditional outsourcing. We practice Win-Sourcing: a model where both parties win
              through synergy.
            </p>
          </Reveal>
          <div className="mt-10 grid items-center gap-10 md:mt-12 md:grid-cols-2">
            <Reveal from="left">
              <ul className="space-y-5">
                {whyChoose.map((item) => (
                  <BulletListItem key={item.label} label={item.label} description={item.description} />
                ))}
              </ul>
            </Reveal>
            <Reveal from="right">
              <div className="relative overflow-hidden rounded-card">
                <div className="grid grid-cols-2">
                  <div className="relative h-[180px] border-l-4 border-[#2FA36B] sm:h-[240px] md:h-[340px]">
                    <Image
                      src="/images/home-synergy-left.jpg"
                      alt="Diverse business team collaborating in a modern office"
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 25vw, 50vw"
                    />
                    <div className="absolute inset-x-0 bottom-0 z-1 bg-gradient-to-t from-navy-900/70 to-transparent p-3 sm:p-4">
                      <p className="text-sm font-semibold text-white sm:text-base">Moroccan Expertise</p>
                    </div>
                  </div>
                  <div className="relative h-[180px] border-r-4 border-[#E24B4A] sm:h-[240px] md:h-[340px]">
                    <Image
                      src="/images/home-synergy-right.jpg"
                      alt="Team collaborating around a computer in an office"
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 25vw, 50vw"
                    />
                    <div className="absolute inset-x-0 bottom-0 z-1 bg-gradient-to-t from-navy-900/70 to-transparent p-3 text-right sm:p-4">
                      <p className="text-sm font-semibold text-white sm:text-base">Dutch Leadership</p>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Badge>Synergy</Badge>
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
          className="object-cover object-top"
          sizes="100vw"
          priority
          fill
        />

        <div className="page-wrap relative">
          <Reveal from="top" className="mx-auto max-w-[720px] text-center">
            <h2 className="text-[32px] font-bold text-navy-text md:text-[34px]">From Concept to Implementation</h2>
            <p className="mt-3 text-base text-gray-body">
              We deliver functional teams and solutions, not just individual contractors.
            </p>
          </Reveal>
          <Reveal from="top" className="mt-10">
            <ConceptAccordion />
          </Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="page-wrap">
          <Reveal from="top" className="mx-auto max-w-[720px] text-center">
            <h2 className="text-[32px] font-bold text-navy-text md:text-[34px]">How We Collaborate?</h2>
            <p className="mt-3 text-base text-gray-body">From the first meeting to the final result.</p>
          </Reveal>
          <Reveal from="top">
            <CollaborateStepper steps={collabSteps} />
          </Reveal>
        </div>
      </section>

      <section className="pb-8">
        <div className="page-wrap">
          <Reveal from="top" className="mx-auto max-w-[720px] text-center">
            <h2 className="text-[32px] font-bold text-navy-text md:text-[34px]">Our Technologies</h2>
            <p className="mt-3 text-base text-gray-body">We broaden your field of vision with the technologies we use</p>
          </Reveal>
          <Reveal from="top" className="mt-10">
            <LogoCarousel logos={technologies} />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
