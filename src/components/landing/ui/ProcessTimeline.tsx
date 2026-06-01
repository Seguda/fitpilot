import type { ReactNode } from "react";

export interface TimelineStep {
  id: string;
  title: string;
  tagline: string;
}

const icons: Record<string, ReactNode> = {
  discover: (
    <svg viewBox="0 0 48 48" fill="none" className="h-9 w-9" aria-hidden>
      <circle cx="22" cy="22" r="10" className="stroke-emerald-600/70" strokeWidth="2" />
      <path d="M30 30l8 8" className="stroke-emerald-700" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="22" cy="22" r="3" className="fill-emerald-500/40" />
    </svg>
  ),
  understand: (
    <svg viewBox="0 0 48 48" fill="none" className="h-9 w-9" aria-hidden>
      <path d="M12 32l8-10 8 6 8-14 8 10" className="stroke-emerald-600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="36" cy="14" r="3" className="fill-emerald-500/35 stroke-emerald-700" strokeWidth="1.5" />
    </svg>
  ),
  grow: (
    <svg viewBox="0 0 48 48" fill="none" className="h-9 w-9" aria-hidden>
      <path d="M24 38V20" className="stroke-emerald-700" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 20c-5-7-12-3-12 3s5 9 12 5" className="stroke-emerald-600/80" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 20c5-7 12-3 12 3s-5 9-12 5" className="stroke-emerald-500/60" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  support: (
    <svg viewBox="0 0 48 48" fill="none" className="h-9 w-9" aria-hidden>
      <path d="M16 28c0-6 3.5-10 8-10s8 4 8 10" className="stroke-emerald-700/80" strokeWidth="2" />
      <path d="M20 28v6c0 2.5 1.8 4.5 4 4.5s4-2 4-4.5v-6" className="stroke-emerald-600" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 12v4" className="stroke-emerald-500/70" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
};

interface ProcessTimelineProps {
  steps: readonly TimelineStep[];
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="relative mt-14 sm:mt-16 lg:mt-20">
      <div
        className="pointer-events-none absolute left-[10%] right-[10%] top-[2.375rem] hidden h-px bg-gradient-to-r from-transparent via-emerald-200/90 to-transparent lg:block"
        aria-hidden
      />

      <ol className="relative flex flex-col lg:grid lg:grid-cols-4 lg:gap-8">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;
          return (
            <li
              key={step.id}
              className="relative grid grid-cols-[auto_1fr] gap-x-5 pb-10 last:pb-0 lg:flex lg:flex-col lg:items-center lg:gap-0 lg:pb-0 lg:text-center"
            >
              <div className="relative flex flex-col items-center lg:w-full">
                <div className="relative z-10 flex h-[4.75rem] w-[4.75rem] shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-white via-emerald-50/80 to-stone-100/90 shadow-[0_8px_30px_-12px_rgba(5,150,105,0.25)] ring-1 ring-stone-200/90 sm:h-20 sm:w-20 sm:rounded-[1.25rem]">
                  {icons[step.id] ?? icons.discover}
                </div>
                {!isLast ? (
                  <div
                    className="mt-3 w-px min-h-[2.5rem] flex-1 bg-gradient-to-b from-emerald-200/90 to-stone-200/80 lg:hidden"
                    aria-hidden
                  />
                ) : null}
              </div>

              <div className="pt-3 lg:mt-6 lg:pt-0">
                <span className="text-xs font-semibold tabular-nums text-emerald-600/90">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 text-lg font-semibold tracking-tight text-stone-900 sm:text-xl">
                  {step.title}
                </h3>
                <p className="mt-1 max-w-[14rem] text-sm leading-snug text-stone-500 lg:mx-auto">
                  {step.tagline}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
