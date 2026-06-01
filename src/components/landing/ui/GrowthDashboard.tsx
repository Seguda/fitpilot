const TRACK_METRICS = [
  "confidence",
  "consistency",
  "excitement",
  "growth",
] as const;

const CONFIDENCE_ITEMS = [
  { label: "Gymnastics", value: 88, color: "bg-emerald-500" },
  { label: "Music", value: 72, color: "bg-emerald-400" },
  { label: "Art", value: 65, color: "bg-teal-400" },
] as const;

const ENGAGEMENT_WEEKS = [
  { label: "W1", level: 0.45 },
  { label: "W2", level: 0.55 },
  { label: "W3", level: 0.5 },
  { label: "W4", level: 0.7 },
  { label: "W5", level: 0.75 },
  { label: "W6", level: 0.85 },
  { label: "W7", level: 0.9 },
  { label: "W8", level: 0.95 },
] as const;

const INTEREST_NODES = [
  { label: "Gymnastics", size: "lg", x: "18%", y: "28%" },
  { label: "Music", size: "md", x: "58%", y: "22%" },
  { label: "Dance", size: "sm", x: "78%", y: "52%" },
  { label: "Art", size: "md", x: "32%", y: "62%" },
  { label: "Martial arts", size: "sm", x: "68%", y: "72%" },
] as const;

const sizeClasses = {
  sm: "h-14 w-14 text-[10px]",
  md: "h-[4.5rem] w-[4.5rem] text-[11px]",
  lg: "h-24 w-24 text-xs",
} as const;

function WindowChrome() {
  return (
    <div className="flex items-center gap-2 border-b border-stone-100 pb-4">
      <span className="h-2.5 w-2.5 rounded-full bg-stone-300" />
      <span className="h-2.5 w-2.5 rounded-full bg-stone-200" />
      <span className="h-2.5 w-2.5 rounded-full bg-stone-200" />
      <span className="ml-3 text-xs font-medium text-stone-400">
        FitPilot · Growth
      </span>
      <span className="ml-auto rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-700">
        Live
      </span>
    </div>
  );
}

function ProgressTrendChart() {
  const points =
    "M0,72 L40,68 L80,58 L120,52 L160,42 L200,32 L240,22 L280,12";
  const area = `${points} L280,100 L0,100 Z`;

  return (
    <div className="rounded-2xl bg-gradient-to-br from-stone-50 to-emerald-50/40 p-4 ring-1 ring-stone-100">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-stone-500">
        Progress trend
      </p>
      <svg
        viewBox="0 0 280 100"
        className="mt-3 h-auto w-full"
        role="img"
        aria-label="Upward progress trend over eight weeks"
      >
        <defs>
          <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgb(16 185 129)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="rgb(16 185 129)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[25, 50, 75].map((y) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2="280"
            y2={y}
            className="stroke-stone-200/80"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        ))}
        <path d={area} fill="url(#trendFill)" />
        <path
          d={points}
          fill="none"
          className="stroke-emerald-600"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {[0, 40, 80, 120, 160, 200, 240, 280].map((x, i) => (
          <circle
            key={x}
            cx={x}
            cy={[72, 68, 58, 52, 42, 32, 22, 12][i]}
            r="3.5"
            className="fill-white stroke-emerald-600"
            strokeWidth="2"
          />
        ))}
      </svg>
    </div>
  );
}

function ConfidenceIndicators() {
  return (
    <div className="rounded-2xl bg-white p-4 ring-1 ring-stone-100">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-stone-500">
        Confidence
      </p>
      <ul className="mt-4 space-y-3">
        {CONFIDENCE_ITEMS.map((item) => (
          <li key={item.label}>
            <div className="flex items-center justify-between gap-2 text-xs">
              <span className="font-medium text-stone-700">{item.label}</span>
              <span className="tabular-nums text-stone-500">{item.value}%</span>
            </div>
            <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-stone-100">
              <div
                className={`h-full rounded-full ${item.color} transition-all`}
                style={{ width: `${item.value}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function EngagementTimeline() {
  return (
    <div className="rounded-2xl bg-white p-4 ring-1 ring-stone-100">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-stone-500">
        Engagement
      </p>
      <div className="mt-4 flex items-end justify-between gap-1">
        {ENGAGEMENT_WEEKS.map((week) => (
          <div
            key={week.label}
            className="flex flex-1 flex-col items-center gap-1.5"
          >
            <div
              className="w-full max-w-[1.25rem] rounded-full bg-gradient-to-t from-emerald-600 to-emerald-400/80"
              style={{ height: `${week.level * 3.5 + 0.75}rem` }}
            />
            <span className="text-[9px] font-medium text-stone-400">
              {week.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function InterestMap() {
  return (
    <div className="relative min-h-[200px] overflow-hidden rounded-2xl bg-gradient-to-br from-stone-50 via-white to-emerald-50/50 p-4 ring-1 ring-stone-100 sm:min-h-[220px]">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-stone-500">
        Interest map
      </p>
      <div className="relative mt-2 h-[168px] sm:h-[180px]">
        <svg
          className="absolute inset-0 h-full w-full opacity-40"
          aria-hidden
        >
          <line
            x1="20%"
            y1="35%"
            x2="55%"
            y2="28%"
            className="stroke-emerald-300"
            strokeWidth="1"
          />
          <line
            x1="55%"
            y1="28%"
            x2="75%"
            y2="55%"
            className="stroke-emerald-300"
            strokeWidth="1"
          />
          <line
            x1="35%"
            y1="65%"
            x2="55%"
            y2="28%"
            className="stroke-emerald-200"
            strokeWidth="1"
          />
          <line
            x1="35%"
            y1="65%"
            x2="70%"
            y2="75%"
            className="stroke-emerald-200"
            strokeWidth="1"
          />
        </svg>
        {INTEREST_NODES.map((node) => (
          <div
            key={node.label}
            className={`absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-center font-semibold leading-tight text-stone-700 shadow-md ring-2 ring-emerald-100/90 ${sizeClasses[node.size]}`}
            style={{ left: node.x, top: node.y }}
          >
            <span className="max-w-[90%] px-1">{node.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function GrowthDashboardMockup() {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute -inset-4 rounded-[2.25rem] bg-gradient-to-br from-emerald-100/50 via-transparent to-amber-50/40 blur-2xl sm:-inset-8"
        aria-hidden
      />
      <div className="relative overflow-hidden rounded-[1.75rem] bg-white p-5 shadow-[0_32px_64px_-24px_rgba(28,25,23,0.18)] ring-1 ring-stone-200/90 sm:p-6 lg:p-8">
        <WindowChrome />
        <div className="mt-5 grid gap-4 sm:gap-5 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ProgressTrendChart />
          </div>
          <div className="lg:col-span-5">
            <ConfidenceIndicators />
          </div>
          <div className="lg:col-span-5">
            <EngagementTimeline />
          </div>
          <div className="lg:col-span-7">
            <InterestMap />
          </div>
        </div>
      </div>
    </div>
  );
}

export function GrowthTrackPills() {
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {TRACK_METRICS.map((metric) => (
        <li
          key={metric}
          className="rounded-full bg-white px-4 py-2 text-sm font-medium capitalize text-stone-700 ring-1 ring-stone-200/90 shadow-sm"
        >
          {metric}
        </li>
      ))}
    </ul>
  );
}
