import { Badge } from "@/components/Badge";
import { BulletListItem } from "@/components/BulletListItem";
import { Button } from "@/components/Button";
import { ImageBlob } from "@/components/ImageBlob";
import { Reveal } from "@/components/Reveal";
import { IconFlagNL, IconLoop, IconNetwork } from "@/components/icons";

const governance = [
  {
    label: "Discovery & Framing",
    description:
      "Based in Amsterdam. We define the project parameters, legal framework, and security requirements to ensure full alignment with EU standards.",
  },
  {
    label: "Team Assembly",
    description:
      "Hybrid formation. We select senior Dutch leads and expert Moroccan engineers to form a unified squad with shared cultural values.",
  },
  {
    label: "Continuous Delivery",
    description:
      "Governed by NL. Executed by MA. Weekly steering committees ensure transparency, while the dev hub maintains high-velocity output.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-8 md:pt-12">
        <div className="page-wrap grid items-center gap-8 md:grid-cols-2 md:gap-10">
          <Reveal from="left">
            <Badge>WIN-SOURCING PHILOSOPHY</Badge>
            <h1 className="heading-hero mt-6">
              <span className="text-navy-text">The Global Bridge for</span>
              <br />
              <span className="text-orange-500">IT Governance.</span>
            </h1>
            <p className="mt-6 max-w-[520px] text-base leading-relaxed text-gray-body">
              At DOED.nl, we redefine engineering capacity. By combining Dutch project leadership with Morocco&apos;s
              elite technical infrastructure, we deliver scalable solutions with absolute executive clarity.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm font-semibold text-navy-text">
              <span className="flex items-center gap-2">
                <IconFlagNL />
                Netherlands
              </span>
              <span className="h-px w-8 bg-navy-900/20 sm:w-12" aria-hidden="true" />
              <span className="flex items-center gap-2">
                <IconNetwork className="text-orange-500" />
                Morocco
              </span>
            </div>
          </Reveal>
          <Reveal from="right">
            <ImageBlob
              direction="top-right"
              className="h-[240px] w-full sm:h-[320px] md:h-[400px]"
              src="/images/about-hero.jpg"
              alt="Diverse team brainstorming with sticky notes on glass"
              priority
            />
          </Reveal>
        </div>
        <div className="mx-auto mt-10 max-w-[70rem] border-t border-navy-900/10 md:mt-14" />
      </section>

      <section className="section-y">
        <div className="page-wrap">
          <Reveal from="top" className="mx-auto max-w-[760px] text-center">
            <h2 className="text-[32px] font-bold text-navy-text md:text-[34px]">The Win-Sourcing Advantage</h2>
            <p className="mt-3 text-base text-gray-body">
              Our hybrid model ensures the agility of remote engineering without sacrificing the governance and
              compliance of local leadership.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-2">
            <Reveal from="left">
              <article className="rounded-card bg-blue-50 p-5 sm:p-8">
                <h3 className="text-[21px] font-bold text-navy-text">Strategic Governance</h3>
                <p className="mt-3 text-base leading-relaxed text-gray-body">
                  Local Dutch leadership handles the heavy lifting of project management, compliance, and strategic
                  alignment with your business goals.
                </p>
                <ul className="mt-6 space-y-3">
                  <BulletListItem label="GDPR & ISO Compliance" />
                  <BulletListItem label="On-site Consultation" />
                  <BulletListItem label="Contractual Security" />
                </ul>
              </article>
            </Reveal>
            <Reveal from="right">
              <article className="rounded-card bg-navy-900 p-5 text-white sm:p-8">
                <div className="mb-4 text-orange-500">
                  <IconLoop />
                </div>
                <h3 className="text-[21px] font-bold">Seamless Synergy</h3>
                <p className="mt-3 text-base leading-relaxed text-white/75">
                  Real-time collaboration across borders, powered by standardized DevOps protocols.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-y bg-blue-50">
        <div className="page-wrap">
          <Reveal from="top">
            <h2 className="text-center text-[32px] font-bold text-navy-text md:text-[34px]">Governance Structure</h2>
          </Reveal>
          <div className="mt-10 grid items-center gap-10 md:mt-12 md:grid-cols-2 md:gap-12">
            <Reveal from="left">
              <ul className="relative space-y-8 before:absolute before:bottom-2 before:left-[5px] before:top-2 before:w-px before:bg-orange-500">
                {governance.map((item) => (
                  <BulletListItem key={item.label} label={item.label} description={item.description} stacked />
                ))}
              </ul>
            </Reveal>
            <Reveal from="right">
              <div className="relative grid grid-cols-1 gap-4 md:block md:h-[420px]">
                <ImageBlob
                  direction="top-right"
                  className="h-[220px] w-full sm:h-[280px] md:h-[320px] md:w-[85%]"
                  src="/images/about-governance-main.jpg"
                  alt="Diverse team collaborates around a table in office"
                  sizes="(min-width: 768px) 40vw, 90vw"
                />
                <ImageBlob
                  direction="bottom-left"
                  className="h-[160px] w-[85%] justify-self-end sm:h-[200px] md:absolute md:bottom-0 md:right-0 md:h-[200px] md:w-[55%]"
                  src="/images/about-governance-secondary.jpg"
                  alt="People working at desks in open office"
                  sizes="(min-width: 768px) 25vw, 55vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="page-wrap">
          <Reveal from="top">
            <div className="rounded-card bg-orange-500 px-5 py-10 text-center sm:px-6 md:py-16">
              <h3 className="text-2xl font-[900] text-white md:text-[34px]">Ready to Scale with Certainty?</h3>
              <p className="mx-auto mt-4 max-w-[640px] text-base leading-relaxed text-white">
                Experience the power of the Win-Sourcing model. Let&apos;s build your next-generation infrastructure
                together.
              </p>
              <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                <Button href="/expertise" variant="primary-invert">
                  Explore Our Expertise
                </Button>
                <Button href="/contact" variant="outline-invert">
                  Book a Consultation
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
