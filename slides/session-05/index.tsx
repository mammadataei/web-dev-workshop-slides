import {
  type DesignSystem,
  type Page,
  type SlideMeta,
  type SlideTransition,
  useSlidePageNumber,
} from '@open-slide/core';
import { type CSSProperties, type ReactNode } from 'react';

// ─── Design System ────────────────────────────────────────────────────────────

export const design: DesignSystem = {
  palette: { bg: '#ffffff', text: '#0a0a0a', accent: '#de3b3d' },
  fonts: {
    display:
      '"Geist Variable", Geist, -apple-system, BlinkMacSystemFont, "Inter", system-ui, sans-serif',
    body: '"Geist Variable", Geist, -apple-system, BlinkMacSystemFont, "Inter", system-ui, sans-serif',
  },
  typeScale: { hero: 136, body: 32 },
  radius: 14,
};

// ─── Color Tokens & Metrics ───────────────────────────────────────────────────

const ink = {
  text: '#0a0a0a',
  soft: '#262626',
  muted: '#525252',
  dim: '#737373',
  border: '#e5e7eb',
  panel: '#f8fafc',
  panelDark: '#0d1117',
  accent: '#de3b3d',
  accentSoft: 'rgba(222, 59, 61, 0.08)',
  accentBorder: 'rgba(222, 59, 61, 0.25)',
  mint: '#15803d',
  mintSoft: 'rgba(21, 128, 61, 0.1)',
  sky: '#0284c7',
  skySoft: 'rgba(2, 132, 199, 0.1)',
  amber: '#b45309',
  amberSoft: 'rgba(180, 83, 9, 0.1)',
  indigo: '#4338ca',
  indigoSoft: 'rgba(67, 56, 202, 0.1)',
  purple: '#7e22ce',
  purpleSoft: 'rgba(126, 34, 206, 0.1)',
};

const font = {
  sans: 'var(--osd-font-body)',
  display: 'var(--osd-font-display)',
  mono: '"Geist Mono", ui-monospace, "SF Mono", Menlo, Consolas, monospace',
};

const shadow = {
  window:
    '0 0 0 1px rgba(0,0,0,0.08), 0 6px 20px -4px rgba(0,0,0,0.08), 0 20px 40px -12px rgba(0,0,0,0.12)',
  card: '0 0 0 1px rgba(0,0,0,0.06), 0 3px 12px -2px rgba(0,0,0,0.06)',
};

// Deterministic 1920x1080 Flexbox canvas root
const fill: CSSProperties = {
  width: 1920,
  height: 1080,
  position: 'relative',
  overflow: 'hidden',
  background: '#ffffff',
  color: ink.text,
  fontFamily: font.sans,
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  padding: '60px 120px 40px 120px',
};

// ─── Inline SVG Icons ─────────────────────────────────────────────────────────

const Svg = ({
  size = 32,
  color = ink.soft,
  children,
}: {
  size?: number;
  color?: string;
  children: ReactNode;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    {children}
  </svg>
);

const IconCpu = ({ size = 32, color = ink.accent }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
  </Svg>
);

const IconGlobe = ({ size = 32, color = ink.sky }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </Svg>
);

const IconServer = ({ size = 32, color = ink.mint }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" />
    <line x1="6" y1="18" x2="6.01" y2="18" />
  </Svg>
);

const IconTerminal = ({ size = 32, color = ink.amber }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </Svg>
);

const IconLayers = ({ size = 32, color = ink.purple }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </Svg>
);

const IconAlert = ({ size = 28, color = ink.accent }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </Svg>
);

// ─── Header & Footer Components ───────────────────────────────────────────────

const SlideHeader = ({
  part,
  title,
  subtitle,
}: {
  part?: string;
  title: string;
  subtitle?: string;
}) => (
  <div
    style={{
      marginBottom: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      flexShrink: 0,
    }}
  >
    {part && (
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          fontSize: 22,
          fontWeight: 700,
          color: ink.accent,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
        }}
      >
        <span
          style={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            background: ink.accent,
            display: 'inline-block',
          }}
        />
        <span>{part}</span>
      </div>
    )}
    <div
      style={{
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        gap: 32,
      }}
    >
      <h2
        style={{
          fontSize: 66,
          fontWeight: 800,
          margin: 0,
          fontFamily: font.display,
          letterSpacing: '-0.03em',
          color: ink.text,
          lineHeight: 1.15,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <span style={{ fontSize: 30, color: ink.muted, fontWeight: 500 }}>
          {subtitle}
        </span>
      )}
    </div>
  </div>
);

const SlideFooter = () => {
  const { current, total } = useSlidePageNumber();
  return (
    <div
      style={{
        marginTop: 'auto',
        flexShrink: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: `1px solid ${ink.border}`,
        paddingTop: 18,
        fontSize: 22,
        color: ink.muted,
      }}
    >
      <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
        <span style={{ fontWeight: 800, color: ink.text }}>SESSION 05</span>
        <span style={{ color: ink.border }}>|</span>
        <span>JavaScript Foundations: The Engine, Modern Runtimes & Core Memory Mechanics</span>
      </div>
      <div style={{ fontFamily: font.mono, fontWeight: 700, color: ink.soft }}>
        {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </div>
    </div>
  );
};

// ─── Syntax Highlighter Helper ────────────────────────────────────────────────

const renderCodeLine = (line: string): ReactNode => {
  if (
    line.trim().startsWith('//') ||
    line.trim().startsWith('/*') ||
    line.trim().startsWith('<!--')
  ) {
    return <span style={{ color: '#8b949e', fontStyle: 'italic' }}>{line}</span>;
  }

  // Tokens regex for JS syntax
  const tokenRegex =
    /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`|\b(?:const|let|var|function|return|if|else|typeof|new|import|export|from|default|satisfies|switch|case|break)\b|\b(?:true|false|null|undefined|NaN|Infinity)\b|\b(?:console|document|window|Math|setTimeout|Number|String|Boolean|Array|Object|TypeError|ReferenceError)\b|\b\d+(?:\.\d+)?\b|[{}()[\].,;:+\-*/%=<>!&|?])/g;

  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = tokenRegex.exec(line)) !== null) {
    const textBefore = line.slice(lastIndex, match.index);
    if (textBefore) parts.push(textBefore);

    const token = match[0];

    if (
      token.startsWith('"') ||
      token.startsWith("'") ||
      token.startsWith('`')
    ) {
      parts.push(
        <span key={match.index} style={{ color: '#a5d6ff' }}>
          {token}
        </span>
      );
    } else if (
      /^(const|let|var|function|return|if|else|typeof|new|import|export|from|default|satisfies|switch|case|break)$/.test(
        token
      )
    ) {
      parts.push(
        <span key={match.index} style={{ color: '#ff7b72', fontWeight: 600 }}>
          {token}
        </span>
      );
    } else if (/^(true|false|null|undefined|NaN|Infinity)$/.test(token)) {
      parts.push(
        <span key={match.index} style={{ color: '#ffa657', fontWeight: 600 }}>
          {token}
        </span>
      );
    } else if (
      /^(console|document|window|Math|setTimeout|Number|String|Boolean|Array|Object|TypeError|ReferenceError)$/.test(
        token
      )
    ) {
      parts.push(
        <span key={match.index} style={{ color: '#79c0ff', fontWeight: 600 }}>
          {token}
        </span>
      );
    } else if (/^\d+(?:\.\d+)?$/.test(token)) {
      parts.push(
        <span key={match.index} style={{ color: '#79c0ff' }}>
          {token}
        </span>
      );
    } else {
      parts.push(token);
    }

    lastIndex = tokenRegex.lastIndex;
  }

  const textAfter = line.slice(lastIndex);
  if (textAfter) parts.push(textAfter);

  return parts;
};

// ─── Code Snippet Component (Projector Sized) ─────────────────────────────────

const CodeSnippet = ({
  filename,
  lines,
  fontSize = 28,
  highlightLine,
}: {
  filename?: string;
  lines: string[];
  fontSize?: number;
  highlightLine?: number;
}) => (
  <div
    style={{
      borderRadius: 16,
      background: ink.panelDark,
      border: '1px solid rgba(255,255,255,0.12)',
      boxShadow: shadow.window,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    }}
  >
    {filename && (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 24px',
          background: 'rgba(255,255,255,0.04)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <div
            style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f56' }}
          />
          <div
            style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }}
          />
          <div
            style={{ width: 12, height: 12, borderRadius: '50%', background: '#27c93f' }}
          />
          <span
            style={{
              marginLeft: 16,
              fontFamily: font.mono,
              fontSize: 22,
              color: '#8b949e',
              fontWeight: 600,
            }}
          >
            {filename}
          </span>
        </div>
        <span
          style={{
            fontFamily: font.mono,
            fontSize: 20,
            color: '#58a6ff',
            background: 'rgba(56,139,253,0.15)',
            padding: '4px 12px',
            borderRadius: 8,
            fontWeight: 600,
          }}
        >
          JavaScript
        </span>
      </div>
    )}
    <pre
      style={{
        margin: 0,
        padding: '24px 28px',
        fontFamily: font.mono,
        fontSize,
        lineHeight: 1.6,
        color: '#e6edf3',
        overflowX: 'auto',
      }}
    >
      <code>
        {lines.map((ln, idx) => {
          const isHl = highlightLine === idx + 1;
          return (
            <div
              key={idx}
              style={{
                display: 'flex',
                gap: 24,
                background: isHl ? 'rgba(222, 59, 61, 0.22)' : 'transparent',
                padding: isHl ? '2px 8px' : '2px 0',
                borderRadius: 6,
              }}
            >
              <span
                style={{
                  color: isHl ? ink.accent : '#484f58',
                  userSelect: 'none',
                  width: 36,
                  textAlign: 'right',
                  flexShrink: 0,
                  fontWeight: isHl ? 700 : 500,
                }}
              >
                {idx + 1}
              </span>
              <span style={{ flex: 1 }}>{renderCodeLine(ln)}</span>
            </div>
          );
        })}
      </code>
    </pre>
  </div>
);

