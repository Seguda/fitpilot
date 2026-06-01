"use client";

import React, { useState } from "react";
import { SECTION_IDS } from "./constants";
import { styles } from "./ui/styles";

export function LeadForm() {
  const [mode, setMode] = useState<"parent" | "studio">("parent");
  const [parentSubmitted, setParentSubmitted] = useState(false);
  const [studioSubmitted, setStudioSubmitted] = useState(false);

  return (
    <section
      id={SECTION_IDS.LEAD}
      className="scroll-mt-28 py-16 sm:py-20 lg:py-28"
      aria-labelledby="lead-heading"
    >
      <div className="mx-auto max-w-xl lg:max-w-2xl">
        <div className="space-y-10">
          <div>
            <h2
              id="lead-heading"
              className="text-balance text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl"
            >
              Start Discovery Journey
            </h2>
            <p className="mt-2 text-sm text-stone-500">
              Under a minute. We handle the rest.
            </p>
          </div>

          <ol className="grid gap-3 sm:grid-cols-3">
            {["Review", "Match", "Begin"].map((label, i) => (
              <li
                key={label}
                className="rounded-2xl bg-stone-100 px-4 py-4 text-center text-sm font-medium text-stone-800"
              >
                <span className="mb-2 block text-xs text-emerald-700">
                  {i + 1}
                </span>
                {label}
              </li>
            ))}
          </ol>

          <div className="rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-stone-200/80 sm:p-8">
            <div
              className="mb-6 flex gap-2 rounded-full bg-stone-100 p-1"
              role="tablist"
            >
              {(["parent", "studio"] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={mode === tab}
                  onClick={() => setMode(tab)}
                  className={`flex-1 rounded-full py-2.5 text-sm font-semibold transition ${
                    mode === tab
                      ? "bg-white text-stone-900 shadow-sm"
                      : "text-stone-500"
                  }`}
                >
                  {tab === "parent" ? "Parents" : "Studios"}
                </button>
              ))}
            </div>

            {mode === "parent" ? (
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setParentSubmitted(true);
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className={styles.label} htmlFor="parent-name">
                      Name
                    </label>
                    <input
                      id="parent-name"
                      required
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
                      className={styles.input}
                      autoComplete="email"
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
                    min={3}
                    max={18}
                    required
                    className={styles.input}
                  />
                </div>
                <button type="submit" className={`w-full ${styles.btnPrimary}`}>
                  Start Discovery Journey
                </button>
                {parentSubmitted ? (
                  <p className="text-sm font-medium text-emerald-700">
                    Thanks — we&apos;ll reply in 1–2 days.
                  </p>
                ) : (
                  <p className="text-xs text-stone-500">
                    Private · No commitment
                  </p>
                )}
              </form>
            ) : (
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setStudioSubmitted(true);
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className={styles.label} htmlFor="business-name">
                      Studio
                    </label>
                    <input id="business-name" required className={styles.input} />
                  </div>
                  <div>
                    <label className={styles.label} htmlFor="studio-email">
                      Email
                    </label>
                    <input
                      id="studio-email"
                      type="email"
                      required
                      className={styles.input}
                    />
                  </div>
                </div>
                <button type="submit" className={`w-full ${styles.btnDark}`}>
                  Join Pilot
                </button>
                {studioSubmitted && (
                  <p className="text-sm font-medium text-emerald-700">
                    Thanks — we&apos;ll be in touch soon.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
