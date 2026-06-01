/**
 * Shared Tailwind class strings for consistency and maintainability.
 */

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fafaf9]";

export const styles = {
  btnPrimary: [
    "inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-emerald-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700",
    "sm:w-auto",
    focusRing,
  ].join(" "),

  btnPrimaryLg: [
    "min-h-[52px] w-full rounded-full bg-emerald-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-700",
    "sm:w-auto sm:min-w-[200px]",
    focusRing,
  ].join(" "),

  btnSecondary: [
    "min-h-[48px] rounded-full border border-stone-200 bg-white px-6 py-3 text-sm font-medium text-stone-700 transition hover:border-stone-300 hover:bg-stone-50 sm:min-h-0",
    focusRing,
  ].join(" "),

  btnSecondaryLg: [
    "min-h-[52px] w-full rounded-full border border-stone-200 bg-white px-8 py-3.5 text-sm font-medium text-stone-700 transition hover:border-stone-300 hover:bg-stone-50 sm:w-auto",
    focusRing,
  ].join(" "),

  btnDark: [
    "inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-stone-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-stone-800 sm:w-auto",
    focusRing,
  ].join(" "),

  input: [
    "mt-1.5 w-full min-h-[48px] rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400",
    focusRing,
  ].join(" "),

  label: "text-sm font-medium text-stone-700",

  card: "rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm",

  cardAlt: "rounded-2xl border border-stone-200/80 bg-stone-50 p-6 shadow-sm",

  eyebrow:
    "text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700",

  cardAccent: "rounded-2xl border border-emerald-100 bg-emerald-50/80 p-6",
} as const;
