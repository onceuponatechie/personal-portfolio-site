import { getAllPosts } from "@/lib/content";
import ResourcesBento, { type RecentPost } from "@/components/resources/ResourcesBento";

export const metadata = {
  title: "Resources — My Creative Lab | Once Upon a Techie",
  description:
    "Build diary, templates, tools & tech, bookshelf, and research vault — stuff I actually use, hoard, and recommend.",
};

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function ResourcesPage() {
  const recentPosts: RecentPost[] = getAllPosts()
    .slice(0, 2)
    .map((p) => ({
      title: p.title,
      slug: p.slug,
      date: formatDate(p.publishedAt),
      category: p.category,
    }));

  return <ResourcesBento recentPosts={recentPosts} />;
}