// ─── Divider Page Template ────────────────────────────────────────────────────

const ChapterDivider = ({
  partNumber,
  title,
  subtitle,
  icon,
}: {
  partNumber: string;
  title: string;
  subtitle: string;
  icon?: ReactNode;
}) => (
  <div
    style={{
      ...fill,
      justifyContent: 'center',
      padding: '0 160px',
      background: 'linear-gradient(135deg, #ffffff 0%, #fafafa 100%)',
    }}
  >
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 12,
        fontSize: 26,
        fontWeight: 800,
        color: ink.accent,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        marginBottom: 28,
      }}
    >
      <span
        style={{
          width: 14,
          height: 14,
          borderRadius: '50%',
          background: ink.accent,
        }}
      />
      <span>PART {partNumber}</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
      {icon && (
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: 24,
            background: ink.accentSoft,
            border: `2px solid ${ink.accentBorder}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          {icon}
        </div>
      )}
      <h1
        style={{
          fontSize: 92,
          fontWeight: 900,
          margin: 0,
          fontFamily: font.display,
          letterSpacing: '-0.035em',
          color: ink.text,
          lineHeight: 1.1,
        }}
      >
        {title}
      </h1>
    </div>
    <p
      style={{
        fontSize: 36,
        color: ink.muted,
        marginTop: 28,
        maxWidth: 1400,
        lineHeight: 1.45,
        fontWeight: 450,
      }}
    >
      {subtitle}
    </p>
  </div>
);

// ==============================================================================
// SLIDE PAGES (33 Total, Beginner-Friendly & Projector-Optimized)
// ==============================================================================

// 01. Cover
const Cover: Page = () => (
  <div
    style={{
      ...fill,
      justifyContent: 'center',
      padding: '0 160px',
      background: 'radial-gradient(circle at 85% 20%, rgba(222,59,61,0.06) 0%, transparent 60%)',
    }}
  >
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        padding: '8px 20px',
        borderRadius: 9999,
        background: ink.accentSoft,
        border: `1px solid ${ink.accentBorder}`,
        fontSize: 22,
        fontWeight: 700,
        color: ink.accent,
        letterSpacing: '0.1em',
        width: 'fit-content',
        marginBottom: 32,
      }}
    >
      SESSION 05 • PHASE 2 KICKOFF
    </div>

    <h1
      style={{
        fontFamily: font.display,
        fontSize: 124,
        fontWeight: 900,
        letterSpacing: '-0.04em',
        lineHeight: 1.05,
        margin: 0,
        color: ink.text,
      }}
    >
      JavaScript Foundations
    </h1>

    <div
      style={{
        fontSize: 44,
        fontWeight: 600,
        color: ink.accent,
        marginTop: 20,
        letterSpacing: '-0.02em',
      }}
    >
      The Engine, Modern Runtimes & Core Memory Mechanics
    </div>

    <p
      style={{
        fontSize: 32,
        color: ink.muted,
        marginTop: 24,
        maxWidth: 1300,
        lineHeight: 1.5,
      }}
    >
      Moving from static visual layouts into computational logic, engines, runtimes (Browser, Node,
      Bun), and variable memory allocation.
    </p>

    <div
      style={{
        display: 'flex',
        gap: 24,
        marginTop: 52,
        borderTop: `1px solid ${ink.border}`,
        paddingTop: 36,
      }}
    >
      {['V8 & JavaScriptCore', 'Browser vs Node.js & Bun', 'const & let', '7 Primitive Types'].map(
        (tag, i) => (
          <span
            key={i}
            style={{
              fontSize: 24,
              fontWeight: 600,
              color: ink.soft,
              background: ink.panel,
              padding: '10px 24px',
              borderRadius: 12,
              border: `1px solid ${ink.border}`,
            }}
          >
            {tag}
          </span>
        )
      )}
    </div>
  </div>
);

// 02. Agenda Roadmap
const Agenda: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Curriculum Architecture"
      title="Roadmap: From Engine to Real Code"
      subtitle="4 beginner-friendly milestones in this 2-hour session"
    />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 32,
        flex: 1,
        alignContent: 'center',
      }}
    >
      {[
        {
          num: '01',
          title: 'The Web Trinity & Origins',
          desc: 'How JavaScript works alongside HTML and CSS, plus a brief history from 1995 to modern ECMAScript.',
          color: ink.accent,
          icon: <IconGlobe size={36} color={ink.accent} />,
        },
        {
          num: '02',
          title: 'Engines & Modern Runtimes',
          desc: 'What an engine is (V8, JavaScriptCore) and where JS runs today (Browser Web APIs vs Node.js & Bun).',
          color: ink.sky,
          icon: <IconServer size={36} color={ink.sky} />,
        },
        {
          num: '03',
          title: 'Developer Cockpit & Syntax',
          desc: 'Where to run JS (Console, <script defer>, Terminal) and using console.log() as your superpower.',
          color: ink.amber,
          icon: <IconTerminal size={36} color={ink.amber} />,
        },
        {
          num: '04',
          title: 'Variables, Memory & 7 Primitives',
          desc: 'RAM vs Disk, the labeled box metaphor, const vs let, and mastering the 7 primitive types in DevTools.',
          color: ink.mint,
          icon: <IconLayers size={36} color={ink.mint} />,
        },
      ].map((card, i) => (
        <div
          key={i}
          style={{
            padding: 36,
            borderRadius: 20,
            background: ink.panel,
            border: `1px solid ${ink.border}`,
            display: 'flex',
            gap: 28,
            boxShadow: shadow.card,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              background: '#ffffff',
              border: `1px solid ${ink.border}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            {card.icon}
          </div>
          <div>
            <div
              style={{
                fontSize: 22,
                fontFamily: font.mono,
                fontWeight: 800,
                color: card.color,
                marginBottom: 8,
              }}
            >
              MODULE {card.num}
            </div>
            <div
              style={{
                fontSize: 34,
                fontWeight: 800,
                color: ink.text,
                marginBottom: 12,
              }}
            >
              {card.title}
            </div>
            <div style={{ fontSize: 26, color: ink.muted, lineHeight: 1.5 }}>
              {card.desc}
            </div>
          </div>
        </div>
      ))}
    </div>
    <SlideFooter />
  </div>
);

// 03. Part 1 Divider
const Part1Divider: Page = () => (
  <ChapterDivider
    partNumber="01"
    title="The Soul of the Modern Web"
    subtitle="Connecting HTML structure and CSS aesthetics to computational state and dynamic behavior."
    icon={<IconGlobe size={48} color={ink.accent} />}
  />
);

// 04. The Web Trinity
const TheWebTrinity: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 01 • The JavaScript Revolution"
      title="The Web Trinity: Structure, Style & Brain"
      subtitle="Connecting Sessions 1–4 to Session 5"
    />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 36,
        flex: 1,
        alignItems: 'stretch',
      }}
    >
      {[
        {
          label: 'HTML5 (Session 02)',
          metaphor: 'The Skeleton & Blueprint',
          color: '#e34c26',
          bg: 'rgba(227, 76, 38, 0.08)',
          items: [
            'Defines tags & document hierarchy',
            'Creates DOM nodes in memory',
            'Completely inert without scripts',
            'E.g. <button id="buy">Buy</button>',
          ],
        },
        {
          label: 'CSS3 (Sessions 03 & 04)',
          metaphor: 'The Skin & Presentation',
          color: '#264de4',
          bg: 'rgba(38, 77, 228, 0.08)',
          items: [
            'Colors, box model & typography',
            'Flexbox & responsive layouts',
            'Styling states (:hover, :focus)',
            'E.g. background: #de3b3d;',
          ],
        },
        {
          label: 'JavaScript (Session 05+)',
          metaphor: 'The Brain & Muscles',
          color: '#d97706',
          bg: 'rgba(217, 119, 6, 0.08)',
          items: [
            'Holds data & state in RAM',
            'Listens to clicks and user events',
            'Mutates HTML and CSS dynamically',
            'E.g. buyBtn.addEventListener(...)',
          ],
        },
      ].map((col, i) => (
        <div
          key={i}
          style={{
            padding: 40,
            borderRadius: 20,
            background: col.bg,
            border: `2px solid ${col.color}33`,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              fontSize: 22,
              fontWeight: 800,
              fontFamily: font.mono,
              color: col.color,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: 12,
            }}
          >
            {col.label}
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 800,
              color: ink.text,
              marginBottom: 28,
            }}
          >
            {col.metaphor}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              marginTop: 'auto',
            }}
          >
            {col.items.map((it, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  fontSize: 26,
                  color: ink.soft,
                  fontWeight: 500,
                }}
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: col.color,
                    flexShrink: 0,
                  }}
                />
                <span>{it}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    <SlideFooter />
  </div>
);

