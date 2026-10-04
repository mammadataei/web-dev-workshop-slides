import {
  type DesignSystem,
  MorphElement,
  type Page,
  type SlideMeta,
  type SlideTransition,
  Step,
  Steps,
  useIsActivePage,
  useSlidePageNumber,
} from '@open-slide/core';
import type { CSSProperties, ReactNode } from 'react';

// ─── Design system ────────────────────────────────────────────────────────────

export const design: DesignSystem = {
  palette: { bg: '#ffffff', text: '#0a0a0a', accent: '#de3b3d' },
  fonts: {
    display:
      '"Geist Variable", Geist, -apple-system, BlinkMacSystemFont, "Inter", system-ui, sans-serif',
    body: '"Geist Variable", Geist, -apple-system, BlinkMacSystemFont, "Inter", system-ui, sans-serif',
  },
  typeScale: { hero: 152, body: 32 },
  radius: 12,
};

// ─── Color / shadow tokens ────────────────────────────────────────────────────

const ink = {
  text: '#0a0a0a',
  soft: '#404040',
  muted: '#6b6b6b',
  dim: '#a3a3a3',
  rule: '#e4e4e4',
  hairline: '#ececec',
  panel: '#f7f7f7',
  accent: '#de3b3d',
  accentSoft: 'rgba(222, 59, 61, 0.1)',
  mint: '#1f9e6e',
  sky: '#0ea5e9',
  amber: '#f59e0b',
  purple: '#8b5cf6',
  green: '#22c55e',
};

const font = {
  sans: 'var(--osd-font-body)',
  display: 'var(--osd-font-display)',
  mono: '"Geist Mono", ui-monospace, "SF Mono", Menlo, Consolas, monospace',
};

const shadow = {
  edge: '0 0 0 1px rgba(0,0,0,0.06), 0 1px 0 rgba(0,0,0,0.025)',
  floating: '0 1px 2px rgba(0,0,0,0.04), 0 8px 24px -8px rgba(0,0,0,0.1)',
  window:
    '0 0 0 1px rgba(0,0,0,0.07), 0 1px 2px rgba(0,0,0,0.04), 0 12px 32px -12px rgba(0,0,0,0.12)',
};

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';
const EASE_OUT = 'cubic-bezier(0, 0, 0.2, 1)';
const EASE_IN = 'cubic-bezier(0.4, 0, 1, 1)';

// ─── Inline icons (lucide-style, no dependency) ─────────────────────────────
// Repo rules forbid new dependencies, so these are hand-drawn stroke SVGs in
// the Lucide visual language — not emoji, no package install needed.

