import { motion } from "framer-motion";
import { BookOpen, Headphones, Hammer, Heart } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal from "@/components/shared/ScrollReveal";

const obsessions = [
  { label: "Figma", emoji: "🎨" },
  { label: "Notion", emoji: "📝" },
  { label: "React", emoji: "⚛️" },
  { label: "Tailwind CSS", emoji: "💨" },
  { label: "Python", emoji: "🐍" },
  { label: "Make / Zapier", emoji: "⚡" },
  { label: "Canva", emoji: "🖼️" },
  { label: "ChatGPT", emoji: "🤖" },
];

const currently = [
  { label: "Reading", value: "Thinking, Fast and Slow", icon: BookOpen },
  { label: "Building", value: "This portfolio, obviously", icon: Hammer },
  { label: "Listening to", value: "Lo-fi beats & podcasts", icon: Headphones },
];

const About = () => {
  return (
    <PageLayout>
      <section className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          {/* Profile */}
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-40 h-40 rounded-[40%_60%_55%_45%/60%_40%_60%_40%] overflow-hidden bg-surface-warm shrink-0"
              >
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div>
                <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mb-3">About</p>
                <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
                  Hey, I'm <span className="italic">the Techie</span>
                </h1>
                <p className="font-sans text-base text-muted-foreground leading-relaxed">
                  I'm a product storyteller and creative builder who turns ideas into experiences people love — through design, automation, and a whole lot of curiosity.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Story */}
          <div className="max-w-2xl mx-auto mb-20">
            {[
              "I've always been fascinated by the space where technology meets storytelling. Not the cold, clinical kind of tech — the warm, human kind. The kind that makes you smile when you use it.",
              "My journey started with breaking things. Websites, apps, spreadsheets — if it had buttons, I was clicking them in the wrong order to see what would happen. Turns out, that curiosity is what makes a good product person.",
              "Today, I build digital products, design brand experiences, create automation workflows, and write about the creative process. I believe the best work happens at intersections — where design meets code, where data meets empathy, where structure meets play.",
              "When I'm not building, you'll find me deep in a book, experimenting with new tools, or curating playlists that match the energy of whatever I'm working on.",
            ].map((para, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <p className="font-sans text-base text-foreground leading-relaxed mb-6">{para}</p>
              </ScrollReveal>
            ))}
          </div>

          {/* Obsessed With */}
          <ScrollReveal>
            <div className="mb-20">
              <div className="flex items-center gap-2 mb-6">
                <Heart className="w-4 h-4 text-primary" />
                <h2 className="font-serif text-2xl text-foreground">Obsessed <span className="italic">With</span></h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {obsessions.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-surface-light rounded-2xl p-4 text-center hover:shadow-md hover:-translate-y-1 transition-all"
                  >
                    <span className="text-2xl mb-2 block">{item.emoji}</span>
                    <span className="font-sans text-xs font-medium text-foreground">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Currently */}
          <ScrollReveal>
            <div>
              <h2 className="font-serif text-2xl text-foreground mb-6">Currently</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currently.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-surface-light rounded-2xl p-5"
                  >
                    <item.icon className="w-5 h-5 text-primary mb-3" />
                    <p className="font-sans text-[11px] uppercase tracking-wider text-muted-foreground mb-1">{item.label}</p>
                    <p className="font-serif text-base text-foreground">{item.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
