"use client";

import React from "react";
import { FOOTER_LINKS, SECTION_IDS, CONTACT_EMAIL, SERVICE_AREA } from "./constants";
import { scrollToSection } from "./utils";

export function Footer() {
  return (
    <footer
      className="border-t border-neutral-200 bg-white/50 py-8"
      role="contentinfo"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
        <div
          className="flex cursor-pointer items-center gap-2"
          onClick={() => scrollToSection(SECTION_IDS.HERO)}
          onKeyDown={(e) =>
            e.key === "Enter" && scrollToSection(SECTION_IDS.HERO)
          }
          role="button"
          tabIndex={0}
          aria-label="FitPilot – go to top"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/40">
            <span className="text-xs font-semibold text-emerald-700">FP</span>
          </div>
          <span className="text-sm font-semibold tracking-tight text-neutral-900">
            FitPilot
          </span>
        </div>
        <nav
          className="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-500"
          aria-label="Footer navigation"
        >
          {FOOTER_LINKS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="transition-colors hover:text-neutral-900"
              aria-label={`Go to ${item.label}`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <p className="text-[11px] text-neutral-500" aria-label="Service area">
          {SERVICE_AREA}
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-[11px] text-neutral-500 underline-offset-2 hover:text-neutral-700 hover:underline"
          aria-label={`Contact us at ${CONTACT_EMAIL}`}
        >
          {CONTACT_EMAIL}
        </a>
      </div>
    </footer>
  );
}