const Svg = ({
  size = 40,
  color = ink.soft,
  strokeWidth = 1.8,
  children,
}: {
  size?: number;
  color?: string;
  strokeWidth?: number;
  children: ReactNode;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const IconGlobe = ({ size = 40, color = ink.soft }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3c2.5 2.6 3.9 5.7 3.9 9s-1.4 6.4-3.9 9c-2.5-2.6-3.9-5.7-3.9-9S9.5 5.6 12 3z" />
  </Svg>
);

const IconDoc = ({ size = 40, color = ink.soft }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
    <path d="M14 3v5h5" />
    <path d="M9 13h6M9 17h6" />
  </Svg>
);

const IconMonitor = ({ size = 40, color = ink.soft }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <rect x="3" y="4" width="18" height="12" rx="2" />
    <path d="M8 20h8M12 16v4" />
  </Svg>
);

const IconServer = ({ size = 40, color = ink.soft }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <rect x="3" y="4" width="18" height="7" rx="2" />
    <rect x="3" y="13" width="18" height="7" rx="2" />
    <path d="M7 7.5h.01M7 16.5h.01" />
  </Svg>
);

const IconSwap = ({ size = 40, color = ink.soft }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <path d="M4 12h16" />
    <path d="m14 6 6 6-6 6" />
  </Svg>
);

const IconBox = ({ size = 40, color = ink.soft }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9z" />
    <path d="M12 12 4 7.5M12 12l8-4.5M12 12v9" />
  </Svg>
);

const IconBook = ({ size = 40, color = ink.soft }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z" />
    <path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5" />
  </Svg>
);

const IconPin = ({ size = 40, color = ink.soft }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </Svg>
);

const IconZap = ({ size = 40, color = ink.soft }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <path d="M13 2 4 14h6l-1 8 9-12h-6z" />
  </Svg>
);

const IconBrush = ({ size = 40, color = ink.soft }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <path d="m14 5 5 5L8 21H3v-5z" />
    <path d="m12 7 5 5" />
  </Svg>
);

const IconLayout = ({ size = 40, color = ink.soft }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M9 9v12" />
  </Svg>
);

const IconDb = ({ size = 40, color = ink.soft }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <ellipse cx="12" cy="5" rx="8" ry="3" />
    <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
    <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
  </Svg>
);

const IconCloud = ({ size = 40, color = ink.soft }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <path d="M17.5 18a4.5 4.5 0 0 0 .4-9A6 6 0 0 0 6.2 10.5 3.8 3.8 0 0 0 7 18z" />
  </Svg>
);

const IconCode = ({ size = 40, color = ink.soft }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <path d="m8 8-5 4 5 4M16 8l5 4-5 4" />
  </Svg>
);

const IconLayers = ({ size = 40, color = ink.soft }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <path d="m12 3 9 5-9 5-9-5z" />
    <path d="m3 13 9 5 9-5" />
  </Svg>
);

const IconTile = ({
  bg,
  border,
  children,
}: {
  bg: string;
  border: string;
  children: ReactNode;
}) => (
  <div
    style={{
      width: 76,
      height: 76,
      borderRadius: 20,
      background: bg,
      border: `2px solid ${border}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    }}
  >
    {children}
  </div>
);

// ─── Slide transition ─────────────────────────────────────────────────────────

export const transition: SlideTransition = {
  duration: 200,
  exit: {
    duration: 140,
    easing: EASE_IN,
    keyframes: [
      { opacity: 1, transform: 'translateY(0)' },
      { opacity: 1, transform: 'translateY(-4px)' },
    ],
  },
  enter: {
    duration: 200,
    delay: 80,
    easing: EASE_OUT,
    keyframes: [
      { opacity: 0, transform: 'translateY(6px)' },
      { opacity: 1, transform: 'translateY(0)' },
    ],
  },
};

const morphFade: SlideTransition = {
  duration: 280,
  exit: { duration: 200, easing: EASE_IN, keyframes: [{ opacity: 1 }, { opacity: 1 }] },
  enter: {
    duration: 280,
    delay: 100,
    easing: EASE_OUT,
    keyframes: [{ opacity: 0 }, { opacity: 1 }],
  },
  morph: { duration: 700, easing: 'cubic-bezier(0.4,0,0.2,1)' },
};

// ─── Utilities ────────────────────────────────────────────────────────────────

const pad2 = (n: number) => String(n).padStart(2, '0');

const fill: CSSProperties = {
  width: '100%',
  height: '100%',
  position: 'relative',
  overflow: 'hidden',
  background: 'var(--osd-bg)',
  color: 'var(--osd-text)',
  fontFamily: 'var(--osd-font-body)',
  letterSpacing: '-0.01em',
  WebkitFontSmoothing: 'antialiased',
};

// ─── Keyframes / animation CSS ────────────────────────────────────────────────

const css = `
  .gs { animation-timing-function: ${EASE}; animation-fill-mode: both; }
  [data-still] .gs { animation: none !important; }
  @media (prefers-reduced-motion: reduce) { .gs { animation: none !important; } }
  @keyframes gs-rise    { from { opacity: 0; transform: translateY(12px); } }
  @keyframes gs-rise-sm { from { opacity: 0; transform: translateY(6px); } }
  @keyframes gs-fade    { from { opacity: 0; } }
  @keyframes gs-bloom   { from { opacity: 0; transform: translateY(6px) scale(0.98); } }
  @keyframes gs-pop     { from { opacity: 0; transform: translateY(6px) scale(0.95); } }
  .gs-rise    { animation-name: gs-rise;    animation-duration: 0.7s; }
  .gs-rise-sm { animation-name: gs-rise-sm; animation-duration: 0.45s; }
  .gs-fade    { animation-name: gs-fade;    animation-duration: 0.45s; }
  .gs-bloom   { animation-name: gs-bloom;   animation-duration: 0.32s; }
  .gs-pop     { animation-name: gs-pop;     animation-duration: 0.28s; }

  @keyframes gs-ping {
    0%    { transform: scale(1); opacity: 0.6; }
    75%, 100% { transform: scale(2.2); opacity: 0; }
  }
  .gs-ping {
    transform: scale(2.2); opacity: 0;
    animation-name: gs-ping; animation-duration: 1.6s;
    animation-timing-function: ${EASE_OUT}; animation-iteration-count: infinite;
  }

  @keyframes gs-spin { to { transform: rotate(360deg); } }
  .gs-spin {
    animation-name: gs-spin; animation-duration: 1.2s;
    animation-timing-function: linear; animation-iteration-count: infinite;
  }

  @keyframes gs-pulse {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.35; }
  }
  .gs-pulse {
    animation-name: gs-pulse; animation-duration: 2s;
    animation-timing-function: ${EASE}; animation-iteration-count: infinite;
  }

  /* DNS packet travel animation */
  @keyframes pkt-travel {
    0%   { transform: translateX(0);    opacity: 0; }
    5%   { opacity: 1; }
    45%  { transform: translateX(320px); opacity: 1; }
    50%  { transform: translateX(320px); opacity: 0; }
    55%  { transform: translateX(320px); opacity: 0; }
    60%  { transform: translateX(320px); opacity: 1; }
    95%  { transform: translateX(0);    opacity: 1; }
    100% { transform: translateX(0);    opacity: 0; }
  }
  .pkt-travel {
    animation-name: pkt-travel;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ${EASE};
  }

  /* HTTP flow animation */
  @keyframes http-req {
    0%   { transform: translateX(0); opacity: 0; }
    8%   { opacity: 1; }
    42%  { transform: translateX(480px); opacity: 1; }
    50%  { transform: translateX(480px); opacity: 0; }
    100% { transform: translateX(480px); opacity: 0; }
  }
  @keyframes http-res {
    0%   { transform: translateX(480px); opacity: 0; }
    50%  { transform: translateX(480px); opacity: 0; }
    58%  { opacity: 1; }
    92%  { transform: translateX(0); opacity: 1; }
    100% { transform: translateX(0); opacity: 0; }
  }
  .http-req {
    animation-name: http-req; animation-duration: 3.6s;
    animation-iteration-count: infinite; animation-timing-function: ${EASE};
  }
  .http-res {
    animation-name: http-res; animation-duration: 3.6s;
    animation-iteration-count: infinite; animation-timing-function: ${EASE};
  }

  /* Browser pipeline step highlight */
  @keyframes pipe-glow {
    0%, 100% { background: #f7f7f7; color: #6b6b6b; }
    50%       { background: rgba(222,59,61,0.08); color: #de3b3d; }
  }

  /* Network tab row appear */
  @keyframes net-row {
    from { opacity: 0; transform: translateY(4px); }
    to   { opacity: 1; transform: none; }
  }
`;

const Styles = () => <style>{css}</style>;

// ─── Shared components ────────────────────────────────────────────────────────

const Mark = () => (
  <MorphElement id="mark">
    <div
      style={{
        position: 'absolute',
        left: 120,
        top: 101,
        width: 16,
        height: 16,
        borderRadius: 4,
        background: 'var(--osd-accent)',
      }}
    />
  </MorphElement>
);

const Footer = () => {
  const { current, total } = useSlidePageNumber();
  return (
    <div
      className="gs gs-fade"
      style={{
        position: 'absolute',
        left: 120,
        right: 120,
        bottom: 88,
        display: 'flex',
        justifyContent: 'space-between',
        fontFamily: font.mono,
        fontSize: 20,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: ink.dim,
        animationDelay: '0.3s',
      }}
    >
      <span>session 01 · how the web works</span>
      <span>
        {pad2(current)} / {pad2(total)}
      </span>
    </div>
  );
};

const Frame = ({
  eyebrow,
  title,
  lead,
  mark: showMark = true,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  mark?: boolean;
  children: ReactNode;
}) => {
  const active = useIsActivePage();
  return (
    <div style={fill} data-still={active ? undefined : ''}>
      <Styles />
      {showMark && <Mark />}
      <div
        className="gs gs-rise"
        style={{
          position: 'absolute',
          left: showMark ? 148 : 120,
          top: 96,
          fontSize: 22,
          lineHeight: '26px',
          fontWeight: 500,
          color: 'var(--osd-accent)',
        }}
      >
        {eyebrow}
      </div>
      <h2
        className="gs gs-rise"
        style={{
          position: 'absolute',
          left: 120,
          top: 138,
          margin: 0,
          fontFamily: font.display,
          fontSize: 64,
          fontWeight: 500,
          letterSpacing: '-0.03em',
          lineHeight: 1.06,
          animationDelay: '0.06s',
        }}
      >
        {title}
      </h2>
      {lead && (
        <p
          className="gs gs-rise"
          style={{
            position: 'absolute',
            left: 120,
            top: 224,
            margin: 0,
            maxWidth: 1240,
            fontSize: 26,
            lineHeight: 1.45,
            color: ink.soft,
            animationDelay: '0.12s',
          }}
        >
          {lead}
        </p>
      )}
      <div
        style={{
          position: 'absolute',
          left: 120,
          right: 120,
          top: lead ? 316 : 280,
          bottom: 160,
        }}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

// Styled bullet row used by several list pages
const BulletRow = ({
  icon,
  label,
  sub,
  delay = 0,
  accent = false,
}: {
  icon: ReactNode;
  label: string;
  sub?: string;
  delay?: number;
  accent?: boolean;
}) => (
  <div
    className="gs gs-rise"
    style={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: 24,
      animationDelay: `${delay}s`,
    }}
  >
    <span style={{ flexShrink: 0, marginTop: 4 }}>{icon}</span>
    <div>
      <span
        style={{
          fontSize: 36,
          fontWeight: accent ? 600 : 400,
          color: accent ? ink.accent : ink.soft,
          lineHeight: 1.35,
        }}
      >
        {label}
      </span>
      {sub && (
        <span
          style={{
            display: 'block',
            fontSize: 24,
            color: ink.muted,
            lineHeight: 1.4,
            marginTop: 4,
          }}
        >
          {sub}
        </span>
      )}
    </div>
  </div>
);

// Window chrome (like a browser tab)
const Dots = () => (
  <span style={{ display: 'flex', gap: 8, width: 49 }}>
    <span style={{ width: 11, height: 11, borderRadius: '50%', background: ink.rule }} />
    <span style={{ width: 11, height: 11, borderRadius: '50%', background: ink.rule }} />
    <span style={{ width: 11, height: 11, borderRadius: '50%', background: ink.rule }} />
  </span>
);

const Window = ({
  title,
  children,
  delay = 0,
  style,
  bodyStyle,
}: {
  title: ReactNode;
  children: ReactNode;
  delay?: number;
  style?: CSSProperties;
  bodyStyle?: CSSProperties;
}) => (
  <div
    className="gs gs-bloom"
    style={{
      display: 'flex',
      flexDirection: 'column',
      background: '#fff',
      borderRadius: 12,
      boxShadow: shadow.window,
      overflow: 'hidden',
      animationDelay: `${delay}s`,
      ...style,
    }}
  >
    <div
      style={{
        height: 52,
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        padding: '0 20px',
        borderBottom: `1px solid ${ink.hairline}`,
        fontFamily: font.mono,
        fontSize: 16,
        color: ink.muted,
      }}
    >
      <Dots />
      <span style={{ flex: 1, textAlign: 'center' }}>{title}</span>
    </div>
    <div style={{ flex: 1, minHeight: 0, position: 'relative', ...bodyStyle }}>{children}</div>
  </div>
);

// Tag badge (for HTTP status etc.)
const Badge = ({
  label,
  color = ink.accent,
  bg = ink.accentSoft,
}: {
  label: string;
  color?: string;
  bg?: string;
}) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      height: 36,
      padding: '0 14px',
      borderRadius: 8,
      background: bg,
      color,
      fontFamily: font.mono,
      fontSize: 22,
      fontWeight: 600,
      letterSpacing: '0.04em',
    }}
  >
    {label}
  </span>
);

// ─── PAGE 01: Cover ────────────────────────────────────────────────────────────

const Cover: Page = () => {
  const active = useIsActivePage();
  return (
    <div style={{ ...fill, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 160px' }} data-still={active ? undefined : ''}>
      <Styles />
      {/* Session number badge */}
      <div className="gs gs-fade" style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 48 }}>
        <div style={{ width: 16, height: 16, borderRadius: 4, background: 'var(--osd-accent)' }} />
        <span style={{ fontFamily: font.mono, fontSize: 20, letterSpacing: '0.12em', textTransform: 'uppercase', color: ink.dim }}>
          Session 01 · 2 Hours
        </span>
      </div>
      <h1
        className="gs gs-rise"
        style={{
          margin: 0,
          fontFamily: font.display,
          fontSize: 'var(--osd-size-hero)',
          fontWeight: 900,
          letterSpacing: '-0.04em',
          lineHeight: 1,
          animationDelay: '0.05s',
        }}
      >
        How the
        <br />
        <span style={{ color: 'var(--osd-accent)' }}>Web Works</span>
      </h1>
      <p
        className="gs gs-rise"
        style={{
          margin: '40px 0 0',
          fontSize: 36,
          color: ink.muted,
          maxWidth: 1000,
          lineHeight: 1.45,
          animationDelay: '0.14s',
        }}
      >
        Internet, DNS, HTTP & Browser Engines
      </p>
      <Footer />
    </div>
  );
};

// ─── PAGE 02: Agenda ───────────────────────────────────────────────────────────

const Agenda: Page = () => {
  const active = useIsActivePage();
  return (
    <div style={fill} data-still={active ? undefined : ''}>
      <Styles />
      <Mark />
      <div className="gs gs-rise" style={{ position: 'absolute', left: 148, top: 96, fontSize: 22, fontWeight: 500, color: 'var(--osd-accent)' }}>
        Today
      </div>
      <h2 className="gs gs-rise" style={{ position: 'absolute', left: 120, top: 138, margin: 0, fontFamily: font.display, fontSize: 64, fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1.06, animationDelay: '0.06s' }}>
        Session Agenda
      </h2>

      {/* 4 agenda cards */}
      <div
        style={{
          position: 'absolute',
          left: 120,
          right: 120,
          top: 260,
          bottom: 160,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 24,
        }}
      >
        {/* Card 1 */}
        <div className="gs gs-bloom" style={{ background: ink.panel, borderRadius: 16, padding: '32px 36px', animationDelay: '0.1s' }}>
          <div style={{ fontFamily: font.mono, fontSize: 18, color: ink.accent, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>Part 1 · 45 min</div>
          <div style={{ fontSize: 34, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 12 }}>How the Web Really Works</div>
          <div style={{ fontSize: 24, color: ink.muted, lineHeight: 1.4 }}>HTML/CSS/JS, standards, client-server, IP, DNS, HTTP</div>
        </div>
        {/* Card 2 */}
        <div className="gs gs-bloom" style={{ background: ink.panel, borderRadius: 16, padding: '32px 36px', animationDelay: '0.16s' }}>
          <div style={{ fontFamily: font.mono, fontSize: 18, color: ink.accent, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>Part 2 · 15 min</div>
          <div style={{ fontSize: 34, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 12 }}>The Browser as an Engine</div>
          <div style={{ fontSize: 24, color: ink.muted, lineHeight: 1.4 }}>Rendering pipeline: HTML, CSS, JS → pixels</div>
        </div>
        {/* Card 3 */}
        <div className="gs gs-bloom" style={{ background: ink.panel, borderRadius: 16, padding: '32px 36px', animationDelay: '0.22s' }}>
          <div style={{ fontFamily: font.mono, fontSize: 18, color: ink.accent, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>Part 3 · 15 min</div>
          <div style={{ fontSize: 34, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 12 }}>Frontend & Backend Worlds</div>
          <div style={{ fontSize: 24, color: ink.muted, lineHeight: 1.4 }}>Languages, frameworks & tools on each side</div>
        </div>
        {/* Card 4 */}
        <div className="gs gs-bloom" style={{ background: ink.panel, borderRadius: 16, padding: '32px 36px', animationDelay: '0.28s' }}>
          <div style={{ fontFamily: font.mono, fontSize: 18, color: ink.accent, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>Part 4 · 45 min</div>
          <div style={{ fontSize: 34, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 12 }}>Hands-on Lab & DevTools</div>
          <div style={{ fontSize: 24, color: ink.muted, lineHeight: 1.4 }}>VS Code + Live Server, Network tab, first webpage</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// ─── PAGE 03: Section divider — Part 1 ────────────────────────────────────────

const Part1Divider: Page = () => {
  const active = useIsActivePage();
  return (
    <div
      style={{
        ...fill,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 160px',
        background: '#0a0a0a',
        color: '#ffffff',
      }}
      data-still={active ? undefined : ''}
    >
      <Styles />
      <div className="gs gs-fade" style={{ fontFamily: font.mono, fontSize: 20, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#6b6b6b', marginBottom: 40 }}>
        Part 01 · 45 min
      </div>
      <div className="gs gs-rise" style={{ fontFamily: font.display, fontSize: 120, fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 0.95, animationDelay: '0.06s' }}>
        The Internet
        <br />
        <span style={{ color: ink.accent }}>& Client-Server</span>
      </div>
      <p className="gs gs-rise" style={{ margin: '40px 0 0', fontSize: 30, color: '#6b6b6b', maxWidth: 900, lineHeight: 1.5, animationDelay: '0.14s' }}>
        HTML, CSS, JS and the standards holding them together — then requests, IP, DNS, HTTP.
      </p>
      <Footer />
    </div>
  );
};
Part1Divider.transition = morphFade;

// ─── PAGE 04: Internet vs Web ─────────────────────────────────────────────────

const InternetVsWeb: Page = () => (
  <Frame
    eyebrow="PART 01 · Concept"
    title="Internet vs. Web"
    lead="They're not the same thing — the web is just one service that runs on the internet."
  >
    {/* Two columns, 24px gap, total height budget: 1080-160-316 = 604px */}
    <div style={{ display: 'flex', gap: 32, height: '100%' }}>
      {/* Internet */}
      <div
        className="gs gs-bloom"
        style={{
          flex: 1,
          background: ink.panel,
          borderRadius: 16,
          padding: '36px 40px',
          animationDelay: '0.1s',
        }}
      >
        <div style={{ marginBottom: 16 }}>
          <IconGlobe size={48} color={ink.soft} />
        </div>
        <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 16 }}>The Internet</div>
        <div style={{ fontSize: 24, color: ink.muted, lineHeight: 1.5, marginBottom: 24 }}>
          The physical & logical infrastructure — cables, routers, satellites, and the protocol (TCP/IP) that lets devices talk.
        </div>
        <div style={{ fontFamily: font.mono, fontSize: 20, color: ink.soft, padding: '16px 20px', background: '#fff', borderRadius: 10, border: `1px solid ${ink.rule}` }}>
          Like the world's highway system
        </div>
      </div>
      {/* Web */}
      <div
        className="gs gs-bloom"
        style={{
          flex: 1,
          background: 'rgba(14,165,233,0.07)',
          borderRadius: 16,
          padding: '36px 40px',
          border: `1.5px solid rgba(14,165,233,0.25)`,
          animationDelay: '0.18s',
        }}
      >
        <div style={{ marginBottom: 16 }}>
          <IconDoc size={48} color={ink.sky} />
        </div>
        <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 16, color: ink.text }}>The Web</div>
        <div style={{ fontSize: 24, color: ink.soft, lineHeight: 1.5, marginBottom: 24 }}>
          Documents (HTML pages) linked together via URLs and fetched using HTTP — one application that runs on the internet.
        </div>
        <div style={{ fontFamily: font.mono, fontSize: 20, color: ink.sky, padding: '16px 20px', background: '#fff', borderRadius: 10, border: `1.5px solid rgba(14,165,233,0.25)` }}>
          Like websites driving on the highway
        </div>
      </div>
    </div>
  </Frame>
);

// ─── PAGE 05: HTML / CSS / JS — building analogy ──────────────────────────────

const HtmlCssJs: Page = () => (
  <Frame
    eyebrow="PART 01 · Building blocks"
    title="HTML, CSS & JavaScript"
    lead="A website is a building — structure, decoration, and electricity."
  >
    <Steps>
      <Step>
        <div style={{ display: 'flex', gap: 24, height: '100%' }}>
          <div className="gs gs-bloom" style={{ flex: 1, background: ink.panel, borderRadius: 16, padding: '28px 30px', animationDelay: '0.1s' }}>
            <IconTile bg="rgba(14,165,233,0.1)" border="rgba(14,165,233,0.3)">
              <IconLayout size={36} color={ink.sky} />
            </IconTile>
            <div style={{ fontSize: 28, fontWeight: 700, marginTop: 20, marginBottom: 8 }}>HTML — Structure</div>
            <div style={{ fontSize: 23, color: ink.soft, lineHeight: 1.45, marginBottom: 14 }}>
              Walls, rooms, doors. Defines <em>what</em> is on the page.
            </div>
            <div style={{ fontFamily: font.mono, fontSize: 20, color: ink.muted, background: '#fff', border: `1px solid ${ink.rule}`, borderRadius: 8, padding: '10px 14px' }}>
              &lt;h1&gt; &lt;p&gt; &lt;img&gt; &lt;button&gt;
            </div>
          </div>
          <div className="gs gs-bloom" style={{ flex: 1, background: ink.panel, borderRadius: 16, padding: '28px 30px', animationDelay: '0.16s' }}>
            <IconTile bg="rgba(139,92,246,0.1)" border="rgba(139,92,246,0.3)">
              <IconBrush size={36} color={ink.purple} />
            </IconTile>
            <div style={{ fontSize: 28, fontWeight: 700, marginTop: 20, marginBottom: 8 }}>CSS — Decoration</div>
            <div style={{ fontSize: 23, color: ink.soft, lineHeight: 1.45, marginBottom: 14 }}>
              Paint, wallpaper, lighting. Defines how it <em>looks</em>.
            </div>
            <div style={{ fontFamily: font.mono, fontSize: 20, color: ink.muted, background: '#fff', border: `1px solid ${ink.rule}`, borderRadius: 8, padding: '10px 14px' }}>
              color · layout · spacing · animation
            </div>
          </div>
          <div className="gs gs-bloom" style={{ flex: 1, background: ink.panel, borderRadius: 16, padding: '28px 30px', animationDelay: '0.22s' }}>
            <IconTile bg="rgba(245,158,11,0.12)" border="rgba(245,158,11,0.35)">
              <IconZap size={36} color={ink.amber} />
            </IconTile>
            <div style={{ fontSize: 28, fontWeight: 700, marginTop: 20, marginBottom: 8 }}>JS — Electricity</div>
            <div style={{ fontSize: 23, color: ink.soft, lineHeight: 1.45, marginBottom: 14 }}>
              Elevator, lights, alarms. Defines how it <em>behaves</em> — in the browser <em>and</em> on servers.
            </div>
            <div style={{ fontFamily: font.mono, fontSize: 20, color: ink.muted, background: '#fff', border: `1px solid ${ink.rule}`, borderRadius: 8, padding: '10px 14px' }}>
              click → react · fetch data · validate
            </div>
            <div style={{ fontFamily: font.mono, fontSize: 20, color: ink.soft, background: 'rgba(245,158,11,0.08)', border: `1px solid rgba(245,158,11,0.3)`, borderRadius: 8, padding: '10px 14px', marginTop: 10 }}>
              servers → Node.js · Deno · Bun
            </div>
          </div>
        </div>
      </Step>
    </Steps>
  </Frame>
);

// ─── Web standards I: the two frontend challenges ────────────────────────────

const StandardsChallenges: Page = () => (
  <Frame
    eyebrow="PART 01 · Standards"
    title="Two Challenges of the Frontend"
    lead="You ship code to computers you've never seen — and you must never break old pages."
  >
    <Steps>
      <Step>
        <div style={{ display: 'flex', gap: 24, height: '100%' }}>
          <div className="gs gs-bloom" style={{ flex: 1, background: ink.panel, borderRadius: 16, padding: '28px 30px', animationDelay: '0.1s' }}>
            <IconTile bg="rgba(14,165,233,0.1)" border="rgba(14,165,233,0.3)">
              <IconMonitor size={36} color={ink.sky} />
            </IconTile>
            <div style={{ fontSize: 28, fontWeight: 700, marginTop: 20, marginBottom: 8 }}>You don't control the runtime</div>
            <div style={{ fontSize: 23, color: ink.soft, lineHeight: 1.45, marginBottom: 14 }}>
              Windows, macOS, Linux, Android, iOS × Chrome, Safari, Firefox, Edge — each renders with a different engine.
            </div>
            <div style={{ fontFamily: font.mono, fontSize: 20, color: ink.muted, background: '#fff', border: `1px solid ${ink.rule}`, borderRadius: 8, padding: '10px 14px' }}>
              Blink → Chrome/Edge · WebKit → Safari · Gecko → Firefox
            </div>
          </div>
          <div className="gs gs-bloom" style={{ flex: 1, background: ink.panel, borderRadius: 16, padding: '28px 30px', animationDelay: '0.16s' }}>
            <IconTile bg={ink.accentSoft} border="rgba(222,59,61,0.3)">
              <IconGlobe size={36} color={ink.accent} />
            </IconTile>
            <div style={{ fontSize: 28, fontWeight: 700, marginTop: 20, marginBottom: 8 }}>You can't break the web</div>
            <div style={{ fontSize: 23, color: ink.soft, lineHeight: 1.45, marginBottom: 14 }}>
              Change a language carelessly and millions of existing sites collapse. So the web must stay <em>backward compatible</em>.
            </div>
            <div style={{ fontFamily: font.mono, fontSize: 20, color: ink.muted, background: '#fff', border: `1px solid ${ink.rule}`, borderRadius: 8, padding: '10px 14px' }}>
              1998 page → still opens today
            </div>
          </div>
        </div>
      </Step>
    </Steps>
  </Frame>
);

// ─── Web standards II: who writes the rules ──────────────────────────────────

const StandardsBodies: Page = () => (
  <Frame
    eyebrow="PART 01 · Standards"
    title="Who Keeps the Web Compatible?"
    lead="Three groups write the rules, so every browser reads the same web."
  >
    <div style={{ display: 'flex', gap: 24, height: '100%' }}>
      <StackCard
        icon={<IconDoc size={34} color={ink.sky} />}
        title="W3C"
        items="World Wide Web Consortium · HTML & CSS specs · accessibility (WCAG)"
        delay={0.1}
      />
      <StackCard
        icon={<IconLayers size={34} color={ink.purple} />}
        title="WHATWG"
        items="Browser vendors · HTML Living Standard · DOM · Fetch"
        delay={0.16}
      />
      <StackCard
        icon={<IconCode size={34} color={ink.amber} />}
        title="TC39"
        items="JavaScript committee · ECMAScript evolution · proposals stage 0 → 4"
        delay={0.22}
        dark
      />
    </div>
  </Frame>
);

// ─── PAGE 06: Client-Server Model ─────────────────────────────────────────────

const ClientServer: Page = () => (
  <Frame
    eyebrow="PART 01 · Model"
    title="Client-Server Architecture"
    lead="Concrete example: you open instagram.com/alice — her photos live on Instagram's computer, not yours."
  >
    <Steps>
      <Step>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28, marginBottom: 26 }}>
          <IconTile bg={ink.accentSoft} border="rgba(222,59,61,0.3)">
            <IconMonitor size={36} color={ink.accent} />
          </IconTile>
          <div>
            <div style={{ fontSize: 34, fontWeight: 600, color: ink.text }}>Client — the browser</div>
            <div style={{ fontSize: 26, color: ink.muted, lineHeight: 1.4 }}>
              The diner with a menu. Asks: "show me alice's profile"
            </div>
          </div>
        </div>
      </Step>
      <Step>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28, marginBottom: 26 }}>
          <IconTile bg={ink.panel} border={ink.rule}>
            <IconSwap size={36} color={ink.soft} />
          </IconTile>
          <div>
            <div style={{ fontSize: 34, fontWeight: 600, color: ink.accent }}>HTTP — the waiter + order slip</div>
            <div style={{ fontSize: 26, color: ink.muted, lineHeight: 1.4 }}>
              Carries a structured request one way, a structured answer back
            </div>
          </div>
        </div>
      </Step>
      <Step>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28, marginBottom: 26 }}>
          <IconTile bg="rgba(31,158,110,0.1)" border="rgba(31,158,110,0.3)">
            <IconServer size={36} color={ink.mint} />
          </IconTile>
          <div>
            <div style={{ fontSize: 34, fontWeight: 600, color: ink.text }}>Server — kitchen + pantry</div>
            <div style={{ fontSize: 26, color: ink.muted, lineHeight: 1.4 }}>
              Code (kitchen) + database (pantry). Finds the photos, sends them back
            </div>
          </div>
        </div>
      </Step>
      <Step>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <IconTile bg="rgba(14,165,233,0.1)" border="rgba(14,165,233,0.3)">
            <IconBox size={36} color={ink.sky} />
          </IconTile>
          <div>
            <div style={{ fontSize: 34, fontWeight: 600, color: ink.text }}>Payload — the tray</div>
            <div style={{ fontFamily: font.mono, fontSize: 22, color: ink.muted, marginTop: 4 }}>
              HTML page · image bytes · JSON {"{ user: 'alice' }"}
            </div>
          </div>
        </div>
      </Step>
    </Steps>
  </Frame>
);

// ─── PAGE 07: Request lifecycle, step by step ────────────────────────────────

const LifecycleStep = ({
  n,
  title,
  sub,
  delay = 0,
}: {
  n: string;
  title: string;
  sub: string;
  delay?: number;
}) => (
  <div className="gs gs-rise" style={{ display: 'flex', alignItems: 'flex-start', gap: 20, animationDelay: `${delay}s` }}>
    <div
      style={{
        width: 44,
        height: 44,
        borderRadius: '50%',
        background: ink.accentSoft,
        border: `2px solid rgba(222,59,61,0.3)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: font.mono,
        fontSize: 20,
        fontWeight: 700,
        color: ink.accent,
        flexShrink: 0,
      }}
    >
      {n}
    </div>
    <div>
      <div style={{ fontSize: 30, fontWeight: 600, color: ink.text, lineHeight: 1.3 }}>{title}</div>
      <div style={{ fontSize: 24, color: ink.muted, lineHeight: 1.4, marginTop: 2 }}>{sub}</div>
    </div>
  </div>
);

const RequestLifecycle: Page = () => (
  <Frame
    eyebrow="PART 01 · Lifecycle"
    title="One Request, Step by Step"
    lead="You type google.com — follow that single request from keyboard to screen."
  >
    <div style={{ display: 'flex', gap: 40, height: '100%' }}>
      {/* Static client ↔ server diagram */}
      <div className="gs gs-bloom" style={{ flex: 1.1, background: ink.panel, borderRadius: 16, padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 24, animationDelay: '0.1s' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <IconTile bg="#fff" border={ink.rule}>
              <IconMonitor size={36} color={ink.accent} />
            </IconTile>
            <span style={{ fontFamily: font.mono, fontSize: 20, color: ink.soft }}>client</span>
          </div>
          <div style={{ flex: 1, margin: '0 20px', display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ background: '#fff', border: `1.5px solid rgba(222,59,61,0.3)`, borderRadius: 10, padding: '10px 16px', fontFamily: font.mono, fontSize: 20, color: ink.accent, textAlign: 'center' }}>
              GET google.com →
            </div>
            <div style={{ background: '#fff', border: `1.5px solid rgba(31,158,110,0.35)`, borderRadius: 10, padding: '10px 16px', fontFamily: font.mono, fontSize: 20, color: ink.mint, textAlign: 'center' }}>
              ← 200 OK + HTML
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <IconTile bg="#fff" border={ink.rule}>
              <IconServer size={36} color={ink.mint} />
            </IconTile>
            <span style={{ fontFamily: font.mono, fontSize: 20, color: ink.soft }}>server</span>
          </div>
        </div>
        <div style={{ fontFamily: font.mono, fontSize: 20, color: ink.muted, background: '#fff', border: `1px solid ${ink.rule}`, borderRadius: 10, padding: '12px 16px', textAlign: 'center' }}>
          address bar: <span style={{ color: ink.text }}>google.com</span>
        </div>
      </div>
      {/* Stepped explanation */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 26 }}>
        <Steps>
          <Step>
            <LifecycleStep n="1" title="You type google.com" sub="Browser reads the address bar." delay={0.12} />
          </Step>
          <Step>
            <LifecycleStep n="2" title="Request travels out" sub="Browser sends an HTTP request." delay={0.06} />
          </Step>
          <Step>
            <LifecycleStep n="3" title="Server answers" sub="Google finds the page, replies 200 OK." delay={0.06} />
          </Step>
          <Step>
            <LifecycleStep n="4" title="Browser shows the page" sub="HTML becomes pixels you can see." delay={0.06} />
          </Step>
        </Steps>
      </div>
    </div>
  </Frame>
);

// ─── PAGE 08: IP addresses ────────────────────────────────────────────────────

const IpAddress: Page = () => (
  <Frame
    eyebrow="PART 01 · Addressing"
    title="IP: Every Server Has an Address"
    lead="Millions of servers are online — your request needs to know exactly where to go."
  >
    <div style={{ display: 'flex', gap: 24, height: '100%' }}>
      <div className="gs gs-bloom" style={{ flex: 1, background: ink.panel, borderRadius: 16, padding: '30px 32px', animationDelay: '0.1s' }}>
        <div style={{ marginBottom: 16 }}>
          <IconPin size={40} color={ink.accent} />
        </div>
        <div style={{ fontSize: 28, fontWeight: 700, marginBottom: 10 }}>Like a postal code</div>
        <div style={{ fontSize: 23, color: ink.soft, lineHeight: 1.5 }}>
          A house needs a unique street address or the letter never arrives. A server needs a unique <strong style={{ color: ink.text }}>IP address</strong>.
        </div>
      </div>
      <div className="gs gs-bloom" style={{ flex: 1.2, background: '#0a0a0a', color: '#fff', borderRadius: 16, padding: '30px 32px', animationDelay: '0.16s' }}>
        <div style={{ fontFamily: font.mono, fontSize: 18, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8a8a8a', marginBottom: 16 }}>IPv4 example</div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 18 }}>
          <span style={{ fontFamily: font.mono, fontSize: 34, fontWeight: 700, background: 'rgba(255,255,255,0.08)', borderRadius: 10, padding: '8px 16px' }}>142</span>
          <span style={{ color: '#555', fontSize: 30 }}>.</span>
          <span style={{ fontFamily: font.mono, fontSize: 34, fontWeight: 700, background: 'rgba(255,255,255,0.08)', borderRadius: 10, padding: '8px 16px' }}>250</span>
          <span style={{ color: '#555', fontSize: 30 }}>.</span>
          <span style={{ fontFamily: font.mono, fontSize: 34, fontWeight: 700, background: 'rgba(255,255,255,0.08)', borderRadius: 10, padding: '8px 16px' }}>190</span>
          <span style={{ color: '#555', fontSize: 30 }}>.</span>
          <span style={{ fontFamily: font.mono, fontSize: 34, fontWeight: 700, background: 'rgba(222,59,61,0.25)', borderRadius: 10, padding: '8px 16px' }}>46</span>
        </div>
        <div style={{ fontSize: 22, color: '#a3a3a3', lineHeight: 1.5 }}>
          4 numbers, each 0–255. One of Google's servers. Every server on the internet has one — no duplicates.
        </div>
      </div>
    </div>
  </Frame>
);

// ─── PAGE 09: Domains ─────────────────────────────────────────────────────────

const DomainSlide: Page = () => (
  <Frame
    eyebrow="PART 01 · Naming"
    title="Domains: Names Humans Remember"
    lead="Nobody types 142.250.190.46 — we type google.com. So how does the name find the number?"
  >
    <Steps>
      <Step>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, background: ink.panel, borderRadius: 14, padding: '24px 28px', marginBottom: 24 }}>
          <IconGlobe size={40} color={ink.sky} />
          <div style={{ fontFamily: font.mono, fontSize: 30, color: ink.text }}>
            google<span style={{ color: ink.muted }}>.com</span>
            <span style={{ fontSize: 22, color: ink.muted, marginLeft: 20 }}>name + ending (.com · .org · .io · .dev)</span>
          </div>
        </div>
      </Step>
      <Step>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, background: '#fff', border: `1.5px solid ${ink.rule}`, borderRadius: 14, padding: '22px' }}>
            <span style={{ fontFamily: font.mono, fontSize: 26, color: ink.accent }}>google.com</span>
          </div>
          <IconSwap size={32} color={ink.dim} />
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, background: ink.panel, borderRadius: 14, padding: '22px' }}>
            <IconBook size={32} color={ink.sky} />
            <span style={{ fontFamily: font.mono, fontSize: 24, color: ink.soft }}>DNS contact book?</span>
          </div>
          <IconSwap size={32} color={ink.dim} />
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a0a0a', borderRadius: 14, padding: '22px' }}>
            <span style={{ fontFamily: font.mono, fontSize: 24, color: '#fff' }}>142.250.190.46</span>
          </div>
        </div>
      </Step>
    </Steps>
  </Frame>
);

