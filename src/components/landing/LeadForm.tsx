"use client";

import React, { useState } from "react";
import { PILOT_BENEFITS, PILOT_SECTION, PRIMARY_CTA } from "./visuals";
import { styles } from "./ui/styles";
import { cardSurface } from "./ui/imageStyles";

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="mx-auto mt-12 max-w-5xl lg:mt-16">
      <div
        className={`overflow-hidden rounded-3xl bg-gradient-to-br from-stone-900 via-stone-900 to-emerald-950 p-6 shadow-[0_24px_56px_-20px_rgba(28,25,23,0.4)] sm:p-8 lg:p-10`}
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-12 lg:items-start">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
              {PILOT_SECTION.benefitsLabel}
            </p>
            <ul className="space-y-4">
              {PILOT_BENEFITS.map((benefit) => (
                <li key={benefit} className="flex gap-3 text-sm text-stone-200">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400"
                    aria-hidden
                  >
                    ✓
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className={`${cardSurface} p-6 sm:p-8`}>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className={styles.label} htmlFor="parent-name">
                    Parent name
                  </label>
                  <input
                    id="parent-name"
                    required
                    placeholder="Sarah"
                    className={styles.input}
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label className={styles.label} htmlFor="parent-email">
                    Email
                  </label>
                  <input
                    id="parent-email"
                    type="email"
                    required
                    placeholder="you@email.com"
                    className={styles.input}
                    autoComplete="email"
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className={styles.label} htmlFor="location">
                    Location
                  </label>
                  <input
                    id="location"
                    required
                    placeholder="Natick, MA"
                    className={styles.input}
                    autoComplete="address-level2"
                  />
                </div>
                <div>
                  <label className={styles.label} htmlFor="phone">
                    Phone number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="(555) 555-5555"
                    className={styles.input}
                    autoComplete="tel"
                  />
                </div>
              </div>
              <div>
                <label className={styles.label} htmlFor="child-age">
                  Child&apos;s age
                </label>
                <input
                  id="child-age"
                  type="number"
                  min={5}
                  max={12}
                  required
                  placeholder="8"
                  className={styles.input}
                />
              </div>
              <button type="submit" className={`w-full ${styles.btnPrimary}`}>
                {PRIMARY_CTA}
              </button>
              {submitted ? (
                <p className="text-sm font-medium text-emerald-700">
                  You&apos;re on the list — we&apos;ll reply within 1–2 business
                  days.
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
