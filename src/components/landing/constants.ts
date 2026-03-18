/**
 * Section IDs used for smooth scrolling and anchor links.
 * Use these constants everywhere to keep IDs consistent.
 */
export const SECTION_IDS = {
  HERO: "hero",
  PROBLEM: "problem",
  WHY_DIY: "why-diy",
  SOLUTION: "solution",
  BENEFITS: "benefits",
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
  { id: SECTION_IDS.REPORT, label: "Sample Report" },
  { id: SECTION_IDS.PRICING, label: "Pricing" },
  { id: SECTION_IDS.STUDIOS, label: "For Studios" },
  { id: SECTION_IDS.FAQ, label: "FAQ" },
];

export const FOOTER_LINKS: NavItem[] = [
  { id: SECTION_IDS.SOLUTION, label: "How It Works" },
  { id: SECTION_IDS.PRICING, label: "Pricing" },
  { id: SECTION_IDS.STUDIOS, label: "For Studios" },
  { id: SECTION_IDS.FAQ, label: "FAQ" },
];

export interface FAQItem {
  q: string;
  a: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    q: "Can't I just book trial classes myself?",
    a: "Yes. FitPilot is built for what comes after scheduling: consistent feedback, side-by-side comparisons, and a clear recommendation based on patterns—not memory.",
  },
  {
    q: "Are the trial classes free?",
    a: "It depends on the studio. FitPilot covers the decision cycle (structure, evaluations, and the recommendation report). Any studio trial fees are handled directly with the studio.",
  },
  {
    q: "What age range is this for?",
    a: "The current pilot is designed for children roughly 5–12 years old—old enough to participate in group classes and share basic reflections, but still early in their activity journeys.",
  },
  {
    q: "How many activities can we try?",
    a: "The standard FitPilot decision cycle includes three trial experiences—usually enough to see a pattern without overloading your schedule.",
  },
  {
    q: "Is this available everywhere?",
    a: "Not yet. We’re starting in Natick and the broader MetroWest area with a small pilot. If you’re elsewhere, share your location so we know where to expand next.",
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
    title: "Without FitPilot",
    items: [
      { text: "Random trial classes with no structure" },
      { text: "Vague feedback like “they did great”" },
      { text: "Hard to compare different activities" },
      { text: "Decisions based on gut feeling" },
      { text: "Risk of wasted time and money" },
    ],
  },
  right: {
    title: "With FitPilot",
    items: [
      { text: "Structured evaluation after each class" },
      { text: "Clear, comparable feedback" },
      { text: "Side-by-side activity comparison" },
      { text: "A single, confident recommendation" },
      { text: "Less trial-and-error" },
    ],
  },
};

export interface Testimonial {
  quote: string;
  attribution: string;
}

export const TESTIMONIALS_EARLY: Testimonial[] = [
  {
    quote:
      "This would have saved us months of trial and error.",
    attribution: "Parent, Natick",
  },
  {
    quote:
      "Structured feedback would make decisions much easier.",
    attribution: "Parent, MetroWest",
  },
  {
    quote:
      "Side-by-side comparison would make the choice feel much clearer.",
    attribution: "Parent, MetroWest",
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