// ─── PAGE 10: DNS — Animated diagram ──────────────────────────────────────────

const DNS: Page = () => {
  const active = useIsActivePage();
  return (
    <div style={fill} data-still={active ? undefined : ''}>
      <Styles />
      <Mark />
      <div className="gs gs-rise" style={{ position: 'absolute', left: 148, top: 96, fontSize: 22, fontWeight: 500, color: 'var(--osd-accent)' }}>
        PART 01 · DNS
      </div>
      <h2 className="gs gs-rise" style={{ position: 'absolute', left: 120, top: 138, margin: 0, fontFamily: font.display, fontSize: 64, fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1.06, animationDelay: '0.06s' }}>
        DNS: The Internet's Contact Book
      </h2>
      <p className="gs gs-rise" style={{ position: 'absolute', left: 120, top: 224, margin: 0, maxWidth: 1200, fontSize: 26, lineHeight: 1.45, color: ink.soft, animationDelay: '0.12s' }}>
        Your browser can't use "google.com" — it needs an IP address. DNS translates one to the other.
      </p>

      {/* Animated DNS diagram */}
      <div
        className="gs gs-bloom"
        style={{
          position: 'absolute',
          left: 120,
          right: 120,
          top: 316,
          bottom: 160,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 0,
          animationDelay: '0.2s',
        }}
      >
        {/* Browser box */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: 220 }}>
          <IconTile bg={ink.accentSoft} border="rgba(222,59,61,0.3)">
            <IconMonitor size={38} color={ink.accent} />
          </IconTile>
          <div style={{ textAlign: 'center', fontFamily: font.mono, fontSize: 20, color: ink.muted, lineHeight: 1.3 }}>
            Your Browser<br />
            <span style={{ color: ink.accent }}>google.com?</span>
          </div>
        </div>

        {/* Arrow + packet right */}
        <div style={{ flex: 1, position: 'relative', height: 80, display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '100%', height: 2, background: ink.rule, position: 'relative' }}>
            {/* Travelling packet (request) */}
            <div
              className="pkt-travel"
              style={{
                position: 'absolute',
                top: -18,
                left: 0,
                background: ink.accentSoft,
                border: `1.5px solid rgba(222,59,61,0.3)`,
                borderRadius: 8,
                padding: '6px 14px',
                fontFamily: font.mono,
                fontSize: 17,
                color: ink.accent,
                whiteSpace: 'nowrap',
              }}
            >
              google.com?
            </div>
            {/* Arrow head */}
            <div style={{ position: 'absolute', right: -1, top: -5, borderTop: '6px solid transparent', borderBottom: '6px solid transparent', borderLeft: `10px solid ${ink.rule}` }} />
          </div>
        </div>

        {/* DNS Resolver */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: 220 }}>
          <IconTile bg="rgba(14,165,233,0.1)" border="rgba(14,165,233,0.3)">
            <IconBook size={38} color={ink.sky} />
          </IconTile>
          <div style={{ textAlign: 'center', fontFamily: font.mono, fontSize: 20, color: ink.muted, lineHeight: 1.3 }}>
            DNS Resolver<br />
            <span style={{ color: ink.sky }}>142.250.190.46</span>
          </div>
        </div>

        {/* Arrow back with IP */}
        <div style={{ flex: 1, position: 'relative', height: 80, display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '100%', height: 2, background: ink.rule, position: 'relative' }}>
            {/* Returning packet (response with IP) */}
            <div
              className="pkt-travel"
              style={{
                position: 'absolute',
                bottom: 10,
                right: 0,
                background: 'rgba(14,165,233,0.08)',
                border: `1.5px solid rgba(14,165,233,0.3)`,
                borderRadius: 8,
                padding: '6px 14px',
                fontFamily: font.mono,
                fontSize: 17,
                color: ink.sky,
                whiteSpace: 'nowrap',
                animationDelay: '1.5s',
              }}
            >
              142.250.190.46
            </div>
            <div style={{ position: 'absolute', left: -1, top: -5, borderTop: '6px solid transparent', borderBottom: '6px solid transparent', borderRight: `10px solid ${ink.rule}` }} />
          </div>
        </div>

        {/* Server */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: 220 }}>
          <IconTile bg="rgba(31,158,110,0.1)" border="rgba(31,158,110,0.3)">
            <IconServer size={38} color={ink.mint} />
          </IconTile>
          <div style={{ textAlign: 'center', fontFamily: font.mono, fontSize: 20, color: ink.muted, lineHeight: 1.3 }}>
            Google's Server<br />
            <span style={{ color: ink.mint }}>142.250.190.46</span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

