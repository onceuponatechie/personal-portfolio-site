import { getAllPosts } from "@/lib/content";
import BlogPageClient from "./BlogPageClient";

export const metadata = {
  title: "Blog — The Storyteller's Log | Once Upon a Techie",
  description: "Thoughts on design, building, automation, product, and creative life.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  return <BlogPageClient posts={posts} />;
}
