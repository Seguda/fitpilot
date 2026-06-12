import { Fragment, type ReactNode } from "react";

const steps = [
  { id: "parent", label: "Parent Input", icon: "parent" as const },
  {
    id: "observations",
    label: "Structured Observations",
    icon: "observe" as const,
  },
  { id: "report", label: "Insight Report", icon: "report" as const },
] as const;

const iconClass = "h-4 w-4 text-emerald-700";

const icons: Record<(typeof steps)[number]["icon"], ReactNode> = {
  parent: (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden>
      <path
        d="M12 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM6 21c0-3.3 2.7-6 6-6s6 2.7 6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  observe: (
    <svg viewBox="0 0 24 24" fill="none" className={iconClass} aria-hidden>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 5C7 5 3.5 8.5 3.5 12S7 19 12 19s8.5-3.5 8.5-7S17 5 12 5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
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
        d="M9 8h6M9 12h4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
};

export function InsightCreationFlow() {
  return (
    <div className="mx-auto mt-10 max-w-3xl lg:mt-12">
      <h3 className="text-center text-lg font-semibold text-stone-900">
        How We Create the Insight
      </h3>
      <p className="mx-auto mt-3 max-w-xl text-center text-sm text-stone-600">
        Three inputs. One clear report.
      </p>

      <ol className="mt-8 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-3">
        {steps.map((step, index) => (
          <Fragment key={step.id}>
            {index > 0 ? (
              <li className="list-none text-lg text-stone-300" aria-hidden>
                <span className="sm:hidden">↓</span>
                <span className="hidden sm:inline">→</span>
              </li>
            ) : null}
            <li className="list-none">
              <div className="flex w-full min-w-[200px] items-center gap-3 rounded-2xl bg-white px-4 py-3 ring-1 ring-stone-200/80 sm:w-auto sm:flex-col sm:gap-2 sm:px-5 sm:py-4 sm:text-center">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-100">
                  {icons[step.icon]}
                </span>
                <span className="text-sm font-medium text-stone-800">
                  {step.label}
                </span>
              </div>
            </li>
          </Fragment>
        ))}
      </ol>
    </div>
  );
}
