import ResourceCollection from "@/components/resources/ResourceCollection";
import { collections } from "@/lib/resourceCollections";

export const metadata = {
  title: "Templates — Resources | Once Upon a Techie",
  description: "UI kits, Notion systems, and landing-page frameworks, ready to remix.",
};

export default function TemplatesPage() {
  return <ResourceCollection config={collections["templates"]} />;
}