// 05. Brief History & ECMAScript
const JsBriefHistory: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 01 • The JavaScript Revolution"
      title="A Brief History: From 10 Days to Ubiquity"
      subtitle="How a hasty script became the foundation of modern computing"
    />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 36,
        flex: 1,
        alignContent: 'center',
      }}
    >
      {[
        {
          year: '1995',
          title: 'The 10-Day Miracle',
          desc: 'Brendan Eich creates Mocha in just 10 days at Netscape. Renamed LiveScript, then JavaScript (marketing tie to Java, though completely unrelated).',
          tag: 'Netscape Navigator',
          color: ink.accent,
        },
        {
          year: '1997',
          title: 'ECMAScript Standard',
          desc: 'To prevent browser wars and vendor fragmentation, the language is standardized under ECMA-262 (ECMAScript). JavaScript is the dialect that implements it.',
          tag: 'ECMA-262 Specification',
          color: ink.sky,
        },
        {
          year: '2015',
          title: 'ES6 / Modern Renaissance',
          desc: 'The landmark ES2015 update modernized JS: const and let for safe memory scoping, arrow functions, modules, template literals, and promises.',
          tag: 'Modern JavaScript',
          color: ink.mint,
        },
      ].map((card, i) => (
        <div
          key={i}
          style={{
            padding: 38,
            borderRadius: 20,
            background: ink.panel,
            border: `1px solid ${ink.border}`,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          <div
            style={{
              fontSize: 48,
              fontWeight: 900,
              fontFamily: font.mono,
              color: card.color,
            }}
          >
            {card.year}
          </div>
          <div style={{ fontSize: 32, fontWeight: 800, color: ink.text }}>
            {card.title}
          </div>
          <div style={{ fontSize: 26, color: ink.muted, lineHeight: 1.55 }}>
            {card.desc}
          </div>
          <div
            style={{
              marginTop: 'auto',
              paddingTop: 16,
              fontSize: 20,
              fontFamily: font.mono,
              fontWeight: 700,
              color: card.color,
            }}
          >
            🏷️ {card.tag}
          </div>
        </div>
      ))}
    </div>
    <SlideFooter />
  </div>
);

// 06. Part 2 Divider
const Part2Divider: Page = () => (
  <ChapterDivider
    partNumber="02"
    title="Engines & Modern Runtimes"
    subtitle="From browser engines to server-side Node.js and Bun: where code actually runs."
    icon={<IconCpu size={48} color={ink.accent} />}
  />
);

// 07. What is a JS Engine?
const WhatIsAJsEngine: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 02 • Engines & Modern Runtimes"
      title="What is a JavaScript Engine?"
      subtitle="The specialized software program that executes your code"
    />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1.1fr 1fr',
        gap: 40,
        flex: 1,
        alignItems: 'center',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div
          style={{
            padding: 36,
            borderRadius: 20,
            background: ink.panel,
            border: `1px solid ${ink.border}`,
          }}
        >
          <div style={{ fontSize: 34, fontWeight: 800, color: ink.text, marginBottom: 12 }}>
            The Core Definition
          </div>
          <div style={{ fontSize: 28, color: ink.soft, lineHeight: 1.55 }}>
            A JavaScript Engine is a program written in low-level languages (like C++ or Rust) that
            reads your JavaScript code and translates it into instructions your computer CPU can
            execute.
          </div>
        </div>

        <div
          style={{
            padding: 30,
            borderRadius: 18,
            background: ink.accentSoft,
            border: `1px solid ${ink.accentBorder}`,
            display: 'flex',
            gap: 20,
            alignItems: 'center',
          }}
        >
          <IconAlert size={40} color={ink.accent} />
          <div style={{ fontSize: 26, color: ink.text, lineHeight: 1.45, fontWeight: 600 }}>
            <strong>Crucial Beginner Insight:</strong> The engine only understands ECMAScript logic!
            It has <em>no idea</em> what an HTML button, a URL bar, or a camera is.
          </div>
        </div>
      </div>

      <div
        style={{
          padding: 36,
          borderRadius: 20,
          background: ink.panelDark,
          color: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          boxShadow: shadow.window,
        }}
      >
        <div style={{ fontSize: 24, fontFamily: font.mono, color: '#79c0ff', fontWeight: 700 }}>
          THE CPU TRANSLATION FLOW
        </div>
        <div
          style={{
            background: 'rgba(255,255,255,0.06)',
            padding: 20,
            borderRadius: 12,
            fontFamily: font.mono,
            fontSize: 28,
            color: '#a5d6ff',
          }}
        >
          const total = price * 1.09;
        </div>
        <div style={{ textAlign: 'center', fontSize: 28, color: '#8b949e' }}>
          ⬇️ Engine executes & compiles
        </div>
        <div
          style={{
            background: 'rgba(255,255,255,0.06)',
            padding: 20,
            borderRadius: 12,
            fontFamily: font.mono,
            fontSize: 26,
            color: '#7ee787',
            letterSpacing: '0.08em',
          }}
        >
          01001000 10001001 (CPU Instructions)
        </div>
        <div style={{ fontSize: 22, color: '#8b949e', marginTop: 8 }}>
          Fast, direct execution on your device hardware.
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 08. The Big Three Engines
const TheBigThreeEngines: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 02 • Engines & Modern Runtimes"
      title="The Big Three JavaScript Engines"
      subtitle="The powerhouse software behind browsers and servers"
    />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 36,
        flex: 1,
        alignContent: 'center',
      }}
    >
      {[
        {
          name: 'V8',
          creator: 'Google (C++)',
          powers: 'Google Chrome, Microsoft Edge, Brave, Node.js',
          highlight: 'Industry Workhorse',
          desc: 'The most widely used engine in history. Powers modern Chromium browsers and server-side Node.js.',
          color: ink.accent,
        },
        {
          name: 'JavaScriptCore (JSC)',
          creator: 'Apple (C++)',
          powers: 'Apple Safari, iOS WebViews, and BUN!',
          highlight: 'Instant Startup & Low RAM',
          desc: "Also known as Nitro. Powers Apple's ecosystem and is the engine chosen by Bun for maximum speed.",
          color: ink.sky,
        },
        {
          name: 'SpiderMonkey',
          creator: 'Mozilla (C++ & Rust)',
          powers: 'Mozilla Firefox',
          highlight: 'The First Engine in History',
          desc: 'Originally written by Brendan Eich in 1995. Heavily modernized inside modern Firefox.',
          color: ink.amber,
        },
      ].map((card, i) => (
        <div
          key={i}
          style={{
            padding: 38,
            borderRadius: 20,
            background: ink.panel,
            border: `2px solid ${card.color}33`,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 44, fontWeight: 900, fontFamily: font.display, color: card.color }}>
              {card.name}
            </span>
            <span
              style={{
                fontSize: 18,
                fontFamily: font.mono,
                fontWeight: 700,
                color: ink.muted,
                background: '#ffffff',
                padding: '4px 12px',
                borderRadius: 8,
                border: `1px solid ${ink.border}`,
              }}
            >
              {card.creator}
            </span>
          </div>

          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: card.color,
              background: `${card.color}15`,
              padding: '6px 14px',
              borderRadius: 8,
              width: 'fit-content',
            }}
          >
            ★ {card.highlight}
          </div>

          <div style={{ fontSize: 26, color: ink.soft, lineHeight: 1.5, marginTop: 8 }}>
            {card.desc}
          </div>

          <div
            style={{
              marginTop: 'auto',
              borderTop: `1px solid ${ink.border}`,
              paddingTop: 16,
              fontSize: 22,
              color: ink.muted,
            }}
          >
            <strong>Where it runs:</strong> {card.powers}
          </div>
        </div>
      ))}
    </div>
    <SlideFooter />
  </div>
);

