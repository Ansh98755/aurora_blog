export type Insight = {
  id: string;
  title: string;
  summary: string;
  content: string;
};

export type Post = {
  id: string;
  title: string;
  slug: string;
  category: string;
  readingTime: string;
  publishedAt: string;
  coverImage: string;
  gradientFrom: string;
  gradientTo: string;
  brief: string;
  summary: string;
  content: string;
  featured?: boolean;
  insights?: Insight[];
};

export const categories = [
  "All",
  "Design",
  "Frontend",
  "Productivity",
  "Inspiration",
] as const;

const basePosts: Post[] = [
  {
    id: "1",
    title: "Designing Interfaces That Feel Alive",
    slug: "designing-interfaces-that-feel-alive",
    category: "Design",
    readingTime: "8 min read",
    publishedAt: "Jan 12, 2026",
    coverImage: "/globe.svg",
    gradientFrom: "from-fuchsia-500",
    gradientTo: "to-sky-400",
    brief:
      "A quick look at how motion, depth, and light can transform a flat layout into a living interface.",
    summary:
      "We explore modern motion principles, how to choreograph animations across your UI, and why subtle transitions often feel more premium than loud ones. Learn how to use gradients, blur, and parallax to guide the eye instead of distracting it.",
    content:
      "In a world saturated with digital products, motion is no longer a novelty—it's a language. The most engaging interfaces don't shout; they breathe. They respond with just enough motion to make every interaction feel intentional.\n\nWe start by breaking motion down into three layers: micro‑interactions, layout transitions, and narrative motion. Micro‑interactions are tiny responses to taps, hovers, and scroll events. Layout transitions help users understand where elements go when the screen changes. Narrative motion stitches entire journeys together, like moving from a landing page into a focused reading mode.\n\nThe key is restraint. Great motion design rarely calls attention to itself—it quietly directs attention, reinforces hierarchy, and makes complex flows feel effortless.",
    featured: true,
    insights: [
      {
        id: "layers-of-motion",
        title: "The three layers of motion",
        summary: "How micro‑interactions, layout, and narrative motion work together.",
        content:
          "Most interfaces feel flat because motion is sprinkled on top instead of being designed as a system. When micro‑interactions, layout transitions, and narrative motion are aligned, the whole product feels orchestrated, not animated at random.",
      },
      {
        id: "restraint",
        title: "Why restraint feels premium",
        summary: "Subtle motion signals confidence and calm craft.",
        content:
          "Over‑animated interfaces quickly feel cheap. Carefully chosen moments of motion—like easing into a new section or softly highlighting a focused element—tell the user that every detail has been considered.",
      },
    ],
  },
  {
    id: "2",
    title: "The Modern Frontend Reading Experience",
    slug: "the-modern-frontend-reading-experience",
    category: "Frontend",
    readingTime: "10 min read",
    publishedAt: "Jan 24, 2026",
    coverImage: "/window.svg",
    gradientFrom: "from-emerald-400",
    gradientTo: "to-cyan-500",
    brief:
      "How to design article layouts that feel calm, focused, and delightful on every device.",
    summary:
      "From fluid typography and breathing room to scroll‑based animations and ambient backgrounds, this article breaks down the ingredients of a high-end reading UI. We'll look at patterns from leading publications and translate them into reusable components.",
    content:
      "Reading is one of the most intimate experiences on the web. Your layout should get out of the way while quietly elevating the words.\n\nWe start with rhythm: line length, line height, and paragraph spacing. Then we introduce focal points—subtle drop caps, callout boxes, and in‑flow media that feels integrated instead of pasted in. Finally, we layer in ambient motion: parallax hero images, gradient glows that respond to scroll, and progress indicators that frame the reading journey.\n\nA modern reading experience feels like a conversation between content and canvas.",
    featured: true,
    insights: [
      {
        id: "rhythm",
        title: "Typography as rhythm",
        summary: "Why line height and spacing matter more than fancy fonts.",
        content:
          "Readers experience text as a rhythm. When the line length and spacing are tuned, the content feels lighter and more inviting—even before motion or color enter the picture.",
      },
      {
        id: "ambient-motion",
        title: "Ambient motion around content",
        summary: "Keeping motion in the frame, not on the words.",
        content:
          "The safest place to add motion in reading experiences is around the content frame: backgrounds, progress indicators, and subtle parallax. This respects the text while keeping the canvas alive.",
      },
    ],
  },
  {
    id: "3",
    title: "Tiny Habits for Creative Consistency",
    slug: "tiny-habits-for-creative-consistency",
    category: "Productivity",
    readingTime: "6 min read",
    publishedAt: "Feb 2, 2026",
    coverImage: "/file.svg",
    gradientFrom: "from-amber-400",
    gradientTo: "to-rose-500",
    brief:
      "Stay consistent with your writing and design practice without burning out.",
    summary:
      "Instead of chasing motivation, build tiny rituals around your creative time. We'll map out simple routines, golden hours, and UI tricks that make your tools invite you back every day.",
    content:
      "Creativity is less about inspiration and more about returning to the page. The hardest part is often the first minute.\n\nDesign your environment so it lowers the activation energy: a dedicated writing layout, a calm color palette, and an interface that feels like a studio instead of a dashboard. Pair that with small, repeatable rituals—five‑minute warmups, idea inboxes, and frictionless drafts—and consistency becomes almost automatic.\n\nOver time, the compounding effect of tiny habits outperforms sporadic bursts of effort.",
    insights: [
      {
        id: "environment",
        title: "Designing your creative environment",
        summary: "Use layout and color to invite you back to the work.",
        content:
          "When your tools feel like a calm studio instead of a cluttered cockpit, it becomes easier to sit down and begin. Your blog layout can be part of that studio.",
      },
      {
        id: "rituals",
        title: "Rituals over resolutions",
        summary: "Small, repeatable actions beat big promises.",
        content:
          "A five‑minute ritual you keep every day will take you further than a three‑hour sprint you only manage once a month.",
      },
    ],
  },
  {
    id: "4",
    title: "Gradient Stories: Color as a Design Narrative",
    slug: "gradient-stories-color-as-a-design-narrative",
    category: "Inspiration",
    readingTime: "7 min read",
    publishedAt: "Dec 18, 2025",
    coverImage: "/vercel.svg",
    gradientFrom: "from-indigo-500",
    gradientTo: "to-cyan-400",
    brief:
      "Use gradients as storytelling tools—not just backgrounds—with subtle motion and depth.",
    summary:
      "We'll explore how modern interfaces use color transitions to set mood, indicate state, and guide focus. Expect practical palettes, pairing ideas, and animation recipes.",
    content:
      "Gradients are back, but this time they are more cinematic than chaotic.\n\nInstead of random rainbow blends, the most refined interfaces lean on two or three hues with clear roles: a grounding base tone, a highlight accent, and a subtle glow. Animated carefully, gradients can simulate light moving across a surface, or mood shifting across sections of a page.\n\nWe'll break down real‑world examples and provide a set of reusable gradient stories you can adapt for your own work.",
    insights: [
      {
        id: "roles-of-color",
        title: "Give each color a clear role",
        summary: "Base, highlight, and glow—three voices in your palette.",
        content:
          "Assigning clear jobs to each color in a gradient keeps the result intentional. One color grounds the layout, one guides focus, and one adds atmosphere.",
      },
      {
        id: "animated-light",
        title: "Animating gradients like moving light",
        summary: "Slow shifts can feel like daylight passing over the interface.",
        content:
          "When gradients move slowly and subtly, they read as changing light instead of noise. This gives your UI a living, breathable quality.",
      },
    ],
  },
];

