"use client";

import React, { useState } from "react";
import { SECTION_IDS, FAQ_ITEMS } from "./constants";
import { scrollToSection } from "./utils";
import { styles } from "./ui/styles";
import { BrandVisual } from "./ui/BrandVisual";
import { cardSurface, sectionShell } from "./ui/imageStyles";
import { LeadForm } from "./LeadForm";
import { InsightReportMockup } from "./ui/InsightReportMockup";
import { HowItWorksSteps } from "./ui/HowItWorksSteps";
import { InsightCreationFlow } from "./ui/InsightCreationFlow";
import { DeliverableIcon } from "./ui/DeliverableIcon";
import {
  BRAND_IMAGES,
  HOW_IT_WORKS_SECTION,
  WHAT_YOU_RECEIVE,
  WHAT_YOU_RECEIVE_SUBTITLE,
  REPORT_SECTION,
  DIFFERENTIATION_SECTION,
  DIFFERENTIATION_CARDS,
  FOUNDER_NOTE,
  PILOT_SECTION,
  TAGLINE,
  HERO_TRUST_LINE,
  PRIMARY_CTA,
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
              Discover Your Child&apos;s Strengths, Interests, and Potential
            </h1>
            <p className={`max-w-lg ${sub}`}>{TAGLINE}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => scrollToSection(SECTION_IDS.LEAD)}
              className={styles.btnPrimaryLg}
            >
              {PRIMARY_CTA}
            </button>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-stone-500">
            {HERO_TRUST_LINE}
          </p>
          <p className="text-sm font-medium text-stone-500">
            Natick &amp; MetroWest · Ages 5–12
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
          <div className="space-y-5 text-stone-600">
            <p className={sub}>
              A quick comment from a coach. A good day or a hard one. A child
              who seems excited one week and unsure the next.
            </p>
            <div className="space-y-2">
              <p className={sub}>
                Most parents are left wondering:
              </p>
              <p className="text-lg font-medium text-stone-800">
                Is this the right path, or just a passing phase?
              </p>
            </div>
            <p className="text-lg font-medium text-stone-800">
              FitPilot helps turn those moments into clearer insight.
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
      className={`${sectionShell} bg-gradient-to-b from-emerald-50/40 via-[#fafaf9] to-[#fafaf9]`}
      aria-labelledby="solution-heading"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 id="solution-heading" className={heading}>
          {HOW_IT_WORKS_SECTION.title}
        </h2>
        <p className={`mx-auto mt-6 max-w-2xl ${sub}`}>
          {HOW_IT_WORKS_SECTION.subtitle}
        </p>
      </div>
      <HowItWorksSteps />
    </section>
  );
}

export function WhatYouReceiveSection() {
  return (
    <section
      id={SECTION_IDS.DELIVERABLES}
      className={sectionShell}
      aria-labelledby="deliverables-heading"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 id="deliverables-heading" className={heading}>
          What You&apos;ll Receive
        </h2>
        <p className={`mx-auto mt-6 max-w-2xl ${sub}`}>
          {WHAT_YOU_RECEIVE_SUBTITLE}
        </p>
      </div>
      <ul className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
        {WHAT_YOU_RECEIVE.map((item) => (
          <li
            key={item.id}
            className={`${cardSurface} flex flex-col gap-4 p-6`}
          >
            <DeliverableIcon name={item.icon} />
            <div>
              <p className="font-semibold text-stone-900">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function InsightReportSection() {
  return (
    <section
      id={SECTION_IDS.REPORT}
      className={`${sectionShell} bg-gradient-to-b from-white via-stone-50/50 to-[#fafaf9]`}
      aria-labelledby="report-heading"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className={styles.eyebrow}>Sample Report</p>
        <h2 id="report-heading" className={`mt-4 ${heading}`}>
          {REPORT_SECTION.title}
        </h2>
        <p className={`mx-auto mt-6 max-w-2xl ${sub}`}>
          {REPORT_SECTION.subtitle}
        </p>
      </div>

      <InsightCreationFlow />

      <div className="mx-auto mt-12 max-w-5xl lg:mt-14">
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
          {REPORT_SECTION.exampleLabel}
        </p>
        <div className="rounded-[2rem] bg-gradient-to-b from-emerald-50/80 to-transparent p-3 sm:p-4">
          <InsightReportMockup />
        </div>
      </div>
    </section>
  );
}

export function WhyParentsSection() {
  return (
    <section
      id={SECTION_IDS.WHY_PARENTS}
      className={`${sectionShell} bg-stone-100/60`}
      aria-labelledby="differentiation-heading"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2
          id="differentiation-heading"
          className={heading}
        >
          {DIFFERENTIATION_SECTION.title}
        </h2>
        <div className={`mx-auto mt-6 max-w-2xl space-y-4 ${sub}`}>
          <p>{DIFFERENTIATION_SECTION.lead}</p>
          <p>{DIFFERENTIATION_SECTION.subtitle}</p>
        </div>
      </div>
      <ul className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-3 lg:mt-14">
        {DIFFERENTIATION_CARDS.map((card) => (
          <li
            key={card.id}
            className="flex flex-col rounded-3xl bg-stone-900 p-7 shadow-[0_16px_40px_-12px_rgba(28,25,23,0.35)] ring-1 ring-stone-800 sm:p-8"
          >
            <p className="text-lg font-semibold text-emerald-400">
              {card.headline}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-stone-300 sm:text-base">
              {card.body}
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
      <div className="mx-auto max-w-3xl text-center">
        <p className={styles.eyebrow}>Early access · Natick &amp; MetroWest</p>
        <h2 id="pilot-heading" className={`mt-4 ${heading}`}>
          {PILOT_SECTION.title}
        </h2>
        <p className={`mx-auto mt-6 max-w-2xl ${sub}`}>
          {PILOT_SECTION.subtitle}
        </p>
        <p className="mx-auto mt-4 max-w-xl text-sm text-stone-500">
          {PILOT_SECTION.urgency}
        </p>
      </div>
      <LeadForm />
    </section>
  );
}

export function FounderNoteSection() {
  return (
    <section
      className="scroll-mt-28 py-8 sm:py-10"
      aria-labelledby="founder-note-heading"
    >
      <div className="mx-auto max-w-2xl">
        <div className="flex gap-5 rounded-2xl bg-emerald-50/80 p-6 ring-1 ring-emerald-100/80 sm:gap-6 sm:p-8">
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-emerald-800 shadow-sm ring-1 ring-emerald-100"
            aria-hidden
          >
            FP
          </div>
          <div>
            <h2
              id="founder-note-heading"
              className="text-base font-semibold text-stone-900 sm:text-lg"
            >
              {FOUNDER_NOTE.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-stone-600 sm:text-base">
              {FOUNDER_NOTE.copy}
            </p>
          </div>
        </div>
      </div>
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
        Questions Parents Ask
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
