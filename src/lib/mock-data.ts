export type BountyStatus = "open" | "judging" | "completed" | "draft" | "unresolved";
export type Category = "Productivity" | "Game Dev" | "Education" | "Creative" | "Tools & Utilities" | "Other";
export type Difficulty = "Easy" | "Medium" | "Hard" | "Expert";

export interface Bounty {
  id: string;
  title: string;
  description: string;
  category: Category;
  status: BountyStatus;
  difficulty: Difficulty;
  deadline: string;
  daysLeft: number;
  rangersCount: number;
  discussionCount: number;
  postedBy: { name: string; avatar: string };
  icon: string;
  tags: string[];
  challenge?: string;
  requiredFeatures?: string[];
  acceptanceCriteria?: string[];
}

export interface Submission {
  id: string;
  project: string;
  subtitle: string;
  submitted: string;
  status: "in_review" | "in_progress" | "judging" | "shortlisted" | "approved" | "rejected";
  bountyCategory: string;
}

export interface Ranger {
  rank: number;
  name: string;
  avatar: string;
  stars: number;
  completed: number;
}

export interface Activity {
  text: string;
  time: string;
  color: "blue" | "gold" | "green" | "amber" | "red";
}

export const bounties: Bounty[] = [
  {
    id: "1",
    title: "Build a pixel weather mood app",
    description: "Create a tiny app that maps local weather to your mood.",
    category: "Productivity",
    status: "open",
    difficulty: "Easy",
    deadline: "Jun 2, 2025",
    daysLeft: 3,
    rangersCount: 5,
    discussionCount: 12,
    postedBy: { name: "Sheriff Bot", avatar: "🤖" },
    icon: "🌤️",
    tags: ["weather", "pixel-art", "api", "frontend", "mood"],
    challenge: "Build a small web app that fetches current weather for a user's location and returns a mood or vibe represented with pixel art and a short message.",
    requiredFeatures: [
      "Detect user location or allow manual city input",
      "Fetch current weather data from a public API (e.g., Open-Meteo, WeatherAPI)",
      "Map weather conditions to a mood or vibe",
      "Display a pixel art illustration that matches the mood",
      "Show temperature, condition, and a short mood message",
      "Responsive layout (mobile-friendly)",
      "Clean, minimal UI with dark mode support",
    ],
    acceptanceCriteria: [
      "App loads and shows weather and mood for a valid location",
      "Pixel art updates according to the weather condition",
      "UI is responsive and works on mobile and desktop",
      "Code is clean, readable, and includes basic error handling",
      "Uses a public API and no hardcoded weather responses",
    ],
  },
  {
    id: "2",
    title: "Make a cozy habit tracker with streaks",
    description: "Build a habit tracker with streaks, reminders, and cozy vibes.",
    category: "Productivity",
    status: "open",
    difficulty: "Medium",
    deadline: "Jun 5, 2025",
    daysLeft: 5,
    rangersCount: 6,
    discussionCount: 8,
    postedBy: { name: "CozyDev", avatar: "🏕️" },
    icon: "🔥",
    tags: ["habits", "streaks", "productivity"],
  },
  {
    id: "3",
    title: "Design a mini roguelike inventory UI",
    description: "Design and prototype a clean, compact inventory for a roguelike.",
    category: "Game Dev",
    status: "judging",
    difficulty: "Hard",
    deadline: "May 30, 2025",
    daysLeft: 2,
    rangersCount: 7,
    discussionCount: 15,
    postedBy: { name: "PixelKnight", avatar: "⚔️" },
    icon: "🎒",
    tags: ["game", "ui", "inventory", "roguelike"],
  },
  {
    id: "4",
    title: "Create an AI study buddy dashboard",
    description: "Build a dashboard that helps students learn smarter.",
    category: "Education",
    status: "open",
    difficulty: "Medium",
    deadline: "Jun 8, 2025",
    daysLeft: 6,
    rangersCount: 4,
    discussionCount: 5,
    postedBy: { name: "StudyMaster", avatar: "📚" },
    icon: "🎓",
    tags: ["ai", "education", "dashboard"],
  },
  {
    id: "5",
    title: "Prototype a ramen finder map",
    description: "Map nearby ramen spots with filters, reviews, and favorites.",
    category: "Tools & Utilities",
    status: "judging",
    difficulty: "Medium",
    deadline: "May 29, 2025",
    daysLeft: 1,
    rangersCount: 8,
    discussionCount: 20,
    postedBy: { name: "NoodleFan", avatar: "🍜" },
    icon: "🗺️",
    tags: ["map", "food", "local"],
  },
  {
    id: "6",
    title: "Build a soundtrack mood mixer",
    description: "Mix moods and genres to generate the perfect soundtrack.",
    category: "Creative",
    status: "open",
    difficulty: "Easy",
    deadline: "Jun 6, 2025",
    daysLeft: 4,
    rangersCount: 6,
    discussionCount: 9,
    postedBy: { name: "BeatDrop", avatar: "🎵" },
    icon: "🎧",
    tags: ["music", "creative", "mood"],
  },
];

export const submissions: Submission[] = [
  { id: "1", project: "Pixel Weather App", subtitle: "Tiny weather companion", submitted: "May 18, 2025", status: "in_review", bountyCategory: "Productivity" },
  { id: "2", project: "Ramen Finder Map", subtitle: "Find the best ramen spots", submitted: "May 15, 2025", status: "in_progress", bountyCategory: "Local Tool" },
  { id: "3", project: "Roguelike Inventory UI", subtitle: "Inventory UI for RPGs", submitted: "May 12, 2025", status: "judging", bountyCategory: "Game" },
  { id: "4", project: "AI Study Buddy", subtitle: "Smart study dashboard", submitted: "May 8, 2025", status: "shortlisted", bountyCategory: "Education" },
  { id: "5", project: "Soundtrack Mood Mixer", subtitle: "Mix music for any mood", submitted: "May 5, 2025", status: "approved", bountyCategory: "Creative Tool" },
];

export const topRangers: Ranger[] = [
  { rank: 1, name: "CodeCowboy", avatar: "🤠", stars: 32, completed: 58 },
  { rank: 2, name: "PromptPioneer", avatar: "🧭", stars: 29, completed: 47 },
  { rank: 3, name: "PixelSheriff", avatar: "⭐", stars: 27, completed: 41 },
  { rank: 4, name: "DataDust", avatar: "💨", stars: 23, completed: 36 },
  { rank: 5, name: "VectorVagabond", avatar: "🌵", stars: 21, completed: 30 },
];

export const recentActivity: Activity[] = [
  { text: "Your submission Pixel Weather App is now in review.", time: "2h ago", color: "blue" },
  { text: "You earned a Sheriff Star for AI Study Buddy.", time: "1d ago", color: "gold" },
  { text: "Your submission Soundtrack Mood Mixer was approved.", time: "2d ago", color: "green" },
  { text: "You bookmarked Design a minimalist timer app.", time: "3d ago", color: "amber" },
  { text: "You submitted Roguelike Inventory UI.", time: "5d ago", color: "blue" },
];

export const categories: { name: Category | "All Categories"; count: number; icon: string }[] = [
  { name: "All Categories", count: 28, icon: "📋" },
  { name: "Productivity", count: 7, icon: "⚡" },
  { name: "Game Dev", count: 6, icon: "🎮" },
  { name: "Education", count: 5, icon: "📚" },
  { name: "Creative", count: 4, icon: "🎨" },
  { name: "Tools & Utilities", count: 4, icon: "🔧" },
  { name: "Other", count: 2, icon: "📦" },
];
