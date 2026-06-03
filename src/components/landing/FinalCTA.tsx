"use client";

import { SECTION_IDS } from "./constants";
import { scrollToSection } from "./utils";
import { cardSurface } from "./ui/imageStyles";

export function FinalCTA() {
  return (
    <section
      id="cta"
      className="scroll-mt-28 pb-24 pt-12 sm:pb-32 sm:pt-16"
      aria-labelledby="final-cta-heading"
    >
      <div
        className={`${cardSurface} bg-gradient-to-br from-stone-900 via-stone-900 to-emerald-950 px-8 py-20 text-center text-white sm:px-12 sm:py-24 lg:px-16 lg:py-28`}
      >
        <h2
          id="final-cta-heading"
          className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl lg:leading-[1.08]"
        >
          Help Your Child Discover What Lights Them Up
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-lg text-white/80">
          Start with discovery. Continue with confidence.
        </p>
        <button
          type="button"
          onClick={() => scrollToSection(SECTION_IDS.LEAD)}
          className="mt-10 min-h-[52px] rounded-full bg-white px-10 py-3.5 text-base font-semibold text-stone-900 shadow-lg transition hover:bg-stone-50"
        >
          Start Discovery Journey
        </button>
      </div>
    </section>
  );
}
