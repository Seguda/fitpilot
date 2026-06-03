/**
 * FitPilot brand assets and landing copy — /public/images only.
 */

export const BRAND_IMAGES = {
  discoveryCollage: {
    src: "/images/fitpilot-discovery-collage.png",
    alt: "Children exploring interests through meaningful experiences",
    width: 1672,
    height: 941,
  },
  parentConversation: {
    src: "/images/fitpilot-parent-conversation.png",
    alt: "Parent and child reflecting together",
  },
  insightProcess: {
    src: "/images/fitpilot-insight-process.png",
    alt: "FitPilot journey from discovery to understanding to growth",
  },
  growthDashboard: {
    src: "/images/fitpilot-growth-dashboard.png",
    alt: "FitPilot growth tracking dashboard",
  },
} as const;

export const HOW_IT_WORKS_STEPS = [
  {
    id: "discover",
    title: "Discover",
    description:
      "Explore meaningful experiences aligned with your child's interests.",
  },
  {
    id: "understand",
    title: "Understand",
    description:
      "Combine structured observations with parent perspectives.",
  },
  {
    id: "grow",
    title: "Grow",
    description:
      "Track confidence, engagement, and evolving interests over time.",
  },
] as const;

export const INSIGHT_HIGHLIGHTS = [
  "Interest Signals",
  "Strength Areas",
  "Confidence Indicators",
  "Suggested Direction",
] as const;

export const SAMPLE_INSIGHT_SUMMARY = {
  title: "Child Insight Summary",
  strongInterests: [
    "Movement & Physical Challenges",
    "Structured Learning",
    "Group Activities",
  ],
  emergingStrengths: ["Coachability", "Persistence", "Confidence"],
  suggestedNextStep:
    "Continue developing movement-based activities while monitoring confidence growth.",
} as const;

export const GROWTH_FEATURES = [
  "Engagement",
  "Confidence",
  "Consistency",
  "Evolving Interests",
] as const;

export const WHY_PARENTS_CARDS = [
  {
    id: "understand",
    title: "Understand",
    description: "See beyond quick impressions and hallway conversations.",
  },
  {
    id: "support",
    title: "Support",
    description: "Make confident decisions based on meaningful insight.",
  },
  {
    id: "grow",
    title: "Grow",
    description: "Follow your child's development over time.",
  },
] as const;
