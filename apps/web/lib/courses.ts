export type CourseSummary = {
  slug: string;
  title: string;
  level: string;
  summary: string;
};

export const COURSES: CourseSummary[] = [
  {
    slug: "noorani-qaida",
    title: "Noorani Qaida",
    level: "Beginners",
    summary:
      "First steps in Arabic letters, sounds, and joining words — suited to children starting Quran reading.",
  },
  {
    slug: "nazra-quran",
    title: "Nazra Quran",
    level: "Readers",
    summary:
      "Live reading of the Quran with attention to fluency and correct pronunciation.",
  },
  {
    slug: "hifz-ul-quran",
    title: "Hifz-ul-Quran",
    level: "Memorisation",
    summary:
      "A structured memorisation path, with revision recorded by the teacher — not auto-marked.",
  },
  {
    slug: "tajweed",
    title: "Basic Tajweed",
    level: "Pronunciation",
    summary:
      "Core tajweed rules taught at a pace that is clear and suitable for children.",
  },
  {
    slug: "quran-revision",
    title: "Quran revision",
    level: "Revision",
    summary:
      "Regular revision classes to strengthen what a child has already read or memorised.",
  },
  {
    slug: "islamic-learning",
    title: "Islamic learning for children",
    level: "Where appropriate",
    summary:
      "Age-appropriate Islamic learning, offered when it fits the child and family.",
  },
];
