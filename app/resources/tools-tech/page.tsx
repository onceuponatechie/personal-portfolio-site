import ResourceCollection from "@/components/resources/ResourceCollection";
import { collections } from "@/lib/resourceCollections";

export const metadata = {
  title: "Tools & Tech — Resources | Once Upon a Techie",
  description: "The AI, automation, and design tools that run the studio.",
};

export default function ToolsTechPage() {
  return <ResourceCollection config={collections["tools-tech"]} />;
}
