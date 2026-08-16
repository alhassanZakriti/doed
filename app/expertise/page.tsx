import Link from "next/link";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { IconStatCard } from "@/components/IconStatCard";
import { ImageBlob } from "@/components/ImageBlob";
import { CtaBanner } from "@/components/CtaBanner";
import { Reveal } from "@/components/Reveal";
import { TechPill } from "@/components/TechPill";
import { IconArrow, IconBolt, IconCloud, IconFlagNL, IconLayers, IconShield } from "@/components/icons";

const cloudCards = [
  {
    icon: IconCloud,
    title: "AWS & Azure Experts",
    description: "Enterprise-grade deployments featuring automated scaling and cost-optimized compute cycles.",
  },
  {
    icon: IconLayers,
    title: "Hybrid Cloud",
    description: "Bridging legacy hardware with modern cloud services via secure, low-latency interconnects.",
  },
  {
    icon: IconShield,
    title: "Cloud Governance",
    description: "Compliance-first monitoring ensuring your cloud assets meet GDPR and ISO standards at all times.",
  },
  {
    icon: IconBolt,
    title: "Serverless Ops",
    description: "Zero-management infrastructure designed for event-driven applications and massive throughput.",
  },
];

const devopsPills = ["Kubernetes", "Docker", "Datadog", "Terraform", "Ansible", "Jenkins", "GitHub Actions"];

export default function ExpertisePage() {
  return (
    <>
      <section className="pt-8 md:pt-12">
        <div className="page-wrap grid items-center gap-8 md:grid-cols-2 md:gap-10">
          <Reveal from="left">
            <Badge>INSTITUTIONAL EXCELLENCE</Badge>
            <h1 className="heading-hero mt-6">
              <span className="text-navy-text">Our Domain </span>
              <span className="text-orange-500">Expertise.</span>
            </h1>
            <p className="mt-6 max-w-[520px] text-base leading-relaxed text-gray-body">
              Bridging the gap between complex architectural challenges and executive operational clarity. We deploy
              high-velocity IT infrastructure that scales with your ambition.
            </p>
            <a
              href="#cloud-infrastructure"
              className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-navy-text underline underline-offset-4"
            >
              <IconFlagNL />
              Explore Capabilities
            </a>
          </Reveal>
          <Reveal from="right">
            <ImageBlob
              direction="top-right"
              className="h-[240px] w-full sm:h-[320px] md:h-[400px]"
              src="/images/expertise-hero.jpg"
              alt="Close-up of a hand typing on a computer keyboard"
              priority
            />
          </Reveal>
        </div>
      </section>

      <section id="cloud-infrastructure" className="section-y">
        <div className="page-wrap grid items-start gap-10 md:grid-cols-2 md:gap-12">
          <Reveal from="left">
            <h2 className="text-[32px] font-bold text-navy-text md:text-[34px]">Cloud Infrastructure & Migration</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-body">
              Architecting cloud-native solutions that provide the resilience of an on-premise data center with the
              agility of the edge. We specialize in hybrid and multi-cloud strategies.
            </p>
            <Link href="/contact" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-orange-500">
              Download Migration Guide <IconArrow />
            </Link>
          </Reveal>
          <Reveal from="right">
            <div className="grid gap-4 sm:grid-cols-2">
              {cloudCards.map((card) => {
                const Icon = card.icon;
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
          <div className="grid gap-10 rounded-card bg-navy-900 p-5 sm:p-8 md:grid-cols-2 md:p-12">
            <Reveal from="left">
              <h2 className="text-[32px] font-bold md:text-[34px]">
                <span className="text-white">High-Velocity </span>
                <span className="text-orange-500">DevOps</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/75">
                We dissolve the silos between development and operations. By automating the entire delivery pipeline,
                we enable your team to ship code daily with zero downtime.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6 md:mt-10 md:gap-8">
                <div>
                  <p className="text-[32px] font-extrabold leading-none text-orange-500 sm:text-[44px]">99.99%</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-white/70">UPTIME AVERAGE</p>
                </div>
                <div>
                  <p className="text-[32px] font-extrabold leading-none text-orange-500 sm:text-[44px]">15min</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-white/70">
                    MEAN TIME TO RECOVERY
                  </p>
                </div>
              </div>
              <div className="mt-8 md:mt-10">
                <Button href="/contact" className="w-full sm:w-auto">
                  Request Pipeline Audit
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
      <CtaBanner primaryHref="/services" primaryLabel="Explore Our Services" />
    </>
  );
}