// 09. Engine vs Runtime Contract
const EngineVsRuntimeContract: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 02 • Engines & Modern Runtimes"
      title="The Engine vs. Runtime Contract"
      subtitle="A foundational distinction every developer must grasp"
    />
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 36,
        flex: 1,
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          padding: '28px 48px',
          borderRadius: 24,
          background: 'linear-gradient(90deg, rgba(222,59,61,0.08) 0%, rgba(2,132,199,0.08) 100%)',
          border: `2px solid ${ink.border}`,
          textAlign: 'center',
        }}
      >
        <span
          style={{
            fontSize: 44,
            fontWeight: 900,
            fontFamily: font.display,
            letterSpacing: '-0.02em',
            color: ink.text,
          }}
        >
          Runtime = Engine + Host Environment APIs
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36 }}>
        <div
          style={{
            padding: 38,
            borderRadius: 20,
            background: ink.panel,
            border: `2px solid ${ink.accent}44`,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          <div style={{ fontSize: 34, fontWeight: 800, color: ink.accent }}>
            The Engine (The Core Brain)
          </div>
          <div style={{ fontSize: 26, color: ink.soft, lineHeight: 1.5 }}>
            Implements the strict ECMAScript language rules:
          </div>
          <ul style={{ fontSize: 26, color: ink.muted, lineHeight: 1.7, margin: 0, paddingLeft: 28 }}>
            <li>Variables (const, let)</li>
            <li>Conditionals (if, else) & Loops (for, while)</li>
            <li>Functions and arithmetic calculation</li>
            <li>Same rules whether in Chrome, Node, or Bun</li>
          </ul>
        </div>

        <div
          style={{
            padding: 38,
            borderRadius: 20,
            background: ink.panel,
            border: `2px solid ${ink.sky}44`,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          <div style={{ fontSize: 34, fontWeight: 800, color: ink.sky }}>
            The Runtime (The Host APIs)
          </div>
          <div style={{ fontSize: 26, color: ink.soft, lineHeight: 1.5 }}>
            Provides environment-specific superpowers:
          </div>
          <ul style={{ fontSize: 26, color: ink.muted, lineHeight: 1.7, margin: 0, paddingLeft: 28 }}>
            <li>
              <strong>Browser:</strong> Web APIs (<code>document</code>, <code>window</code>, <code>fetch</code>)
            </li>
            <li>
              <strong>Server (Node / Bun):</strong> System APIs (File system <code>fs</code>, network servers)
            </li>
            <li>That is why <code>document</code> does not exist in terminal runtimes!</li>
          </ul>
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 10. Server Runtimes Evolution
const ServerRuntimesEvolution: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 02 • Engines & Modern Runtimes"
      title="The Rise of Server-Side JavaScript"
      subtitle="How JavaScript broke free of the browser in 2009"
    />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 36,
        flex: 1,
        alignContent: 'center',
      }}
    >
      {[
        {
          year: '2009',
          name: 'Node.js',
          author: 'Ryan Dahl',
          engine: 'Google V8 (C++)',
          desc: 'Took V8 out of Chrome, linked it to C++ system APIs. JavaScript could now read files, query databases, and power backend servers.',
          status: 'Industry Standard (Enterprise)',
          color: '#22c55e',
        },
        {
          year: '2018',
          name: 'Deno',
          author: 'Ryan Dahl',
          engine: 'Google V8 (Rust)',
          desc: 'Built with security in mind (requires permission flags to access disk or network) and native support for TypeScript.',
          status: 'Modern & Secure',
          color: '#0ea5e9',
        },
        {
          year: '2022+',
          name: 'Bun',
          author: 'Jarred Sumner',
          engine: 'JavaScriptCore (Zig)',
          desc: 'Written in Zig on Apple JavaScriptCore. Built as an all-in-one drop-in Node replacement: runtime, fast package manager, and bundler.',
          status: 'Blazing Fast Next-Gen',
          color: ink.accent,
        },
      ].map((card, i) => (
        <div
          key={i}
          style={{
            padding: 38,
            borderRadius: 20,
            background: ink.panel,
            border: `2px solid ${card.color}33`,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 40, fontWeight: 900, color: card.color }}>{card.name}</span>
            <span style={{ fontSize: 20, fontFamily: font.mono, color: ink.muted }}>{card.year}</span>
          </div>
          <div style={{ fontSize: 20, fontFamily: font.mono, fontWeight: 700, color: ink.soft }}>
            Engine: {card.engine}
          </div>
          <div style={{ fontSize: 24, color: ink.muted, lineHeight: 1.55 }}>{card.desc}</div>
          <div
            style={{
              marginTop: 'auto',
              borderTop: `1px solid ${ink.border}`,
              paddingTop: 16,
              fontSize: 20,
              fontWeight: 700,
              color: card.color,
            }}
          >
            🚀 {card.status}
          </div>
        </div>
      ))}
    </div>
    <SlideFooter />
  </div>
);

// 11. Node vs Bun Showcase
const NodeVsBunShowcase: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 02 • Engines & Modern Runtimes"
      title="Node.js vs. Bun: The Modern Picture"
      subtitle="Comparing the two most prominent JavaScript server runtimes"
    />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 40,
        flex: 1,
        alignItems: 'stretch',
      }}
    >
      <div
        style={{
          padding: 40,
          borderRadius: 20,
          background: ink.panel,
          border: `2px solid ${ink.border}`,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ fontSize: 44, fontWeight: 900, color: '#16a34a' }}>Node.js</span>
          <span
            style={{
              fontSize: 22,
              background: '#16a34a15',
              color: '#16a34a',
              padding: '4px 14px',
              borderRadius: 8,
              fontWeight: 700,
            }}
          >
            V8 Engine
          </span>
        </div>
        <div style={{ fontSize: 26, color: ink.soft, lineHeight: 1.5 }}>
          The battle-tested foundation of modern full-stack development:
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 'auto' }}>
          {[
            '15+ years of production stability and enterprise adoption',
            'Over 2 million open-source packages on npm',
            'Powers Netflix, Uber, PayPal, and cloud platforms',
            'Requires extra tools (tsx, ts-node) to run TypeScript directly',
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 14, fontSize: 24, color: ink.muted }}>
              <span style={{ color: '#16a34a', fontWeight: 800 }}>✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          padding: 40,
          borderRadius: 20,
          background: ink.accentSoft,
          border: `2px solid ${ink.accentBorder}`,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ fontSize: 44, fontWeight: 900, color: ink.accent }}>Bun</span>
          <span
            style={{
              fontSize: 22,
              background: ink.accentSoft,
              color: ink.accent,
              padding: '4px 14px',
              borderRadius: 8,
              fontWeight: 700,
            }}
          >
            JavaScriptCore (JSC)
          </span>
        </div>
        <div style={{ fontSize: 26, color: ink.soft, lineHeight: 1.5 }}>
          The speed-focused all-in-one toolkit built in Zig:
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 'auto' }}>
          {[
            '3x to 4x faster startup times than Node.js',
            'Runs TypeScript (.ts) files natively with zero config',
            'Built-in package manager: bun install installs in seconds',
            'Built-in bundler and test runner replace complex setups',
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: 14, fontSize: 24, color: ink.soft }}>
              <span style={{ color: ink.accent, fontWeight: 800 }}>⚡</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 12. Runtime Comparison Matrix
const RuntimeComparisonMatrix: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 02 • Engines & Modern Runtimes"
      title="Runtime Comparison Matrix"
      subtitle="Where does your JavaScript code actually execute?"
    />
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1,
      }}
    >
      <div
        style={{
          borderRadius: 20,
          overflow: 'hidden',
          border: `1px solid ${ink.border}`,
          boxShadow: shadow.card,
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '280px 1fr 1fr 1fr',
            background: ink.panelDark,
            color: '#ffffff',
            padding: '20px 32px',
            fontFamily: font.mono,
            fontSize: 24,
            fontWeight: 700,
          }}
        >
          <span>CAPABILITY</span>
          <span style={{ color: '#79c0ff' }}>BROWSER (CHROME/SAFARI)</span>
          <span style={{ color: '#7ee787' }}>NODE.JS</span>
          <span style={{ color: '#ffa657' }}>BUN</span>
        </div>

        {[
          {
            cap: 'Underlying Engine',
            browser: 'Google V8 / Apple JSC',
            node: 'Google V8 (C++)',
            bun: 'Apple JSC (Zig)',
          },
          {
            cap: 'DOM & Window',
            browser: '✅ Yes (document, window)',
            node: '❌ No (Throws ReferenceError)',
            bun: '❌ No (Throws ReferenceError)',
          },
          {
            cap: 'Local File System',
            browser: '❌ No (Sandbox security)',
            node: '✅ Yes (node:fs module)',
            bun: '✅ Yes (node:fs & Bun.file)',
          },
          {
            cap: 'Native TypeScript',
            browser: '❌ No (Must compile to JS)',
            node: '⚠️ Needs tsx / ts-node',
            bun: '⚡ Yes (Built-in out of the box)',
          },
          {
            cap: 'Primary Role',
            browser: 'Interactive User Interface',
            node: 'APIs, Backends, Tooling',
            bun: 'High-speed Fullstack & CLI',
          },
        ].map((row, i) => (
          <div
            key={i}
            style={{
              display: 'grid',
              gridTemplateColumns: '280px 1fr 1fr 1fr',
              padding: '22px 32px',
              fontSize: 24,
              borderTop: `1px solid ${ink.border}`,
              background: i % 2 === 0 ? '#ffffff' : ink.panel,
              alignItems: 'center',
            }}
          >
            <span style={{ fontWeight: 800, color: ink.text }}>{row.cap}</span>
            <span style={{ color: ink.soft }}>{row.browser}</span>
            <span style={{ color: ink.soft }}>{row.node}</span>
            <span style={{ color: ink.soft }}>{row.bun}</span>
          </div>
        ))}
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 13. Part 3 Divider
const Part3Divider: Page = () => (
  <ChapterDivider
    partNumber="03"
    title="Your Developer Cockpit"
    subtitle="Three distinct environments to write, test, and run JavaScript code today."
    icon={<IconTerminal size={48} color={ink.amber} />}
  />
);

