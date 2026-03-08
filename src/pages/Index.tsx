import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyWidget from "@/components/layout/StickyWidget";
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
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <CreativeVaultStrip />
        <SkillsPillGrid />
        <ProcessSteps />
        <FeaturedBuildsShowcase />
        <BlogPreview />
        <ReadersCornerPreview />
        <FAQAccordion />
      </main>
      <Footer />
      <StickyWidget />
    </div>
  );
};

export default Index;
