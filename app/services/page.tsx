import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { CtaBanner } from "@/components/CtaBanner";
import { IconStatCard } from "@/components/IconStatCard";
import { ImageBlob } from "@/components/ImageBlob";
import { Reveal } from "@/components/Reveal";
import { TechPill } from "@/components/TechPill";
import {
  IconCloud,
  IconCode,
  IconCycle,
  IconHeadset,
  IconShield,
} from "@/components/icons";
import type { ComponentType, ReactNode } from "react";

const services: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  detail: string;
  pills?: string[];
}[] = [
  {
    icon: IconCode,
    title: "Software Development & AI",
    description:
      "Custom software, web applications, and intelligent automation. From API integrations to full SaaS platforms and AI implementations (LLM/RAG).",
    detail:
      "We engineer bespoke software ecosystems that leverage predictive analytics and generative AI to automate complex decision-making processes. Our code is built for endurance and high-transaction environments.",
    pills: [".NET", "Java", "PHP", "Laravel", "React", "Angular", "Vue.js", "Node.js"],
  },
  {
    icon: IconCycle,
    title: "DevOps & Automation",
    description: "Accelerating time-to-market through automation…",
    detail:
      "We dissolve the silos between development and operations. By automating the entire delivery pipeline, we enable your team to ship code daily with zero downtime.",
    pills: ["Kubernetes", "Docker", "Datadog", "Terraform", "Ansible", "Jenkins", "GitHub Actions"],
  },
  {
    icon: IconCloud,
    title: "Cloud & Infrastructure",
    description: "Secure, scalable, and stable IT foundations. Design…",
    detail:
      "Architecting cloud-native solutions that provide the resilience of an on-premise data center with the agility of the edge. We specialize in hybrid and multi-cloud strategies.",
  },
  {
    icon: IconShield,
    title: "Cybersecurity & Risk Management",
    description: "Protection against digital threats and compliance…",
    detail:
      "Compliance-first monitoring ensuring your cloud assets meet GDPR and ISO standards at all times.",
  },
  {
    icon: IconHeadset,
    title: "IT Support & Helpdesk",
    description: "Throughout your project, you will have one dedicated contact person in the Netherlands.",
    detail:
      "Your dedicated contact person in the Netherlands acting as your project manager and quality assurance lead. With decades of IT experience, we guide your projects from the initial concept to final delivery.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="pt-8 md:pt-12">
        <div className="page-wrap grid items-center gap-8 md:grid-cols-2 md:gap-10">
          <Reveal from="left">
            <Badge>FUNCTIONAL TEAMS</Badge>
            <h1 className="heading-hero mt-6">
              <span className="text-navy-text">We deliver teams and solutions, </span>
              <span className="text-orange-500">not contractors.</span>
            </h1>
            <p className="mt-6 max-w-[520px] text-base leading-relaxed text-gray-body">
              We deliver functional teams and solutions, not just individual contractors.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Button href="/contact">Book a Consultation</Button>
              <Button href="/expertise" variant="outline">
                Explore Our Expertise
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
        <div className="mx-auto mt-10 max-w-[70rem] border-t border-navy-900/10 md:mt-14" />
      </section>

      <section className="section-y">
        <div className="page-wrap">
          <Reveal from="top" className="mx-auto max-w-[760px] text-center">
            <h2 className="text-[32px] font-bold text-navy-text md:text-[34px]">Our services</h2>
            <p className="mt-3 text-base text-gray-body">
              Direct access to a pool of top-tier engineers without long recruitment processes.
            </p>
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

      {services.map((service, index) => (
        <ServiceDetail key={service.title} service={service} reverse={index % 2 === 1} />
      ))}

      <CtaBanner />
    </>
  );
}

function ServiceDetail({
  service,
  reverse,
}: {
  service: (typeof services)[number];
  reverse: boolean;
}) {
  const Icon = service.icon;
  const body: ReactNode = (
    <>
      <div className="mb-4 text-orange-500">
        <Icon className="h-8 w-8" />
      </div>
      <h2 className="text-[32px] font-bold text-navy-text md:text-[34px]">{service.title}</h2>
      <p className="mt-4 text-base leading-relaxed text-gray-body">{service.detail}</p>
      {service.pills ? (
        <div className="mt-6 flex flex-wrap gap-2">
          {service.pills.map((pill) => (
            <TechPill key={pill}>{pill}</TechPill>
          ))}
        </div>
      ) : null}
      <div className="mt-8">
        <Button href="/contact">Book a Consultation</Button>
      </div>
    </>
  );

  return (
    <section className={reverse ? "section-y bg-blue-50" : "section-y"}>
      <div className="page-wrap grid items-center gap-8 md:grid-cols-2 md:gap-10">
        <Reveal from={reverse ? "right" : "left"} className={reverse ? "md:order-2" : ""}>
          {body}
        </Reveal>
        <Reveal from={reverse ? "left" : "right"} className={reverse ? "md:order-1" : ""}>
          <article className="card-interactive rounded-card bg-navy-900 p-5 text-white sm:p-8 md:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-orange-500">Win-Sourcing</p>
            <p className="mt-4 text-lg leading-relaxed text-white/80">{service.description}</p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
