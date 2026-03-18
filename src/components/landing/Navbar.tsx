"use client";

import React, { useState } from "react";
import { NAV_ITEMS, SECTION_IDS } from "./constants";
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
      className="sticky inset-x-0 top-0 z-40 border-b border-neutral-200/80 bg-white/80 backdrop-blur"
      role="banner"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div
          className="flex cursor-pointer items-center gap-2"
          onClick={() => handleNavClick(SECTION_IDS.HERO)}
          onKeyDown={(e) =>
            e.key === "Enter" && handleNavClick(SECTION_IDS.HERO)
          }
          role="button"
          tabIndex={0}
          aria-label="FitPilot – go to top"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/40">
            <span className="text-xs font-semibold text-emerald-700">FP</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-neutral-900">
              FitPilot
            </span>
            <span className="text-[11px] font-medium text-neutral-500">
              Smarter activity decisions
            </span>
          </div>
        </div>
        <nav
          className="hidden items-center gap-6 text-sm text-neutral-500 md:flex"
          aria-label="Main navigation"
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className="transition-colors hover:text-neutral-900"
              aria-label={`Go to ${item.label}`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="hidden md:block">
          <button
            type="button"
            onClick={() => handleNavClick(SECTION_IDS.LEAD)}
            className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-50"
            aria-label="Start your child's plan"
          >
            Start Your Child&apos;s Plan
          </button>
        </div>
        <button
          type="button"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-neutral-700 transition hover:border-neutral-300 hover:bg-neutral-50 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="relative flex h-3.5 w-3.5 flex-col justify-between">
            <span
              className={`h-0.5 w-full rounded bg-current transition-transform ${
                open ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full rounded bg-current transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 w-full rounded bg-current transition-transform ${
                open ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>
      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-neutral-200 bg-white/95 shadow-sm md:hidden"
          role="navigation"
          aria-label="Mobile menu"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6 lg:px-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm text-neutral-700 hover:bg-neutral-50"
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleNavClick(SECTION_IDS.LEAD)}
              className={`mt-2 ${styles.btnPrimary} py-3`}
            >
              Start Your Child&apos;s Plan
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
