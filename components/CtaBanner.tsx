import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";

export function CtaBanner({
  title = "Ready to Scale with Certainty?",
  body = "Experience the power of the Win-Sourcing model. Let's build your next-generation infrastructure together.",
  primaryHref = "/expertise",
  primaryLabel = "Explore Our Expertise",
  secondaryHref = "/contact",
  secondaryLabel = "Book a Consultation",
}: {
  title?: string;
  body?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="py-10 md:py-16">
      <div className="page-wrap">
        <Reveal from="top">
          <div className="rounded-card bg-orange-500 px-5 py-10 text-center sm:px-6 md:py-16">
            <h2 className="text-2xl font-bold text-white md:text-[34px] !text-white">{title}</h2>
            <p className="mx-auto mt-4 max-w-[640px] text-base leading-relaxed text-white">{body}</p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <Button href={primaryHref} variant="primary-invert" className="w-full sm:w-auto">
                {primaryLabel}
              </Button>
              <Button href={secondaryHref} variant="outline-invert" className="w-full sm:w-auto">
                {secondaryLabel}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
