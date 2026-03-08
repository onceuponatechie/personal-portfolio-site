

# Phase 2: Inner Pages + Homepage Fixes

## Homepage Fixes (Priority)

### 1. Unified surface color
All homepage sections currently alternate between `bg-background`, `bg-card`, etc. Change every section to use the same cream background as the hero (`bg-background` which is `#FAFAF7`). Remove `bg-card` from ProcessSteps and ReadersCornerPreview.

### 2. Creative Vault Strip
- Fill the mock cards with actual placeholder images (Unsplash project screenshots) instead of empty gradient boxes
- Change the gap/container background from white gradient border to black — update `.gradient-border` usage: the outer wrapper background becomes `bg-dark-bg` (black) so gaps between cards appear black, and the overlay stays dark

### 3. Featured Builds — horizontal thumbnails
The 3 thumbnail cards inside the cinematic frame are stacked vertically (`flex-col`). Change to `flex-row` (horizontal) positioned at the bottom-right, side by side.

### 4. Skills Pill Grid ("Who I Am") redesign
- Remove the "Hello!" divider label and any old-style heading
- Keep only the descriptive paragraph with line-by-line reveal
- Skill pills should cluster around the text (staggered, scattered, slight rotations) with **grey glassmorphism borders** instead of white — update pill class to `bg-white/50 backdrop-blur-md border border-gray-300/50 shadow-sm rounded-full`

### 5. Blog hover images — larger
Change the hover image from `w-28 h-28` to approximately `w-48 h-40` (filling ~3/4 of top-right area of the card). Adjust card min-height if needed.

### 6. Smiley hand wave — on-brand color
Change the waving hand SVG fill from skin-tone (`hsl(30 70% 65%)`) to match the smiley's dark features color (`hsl(0 0% 15%)`) — same as the eyes and smile stroke. This keeps it on-brand with the yellow/dark palette.

### 7. Footer newsletter — pill form
Change the newsletter input container from `rounded-2xl` to `rounded-full` to make it pill-shaped. Adjust inner button to `rounded-full` as well.

---

## Phase 2: Inner Pages

All pages share: Navbar, Footer, StickyWidget, CustomCursor, ScrollReveal on all sections, Framer Motion page transitions, consistent cream background.

### 8. /resources — "The Creative Vault"
- Hero: section heading "The Creative Vault" with italic quirk
- Filter pills (Templates, Design, Automation, Freebies) with active state
- Masonry-style grid of resource cards (mock data: 8-12 items) with thumbnail, title, category badge, "Free" or price tag, Gumroad-style CTA button
- Each card: rounded-2xl, surface-light bg, hover lift

### 9. /builds — "Ship Log"
- Hero heading "Ship Log"
- Filter tabs (All, Web App, Mobile, E-Commerce)
- Grid of build cards with thumbnail, title, category, short description, tool pills
- Click navigates to `/builds/:slug`

### 10. /builds/:slug — Case Study
- Full-width hero with project screenshot, dark overlay, title + category
- Tools used as pills
- Rich text body section (mock paragraphs)
- Screenshot gallery (horizontal scroll)
- Next/Prev project navigation at bottom

### 11. /blog — "The Storyteller's Log"
- Featured post card at top (large, with image)
- Grid of remaining posts below
- Tag filter pills
- Same hover image effect from homepage preview

### 12. /blog/:slug — Blog Post
- Max-w-3xl reading layout
- Playfair Display headings, Inter body
- Share buttons (copy link, Twitter)
- Related posts at bottom

### 13. /resources/readers-corner — Books + Articles + Notes
- Tabbed layout: Books, Articles, Book Notes
- Books tab: cover grid with ratings (same style as homepage preview, more items)
- Articles tab: saved article cards with source + comment
- Book Notes tab: note cards linked to books

### 14. /about — Profile Page
- Profile image with blob mask or rounded frame
- Story section with scroll-reveal paragraphs
- "Obsessed With" cards (tools/interests grid)
- "Currently" section (currently reading, building, listening to)

### 15. /contact — "Let's Make Something Together"
- Heading with italic quirk
- Contact form: name, email, message fields with validation
- Social links row
- Form submits to a simple handler (UI-only for now, Supabase in Phase 3)

### Technical Details
- Add routes in `App.tsx` for all new paths
- Create a shared `PageLayout` wrapper (Navbar + Footer + scroll-to-top)
- Each page in `src/pages/` directory
- Mock data in each page component (ready for Sanity swap later)
- Use `react-router-dom` `useParams` for slug pages

