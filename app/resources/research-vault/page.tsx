import ResourceCollection from "@/components/resources/ResourceCollection";
import { collections } from "@/lib/resourceCollections";

export const metadata = {
  title: "Research Vault — Resources | Once Upon a Techie",
  description: "Research templates, product teardowns, and decision frameworks.",
};

export default function ResearchVaultPage() {
  return <ResourceCollection config={collections["research-vault"]} />;
}
