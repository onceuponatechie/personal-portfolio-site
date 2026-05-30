import ResourceCollection from "@/components/resources/ResourceCollection";
import { collections } from "@/lib/resourceCollections";

export const metadata = {
  title: "Bookshelf — Resources | Once Upon a Techie",
  description: "The books that rewired how I think about design, product, and building.",
};

export default function BookshelfPage() {
  return <ResourceCollection config={collections["bookshelf"]} />;
}
