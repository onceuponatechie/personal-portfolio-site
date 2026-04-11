import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/content";
import BlogPostClient from "./BlogPostClient";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.frontmatter.title} | Once Upon a Techie`,
    description: post.frontmatter.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const relatedSlugs = post.frontmatter.related || [];
  const related = allPosts.filter((p) => relatedSlugs.includes(p.slug));

  return (
    <BlogPostClient
      frontmatter={post.frontmatter}
      content={post.content}
      related={related}
    />
  );
}
