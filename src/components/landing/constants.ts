/**
 * Section IDs used for smooth scrolling and anchor links.
 */
export const SECTION_IDS = {
  HERO: "hero",
  PROBLEM: "problem",
  SOLUTION: "solution",
  REPORT: "report",
  GROWTH: "growth",
  WHY_PARENTS: "why-parents",
  LEAD: "lead",
  PRICING: "pricing",
  FAQ: "faq",
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];

export interface NavItem {
  id: SectionId;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: SECTION_IDS.SOLUTION, label: "How It Works" },
  { id: SECTION_IDS.REPORT, label: "Insights" },
  { id: SECTION_IDS.GROWTH, label: "Growth" },
  { id: SECTION_IDS.LEAD, label: "Pilot" },
];

export const FOOTER_LINKS: NavItem[] = [
  { id: SECTION_IDS.SOLUTION, label: "How It Works" },
  { id: SECTION_IDS.REPORT, label: "Insights" },
  { id: SECTION_IDS.LEAD, label: "Early Access" },
];

export interface FAQItem {
  q: string;
  a: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    q: "What is FitPilot?",
    a: "A child discovery and growth platform — meaningful insights, not guesswork.",
  },
  {
    q: "Who is it for?",
    a: "Families with children ages 5–12 in our Natick & MetroWest pilot.",
  },
  {
    q: "What do I receive?",
    a: "A Child Insight Summary with interest signals, strengths, and suggested direction.",
  },
  {
    q: "Is Growth Tracking available now?",
    a: "Coming soon — monthly insights on confidence, engagement, and evolving interests.",
  },
  {
    q: "How do I join?",
    a: "Request early access — we're welcoming a small pilot group now.",
  },
];

export const CONTACT_EMAIL = "hello@fitpilot.com";
export const SERVICE_AREA = "Pilot · Natick & MetroWest";
