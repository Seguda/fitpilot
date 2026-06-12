"use client";

import React, { useState } from "react";
import { NAV_ITEMS, SECTION_IDS } from "./constants";
import { PRIMARY_CTA } from "./visuals";
import { scrollToSection } from "./utils";
import { styles } from "./ui/styles";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header
      className="sticky inset-x-0 top-0 z-40 border-b border-stone-200/60 bg-[#fafaf9]/90 backdrop-blur-md"
      role="banner"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12">
        <button
          type="button"
          onClick={() => handleNavClick(SECTION_IDS.HERO)}
          className="flex items-center gap-2.5 text-left"
          aria-label="FitPilot – home"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600/10 ring-1 ring-emerald-600/20">
            <span className="text-xs font-bold text-emerald-700">FP</span>
          </div>
          <span className="text-base font-semibold tracking-tight text-stone-900">
            FitPilot
          </span>
        </button>

        <nav
          className="hidden items-center gap-4 text-sm text-stone-600 md:flex lg:gap-6"
          aria-label="Main"
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className="transition hover:text-stone-900"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => handleNavClick(SECTION_IDS.LEAD)}
          className={`hidden ${styles.btnPrimary} !min-h-[40px] !px-5 !py-2 md:inline-flex`}
        >
          {PRIMARY_CTA}
        </button>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 md:hidden"
          aria-label={open ? "Close menu" : "Menu"}
          aria-expanded={open}
          onClick={() => setOpen((p) => !p)}
        >
          <span className="text-lg text-stone-700">{open ? "×" : "≡"}</span>
        </button>
      </div>

      {open ? (
        <nav className="border-t border-stone-200 bg-[#fafaf9] px-5 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className="rounded-xl px-3 py-3 text-left text-stone-700 hover:bg-stone-100"
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleNavClick(SECTION_IDS.LEAD)}
              className={`mt-2 ${styles.btnPrimary}`}
            >
              {PRIMARY_CTA}
            </button>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
