/**
 * Section IDs used for smooth scrolling and anchor links.
 */
export const SECTION_IDS = {
  HERO: "hero",
  PROBLEM: "problem",
  SOLUTION: "solution",
  DELIVERABLES: "deliverables",
  REPORT: "report",
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
  { id: SECTION_IDS.DELIVERABLES, label: "What You Get" },
];

export const FOOTER_LINKS: NavItem[] = [
  { id: SECTION_IDS.SOLUTION, label: "How It Works" },
  { id: SECTION_IDS.DELIVERABLES, label: "What You Get" },
  { id: SECTION_IDS.LEAD, label: "Pre-register" },
];

export interface FAQItem {
  q: string;
  a: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    q: "What is FitPilot?",
    a: "A child discovery platform — guided experiences and a clear Insight Report, not a class directory.",
  },
  {
    q: "Is this an activity marketplace?",
    a: "No. We help families understand what fits their child and why — we don't sell or book classes.",
  },
  {
    q: "What do I receive?",
    a: "A discovery profile, guided experience plan, Insight Report, and next-step guidance.",
  },
  {
    q: "Is Growth Tracking available now?",
    a: "Not yet. The pilot focuses on discovery and your first Insight Report. Growth Tracking comes later as an optional add-on.",
  },
  {
    q: "Do I need to pay now?",
    a: "No. We're inviting early pilot families and learning what matters most before setting pricing.",
  },
  {
    q: "Who is this for?",
    a: "Families with children ages 5–12 in Natick & MetroWest who want clarity on interests, strengths, and growth.",
  },
];

export const CONTACT_EMAIL = "hello@fitpilot.com";
export const SERVICE_AREA = "Pilot · Natick & MetroWest";
