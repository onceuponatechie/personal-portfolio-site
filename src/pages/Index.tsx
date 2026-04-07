import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/home/HeroSection";
import CreativeVaultStrip from "@/components/home/CreativeVaultStrip";
import SkillsPillGrid from "@/components/home/SkillsPillGrid";
import ChooseYourAdventure from "@/components/home/ChooseYourAdventure";
import FeaturedBuildsShowcase from "@/components/home/FeaturedBuildsShowcase";
import BlogPreview from "@/components/home/BlogPreview";
import NewsletterSection from "@/components/home/NewsletterSection";
import FAQAccordion from "@/components/home/FAQAccordion";

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      <CreativeVaultStrip />
      <SkillsPillGrid />
      <ChooseYourAdventure />
      <FeaturedBuildsShowcase />
      <BlogPreview />
      <NewsletterSection />
      <FAQAccordion />
    </PageLayout>
  );
};

export default Index;