// ─── PAGE 11: IPv4 vs IPv6 ────────────────────────────────────────────────────

const IpVersions: Page = () => (
  <Frame
    eyebrow="PART 01 · Addressing"
    title="IPv4 vs IPv6"
    lead="IPv4 is running out of addresses — IPv6 is the bigger numbering system replacing it."
  >
    <div style={{ display: 'flex', gap: 24, height: '100%' }}>
      <div className="gs gs-bloom" style={{ flex: 1, background: ink.panel, borderRadius: 16, padding: '28px 30px', animationDelay: '0.1s' }}>
        <div style={{ fontFamily: font.mono, fontSize: 18, letterSpacing: '0.1em', color: ink.muted, marginBottom: 12 }}>IPv4 · 32-BIT</div>
        <div style={{ fontFamily: font.mono, fontSize: 26, fontWeight: 700, marginBottom: 14 }}>142.250.190.46</div>
        <div style={{ fontSize: 22, color: ink.soft, lineHeight: 1.5, marginBottom: 16 }}>
          4 decimal groups. Only ~4.3 billion addresses — not enough for every phone, laptop & fridge.
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <Badge label="short" color={ink.soft} bg="#fff" />
          <Badge label="readable" color={ink.soft} bg="#fff" />
          <Badge label="exhausted" color={ink.amber} bg="rgba(245,158,11,0.12)" />
        </div>
      </div>
      <div className="gs gs-bloom" style={{ flex: 1, background: '#0a0a0a', color: '#fff', borderRadius: 16, padding: '28px 30px', animationDelay: '0.16s' }}>
        <div style={{ fontFamily: font.mono, fontSize: 18, letterSpacing: '0.1em', color: '#8a8a8a', marginBottom: 12 }}>IPv6 · 128-BIT</div>
        <div style={{ fontFamily: font.mono, fontSize: 22, fontWeight: 700, marginBottom: 14, lineHeight: 1.4 }}>2607:f8b0:4005::200e</div>
        <div style={{ fontSize: 22, color: '#a3a3a3', lineHeight: 1.5, marginBottom: 16 }}>
          8 hex groups. ~340 undecillion addresses — every grain of sand could have one.
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <Badge label="long" color="#fff" bg="rgba(255,255,255,0.12)" />
          <Badge label="future-proof" color={ink.mint} bg="rgba(31,158,110,0.18)" />
        </div>
      </div>
    </div>
  </Frame>
);

