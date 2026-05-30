"use client";

/**
 * Hand-built SVG illustrations for the Resources bento cards.
 * All art is vector, recolored from the brand palette, and pairs with a
 * soft white gradient on each card so the set reads premium, not childish.
 */

// ---- Build Diary: stacked journals + feather quill ----
export const JournalArt = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} aria-hidden>
    <defs>
      <linearGradient id="bd-book" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="hsl(155 38% 46%)" />
        <stop offset="1" stopColor="hsl(155 42% 34%)" />
      </linearGradient>
      <linearGradient id="bd-page" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#fffdf7" />
        <stop offset="1" stopColor="#f1ece0" />
      </linearGradient>
    </defs>
    {/* lower book */}
    <rect x="34" y="92" width="150" height="46" rx="8" fill="url(#bd-book)" />
    <rect x="34" y="92" width="14" height="46" rx="7" fill="hsl(155 42% 28%)" />
    {/* open journal */}
    <g transform="rotate(-7 120 70)">
      <rect x="46" y="34" width="148" height="74" rx="9" fill="hsl(213 45% 40%)" />
      <rect x="54" y="40" width="132" height="62" rx="6" fill="url(#bd-page)" />
      <line x1="120" y1="42" x2="120" y2="100" stroke="#dcd4c4" strokeWidth="2" />
      {[52, 62, 72, 82].map((y) => (
        <line key={`l${y}`} x1="64" y1={y} x2="110" y2={y} stroke="#cfc6b4" strokeWidth="2.4" strokeLinecap="round" />
      ))}
      {[52, 62, 72].map((y) => (
        <line key={`r${y}`} x1="130" y1={y} x2="176" y2={y} stroke="#cfc6b4" strokeWidth="2.4" strokeLinecap="round" />
      ))}
    </g>
    {/* quill */}
    <g transform="rotate(38 160 64)">
      <path d="M150 96 C156 64 172 40 200 26 C184 52 178 78 176 100 Z" fill="hsl(44 80% 70%)" />
      <path d="M158 92 C164 66 176 48 196 34" stroke="hsl(44 70% 52%)" strokeWidth="2" fill="none" strokeLinecap="round" />
      <line x1="150" y1="96" x2="146" y2="108" stroke="hsl(0 0% 18%)" strokeWidth="3" strokeLinecap="round" />
    </g>
  </svg>
);

// ---- Templates: browser window + component chips + wireframes ----
export const TemplatesArt = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} aria-hidden>
    <defs>
      <linearGradient id="tp-win" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#ffffff" />
        <stop offset="1" stopColor="#f3f0e8" />
      </linearGradient>
    </defs>
    {/* main window */}
    <rect x="20" y="22" width="150" height="116" rx="12" fill="url(#tp-win)" stroke="#e6e0d2" strokeWidth="1.5" />
    <line x1="20" y1="44" x2="170" y2="44" stroke="#ece6d8" strokeWidth="1.5" />
    <circle cx="34" cy="33" r="3.2" fill="hsl(18 78% 60%)" />
    <circle cx="46" cy="33" r="3.2" fill="hsl(44 80% 65%)" />
    <circle cx="58" cy="33" r="3.2" fill="hsl(155 38% 46%)" />
    {/* component chips */}
    <rect x="32" y="56" width="40" height="24" rx="6" fill="hsl(255 40% 88%)" />
    <rect x="80" y="56" width="78" height="10" rx="5" fill="#e7e1d3" />
    <rect x="80" y="70" width="58" height="10" rx="5" fill="#efe9db" />
    <rect x="32" y="92" width="58" height="36" rx="6" fill="hsl(196 60% 88%)" />
    <rect x="98" y="92" width="60" height="36" rx="6" fill="hsl(155 40% 88%)" />
    {/* floating chips card */}
    <g>
      <rect x="150" y="74" width="74" height="64" rx="10" fill="#ffffff" stroke="#e6e0d2" strokeWidth="1.5" />
      {[
        { x: 160, c: "hsl(255 40% 70%)" },
        { x: 184, c: "hsl(18 78% 62%)" },
        { x: 208, c: "hsl(196 65% 60%)" },
      ].map((b) => (
        <rect key={b.x} x={b.x} y="84" width="16" height="16" rx="5" fill={b.c} />
      ))}
      {[108, 120].map((y) => (
        <line key={y} x1="160" y1={y} x2="214" y2={y} stroke="#e7e1d3" strokeWidth="3.5" strokeLinecap="round" />
      ))}
    </g>
  </svg>
);

