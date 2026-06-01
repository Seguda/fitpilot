"use client";

import React, { useState } from "react";
import {
  SECTION_IDS,
  FAQ_ITEMS,
  WHY_DIY_COMPARISON,
  TESTIMONIALS_EARLY,
} from "./constants";
import { scrollToSection } from "./utils";
import { styles } from "./ui/styles";
import { HeroCollage } from "./ui/HeroCollage";
import { InterestCard } from "./ui/InterestCard";
import { VisualPanel } from "./ui/VisualPanel";
import { SplitBlock } from "./ui/VisualPanel";
import {
  GrowthDashboardMockup,
  GrowthTrackPills,
} from "./ui/GrowthDashboard";
import { InsightReportMockup } from "./ui/InsightReportMockup";
import { ProcessTimeline } from "./ui/ProcessTimeline";
import {
  EXPLORE_INTERESTS,
  HOW_IT_WORKS_STEPS,
  BENEFITS,
  STORY_IMAGES,
  storySrc,
} from "./visuals";

export function HeroSection() {
  return (
    <section
      id={SECTION_IDS.HERO}
      className="scroll-mt-28 pb-12 pt-6 sm:pb-16 sm:pt-10 lg:pb-24 lg:pt-14"
      aria-labelledby="hero-heading"
    >
      <div className="grid items-center gap-14 sm:gap-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-20 xl:gap-24">
        <div className="order-2 flex flex-col justify-center space-y-10 lg:order-1 lg:space-y-12 lg:pr-4 xl:pr-8">
          <div className="space-y-6 lg:space-y-8">
            <h1
              id="hero-heading"
              className="text-balance text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08] xl:text-6xl xl:leading-[1.05]"
            >
              Discover What Your Child Truly Enjoys
            </h1>
            <p className="max-w-md text-pretty text-lg text-stone-600 sm:text-xl">
              Guided discovery for ages 5–12.
            </p>
          </div>
          <div className="space-y-5">
            <button
              type="button"
              onClick={() => scrollToSection(SECTION_IDS.LEAD)}
              className={styles.btnPrimaryLg}
            >
              Start Discovery Journey
            </button>
            <p className="text-sm font-medium tracking-wide text-stone-500">
              Pilot · Natick &amp; MetroWest
            </p>
          </div>
        </div>
        <div className="order-1 lg:order-2 lg:pl-2">
          <HeroCollage />
        </div>
      </div>
    </section>
  );
}

