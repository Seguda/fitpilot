import type { ReactNode } from "react";
import { INSIGHT_REPORT_EXAMPLE } from "../visuals";

const report = INSIGHT_REPORT_EXAMPLE;

function ScoreBadge({ score, emphasis }: { score: number; emphasis?: boolean }) {
  return (
    <div
      className={`shrink-0 rounded-xl px-3 py-2 text-center ring-1 ${
        emphasis
          ? "bg-emerald-600 text-white ring-emerald-600"
          : "bg-white text-stone-800 ring-stone-200/90"
      }`}
    >
      <p
        className={`text-lg font-semibold tabular-nums leading-none ${
          emphasis ? "text-white" : "text-emerald-800"
        }`}
      >
        {score}
      </p>
      <p
        className={`mt-0.5 text-[10px] font-medium uppercase tracking-wide ${
          emphasis ? "text-emerald-100" : "text-stone-500"
        }`}
      >
        / 100
      </p>
    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-800">
      {children}
    </p>
  );
}

export function InsightReportMockup() {
  return (
    <div
      className="overflow-hidden rounded-3xl bg-gradient-to-b from-white to-stone-50/90 shadow-[0_32px_64px_-24px_rgba(28,25,23,0.18)] ring-1 ring-stone-200/80"
      role="img"
      aria-label="Example FitPilot insight report for a child named Leo, age 8"
    >
      <header className="border-b border-stone-200/80 bg-stone-50/80 px-6 py-5 sm:px-8 sm:py-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-500">
          {report.header.label}
        </p>
        <p className="mt-2 text-base font-medium text-stone-800 sm:text-lg">
          Child:{" "}
          <span className="font-semibold text-stone-900">{report.header.child}</span>
          <span className="mx-2 text-stone-300" aria-hidden>
            ·
          </span>
          Age {report.header.age}
          <span className="mx-2 text-stone-300" aria-hidden>
            ·
          </span>
          Discovery cycle: {report.header.cycle}
        </p>
      </header>

      <div className="grid gap-8 px-6 py-8 sm:px-8 lg:grid-cols-2 lg:gap-10 lg:py-10">
        <div>
          <SectionLabel>Interest Profile</SectionLabel>
          <ul className="mt-5 space-y-4">
            {report.interestProfile.map((row, index) => (
              <li
                key={row.id}
                className="flex gap-4 rounded-2xl bg-white p-4 ring-1 ring-stone-200/70"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-sm font-semibold text-emerald-800">
                  {row.rank}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-emerald-700">
                    {row.label}
                  </p>
                  <p className="mt-0.5 font-semibold text-stone-900">
                    {row.title}
                  </p>
                  <p className="mt-1 text-sm text-stone-500">{row.detail}</p>
                </div>
                <ScoreBadge score={row.score} emphasis={index === 0} />
              </li>
            ))}
          </ul>
        </div>

        <div>
          <SectionLabel>{report.rankingRationale.title}</SectionLabel>
          <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-stone-600">
            {report.rankingRationale.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2.5">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"
                  aria-hidden
                />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {report.rankingRationale.metrics.map((metric) => (
              <div
                key={metric.id}
                className="rounded-xl bg-white px-3 py-3 ring-1 ring-stone-200/70"
              >
                <p className="text-[10px] font-semibold uppercase tracking-wide text-stone-500">
                  {metric.label}
                </p>
                <p className="mt-1 text-sm font-semibold text-stone-900">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-emerald-100/80 bg-emerald-50/50 px-6 py-5 sm:px-8 sm:py-6">
        <SectionLabel>Suggested Direction</SectionLabel>
        <p className="mt-3 text-sm leading-relaxed text-stone-700 sm:text-base">
          {report.suggestedDirection}
        </p>
      </div>
    </div>
  );
}
