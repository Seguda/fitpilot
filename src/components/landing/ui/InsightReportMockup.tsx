const traits = [
  { label: "Curiosity", score: 92, width: "92%" },
  { label: "Confidence", score: 78, width: "78%" },
  { label: "Engagement", score: 85, width: "85%" },
];

const activities = [
  { name: "Creative movement", fit: 93, rank: 1 },
  { name: "Music & rhythm", fit: 81, rank: 2 },
  { name: "Team play", fit: 74, rank: 3 },
];

export function InsightReportMockup() {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-emerald-100/40 via-transparent to-stone-100/60 blur-2xl sm:-inset-6"
        aria-hidden
      />
      <div className="relative overflow-hidden rounded-[1.75rem] bg-white shadow-[0_32px_64px_-24px_rgba(28,25,23,0.15)] ring-1 ring-stone-200/90">
        <div className="flex items-center gap-2 border-b border-stone-100 px-5 py-4 sm:px-6">
          <span className="h-2.5 w-2.5 rounded-full bg-stone-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-stone-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-stone-200" />
          <span className="ml-2 text-xs font-medium text-stone-400">
            FitPilot · Insight Report
          </span>
        </div>

        <div className="space-y-6 p-5 sm:p-6 lg:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-emerald-700">
                Child profile
              </p>
              <p className="mt-1 text-lg font-semibold text-stone-900">
                Alex · Age 8
              </p>
              <p className="mt-0.5 text-sm text-stone-500">
                3 experiences · Cycle complete
              </p>
            </div>
            <div className="rounded-2xl bg-emerald-50 px-4 py-3 text-center ring-1 ring-emerald-100">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-emerald-700">
                Top fit
              </p>
              <p className="mt-0.5 text-2xl font-semibold tabular-nums text-emerald-800">
                93
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-stone-50 p-4 ring-1 ring-stone-100">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-stone-500">
              Strength signals
            </p>
            <ul className="mt-4 space-y-3">
              {traits.map((trait) => (
                <li key={trait.label}>
                  <div className="flex justify-between text-xs">
                    <span className="font-medium text-stone-700">{trait.label}</span>
                    <span className="tabular-nums text-stone-500">{trait.score}</span>
                  </div>
                  <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400"
                      style={{ width: trait.width }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-stone-500">
              Ranked recommendations
            </p>
            <ul className="mt-3 space-y-2">
              {activities.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center justify-between rounded-xl bg-white px-4 py-3 ring-1 ring-stone-100"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-xs font-semibold text-emerald-700">
                      {item.rank}
                    </span>
                    <span className="text-sm font-medium text-stone-800">
                      {item.name}
                    </span>
                  </div>
                  <span className="text-sm tabular-nums text-stone-500">
                    {item.fit}/100
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-emerald-800">
              FitPilot recommendation
            </p>
            <p className="mt-2 text-sm leading-relaxed text-stone-700">
              Start with creative movement — strongest engagement, confidence
              growth, and consistent joy across trials.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
