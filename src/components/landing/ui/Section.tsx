import React from "react";

export interface SectionProps {
  id: string;
  title: string;
  eyebrow?: string;
  kicker?: string;
  children: React.ReactNode;
}

/**
 * Reusable section wrapper with consistent scroll margin and heading hierarchy.
 * Use for all landing sections that need anchor links and smooth scroll.
 */
export function Section({
  id,
  eyebrow,
  title,
  kicker,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24"
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <div className="space-y-6">
        <div className="space-y-3">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              {eyebrow}
            </p>
          ) : null}
          <h2
            id={id ? `${id}-heading` : undefined}
            className="text-balance text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl"
          >
            {title}
          </h2>
          {kicker ? (
            <p className="max-w-2xl text-sm text-neutral-600 sm:text-base">
              {kicker}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
