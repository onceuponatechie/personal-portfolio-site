import { getResources } from "@/lib/content";
import ResourcesPageClient from "./ResourcesPageClient";

export const metadata = {
  title: "Resources — The Creative Vault | Once Upon a Techie",
  description: "Templates, tools, and freebies to help you build faster and better.",
};

export default function ResourcesPage() {
  const resources = getResources();
  return <ResourcesPageClient resources={resources} />;
}
