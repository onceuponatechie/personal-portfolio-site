import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Copy, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { toast } from "@/hooks/use-toast";

const posts = [
  { slug: "perfection-design", title: "Why I Stopped Chasing Perfection in Design", category: "Design", readTime: "5 min", image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1200&h=600&fit=crop", body: "There's a moment in every project where you have to decide: am I making this better, or am I just making this different?\n\nFor years, I fell into the trap of endless iteration. Every pixel had to be perfect. Every transition had to be buttery smooth. Every color had to pass some invisible vibe check that only I could see.\n\nThe problem? I wasn't shipping. I was polishing.\n\nThe turning point came when I launched something ugly. Not intentionally ugly — just unfinished. And people loved it. They didn't care about the 2px misalignment I was losing sleep over. They cared about what the thing did for them.\n\nNow I follow a simple rule: ship when it's 80% good. The remaining 20% can be iterated on with real user feedback, not my anxiety.\n\nImperfection is a feature, not a bug.", related: ["building-in-public", "design-systems-solo"] },
  { slug: "building-in-public", title: "Building in Public: What I Learned in 30 Days", category: "Building", readTime: "7 min", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop", body: "Day 1: I tweeted 'I'm going to build in public for the next 30 days.' Zero likes. Zero replies. Just me and the void.\n\nDay 7: I shared a screenshot of something broken. It got more engagement than anything I'd ever posted. People love seeing the messy middle.\n\nDay 15: Someone I admired reached out to collaborate. Building in public isn't just about accountability — it's about visibility.\n\nDay 21: I wanted to quit. The pressure of daily updates was real. But I realized nobody was actually counting except me.\n\nDay 30: I had shipped 4 micro-projects, gained 200 followers, and made 2 new friends. More importantly, I'd built a habit of shipping.\n\nThe lesson? Consistency beats perfection. Show your work, even when it's embarrassing. Especially when it's embarrassing.", related: ["perfection-design", "creative-burnout"] },
  { slug: "automation-stack", title: "The Automation Stack That Runs My Life", category: "Automation", readTime: "4 min", image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=1200&h=600&fit=crop", body: "I'm lazy. Productively lazy. Here's every automation that saves me time each week:\n\n1. Email to Notion: Every newsletter I subscribe to gets auto-saved to a Notion database with AI-generated summaries.\n\n2. Social scheduling: I batch-create content on Sundays, and Buffer handles the rest of the week.\n\n3. Invoice generation: Stripe webhook → Zapier → Google Docs template → email to client. Zero manual work.\n\n4. Meeting prep: Calendar event triggers a Notion page with attendee info pulled from LinkedIn.\n\n5. Weekly review: Every Friday, a Make scenario compiles my GitHub commits, tweets, and Notion tasks into a single summary.\n\nTotal time saved per week: roughly 8 hours. That's a whole extra workday I get back just by setting things up once.", related: ["storytelling-products"] },
  { slug: "storytelling-products", title: "How Storytelling Makes Better Products", category: "Product", readTime: "6 min", image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=1200&h=600&fit=crop", body: "Every product is a story. The landing page is Act 1. The onboarding is Act 2. The moment the user gets value — that's the climax.\n\nMost products fail at storytelling because they focus on features instead of feelings. Nobody cares that your app has 'real-time sync.' They care that their work is always up to date, no matter which device they grab.\n\nHere's my framework: Start with the struggle. What's the user's life like before your product? Paint that picture vividly. Then introduce your product as the guide — not the hero. The user is always the hero.\n\nFinally, show the transformation. Before and after. Pain and relief. Chaos and clarity.\n\nThe best products don't need to explain what they do. They show you what you become.", related: ["perfection-design", "building-in-public"] },
  { slug: "creative-burnout", title: "Surviving Creative Burnout", category: "Life", readTime: "5 min", image: "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?w=1200&h=600&fit=crop", body: "It hit me on a Tuesday. I opened Figma, stared at the canvas, and felt... nothing. No excitement, no ideas, no motivation. Just a blinking cursor and a deadline.\n\nCreative burnout isn't about being tired. It's about being empty. You've given everything to the work and forgotten to refill the well.\n\nHere's what helped me recover:\n\n1. I stopped consuming design content for two weeks. No Dribbble, no Twitter threads, no 'Top 10 UI Trends' articles.\n\n2. I went for walks without my phone. Boredom is the birthplace of creativity.\n\n3. I made something with no purpose. A collage. A doodle. A playlist. Things with no client, no deadline, no audience.\n\n4. I talked to a friend about it. Turns out, everyone goes through this. Knowing that helped more than any productivity hack.\n\nBurnout is your brain telling you to slow down. Listen to it.", related: ["building-in-public"] },
  { slug: "design-systems-solo", title: "Design Systems for Solo Creators", category: "Design", readTime: "8 min", image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&h=600&fit=crop", body: "You don't need a team of 10 designers to benefit from a design system. In fact, solo creators might need one even more.\n\nWhen you're doing everything yourself — design, development, content — consistency is the first thing to slip. A design system is your safety net.\n\nStart small: Pick your colors (max 5), choose your fonts (max 2), define your spacing scale (4, 8, 16, 24, 32, 48, 64). That's it. That's a design system.\n\nNext level: Create component variants. Your button doesn't need 47 states. It needs default, hover, disabled, and maybe a secondary variant.\n\nDocument it. I use a single Notion page with color swatches, font samples, and component screenshots. Takes 30 minutes to set up, saves hours every week.\n\nThe goal isn't perfection — it's reducing decisions. Every decision you don't have to make is energy saved for the work that matters.", related: ["perfection-design", "automation-stack"] },
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <PageLayout>
        <div className="pt-32 pb-24 text-center">
          <h1 className="font-serif text-3xl text-foreground">Post not found</h1>
          <Link to="/blog" className="font-sans text-sm text-primary mt-4 inline-block">← Back to Blog</Link>
        </div>
      </PageLayout>
    );
  }

  const related = posts.filter((p) => post.related.includes(p.slug));

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({ title: "Link copied!" });
  };

  return (
    <PageLayout>
      {/* Hero */}
      <section className="pt-32 pb-8">
        <div className="max-w-3xl mx-auto px-6">
          <Link to="/blog" className="inline-flex items-center gap-2 font-sans text-sm text-muted-foreground hover:text-foreground transition-colors mb-8" data-cursor="pointer">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="font-sans text-xs uppercase tracking-wider text-primary">{post.category}</span>
            <h1 className="font-serif text-3xl md:text-4xl text-foreground mt-2 mb-4 leading-tight">{post.title}</h1>
            <span className="font-sans text-sm text-muted-foreground">{post.readTime} read</span>
          </motion.div>
        </div>
      </section>

      {/* Image */}
      <section className="pb-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-2xl overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="pb-16">
        <div className="max-w-3xl mx-auto px-6">
          {post.body.split("\n\n").map((para, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <p className="font-sans text-base text-foreground leading-relaxed mb-6">{para}</p>
            </ScrollReveal>
          ))}

          {/* Share */}
          <div className="flex items-center gap-3 mt-12 pt-8 border-t border-border">
            <span className="font-sans text-xs text-muted-foreground">Share:</span>
            <button onClick={copyLink} className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors" data-cursor="pointer">
              <Copy className="w-3.5 h-3.5" />
            </button>
            <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors" data-cursor="pointer">
              <Twitter className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="pb-24">
          <div className="max-w-3xl mx-auto px-6">
            <h3 className="font-serif text-xl text-foreground mb-6">Related Posts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {related.map((r) => (
                <Link key={r.slug} to={`/blog/${r.slug}`} className="rounded-2xl border border-gray-100 p-5 hover:shadow-md transition-all" style={{ backgroundColor: "#fdfcfa" }} data-cursor="pointer">
                  <span className="font-sans text-[10px] uppercase tracking-wider text-primary">{r.category}</span>
                  <h4 className="font-serif text-base text-foreground mt-1 leading-snug">{r.title}</h4>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  );
};

export default BlogPost;
