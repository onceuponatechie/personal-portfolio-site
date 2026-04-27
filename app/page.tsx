import HeroSection from "@/components/home/HeroSection";
import CreativeVaultStrip from "@/components/home/CreativeVaultStrip";
import FeaturedProjectsShowcase from "@/components/home/FeaturedProjectsShowcase";
import BlogPreview from "@/components/home/BlogPreview";
import NewsletterSection from "@/components/home/NewsletterSection";
import FAQAccordion from "@/components/home/FAQAccordion";
import IdentityShowcase from "@/components/sections/IdentityShowcase";

export default function HomePage() {
  return (
    <>
      <div className="bg-surface-warm">
        <HeroSection />
        <CreativeVaultStrip />
        <div className="h-24" />
      </div>

      <IdentityShowcase
        iconName="sparkles"
        headlineBefore={`I make things that `}
        italicPhrase="spark curiosity"
        headlineAfter={` and pull people into stories worth telling.`}
        attribution="Essy • Once Upon a Techie"
        imageOverlayText="creator"
        imageSrc="/images/placeholder-creator.jpg"
        imageAlt="Creator portrait placeholder"
        layout="rectangle-left"
      />

      <div className="bg-surface-warm">
        <FeaturedProjectsShowcase />
      </div>

      <IdentityShowcase
        iconName="hammer"
        headlineBefore={`I build products that `}
        italicPhrase="solve real problems"
        headlineAfter={` for people who actually use them.`}
        attribution="Essy • Once Upon a Techie"
        imageOverlayText="builder"
        imageSrc="/images/placeholder-builder.jpg"
        imageAlt="Builder portrait placeholder"
        layout="image-left"
      />

      <div className="bg-surface-warm">
        <BlogPreview />
      </div>

      <IdentityShowcase
        iconName="feather"
        headlineBefore={`I tell stories that `}
        italicPhrase="make the technical feel human"
        headlineAfter={` and the human feel possible.`}
        attribution="Essy • Once Upon a Techie"
        imageOverlayText="storyteller"
        imageSrc="/images/placeholder-storyteller.jpg"
        imageAlt="Storyteller portrait placeholder"
        layout="rectangle-left"
      />

      <div className="bg-surface-warm">
        <NewsletterSection />
      </div>

      <FAQAccordion />
    </>
  );
}
