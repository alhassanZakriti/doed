"use client";

import { CtaBanner } from "@/components/CtaBanner";
import { ContactForm } from "@/components/ContactForm";
import { PageIntro } from "@/components/PageIntro";
import { useLocale } from "@/components/LocaleProvider";
import { Reveal } from "@/components/Reveal";

export function ContactPageContent() {
  const { t } = useLocale();

  const details = [
    { label: t.contact.netherlandsLabel, value: t.contact.netherlandsValue },
    { label: t.contact.phoneLabel, value: "+31 (0) 20 46 88 350" },
    { label: t.contact.emailLabel, value: "foo@doed.nl" },
  ];

  return (
    <>
      <PageIntro
        badge={t.contact.badge}
        title={
          <>
            {t.contact.title} <span className="text-orange-500">{t.contact.titleHighlight}</span>
          </>
        }
        body={t.contact.intro}
      />

      <section className="section-y">
        <div className="page-wrap grid items-start gap-10 md:grid-cols-2 md:gap-12">
          <Reveal from="left">
            <h2 className="text-[32px] font-bold text-navy-text md:text-[34px]">{t.contact.sectionTitle}</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-body">{t.contact.sectionBody}</p>
            <ul className="mt-8 space-y-4">
              {details.map((item, index) => (
                <li key={item.label}>
                  <Reveal from="top" delay={index * 0.1}>
                    <div className="card-interactive rounded-card bg-blue-50 p-5">
                      <p className="text-sm font-bold uppercase tracking-[0.14em] text-orange-500">{item.label}</p>
                      {item.label === t.contact.emailLabel ? (
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

      <CtaBanner primaryHref="/services" primaryLabel={t.buttons.exploreServices} />
    </>
  );
}
