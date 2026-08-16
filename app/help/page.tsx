import { CtaBanner } from "@/components/CtaBanner";
import { PageIntro } from "@/components/PageIntro";
import { Reveal } from "@/components/Reveal";

const faqs = [
  {
    q: "What is Win-Sourcing?",
    a: "We don't believe in traditional outsourcing. We practice Win-Sourcing: a model where both parties win through synergy.",
  },
  {
    q: "How is the team structured?",
    a: "Behind this local governance stands a team of over 20 highly qualified IT engineers in Morocco. This hybrid structure allows us to scale rapidly without compromising on quality or communication.",
  },
  {
    q: "Where is project leadership based?",
    a: "Throughout your project, you will have one dedicated contact person in the Netherlands acting as your project manager and quality assurance lead.",
  },
  {
    q: "How do you collaborate?",
    a: "From the first meeting to the final result. Assembly of the optimal solution and selection of the right Expert Squad.",
  },
  {
    q: "What about compliance?",
    a: "GDPR & ISO Compliance. Local Dutch leadership handles the heavy lifting of project management, compliance, and strategic alignment with your business goals.",
  },
];

export default function HelpPage() {
  return (
    <>
      <PageIntro
        badge="HELP CENTER"
        title={
          <>
            Continuity is <span className="text-orange-500">key.</span>
          </>
        }
        body="At DOED, continuity is key. Find answers about Win-Sourcing, governance, and how we work."
      />

      <section className="section-y">
        <div className="page-wrap-narrow space-y-4">
          {faqs.map((item, index) => (
            <Reveal key={item.q} from="top" delay={index * 0.08}>
              <article className="card-interactive rounded-card border border-navy-900/10 bg-white p-5 sm:p-8">
                <h2 className="text-[21px] font-bold text-navy-text">{item.q}</h2>
                <p className="mt-3 text-base leading-relaxed text-gray-body">{item.a}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
