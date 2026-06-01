/**
 * Section IDs used for smooth scrolling and anchor links.
 * Use these constants everywhere to keep IDs consistent.
 */
export const SECTION_IDS = {
  HERO: "hero",
  EXPLORE: "explore-interests",
  PROBLEM: "problem",
  WHY_DIY: "why-diy",
  SOLUTION: "solution",
  BENEFITS: "benefits",
  GROWTH: "growth",
  REPORT: "report",
  SOCIAL_PROOF: "social-proof",
  LEAD: "lead",
  PRICING: "pricing",
  STUDIOS: "studios",
  LOCAL: "local",
  FAQ: "faq",
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];

export interface NavItem {
  id: SectionId;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: SECTION_IDS.SOLUTION, label: "How It Works" },
  { id: SECTION_IDS.GROWTH, label: "Growth" },
  { id: SECTION_IDS.PRICING, label: "Pricing" },
  { id: SECTION_IDS.FAQ, label: "FAQ" },
];

export const FOOTER_LINKS: NavItem[] = [
  { id: SECTION_IDS.SOLUTION, label: "How It Works" },
  { id: SECTION_IDS.GROWTH, label: "Growth" },
  { id: SECTION_IDS.PRICING, label: "Pricing" },
  { id: SECTION_IDS.FAQ, label: "FAQ" },
];

export interface FAQItem {
  q: string;
  a: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    q: "Can't I book trials myself?",
    a: "Yes — FitPilot adds structure, comparisons, and a clear recommendation.",
  },
  {
    q: "Are trials free?",
    a: "Studio fees vary. FitPilot covers the decision cycle and report.",
  },
  {
    q: "What ages?",
    a: "Ages 5–12 for the current pilot.",
  },
  {
    q: "How many activities?",
    a: "Three guided trials per cycle.",
  },
  {
    q: "Available everywhere?",
    a: "Pilot only — Natick & MetroWest for now.",
  },
];

export interface ProblemCard {
  title: string;
  description: string;
}

export const PROBLEM_CARDS: ProblemCard[] = [
  {
    title: "Was that class actually a good fit?",
    description:
      "You see your child smiling (or not), but it's hard to know how they responded compared to peers, or whether the coach saw something you didn't.",
  },
  {
    title: "Should we keep going or try something else?",
    description:
      'Stopping too soon can feel like "quitting", but staying too long in the wrong activity can chip away at confidence.',
  },
  {
    title: "Are we wasting time and money?",
    description:
      'Between registration fees, uniforms, and evenings in traffic, the cost of "let\'s just try it" adds up quickly.',
  },
  {
    title: 'Every instructor says "they did great" — but what does that mean?',
    description:
      "Coaches want to be encouraging, but hallway comments rarely include specific, structured feedback you can actually make decisions with.",
  },
];

export interface ComparisonItem {
  text: string;
}

export interface ComparisonColumn {
  title: string;
  items: ComparisonItem[];
}

export const WHY_DIY_COMPARISON: { left: ComparisonColumn; right: ComparisonColumn } = {
  left: {
    title: "On your own",
    items: [
      { text: "Random trials" },
      { text: "Vague feedback" },
      { text: "Gut decisions" },
    ],
  },
  right: {
    title: "With FitPilot",
    items: [
      { text: "Structured trials" },
      { text: "Clear comparisons" },
      { text: "One recommendation" },
    ],
  },
};

export interface Testimonial {
  id: string;
  quote: string;
  attribution: string;
}

export const TESTIMONIALS_EARLY: Testimonial[] = [
  {
    id: "natick-1",
    quote: "Would've saved us months.",
    attribution: "Parent, Natick",
  },
  {
    id: "metrowest-1",
    quote: "Structured feedback changes everything.",
    attribution: "Parent, MetroWest",
  },
  {
    id: "metrowest-2",
    quote: "Side-by-side made the choice clear.",
    attribution: "Parent, Wellesley",
  },
];

export const PREFERRED_ACTIVITIES = [
  "Gymnastics",
  "Martial Arts",
  "Dance",
  "Music",
] as const;

export const CONTACT_EMAIL = "hello@fitpilot.com";
export const SERVICE_AREA = "Serving Natick & MetroWest";
