import HeroSection from "@/components/home/HeroSection";
import CreativeVaultStrip from "@/components/home/CreativeVaultStrip";

import SkillsPillGrid from "@/components/home/SkillsPillGrid";

import FeaturedProjectsShowcase from "@/components/home/FeaturedProjectsShowcase";
import BlogPreview from "@/components/home/BlogPreview";
import NewsletterSection from "@/components/home/NewsletterSection";
import FAQAccordion from "@/components/home/FAQAccordion";
import { getAllProjects } from "@/lib/content";

export default function HomePage() {
  const allProjects = getAllProjects();
  const featured = allProjects.filter((p) => p.featured);
  // Fall back to the most recent projects when nothing is explicitly featured.
  const showcaseProjects = (featured.length > 0 ? featured : allProjects)
    .slice(0, 4)
    .map((p) => ({
      category: p.category,
      title: p.title,
      description: p.description,
      slug: p.slug,
      image: p.coverImage,
    }));

  return (
    <>
      <HeroSection />
      <CreativeVaultStrip />
      <SkillsPillGrid />
      <FeaturedProjectsShowcase projects={showcaseProjects} />
      <BlogPreview />
      <NewsletterSection />
      <FAQAccordion />
    </>
  );
}
