

# Once Upon a Techie — Portfolio Website
## Phase 1: Foundation + Homepage

A stunning, motion-rich personal portfolio built with React + Vite, featuring custom cursor, scroll animations, glassmorphism UI, and inline media boxes in the hero text.

### 1. Design System & Global Styles
- Custom color palette: brand orange (#E8703A), lavender (#B4A7D6), green (#2D6A4F), blue (#4A90D9), yellow (#F5D060)
- Surface colors: cream (#FAFAF7), warm (#F5F0E8), dark (#141414)
- Typography: Playfair Display (serif headings, weight 400, italic on select words) + Inter (sans body text)
- Global: smooth scroll, cream background, hidden cursor on desktop

### 2. Custom Cursor
- Blue sphere (#4A90D9) that follows the mouse with smooth lerp interpolation
- Changes to lavender and scales up when hovering interactive elements
- Hidden on touch devices

### 3. ScrollReveal Wrapper
- Reusable Framer Motion component that animates elements into view (fade + slide)
- Applied to every section below the hero — nothing below the fold visible on load

### 4. Glassmorphism Pill Navbar
- Floating pill-shaped sticky nav with frosted glass effect
- Left: "Once Upon a Techie" brand link. Right: Resources, Builds, Blog, About links
- Orange "Build With Me" CTA pill button
- Active link indicator with Framer Motion layoutId animation
- Mobile: hamburger menu with full-screen overlay

### 5. Smiley Greeting Component
- Animated yellow circle that loops between a 3D winking smiley face and a waving hand
- Infinite animation, never pauses

### 6. Hero Section (Full Viewport)
- Centered layout with generous whitespace on cream gradient background
- Smiley greeting at top, "Open to Collaborations" pill badge
- **Inline media boxes embedded within the headline text** — rounded dark containers with crossfading project thumbnails (inspired by the Hanzo reference video)
- Headline: "Products, people, and the [MEDIA] stories that connect [MEDIA] them." with italic serif on key words
- Subheadline, dual CTAs, trust row with overlapping logos
- Parallax scroll effect

### 7. Creative Vault Strip
- Large rounded container with white gradient borders and dark overlay
- Auto-scrolling bento grid of project cards moving upward continuously
- Centered glassmorphism circle button with "See Recent Work" tooltip
- Category tag pills below

### 8. Skills Pill Grid
- Intro paragraph that reveals line-by-line on scroll
- 6 floating skill pills with 3D icons flanking the text (left/right), sliding in from off-screen
- Mobile: pills wrap below text

### 9. Process Steps
- 3 scattered, slightly rotated cards showing Discovery → Design → Build
- Hand-drawn orange SVG connector lines that animate (draw themselves) on scroll

### 10. Featured Builds Showcase
- Cinematic frame with active project screenshot background
- Dark gradient overlay with project info bottom-left
- Glassmorphism thumbnail cards bottom-right, auto-advancing every 5s

### 11. Blog Preview
- 2×2 card grid with hover effect: rounded image slides in from top-right (spring animation, inspired by Buildio reference)
- Category, reading time, excerpt on each card

### 12. Reader's Corner Preview
- 4 book cards with tilt-up hover animation
- Cover image, title, author, star rating

### 13. FAQ Accordion
- Expandable items with rotating +/× icon
- One open at a time, layout animation

### 14. Footer
- Dark (#141414) with rounded top corners and gradient glow border
- "Don't be a stranger" section with newsletter email input (glassmorphism)
- Social icons, link columns, copyright

### 15. Sticky Widget
- Fixed bottom-right glassmorphism card with "NEW" badge
- Dismissible with sessionStorage, spring entry animation

---

## Phase 2 (Future): Inner Pages
- /resources, /builds, /builds/[slug], /blog, /blog/[slug], /resources/readers-corner, /about, /contact
- All using the same design language, ScrollReveal, and motion patterns

## Phase 3 (Future): Backend & CMS
- Supabase for contact form submissions and newsletter signups
- Sanity CMS integration for blog posts, builds, resources, and books

**All content will use mock/placeholder data for Phase 1**, ready to swap in real data later.

