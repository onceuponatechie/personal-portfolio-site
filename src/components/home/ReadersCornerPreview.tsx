import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/shared/ScrollReveal";

const ReadersCornerPreview = () => {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <div
            className="relative rounded-3xl overflow-hidden border border-white/40 bg-white/60 backdrop-blur-xl"
            style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.03)" }}
          >
            <div className="flex flex-col md:flex-row">
              {/* Left — Text Content */}
              <div className="flex-1 p-10 md:p-14 flex flex-col justify-center">
                <p className="font-serif italic text-sm text-muted-foreground mb-3">
                  Reader's Corner
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                  A cozy corner for <span className="italic">curious minds</span>
                </h2>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-8 max-w-md">
                  Thoughts on books, excerpts from articles, random notes, and everything
                  that inspires the creative process. A space for readers, thinkers, and
                  the endlessly curious.
                </p>
                <Link
                  to="/resources/readers-corner"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-6 py-3 font-sans text-sm font-medium hover:opacity-90 transition-opacity w-fit"
                  data-cursor="pointer"
                >
                  Explore the Corner
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Right — Large Image */}
              <div className="md:w-[55%] min-h-[300px] md:min-h-[420px]">
                <img
                  src="https://images.unsplash.com/photo-1513001900722-370f803f498d?w=800&h=600&fit=crop"
                  alt="A cozy reading corner with books and warm light"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ReadersCornerPreview;
