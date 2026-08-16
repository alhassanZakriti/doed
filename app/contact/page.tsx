import { CtaBanner } from "@/components/CtaBanner";
import { ContactForm } from "@/components/ContactForm";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";

const details = [
  { label: "Netherlands", value: "Local Dutch leadership and on-site consultation." },
  { label: "Phone", value: "+34 (690) 000-000" },
  { label: "Email", value: "contact@doed.ma" },
];

export default function ContactPage() {
  return (
    <>
      <PageIntro
        badge="BOOK A CONSULTATION"
        title={
          <>
            Your dedicated contact point in the <span className="text-orange-500">Netherlands.</span>
          </>
        }
        body="Throughout your project, you will have one dedicated contact person in the Netherlands acting as your project manager and quality assurance lead."
      />

      <section className="section-y">
        <div className="page-wrap grid items-start gap-10 md:grid-cols-2 md:gap-12">
          <Reveal from="left">
            <h2 className="text-[32px] font-bold text-navy-text md:text-[34px]">Let&apos;s talk</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-body">
              With decades of IT experience, we guide your projects from the initial concept to final delivery.
            </p>
            <ul className="mt-8 space-y-4">
              {details.map((item, index) => (
                <li key={item.label}>
                  <Reveal from="top" delay={index * 0.1}>
                    <div className="card-interactive rounded-card bg-blue-50 p-5">
                      <p className="text-sm font-bold uppercase tracking-[0.14em] text-orange-500">{item.label}</p>
                      {item.label === "Email" ? (
                        <a href="mailto:contact@doed.ma" className="mt-1 block text-navy-text">
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-navy-text">{item.value}</p>
                      )}
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal from="right">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Ready to Scale with Certainty?"
        primaryHref="/services"
        primaryLabel="Explore Our Services"
      />
    </>
  );
}