// ---- Bookshelf: stacked books + review/browser card ----
export const BookshelfArt = ({ className = "" }: { className?: string }) => {
  const spines = [
    "hsl(255 40% 72%)",
    "hsl(196 60% 64%)",
    "hsl(155 40% 52%)",
    "hsl(44 80% 66%)",
    "hsl(18 78% 64%)",
  ];
  return (
    <svg viewBox="0 0 240 160" fill="none" className={className} aria-hidden>
      <defs>
        <linearGradient id="bs-card" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#f4f1ea" />
        </linearGradient>
      </defs>
      {/* stack */}
      {spines.map((c, i) => {
        const w = 96 - i * 6;
        return (
          <rect key={i} x={26} y={120 - i * 18} width={w} height={15} rx={4} fill={c} />
        );
      })}
      <rect x="26" y="120" width="96" height="15" rx="4" fill="hsl(255 40% 60%)" opacity="0.0" />
      {/* review card */}
      <g>
        <rect x="132" y="40" width="86" height="86" rx="12" fill="url(#bs-card)" stroke="#e6e0d2" strokeWidth="1.5" />
        <rect x="144" y="52" width="26" height="34" rx="4" fill="hsl(196 55% 70%)" />
        <rect x="176" y="56" width="32" height="6" rx="3" fill="#e2dccd" />
        <rect x="176" y="68" width="24" height="6" rx="3" fill="#ebe5d6" />
        {/* stars */}
        {[0, 1, 2, 3, 4].map((s) => (
          <circle key={s} cx={148 + s * 13} cy={100} r="3.4" fill={s < 4 ? "hsl(44 85% 60%)" : "#e2dccd"} />
        ))}
        <rect x="144" y="110" width="62" height="6" rx="3" fill="#ebe5d6" />
      </g>
      {/* cursor */}
      <path d="M196 118 L196 140 L202 134 L206 142 L210 140 L206 132 L214 132 Z" fill="hsl(0 0% 16%)" />
    </svg>
  );
};

// ---- Research Vault: clipboard + chart + magnifier ----
export const ResearchArt = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 240 160" fill="none" className={className} aria-hidden>
    <defs>
      <linearGradient id="rv-doc" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#ffffff" />
        <stop offset="1" stopColor="#f4f1ea" />
      </linearGradient>
    </defs>
    {/* back doc */}
    <rect x="58" y="30" width="104" height="116" rx="10" fill="hsl(44 80% 80%)" transform="rotate(-6 110 88)" />
    {/* front clipboard */}
    <rect x="70" y="34" width="108" height="116" rx="10" fill="url(#rv-doc)" stroke="#e6e0d2" strokeWidth="1.5" />
    <rect x="108" y="28" width="32" height="14" rx="5" fill="hsl(255 35% 64%)" />
    {/* bars */}
    <rect x="86" y="96" width="14" height="34" rx="3" fill="hsl(196 60% 64%)" />
    <rect x="106" y="80" width="14" height="50" rx="3" fill="hsl(255 40% 70%)" />
    <rect x="126" y="104" width="14" height="26" rx="3" fill="hsl(155 40% 52%)" />
    {/* lines */}
    {[52, 62].map((y) => (
      <line key={y} x1="86" y1={y} x2="162" y2={y} stroke="#e7e1d3" strokeWidth="4" strokeLinecap="round" />
    ))}
    {/* magnifier */}
    <g>
      <circle cx="158" cy="112" r="22" fill="hsl(196 60% 90%)" stroke="hsl(213 45% 42%)" strokeWidth="5" />
      <line x1="174" y1="128" x2="190" y2="144" stroke="hsl(213 45% 42%)" strokeWidth="7" strokeLinecap="round" />
    </g>
  </svg>
);