export function ProblemSection() {
  const moments = [
    "Great class. Wrong fit?",
    "Vague praise isn’t a plan.",
    "Trial and error adds up.",
  ];

  return (
    <SplitBlock
      id={SECTION_IDS.PROBLEM}
      title="Most parents guess"
      imageSrc={storySrc("parentUncertainty", 1200)}
      imageAlt={STORY_IMAGES.parentUncertainty.alt}
      imageFirst
    >
      <ul className="space-y-4 pt-2">
        {moments.map((line) => (
          <li
            key={line}
            className="flex gap-3 text-base text-stone-700"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </SplitBlock>
  );
}

export function ExploreInterestsSection() {
  return (
    <section
      id={SECTION_IDS.EXPLORE}
      className="scroll-mt-28 py-16 sm:py-20 lg:py-28"
      aria-labelledby="explore-interests-heading"
    >
      <h2
        id="explore-interests-heading"
        className="text-balance text-center text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl"
      >
        Explore Different Interests
      </h2>
      <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-14 lg:grid-cols-4 lg:grid-rows-2 lg:gap-5">
        {EXPLORE_INTERESTS.map((item) => (
          <InterestCard
            key={item.id}
            label={item.label}
            src={item.src}
            alt={item.alt}
            gridClass={item.gridClass}
          />
        ))}
      </ul>
    </section>
  );
}

export function WhyNotDIYSection() {
  return (
    <section
      id={SECTION_IDS.WHY_DIY}
      className="scroll-mt-28 py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
          Trials yes. Guesswork no.
        </h2>
      </div>
      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        <div className="rounded-[1.75rem] bg-white p-7 ring-1 ring-stone-200/80 sm:p-8">
          <p className="text-sm font-medium text-stone-500">
            {WHY_DIY_COMPARISON.left.title}
          </p>
          <ul className="mt-5 space-y-3 text-stone-700">
            {WHY_DIY_COMPARISON.left.items.map((item) => (
              <li key={item.text} className="text-base">
                {item.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[1.75rem] bg-emerald-50/80 p-7 ring-1 ring-emerald-100 sm:p-8">
          <p className="text-sm font-medium text-emerald-800">
            {WHY_DIY_COMPARISON.right.title}
          </p>
          <ul className="mt-5 space-y-3 text-stone-800">
            {WHY_DIY_COMPARISON.right.items.map((item) => (
              <li key={item.text} className="text-base font-medium">
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function SolutionSection() {
  return (
    <section
      id={SECTION_IDS.SOLUTION}
      className="scroll-mt-28 py-16 sm:py-20 lg:py-28"
      aria-labelledby="solution-heading"
    >
      <h2
        id="solution-heading"
        className="text-balance text-center text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl"
      >
        How FitPilot Works
      </h2>
      <ProcessTimeline steps={HOW_IT_WORKS_STEPS} />
    </section>
  );
}

export function WhatYouGetSection() {
  return (
    <section
      id={SECTION_IDS.BENEFITS}
      className="scroll-mt-28 overflow-hidden rounded-[2rem] bg-stone-900 py-16 text-white sm:py-20 lg:py-24"
      aria-labelledby="benefits-heading"
    >
      <div className="grid items-center gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-12">
        <div>
          <h2
            id="benefits-heading"
            className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Clarity, not noise
          </h2>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {BENEFITS.map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base font-medium backdrop-blur-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function SampleReportSection() {
  return (
    <section
      id={SECTION_IDS.REPORT}
      className="scroll-mt-28 py-16 sm:py-20 lg:py-28"
      aria-labelledby="report-heading"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <InsightReportMockup />
        <div className="space-y-6">
          <h2
            id="report-heading"
            className="text-balance text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl"
          >
            Your child&apos;s insight report
          </h2>
          <p className="max-w-md text-base text-stone-600">
            Strengths, patterns, and a clear recommendation — in one place.
          </p>
          <button
            type="button"
            onClick={() => scrollToSection(SECTION_IDS.LEAD)}
            className={styles.btnPrimary}
          >
            Start Discovery Journey
          </button>
        </div>
      </div>
    </section>
  );
}

export function GrowthTrackingSection() {
  return (
    <section
      id={SECTION_IDS.GROWTH}
      className="scroll-mt-28 py-16 sm:py-20 lg:py-28"
      aria-labelledby="growth-heading"
    >
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14 xl:gap-20">
        <div className="space-y-8 lg:sticky lg:top-28 lg:pt-4">
          <div>
            <h2
              id="growth-heading"
              className="text-balance text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
            >
              Watch Growth Over Time
            </h2>
            <GrowthTrackPills />
          </div>
          <VisualPanel
            src={storySrc("growthJourney", 1000)}
            alt={STORY_IMAGES.growthJourney.alt}
            overlay="warm"
            className="aspect-[4/3] w-full"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </div>
        <GrowthDashboardMockup />
      </div>
    </section>
  );
}

export function SocialProofSection() {
  return (
    <section
      id={SECTION_IDS.SOCIAL_PROOF}
      className="scroll-mt-28 py-16 sm:py-20"
      aria-labelledby="social-heading"
    >
      <h2
        id="social-heading"
        className="max-w-xl text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl"
      >
        Natick &amp; MetroWest
      </h2>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {TESTIMONIALS_EARLY.slice(0, 3).map((t) => (
          <figure
            key={t.id}
            className="rounded-[1.5rem] bg-white p-6 ring-1 ring-stone-200/80 sm:p-7"
          >
            <blockquote className="text-base leading-relaxed text-stone-800">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-sm font-medium text-stone-500">
              {t.attribution}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function PricingSection() {
  return (
    <section
      id={SECTION_IDS.PRICING}
      className="scroll-mt-28 py-16 sm:py-20 lg:py-28"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-lg text-center">
        <h2
          id="pricing-heading"
          className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl"
        >
          $99 per cycle
        </h2>
        <p className="mt-2 text-sm text-stone-500">
          vs. $200–$500 guessing
        </p>
      </div>
      <div className="mx-auto mt-10 max-w-md rounded-[2rem] bg-white p-8 text-center shadow-sm ring-1 ring-stone-200/80 sm:p-10">
        <p className="text-5xl font-semibold tracking-tight text-stone-900">
          $99
        </p>
        <p className="mt-1 text-sm text-stone-500">per child</p>
        <ul className="mt-6 space-y-2 text-left text-sm text-stone-700">
          <li>3 guided trials</li>
          <li>Clear feedback</li>
          <li>Recommendation report</li>
        </ul>
        <button
          type="button"
          onClick={() => scrollToSection(SECTION_IDS.LEAD)}
          className={`mt-8 w-full ${styles.btnPrimary}`}
        >
          Start Discovery Journey
        </button>
        <p className="mt-3 text-xs text-stone-500">
          Limited pilot · No commitment
        </p>
      </div>
    </section>
  );
}

export function StudioPartnerSection() {
  return (
    <section
      id={SECTION_IDS.STUDIOS}
      className="scroll-mt-28 rounded-[2rem] bg-stone-100 px-8 py-14 sm:px-12 sm:py-16"
    >
      <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-lg">
          <h2 className="text-2xl font-semibold text-stone-900 sm:text-3xl">
            For studios
          </h2>
          <p className="mt-2 text-sm text-stone-600">
            Better trials. Zero extra systems.
          </p>
        </div>
        <button
          type="button"
          onClick={() => scrollToSection(SECTION_IDS.LEAD)}
          className={styles.btnDark}
        >
          For Studios
        </button>
      </div>
    </section>
  );
}

export function LocalTrustSection() {
  return (
    <section
      id={SECTION_IDS.LOCAL}
      className="scroll-mt-28 py-16 sm:py-20"
    >
      <div className="rounded-[2rem] bg-gradient-to-br from-emerald-50/80 via-white to-stone-50 px-8 py-14 text-center ring-1 ring-stone-200/80 sm:px-12 sm:py-16">
        <h2 className="text-balance text-3xl font-semibold text-stone-900 sm:text-4xl">
          Natick &amp; MetroWest
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-stone-600">
          Small cohort. Real attention.
        </p>
      </div>
    </section>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id={SECTION_IDS.FAQ}
      className="scroll-mt-28 py-16 sm:py-20"
      aria-labelledby="faq-heading"
    >
      <h2
        id="faq-heading"
        className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl"
      >
        Questions
      </h2>
      <div className="mt-10 max-w-2xl space-y-3">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={item.q}
              className="overflow-hidden rounded-2xl bg-white ring-1 ring-stone-200/80"
            >
              <button
                type="button"
                onClick={() =>
                  setOpenIndex((c) => (c === index ? null : index))
                }
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={isOpen}
                aria-controls={`faq-${index}`}
              >
                <span className="font-medium text-stone-900">{item.q}</span>
                <span className="text-stone-400" aria-hidden>
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              <div
                id={`faq-${index}`}
                className={`px-6 text-stone-600 transition-all ${
                  isOpen ? "max-h-48 pb-5 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm leading-relaxed">{item.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
