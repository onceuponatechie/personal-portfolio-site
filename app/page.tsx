import HeroSection from "@/components/home/HeroSection";
import CreativeVaultStrip from "@/components/home/CreativeVaultStrip";

import SkillsPillGrid from "@/components/home/SkillsPillGrid";

import FeaturedProjectsShowcase from "@/components/home/FeaturedProjectsShowcase";
import BlogPreview from "@/components/home/BlogPreview";
import NewsletterSection from "@/components/home/NewsletterSection";
import FAQAccordion from "@/components/home/FAQAccordion";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CreativeVaultStrip />
      <SkillsPillGrid />
      <FeaturedProjectsShowcase />
      <BlogPreview />
      <NewsletterSection />
      <FAQAccordion />
    </>
  );
}
