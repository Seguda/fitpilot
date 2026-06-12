/**
 * FitPilot brand assets and landing copy — /public/images only.
 */

export const BRAND_IMAGES = {
  discoveryCollage: {
    src: "/images/fitpilot-discovery-collage.png",
    alt: "Children exploring interests through guided experiences",
    width: 1672,
    height: 941,
  },
  parentConversation: {
    src: "/images/fitpilot-parent-conversation.png",
    alt: "A warm, personal conversation between a FitPilot guide and a parent",
  },
  insightProcess: {
    src: "/images/fitpilot-insight-process.png",
    alt: "FitPilot journey from discovery to understanding to growth",
  },
} as const;

export const TAGLINE =
  "Guided experiences and clear insight reports — to understand your child's interests, strengths, and growth.";

export const HERO_TRUST_LINE =
  "For parents who want more than \"they had fun\" — and want to know where their child may truly thrive.";

export const HOW_IT_WORKS_SECTION = {
  title: "How FitPilot Creates Clarity",
  subtitle:
    "Most parents see pieces of the puzzle. FitPilot helps connect them.",
} as const;

export const HOW_IT_WORKS_STEPS = [
  {
    id: "profile",
    icon: "profile" as const,
    title: "Create Your Child's Profile",
    description:
      "Parents sign up and share their child's age, interests, past activities, and goals. FitPilot uses this to personalize their discovery journey across sports, music, and art.",
  },
  {
    id: "explore",
    icon: "explore" as const,
    title: "Join Weekly Spark Sessions",
    description:
      "Each week, your child tries fun, hands-on activities designed to explore different sports, musical instruments, and art forms in a supportive environment.",
  },
  {
    id: "patterns",
    icon: "report" as const,
    title: "Receive a Growing SparkPath Report",
    description:
      "FitPilot combines observations into a clear, parent-friendly report highlighting:",
    highlights: [
      "Strongest interest areas",
      "Emerging strengths",
      "Confidence signals",
      "Recommended next steps",
      "Activities worth exploring further",
    ],
    closing:
      "Instead of isolated feedback, you receive a clearer picture of what may truly fit your child.",
  },
  {
    id: "report",
    icon: "report" as const,
    title: "Receive Your Insight Report",
    description:
      "Parents receive a clear report showing emerging interests, strengths, confidence signals, and suggested next steps.",
  },
  {
    id: "growth",
    icon: "growth" as const,
    title: "Continue Supporting Growth",
    description:
      "FitPilot helps families nurture interests with curated activity ideas, events, books, practice prompts, and future growth tracking.",
  },
] as const;

export const WHAT_YOU_RECEIVE_SUBTITLE =
  "Three deliverables focused on understanding your child — not filling a calendar.";

export const WHAT_YOU_RECEIVE = [
  {
    id: "profile",
    icon: "profile" as const,
    title: "Child Discovery Profile",
    description:
      "Age, personality, interests, and what your child has explored so far.",
  },
  {
    id: "report",
    icon: "report" as const,
    title: "FitPilot Insight Report",
    description:
      "Interest signals, strengths, confidence, and suggested direction — in plain language.",
  },
  {
    id: "next-steps",
    icon: "next" as const,
    title: "Next-Step Guidance",
    description:
      "What to continue, adjust, or explore next.",
  },
] as const;

export const REPORT_SECTION = {
  title: "See What FitPilot Reveals",
  subtitle:
    "A ranked snapshot of interests, strengths, confidence signals, and suggested next steps.",
  exampleLabel: "Example Insight Report",
} as const;

export const INSIGHT_REPORT_EXAMPLE = {
  header: {
    label: "FITPILOT INSIGHT REPORT · EXAMPLE",
    child: "Leo",
    age: 8,
    cycle: "Spring",
  },
  interestProfile: [
    {
      id: "strong",
      rank: 1,
      label: "Strong Interest",
      title: "Movement & Physical Challenges",
      detail: "High engagement · Coach: Nina",
      score: 93,
    },
    {
      id: "emerging",
      rank: 2,
      label: "Emerging Interest",
      title: "Confidence & Discipline",
      detail: "Building confidence · Coach: Diego",
      score: 84,
    },
    {
      id: "explore",
      rank: 3,
      label: "Explore Later",
      title: "Music & Creative Rhythm",
      detail: "Quiet engagement · Coach: Aria",
      score: 71,
    },
  ],
  rankingRationale: {
    title: "WHY MOVEMENT RANKED HIGHEST",
    bullets: [
      "High engagement during warm-up, instruction, and free practice",
      "Strong coachability — responded quickly to feedback and corrections",
      "Positive confidence signals during structured movement",
      "Comfortable participating in a group environment",
    ],
    metrics: [
      { id: "engagement", label: "Engagement", value: "93 / 100" },
      {
        id: "confidence",
        label: "Confidence",
        value: "Strong growth signal",
      },
      { id: "clarity", label: "Parent clarity", value: "Clear direction" },
    ],
  },
  suggestedDirection:
    "Continue exploring movement-based activities for 2–3 months while monitoring confidence and consistency. Keep confidence-building activities as a strong secondary path.",
} as const;

export const DIFFERENTIATION_SECTION = {
  title: "The Problem Isn't Finding Activities",
  lead: "Most families already have access to activities.",
  subtitle:
    "The challenge is knowing which experiences truly fit, where confidence is growing, and what deserves more attention over time.",
} as const;

export const DIFFERENTIATION_CARDS = [
  {
    id: "options",
    headline: "Not just more options",
    body: "Most tools help you browse. FitPilot helps you understand what may truly fit your child.",
  },
  {
    id: "feedback",
    headline: "Not just quick feedback",
    body: "Instead of scattered comments, observations become insight you can actually use.",
  },
  {
    id: "growth",
    headline: "Not just a one-time choice",
    body: "Discovery is just the beginning. Growth becomes clearer over time.",
  },
] as const;

export const PILOT_SECTION = {
  title: "Join the First 25 Families",
  subtitle:
    "A limited local pilot in Natick & MetroWest for parents who want real clarity — not guesswork.",
  urgency:
    "Spots are limited so we can work closely with each family.",
  benefitsLabel: "What happens when you join",
} as const;

export const PILOT_BENEFITS = [
  "15-minute onboarding conversation",
  "4–6 week guided discovery",
  "Insight Report with a personal walkthrough",
  "Optional feedback session after delivery",
] as const;

export const FOUNDER_NOTE = {
  title: "Built locally, with families in mind",
  copy: "FitPilot is starting as a small local pilot in Natick & MetroWest. We're learning directly from families before scaling the product.",
} as const;

export const FINAL_CTA = {
  title: "Ready to Understand Your Child Better?",
  subtitle:
    "Join the Natick & MetroWest pilot. Request early access — we'll reply within 1–2 business days.",
} as const;

export const PRIMARY_CTA = "Pre-register";
export const SECONDARY_CTA = "See Sample Report";
