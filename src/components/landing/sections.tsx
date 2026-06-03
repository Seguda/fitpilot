"use client";

import React, { useState } from "react";
import { SECTION_IDS, FAQ_ITEMS } from "./constants";
import { scrollToSection } from "./utils";
import { styles } from "./ui/styles";
import { BrandVisual } from "./ui/BrandVisual";
import { cardSurface, sectionShell } from "./ui/imageStyles";
import { LeadForm } from "./LeadForm";
import {
  BRAND_IMAGES,
  HOW_IT_WORKS_STEPS,
  INSIGHT_HIGHLIGHTS,
  SAMPLE_INSIGHT_SUMMARY,
  GROWTH_FEATURES,
  WHY_PARENTS_CARDS,
} from "./visuals";

const heading =
  "text-balance text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]";

const sub = "text-lg leading-relaxed text-stone-600 sm:text-xl";

export function HeroSection() {
  return (
    <section
      id={SECTION_IDS.HERO}
      className={`${sectionShell} pb-16 pt-8 sm:pt-12 lg:pb-28`}
      aria-labelledby="hero-heading"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:items-start lg:gap-16 xl:gap-20">
        <div className="flex flex-col justify-center space-y-10 lg:space-y-12">
          <div className="space-y-6">
            <h1 id="hero-heading" className={heading}>
              Discover What Your Child Truly Enjoys
            </h1>
            <p className={`max-w-lg ${sub}`}>
              FitPilot helps families uncover interests, recognize strengths,
              and support growth through meaningful experiences and insights.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => scrollToSection(SECTION_IDS.LEAD)}
              className={styles.btnPrimaryLg}
            >
              Start Discovery Journey
            </button>
            <button
              type="button"
              onClick={() => scrollToSection(SECTION_IDS.REPORT)}
              className={styles.btnSecondaryLg}
            >
              See Sample Report
            </button>
          </div>
          <p className="text-sm font-medium text-stone-500">
            Pilot launching in Natick &amp; MetroWest
          </p>
        </div>
        <BrandVisual
          variant="hero"
          src={BRAND_IMAGES.discoveryCollage.src}
          alt={BRAND_IMAGES.discoveryCollage.alt}
          width={BRAND_IMAGES.discoveryCollage.width}
          height={BRAND_IMAGES.discoveryCollage.height}
          priority
          sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 640px"
          className="mx-auto w-full"
        />
      </div>
    </section>
  );
}

