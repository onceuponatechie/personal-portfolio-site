

# Comprehensive Homepage Refinements

## 1. Creative Vault Strip — restore auto-scroll + wider cards
- Add `@keyframes scroll-up` to `index.css` (translateY from 0 to -50% loop)
- Set container height back to `1200px`
- Remove side padding, increase card widths (280→340, 200→260, 320→380) and reduce gap
- Layout as CSS columns instead of flex-wrap for better masonry scroll effect

## 2. Skills Pill Grid ("Who I Am") — redesign per reference image
- New text: `"A product storyteller and creative builder who turns ideas into experiences through narratives, design, & automation."` split into 3-4 lines
- Italicize key words: *storyteller*, *creative builder*, *experiences*, *narratives*, *design*, *automation*
- Each line appears at 0.5s intervals
- Desktop: pills flank text — 3 left, 3 right — with staggered Y offsets and slight rotations matching the reference image style (pills at varying heights, slightly tilted)
- Each pill: `bg-white/60 backdrop-blur-xl border border-white/40 shadow-[0_4px_12px_rgba(0,0,0,0.08)] rounded-full px-5 py-3` for 3D weight feel
- Larger bespoke 3D SVG icons (24px) with gradient fills and subtle shadow/highlight layers
- Mobile: pills wrap centered below paragraph

## 3. Process Steps ("How I Build") — 3D cards + squiggly connector
- Replace Lucide icons with custom 3D gradient SVG icons (each a different accent color: orange lightbulb, lavender palette, blue rocket)
- Cards: add `bg-white/60 backdrop-blur-xl border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.06)]` for glassmorphism + 3D depth
- Replace current SVG path with a large distinct squiggly intertwining line using `motion.path` with `pathLength` animated on scroll via `useScroll`/`useTransform` — the line flows through all 3 cards
- SVG viewBox sized to span the full grid width, positioned absolutely behind cards

## 4. Reader's Corner — single container layout (per second reference image)
- Replace 4 book cards with one large `max-w-6xl` rounded container with glassmorphism border
- Layout: left side has section label ("Reader's Corner"), brief description text, and a CTA button linking to `/resources/readers-corner`
- Right side: large image (cozy reading Unsplash photo), filling ~55% width
- Rounded corners (`rounded-3xl`), thin glassmorphism border
- Remove all individual book cards, ratings, and grid

## 5. FAQ Section — pill-shaped items with weight
- Change section bg to match blog section (`bg-surface-light`)
- FAQ items: `rounded-full` pill shape with padding, glassmorphism border
- Plus icon: wrapped in a circular black glassmorphism frame (`bg-black/80 backdrop-blur-md border border-white/20 rounded-full w-8 h-8`)
- When expanded, item changes from `rounded-full` to `rounded-2xl` to accommodate answer text

## 6. Footer — text redesign
- Change to: `Let's build an` (small, muted opacity matching "Don't be a stranger" color = `text-white/40`) + `Experience` (3x size, white, bold italic)
- Structure: "Let's" and "an" share `text-white/40` opacity; "build" stays `text-white`; "Experience" is `text-6xl md:text-8xl` white bold italic on its own line

## Files to edit
- `src/index.css` — add scroll-up keyframes
- `src/components/home/CreativeVaultStrip.tsx` — height, card widths, layout
- `src/components/home/SkillsPillGrid.tsx` — full redesign
- `src/components/home/ProcessSteps.tsx` — 3D cards, squiggly line, custom icons
- `src/components/home/ReadersCornerPreview.tsx` — single container layout
- `src/components/home/FAQAccordion.tsx` — pill shape, dark plus icon, bg color
- `src/components/layout/Footer.tsx` — text hierarchy change