// 14. Three Ways to Run JS
const ThreeWaysToRunJs: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 03 • Developer Cockpit"
      title="Three Ways to Run JavaScript"
      subtitle="From quick scratchpad experiments to real web applications"
    />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 36,
        flex: 1,
        alignContent: 'center',
      }}
    >
      {[
        {
          title: '1. Browser DevTools Console',
          shortcut: 'Cmd + Option + J / F12',
          desc: 'Instant interactive REPL right inside Google Chrome. Test expressions, evaluate math, inspect live variables on any webpage.',
          badge: 'Instant Scratchpad',
          color: ink.accent,
        },
        {
          title: '2. Inside HTML (<script>)',
          shortcut: '<script src="app.js" defer>',
          desc: 'The real-world web delivery method. HTML loads the JS file, enabling your script to interact with buttons, forms, and DOM nodes.',
          badge: 'Production Web Pages',
          color: ink.sky,
        },
        {
          title: '3. Terminal CLI (Node / Bun)',
          shortcut: 'node app.js  OR  bun run app.js',
          desc: 'Runs JavaScript directly on your computer operating system without a browser window. Used for servers, scripts, and build tools.',
          badge: 'Backend & Tooling',
          color: ink.mint,
        },
      ].map((card, i) => (
        <div
          key={i}
          style={{
            padding: 38,
            borderRadius: 20,
            background: ink.panel,
            border: `2px solid ${card.color}33`,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          <span
            style={{
              fontSize: 18,
              fontFamily: font.mono,
              fontWeight: 800,
              color: card.color,
              background: '#ffffff',
              padding: '6px 14px',
              borderRadius: 8,
              width: 'fit-content',
              border: `1px solid ${ink.border}`,
            }}
          >
            {card.badge}
          </span>
          <div style={{ fontSize: 32, fontWeight: 800, color: ink.text }}>{card.title}</div>
          <div
            style={{
              background: ink.panelDark,
              color: '#79c0ff',
              padding: '12px 18px',
              borderRadius: 10,
              fontFamily: font.mono,
              fontSize: 20,
              fontWeight: 600,
            }}
          >
            {card.shortcut}
          </div>
          <div style={{ fontSize: 24, color: ink.muted, lineHeight: 1.55 }}>{card.desc}</div>
        </div>
      ))}
    </div>
    <SlideFooter />
  </div>
);

// 15. The Script Tag Contract
const TheScriptTagContract: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 03 • Developer Cockpit"
      title="The <script> Tag Contract & The 'defer' Secret"
      subtitle="How HTML and JavaScript coordinate loading without blocking"
    />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 40,
        flex: 1,
        alignItems: 'center',
      }}
    >
      <CodeSnippet
        filename="index.html"
        fontSize={26}
        lines={[
          `<!DOCTYPE html>`,
          `<html lang="en">`,
          `<head>`,
          `  <meta charset="UTF-8">`,
          `  <title>My Web App</title>`,
          `  <!-- Modern Best Practice: In <head> with defer -->`,
          `  <script src="script.js" defer></script>`,
          `</head>`,
          `<body>`,
          `  <h1 id="title">Hello World</h1>`,
          `</body>`,
          `</html>`,
        ]}
        highlightLine={7}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div
          style={{
            padding: 30,
            borderRadius: 18,
            background: ink.panel,
            border: `1px solid ${ink.border}`,
          }}
        >
          <div style={{ fontSize: 28, fontWeight: 800, color: ink.text, marginBottom: 8 }}>
            Without 'defer': HTML Parser Freezes
          </div>
          <div style={{ fontSize: 24, color: ink.muted, lineHeight: 1.5 }}>
            When the browser encounters a plain <code>&lt;script&gt;</code>, it halts HTML parsing
            until the script finishes downloading and running. If the script queries an element below
            it, it fails because that element doesn't exist yet!
          </div>
        </div>

        <div
          style={{
            padding: 30,
            borderRadius: 18,
            background: ink.mintSoft,
            border: `2px solid ${ink.mint}`,
          }}
        >
          <div style={{ fontSize: 28, fontWeight: 800, color: ink.mint, marginBottom: 8 }}>
            With 'defer': Parallel Download, Safe Execution
          </div>
          <div style={{ fontSize: 24, color: ink.text, lineHeight: 1.5 }}>
            <code>defer</code> tells the browser: "Download this file in the background while
            continuing to parse the HTML, and execute it only after the DOM is fully constructed."
          </div>
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 16. Console Log Superpower
const ConsoleLogSuperpower: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 03 • Developer Cockpit"
      title="console.log(): The Developer's Superpower"
      subtitle="Your direct diagnostic microscope into computer memory"
    />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 40,
        flex: 1,
        alignItems: 'center',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ fontSize: 32, fontWeight: 800, color: ink.text }}>
          Never Guess What's in Memory
        </div>
        <div style={{ fontSize: 26, color: ink.soft, lineHeight: 1.55 }}>
          Junior developers guess what their code is doing. Senior developers log and inspect data
          structures at every step.
        </div>
        <div
          style={{
            padding: 24,
            borderRadius: 16,
            background: ink.panel,
            border: `1px solid ${ink.border}`,
            fontSize: 24,
            color: ink.muted,
            lineHeight: 1.6,
          }}
        >
          💡 <strong>Pro Tip:</strong> Pass a label as the first argument so you know which log
          printed:
          <div style={{ fontFamily: font.mono, color: ink.accent, fontWeight: 700, marginTop: 8 }}>
            console.log("User Profile:", userData);
          </div>
        </div>
      </div>

      <div
        style={{
          borderRadius: 18,
          background: ink.panelDark,
          padding: 28,
          boxShadow: shadow.window,
          fontFamily: font.mono,
          fontSize: 22,
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          border: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <div style={{ color: '#8b949e', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: 10 }}>
          Console Output (Chrome DevTools)
        </div>
        <div style={{ color: '#7ee787' }}>&gt; console.log("Hello, Web Dev!");</div>
        <div style={{ color: '#e6edf3' }}>Hello, Web Dev!</div>
        <div style={{ color: '#7ee787' }}>&gt; console.warn("Low memory warning");</div>
        <div style={{ color: '#ffa657', background: 'rgba(255,166,87,0.1)', padding: '4px 8px', borderRadius: 6 }}>
          ⚠️ Low memory warning
        </div>
        <div style={{ color: '#7ee787' }}>&gt; console.error("Network timeout 504");</div>
        <div style={{ color: '#ff7b72', background: 'rgba(255,123,114,0.1)', padding: '4px 8px', borderRadius: 6 }}>
          ❌ Network timeout 504
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 17. Part 4 Divider
const Part4Divider: Page = () => (
  <ChapterDivider
    partNumber="04"
    title="Variables & Browser Memory"
    subtitle="Allocating slots in RAM, const vs. let, and the labeled box mental model."
    icon={<IconCpu size={48} color={ink.accent} />}
  />
);

// 18. File vs Memory Mental Model
const FileVsMemoryMentalModel: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 04 • Variables & Memory"
      title="Code on Disk vs. Memory in RAM"
      subtitle="A crucial distinction from the course syllabus"
    />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 40,
        flex: 1,
        alignItems: 'stretch',
      }}
    >
      <div
        style={{
          padding: 40,
          borderRadius: 20,
          background: ink.panel,
          border: `2px solid ${ink.border}`,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        <span style={{ fontSize: 20, fontFamily: font.mono, fontWeight: 800, color: ink.muted }}>
          INERT STORAGE
        </span>
        <div style={{ fontSize: 36, fontWeight: 900, color: ink.text }}>
          File on Disk (SSD / Server)
        </div>
        <div style={{ fontSize: 26, color: ink.muted, lineHeight: 1.55 }}>
          Your <code>script.js</code> file sits on your hard drive as frozen, lifeless plain text
          characters. It does not do anything on its own.
        </div>
        <div
          style={{
            marginTop: 'auto',
            background: '#ffffff',
            padding: 20,
            borderRadius: 14,
            border: `1px solid ${ink.border}`,
            fontFamily: font.mono,
            fontSize: 22,
            color: ink.soft,
          }}
        >
          📄 script.js (2,410 bytes on disk)
        </div>
      </div>

      <div
        style={{
          padding: 40,
          borderRadius: 20,
          background: ink.accentSoft,
          border: `2px solid ${ink.accentBorder}`,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        <span style={{ fontSize: 20, fontFamily: font.mono, fontWeight: 800, color: ink.accent }}>
          ACTIVE COMPUTATION
        </span>
        <div style={{ fontSize: 36, fontWeight: 900, color: ink.accent }}>
          Live State in RAM (Memory)
        </div>
        <div style={{ fontSize: 26, color: ink.soft, lineHeight: 1.55 }}>
          When the browser loads the script, it creates active slots in computer RAM. If the user
          refreshes the page, <strong>memory is wiped completely clean</strong> and starts from zero!
        </div>
        <div
          style={{
            marginTop: 'auto',
            background: '#ffffff',
            padding: 20,
            borderRadius: 14,
            border: `1px solid ${ink.accentBorder}`,
            fontFamily: font.mono,
            fontSize: 22,
            color: ink.accent,
            fontWeight: 700,
          }}
        >
          ⚡ RAM Allocation (Volatile Electronic State)
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 19. Variables as Boxes
const VariablesAsBoxes: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 04 • Variables & Memory"
      title="The Labeled Box Metaphor"
      subtitle="How computers store named values in memory"
    />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 36,
        flex: 1,
        alignContent: 'center',
      }}
    >
      {[
        {
          label: 'The Box Identifier',
          role: 'Variable Name',
          example: 'const studentName',
          desc: 'The sticker on the outside of the box so human programmers can find and reference it.',
          color: ink.sky,
        },
        {
          label: 'The Value Inside',
          role: 'Data in Memory',
          example: '= "Amina"',
          desc: 'The actual electronic bits placed into the storage slot in RAM (a string, a number, a boolean).',
          color: ink.mint,
        },
        {
          label: 'The Box Lock Type',
          role: 'Declaration Keyword',
          example: 'const vs let',
          desc: 'const creates a permanently locked box (cannot replace contents). let creates an unlocked box.',
          color: ink.accent,
        },
      ].map((card, i) => (
        <div
          key={i}
          style={{
            padding: 38,
            borderRadius: 20,
            background: ink.panel,
            border: `2px solid ${card.color}33`,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          <div style={{ fontSize: 20, fontFamily: font.mono, fontWeight: 800, color: card.color }}>
            {card.label}
          </div>
          <div style={{ fontSize: 32, fontWeight: 800, color: ink.text }}>{card.role}</div>
          <div
            style={{
              background: '#ffffff',
              border: `1px solid ${ink.border}`,
              padding: '12px 18px',
              borderRadius: 10,
              fontFamily: font.mono,
              fontSize: 22,
              fontWeight: 700,
              color: card.color,
            }}
          >
            {card.example}
          </div>
          <div style={{ fontSize: 24, color: ink.muted, lineHeight: 1.55 }}>{card.desc}</div>
        </div>
      ))}
    </div>
    <SlideFooter />
  </div>
);

// 20. var vs let vs const
const VarVsLetVsConst: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 04 • Variables & Memory"
      title="const vs. let vs. var (The Strict Rule)"
      subtitle="Modern JavaScript scoping rules for reliable software"
    />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 36,
        flex: 1,
        alignItems: 'stretch',
      }}
    >
      {[
        {
          name: 'const',
          verdict: 'Default to This (95%)',
          color: ink.mint,
          bg: ink.mintSoft,
          desc: 'Locked box. Prevents accidental reassignment bugs. If a value does not need to change, always use const.',
          example: 'const taxRate = 0.09;',
        },
        {
          name: 'let',
          verdict: 'Use When Mutating (5%)',
          color: ink.sky,
          bg: ink.skySoft,
          desc: 'Unlocked box. Use only when you know a value must be reassigned (counters, loop iterators, toggles).',
          example: 'let score = 0;\nscore = score + 10;',
        },
        {
          name: 'var',
          verdict: 'NEVER USE (Obsolete)',
          color: ink.accent,
          bg: ink.accentSoft,
          desc: 'Old 1995 keyword with no block scoping and dangerous hoisting traps. Exists in legacy code, but never write it today!',
          example: '// ❌ Obsolete syntax',
        },
      ].map((card, i) => (
        <div
          key={i}
          style={{
            padding: 38,
            borderRadius: 20,
            background: card.bg,
            border: `2px solid ${card.color}44`,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          <div style={{ fontSize: 48, fontWeight: 900, fontFamily: font.mono, color: card.color }}>
            {card.name}
          </div>
          <div style={{ fontSize: 24, fontWeight: 800, color: card.color }}>{card.verdict}</div>
          <div style={{ fontSize: 26, color: ink.soft, lineHeight: 1.55 }}>{card.desc}</div>
          <div
            style={{
              marginTop: 'auto',
              background: '#ffffff',
              padding: '16px 20px',
              borderRadius: 12,
              fontFamily: font.mono,
              fontSize: 22,
              border: `1px solid ${ink.border}`,
              whiteSpace: 'pre-line',
            }}
          >
            {card.example}
          </div>
        </div>
      ))}
    </div>
    <SlideFooter />
  </div>
);

// 21. Const Reassignment Trap
const ConstReassignmentTrap: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 04 • Variables & Memory"
      title="The Error You WILL Hit: Reassigning 'const'"
      subtitle="Learning how to read browser runtime error messages"
    />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1.1fr 1fr',
        gap: 40,
        flex: 1,
        alignItems: 'center',
      }}
    >
      <CodeSnippet
        filename="app.js"
        fontSize={28}
        lines={[
          `const courseName = "Web Architecture";`,
          `let attendees = 25;`,
          ``,
          `// Updating attendees works fine:`,
          `attendees = 26;`,
          ``,
          `// ❌ Attempting to reassign a const:`,
          `courseName = "Advanced Architecture";`,
        ]}
        highlightLine={8}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div
          style={{
            padding: 30,
            borderRadius: 18,
            background: ink.accentSoft,
            border: `2px solid ${ink.accentBorder}`,
          }}
        >
          <div style={{ fontSize: 24, fontFamily: font.mono, fontWeight: 800, color: ink.accent, marginBottom: 8 }}>
            BROWSER RUNTIME ERROR:
          </div>
          <div style={{ fontSize: 28, fontFamily: font.mono, color: ink.accent, fontWeight: 700 }}>
            TypeError: Assignment to constant variable.
          </div>
        </div>

        <div style={{ fontSize: 26, color: ink.soft, lineHeight: 1.55 }}>
          <strong>What it means:</strong> The JavaScript Engine checked its memory table and saw
          that <code>courseName</code> was declared as a locked constant. It immediately halts
          execution to protect your program from unintended state mutations.
        </div>

        <div style={{ fontSize: 24, color: ink.muted, lineHeight: 1.5 }}>
          💡 <strong>Fix:</strong> If the variable genuinely needs to change, declare it with{' '}
          <code>let</code> instead of <code>const</code>!
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 22. Variable Naming Best Practices
const VariableNamingBestPractices: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 04 • Variables & Memory"
      title="Variable Naming Hygiene & Conventions"
      subtitle="Writing self-documenting code that humans and AI can audit"
    />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 36,
        flex: 1,
        alignContent: 'center',
      }}
    >
      {[
        {
          rule: 'Use camelCase for Variables',
          good: 'const studentAge = 20;',
          bad: 'const student_age = 20; // Or StudentAge',
          desc: 'First word lowercase, each subsequent word capitalized. Standard in the JS ecosystem.',
        },
        {
          rule: 'Descriptive Names over Single Letters',
          good: 'const daysUntilLaunch = 14;',
          bad: 'const d = 14; // What does d mean?',
          desc: 'Code is read 10x more often than it is written. Optimize for readability.',
        },
        {
          rule: 'Boolean Variables Start with is/has',
          good: 'const isModalOpen = true;',
          bad: 'const modal = true; // Confusing',
          desc: 'Makes conditional statements read like plain English: if (isModalOpen) ...',
        },
        {
          rule: 'Reserved Keywords Cannot Be Names',
          good: 'const userClass = "Beginner";',
          bad: 'const class = "Beginner"; // SyntaxError',
          desc: 'Keywords like let, const, class, function, return belong to the language syntax.',
        },
      ].map((card, i) => (
        <div
          key={i}
          style={{
            padding: 32,
            borderRadius: 18,
            background: ink.panel,
            border: `1px solid ${ink.border}`,
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          <div style={{ fontSize: 28, fontWeight: 800, color: ink.text }}>{card.rule}</div>
          <div style={{ fontSize: 22, color: ink.muted, lineHeight: 1.45 }}>{card.desc}</div>
          <div style={{ display: 'flex', gap: 16, marginTop: 8 }}>
            <span style={{ fontFamily: font.mono, fontSize: 22, color: ink.mint, fontWeight: 600 }}>
              ✓ {card.good}
            </span>
          </div>
          <div>
            <span style={{ fontFamily: font.mono, fontSize: 20, color: ink.accent }}>
              ✗ {card.bad}
            </span>
          </div>
        </div>
      ))}
    </div>
    <SlideFooter />
  </div>
);

// 23. Part 5 Divider
const Part5Divider: Page = () => (
  <ChapterDivider
    partNumber="05"
    title="The 7 Primitive Building Blocks"
    subtitle="Understanding fundamental, immutable data values in JavaScript memory."
    icon={<IconLayers size={48} color={ink.purple} />}
  />
);

// 24. Dynamic Typing Explained
const DynamicTypingExplained: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 05 • Primitive Types"
      title="Dynamic Typing Explained Simply"
      subtitle="Types belong to values, not variable declarations"
    />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 40,
        flex: 1,
        alignItems: 'center',
      }}
    >
      <div
        style={{
          padding: 38,
          borderRadius: 20,
          background: ink.panel,
          border: `2px solid ${ink.border}`,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        <div style={{ fontSize: 32, fontWeight: 800, color: ink.text }}>
          Static Languages (C, Java)
        </div>
        <div style={{ fontSize: 26, color: ink.muted, lineHeight: 1.5 }}>
          The box has a locked shape. You must declare what type goes inside before compiling:
        </div>
        <div
          style={{
            background: ink.panelDark,
            padding: 20,
            borderRadius: 12,
            fontFamily: font.mono,
            fontSize: 24,
            color: '#79c0ff',
          }}
        >
          int score = 100;
          <br />
          score = "High"; // ❌ Compile Error!
        </div>
      </div>

      <div
        style={{
          padding: 38,
          borderRadius: 20,
          background: ink.mintSoft,
          border: `2px solid ${ink.mint}`,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        <div style={{ fontSize: 32, fontWeight: 800, color: ink.mint }}>
          JavaScript (Dynamic Typing)
        </div>
        <div style={{ fontSize: 26, color: ink.text, lineHeight: 1.5 }}>
          The box can hold any value! The type is determined automatically by the current content:
        </div>
        <div
          style={{
            background: ink.panelDark,
            padding: 20,
            borderRadius: 12,
            fontFamily: font.mono,
            fontSize: 24,
            color: '#7ee787',
          }}
        >
          let score = 100; // score is a Number
          <br />
          score = "High"; // Now score is a String!
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 25. The 7 Primitives Overview
const The7PrimitivesOverview: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 05 • Primitive Types"
      title="The 7 Primitive Data Types Overview"
      subtitle="Atomic immutable values in JavaScript memory"
    />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 24,
        flex: 1,
        alignContent: 'center',
      }}
    >
      {[
        { type: 'number', example: '42, 3.14, NaN', desc: 'All numeric calculations', color: ink.sky },
        { type: 'string', example: '"Hello", `User`', desc: 'Textual data in quotes', color: ink.mint },
        { type: 'boolean', example: 'true / false', desc: 'Binary logic switches', color: ink.amber },
        { type: 'undefined', example: 'undefined', desc: 'Unassigned variable default', color: ink.accent },
        { type: 'null', example: 'null', desc: 'Intentional absence of value', color: ink.purple },
        { type: 'bigint', example: '9007199254740991n', desc: 'Arbitrary precision integers', color: ink.indigo },
        { type: 'symbol', example: 'Symbol("id")', desc: 'Unique immutable identifier', color: ink.soft },
      ].map((p, i) => (
        <div
          key={i}
          style={{
            padding: 28,
            borderRadius: 18,
            background: ink.panel,
            border: `2px solid ${p.color}33`,
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          <span
            style={{
              fontSize: 26,
              fontFamily: font.mono,
              fontWeight: 800,
              color: p.color,
            }}
          >
            {p.type}
          </span>
          <div
            style={{
              background: '#ffffff',
              padding: '8px 12px',
              borderRadius: 8,
              fontFamily: font.mono,
              fontSize: 20,
              color: ink.soft,
              border: `1px solid ${ink.border}`,
            }}
          >
            {p.example}
          </div>
          <div style={{ fontSize: 20, color: ink.muted, lineHeight: 1.45 }}>{p.desc}</div>
        </div>
      ))}
      <div
        style={{
          padding: 28,
          borderRadius: 18,
          background: ink.accentSoft,
          border: `2px dashed ${ink.accent}`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div style={{ fontSize: 24, fontWeight: 800, color: ink.accent, marginBottom: 8 }}>
          Non-Primitives?
        </div>
        <div style={{ fontSize: 20, color: ink.text, lineHeight: 1.45 }}>
          Objects and Arrays are <strong>Non-Primitive Structures</strong> (Coming in Session 06!)
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 26. Numbers and Strings
const NumbersAndStrings: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 05 • Primitive Types"
      title="Numbers & Strings (With Template Literals)"
      subtitle="Working with text and calculations in modern code"
    />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 40,
        flex: 1,
        alignItems: 'stretch',
      }}
    >
      <div
        style={{
          padding: 36,
          borderRadius: 20,
          background: ink.panel,
          border: `1px solid ${ink.border}`,
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <div style={{ fontSize: 32, fontWeight: 800, color: ink.sky }}>
          Number: Single 64-bit Format
        </div>
        <div style={{ fontSize: 24, color: ink.muted, lineHeight: 1.5 }}>
          Unlike languages with floats, doubles, and ints, JS uses one unified number type:
        </div>
        <CodeSnippet
          fontSize={24}
          lines={[
            `const age = 21;          // Integer`,
            `const price = 19.99;     // Float`,
            `const invalid = 0 / 0;   // NaN ("Not a Number")`,
            `const infinity = 1 / 0;  // Infinity`,
          ]}
        />
      </div>

      <div
        style={{
          padding: 36,
          borderRadius: 20,
          background: ink.panel,
          border: `1px solid ${ink.border}`,
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <div style={{ fontSize: 32, fontWeight: 800, color: ink.mint }}>
          Strings & Template Literals
        </div>
        <div style={{ fontSize: 24, color: ink.muted, lineHeight: 1.5 }}>
          Use backticks <code>`...`</code> with <code>${`{...}`}</code> for clean string interpolation:
        </div>
        <CodeSnippet
          fontSize={24}
          lines={[
            `const student = "Amina";`,
            `const score = 95;`,
            ``,
            `// Modern Template Literal (Clean):`,
            `const msg = \`Hello \${student}, score: \${score}!\`;`,
          ]}
        />
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 27. Booleans and Truth
const BooleansAndTruth: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 05 • Primitive Types"
      title="Booleans: The Switches of Logic"
      subtitle="Only two values in the universe: true or false"
    />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1.1fr 1fr',
        gap: 40,
        flex: 1,
        alignItems: 'center',
      }}
    >
      <CodeSnippet
        filename="auth.js"
        fontSize={28}
        lines={[
          `const isEnrolled = true;`,
          `const hasPaidTuition = false;`,
          ``,
          `// Conditional branching based on booleans:`,
          `if (isEnrolled && hasPaidTuition) {`,
          `  console.log("Access Granted to Lab");`,
          `} else {`,
          `  console.log("Registration Incomplete");`,
          `}`,
        ]}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div
          style={{
            padding: 30,
            borderRadius: 18,
            background: ink.panel,
            border: `1px solid ${ink.border}`,
          }}
        >
          <div style={{ fontSize: 28, fontWeight: 800, color: ink.text, marginBottom: 8 }}>
            Comparison Operators Yield Booleans
          </div>
          <div style={{ fontSize: 24, color: ink.muted, lineHeight: 1.55 }}>
            Whenever you compare values with <code>===</code>, <code>!==</code>, <code>&gt;</code>,
            or <code>&lt;</code>, the result evaluates to a primitive boolean.
          </div>
        </div>

        <div
          style={{
            padding: 28,
            borderRadius: 18,
            background: ink.mintSoft,
            border: `1px solid ${ink.mint}`,
            fontFamily: font.mono,
            fontSize: 24,
            color: ink.text,
            lineHeight: 1.6,
          }}
        >
          <div>25 &gt; 18 ➔ true</div>
          <div>"Amina" === "Carlos" ➔ false</div>
          <div>5 === "5" ➔ false (Strict Equality)</div>
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 28. Undefined vs Null
const UndefinedVsNull: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 05 • Primitive Types"
      title="The Classic Mystery: undefined vs. null"
      subtitle="Solving the number one point of confusion for beginners"
    />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 40,
        flex: 1,
        alignItems: 'stretch',
      }}
    >
      <div
        style={{
          padding: 40,
          borderRadius: 20,
          background: ink.panel,
          border: `2px solid ${ink.accent}44`,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        <span style={{ fontSize: 22, fontFamily: font.mono, fontWeight: 800, color: ink.accent }}>
          SYSTEM DEFAULT
        </span>
        <div style={{ fontSize: 40, fontWeight: 900, color: ink.accent }}>undefined</div>
        <div style={{ fontSize: 28, color: ink.soft, lineHeight: 1.5 }}>
          "JavaScript says: I don't know what this is yet."
        </div>
        <div style={{ fontSize: 24, color: ink.muted, lineHeight: 1.55 }}>
          A variable box has been declared in memory, but nobody has put any value into the box yet.
        </div>
        <div
          style={{
            marginTop: 'auto',
            background: '#ffffff',
            padding: 20,
            borderRadius: 12,
            fontFamily: font.mono,
            fontSize: 24,
            border: `1px solid ${ink.border}`,
          }}
        >
          let score;
          <br />
          console.log(score); // undefined
        </div>
      </div>

      <div
        style={{
          padding: 40,
          borderRadius: 20,
          background: ink.panel,
          border: `2px solid ${ink.sky}44`,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        <span style={{ fontSize: 22, fontFamily: font.mono, fontWeight: 800, color: ink.sky }}>
          DEVELOPER CHOICE
        </span>
        <div style={{ fontSize: 40, fontWeight: 900, color: ink.sky }}>null</div>
        <div style={{ fontSize: 28, color: ink.soft, lineHeight: 1.5 }}>
          "The Developer says: this box is intentionally empty."
        </div>
        <div style={{ fontSize: 24, color: ink.muted, lineHeight: 1.55 }}>
          Explicitly assigned by you to signify the intentional absence of any value or object.
        </div>
        <div
          style={{
            marginTop: 'auto',
            background: '#ffffff',
            padding: 20,
            borderRadius: 12,
            fontFamily: font.mono,
            fontSize: 24,
            border: `1px solid ${ink.border}`,
          }}
        >
          let currentUser = null;
          <br />
          // User is not logged in yet
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 29. Typeof and Historical Quirks
const TypeofAndHistoricalQuirks: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 05 • Primitive Types"
      title="The typeof Operator & The 1995 Bug"
      subtitle="Inspecting types at runtime and learning a famous historical quirk"
    />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1.1fr 1fr',
        gap: 40,
        flex: 1,
        alignItems: 'center',
      }}
    >
      <CodeSnippet
        filename="typeof-inspection.js"
        fontSize={28}
        lines={[
          `typeof 42;          // "number"`,
          `typeof "Amina";     // "string"`,
          `typeof true;        // "boolean"`,
          `typeof undefined;   // "undefined"`,
          ``,
          `// ⚠️ THE FAMOUS 1995 HISTORICAL BUG:`,
          `typeof null;        // "object" !?`,
        ]}
        highlightLine={7}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div
          style={{
            padding: 32,
            borderRadius: 20,
            background: ink.accentSoft,
            border: `2px solid ${ink.accentBorder}`,
          }}
        >
          <div style={{ fontSize: 28, fontWeight: 800, color: ink.accent, marginBottom: 12 }}>
            Why does typeof null === "object"?
          </div>
          <div style={{ fontSize: 26, color: ink.soft, lineHeight: 1.55 }}>
            In the original 1995 JavaScript engine, values were stored with a 3-bit type tag. The
            tag for objects was <code>000</code>. Because <code>null</code> was represented as a NULL
            pointer (all zeros), the engine mistakenly identified it as an object!
          </div>
        </div>

        <div style={{ fontSize: 24, color: ink.muted, lineHeight: 1.5 }}>
          💡 <strong>Why wasn't it fixed?</strong> Fixing it today would break millions of legacy
          websites that rely on this behavior. <code>null</code> is a primitive type in modern specs!
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 30. Part 6 Divider
const Part6Divider: Page = () => (
  <ChapterDivider
    partNumber="06"
    title="Hands-on Lab & Socratic Defense"
    subtitle="Interactive DevTools console sprints, error triage, and AI tutor defense."
    icon={<IconTerminal size={48} color={ink.mint} />}
  />
);

// 31. Lab Walkthrough
const LabWalkthrough: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 06 • Hands-on Lab"
      title="Hands-on Lab: DevTools Exploration (55 min)"
      subtitle="The 3 structured sprints from COURSE_MATERIAL.md"
    />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 36,
        flex: 1,
        alignContent: 'center',
      }}
    >
      {[
        {
          sprint: 'Sprint 1 (15 min)',
          title: 'DevTools Console REPL',
          tasks: [
            'Press F12 / Cmd+Opt+J in Chrome',
            'Declare courseName and attendees',
            'Log formatted template strings',
            'Inspect live expressions in console',
          ],
          color: ink.sky,
        },
        {
          sprint: 'Sprint 2 (20 min)',
          title: 'Intentional Error Triage',
          tasks: [
            'Reassign a const variable',
            'Observe TypeError in console',
            'Log an undeclared variable',
            'Diagnose ReferenceError stack trace',
          ],
          color: ink.accent,
        },
        {
          sprint: 'Sprint 3 (20 min)',
          title: 'script.js with defer',
          tasks: [
            'Create index.html and script.js',
            'Link via <script defer> in <head>',
            'Store 7 primitives in memory',
            'Verify clean execution with Live Server',
          ],
          color: ink.mint,
        },
      ].map((card, i) => (
        <div
          key={i}
          style={{
            padding: 36,
            borderRadius: 20,
            background: ink.panel,
            border: `2px solid ${card.color}33`,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          <span style={{ fontSize: 20, fontFamily: font.mono, fontWeight: 800, color: card.color }}>
            {card.sprint}
          </span>
          <div style={{ fontSize: 32, fontWeight: 800, color: ink.text }}>{card.title}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 10 }}>
            {card.tasks.map((t, idx) => (
              <div key={idx} style={{ display: 'flex', gap: 12, fontSize: 24, color: ink.soft }}>
                <span style={{ color: card.color, fontWeight: 800 }}>•</span>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    <SlideFooter />
  </div>
);

// 32. Socratic AI Challenge
const SocraticAiChallenge: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 06 • Socratic AI Defense"
      title="The Socratic AI Tutor Challenge (10 min)"
      subtitle="Testing your conceptual understanding with AI"
    />
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 32,
        flex: 1,
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          padding: 36,
          borderRadius: 20,
          background: ink.panel,
          border: `2px solid ${ink.accentBorder}`,
        }}
      >
        <div style={{ fontSize: 24, fontFamily: font.mono, fontWeight: 800, color: ink.accent, marginBottom: 12 }}>
          PASTE THIS PROMPT INTO YOUR SOCRATIC AI ASSISTANT:
        </div>
        <div
          style={{
            background: '#ffffff',
            padding: 32,
            borderRadius: 16,
            border: `1px solid ${ink.border}`,
            fontFamily: font.sans,
            fontSize: 32,
            fontWeight: 600,
            lineHeight: 1.5,
            color: ink.text,
          }}
        >
          "Why does JavaScript throw a TypeError when I reassign a const variable, but allows me to
          modify properties inside an object declared with const? Explain using the labeled box
          metaphor."
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 32,
        }}
      >
        <div
          style={{
            padding: 28,
            borderRadius: 16,
            background: ink.mintSoft,
            border: `1px solid ${ink.mint}`,
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: ink.mint, marginBottom: 6 }}>
            GOAL OF THE CHALLENGE
          </div>
          <div style={{ fontSize: 24, color: ink.text, lineHeight: 1.5 }}>
            Validate that you understand the boundary between variable re-binding and internal value
            mutation.
          </div>
        </div>

        <div
          style={{
            padding: 28,
            borderRadius: 16,
            background: ink.skySoft,
            border: `1px solid ${ink.sky}`,
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: ink.sky, marginBottom: 6 }}>
            EVALUATION FILTER
          </div>
          <div style={{ fontSize: 24, color: ink.text, lineHeight: 1.5 }}>
            Can you explain it back to your peer in 2 plain English sentences without technical jargon?
          </div>
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 33. Summary & Bridge
const SessionSummaryAndBridge: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Session 05 • Graduation"
      title="Session Summary & The Bridge Ahead"
      subtitle="You have completed your foundational orientation into JavaScript!"
    />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 1fr',
        gap: 40,
        flex: 1,
        alignItems: 'center',
      }}
    >
      <div
        style={{
          padding: 38,
          borderRadius: 20,
          background: ink.panel,
          border: `1px solid ${ink.border}`,
          display: 'flex',
          flexDirection: 'column',
          gap: 18,
        }}
      >
        <div style={{ fontSize: 32, fontWeight: 900, color: ink.text }}>
          What You Mastered Today:
        </div>
        {[
          'The Web Trinity: HTML (Structure) + CSS (Style) + JS (Brain)',
          'Engines: V8 & JavaScriptCore translate JS into CPU instructions',
          'Runtimes: Browser Web APIs vs. Server Node.js & Bun',
          'Developer Cockpit: DevTools Console, <script defer>, and CLI',
          'Memory Mechanics: RAM vs Disk, const by default, let for counters',
          'The 7 Primitives: Atomic immutable values in memory',
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', gap: 14, fontSize: 24, color: ink.soft }}>
            <span style={{ color: ink.mint, fontWeight: 800 }}>✓</span>
            <span>{item}</span>
          </div>
        ))}
      </div>

      <div
        style={{
          padding: 38,
          borderRadius: 20,
          background: ink.accentSoft,
          border: `2px solid ${ink.accentBorder}`,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        <span style={{ fontSize: 20, fontFamily: font.mono, fontWeight: 800, color: ink.accent }}>
          NEXT WEEK PREVIEW
        </span>
        <div style={{ fontSize: 38, fontWeight: 900, color: ink.accent }}>
          Session 06: Objects & Arrays
        </div>
        <div style={{ fontSize: 26, color: ink.soft, lineHeight: 1.55 }}>
          Now that you understand primitives, we build real-world data structures:
        </div>
        <ul style={{ fontSize: 24, color: ink.muted, lineHeight: 1.7, margin: 0, paddingLeft: 24 }}>
          <li>The Contact Card Metaphor (Objects)</li>
          <li>The Ice Cube Tray Metaphor (Arrays)</li>
          <li>Modeling E-Commerce Catalogs</li>
          <li>Copy by Reference vs. Copy by Value</li>
        </ul>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ─── Speaker Notes Export (Index-Aligned) ──────────────────────────────────────

export const notes: (string | undefined)[] = [
  // 01. Cover
  'Welcome everyone to Session 05. Today marks our official transition into Phase 2 of the course: JavaScript Fundamentals. Up until now, our web pages were beautiful but static. Today, we give them a brain and computational memory.',

  // 02. Agenda
  'Here is our flight plan for the next 2 hours. We will start with how engines execute code, explore why Node and Bun exist, learn where to write and run code, and then master variable memory and the 7 primitives.',

  // 03. Part 1 Divider
  'Let us begin with Part 1: The JavaScript Revolution. How a language written in 10 days became the engine of modern computing.',

  // 04. The Web Trinity
  'Connect this back to Sessions 1 through 4. HTML is the skeleton—it defines the tags. CSS is the skin and clothing—it positions and styles. JavaScript is the brain and muscle—it stores state in RAM, listens for user clicks, and mutates the page.',

  // 05. A Brief History
  'Tell the Brendan Eich story. 10 days in May 1995 at Netscape. Emphasize that Java and JavaScript have nothing in common besides marketing. Point out ES6 in 2015 as the birth of modern JavaScript with const and let.',

  // 06. Part 2 Divider
  'Part 2: Engines & Modern Runtimes. What is a JavaScript engine, and how does code run in browsers versus servers?',

  // 07. What is a JS Engine?
  'Explain the CPU translation layer. Crucial takeaway for beginners: the engine only knows ECMAScript logic! It has no concept of a web page or an HTML button.',

  // 08. The Big Three Engines
  'Introduce Google V8 (Chrome & Node), Apple JavaScriptCore (Safari & Bun), and Mozilla SpiderMonkey (Firefox). Notice that Bun selected JavaScriptCore for fast startup.',

  // 09. Engine vs Runtime Contract
  'Review the formula: Runtime = Engine + Host Environment APIs. The engine gives syntax grammar; the runtime gives environment superpowers like DOM in browsers or File System on servers.',

  // 10. Server Runtimes Evolution
  'Explain 2009: Ryan Dahl took V8, added C++ system bindings for file system and networking, and invented Node.js. Mention Deno in 2018 and Bun in 2022.',

  // 11. Node.js vs Bun
  'Compare Node.js (the enterprise standard with millions of npm packages) and Bun (the all-in-one blazing fast runtime and package manager written in Zig).',

  // 12. Runtime Comparison Matrix
  'Review the matrix. Point out why document throws an error in Node/Bun, and why fs throws an error in the browser sandbox.',

  // 13. Part 3 Divider
  'Part 3: Your Developer Cockpit. Where to write, test, and run code.',

  // 14. Three Ways to Run JS
  'Show the three environments: DevTools Console, HTML script tag, and Terminal CLI with Node or Bun.',

  // 15. The Script Tag Contract
  'Explain why defer in the head tag is modern best practice. Parallel download without blocking DOM tree construction.',

  // 16. console.log() Superpower
  'Demonstrate console.log, console.warn, and console.error. Advise students to log early and often.',

  // 17. Part 4 Divider
  'Part 4: Variables & Browser Memory. How RAM stores data state.',

  // 18. File vs Memory
  'Connect with COURSE_MATERIAL.md. Code on disk is dead text. Memory in RAM is active state that wipes clean on page refresh.',

  // 19. Variables as Boxes
  'Use the labeled box metaphor: variable name is the sticker, value is the contents, const/let is the lock type.',

  // 20. var vs let vs const
  'State the strict professional rule: default to const for 95% of declarations, let for mutating counters, and never touch legacy var.',

  // 21. Const Reassignment Trap
  'Analyze TypeError: Assignment to constant variable. Show how to read the error and when to switch to let.',

  // 22. Variable Naming Best Practices
  'Highlight camelCase, descriptive intention-revealing names, boolean prefixes (is/has), and reserved keywords.',

  // 23. Part 5 Divider
  'Part 5: The 7 Primitive Types. The atomic building blocks of JavaScript.',

  // 24. Dynamic Typing Explained
  'Contrast static languages with dynamic JavaScript. Types belong to the values, not the variable box.',

  // 25. 7 Primitives Overview
  'Quickly scan all 7 primitives: number, string, boolean, undefined, null, bigint, symbol.',

  // 26. Numbers & Strings
  'Show 64-bit numbers, NaN, and modern backtick template literals with string interpolation.',

  // 27. Booleans & Truth
  'Explain binary switches true and false, conditional branching, and strict equality ===.',

  // 28. undefined vs null
  'Demystify the distinction: undefined means the system does not know yet; null means the developer deliberately set it to empty.',

  // 29. typeof and Historical Quirks
  'Show typeof outputs and explain the famous 1995 bug where typeof null returns "object".',

  // 30. Part 6 Divider
  'Part 6: Hands-on Lab & Socratic AI Challenge.',

  // 31. Lab Walkthrough
  'Guide students through the 3 lab sprints: Console exploration, breaking code to see errors, and building script.js.',

  // 32. Socratic AI Challenge
  'Have students prompt their AI assistant with the const reassignment challenge and practice explaining it in plain English.',

  // 33. Summary & Bridge
  'Recap today’s achievements and preview Session 06: Objects and Arrays modeled with Contact Cards and Ice Cube Trays.',
];

// ─── Slide Meta & Export Default ──────────────────────────────────────────────

export const meta: SlideMeta = {
  title: 'Session 05: JavaScript Foundations: The Engine, Modern Runtimes & Core Memory Mechanics',
  createdAt: '2026-10-23T16:52:07.351Z',
  theme: 'open-slide-default',
};

export default [
  Cover,
  Agenda,
  Part1Divider,
  TheWebTrinity,
  JsBriefHistory,
  Part2Divider,
  WhatIsAJsEngine,
  TheBigThreeEngines,
  EngineVsRuntimeContract,
  ServerRuntimesEvolution,
  NodeVsBunShowcase,
  RuntimeComparisonMatrix,
  Part3Divider,
  ThreeWaysToRunJs,
  TheScriptTagContract,
  ConsoleLogSuperpower,
  Part4Divider,
  FileVsMemoryMentalModel,
  VariablesAsBoxes,
  VarVsLetVsConst,
  ConstReassignmentTrap,
  VariableNamingBestPractices,
  Part5Divider,
  DynamicTypingExplained,
  The7PrimitivesOverview,
  NumbersAndStrings,
  BooleansAndTruth,
  UndefinedVsNull,
  TypeofAndHistoricalQuirks,
  Part6Divider,
  LabWalkthrough,
  SocraticAiChallenge,
  SessionSummaryAndBridge,
] satisfies Page[];
