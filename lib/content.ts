import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export interface PostFrontmatter {
  title: string;
  slug: string;
  category: string;
  readTime: string;
  excerpt: string;
  coverImage: string;
  featured?: boolean;
  publishedAt: string;
  related?: string[];
}

export interface ProjectFrontmatter {
  title: string;
  slug: string;
  category: string;
  subtitle?: string;
  description: string;
  tools: string[];
  tags?: string[];
  coverImage: string;
  gallery?: string[];
  liveUrl?: string;
  featured?: boolean;
  publishedAt: string;
}

export function getAllPosts(): PostFrontmatter[] {
  const dir = path.join(contentDirectory, "blog");
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
  return files
    .map((filename) => {
      const filePath = path.join(dir, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      return { ...data, slug: filename.replace(".mdx", "") } as PostFrontmatter;
    })
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

export function getPostBySlug(slug: string) {
  const filePath = path.join(contentDirectory, "blog", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  return {
    frontmatter: data as PostFrontmatter,
    content,
  };
}

export function getAllProjects(): ProjectFrontmatter[] {
  const dir = path.join(contentDirectory, "projects");
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
  return files
    .map((filename) => {
      const filePath = path.join(dir, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      return { ...data, slug: filename.replace(".mdx", "") } as ProjectFrontmatter;
    })
    .sort((a, b) => {
      const featuredDelta = Number(b.featured ?? false) - Number(a.featured ?? false);
      if (featuredDelta !== 0) return featuredDelta;
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });
}

export function getProjectBySlug(slug: string) {
  const filePath = path.join(contentDirectory, "projects", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  return {
    frontmatter: data as ProjectFrontmatter,
    content,
  };
}

export function getResources() {
  const filePath = path.join(contentDirectory, "resources", "resources.json");
  if (!fs.existsSync(filePath)) return [];
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}
