import type { ReactNode } from "react";
import { HOW_IT_WORKS_STEPS } from "../visuals";

const iconClass = "h-5 w-5 text-emerald-700";

const icons: Record<
  (typeof HOW_IT_WORKS_STEPS)[number]["icon"],
  ReactNode
> = {
  profile: (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden>
      <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  explore: (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 8v4l2.5 2.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  patterns: (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden>
      <path
        d="M4 16c2-4 4-6 8-6s6 2 8 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="8" cy="10" r="1.5" fill="currentColor" />
      <circle cx="12" cy="7" r="1.5" fill="currentColor" />
      <circle cx="16" cy="10" r="1.5" fill="currentColor" />
    </svg>
  ),
  report: (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden>
      <rect
        x="5"
        y="3"
        width="14"
        height="18"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M9 8h6M9 12h6M9 16h4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  growth: (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden>
      <path
        d="M12 20V8M12 8c-2 0-3.5-1.5-3.5-3.5S10 1 12 1s3.5 1.5 3.5 3.5S14 8 12 8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 20h12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
};

function MilestoneContent({
  step,
  index,
  align,
}: {
  step: (typeof HOW_IT_WORKS_STEPS)[number];
  index: number;
  align: "left" | "right";
}) {
  return (
    <div
      className={
        align === "right"
          ? "md:pl-4 md:text-right lg:pl-8"
          : "md:pr-4 md:text-left lg:pr-8"
      }
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
        Step {index + 1}
      </p>
      <h3 className="mt-2 text-xl font-semibold text-stone-900 sm:text-2xl">
        {step.title}
      </h3>
      <div
        className={`mt-3 space-y-3 ${align === "right" ? "md:ml-auto md:max-w-md" : "md:max-w-md"}`}
      >
        <p className="text-sm leading-relaxed text-stone-600 sm:text-base">
          {step.description}
        </p>

        {"highlights" in step && step.highlights ? (
          <ul className="space-y-1.5 text-sm leading-relaxed text-stone-600 sm:text-base">
            {step.highlights.map((item) => (
              <li key={item} className="flex gap-2">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {"closing" in step && step.closing ? (
          <p className="text-sm leading-relaxed text-stone-600 sm:text-base">
            {step.closing}
          </p>
        ) : null}
      </div>
    </div>
  );
}

function TimelineNode({ step }: { step: (typeof HOW_IT_WORKS_STEPS)[number] }) {
  return (
    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_4px_20px_-4px_rgba(5,150,105,0.25)] ring-2 ring-emerald-200/80">
      {icons[step.icon]}
    </div>
  );
}

export function HowItWorksSteps() {
  return (
    <div className="relative mx-auto mt-14 max-w-5xl lg:mt-20">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full max-h-[90%] bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.06)_0%,_transparent_70%)]"
        aria-hidden
      />

      <ol className="relative space-y-12 md:space-y-0">
        {/* Center timeline line — desktop */}
        <span
          className="absolute left-1/2 top-6 hidden h-[calc(100%-3rem)] w-px -translate-x-1/2 bg-gradient-to-b from-emerald-200 via-emerald-300/70 to-emerald-100 md:block"
          aria-hidden
        />

        {HOW_IT_WORKS_STEPS.map((step, index) => {
          const isLeft = index % 2 === 0;
          const isLast = index === HOW_IT_WORKS_STEPS.length - 1;

          return (
            <li
              key={step.id}
              className={`relative ${isLast ? "" : "md:pb-16 lg:pb-20"}`}
            >
              {/* Mobile / tablet: left timeline stepper */}
              <div className="flex gap-5 md:hidden">
                <div className="flex flex-col items-center">
                  <TimelineNode step={step} />
                  {!isLast ? (
                    <span
                      className="mt-2 w-px flex-1 min-h-[3rem] bg-gradient-to-b from-emerald-300/80 to-emerald-100"
                      aria-hidden
                    />
                  ) : null}
                </div>
                <MilestoneContent step={step} index={index} align="left" />
              </div>

              {/* Desktop: alternating left / right */}
              <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-6 lg:gap-10">
                {isLeft ? (
                  <>
                    <MilestoneContent
                      step={step}
                      index={index}
                      align="right"
                    />
                    <TimelineNode step={step} />
                    <div aria-hidden />
                  </>
                ) : (
                  <>
                    <div aria-hidden />
                    <TimelineNode step={step} />
                    <MilestoneContent
                      step={step}
                      index={index}
                      align="left"
                    />
                  </>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
