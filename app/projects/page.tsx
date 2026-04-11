import { getAllProjects } from "@/lib/content";
import ProjectsPageClient from "./ProjectsPageClient";

export const metadata = {
  title: "Projects — Ship Log | Once Upon a Techie",
  description: "Portfolio of products, apps, and experiments I've built.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();
  return <ProjectsPageClient projects={projects} />;
}
