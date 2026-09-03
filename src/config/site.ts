export type SiteConfig = {
  name: string;
  role: string;
  email: string;
  github: string;
  linkedin: string;
  projectsRepo: string;
};

export const siteConfig: SiteConfig = {
  name: "Ouail Djebbari",
  role: "Self-Taught Developer",
  email: "djw8027@gmail.com",
  github: "https://github.com/issouail",
  linkedin: "https://www.linkedin.com/in/your-username/",
  // The candidate's GitHub repo for this portfolio.
  projectsRepo: "https://github.com/issouail/portfolio",
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  url: string;
  image: string;
};

export const projects: Project[] = [
  {
    title: "Prompt Forge",
    description:
      "AI prompt generation and humanization platform. Transforms rough ideas into precise, production-grade prompts through an intuitive editor and refinement pipeline.",
    tags: ["React", "TypeScript", "Tailwind", "OpenAI API"],
    url: "https://prmptforge.dpdns.org/",
    // Live screenshot rendered from the deployed URL via Microlink.
    image:
      "https://api.microlink.io/?url=https%3A%2F%2Fprmptforge.dpdns.org%2F&screenshot=true&embed=screenshot.url&meta=false",
  },
  {
    title: "EasyBuy",
    description:
      "Digital products e-commerce platform with a complete catalog, cart, and checkout flow. Engineered for fast, conversion-focused storefront performance.",
    tags: ["React", "Vite", "Tailwind", "Supabase", "PostgreSQL"],
    url: "https://easy-buy-beta.vercel.app/",
    image:
      "https://api.microlink.io/?url=https%3A%2F%2Feasy-buy-beta.vercel.app%2F&screenshot=true&embed=screenshot.url&meta=false",
  },
  {
    title: "Snaggr",
    description:
      "TikTok / video downloader tool — paste a link, retrieve media, done. A focused utility built for speed and simplicity.",
    tags: ["Node.js", "Express", "Railway", "youtube-dl"],
    url: "https://snaggr-ttdl.up.railway.app/",
    image:
      "https://api.microlink.io/?url=https%3A%2F%2Fsnaggr-ttdl.up.railway.app%2F&screenshot=true&embed=screenshot.url&meta=false",
  },
];

export type Skill = {
  name: string;
  category: string;
};

export const skills: Skill[] = [
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "HTML", category: "Frontend" },
  { name: "CSS", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "REST APIs", category: "Integration" },
  { name: "Git", category: "Tooling" },
  { name: "GitHub", category: "Tooling" },
  { name: "Supabase", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Vercel", category: "Deployment" },
  { name: "Netlify", category: "Deployment" },
  { name: "Railway", category: "Deployment" },
  { name: "Render", category: "Deployment" },
  { name: "Prompt Engineering", category: "AI" },
  { name: "AI API Integration", category: "AI" },
  { name: "Responsive UI/UX", category: "Design" },
  { name: "Glassmorphism", category: "Design" },
  { name: "E-commerce", category: "Domain" },
  { name: "FFmpeg", category: "Tooling" },
  { name: "yt-dlp", category: "Tooling" },
  { name: "Linux / WSL", category: "Tooling" },
  { name: "Termux", category: "Tooling" },
  { name: "English Teaching", category: "Soft Skill" },
  { name: "Multilingual", category: "Soft Skill" },
];

export const strengths: string[] = [
  "Self-taught with an aggressive learning curve",
  "Fast learner — productive in new stacks within days",
  "Systematic problem solving and debugging",
  "AI-assisted development for speed and quality",
  "Independent, full-cycle project development",
  "Technical communication across disciplines and languages",
];
