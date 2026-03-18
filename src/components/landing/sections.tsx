"use client";

import React, { useState } from "react";
import {
  SECTION_IDS,
  FAQ_ITEMS,
  PROBLEM_CARDS,
  WHY_DIY_COMPARISON,
  TESTIMONIALS_EARLY,
} from "./constants";
import { scrollToSection } from "./utils";
import { Section } from "./ui/Section";
import { styles } from "./ui/styles";

function ComparisonIcon({ variant }: { variant: "minus" | "plus" }) {
  const common = "h-5 w-5 shrink-0";
  if (variant === "plus") {
    return (
      <svg
        viewBox="0 0 20 20"
        className={`${common} text-emerald-700`}
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 6a1 1 0 112 0v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 20 20"
      className={`${common} text-neutral-500`}
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10 2a8 8 0 100 16 8 8 0 000-16zM6 10a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section
      id={SECTION_IDS.HERO}
      className="scroll-mt-28 grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center"
      aria-labelledby="hero-heading"
    >
      <div className="space-y-5 sm:space-y-6">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <p className="font-semibold uppercase tracking-[0.18em] text-emerald-700">
            FOR PARENTS OF AGES 5–12
          </p>
          <span className="text-neutral-400">·</span>
          <p className="text-neutral-500">Pilot in Natick & MetroWest</p>
        </div>
        <h1 id="hero-heading" className="text-balance text-2xl font-semibold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
          Find the Right Activity — Without Guesswork
        </h1>
        <p className="max-w-xl text-sm leading-relaxed text-neutral-600 sm:text-base">
          FitPilot helps you test a few strong options, capture real feedback
          from instructors, and make a confident decision — without relying on
          vague trial impressions.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <button
            type="button"
            onClick={() => scrollToSection(SECTION_IDS.LEAD)}
            className={styles.btnPrimary}
            aria-label="Start your child's plan"
          >
            Start Your Child&apos;s Plan
          </button>
          <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto sm:gap-3">
            <button
              type="button"
              onClick={() => scrollToSection(SECTION_IDS.LEAD)}
              className={`${styles.btnSecondary} border-neutral-200 text-neutral-700`}
              aria-label="For studios"
            >
              For Studios
            </button>
            <button
              type="button"
              onClick={() => scrollToSection(SECTION_IDS.REPORT)}
              className="min-h-[44px] rounded-full px-4 py-2.5 text-sm font-medium text-emerald-700 underline-offset-4 hover:text-emerald-800 hover:underline sm:py-2"
            >
              See Sample Report
            </button>
          </div>
        </div>
        <p className="text-[11px] text-neutral-500">
          Takes less than 1 minute • No commitment required
        </p>
        <p className="text-[11px] text-neutral-500">
          We respond within 1–2 business days.
        </p>
        <p className="text-[11px] text-neutral-500">
          Limited pilot spots available in Natick &amp; MetroWest. We&apos;re
          starting with a small group of families to ensure a quality experience.
        </p>
        <p className="text-xs text-neutral-500">
          A decision system for choosing activities: structured inputs, comparable
          outputs, clear recommendation.
        </p>
      </div>
      <div className="space-y-4 rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
              Trial cycle overview
            </p>
            <p className="mt-1 text-sm text-neutral-800">
              3 activities · 1 recommendation
            </p>
          </div>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-700 ring-1 ring-emerald-100">
            Sample parent view
          </span>
        </div>
        <div className="mt-3 grid gap-3 text-xs sm:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <div className="space-y-2 rounded-2xl border border-neutral-200 bg-neutral-50 p-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
              Trials this week
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2 rounded-xl bg-white p-2.5">
                <div>
                  <p className="text-xs font-semibold text-neutral-900">
                    Parkour · Level 1
                  </p>
                  <p className="text-[11px] text-neutral-500">
                    High engagement · Coach: Maya
                  </p>
                </div>
                <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-700">
                  92
                </span>
              </div>
              <div className="flex items-center justify-between gap-2 rounded-xl bg-white p-2.5">
                <div>
                  <p className="text-xs font-semibold text-neutral-900">
                    Music · Small ensemble
                  </p>
                  <p className="text-[11px] text-neutral-500">
                    Building confidence · Coach: Aria
                  </p>
                </div>
                <span className="rounded-full bg-neutral-100 px-2 py-1 text-[10px] font-semibold text-neutral-600">
                  81
                </span>
              </div>
              <div className="flex items-center justify-between gap-2 rounded-xl bg-white p-2.5">
                <div>
                  <p className="text-xs font-semibold text-neutral-900">
                    Swimming · Fundamentals
                  </p>
                  <p className="text-[11px] text-neutral-500">
                    Solid starter · Coach: Jamal
                  </p>
                </div>
                <span className="rounded-full bg-neutral-100 px-2 py-1 text-[10px] font-semibold text-neutral-600">
                  76
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-2 rounded-2xl border border-emerald-100 bg-emerald-50 p-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-700">
              Recommendation report
            </p>
            <p className="text-xs font-medium text-neutral-900">
              We recommend starting with{" "}
              <span className="text-emerald-700">Parkour · Level 1</span> this
              season.
            </p>
            <p className="text-[11px] text-neutral-600">
              Leo showed the strongest combination of focus, joy, and progress
              potential here. Music and swimming remain strong second options.
            </p>
            <dl className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="rounded-xl border border-emerald-100 bg-white p-2.5">
                <dt className="text-neutral-500">Fit score</dt>
                <dd className="mt-1 text-sm font-semibold text-emerald-700">
                  92 / 100
                </dd>
              </div>
              <div className="rounded-xl border border-emerald-100 bg-white p-2.5">
                <dt className="text-neutral-500">Coach alignment</dt>
                <dd className="mt-1 font-semibold text-neutral-900">
                  Strong match
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <p className="text-[11px] text-neutral-500">
          This example is illustrative only. FitPilot is not a diagnostic
          tool; it organizes real trial experiences and instructor feedback so
          you can decide with confidence.
        </p>
      </div>
    </section>
  );
}

export function ProblemSection() {
  return (
    <Section
      id={SECTION_IDS.PROBLEM}
      eyebrow="Why this matters"
      title="Choosing the Right Activity Isn't Easy"
      kicker="A trial class is a moment. A decision is a season."
    >
      <div className="mt-2 max-w-2xl text-sm text-neutral-600">
        You see a snapshot, get a quick “they did great,” and then choose whether
        to commit. Without structure, it’s hard to compare options or spot a pattern.
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {PROBLEM_CARDS.map((card, i) => (
          <div
            key={card.title}
            className={i % 2 === 1 ? styles.cardAlt : styles.card}
          >
            <p className="text-sm font-semibold text-neutral-900">{card.title}</p>
            <p className="mt-2 text-xs text-neutral-600">{card.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function WhyNotDIYSection() {
  return (
    <Section
      id={SECTION_IDS.WHY_DIY}
      eyebrow="A common question"
      title="Why Not Just Try Classes on Your Own?"
      kicker="You can. FitPilot makes the results comparable and decision-ready."
    >
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            {WHY_DIY_COMPARISON.left.title}
          </p>
          <ul className="mt-4 space-y-3 text-sm text-neutral-800">
            {WHY_DIY_COMPARISON.left.items.map((item) => (
              <li key={item.text} className="flex gap-3">
                <ComparisonIcon variant="minus" />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-5 shadow-sm sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
            {WHY_DIY_COMPARISON.right.title}
          </p>
          <ul className="mt-4 space-y-3 text-sm text-neutral-900">
            {WHY_DIY_COMPARISON.right.items.map((item) => (
              <li key={item.text} className="flex gap-3">
                <ComparisonIcon variant="plus" />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-5 text-[11px] text-neutral-500">
        FitPilot doesn’t replace trials — it makes them useful.
      </p>
    </Section>
  );
}

export function SolutionSection() {
  return (
    <Section
      id={SECTION_IDS.SOLUTION}
      eyebrow="How it works"
      title="A Smarter Way to Choose"
      kicker="A short decision cycle built around consistent signals—not impressions."
    >
      <div className="grid gap-6 md:grid-cols-3">
        <ol className="space-y-4 text-sm text-neutral-900 md:col-span-3">
          <li className="grid gap-3 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm sm:grid-cols-[auto,1fr]">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
              1
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Choose
              </p>
              <p className="mt-1 text-sm font-semibold text-neutral-900">
                Choose a few strong options
              </p>
              <p className="mt-1 text-xs text-neutral-600">
                We help you narrow down to 2–3 activities that make sense.
              </p>
            </div>
          </li>
          <li className="grid gap-3 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm sm:grid-cols-[auto,1fr]">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
              2
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Capture
              </p>
              <p className="mt-1 text-sm font-semibold text-neutral-900">
                Capture real feedback
              </p>
              <p className="mt-1 text-xs text-neutral-600">
                Instructors complete a short structured evaluation.
              </p>
            </div>
          </li>
          <li className="grid gap-3 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm sm:grid-cols-[auto,1fr]">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
              3
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Decide
              </p>
              <p className="mt-1 text-sm font-semibold text-neutral-900">
                Decide with clarity
              </p>
              <p className="mt-1 text-xs text-neutral-600">
                You receive a clear recommendation based on patterns — not impressions.
              </p>
            </div>
          </li>
        </ol>
        <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-5 text-sm text-neutral-900 shadow-sm sm:p-6 md:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
            How FitPilot Works Behind the Scenes
          </p>
          <p className="mt-2 text-sm text-neutral-800">
            FitPilot adds a small amount of structure to trials so feedback is
            captured consistently and compared fairly.
          </p>
          <p className="mt-2 text-sm text-neutral-700">
            Over time, it also surfaces which experiences tend to lead to
            confident enrollments across activities and instructors.
          </p>
        </div>
      </div>
    </Section>
  );
}

export function WhatYouGetSection() {
  return (
    <Section
      id={SECTION_IDS.BENEFITS}
      eyebrow="What’s included"
      title="What You Actually Get"
      kicker="FitPilot doesn’t give you more information — it gives you better decisions."
    >
      <div className="grid gap-6 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div className="space-y-3 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Included in each cycle
          </p>
          <ul className="mt-1 space-y-2 text-sm text-neutral-800">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>3 trial experiences at trusted local programs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>Structured feedback after each class</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>A clear, side-by-side comparison</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>A personalized recommendation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>Confidence in your decision</span>
            </li>
          </ul>
        </div>
        <div className="space-y-3 rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-sm text-neutral-900">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
            Built for clarity
          </p>
          <p className="text-xs text-neutral-700">
            The goal is simple: turn a few trials into one clear starting point,
            based on patterns — not impressions.
          </p>
          <p className="pt-1 text-xs font-medium text-neutral-800">
            No spreadsheets. No guesswork. No wasted months.
          </p>
        </div>
      </div>
    </Section>
  );
}

export function SampleReportSection() {
  return (
    <Section
      id={SECTION_IDS.REPORT}
      eyebrow="Sample report"
      title="See a Sample Recommendation"
      kicker="Example output from a decision cycle: ranked options, rationale, and a clear next step."
    >
      <div className="space-y-6">
        <p className="text-sm font-medium text-neutral-700">
          This is what clarity looks like.
        </p>
        <div className="rounded-3xl border border-neutral-200 bg-white p-5 text-sm shadow-sm sm:p-7">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                FitPilot Report Demo
              </p>
              <p className="mt-1 text-xs text-neutral-500">
                Child: Leo · Age 8 · Trial cycle: Spring
              </p>
            </div>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-700 ring-1 ring-emerald-100">
              Example output
            </span>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
            <div className="space-y-3 rounded-xl border border-neutral-100 bg-neutral-50 p-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Ranked options
              </p>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between gap-2 rounded-xl border border-emerald-100 bg-white p-3">
                  <div>
                    <p className="text-[13px] font-semibold text-neutral-900">
                      Top Fit: Gymnastics
                    </p>
                    <p className="text-[11px] text-neutral-500">
                      Strong engagement · Coach: Nina
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-700">
                    93 / 100
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2 rounded-lg bg-white p-2.5">
                  <div>
                    <p className="text-[13px] font-semibold text-neutral-900">
                      Strong Alternative: Martial Arts
                    </p>
                    <p className="text-[11px] text-neutral-500">
                      Building confidence · Coach: Diego
                    </p>
                  </div>
                  <span className="rounded-full bg-neutral-100 px-2 py-1 text-[10px] font-semibold text-neutral-700">
                    84 / 100
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2 rounded-lg bg-white p-2.5">
                  <div>
                    <p className="text-[13px] font-semibold text-neutral-900">
                      Lower Fit for Now: Music
                    </p>
                    <p className="text-[11px] text-neutral-500">
                      Quiet engagement · Coach: Aria
                    </p>
                  </div>
                  <span className="rounded-full bg-neutral-100 px-2 py-1 text-[10px] font-semibold text-neutral-500">
                    71 / 100
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3 rounded-xl border border-neutral-100 bg-white p-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  Why it fits
                </p>
                <span className="rounded-full bg-neutral-50 px-2 py-1 text-[10px] font-medium text-neutral-600 ring-1 ring-neutral-200">
                  Gymnastics
                </span>
              </div>
              <ul className="space-y-1.5 text-xs text-neutral-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span>High engagement across warm‑up, instruction, and free practice.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span>Strong coachability — responded quickly to feedback and corrections.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span>Consistently positive instructor feedback over multiple stations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span>Comfortable in structured movement with clear progressions.</span>
                </li>
              </ul>

              <div className="mt-3 grid gap-2 text-[11px] sm:grid-cols-3">
                <div className="rounded-lg border border-neutral-100 bg-neutral-50 p-2.5">
                  <p className="text-neutral-500">Overall fit score</p>
                  <p className="mt-1 text-base font-semibold text-emerald-700">
                    93
                    <span className="ml-0.5 text-[10px] text-neutral-400">/100</span>
                  </p>
                </div>
                <div className="rounded-lg border border-neutral-100 bg-neutral-50 p-2.5">
                  <p className="text-neutral-500">Coach alignment</p>
                  <p className="mt-1 text-xs font-semibold text-neutral-900">
                    &quot;Strong long‑term match&quot;
                  </p>
                </div>
                <div className="rounded-lg border border-neutral-100 bg-neutral-50 p-2.5">
                  <p className="text-neutral-500">Parent clarity</p>
                  <p className="mt-1 text-xs font-semibold text-neutral-900">
                    &quot;Ready to enroll&quot;
                  </p>
                </div>
              </div>

              <div className="mt-3 rounded-xl border border-emerald-100 bg-emerald-50 p-4 text-xs text-neutral-900">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-700">
                  Clear recommendation
                </p>
                <p className="mt-1 text-sm font-semibold text-neutral-900">
                  Start with <span className="text-emerald-700">Gymnastics</span>{" "}
                  this season.
                </p>
                <p className="mt-1 text-xs text-neutral-700">
                  Enroll in a{" "}
                  <span className="font-semibold">2–3 month gymnastics session</span>{" "}
                  and reassess at the next season break. Keep martial arts as a
                  strong alternative if interests shift toward self‑defense.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-3 text-[11px] text-neutral-500">
            This example is illustrative only. Actual reports adapt to your
            child&apos;s age, your neighborhood, and the specific activities you
            select.
          </p>
        </div>
        <button
          type="button"
          onClick={() => scrollToSection(SECTION_IDS.LEAD)}
          className={styles.btnPrimary}
          aria-label="Start your child's plan"
        >
          Start Your Child&apos;s Plan
        </button>
      </div>
    </Section>
  );
}

export function SocialProofSection() {
  return (
    <Section
      id={SECTION_IDS.SOCIAL_PROOF}
      eyebrow="Early signal"
      title="Built for Real Families in Natick & MetroWest"
      kicker="Early parent reactions to a more structured way to choose."
    >
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {TESTIMONIALS_EARLY.slice(0, 3).map((t, i) => (
          <figure
            key={`${t.attribution}-${i}`}
            className={i === 1 ? styles.cardAlt : styles.card}
          >
            <blockquote className="text-sm text-neutral-800">
              <span aria-hidden="true" className="text-neutral-400">
                &ldquo;
              </span>
              {t.quote}
              <span aria-hidden="true" className="text-neutral-400">
                &rdquo;
              </span>
            </blockquote>
            <figcaption className="mt-3 text-xs font-medium text-neutral-600">
              — {t.attribution}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}


export function PricingSection() {
  return (
    <Section
      id={SECTION_IDS.PRICING}
      eyebrow="Pricing"
      title="Simple, Clear Pricing"
      kicker="One package for one decision cycle."
    >
      <div className="space-y-4">
        <div className="max-w-2xl space-y-1 text-sm text-neutral-600">
          <p className="text-neutral-600">
            Most families spend{" "}
            <span className="font-semibold text-neutral-900">$200–$500</span>{" "}
            trying different activities before deciding.
          </p>
          <p className="text-neutral-600">FitPilot helps you get it right faster.</p>
          <p className="pt-1 text-[11px] text-neutral-500">
            Limited pilot spots available in Natick &amp; MetroWest. We&apos;re
            starting with a small group of families to ensure a quality experience.
          </p>
          <p className="text-[11px] text-neutral-500">
            No commitment required to get started.
          </p>
        </div>
        <div className="relative max-w-md rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
            FitPilot Package
          </p>
          <div className="mt-4 flex items-baseline gap-2">
            <p className="text-4xl font-semibold text-neutral-900">$99</p>
            <p className="text-xs text-neutral-500">
              per child, per decision cycle
            </p>
          </div>
          <p className="mt-2 text-xs text-neutral-600">
            One clear decision — not months of uncertainty.
          </p>
          <ul className="mt-4 space-y-2 text-xs text-neutral-800">
            <li>✓ 3 guided trial experiences</li>
            <li>✓ Structured instructor feedback</li>
            <li>✓ Personalized recommendation report</li>
            <li>✓ Parent guidance</li>
          </ul>
          <button
            type="button"
            onClick={() => scrollToSection(SECTION_IDS.LEAD)}
            className={`mt-5 ${styles.btnPrimary}`}
          aria-label="Start your child's plan"
          >
            Start Your Child&apos;s Plan
          </button>
          <p className="mt-2 text-[11px] text-neutral-500">
            You pay FitPilot once per decision cycle. Studios may charge their normal
            trial fees separately where applicable.
          </p>
        </div>
        <p className="text-[11px] text-neutral-500">
          Launching with a limited number of pilot families in Natick and
          MetroWest.
        </p>
      </div>
    </Section>
  );
}

export function StudioPartnerSection() {
  return (
    <Section
      id={SECTION_IDS.STUDIOS}
      eyebrow="For local providers"
      title="Built for Local Activity Providers"
      kicker="FitPilot helps you understand why families enroll — or don’t — after a trial."
    >
      <div className="space-y-4">
        <p className="max-w-2xl text-sm text-neutral-600">
          FitPilot standardizes trial feedback and turns it into clearer decisions for families.
        </p>
        <div className="grid gap-4 md:grid-cols-4">
          <div className="space-y-2 rounded-2xl border border-neutral-200 bg-white p-4 text-xs text-neutral-700 shadow-sm">
            <p className="text-sm font-semibold text-neutral-900">
              Structured trial feedback
            </p>
            <p className="text-xs text-neutral-600">
              Capture meaningful notes after each trial in a consistent format.
            </p>
          </div>
          <div className="space-y-2 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-xs text-neutral-700 shadow-sm">
            <p className="text-sm font-semibold text-neutral-900">
              Better parent follow-up
            </p>
            <p className="text-xs text-neutral-600">
              Parents get a clear summary they can review at home.
            </p>
          </div>
          <div className="space-y-2 rounded-2xl border border-neutral-200 bg-white p-4 text-xs text-neutral-700 shadow-sm">
            <p className="text-sm font-semibold text-neutral-900">
              Clearer enrollment insights
            </p>
            <p className="text-xs text-neutral-600">
              Understand what drives confident enrollments after a trial.
            </p>
          </div>
          <div className="space-y-2 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-xs text-neutral-700 shadow-sm">
            <p className="text-sm font-semibold text-neutral-900">
              Patterns across instructors and classes
            </p>
            <p className="text-xs text-neutral-600">
              Spot what consistently works across coaches, classes, and schedules.
            </p>
          </div>
        </div>
        <p className="text-sm text-neutral-600">
          FitPilot becomes a lightweight decision layer — not another system to manage.
        </p>
        <button
          type="button"
          onClick={() => scrollToSection(SECTION_IDS.LEAD)}
          className={styles.btnDark}
          aria-label="Join pilot program"
        >
          Join Our Pilot Program
        </button>
      </div>
    </Section>
  );
}

export function LocalTrustSection() {
  return (
    <Section
      id={SECTION_IDS.LOCAL}
      eyebrow="Pilot launch"
      title="Launching in Natick & MetroWest"
      kicker="FitPilot is starting close to home — working with a small group of local families and providers to shape the product before expanding."
    >
      <div className="space-y-4">
        <p className="max-w-2xl text-sm text-neutral-600">
          The first version of FitPilot is intentionally small: a focused
          pilot with families and studios in Natick and the broader MetroWest
          area. That lets us listen closely, refine the experience, and earn
          trust one neighborhood at a time.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-xs text-neutral-700 shadow-sm">
            <p className="text-sm font-semibold text-neutral-900">
              Local partner studios
            </p>
            <p className="mt-2 text-neutral-600">
              We&apos;re partnering with a small set of trusted martial arts
              schools, dance studios, gymnastics centers, and music programs —
              not an open marketplace.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-xs text-neutral-700 shadow-sm">
            <p className="text-sm font-semibold text-neutral-900">
              Designed for families in your community
            </p>
            <p className="mt-2 text-neutral-600">
              Schedules, recommendations, and guidance are grounded in Natick
              and MetroWest realities — not generic online advice.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-4 text-xs text-neutral-700 shadow-sm">
            <p className="text-sm font-semibold text-neutral-900">
              Built to reduce guesswork
            </p>
            <p className="mt-2 text-neutral-600">
              The goal of the pilot is simple: less second‑guessing after
              trials, more confident long‑term fits between families and local
              programs.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function FAQSection() {

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section
      id={SECTION_IDS.FAQ}
      eyebrow="FAQ"
      title="Questions parents and studios are already asking."
    >
      <div className="space-y-2">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={item.q}
              className="rounded-2xl border border-neutral-200 bg-white shadow-sm"
            >
              <button
                type="button"
                onClick={() =>
                  setOpenIndex((current) =>
                    current === index ? null : index
                  )
                }
                className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left sm:px-5"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span className="text-sm font-semibold text-neutral-900">
                  {item.q}
                </span>
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-full border border-neutral-200 text-xs text-neutral-500 transition-transform ${
                    isOpen ? "rotate-90" : ""
                  }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`overflow-hidden px-4 pb-0 text-xs text-neutral-700 transition-[max-height,opacity] duration-200 ease-out sm:px-5 ${
                  isOpen ? "max-h-96 pb-4 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="pt-1 text-neutral-600">{item.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}


