/**
 * Storytelling imagery — each major section uses a unique visual theme.
 * FitPilot helps parents understand interests, strengths, and growth — not book activities.
 * Replace Unsplash IDs with your own photography when ready.
 */

export type StoryKey =
  | "heroExplore1"
  | "heroExplore2"
  | "heroExplore3"
  | "heroExplore4"
  | "parentUncertainty"
  | "growthJourney"
  | "finalPossibility";

export type ExploreKey =
  | "sportsMovement"
  | "musicCreativity"
  | "confidenceDiscipline"
  | "teamActivities"
  | "artisticExpression";

interface StoryPhoto {
  id: string;
  alt: string;
}

/** Section-specific editorial photos — no reuse across major sections */
export const STORY_IMAGES: Record<StoryKey, StoryPhoto> = {
  heroExplore1: {
    id: "photo-1503454537195-1dcabb73ffb9",
    alt: "Child exploring outdoors with curiosity and wonder",
  },
  heroExplore2: {
    id: "photo-1503676260728-1c00da094a0b",
    alt: "Child engaged and curious while trying something new",
  },
  heroExplore3: {
    id: "photo-1714637528142-4b24bb0e8365",
    alt: "Child thoughtfully choosing a path forward",
  },
  heroExplore4: {
    id: "photo-1516627145497-ae6968895b74",
    alt: "Child absorbed in creative play and discovery",
  },
  parentUncertainty: {
    id: "photo-1600880292203-757bb62b4baf",
    alt: "Parent and child talking after an activity, reflecting together",
  },
  growthJourney: {
    id: "photo-1508804185872-d7badad00f7d",
    alt: "Adult supporting a child through a learning moment",
  },
  finalPossibility: {
    id: "photo-1544005313-94ddf0286df2",
    alt: "Parent and child sharing a warm, confident moment together",
  },
};

/** Explore grid only — shows variety of paths, not FitPilot's core product */
export const EXPLORE_IMAGES: Record<ExploreKey, StoryPhoto> = {
  sportsMovement: {
    id: "photo-1727212116110-18ae3fd78c6c",
    alt: "Child climbing and moving with playful confidence",
  },
  musicCreativity: {
    id: "photo-1523240795612-9a054b0db644",
    alt: "Child focused and enjoying a music lesson",
  },
  confidenceDiscipline: {
    id: "photo-1544776193-352d25ca82cd",
    alt: "Child learning with mentor guidance in a martial arts class",
  },
  teamActivities: {
    id: "photo-1509062522246-3755977927d7",
    alt: "Small group of children collaborating in class",
  },
  artisticExpression: {
    id: "photo-1587654780291-39c9404d746b",
    alt: "Children painting and expressing creativity",
  },
};

export function storySrc(key: StoryKey, width = 1200, quality = 85): string {
  const { id } = STORY_IMAGES[key];
  return `https://images.unsplash.com/${id}?w=${width}&q=${quality}&auto=format&fit=crop`;
}

export function exploreSrc(key: ExploreKey, width = 1200, quality = 85): string {
  const { id } = EXPLORE_IMAGES[key];
  return `https://images.unsplash.com/${id}?w=${width}&q=${quality}&auto=format&fit=crop`;
}

/** Hero — possibility collage, not single-activity focus */
export const HERO_COLLAGE = [
  {
    id: "possibility-1",
    src: storySrc("heroExplore1", 900),
    alt: STORY_IMAGES.heroExplore1.alt,
  },
  {
    id: "possibility-2",
    src: storySrc("heroExplore2", 900),
    alt: STORY_IMAGES.heroExplore2.alt,
  },
  {
    id: "possibility-3",
    src: storySrc("heroExplore3", 900),
    alt: STORY_IMAGES.heroExplore3.alt,
  },
  {
    id: "possibility-4",
    src: storySrc("heroExplore4", 900),
    alt: STORY_IMAGES.heroExplore4.alt,
  },
] as const;

export const HOW_IT_WORKS_STEPS = [
  { id: "discover", title: "Discover", tagline: "Explore possibilities" },
  { id: "understand", title: "Understand", tagline: "See what fits" },
  { id: "grow", title: "Grow", tagline: "Track strengths" },
  { id: "support", title: "Support", tagline: "Choose clearly" },
] as const;

/** Five interest paths — unique image per category */
export const EXPLORE_INTERESTS = [
  {
    id: "sports-movement",
    label: "Sports & Movement",
    src: exploreSrc("sportsMovement", 1200),
    alt: EXPLORE_IMAGES.sportsMovement.alt,
    gridClass: "sm:col-span-2 lg:col-span-2 lg:row-span-2",
  },
  {
    id: "music-creativity",
    label: "Music & Creativity",
    src: exploreSrc("musicCreativity", 1200),
    alt: EXPLORE_IMAGES.musicCreativity.alt,
    gridClass: "lg:col-start-3 lg:row-start-1",
  },
  {
    id: "confidence-discipline",
    label: "Confidence & Discipline",
    src: exploreSrc("confidenceDiscipline", 1200),
    alt: EXPLORE_IMAGES.confidenceDiscipline.alt,
    gridClass: "lg:col-start-4 lg:row-start-1",
  },
  {
    id: "team-activities",
    label: "Team Activities",
    src: exploreSrc("teamActivities", 1200),
    alt: EXPLORE_IMAGES.teamActivities.alt,
    gridClass: "lg:col-start-3 lg:row-start-2",
  },
  {
    id: "artistic-expression",
    label: "Artistic Expression",
    src: exploreSrc("artisticExpression", 1200),
    alt: EXPLORE_IMAGES.artisticExpression.alt,
    gridClass: "lg:col-start-4 lg:row-start-2",
  },
] as const;

export const BENEFITS = [
  "3 guided trials",
  "Clear feedback",
  "Side-by-side view",
  "One recommendation",
] as const;
