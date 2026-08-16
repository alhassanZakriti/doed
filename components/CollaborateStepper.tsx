"use client";

import { useEffect, useState } from "react";

export type CollaborateStep = {
  n: number;
  title: string;
  caption?: string;
};

const STEP_MS = 4000;

export function CollaborateStepper({ steps }: { steps: CollaborateStep[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % steps.length);
    }, STEP_MS);

    return () => window.clearInterval(id);
  }, [activeIndex, steps.length]);

  return (
    <ol className="relative mt-10 flex flex-col gap-6 overflow-visible px-2 md:mt-14 md:flex-row md:items-start md:justify-between md:gap-3 md:pt-10 md:pb-4">
      <span
        className="absolute bottom-6 left-8 top-6 w-px bg-navy-900/15 md:hidden"
        aria-hidden="true"
      />
      <span className="absolute left-10 right-10 top-[4rem] hidden h-px bg-navy-900/15 md:block" aria-hidden="true" />
      {steps.map((step, index) => {
        const isActive = index === activeIndex;

        return (
          <li
            key={step.n}
            className="relative z-10 flex w-full min-w-0 items-start md:flex-1 md:flex-col md:items-center md:text-center"
          >
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-pressed={isActive}
              aria-current={isActive ? "step" : undefined}
              className="flex w-full items-start gap-4 text-left md:flex-col md:items-center md:text-center"
            >
              <span className={`relative flex h-12 w-12 shrink-0 items-center justify-center overflow-visible ${isActive ? "" : "is-paused"}`}>
                <span className="pulse-ring pulse-ring-orange" />
                <span className="pulse-ring pulse-ring-orange" />
                <span className="pulse-ring pulse-ring-orange" />
                <span
                  className={`relative z-1 flex h-12 w-12 items-center justify-center rounded-full text-white transition-colors duration-500 ease-out ${
                    isActive ? "bg-orange-500 text-lg font-extrabold" : "bg-navy-900 text-base font-bold"
                  }`}
                >
                  {step.n}
                </span>
              </span>
              <span
                className={`mt-0 flex min-h-0 w-full max-w-none flex-col items-start md:mt-3 md:min-h-[6.5rem] md:max-w-[200px] md:items-center ${
                  isActive ? "flex" : "hidden md:flex"
                }`}
              >
                <span
                  className={`text-base font-[800] uppercase tracking-wide text-navy-text transition-all duration-500 ease-out md:text-lg ${
                    isActive ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-1 opacity-10"
                  }`}
                >
                  {step.title}
                </span>
                {step.caption ? (
                  <span
                    className={`mt-2 text-sm text-gray-body transition-all duration-500 ease-out ${
                      isActive ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-1 opacity-10"
                    }`}
                  >
                    {step.caption}
                  </span>
                ) : null}
              </span>
            </button>
          </li>
        );
      })}
    </ol>
  );
}