// ─── PAGE 12: HTTP Basics ─────────────────────────────────────────────────────

const HTTPBasics: Page = () => (
  <Frame
    eyebrow="PART 01 · HTTP"
    title="HTTP: Requests & Responses"
    lead="Verbs say what you want to do — status codes say what happened."
  >
    <Steps>
      <Step>
        <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
          <div style={{ flex: 1, padding: '14px 18px', background: 'rgba(34,197,94,0.08)', border: '1.5px solid rgba(34,197,94,0.3)', borderRadius: 10 }}>
            <div style={{ fontFamily: font.mono, fontSize: 22, color: ink.green, fontWeight: 700, marginBottom: 4 }}>GET</div>
            <div style={{ fontFamily: font.mono, fontSize: 18, color: ink.soft }}>GET /users/alice</div>
            <div style={{ fontSize: 19, color: ink.muted, marginTop: 4 }}>read a page</div>
          </div>
          <div style={{ flex: 1, padding: '14px 18px', background: 'rgba(245,158,11,0.08)', border: '1.5px solid rgba(245,158,11,0.3)', borderRadius: 10 }}>
            <div style={{ fontFamily: font.mono, fontSize: 22, color: ink.amber, fontWeight: 700, marginBottom: 4 }}>POST</div>
            <div style={{ fontFamily: font.mono, fontSize: 18, color: ink.soft }}>POST /users</div>
            <div style={{ fontSize: 19, color: ink.muted, marginTop: 4 }}>submit a form</div>
          </div>
          <div style={{ flex: 1, padding: '14px 18px', background: ink.panel, border: `1.5px solid ${ink.rule}`, borderRadius: 10 }}>
            <div style={{ fontFamily: font.mono, fontSize: 22, color: ink.text, fontWeight: 700, marginBottom: 4 }}>PUT</div>
            <div style={{ fontFamily: font.mono, fontSize: 18, color: ink.soft }}>PUT /users/42</div>
            <div style={{ fontSize: 19, color: ink.muted, marginTop: 4 }}>update it</div>
          </div>
          <div style={{ flex: 1, padding: '14px 18px', background: ink.panel, border: `1.5px solid ${ink.rule}`, borderRadius: 10 }}>
            <div style={{ fontFamily: font.mono, fontSize: 22, color: ink.muted, fontWeight: 700, marginBottom: 4 }}>DELETE</div>
            <div style={{ fontFamily: font.mono, fontSize: 18, color: ink.soft }}>DELETE /posts/9</div>
            <div style={{ fontSize: 19, color: ink.muted, marginTop: 4 }}>remove it</div>
          </div>
        </div>
      </Step>
      <Step>
        <div style={{ display: 'flex', gap: 16 }}>
          <div style={{ flex: 1, background: 'rgba(31,158,110,0.07)', borderRadius: 10, padding: '14px 18px' }}>
            <Badge label="2xx" color={ink.mint} bg="rgba(31,158,110,0.14)" />
            <div style={{ fontSize: 21, fontWeight: 600, marginTop: 10 }}>Success</div>
            <div style={{ fontFamily: font.mono, fontSize: 18, color: ink.muted, marginTop: 4 }}>200 OK · 201 Created</div>
          </div>
          <div style={{ flex: 1, background: 'rgba(14,165,233,0.07)', borderRadius: 10, padding: '14px 18px' }}>
            <Badge label="3xx" color={ink.sky} bg="rgba(14,165,233,0.14)" />
            <div style={{ fontSize: 21, fontWeight: 600, marginTop: 10 }}>Redirect</div>
            <div style={{ fontFamily: font.mono, fontSize: 18, color: ink.muted, marginTop: 4 }}>301 → new URL</div>
          </div>
          <div style={{ flex: 1, background: 'rgba(245,158,11,0.08)', borderRadius: 10, padding: '14px 18px' }}>
            <Badge label="4xx" color={ink.amber} bg="rgba(245,158,11,0.14)" />
            <div style={{ fontSize: 21, fontWeight: 600, marginTop: 10 }}>Your fault</div>
            <div style={{ fontFamily: font.mono, fontSize: 18, color: ink.muted, marginTop: 4 }}>404 Not Found</div>
          </div>
          <div style={{ flex: 1, background: ink.accentSoft, borderRadius: 10, padding: '14px 18px' }}>
            <Badge label="5xx" color={ink.accent} bg="rgba(222,59,61,0.14)" />
            <div style={{ fontSize: 21, fontWeight: 600, marginTop: 10 }}>Server fault</div>
            <div style={{ fontFamily: font.mono, fontSize: 18, color: ink.muted, marginTop: 4 }}>500 Error</div>
          </div>
        </div>
      </Step>
    </Steps>
  </Frame>
);