export function ProblemSection() {
  return (
    <section
      id={SECTION_IDS.PROBLEM}
      className={sectionShell}
      aria-labelledby="problem-heading"
    >
      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <div className="lg:order-1">
          <BrandVisual
            src={BRAND_IMAGES.parentConversation.src}
            alt={BRAND_IMAGES.parentConversation.alt}
            className="aspect-[4/3] w-full"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="space-y-6 lg:order-2">
          <h2 id="problem-heading" className={heading}>
            Most Parents Are Making Their Best Guess
          </h2>
          <div className="space-y-4 text-stone-600">
            <p className={sub}>
              A few classes. A quick comment from an instructor. A feeling that
              it might be the right fit.
            </p>
            <p className={sub}>
              But how do you really know what your child enjoys, where they
              thrive, and whether they&apos;re growing?
            </p>
            <p className="text-lg font-medium text-stone-800">
              FitPilot helps turn experiences into meaningful insight.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SolutionSection() {
  return (
    <section
      id={SECTION_IDS.SOLUTION}
      className={sectionShell}
      aria-labelledby="solution-heading"
    >
      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <div className="space-y-8">
          <h2 id="solution-heading" className={heading}>
            A Smarter Way To Understand Your Child
          </h2>
          <ol className="space-y-8">
            {HOW_IT_WORKS_STEPS.map((step, index) => (
              <li key={step.id} className="flex gap-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-sm font-semibold text-emerald-800 ring-1 ring-emerald-100">
                  {index + 1}
                </span>
                <div className="space-y-1 pt-0.5">
                  <p className="text-xl font-semibold text-stone-900">
                    {step.title}
                  </p>
                  <p className="text-base text-stone-600">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <BrandVisual
          src={BRAND_IMAGES.insightProcess.src}
          alt={BRAND_IMAGES.insightProcess.alt}
          variant="product"
          className="aspect-[4/3] w-full lg:min-h-[400px]"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </section>
  );
}

export function InsightReportSection() {
  return (
    <section
      id={SECTION_IDS.REPORT}
      className={sectionShell}
      aria-labelledby="report-heading"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 id="report-heading" className={heading}>
          From Activities To Insight
        </h2>
        <p className={`mx-auto mt-6 max-w-2xl ${sub}`}>
          Instead of relying on guesswork, receive a clear picture of your
          child&apos;s interests, strengths, and potential growth areas.
        </p>
      </div>

      <ul className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-2 lg:mt-14">
        {INSIGHT_HIGHLIGHTS.map((label) => (
          <li
            key={label}
            className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800 ring-1 ring-emerald-100"
          >
            {label}
          </li>
        ))}
      </ul>

      <div className={`mx-auto mt-10 max-w-xl ${cardSurface} p-8 sm:p-10 lg:mt-12`}>
        <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
          {SAMPLE_INSIGHT_SUMMARY.title}
        </p>
        <div className="mt-6 space-y-6 text-left text-sm text-stone-700">
          <div>
            <p className="font-semibold text-stone-900">Strong Interest Areas</p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-stone-600">
              {SAMPLE_INSIGHT_SUMMARY.strongInterests.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-stone-900">Emerging Strengths</p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-stone-600">
              {SAMPLE_INSIGHT_SUMMARY.emergingStrengths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-stone-900">Suggested Next Step</p>
            <p className="mt-2 text-stone-600">
              {SAMPLE_INSIGHT_SUMMARY.suggestedNextStep}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function GrowthTrackingSection() {
  return (
    <section
      id={SECTION_IDS.GROWTH}
      className={sectionShell}
      aria-labelledby="growth-heading"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 id="growth-heading" className={heading}>
          Watch Their Interests Grow Over Time
        </h2>
        <div className={`mt-6 space-y-4 ${sub}`}>
          <p>Children change. Interests evolve. Confidence develops.</p>
          <p>
            FitPilot helps parents follow the journey, not just the starting
            point.
          </p>
        </div>
        <ul className="mt-8 flex flex-wrap justify-center gap-2">
          {GROWTH_FEATURES.map((item) => (
            <li
              key={item}
              className="rounded-full bg-stone-100 px-4 py-2 text-sm font-medium text-stone-700"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto mt-14 max-w-5xl lg:mt-16">
        <div className={`${cardSurface} overflow-hidden p-6 sm:p-8`}>
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-xl font-semibold text-stone-900 sm:text-2xl">
              FitPilot Growth Tracking
            </h3>
            <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-800 ring-1 ring-amber-200/80">
              Coming Soon
            </span>
          </div>
          <p className="max-w-2xl text-base text-stone-600">
            Monthly insights helping families understand confidence growth,
            engagement patterns, evolving interests, and developmental trends.
          </p>
          <div className="mt-8">
            <BrandVisual
              src={BRAND_IMAGES.growthDashboard.src}
              alt={BRAND_IMAGES.growthDashboard.alt}
              variant="product"
              className="aspect-[16/10] w-full sm:aspect-[2/1]"
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyParentsSection() {
  return (
    <section
      id={SECTION_IDS.WHY_PARENTS}
      className={sectionShell}
      aria-labelledby="why-parents-heading"
    >
      <h2
        id="why-parents-heading"
        className={`mx-auto max-w-2xl text-center ${heading}`}
      >
        Why Parents Love FitPilot
      </h2>
      <ul className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-3 lg:mt-16">
        {WHY_PARENTS_CARDS.map((card) => (
          <li key={card.id} className={`${cardSurface} p-8 text-center`}>
            <p className="text-xl font-semibold text-stone-900">{card.title}</p>
            <p className="mt-3 text-base leading-relaxed text-stone-600">
              {card.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function LeadCaptureSection() {
  return (
    <section
      id={SECTION_IDS.LEAD}
      className={`${sectionShell} border-t border-stone-200/60`}
      aria-labelledby="pilot-heading"
    >
      <div className="mx-auto max-w-xl text-center">
        <h2 id="pilot-heading" className={heading}>
          Join the Pilot
        </h2>
        <p className={`mt-6 ${sub}`}>
          We&apos;re currently working with a small group of families in Natick
          &amp; MetroWest.
        </p>
      </div>
      <LeadForm />
    </section>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id={SECTION_IDS.FAQ}
      className="scroll-mt-28 border-t border-stone-200/80 py-16 sm:py-20"
      aria-labelledby="faq-heading"
    >
      <h2 id="faq-heading" className="text-2xl font-semibold text-stone-900">
        Questions
      </h2>
      <div className="mt-8 max-w-2xl space-y-3">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.q} className={`${cardSurface} overflow-hidden`}>
              <button
                type="button"
                onClick={() =>
                  setOpenIndex((c) => (c === index ? null : index))
                }
                className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-medium text-stone-900">{item.q}</span>
                <span className="text-stone-400" aria-hidden>
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen ? (
                <p className="px-6 pb-4 text-sm text-stone-600">{item.a}</p>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
