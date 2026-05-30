/**
 * Seed content for the Resources subpages. Edit these arrays freely —
 * each entry renders as a card on its respective page.
 */

export interface CollectionItem {
  title: string;
  meta: string; // small label (type, author, tool category…)
  description: string;
  tag?: string; // pill (e.g. "Free", "AI", "Notion")
  href?: string; // external or internal link
}

export interface CollectionConfig {
  slug: string;
  label: string; // eyebrow
  title: string; // heading (plain)
  accentWord: string; // word that gets the hand-drawn accent
  accentColor: string;
  description: string;
  items: CollectionItem[];
}

export const collections: Record<string, CollectionConfig> = {
  templates: {
    slug: "templates",
    label: "Resources · Templates",
    title: "Plug-and-play",
    accentWord: "Templates",
    accentColor: "hsl(155,40%,30%)",
    description:
      "UI kits, Notion systems, and miniature landing-page frameworks I reach for to ship fast without starting from a blank page.",
    items: [
      { title: "UI Component Library", meta: "Figma · React", tag: "Free", description: "A starter set of accessible, themeable components — buttons, inputs, cards, and layout primitives." },
      { title: "Miniature Landing Page Kit", meta: "Figma", tag: "Free", description: "Five compact, conversion-minded landing layouts you can assemble in an afternoon." },
      { title: "Notion Dashboard Template", meta: "Notion", tag: "Free", description: "A clean workspace for tracking projects, goals, and content in one place." },
      { title: "Brand Style Guide Kit", meta: "Figma", tag: "$12", description: "Everything to build a cohesive brand identity — type scale, color tokens, logo lockups." },
      { title: "Portfolio Wireframe Kit", meta: "Figma", tag: "$15", description: "Low-fi wireframes for building a standout portfolio site." },
      { title: "Email Sequence Templates", meta: "Docs", tag: "Free", description: "Plug-and-play copy frameworks for onboarding and launch emails." },
    ],
  },
  "tools-tech": {
    slug: "tools-tech",
    label: "Resources · Tools & Tech",
    title: "My everyday",
    accentWord: "Stack",
    accentColor: "hsl(196,70%,46%)",
    description:
      "The AI, automation, and design tools that quietly run the studio — what each one is for and why it earns its place.",
    items: [
      { title: "Claude", meta: "AI · Writing & Code", tag: "AI", description: "My thinking partner for drafting, refactoring, and untangling hard problems." },
      { title: "Google Workspace", meta: "AI · Docs & Mail", tag: "AI", description: "The connective tissue for docs, mail, and quick collaboration." },
      { title: "Zapier / Make", meta: "Automation", tag: "Workflow", description: "Glue between apps — the boring, repetitive work runs itself." },
      { title: "Notion", meta: "Automation · Ops", tag: "Workflow", description: "Where workflows, databases, and the build diary live." },
      { title: "Figma", meta: "Design", tag: "Design", description: "Interface design, prototyping, and the source of every component kit here." },
      { title: "Framer", meta: "Design · Web", tag: "Design", description: "For motion-rich marketing pages that ship straight to the web." },
    ],
  },
  bookshelf: {
    slug: "bookshelf",
    label: "Resources · Bookshelf",
    title: "Books that",
    accentWord: "Rewired",
    accentColor: "hsl(255,35%,58%)",
    description:
      "The reads that changed how I think about design, product, and building a creative life — with the one idea I took from each.",
    items: [
      { title: "The Design of Everyday Things", meta: "Don Norman", tag: "Design", description: "Affordances, signifiers, and why most 'user error' is really design error." },
      { title: "Hooked", meta: "Nir Eyal", tag: "Product", description: "The trigger–action–reward–investment loop behind habit-forming products." },
      { title: "Show Your Work!", meta: "Austin Kleon", tag: "Creative", description: "Building in public isn't bragging — it's generosity that compounds." },
      { title: "Atomic Habits", meta: "James Clear", tag: "Life", description: "Systems over goals; tiny, consistent inputs beat heroic bursts." },
      { title: "The Mom Test", meta: "Rob Fitzpatrick", tag: "Product", description: "How to talk to users so you learn the truth, not flattery." },
      { title: "Refactoring UI", meta: "Wathan & Schoger", tag: "Design", description: "Practical, opinionated tactics for making interfaces look designed." },
    ],
  },
  "research-vault": {
    slug: "research-vault",
    label: "Resources · Research Vault",
    title: "Teardowns &",
    accentWord: "Frameworks",
    accentColor: "hsl(255,35%,58%)",
    description:
      "Research templates, product teardowns, and decision frameworks — the artifacts behind the work, free to copy.",
    items: [
      { title: "Cowrywise Product Teardown", meta: "Teardown · Fintech", tag: "Case Study", href: "/projects/cowrywise-teardown", description: "A screen-by-screen analysis of onboarding, friction points, and identity." },
      { title: "Competitive Audit Template", meta: "Framework", tag: "Free", description: "A structured grid for sizing up competitors on UX, pricing, and positioning." },
      { title: "Jobs-to-be-Done Canvas", meta: "Framework", tag: "Free", description: "Map the job, the context, and the desired outcome before you design a thing." },
      { title: "Usability Test Script", meta: "Template", tag: "Free", description: "A neutral, bias-resistant script for moderated sessions." },
      { title: "Feature Prioritization Matrix", meta: "Framework", tag: "Free", description: "Impact vs. effort scoring that actually survives roadmap arguments." },
      { title: "Research Synthesis Board", meta: "Template", tag: "Free", description: "Turn raw notes into themes, insights, and clear next steps." },
    ],
  },
};

export const collectionSlugs = Object.keys(collections);
