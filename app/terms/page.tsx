import { CtaBanner } from "@/components/CtaBanner";
import { LegalSections } from "@/components/LegalSections";
import { PageIntro } from "@/components/PageIntro";

export default function TermsPage() {
  return (
    <>
      <PageIntro
        badge="TERMS & CONDITIONS"
        title={
          <>
            Contractual <span className="text-orange-500">security.</span>
          </>
        }
        body="These terms govern use of the DOED website. Engagements for engineering services are covered by a separate written agreement."
      />
      <LegalSections
        sections={[
          {
            heading: "Using this website",
            content: (
              <p>
                The site is provided to inform you about Win-Sourcing, our services, and how to contact us. Do not
                misuse the site, attempt unauthorized access, or interfere with its operation.
              </p>
            ),
          },
          {
            heading: "Services",
            content: (
              <p>
                Descriptions of Software Development &amp; AI, DevOps, Cloud &amp; Infrastructure, Cybersecurity, and
                IT Support are informational. Binding scope, rates, and SLAs are agreed in a contract with Dutch
                project leadership.
              </p>
            ),
          },
          {
            heading: "Intellectual property",
            content: (
              <p>
                DOED marks, copy, and site design are owned by DOED or used under licence. Third-party technology logos
                are trademarks of their respective owners and are shown only to identify tools we work with.
              </p>
            ),
          },
          {
            heading: "Liability",
            content: (
              <p>
                Website content is provided as-is. To the extent permitted by applicable law, DOED is not liable for
                indirect loss arising from use of the public website. Liability for paid services is defined in the
                relevant contract, including GDPR and ISO compliance obligations where agreed.
              </p>
            ),
          },
          {
            heading: "Governing framework",
            content: (
              <p>
                Discovery and framing are based in Amsterdam. We define the project parameters, legal framework, and
                security requirements to ensure full alignment with EU standards. Last updated: 16 August 2026.
                contact@doed.ma
              </p>
            ),
          },
        ]}
      />
      <CtaBanner />
    </>
  );
}
