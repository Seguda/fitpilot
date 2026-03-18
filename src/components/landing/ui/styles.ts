/**
 * Shared Tailwind class strings for consistency and maintainability.
 * Use for buttons, inputs, cards, and focus states.
 */

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white";

export const styles = {
  /** Primary CTA: emerald, full width on mobile */
  btnPrimary: [
    "inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600",
    "sm:w-auto",
    focusRing,
  ].join(" "),

  /** Primary CTA larger (e.g. final CTA block) */
  btnPrimaryLg: [
    "min-h-[48px] w-full rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600",
    "sm:w-auto sm:min-w-[180px]",
    focusRing,
  ].join(" "),

  /** Secondary CTA: outline */
  btnSecondary: [
    "min-h-[44px] rounded-full border border-neutral-200 bg-white px-4 py-2.5 text-sm font-medium text-neutral-700 transition hover:border-neutral-300 hover:bg-neutral-50 sm:min-h-0",
    focusRing,
  ].join(" "),

  /** Secondary CTA larger */
  btnSecondaryLg: [
    "min-h-[48px] w-full rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-medium text-neutral-700 transition hover:border-neutral-300 hover:bg-neutral-50 sm:w-auto",
    focusRing,
  ].join(" "),

  /** Studio/dark CTA */
  btnDark: [
    "inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-black sm:w-auto",
    focusRing,
  ].join(" "),

  /** Form input base */
  input: [
    "w-full min-h-[44px] rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400",
    "sm:min-h-0",
    focusRing.replace("ring-offset-white", "ring-offset-neutral-50"),
  ].join(" "),

  /** Form label */
  label: "text-xs font-medium text-neutral-700",

  /** Card: rounded, border, shadow */
  card: "rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm",

  /** Card with alternate background */
  cardAlt: "rounded-2xl border border-neutral-200 bg-neutral-50 p-4 shadow-sm",

  /** Section eyebrow text */
  eyebrow:
    "text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700",

  /** Accent card (emerald tint) */
  cardAccent: "rounded-2xl border border-emerald-100 bg-emerald-50 p-4",
} as const;
