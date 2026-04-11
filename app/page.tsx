import HeroSection from "@/components/home/HeroSection";
import CreativeVaultStrip from "@/components/home/CreativeVaultStrip";

import SkillsPillGrid from "@/components/home/SkillsPillGrid";
import ChooseYourAdventure from "@/components/home/ChooseYourAdventure";
import FeaturedProjectsShowcase from "@/components/home/FeaturedProjectsShowcase";
import BlogPreview from "@/components/home/BlogPreview";
import NewsletterSection from "@/components/home/NewsletterSection";
import FAQAccordion from "@/components/home/FAQAccordion";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CreativeVaultStrip />
      <ChooseYourAdventure />
      <FeaturedProjectsShowcase />
      <SkillsPillGrid />
      <BlogPreview />
      <NewsletterSection />
      <FAQAccordion />
    </>
  );
}
