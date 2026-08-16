import { CtaBanner } from "@/components/CtaBanner";
import { LegalSections } from "@/components/LegalSections";
import { PageIntro } from "@/components/PageIntro";

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        badge="PRIVACY & POLICY"
        title={
          <>
            How we protect <span className="text-orange-500">your data.</span>
          </>
        }
        body="DOED processes personal data in line with GDPR and contractual security requirements defined with Dutch project leadership."
      />
      <LegalSections
        sections={[
          {
            heading: "Who we are",
            content: (
              <>
                <p>
                  This notice applies to DOED (&quot;we&quot;, &quot;us&quot;). You can reach us at contact@doed.ma.
                  Our operations combine Dutch project leadership with engineering capacity in Morocco.
                </p>
                <p>Last updated: 16 August 2026.</p>
              </>
            ),
          },
          {
            heading: "Data we collect",
            content: (
              <p>
                When you use the website or book a consultation, we may collect your name, email address, company
                name, and the content of your message. We also collect technical data that your browser sends, such as
                IP address and device information, as needed to operate the site securely.
              </p>
            ),
          },
          {
            heading: "Why we use personal data",
            content: (
              <p>
                We use this information to respond to enquiries, deliver IT services under contract, maintain GDPR and
                ISO compliance, and keep the website secure. We do not sell personal data.
              </p>
            ),
          },
          {
            heading: "Sharing",
            content: (
              <p>
                Project delivery may involve Dutch leads and Moroccan engineers in a unified squad. We share personal
                data only with processors and team members who need it to perform the services, under contractual
                security.
              </p>
            ),
          },
          {
            heading: "Retention and rights",
            content: (
              <p>
                We keep data only as long as needed for the purpose collected or as required by law. Depending on
                applicable EU law, you may request access, correction, deletion, restriction, or portability, and you
                may object to certain processing. Contact contact@doed.ma. You may also lodge a complaint with a
                supervisory authority.
              </p>
            ),
          },
          {
            heading: "Contact",
            content: (
              <p>
                Netherlands · +34 (690) 000-000 · contact@doed.ma. See also our Cookie Policy and Terms &amp;
                Conditions.
              </p>
            ),
          },
        ]}
      />
      <CtaBanner />
    </>
  );
}
