"use client";

import React, { useState } from "react";
import { SECTION_IDS, PREFERRED_ACTIVITIES } from "./constants";
import { scrollToSection } from "./utils";
import { Section } from "./ui/Section";
import { styles } from "./ui/styles";

export function LeadForm() {
  const [mode, setMode] = useState<"parent" | "studio">("parent");
  const [parentSubmitted, setParentSubmitted] = useState(false);
  const [studioSubmitted, setStudioSubmitted] = useState(false);

  return (
    <Section
      id={SECTION_IDS.LEAD}
      eyebrow="Join the pilot"
      title="Start Your Child’s Plan"
      kicker="Share a few details. We’ll recommend a clear starting point."
    >
      <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              What happens next
            </p>
            <p className="text-sm font-semibold text-neutral-900">Three steps.</p>
          </div>
          <p className="max-w-md text-xs text-neutral-600">
            This is the intake for your decision cycle. No commitment required.
          </p>
        </div>
        <ol className="mt-5 grid gap-3 text-xs text-neutral-700 sm:grid-cols-3">
          <li className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
            <div className="flex items-start gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
                1
              </span>
              <div>
                <p className="text-sm font-semibold text-neutral-900">
                  We review your child&apos;s profile
                </p>
                <p className="mt-1 text-xs text-neutral-600">
                  We look at age, interests, and schedule.
                </p>
              </div>
            </div>
          </li>
          <li className="rounded-2xl border border-neutral-200 bg-white p-4">
            <div className="flex items-start gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
                2
              </span>
              <div>
                <p className="text-sm font-semibold text-neutral-900">
                  We suggest 2–3 strong-fit activities
                </p>
                <p className="mt-1 text-xs text-neutral-600">
                  We match you with local programs that make sense.
                </p>
              </div>
            </div>
          </li>
          <li className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
            <div className="flex items-start gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
                3
              </span>
              <div>
                <p className="text-sm font-semibold text-neutral-900">
                  You begin your guided trial cycle
                </p>
                <p className="mt-1 text-xs text-neutral-600">
                  You try options with structure and move toward a clear recommendation.
                </p>
              </div>
            </div>
          </li>
        </ol>
        <p className="mt-4 text-[11px] text-neutral-500">
          We respond within 1–2 business days.
        </p>
      </div>

      <div className="rounded-3xl border border-emerald-100 bg-emerald-50/60 p-4 shadow-sm sm:p-5">
        <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-7">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              {mode === "parent" ? "Tell Us About Your Child" : "Tell Us About Your Studio"}
            </p>
            <p className="text-sm font-semibold text-neutral-900 sm:text-base">
              {mode === "parent"
                ? "We’ll recommend a clear starting point."
                : "We’ll follow up with next steps."}
            </p>
            <p className="text-[11px] text-neutral-500">
              Limited pilot spots available in Natick &amp; MetroWest. We&apos;re
              starting with a small group of families to ensure a quality experience.
            </p>
            <p className="text-[11px] text-neutral-500">
              Your information is private and never shared.
            </p>
          </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200 pb-4">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Get started
            </p>
            <p className="text-xs text-neutral-600">
              Parents and studios: choose your form below.
            </p>
          </div>
          <div
            className="flex gap-2 rounded-full bg-neutral-100 p-1 text-xs"
            role="tablist"
            aria-label="Form type"
          >
            <button
              type="button"
              role="tab"
              aria-selected={mode === "parent"}
              aria-controls="parent-form-panel"
              id="parent-tab"
              onClick={() => setMode("parent")}
              className={`rounded-full px-3 py-1.5 font-semibold transition ${
                mode === "parent"
                  ? "bg-white text-neutral-900 shadow-sm"
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              For Parents
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={mode === "studio"}
              aria-controls="studio-form-panel"
              id="studio-tab"
              onClick={() => setMode("studio")}
              className={`rounded-full px-3 py-1.5 font-semibold transition ${
                mode === "studio"
                  ? "bg-white text-neutral-900 shadow-sm"
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              For Studios
            </button>
          </div>
        </div>

        {mode === "parent" ? (
          <form
            id="parent-form-panel"
            role="tabpanel"
            aria-labelledby="parent-tab"
            className="mt-4 space-y-3 text-xs"
            onSubmit={(e) => {
              e.preventDefault();
              setParentSubmitted(true);
            }}
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-1">
                <label className={styles.label} htmlFor="parent-name">
                  Parent Name
                </label>
                <input
                  id="parent-name"
                  name="parent-name"
                  type="text"
                  required
                  className={styles.input}
                  placeholder="Alex Rivera"
                  autoComplete="name"
                />
              </div>
              <div className="space-y-1">
                <label className={styles.label} htmlFor="parent-email">
                  Email
                </label>
                <input
                  id="parent-email"
                  name="parent-email"
                  type="email"
                  required
                  className={styles.input}
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-1">
                <label className={styles.label} htmlFor="child-age">
                  Child Age
                </label>
                <input
                  id="child-age"
                  name="child-age"
                  type="number"
                  min={3}
                  max={18}
                  required
                  className={styles.input}
                  placeholder="8"
                  aria-describedby="child-age-hint"
                />
                <span id="child-age-hint" className="sr-only">
                  Ages 3 to 18
                </span>
              </div>
              <fieldset className="space-y-1">
                <span className={styles.label}>
                  Preferred activities{" "}
                  <span className="text-neutral-400">(optional)</span>
                </span>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-neutral-700">
                  {PREFERRED_ACTIVITIES.map((activity) => (
                    <label
                      key={activity}
                      className="flex min-h-[44px] cursor-pointer items-center gap-2 rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 sm:min-h-0"
                    >
                      <input
                        type="checkbox"
                        name="preferred-activities"
                        value={activity}
                        className="h-4 w-4 rounded border-neutral-300 text-emerald-600 focus:ring-emerald-500"
                      />
                      <span>{activity}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>
            <div className="space-y-1">
              <label className={styles.label} htmlFor="parent-notes">
                Optional Notes
              </label>
              <textarea
                id="parent-notes"
                name="parent-notes"
                rows={3}
                className={`${styles.input} min-h-[80px] resize-none`}
                placeholder="Share anything helpful about your child's interests or schedule."
              />
            </div>
            <div className="flex flex-col gap-3 pt-5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
              <button
                type="submit"
                className={`w-full ${styles.btnPrimary} py-3 sm:w-auto`}
              >
                Start Your Child&apos;s Plan
              </button>
              <p className="text-[11px] text-neutral-500 sm:order-first">
                Takes less than 1 minute. No commitment required.
              </p>
              {parentSubmitted && (
                <p className="w-full text-sm font-medium text-emerald-700 sm:w-auto">
                  Thanks — we&apos;ll be in touch within 1–2 business days.
                </p>
              )}
            </div>
          </form>
        ) : (
          <form
            id="studio-form-panel"
            role="tabpanel"
            aria-labelledby="studio-tab"
            className="mt-4 space-y-3 text-xs"
            onSubmit={(e) => {
              e.preventDefault();
              setStudioSubmitted(true);
            }}
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-1">
                <label className={styles.label} htmlFor="business-name">
                  Business Name
                </label>
                <input
                  id="business-name"
                  name="business-name"
                  type="text"
                  required
                  className={styles.input}
                  placeholder="Natick Gymnastics Center"
                />
              </div>
              <div className="space-y-1">
                <label className={styles.label} htmlFor="studio-email">
                  Email
                </label>
                <input
                  id="studio-email"
                  name="studio-email"
                  type="email"
                  required
                  className={styles.input}
                  placeholder="you@studio.com"
                  autoComplete="email"
                />
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-1">
                <label className={styles.label} htmlFor="contact-name">
                  Contact Name
                </label>
                <input
                  id="contact-name"
                  name="contact-name"
                  type="text"
                  required
                  className={styles.input}
                  placeholder="Jordan Kim"
                  autoComplete="name"
                />
              </div>
              <div className="space-y-1">
                <label className={styles.label} htmlFor="activity-type">
                  Activity Type
                </label>
                <input
                  id="activity-type"
                  name="activity-type"
                  type="text"
                  required
                  className={styles.input}
                  placeholder="Martial arts, dance, music..."
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className={styles.label} htmlFor="studio-notes">
                Optional Notes
              </label>
              <textarea
                id="studio-notes"
                name="studio-notes"
                rows={3}
                className={`${styles.input} min-h-[80px] resize-none`}
                placeholder="Share anything helpful about your trial flow or enrollment goals."
              />
            </div>
            <div className="flex flex-col gap-3 pt-5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
              <button
                type="submit"
                className={`w-full ${styles.btnDark} py-3 sm:w-auto`}
              >
                Join Pilot Program
              </button>
              <p className="text-[11px] text-neutral-500 sm:order-first">
                We&apos;ll respond within 1–2 business days.
              </p>
              {studioSubmitted && (
                <p className="w-full text-sm font-medium text-emerald-700 sm:w-auto">
                  Thanks — we&apos;ll reach out about next steps for the pilot.
                </p>
              )}
            </div>
          </form>
        )}
        </div>
      </div>
    </Section>
  );
}
