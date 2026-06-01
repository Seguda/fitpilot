"use client";

import Image from "next/image";
import { SECTION_IDS } from "./constants";
import { scrollToSection } from "./utils";
import { storySrc, STORY_IMAGES } from "./visuals";
import { imageFrame, imageInsetRing } from "./ui/imageStyles";

export function FinalCTA() {
  return (
    <section
      id="cta"
      className="scroll-mt-24 pb-20 pt-8 sm:pb-28"
      aria-labelledby="final-cta-heading"
    >
      <div
        className={`relative min-h-[420px] overflow-hidden sm:min-h-[480px] lg:min-h-[560px] ${imageFrame} shadow-[0_32px_64px_-24px_rgba(28,25,23,0.2)] sm:rounded-[2rem] lg:rounded-[2.25rem]`}
      >
        <Image
          src={storySrc("finalPossibility", 1400)}
          alt={STORY_IMAGES.finalPossibility.alt}
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />

        {/* Soft editorial gradient stack */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-stone-950/80 via-stone-950/50 to-emerald-950/40"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-stone-950/10"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(28,25,23,0.35)_100%)]"
          aria-hidden
        />
        <div className={imageInsetRing} aria-hidden />

        <div className="relative z-10 flex min-h-[420px] flex-col items-center justify-center px-6 py-20 text-center sm:min-h-[480px] sm:px-10 sm:py-24 lg:min-h-[560px] lg:px-16">
          <h2
            id="final-cta-heading"
            className="max-w-3xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.08]"
          >
            Help Your Child Discover What Lights Them Up
          </h2>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/85 sm:mt-6 sm:text-lg sm:leading-relaxed">
            Support their interests, confidence, and growth with guided
            discovery and meaningful insights.
          </p>
          <button
            type="button"
            onClick={() => scrollToSection(SECTION_IDS.LEAD)}
            className="mt-9 min-h-[52px] rounded-full bg-white px-10 py-3.5 text-base font-semibold text-stone-900 shadow-[0_12px_40px_-8px_rgba(0,0,0,0.35)] transition hover:bg-stone-50 hover:shadow-[0_16px_48px_-8px_rgba(0,0,0,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900 sm:mt-10"
          >
            Start Discovery Journey
          </button>
        </div>
      </div>
    </section>
  );
}
