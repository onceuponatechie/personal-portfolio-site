import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/home/HeroSection";
import CreativeVaultStrip from "@/components/home/CreativeVaultStrip";
import SkillsPillGrid from "@/components/home/SkillsPillGrid";
import ProcessSteps from "@/components/home/ProcessSteps";
import FeaturedBuildsShowcase from "@/components/home/FeaturedBuildsShowcase";
import BlogPreview from "@/components/home/BlogPreview";
import ReadersCornerPreview from "@/components/home/ReadersCornerPreview";
import FAQAccordion from "@/components/home/FAQAccordion";

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      <CreativeVaultStrip />
      <SkillsPillGrid />
      <ProcessSteps />
      <FeaturedBuildsShowcase />
      <BlogPreview />
      <ReadersCornerPreview />
      <FAQAccordion />
    </PageLayout>
  );
};

export default Index;
