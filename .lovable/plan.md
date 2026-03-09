

# Homepage Refinements — Comprehensive Update

## Changes Overview

### 1. Hero — reduce top whitespace
Change `py-32` to `py-16 pt-20` on the hero content div so the smiley and content sit higher above the fold.

### 2. Smiley hand — redesign waving hand SVG
Replace the current abstract hand SVG in `SmileyGreeting.tsx` with a recognizable open-palm waving hand shape using the same dark fill (`hsl(0 0% 15%)`) as the smiley's eyes/smile. The hand should have 5 distinct fingers with a wrist, clearly identifiable as a wave.

### 3. Skills Pill Grid — full redesign
- Remove any heading/label, keep only the centered paragraph with `font-sans text-xl md:text-[28px] font-light` (reduced weight)
- Line-by-line scroll reveal at 0.4s intervals (already working)
- Replace Lucide icons with custom inline SVG "3D" icons per skill (gradient fills using brand accent colors — cube for Product Building, gear for Automation, code brackets for Python, speech bubble for Storytelling, magnifier for Research, pen for Design)
- Pills get `bg-white/50 backdrop-blur-md border border-gray-300/50 shadow-sm rounded-full` styling
- Desktop: 3 pills left, 3 right flanking text with staggered vertical positions and slight rotation angles
- Mobile (`lg:hidden`): pills wrap below text in centered flex-wrap

### 4. Featured Builds — add "Live Demo" button
Add a `liveUrl` field to each project in the mock data. Render a "Live Demo" pill button (`bg-white/20 backdrop-blur text-white rounded-full`) with an `ExternalLink` icon next to the tool pills inside the showcase info area.

### 5. Blog cards — replace letter icons with 3D category icons
Replace the `<span>{post.category[0]}</span>` circle with custom inline SVG icons per category:
- Design → pen/brush icon (lavender gradient)
- Building → hammer/wrench (orange gradient)
- Automation → gear/lightning (green gradient)  
- Product → lightbulb (blue gradient)

Each icon uses gradient fills with the brand accent colors to create a "3D bespoke" look.

### 6. Reader's Corner — modernize cards
- Remove star ratings entirely
- Make each card a `<Link>` to `/blog/book-slug` (a page with the book-inspired writing)
- Cleaner card: cover image, title (serif), author (sans, muted), one-line excerpt, small "Read my take →" link in brand orange
- Same hover tilt animation stays

### 7. FAQ "Still have questions" CTA — dark theme
Change the CTA card from `glassmorphism` (white) to `bg-dark-bg` with `text-white`, `text-white/60` for subtitle, and orange CTA button. This visually connects to the footer below.

### 8. Resources page — Gumroad button
Change the existing "Get it" button to say "Get on Gumroad" with an `ExternalLink` icon, wrapping in an `<a>` tag with `href` pointing to a Gumroad URL (mock URL for now). Free items keep "Download Free" text.

### 9. Section mini-titles — use footer "Don't be a stranger" style
The footer uses `font-serif italic text-white/40 text-sm` for "Don't be a stranger". Apply the same style to all section labels: `font-serif italic text-muted-foreground text-sm` (instead of `font-sans text-xs uppercase tracking-widest`). Affects: FAQ, ProcessSteps, FeaturedBuildsShowcase, BlogPreview, ReadersCornerPreview labels.

### Files to edit
- `SmileyGreeting.tsx` — new hand SVG
- `HeroSection.tsx` — reduce top padding
- `SkillsPillGrid.tsx` — full redesign with custom SVG icons, lighter font weight
- `FeaturedBuildsShowcase.tsx` — add Live Demo button + liveUrl data
- `BlogPreview.tsx` — custom 3D SVG icons per category
- `ReadersCornerPreview.tsx` — remove ratings, add links, modernize
- `FAQAccordion.tsx` — dark CTA card
- `ProcessSteps.tsx` — update mini-title style
- `Resources.tsx` — Gumroad button

