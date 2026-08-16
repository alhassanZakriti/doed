import { Button } from "@/components/Button";
import { CtaBanner } from "@/components/CtaBanner";
import { LogoCarousel } from "@/components/LogoCarousel";
import { PageIntro } from "@/components/PageIntro";
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

export default function ToolsPage() {
  return (
    <>
      <PageIntro
        badge="OUR TECHNOLOGIES"
        title={
          <>
            We broaden your <span className="text-orange-500">field of vision.</span>
          </>
        }
        body="We broaden your field of vision with the technologies we use"
        actions={
          <>
            <Button href="/services">Explore Our Services</Button>
            <Button href="/contact" variant="outline">
              Book a Consultation
            </Button>
          </>
        }
      />

      <section className="section-y">
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

      <section className="section-y bg-blue-50">
        <div className="page-wrap grid gap-10 md:grid-cols-2">
          <Reveal from="left">
            <h2 className="text-[32px] font-bold text-navy-text md:text-[34px]">Software stack</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-body">
              Tech: .NET · Java · PHP · Laravel · React · Angular · Vue.js · Node.js
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {stack.map((name) => (
                <TechPill key={name}>{name}</TechPill>
              ))}
            </div>
          </Reveal>
          <Reveal from="right">
            <div className="rounded-card bg-navy-900 p-5 sm:p-8 md:p-12">
              <h2 className="text-[32px] font-bold md:text-[34px]">
                <span className="text-white">High-Velocity </span>
                <span className="text-orange-500">DevOps</span>
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
