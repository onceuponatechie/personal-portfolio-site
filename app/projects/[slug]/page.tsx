import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllProjects, getProjectBySlug } from "@/lib/content";
import PhoneMockup from "@/components/mdx/PhoneMockup";
import Callout from "@/components/mdx/Callout";
import PullQuote from "@/components/mdx/PullQuote";
import ProjectDetailClient from "./ProjectDetailClient";

const PART_PREFIX = /^(Part \d+) — (.*)$/;

const mdxComponents = {
  PhoneMockup,
  Callout,
  PullQuote,
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    if (typeof children === "string") {
      const match = children.match(PART_PREFIX);
      if (match) {
        return (
          <h2 {...props}>
            <span className="heading-part-marker">{match[1]} —</span>
            {match[2]}
          </h2>
        );
      }
    }
    return <h2 {...props}>{children}</h2>;
  },
};

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.frontmatter.title} | Once Upon a Techie`,
    description: project.frontmatter.description,
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const allProjects = getAllProjects();
  const idx = allProjects.findIndex((p) => p.slug === params.slug);
  const prev = idx > 0 ? allProjects[idx - 1] : null;
  const next = idx < allProjects.length - 1 ? allProjects[idx + 1] : null;

  return (
    <ProjectDetailClient
      frontmatter={project.frontmatter}
      prev={prev}
      next={next}
    >
      <MDXRemote source={project.content} components={mdxComponents} />
    </ProjectDetailClient>
  );
}
