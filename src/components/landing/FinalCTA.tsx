"use client";

import React from "react";
import { SECTION_IDS } from "./constants";
import { scrollToSection } from "./utils";
import { styles } from "./ui/styles";

export function FinalCTA() {
  return (
    <section
      id="cta"
      className="scroll-mt-24 rounded-3xl border border-neutral-200 bg-white px-6 py-10 text-center shadow-sm sm:px-10 sm:py-12"
      aria-labelledby="final-cta-heading"
    >
      <h2
        id="final-cta-heading"
        className="text-balance text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl"
      >
        Choose with clarity.
      </h2>
      <p className="mt-3 text-sm text-neutral-600 sm:text-base">
        FitPilot is a decision system: structured trial feedback in, clear
        recommendation out.
      </p>
      <p className="mt-2 text-xs text-neutral-500">
        We respond within 1–2 business days.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
        <button
          type="button"
          onClick={() => scrollToSection(SECTION_IDS.LEAD)}
          className={styles.btnPrimaryLg}
          aria-label="Start your child's plan – go to the form"
        >
          Start Your Child&apos;s Plan
        </button>
        <button
          type="button"
          onClick={() => scrollToSection(SECTION_IDS.LEAD)}
          className={styles.btnSecondaryLg}
          aria-label="For studios – go to the form"
        >
          For Studios
        </button>
      </div>
      <p className="mt-4 text-[11px] text-neutral-500">
        Takes less than 1 minute • No commitment required
      </p>
    </section>
  );
}
