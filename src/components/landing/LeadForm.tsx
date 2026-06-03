"use client";

import React, { useState } from "react";
import { styles } from "./ui/styles";
import { cardSurface } from "./ui/imageStyles";

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className={`mx-auto mt-10 max-w-xl ${cardSurface} p-6 sm:p-8`}>
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
            min={5}
            max={12}
            required
            className={styles.input}
          />
        </div>
        <button type="submit" className={`w-full ${styles.btnPrimary}`}>
          Request Early Access
        </button>
        {submitted ? (
          <p className="text-sm font-medium text-emerald-700">
            Thanks — we&apos;ll be in touch soon.
          </p>
        ) : (
          <p className="text-xs text-stone-500">Private · No commitment</p>
        )}
      </form>
    </div>
  );
}