// ─── PAGE 08: Section divider — Part 2 ────────────────────────────────────────

const Part2Divider: Page = () => {
  const active = useIsActivePage();
  return (
    <div
      style={{
        ...fill,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 160px',
        background: '#0a0a0a',
        color: '#ffffff',
      }}
      data-still={active ? undefined : ''}
    >
      <Styles />
      <div className="gs gs-fade" style={{ fontFamily: font.mono, fontSize: 20, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#6b6b6b', marginBottom: 40 }}>
        Part 02 · 15 min
      </div>
      <div className="gs gs-rise" style={{ fontFamily: font.display, fontSize: 120, fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 0.95, animationDelay: '0.06s' }}>
        The Browser
        <br />
        <span style={{ color: ink.accent }}>as an Engine</span>
      </div>
      <p className="gs gs-rise" style={{ margin: '40px 0 0', fontSize: 30, color: '#6b6b6b', maxWidth: 900, lineHeight: 1.5, animationDelay: '0.14s' }}>
        What really happens in those milliseconds between pressing Enter and seeing a webpage.
      </p>
      <Footer />
    </div>
  );
};
Part2Divider.transition = morphFade;

// ─── PAGE 14: Browser Rendering Pipeline (Press-Enter journey folded in) ──────

const PipeCard = ({
  step,
  title,
  code,
  body,
  delay = 0,
  highlight = false,
  icon,
}: {
  step: string;
  title: string;
  code: string;
  body: string;
  delay?: number;
  highlight?: boolean;
  icon: ReactNode;
}) => (
  <div
    className="gs gs-bloom"
    style={{
      flex: 1,
      background: highlight ? 'rgba(222,59,61,0.06)' : ink.panel,
      border: highlight ? '1.5px solid rgba(222,59,61,0.22)' : '1.5px solid transparent',
      borderRadius: 16,
      padding: '22px 20px',
      animationDelay: `${delay}s`,
    }}
  >
    <div style={{ marginBottom: 10 }}>{icon}</div>
    <div style={{ fontFamily: font.mono, fontSize: 16, color: ink.accent, marginBottom: 8, letterSpacing: '0.04em' }}>{step}</div>
    <div style={{ fontSize: 21, fontWeight: 700, marginBottom: 8 }}>{title}</div>
    <div style={{ fontFamily: font.mono, fontSize: 17, color: ink.muted, lineHeight: 1.4 }}>{code}</div>
    <div style={{ marginTop: 12, fontSize: 20, color: ink.soft, lineHeight: 1.4 }}>{body}</div>
  </div>
);

const PipeArrow = () => <div style={{ color: ink.dim, fontSize: 26, flexShrink: 0 }}>→</div>;

const RenderingPipeline: Page = () => {
  const active = useIsActivePage();
  return (
    <div style={fill} data-still={active ? undefined : ''}>
      <Styles />
      <Mark />
      <div className="gs gs-rise" style={{ position: 'absolute', left: 148, top: 96, fontSize: 22, fontWeight: 500, color: 'var(--osd-accent)' }}>
        PART 02 · Rendering
      </div>
      <h2 className="gs gs-rise" style={{ position: 'absolute', left: 120, top: 138, margin: 0, fontFamily: font.display, fontSize: 64, fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1.06, animationDelay: '0.06s' }}>
        Browser Rendering Pipeline
      </h2>
      <p className="gs gs-rise" style={{ position: 'absolute', left: 120, top: 222, margin: 0, fontSize: 25, color: ink.soft, animationDelay: '0.1s' }}>
        HTML arrives first — then CSS, JS, layout, and paint. JS can rewrite the first two live.
      </p>

      {/* Pipeline steps as horizontal flow */}
      <div
        style={{
          position: 'absolute',
          left: 120,
          right: 120,
          top: 292,
          bottom: 160,
          display: 'flex',
          alignItems: 'stretch',
          justifyContent: 'space-between',
          gap: 10,
        }}
      >
        <PipeCard step="STEP 1" title="HTML → DOM" code="<html> → tree" body="Tags become nodes the browser understands." delay={0.1} icon={<IconLayout size={30} color={ink.sky} />} />
        <PipeArrow />
        <PipeCard step="STEP 2" title="CSS → CSSOM" code="CSS → style tree" body="Rules attach to each DOM node." delay={0.16} icon={<IconBrush size={30} color={ink.purple} />} />
        <PipeArrow />
        <PipeCard step="STEP 3" title="JavaScript" code="script runs" body="Changes DOM + CSSOM live. Buttons, fetch, motion." delay={0.22} highlight icon={<IconZap size={30} color={ink.amber} />} />
        <PipeArrow />
        <PipeCard step="STEP 4" title="Layout" code="sizes + positions" body="Every box gets coordinates." delay={0.28} icon={<IconLayers size={30} color={ink.soft} />} />
        <PipeArrow />
        <PipeCard step="STEP 5" title="Paint" code="pixels → screen" body="Layers drawn, then composited." delay={0.34} icon={<IconMonitor size={30} color={ink.accent} />} />
      </div>

      <Footer />
    </div>
  );
};

// ─── PAGE 15: Section divider — Part 3 (Frontend & Backend) ────────────────────

const PartFrontendBackendDivider: Page = () => {
  const active = useIsActivePage();
  return (
    <div
      style={{
        ...fill,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 160px',
        background: '#0a0a0a',
        color: '#ffffff',
      }}
      data-still={active ? undefined : ''}
    >
      <Styles />
      <div className="gs gs-fade" style={{ fontFamily: font.mono, fontSize: 20, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#6b6b6b', marginBottom: 40 }}>
        Part 03 · 15 min
      </div>
      <div className="gs gs-rise" style={{ fontFamily: font.display, fontSize: 120, fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 0.95, animationDelay: '0.06s' }}>
        Frontend
        <br />
        <span style={{ color: ink.accent }}>& Backend</span>
      </div>
      <p className="gs gs-rise" style={{ margin: '40px 0 0', fontSize: 30, color: '#6b6b6b', maxWidth: 900, lineHeight: 1.5, animationDelay: '0.14s' }}>
        Two worlds, one web — what runs in the browser vs. what runs on the server.
      </p>
      <Footer />
    </div>
  );
};
PartFrontendBackendDivider.transition = morphFade;

const StackCard = ({
  icon,
  title,
  items,
  delay = 0,
  dark = false,
  titleSize = 26,
  itemsSize = 20,
}: {
  icon: ReactNode;
  title: string;
  items: string;
  delay?: number;
  dark?: boolean;
  titleSize?: number;
  itemsSize?: number;
}) => (
  <div
    className="gs gs-bloom"
    style={{
      flex: 1,
      background: dark ? '#0a0a0a' : ink.panel,
      color: dark ? '#fff' : ink.text,
      borderRadius: 16,
      padding: '26px 28px',
      animationDelay: `${delay}s`,
    }}
  >
    <div style={{ marginBottom: 14 }}>{icon}</div>
    <div style={{ fontSize: titleSize, fontWeight: 700, marginBottom: 10 }}>{title}</div>
    <div style={{ fontFamily: font.mono, fontSize: itemsSize, lineHeight: 1.6, color: dark ? '#a3a3a3' : ink.soft }}>{items}</div>
  </div>
);

// ─── PAGE 16: Frontend landscape ──────────────────────────────────────────────

const FrontendStack: Page = () => (
  <Frame
    eyebrow="PART 03 · Frontend"
    title="Frontend: What Runs in the Browser"
    lead="Everything the user sees and touches — built with HTML, CSS & JavaScript."
  >
    <div style={{ display: 'flex', gap: 24, height: '100%' }}>
      <StackCard
        icon={<IconLayout size={34} color={ink.sky} />}
        title="Languages"
        items="HTML · CSS · JavaScript · TypeScript"
        delay={0.1}
        titleSize={38}
        itemsSize={28}
      />
      <StackCard
        icon={<IconLayers size={34} color={ink.purple} />}
        title="Frameworks"
        items="React · Vue · Svelte · Angular · Next.js"
        delay={0.16}
        titleSize={38}
        itemsSize={28}
      />
      <StackCard
        icon={<IconBrush size={34} color={ink.amber} />}
        title="Styling & Build"
        items="Tailwind CSS · Vite · Figma to code"
        delay={0.22}
        titleSize={38}
        itemsSize={28}
      />
    </div>
  </Frame>
);

// ─── PAGE 17: Backend landscape ───────────────────────────────────────────────

const BackendStack: Page = () => (
  <Frame
    eyebrow="PART 03 · Backend"
    title="Backend: What Runs on the Server"
    lead="Data, logins, payments — the kitchen that prepares every response."
  >
    <div style={{ display: 'flex', gap: 24, height: '100%' }}>
      <StackCard
        icon={<IconCode size={34} color={ink.mint} />}
        title="Languages & APIs"
        items="Node.js · Python · PHP · Go — Express · Django · Laravel"
        delay={0.1}
      />
      <StackCard
        icon={<IconDb size={34} color={ink.sky} />}
        title="Databases"
        items="PostgreSQL · MongoDB · Redis · SQLite to start"
        delay={0.16}
      />
      <StackCard
        icon={<IconCloud size={34} color={ink.soft} />}
        title="Hosting & Tools"
        items="Docker · Nginx · Linux · Vercel · Netlify"
        delay={0.22}
        dark
      />
    </div>
  </Frame>
);

// ─── PAGE 18: Section divider — Part 4 (Lab) ──────────────────────────────────

const Part3Divider: Page = () => {
  const active = useIsActivePage();
  return (
    <div
      style={{
        ...fill,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 160px',
        background: '#0a0a0a',
        color: '#ffffff',
      }}
      data-still={active ? undefined : ''}
    >
      <Styles />
      <div className="gs gs-fade" style={{ fontFamily: font.mono, fontSize: 20, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#6b6b6b', marginBottom: 40 }}>
        Part 04 · 45 min
      </div>
      <div className="gs gs-rise" style={{ fontFamily: font.display, fontSize: 120, fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 0.95, animationDelay: '0.06s' }}>
        Hands-on Lab
        <br />
        <span style={{ color: ink.accent }}>& DevTools</span>
      </div>
      <p className="gs gs-rise" style={{ margin: '40px 0 0', fontSize: 30, color: '#6b6b6b', maxWidth: 900, lineHeight: 1.5, animationDelay: '0.14s' }}>
        Set up your tools, explore the Network tab, and create your first live webpage.
      </p>
      <Footer />
    </div>
  );
};
Part3Divider.transition = morphFade;

// ─── PAGE 13: Tool Setup ──────────────────────────────────────────────────────

const ToolSetup: Page = () => (
  <Frame
    eyebrow="PART 04 · Setup"
    title="Tool Setup"
    lead="Three things to install — you only do this once."
  >
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
      <div className="gs gs-bloom" style={{ display: 'flex', alignItems: 'center', gap: 28, background: ink.panel, borderRadius: 14, padding: '24px 28px', animationDelay: '0.1s' }}>
        <IconTile bg="#fff" border={ink.rule}>
          <IconMonitor size={34} color={ink.soft} />
        </IconTile>
        <div>
          <div style={{ fontSize: 30, fontWeight: 600, marginBottom: 6 }}>1. VS Code</div>
          <div style={{ fontFamily: font.mono, fontSize: 21, color: ink.muted }}>code.visualstudio.com → Download for Mac/Windows</div>
        </div>
      </div>
      <div className="gs gs-bloom" style={{ display: 'flex', alignItems: 'center', gap: 28, background: ink.panel, borderRadius: 14, padding: '24px 28px', animationDelay: '0.16s' }}>
        <IconTile bg="#fff" border={ink.rule}>
          <IconLayers size={34} color={ink.sky} />
        </IconTile>
        <div>
          <div style={{ fontSize: 30, fontWeight: 600, marginBottom: 6 }}>2. Live Server Extension</div>
          <div style={{ fontFamily: font.mono, fontSize: 21, color: ink.muted }}>Extensions panel (Ctrl+Shift+X) → Search "Live Server" → Install</div>
        </div>
      </div>
      <div className="gs gs-bloom" style={{ display: 'flex', alignItems: 'center', gap: 28, background: ink.accentSoft, borderRadius: 14, padding: '24px 28px', border: `1.5px solid rgba(222,59,61,0.18)`, animationDelay: '0.22s' }}>
        <IconTile bg="#fff" border="rgba(222,59,61,0.3)">
          <IconZap size={34} color={ink.accent} />
        </IconTile>
        <div>
          <div style={{ fontSize: 30, fontWeight: 600, marginBottom: 6, color: ink.accent }}>3. Go Live</div>
          <div style={{ fontFamily: font.mono, fontSize: 21, color: ink.muted }}>Right-click index.html → "Open with Live Server" → <span style={{ color: ink.accent }}>localhost:5500</span></div>
        </div>
      </div>
    </div>
  </Frame>
);

// ─── PAGE 14: DevTools Network Tab ───────────────────────────────────────────

const NetRow = ({
  name,
  status,
  statusColor,
  type,
  size,
  time,
  delay = 0,
  highlight = false,
}: {
  name: string;
  status: string;
  statusColor: string;
  type: string;
  size: string;
  time: string;
  delay?: number;
  highlight?: boolean;
}) => (
  <div
    style={{
      display: 'flex',
      padding: '10px 16px',
      borderBottom: `1px solid ${ink.hairline}`,
      animation: `net-row 0.35s ${EASE} ${delay}s both`,
      background: highlight ? 'rgba(222,59,61,0.04)' : 'transparent',
    }}
  >
    <span style={{ flex: 3, fontFamily: font.mono, fontSize: 20, color: ink.sky, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{name}</span>
    <span style={{ flex: 1, fontFamily: font.mono, fontSize: 20, color: statusColor, fontWeight: 600 }}>{status}</span>
    <span style={{ flex: 1, fontFamily: font.mono, fontSize: 20, color: ink.muted }}>{type}</span>
    <span style={{ flex: 1, fontFamily: font.mono, fontSize: 20, color: ink.muted }}>{size}</span>
    <span style={{ flex: 1, fontFamily: font.mono, fontSize: 20, color: ink.muted }}>{time}</span>
  </div>
);

const DevToolsNetwork: Page = () => {
  const active = useIsActivePage();
  return (
    <div style={fill} data-still={active ? undefined : ''}>
      <Styles />
      <Mark />
      <div className="gs gs-rise" style={{ position: 'absolute', left: 148, top: 96, fontSize: 22, fontWeight: 500, color: 'var(--osd-accent)' }}>
        PART 04 · Lab
      </div>
      <h2 className="gs gs-rise" style={{ position: 'absolute', left: 120, top: 138, margin: 0, fontFamily: font.display, fontSize: 64, fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1.06, animationDelay: '0.06s' }}>
        DevTools: Network Tab
      </h2>
      <p className="gs gs-rise" style={{ position: 'absolute', left: 120, top: 224, margin: 0, maxWidth: 1100, fontSize: 26, lineHeight: 1.45, color: ink.soft, animationDelay: '0.12s' }}>
        Press <kbd style={{ background: ink.panel, border: `1px solid ${ink.rule}`, borderRadius: 6, padding: '2px 10px', fontFamily: font.mono, fontSize: 22, color: ink.text }}>F12</kbd> → Network → reload the page. Watch every request happen in real time.
      </p>

      {/* Simulated Network tab window */}
      <div style={{ position: 'absolute', left: 120, right: 120, top: 316, bottom: 160 }}>
        <Window
          title="Network — google.com"
          delay={0.2}
          style={{ height: '100%' }}
          bodyStyle={{ padding: '0', overflow: 'hidden' }}
        >
          {/* Tab bar */}
          <div style={{ display: 'flex', borderBottom: `1px solid ${ink.hairline}`, background: ink.panel }}>
            <div style={{ padding: '10px 18px', fontSize: 18, fontFamily: font.mono, color: ink.accent, borderBottom: `2px solid ${ink.accent}` }}>All</div>
            <div style={{ padding: '10px 18px', fontSize: 18, fontFamily: font.mono, color: ink.muted, borderBottom: '2px solid transparent' }}>Fetch/XHR</div>
            <div style={{ padding: '10px 18px', fontSize: 18, fontFamily: font.mono, color: ink.muted, borderBottom: '2px solid transparent' }}>JS</div>
            <div style={{ padding: '10px 18px', fontSize: 18, fontFamily: font.mono, color: ink.muted, borderBottom: '2px solid transparent' }}>CSS</div>
            <div style={{ padding: '10px 18px', fontSize: 18, fontFamily: font.mono, color: ink.muted, borderBottom: '2px solid transparent' }}>Img</div>
            <div style={{ padding: '10px 18px', fontSize: 18, fontFamily: font.mono, color: ink.muted, borderBottom: '2px solid transparent' }}>Media</div>
            <div style={{ padding: '10px 18px', fontSize: 18, fontFamily: font.mono, color: ink.muted, borderBottom: '2px solid transparent' }}>Font</div>
            <div style={{ padding: '10px 18px', fontSize: 18, fontFamily: font.mono, color: ink.muted, borderBottom: '2px solid transparent' }}>Doc</div>
          </div>

          {/* Column headers */}
          <div style={{ display: 'flex', padding: '8px 16px', borderBottom: `1px solid ${ink.hairline}`, background: ink.panel }}>
            <span style={{ flex: 3, fontFamily: font.mono, fontSize: 16, color: ink.muted, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Name</span>
            <span style={{ flex: 1, fontFamily: font.mono, fontSize: 16, color: ink.muted, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Status</span>
            <span style={{ flex: 1, fontFamily: font.mono, fontSize: 16, color: ink.muted, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Type</span>
            <span style={{ flex: 1, fontFamily: font.mono, fontSize: 16, color: ink.muted, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Size</span>
            <span style={{ flex: 1, fontFamily: font.mono, fontSize: 16, color: ink.muted, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Time</span>
          </div>

          {/* Network rows — explicit instances for inspector targeting */}
          <NetRow name="index.html" status="200" statusColor={ink.mint} type="document" size="48 kB" time="120 ms" delay={0.25} />
          <NetRow name="styles.css" status="200" statusColor={ink.mint} type="stylesheet" size="12 kB" time="45 ms" delay={0.35} />
          <NetRow name="main.js" status="200" statusColor={ink.mint} type="script" size="84 kB" time="62 ms" delay={0.45} />
          <NetRow name="logo.png" status="200" statusColor={ink.mint} type="img" size="28 kB" time="38 ms" delay={0.55} />
          <NetRow name="api/user" status="404" statusColor={ink.accent} type="fetch" size="—" time="210 ms" delay={0.65} highlight />
        </Window>
      </div>

      <Footer />
    </div>
  );
};

// ─── PAGE 15: First Webpage ───────────────────────────────────────────────────

const FirstWebpage: Page = () => {
  const active = useIsActivePage();
  return (
    <div style={fill} data-still={active ? undefined : ''}>
      <Styles />
      <Mark />
      <div className="gs gs-rise" style={{ position: 'absolute', left: 148, top: 96, fontSize: 22, fontWeight: 500, color: 'var(--osd-accent)' }}>
        PART 04 · Lab
      </div>
      <h2 className="gs gs-rise" style={{ position: 'absolute', left: 120, top: 138, margin: 0, fontFamily: font.display, fontSize: 64, fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1.06, animationDelay: '0.06s' }}>
        Your First Webpage
      </h2>
      <p className="gs gs-rise" style={{ position: 'absolute', left: 120, top: 224, margin: 0, maxWidth: 1100, fontSize: 26, lineHeight: 1.45, color: ink.soft, animationDelay: '0.12s' }}>
        Create a new file → save it as <code style={{ fontFamily: font.mono, background: ink.panel, padding: '1px 8px', borderRadius: 5 }}>index.html</code> → Open with Live Server → inspect in Elements tab.
      </p>

      {/* Two columns: code + elements panel */}
      <div style={{ position: 'absolute', left: 120, right: 120, top: 316, bottom: 160, display: 'flex', gap: 24 }}>
        {/* Code window */}
        <Window
          title="index.html"
          delay={0.18}
          style={{ flex: 1 }}
          bodyStyle={{ background: '#0a0a0a', padding: '24px 28px' }}
        >
          <pre style={{ margin: 0, fontFamily: font.mono, fontSize: 20, lineHeight: 1.65, color: '#e2e8f0' }}>
            <span style={{ color: '#6b7280' }}>{'<!DOCTYPE html>'}</span>{'\n'}
            <span style={{ color: '#60a5fa' }}>{'<html'}</span>
            <span style={{ color: '#fbbf24' }}>{' lang'}</span>
            <span style={{ color: '#e2e8f0' }}>{'="en"'}</span>
            <span style={{ color: '#60a5fa' }}>{'>'}</span>{'\n'}
            {'  '}
            <span style={{ color: '#60a5fa' }}>{'<head>'}</span>{'\n'}
            {'    '}
            <span style={{ color: '#60a5fa' }}>{'<title>'}</span>
            <span style={{ color: '#e2e8f0' }}>{'My Page'}</span>
            <span style={{ color: '#60a5fa' }}>{'</title>'}</span>{'\n'}
            {'  '}
            <span style={{ color: '#60a5fa' }}>{'</head>'}</span>{'\n'}
            {'  '}
            <span style={{ color: '#60a5fa' }}>{'<body>'}</span>{'\n'}
            {'    '}
            <span style={{ color: '#60a5fa' }}>{'<h1>'}</span>
            <span style={{ color: '#34d399' }}>{'Hello, Web!'}</span>
            <span style={{ color: '#60a5fa' }}>{'</h1>'}</span>{'\n'}
            {'    '}
            <span style={{ color: '#60a5fa' }}>{'<p>'}</span>
            <span style={{ color: '#e2e8f0' }}>{'This is my first page.'}</span>
            <span style={{ color: '#60a5fa' }}>{'</p>'}</span>{'\n'}
            {'  '}
            <span style={{ color: '#60a5fa' }}>{'</body>'}</span>{'\n'}
            <span style={{ color: '#60a5fa' }}>{'</html>'}</span>
          </pre>
        </Window>

        {/* Elements panel */}
        <Window
          title="DevTools → Elements"
          delay={0.28}
          style={{ flex: 1 }}
          bodyStyle={{ padding: '20px 24px', background: ink.panel }}
        >
          <div style={{ fontFamily: font.mono, fontSize: 20, lineHeight: 2, color: '#374151' }}>
            <div style={{ color: '#60a5fa' }}>▼ &lt;html lang="en"&gt;</div>
            <div style={{ paddingLeft: 24, color: '#60a5fa' }}>▼ &lt;head&gt;</div>
            <div style={{ paddingLeft: 48, color: '#6b7280' }}>&lt;title&gt;My Page&lt;/title&gt;</div>
            <div style={{ paddingLeft: 24, color: '#60a5fa' }}>&lt;/head&gt;</div>
            <div style={{ paddingLeft: 24, color: '#60a5fa' }}>▼ <span style={{ background: 'rgba(222,59,61,0.12)', borderRadius: 4, padding: '0 6px', color: ink.accent }}>&lt;body&gt;</span></div>
            <div style={{ paddingLeft: 48, color: '#60a5fa' }}>&lt;h1&gt;<span style={{ color: '#34d399' }}>Hello, Web!</span>&lt;/h1&gt;</div>
            <div style={{ paddingLeft: 48, color: '#60a5fa' }}>&lt;p&gt;<span style={{ color: '#374151' }}>This is my first page.</span>&lt;/p&gt;</div>
            <div style={{ paddingLeft: 24, color: '#60a5fa' }}>&lt;/body&gt;</div>
            <div style={{ color: '#60a5fa' }}>&lt;/html&gt;</div>
          </div>
        </Window>
      </div>

      <Footer />
    </div>
  );
};

// ─── Closing ────────────────────────────────────────────────────────────────────

const Closing: Page = () => {
  const active = useIsActivePage();
  return (
    <div
      style={{
        ...fill,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      data-still={active ? undefined : ''}
    >
      <Styles />
      <MorphElement id="mark">
        <div
          className="gs gs-bloom"
          style={{
            width: 64,
            height: 64,
            borderRadius: 16,
            background: 'var(--osd-accent)',
            marginBottom: 48,
          }}
        />
      </MorphElement>
      <p
        className="gs gs-rise"
        style={{
          margin: 0,
          fontFamily: font.mono,
          fontSize: 22,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: ink.dim,
          animationDelay: '0.08s',
        }}
      >
        Session 01 Complete
      </p>
      <h2
        className="gs gs-rise"
        style={{
          margin: '16px 0 32px',
          fontFamily: font.display,
          fontSize: 96,
          fontWeight: 900,
          letterSpacing: '-0.04em',
          textAlign: 'center',
          animationDelay: '0.14s',
        }}
      >
        See you next week.
      </h2>
      <div
        className="gs gs-rise"
        style={{
          display: 'flex',
          gap: 40,
          marginTop: 8,
          animationDelay: '0.22s',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 28, color: ink.muted, marginBottom: 6 }}>Practice</div>
          <div style={{ fontSize: 22, fontFamily: font.mono, color: ink.soft }}>Open any site → F12 → Network</div>
        </div>
        <div style={{ width: 1, background: ink.rule, alignSelf: 'stretch' }} />
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 28, color: ink.muted, marginBottom: 6 }}>Next Session</div>
          <div style={{ fontSize: 22, fontFamily: font.mono, color: ink.soft }}>Session 02: Semantic HTML5 & The DOM</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// ─── Meta & export ────────────────────────────────────────────────────────────

export const meta: SlideMeta = {
  title: 'Session 01: How the Web Works',
  createdAt: '2026-09-27T15:52:21.946Z',
  theme: 'open-slide-default',
};

export default [
  Cover,
  Agenda,
  Part1Divider,
  InternetVsWeb,
  HtmlCssJs,
  StandardsChallenges,
  StandardsBodies,
  ClientServer,
  RequestLifecycle,
  IpAddress,
  DomainSlide,
  DNS,
  IpVersions,
  HTTPBasics,
  Part2Divider,
  RenderingPipeline,
  PartFrontendBackendDivider,
  FrontendStack,
  BackendStack,
  Part3Divider,
  ToolSetup,
  DevToolsNetwork,
  FirstWebpage,
  Closing,
] satisfies Page[];
