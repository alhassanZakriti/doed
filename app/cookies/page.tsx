import { CtaBanner } from "@/components/CtaBanner";
import { LegalSections } from "@/components/LegalSections";
import { PageIntro } from "@/components/PageIntro";

export default function CookiesPage() {
  return (
    <>
      <PageIntro
        badge="COOKIE POLICY"
        title={
          <>
            Cookies we <span className="text-orange-500">use.</span>
          </>
        }
        body="This policy explains how the DOED website uses cookies and similar technologies."
      />
      <LegalSections
        sections={[
          {
            heading: "What cookies are",
            content: (
              <p>
                Cookies are small files stored on your device. They can be strictly necessary for the site to function
                or used to remember preferences.
              </p>
            ),
          },
          {
            heading: "What we use today",
            content: (
              <p>
                This website uses cookies that are necessary to deliver pages, maintain security, and remember basic
                session behaviour. We do not currently run advertising cookies. If analytics are added later, this
                policy will be updated first.
              </p>
            ),
          },
          {
            heading: "Your choices",
            content: (
              <p>
                You can block or delete cookies in your browser. Blocking necessary cookies may affect how the site
                works. For questions, email contact@doed.ma or see Privacy &amp; Policy.
              </p>
            ),
          },
          {
            heading: "Updates",
            content: <p>Last updated: 16 August 2026. Netherlands · +34 (690) 000-000 · contact@doed.ma</p>,
          },
        ]}
      />
      <CtaBanner />
    </>
  );
}