const extraGradients = [
  ["from-sky-400", "to-emerald-400"],
  ["from-rose-500", "to-orange-400"],
  ["from-violet-500", "to-sky-400"],
  ["from-teal-400", "to-cyan-500"],
];

const extraCategories = ["Design", "Frontend", "Productivity", "Inspiration"];
const extraImages = ["/globe.svg", "/window.svg", "/file.svg", "/vercel.svg"];

const generatedPosts: Post[] = Array.from({ length: 46 }, (_, index) => {
  const number = index + 1;
  const id = (4 + number).toString();
  const category = extraCategories[index % extraCategories.length];
  const [from, to] = extraGradients[index % extraGradients.length];
  const image = extraImages[index % extraImages.length];

  return {
    id,
    title: `Aurora Note ${number.toString().padStart(2, "0")}`,
    slug: `aurora-note-${number}`,
    category,
    readingTime: `${4 + (index % 5)} min read`,
    publishedAt: `2025–2026 • Entry ${number}`,
    coverImage: image,
    gradientFrom: from,
    gradientTo: to,
    brief:
      "A short, atmospheric entry from the Aurora journal—mixing design, code, and creative energy in a quick read.",
    summary:
      "Each Aurora Note is a compact idea you can absorb in a few minutes. Use them as sparks for your own writing, design explorations, or daily reflections.",
    content:
      "Aurora Notes are intentionally brief. They capture one idea with just enough detail to nudge you into action without overwhelming you.\n\nYou can replace these entries with your own stories, experiments, or daily logs. The layout is designed to make even the smallest thought feel considered and worth revisiting.\n\nTreat these as placeholders for the perspectives you want to publish.",
    insights: [
      {
        id: "idea",
        title: "The core idea of this note",
        summary:
          "A simple pattern you can adapt to your own projects or creative workflow.",
        content:
          "Swap this copy for a single, clear takeaway. Readers should be able to remember it after a quick skim.",
      },
      {
        id: "next-step",
        title: "One tiny next step",
        summary: "Make the idea concrete with a tiny action you can take today.",
        content:
          "For example: write one paragraph, redesign one component, or sketch one concept in your notebook.",
      },
    ],
  };
});

export const samplePosts: Post[] = [...basePosts, ...generatedPosts];

