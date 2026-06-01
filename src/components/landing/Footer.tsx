"use client";

import React from "react";
import { FOOTER_LINKS, SECTION_IDS, CONTACT_EMAIL, SERVICE_AREA } from "./constants";
import { scrollToSection } from "./utils";

export function Footer() {
  return (
    <footer className="border-t border-stone-200/80 bg-white py-12" role="contentinfo">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-5 text-center sm:px-8 lg:px-12">
        <button
          type="button"
          onClick={() => scrollToSection(SECTION_IDS.HERO)}
          className="text-base font-semibold text-stone-900"
        >
          FitPilot
        </button>
        <nav
          className="flex flex-wrap justify-center gap-6 text-sm text-stone-500"
          aria-label="Footer"
        >
          {FOOTER_LINKS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="hover:text-stone-900"
            >
              {item.label}
            </button>
          ))}
        </nav>
        <p className="text-xs text-stone-500">{SERVICE_AREA}</p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-xs text-stone-500 hover:text-stone-800"
        >
          {CONTACT_EMAIL}
        </a>
      </div>
    </footer>
  );
}
