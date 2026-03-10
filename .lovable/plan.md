

# Comprehensive UI Refinements

## Files to edit
`SmileyGreeting.tsx`, `Navbar.tsx`, `HeroSection.tsx`, `Footer.tsx`, `ProcessSteps.tsx`, `BlogPreview.tsx`, `CreativeVaultStrip.tsx`, `SkillsPillGrid.tsx`, `FeaturedBuildsShowcase.tsx`

---

### 1. Waving Hand — soft, rounded emoji-style hand (`SmileyGreeting.tsx`)
Replace the rigid angular SVG hand with a soft, rounded emoji-style waving hand. Use smooth bezier curves for the palm and fingers with rounded tips, same `hsl(0 0% 15%)` fill. The hand should feel like it belongs with the smiley — cartoon-soft, not anatomical.

### 2. Navbar — modern Framer-quality pill bar (`Navbar.tsx`)
- Add stronger glassmorphism: `bg-white/80 backdrop-blur-2xl border border-white/50` with `shadow-[0_4px_24px_rgba(0,0,0,0.08),0_1px_4px_rgba(0,0,0,0.04)]`
- Brand text: bump to `font-semibold` so it pops
- Nav links hover: change to lavender (`hover:text-brand-lavender`)
- CTA "Build With Me" hover: change bg to green (`hover:bg-brand-green`) with transition
- Active underline stays orange

### 3. Hero subtitle — light weight (`HeroSection.tsx`)
Change `Creator · Builder · Storyteller` from `font-medium` to `font-light`

### 4. Footer — clean alignment (`Footer.tsx`)
- Replace the 3-column link sections with a single horizontal row of links: FREEBIES, BLOG, READER'S CORNER, APPS (all caps, `text-white/40`, small text)
- Social icons + these 4 links aligned on one horizontal line above the border
- Remove "Built with love, AI, and way too much Canva." — copyright just says "© Once Upon a Techie, 2026"
- "Experience" text: remove italic, remove period, keep `text-6xl md:text-8xl font-bold text-white`
- "Let's" and "an" stay `text-white/40`, "build" stays `text-white`

### 5. Process Steps — 3D cards + animated connector (`ProcessSteps.tsx`)
- Cards: white bg (`bg-white`), visible outer glassmorphism border (`border border-gray-200/60`), stronger shadow (`shadow-[0_8px_32px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)]`)
- Replace current static SVG connector with a bespoke orange curvy knot line that animates via `pathLength` on scroll — a single flowing decorative knot/ribbon path with loops between cards, using `stroke="hsl(18 78% 57%)"`, `strokeWidth="3"`, `opacity="0.5"`, animated with `useScroll`/`useTransform`

### 6. Blog Cards — punchy modern + black pill buttons (`BlogPreview.tsx`)
- Cards: add stronger shadow `shadow-[0_8px_30px_rgba(0,0,0,0.08)]`, border `border border-gray-100`, `bg-white` instead of `bg-surface-light`, subtle hover lift (`whileHover={{ y: -4 }}`)
- Replace "Read more →" inline link with a black pill button: `bg-foreground text-white rounded-full px-4 py-2 text-xs font-medium hover:bg-brand-blue transition-colors`
- Same style for case study link in `FeaturedBuildsShowcase.tsx` if applicable
- Remove the Reader's Corner link from bottom
- Center "Read all posts" and make it a stroke outline pill: `border-2 border-foreground text-foreground rounded-full px-6 py-2.5 text-sm font-medium hover:bg-foreground hover:text-white transition-all`

### 7. Creative Vault — diversified images, multi-speed columns (`CreativeVaultStrip.tsx`)
- Replace duplicated `mockCards` with 3 distinct column arrays of different images (canva decks, templates, guides, playbooks, landing pages) — ~8 images per column, all different Unsplash URLs
- Layout: 3 columns on desktop (2 on mobile), each column scrolls independently via separate CSS animations at different speeds (col1: 35s, col2: 28s, col3: 35s but reversed direction)
- Remove category pills section entirely
- Keep container at 1200px height

### 8. Who I Am — trimmed text + mini header (`SkillsPillGrid.tsx`)
- Add mini header: `<p className="font-serif italic text-sm text-muted-foreground mb-3">Who I Am</p>` matching the "My Process, Explained" style
- Cut text to 3 lines: "A product *storyteller* and *creative builder* who turns ideas into *experiences*."
- Remove the 4th line about "narratives, design, & automation"
- Each line at 0.5s intervals
- Pills: white bg (`bg-white`), visible outer glassmorphism border (`border border-gray-200/60`), drop shadow (`shadow-[0_4px_16px_rgba(0,0,0,0.08)]`), same bespoke 3D icons
- Desktop: absolutely positioned around the text with staggered offsets
- Mobile (<768px): switch to flex-wrap row below text

### 9. Featured Builds — case study button style
Add a "View Case Study" black pill button alongside the existing "Live Demo" button in the bottom info area: `bg-white text-foreground rounded-full px-4 py-1.5 text-[11px] font-medium hover:bg-brand-blue hover:text-white transition-all`

