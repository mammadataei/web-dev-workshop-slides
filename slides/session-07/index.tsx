import {
  type DesignSystem,
  type Page,
  type SlideMeta,
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
  size = 36,
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

const IconCpu = ({ size = 36, color = ink.accent }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
  </Svg>
);

const IconLayers = ({ size = 36, color = ink.purple }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </Svg>
);

const IconTerminal = ({ size = 36, color = ink.amber }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </Svg>
);

const IconAlert = ({ size = 32, color = ink.accent }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </Svg>
);

const IconCheck = ({ size = 32, color = ink.mint }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </Svg>
);

const IconCode = ({ size = 36, color = ink.sky }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </Svg>
);

const IconSparkles = ({ size = 36, color = ink.accent }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
  </Svg>
);

const IconSearch = ({ size = 36, color = ink.sky }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
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
      marginBottom: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      flexShrink: 0,
    }}
  >
    {part && (
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          fontSize: 20,
          fontWeight: 700,
          color: ink.accent,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
        }}
      >
        <span
          style={{
            width: 8,
            height: 8,
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
          fontSize: 60,
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
        <span style={{ fontSize: 24, color: ink.muted, fontWeight: 500, flexShrink: 0 }}>
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
      <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexShrink: 0 }}>
        <span style={{ fontWeight: 800, color: ink.text }}>SESSION 07</span>
        <span style={{ color: ink.border }}>|</span>
        <span>Functions, Reusable Logic &amp; The Live DOM Bridge</span>
      </div>
      <div style={{ fontFamily: font.mono, fontWeight: 700, color: ink.soft, flexShrink: 0 }}>
        {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </div>
    </div>
  );
};

// ─── Code Window & Syntax Highlighter ─────────────────────────────────────────

const renderCodeLine = (line: string): ReactNode => {
  if (
    line.trim().startsWith('//') ||
    line.trim().startsWith('/*') ||
    line.trim().startsWith('*')
  ) {
    return <span style={{ color: '#8b949e', fontStyle: 'italic' }}>{line}</span>;
  }

  const parts = line.split(
    /(\b(?:function|return|const|let|var|if|else|switch|case|break|continue|default|for|of|in|while|do|typeof|true|false|null|undefined|document|window)\b|\b\d+(?:\.\d+)?\b|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|[{}()[\].,;:?]|===|!==|==|!=|=>|<=|>=|&&|\|\||\+\+|--|[+\-*\/%!=<>])/g
  );

  return parts.map((part, index) => {
    if (!part) return null;
    if (
      /^(?:function|return|const|let|var|if|else|switch|case|break|continue|default|for|of|in|while|do|typeof)$/.test(
        part
      )
    ) {
      return (
        <span key={index} style={{ color: '#ff7b72', fontWeight: 600 }}>
          {part}
        </span>
      );
    }
    if (/^(?:document|window)$/.test(part)) {
      return (
        <span key={index} style={{ color: '#d2a8ff', fontWeight: 700 }}>
          {part}
        </span>
      );
    }
    if (/^(?:true|false|null|undefined)$/.test(part)) {
      return (
        <span key={index} style={{ color: '#79c0ff', fontWeight: 600 }}>
          {part}
        </span>
      );
    }
    if (/^\d+(?:\.\d+)?$/.test(part)) {
      return <span key={index} style={{ color: '#79c0ff' }}>{part}</span>;
    }
    if (
      (part.startsWith('"') && part.endsWith('"')) ||
      (part.startsWith("'") && part.endsWith("'")) ||
      (part.startsWith('`') && part.endsWith('`'))
    ) {
      return <span key={index} style={{ color: '#a5d6ff' }}>{part}</span>;
    }
    if (/^(?:===|!==|==|!=|=>|<=|>=|&&|\|\||\+\+|--|[+\-*\/%!=<>])$/.test(part)) {
      return (
        <span key={index} style={{ color: '#ff7b72', fontWeight: 700 }}>
          {part}
        </span>
      );
    }
    return <span key={index} style={{ color: '#e6edf3' }}>{part}</span>;
  });
};

const CodeWindow = ({
  title = 'script.js',
  code,
  badge,
  badgeColor = ink.accent,
  fontSize = 20,
}: {
  title?: string;
  code: string;
  badge?: string;
  badgeColor?: string;
  fontSize?: number;
}) => {
  const lines = code.trim().split('\n');
  return (
    <div
      style={{
        borderRadius: 16,
        background: ink.panelDark,
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: shadow.window,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 18px',
          background: 'rgba(255, 255, 255, 0.04)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56' }} />
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f' }} />
          <span
            style={{
              marginLeft: 10,
              fontFamily: font.mono,
              fontSize: 15,
              color: '#8b949e',
              fontWeight: 500,
            }}
          >
            {title}
          </span>
        </div>
        {badge && (
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              fontFamily: font.mono,
              background: badgeColor,
              color: '#ffffff',
              padding: '3px 8px',
              borderRadius: 6,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}
          >
            {badge}
          </span>
        )}
      </div>
      <div
        style={{
          padding: '20px 24px',
          overflowX: 'auto',
          fontFamily: font.mono,
          fontSize,
          lineHeight: 1.5,
        }}
      >
        {lines.map((line, idx) => (
          <div key={idx} style={{ display: 'flex' }}>
            <span
              style={{
                width: 38,
                color: '#484f58',
                userSelect: 'none',
                textAlign: 'right',
                paddingRight: 16,
                flexShrink: 0,
              }}
            >
              {idx + 1}
            </span>
            <span style={{ flex: 1, whiteSpace: 'pre' }}>{renderCodeLine(line)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── Chapter Divider Helper (Properly Vertically Centered) ─────────────────────

const ChapterDivider = ({
  num,
  title,
  subtitle,
  bullets,
  icon,
}: {
  num: string;
  title: string;
  subtitle: string;
  bullets: string[];
  icon: ReactNode;
}) => (
  <div style={fill}>
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: 1540,
        gap: 28,
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 14,
          padding: '10px 22px',
          borderRadius: 999,
          background: ink.accentSoft,
          border: `1.5px solid ${ink.accentBorder}`,
          alignSelf: 'flex-start',
        }}
      >
        {icon}
        <span
          style={{
            fontSize: 22,
            fontWeight: 800,
            color: ink.accent,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          PART {num}
        </span>
      </div>

      <h1
        style={{
          fontSize: 92,
          fontWeight: 900,
          fontFamily: font.display,
          color: ink.text,
          letterSpacing: '-0.04em',
          lineHeight: 1.08,
          margin: 0,
        }}
      >
        {title}
      </h1>

      <p
        style={{
          fontSize: 32,
          color: ink.muted,
          lineHeight: 1.45,
          margin: 0,
          maxWidth: 1350,
        }}
      >
        {subtitle}
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${bullets.length}, 1fr)`,
          gap: 24,
          marginTop: 12,
        }}
      >
        {bullets.map((b, i) => (
          <div
            key={i}
            style={{
              background: ink.panel,
              border: `1px solid ${ink.border}`,
              borderRadius: 16,
              padding: '22px 26px',
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              boxShadow: shadow.card,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: ink.accentSoft,
                color: ink.accent,
                fontWeight: 800,
                fontSize: 16,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {i + 1}
            </div>
            <span style={{ fontSize: 20, fontWeight: 700, color: ink.soft }}>{b}</span>
          </div>
        ))}
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ─── 01. Cover Slide (Balanced, Beautiful, No Empty Gap) ──────────────────────

const Cover: Page = () => (
  <div
    style={{
      ...fill,
      justifyContent: 'center',
      padding: '0 140px',
      background: 'radial-gradient(circle at 90% 20%, rgba(222, 59, 61, 0.06) 0%, #ffffff 70%)',
    }}
  >
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 16,
        marginBottom: 32,
      }}
    >
      <span
        style={{
          padding: '10px 22px',
          borderRadius: 10,
          background: ink.accent,
          color: '#ffffff',
          fontFamily: font.mono,
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: '0.1em',
        }}
      >
        SESSION 07
      </span>
      <span
        style={{
          padding: '10px 22px',
          borderRadius: 10,
          background: ink.panel,
          border: `1px solid ${ink.border}`,
          color: ink.soft,
          fontFamily: font.mono,
          fontSize: 22,
          fontWeight: 700,
        }}
      >
        PHASE 2: JAVASCRIPT &amp; THE LIVE DOM
      </span>
    </div>

    <h1
      style={{
        fontFamily: font.display,
        fontSize: 106,
        fontWeight: 900,
        letterSpacing: '-0.04em',
        lineHeight: 1.06,
        margin: '0 0 28px 0',
        maxWidth: 1600,
        color: ink.text,
      }}
    >
      Functions, Reusable Logic &amp; <br />
      The Live <span style={{ color: ink.accent }}>DOM Bridge</span>
    </h1>

    <p
      style={{
        fontSize: 34,
        color: ink.muted,
        maxWidth: 1400,
        margin: '0 0 52px 0',
        lineHeight: 1.45,
        fontWeight: 500,
      }}
    >
      From pure computation machines to living browser interfaces: master functions, parameters,
      and return values, then cross the bridge to query and dynamically transform the live DOM tree.
    </p>

    <div
      style={{
        display: 'flex',
        gap: 36,
        borderTop: `2px solid ${ink.border}`,
        paddingTop: 36,
        fontFamily: font.mono,
        fontSize: 22,
        color: ink.muted,
      }}
    >
      <div>
        <span style={{ color: ink.accent, fontWeight: 800 }}>FUNCTIONS:</span> Callable Machines
      </div>
      <div>•</div>
      <div>
        <span style={{ color: ink.purple, fontWeight: 800 }}>THE DOM:</span> RAM Tree Hierarchy
      </div>
      <div>•</div>
      <div>
        <span style={{ color: ink.sky, fontWeight: 800 }}>QUERYING:</span> querySelector Engine
      </div>
      <div>•</div>
      <div>
        <span style={{ color: ink.mint, fontWeight: 800 }}>UPDATES:</span> textContent &amp; classList
      </div>
    </div>
  </div>
);

// ─── 02. Agenda Slide ─────────────────────────────────────────────────────────

const Agenda: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Curriculum Architecture"
      title="Today's Flight Plan: 7 Structural Pillars"
      subtitle="From pure computational logic to live browser screens"
    />

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, flex: 1 }}>
      {[
        {
          num: '01',
          title: 'Functions as Machines',
          desc: 'Declarations, expressions, arrow syntax, parameters, arguments & return values.',
          color: ink.accent,
        },
        {
          num: '02',
          title: 'The DOM Architecture',
          desc: 'Static HTML files on disk vs live C++/JS DOM object graph in browser RAM.',
          color: ink.purple,
        },
        {
          num: '03',
          title: 'DOM Querying Engine',
          desc: 'querySelector, querySelectorAll, CSS selector engines & defensive null checks.',
          color: ink.sky,
        },
        {
          num: '04',
          title: 'Dynamic DOM Updates',
          desc: 'Safe textContent vs innerHTML XSS vulnerabilities, classList & attribute binding.',
          color: ink.mint,
        },
        {
          num: '05',
          title: 'Functional Rendering',
          desc: 'Data-to-DOM component pipelines: turning JavaScript objects into living HTML cards.',
          color: ink.amber,
        },
        {
          num: '06',
          title: 'In-Class Guided Lab',
          desc: 'Building the Dynamic Student Profile Card & Socratic AI prompt drill live.',
          color: ink.indigo,
        },
        {
          num: '07',
          title: '2 Homework Missions',
          desc: 'Launching Homework 1 (Catalog) & Homework 2 (Gradebook) to cement functions and DOM.',
          color: ink.accent,
        },
        {
          num: '★',
          title: 'The Big Milestone',
          desc: 'Connecting computation to visual pixels: the exact bridge professional web apps use!',
          color: ink.soft,
        },
      ].map((card, i) => (
        <div
          key={i}
          style={{
            background: ink.panel,
            border: `1px solid ${ink.border}`,
            borderRadius: 16,
            padding: 22,
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            boxShadow: shadow.card,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span
              style={{
                fontFamily: font.mono,
                fontSize: 22,
                fontWeight: 800,
                color: card.color,
              }}
            >
              {card.num}
            </span>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: card.color }} />
          </div>
          <h3 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: ink.text }}>{card.title}</h3>
          <p style={{ margin: 0, fontSize: 15, color: ink.muted, lineHeight: 1.45 }}>{card.desc}</p>
        </div>
      ))}
    </div>
    <SlideFooter />
  </div>
);

// ─── 03. Part 1 Divider ───────────────────────────────────────────────────────

const Part1Divider: Page = () => (
  <ChapterDivider
    num="01"
    title="Functions: Reusable Computation Machines"
    subtitle="Package logic into callable, isolated, predictable units of execution"
    bullets={[
      'The Black Box Model (Input -> Process -> Output)',
      'Syntax Shootout: Declarations, Expressions & Arrows',
      'Parameters, Arguments & Default Fallbacks',
      'Return Values: Value Producers vs Debug Logs',
    ]}
    icon={<IconCpu size={32} color={ink.accent} />}
  />
);

// ─── 04. What is a Function? ──────────────────────────────────────────────────

const WhatIsAFunction: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 1 · Foundations"
      title="What is a Function? The Reusable Machine"
      subtitle="Encapsulating inputs, deterministic processing, and outputs"
    />

    <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 36, flex: 1, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <p style={{ fontSize: 24, color: ink.muted, margin: 0, lineHeight: 1.5 }}>
          A function is a <strong>named, reusable block of instructions</strong>. Instead of copy-pasting
          calculation code across your app (violating DRY: <em>Don't Repeat Yourself</em>),
          you build a callable machine once and execute it anywhere.
        </p>

        {/* Visual Diagram of Function Machine */}
        <div
          style={{
            background: ink.panel,
            border: `2px dashed ${ink.border}`,
            borderRadius: 18,
            padding: '20px 28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: 13, fontWeight: 800, color: ink.dim, textTransform: 'uppercase' }}>
              Input
            </span>
            <div
              style={{
                marginTop: 6,
                background: ink.skySoft,
                color: ink.sky,
                padding: '6px 14px',
                borderRadius: 8,
                fontFamily: font.mono,
                fontWeight: 700,
                fontSize: 16,
              }}
            >
              price, taxRate
            </div>
          </div>

          <div style={{ fontSize: 26, color: ink.dim }}>&rarr;</div>

          <div
            style={{
              textAlign: 'center',
              background: '#0d1117',
              color: '#fff',
              padding: '14px 22px',
              borderRadius: 14,
              border: `2px solid ${ink.accent}`,
              boxShadow: shadow.card,
            }}
          >
            <span style={{ fontSize: 13, fontWeight: 800, color: ink.accent, textTransform: 'uppercase' }}>
              Machine Logic
            </span>
            <div style={{ fontFamily: font.mono, fontSize: 17, fontWeight: 700, marginTop: 4 }}>
              calculateTotal()
            </div>
          </div>

          <div style={{ fontSize: 26, color: ink.dim }}>&rarr;</div>

          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: 13, fontWeight: 800, color: ink.dim, textTransform: 'uppercase' }}>
              Output
            </span>
            <div
              style={{
                marginTop: 6,
                background: ink.mintSoft,
                color: ink.mint,
                padding: '6px 14px',
                borderRadius: 8,
                fontFamily: font.mono,
                fontWeight: 700,
                fontSize: 16,
              }}
            >
              $108.00
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div style={{ padding: 16, borderRadius: 12, background: ink.panel, border: `1px solid ${ink.border}` }}>
            <div style={{ fontWeight: 800, fontSize: 18, color: ink.text }}>1. Modularity</div>
            <div style={{ fontSize: 15, color: ink.muted, marginTop: 4 }}>
              Break complex apps into small, testable single-purpose machines.
            </div>
          </div>
          <div style={{ padding: 16, borderRadius: 12, background: ink.panel, border: `1px solid ${ink.border}` }}>
            <div style={{ fontWeight: 800, fontSize: 18, color: ink.text }}>2. Maintainability</div>
            <div style={{ fontSize: 15, color: ink.muted, marginTop: 4 }}>
              Fixing a bug inside the function fixes it everywhere across the program.
            </div>
          </div>
        </div>
      </div>

      <CodeWindow
        title="calculateTotal.js"
        fontSize={20}
        code={`// 1. Define the machine (Declaration)
function calculateTotal(price, taxRate = 0.08) {
  const tax = price * taxRate;
  const total = price + tax;
  return total; // Sends value back to caller
}

// 2. Execute / Call the machine
const receiptA = calculateTotal(100);       // $108.00
const receiptB = calculateTotal(250, 0.10); // $275.00

console.log(receiptA); // 108`}
      />
    </div>
    <SlideFooter />
  </div>
);

// ─── 05. Function Variations ──────────────────────────────────────────────────

const FunctionVariations: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 1 · Foundations"
      title="Function Syntax Variations: 3 Ways to Declare"
      subtitle="Declarations, Function Expressions &amp; Modern Arrow Functions"
    />

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, flex: 1 }}>
      {/* 1. Declaration */}
      <div
        style={{
          background: ink.panel,
          border: `1px solid ${ink.border}`,
          borderRadius: 16,
          padding: 24,
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 13, fontWeight: 800, color: ink.sky, textTransform: 'uppercase' }}>
            Classic
          </span>
          <span style={{ fontSize: 12, padding: '4px 8px', borderRadius: 6, background: ink.skySoft, color: ink.sky, fontWeight: 700 }}>
            Hoisted
          </span>
        </div>
        <h3 style={{ margin: 0, fontSize: 24, fontWeight: 800 }}>Function Declaration</h3>
        <p style={{ margin: 0, fontSize: 15, color: ink.muted, lineHeight: 1.5 }}>
          Uses the <code>function</code> keyword with an explicit identifier. Fully hoisted to the top of its scope.
        </p>
        <div style={{ marginTop: 'auto' }}>
          <CodeWindow
            title="declaration.js"
            fontSize={18}
            code={`// Can be called BEFORE definition!
greet("Sarah"); 

function greet(name) {
  return "Hello, " + name;
}`}
          />
        </div>
      </div>

      {/* 2. Expression */}
      <div
        style={{
          background: ink.panel,
          border: `1px solid ${ink.border}`,
          borderRadius: 16,
          padding: 24,
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 13, fontWeight: 800, color: ink.purple, textTransform: 'uppercase' }}>
            Variable Stored
          </span>
          <span style={{ fontSize: 12, padding: '4px 8px', borderRadius: 6, background: ink.purpleSoft, color: ink.purple, fontWeight: 700 }}>
            TDZ Protected
          </span>
        </div>
        <h3 style={{ margin: 0, fontSize: 24, fontWeight: 800 }}>Function Expression</h3>
        <p style={{ margin: 0, fontSize: 15, color: ink.muted, lineHeight: 1.5 }}>
          An anonymous function assigned to a <code>const</code> variable. Prevents accidental call before declaration.
        </p>
        <div style={{ marginTop: 'auto' }}>
          <CodeWindow
            title="expression.js"
            fontSize={18}
            code={`const greet = function(name) {
  return "Hello, " + name;
};

// Callable ONLY after assignment
greet("Sarah");`}
          />
        </div>
      </div>

      {/* 3. Arrow Function */}
      <div
        style={{
          background: ink.panel,
          border: `1px solid ${ink.border}`,
          borderRadius: 16,
          padding: 24,
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 13, fontWeight: 800, color: ink.accent, textTransform: 'uppercase' }}>
            Modern Standard (ES6)
          </span>
          <span style={{ fontSize: 12, padding: '4px 8px', borderRadius: 6, background: ink.accentSoft, color: ink.accent, fontWeight: 700 }}>
            Concise Syntax
          </span>
        </div>
        <h3 style={{ margin: 0, fontSize: 24, fontWeight: 800 }}>Arrow Function</h3>
        <p style={{ margin: 0, fontSize: 15, color: ink.muted, lineHeight: 1.5 }}>
          Concise modern syntax using <code>=&gt;</code>. Ideal for callbacks, one-liners, and functional pipelines.
        </p>
        <div style={{ marginTop: 'auto' }}>
          <CodeWindow
            title="arrow.js"
            fontSize={18}
            code={`// Full arrow function:
const greet = (name) => {
  return "Hello, " + name;
};

// Concise 1-line implicit return:
const double = (n) => n * 2;`}
          />
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ─── 06. Parameters vs Arguments ──────────────────────────────────────────────

const ParametersAndArguments: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 1 · Foundations"
      title="Parameters vs. Arguments &amp; Default Values"
      subtitle="Defining placeholder slots vs passing live runtime data"
    />

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, flex: 1, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div
          style={{
            padding: 22,
            borderRadius: 16,
            background: ink.panel,
            border: `1px solid ${ink.border}`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: ink.sky }} />
            <h4 style={{ margin: 0, fontSize: 22, fontWeight: 800 }}>Parameters (At Definition Time)</h4>
          </div>
          <p style={{ margin: 0, fontSize: 16, color: ink.muted, lineHeight: 1.5 }}>
            The labeled variable slots listed inside the parentheses when defining the function.
            Think of them as <strong>empty placeholders</strong> waiting for values.
          </p>
        </div>

        <div
          style={{
            padding: 22,
            borderRadius: 16,
            background: ink.panel,
            border: `1px solid ${ink.border}`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: ink.mint }} />
            <h4 style={{ margin: 0, fontSize: 22, fontWeight: 800 }}>Arguments (At Invocation Time)</h4>
          </div>
          <p style={{ margin: 0, fontSize: 16, color: ink.muted, lineHeight: 1.5 }}>
            The actual concrete data values passed into the function when executing it.
            JavaScript binds arguments sequentially into the parameter slots.
          </p>
        </div>

        <div
          style={{
            padding: 20,
            borderRadius: 16,
            background: ink.amberSoft,
            border: `1px solid ${ink.amber}`,
          }}
        >
          <div style={{ fontWeight: 800, fontSize: 17, color: ink.amber, marginBottom: 4 }}>
            🛡️ Default Parameters: Never Fall into `undefined`
          </div>
          <p style={{ margin: 0, fontSize: 15, color: ink.soft, lineHeight: 1.5 }}>
            Provide fallbacks directly in definition: <code>(role = "Student", score = 0)</code>.
            If the caller omits the argument, the default kicks in automatically!
          </p>
        </div>
      </div>

      <CodeWindow
        title="params-vs-args.js"
        fontSize={20}
        code={`// 1. Defining parameters with default values
function formatUser(name, role = "Student", score = 0) {
  // 'name', 'role', and 'score' are PARAMETERS
  return \`[\${role.toUpperCase()}] \${name} - \${score} pts\`;
}

// 2. Invoking with concrete ARGUMENTS:
// "Sara", "Admin", 98 are ARGUMENTS
const userA = formatUser("Sara", "Admin", 98); 

// 3. Omitting arguments triggers defaults:
const userB = formatUser("Marcus"); 
// Output: "[STUDENT] Marcus - 0 pts"`}
      />
    </div>
    <SlideFooter />
  </div>
);

// ─── 07. Return Values vs Console Log ──────────────────────────────────────────

const ReturnValuesVsConsoleLog: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 1 · Foundations"
      title="Return Values vs. console.log()"
      subtitle="The Value Producer vs. The Debug Mirror"
    />

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, flex: 1, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div
          style={{
            padding: 22,
            borderRadius: 16,
            background: ink.mintSoft,
            border: `2px solid ${ink.mint}`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
            <IconCheck size={26} color={ink.mint} />
            <h4 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: ink.mint }}>
              return: The Value Producer
            </h4>
          </div>
          <p style={{ margin: 0, fontSize: 16, color: ink.soft, lineHeight: 1.5 }}>
            Hands data back to the calling code so it can be stored in a variable, passed to another
            function, or injected into the live DOM tree. <strong>Terminates function execution immediately.</strong>
          </p>
        </div>

        <div
          style={{
            padding: 22,
            borderRadius: 16,
            background: ink.accentSoft,
            border: `2px solid ${ink.accent}`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
            <IconAlert size={26} color={ink.accent} />
            <h4 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: ink.accent }}>
              console.log(): The Debug Mirror
            </h4>
          </div>
          <p style={{ margin: 0, fontSize: 16, color: ink.soft, lineHeight: 1.5 }}>
            Prints a visual string to the developer console for human eyes. It produces <strong>zero data</strong> for your
            program. A function that only logs returns <code>undefined</code>!
          </p>
        </div>

        <div style={{ padding: 16, borderRadius: 12, background: ink.panel, border: `1px solid ${ink.border}` }}>
          <span style={{ fontSize: 15, color: ink.muted }}>
            ⚠️ <strong>Common Beginner Mistake:</strong> Writing <code>const x = add(2, 3);</code> when <code>add</code> only called <code>console.log</code>. <code>x</code> becomes <code>undefined</code>!
          </span>
        </div>
      </div>

      <CodeWindow
        title="return-vs-log.js"
        fontSize={19}
        code={`// ❌ WRONG: Mirror without output
function addBad(a, b) {
  console.log(a + b); // Prints, but returns nothing!
}

const resultBad = addBad(5, 10);
console.log(resultBad); // ⚠️ undefined!

// ✅ RIGHT: Pure computational machine
function addGood(a, b) {
  return a + b; // Hands 15 back to caller
}

const resultGood = addGood(5, 10);
console.log(resultGood); // 15!

// Can now feed into the DOM:
// priceTag.textContent = \`$\${resultGood}\`;`}
      />
    </div>
    <SlideFooter />
  </div>
);

// ─── 08. Part 2 Divider ───────────────────────────────────────────────────────

const Part2Divider: Page = () => (
  <ChapterDivider
    num="02"
    title="The Document Object Model (DOM) Architecture"
    subtitle="The browser's living object graph connecting JavaScript to the screen"
    bullets={[
      'HTML Files on Disk vs Live DOM Objects in RAM',
      'The Document Tree Hierarchy (Parents, Children & Nodes)',
      'The Web Trinity Bridge: JavaScript <-> DOM <-> Paint Engine',
      'Why the DOM is an API provided by the Browser Runtime',
    ]}
    icon={<IconLayers size={32} color={ink.purple} />}
  />
);

// ─── 09. Static HTML on Disk vs Live DOM in RAM ───────────────────────────────

const StaticHtmlVsLiveDom: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 2 · Architecture"
      title="Static HTML on Disk vs. Live DOM in RAM"
      subtitle="JavaScript does NOT edit files on your hard drive"
    />

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, flex: 1, alignItems: 'center' }}>
      <div
        style={{
          background: ink.panel,
          border: `1px solid ${ink.border}`,
          borderRadius: 18,
          padding: 32,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <IconTerminal size={36} color={ink.dim} />
          <h3 style={{ margin: 0, fontSize: 26, fontWeight: 800 }}>1. The HTML File (On Disk)</h3>
        </div>
        <p style={{ fontSize: 18, color: ink.muted, margin: 0, lineHeight: 1.5 }}>
          A static string of text saved in <code>index.html</code>. Once the browser reads it, the file on your
          hard drive is completely disconnected from the user's running session.
        </p>
        <div
          style={{
            background: ink.panelDark,
            padding: 18,
            borderRadius: 12,
            fontFamily: font.mono,
            fontSize: 16,
            color: '#a5d6ff',
          }}
        >
          &lt;h1 id="user"&gt;Guest&lt;/h1&gt;<br />
          &lt;p class="score"&gt;Score: 0&lt;/p&gt;
        </div>
        <div style={{ fontSize: 15, color: ink.dim }}>
          📁 <em>Cold, static, immutable during page lifecycle.</em>
        </div>
      </div>

      <div
        style={{
          background: ink.accentSoft,
          border: `2px solid ${ink.accent}`,
          borderRadius: 18,
          padding: 32,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <IconCpu size={36} color={ink.accent} />
          <h3 style={{ margin: 0, fontSize: 26, fontWeight: 800, color: ink.accent }}>
            2. The DOM Tree (In Browser RAM)
          </h3>
        </div>
        <p style={{ fontSize: 18, color: ink.soft, margin: 0, lineHeight: 1.5 }}>
          The browser parses the HTML text into a live graph of C++/JavaScript objects.
          When you execute JavaScript, you are <strong>mutating live objects in memory</strong>!
        </p>
        <div
          style={{
            background: ink.panelDark,
            padding: 18,
            borderRadius: 12,
            fontFamily: font.mono,
            fontSize: 16,
            color: '#7ee787',
          }}
        >
          // JavaScript modifies the LIVE object:<br />
          document.querySelector("#user").textContent = "Sarah";
        </div>
        <div style={{ fontSize: 15, color: ink.accent, fontWeight: 700 }}>
          ⚡ <em>Live, interactive, repaints pixels instantaneously on screen!</em>
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ─── 10. The DOM Tree Hierarchy (Clean, Connected Architecture) ────────────────

const TheDomTreeHierarchy: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 2 · Architecture"
      title="The DOM Tree Hierarchy: Nodes &amp; Relationships"
      subtitle="From window.document down to individual leaf elements"
    />

    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 36, flex: 1, alignItems: 'center' }}>
      {/* Clean Structured Tree Diagram */}
      <div
        style={{
          background: ink.panel,
          border: `1px solid ${ink.border}`,
          borderRadius: 18,
          padding: 28,
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          boxShadow: shadow.card,
        }}
      >
        {/* Level 1: document */}
        <div
          style={{
            padding: '12px 24px',
            background: ink.purple,
            color: '#fff',
            borderRadius: 10,
            fontWeight: 800,
            fontSize: 17,
            fontFamily: font.mono,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span>document</span>
          <span style={{ fontSize: 12, background: 'rgba(255,255,255,0.2)', padding: '2px 8px', borderRadius: 4 }}>
            Root Gateway Object
          </span>
        </div>

        {/* Level 2: html */}
        <div style={{ marginLeft: 36, borderLeft: `2px solid ${ink.purple}`, paddingLeft: 20 }}>
          <div
            style={{
              padding: '10px 20px',
              background: '#0d1117',
              color: '#fff',
              borderRadius: 8,
              fontWeight: 700,
              fontSize: 16,
              fontFamily: font.mono,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span>&lt;html&gt;</span>
            <span style={{ fontSize: 12, color: '#8b949e' }}>Root Element Node</span>
          </div>

          {/* Level 3: head and body */}
          <div style={{ marginLeft: 28, marginTop: 12, borderLeft: '2px solid #cbd5e1', paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ padding: '8px 16px', background: '#e2e8f0', borderRadius: 6, fontSize: 14, fontFamily: font.mono, color: ink.muted }}>
              &lt;head&gt; (Metadata &amp; Styles)
            </div>

            <div
              style={{
                padding: '10px 18px',
                background: ink.accent,
                color: '#fff',
                borderRadius: 8,
                fontSize: 15,
                fontFamily: font.mono,
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span>&lt;body&gt;</span>
              <span style={{ fontSize: 11, background: 'rgba(255,255,255,0.2)', padding: '2px 6px', borderRadius: 4 }}>
                Visible DOM Branch
              </span>
            </div>

            {/* Level 4: body children */}
            <div style={{ marginLeft: 24, borderLeft: `2px solid ${ink.accent}`, paddingLeft: 16, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginTop: 4 }}>
              <div style={{ padding: '8px 12px', background: ink.skySoft, border: `1px solid ${ink.sky}`, color: ink.sky, borderRadius: 6, fontFamily: font.mono, fontSize: 13, fontWeight: 700 }}>
                &lt;header&gt;
              </div>
              <div style={{ padding: '8px 12px', background: ink.mintSoft, border: `1px solid ${ink.mint}`, color: ink.mint, borderRadius: 6, fontFamily: font.mono, fontSize: 13, fontWeight: 700 }}>
                &lt;main class="cards"&gt;
              </div>
              <div style={{ padding: '8px 12px', background: ink.amberSoft, border: `1px solid ${ink.amber}`, color: ink.amber, borderRadius: 6, fontFamily: font.mono, fontSize: 13, fontWeight: 700 }}>
                &lt;footer&gt;
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={{ padding: 22, borderRadius: 14, background: ink.panel, border: `1px solid ${ink.border}` }}>
          <h4 style={{ margin: '0 0 8px 0', fontSize: 20, fontWeight: 800 }}>Node Relationships</h4>
          <ul style={{ margin: 0, paddingLeft: 20, fontSize: 16, color: ink.soft, lineHeight: 1.6 }}>
            <li><strong>Parent:</strong> The containing element (e.g., <code>&lt;body&gt;</code> is parent of <code>&lt;main&gt;</code>).</li>
            <li><strong>Child:</strong> Contained element (e.g., <code>&lt;h1&gt;</code> inside <code>&lt;header&gt;</code>).</li>
            <li><strong>Siblings:</strong> Elements sharing the exact same parent node.</li>
          </ul>
        </div>

        <div style={{ padding: 22, borderRadius: 14, background: ink.indigoSoft, border: `1px solid ${ink.indigo}` }}>
          <h4 style={{ margin: '0 0 6px 0', fontSize: 20, fontWeight: 800, color: ink.indigo }}>
            The Global <code>document</code> Object
          </h4>
          <p style={{ margin: 0, fontSize: 15, color: ink.soft, lineHeight: 1.5 }}>
            Provided by the browser window. It is your master entry key to inspect, search, and modify
            any node in the live document tree!
          </p>
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ─── 11. The DOM Bridge Metaphor ──────────────────────────────────────────────

const TheDomBridgeMetaphor: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 2 · Architecture"
      title="The Bridge: JavaScript Memory to Screen Pixels"
      subtitle="How a single line of JavaScript causes the screen to repaint"
    />

    <div style={{ display: 'flex', flexDirection: 'column', gap: 28, flex: 1, justifyContent: 'center' }}>
      {/* 3 Step Flow Diagram */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 50px 1fr 50px 1fr', alignItems: 'stretch' }}>
        {/* Step 1 */}
        <div
          style={{
            background: ink.panelDark,
            color: '#fff',
            borderRadius: 18,
            padding: 24,
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <span style={{ fontSize: 13, fontWeight: 800, color: '#79c0ff', textTransform: 'uppercase' }}>
            Stage 1: JavaScript Engine
          </span>
          <div style={{ fontSize: 22, fontWeight: 800 }}>JavaScript Heap Memory</div>
          <div style={{ fontFamily: font.mono, fontSize: 15, color: '#a5d6ff', background: 'rgba(255,255,255,0.05)', padding: 12, borderRadius: 8, marginTop: 'auto' }}>
            const user = &#123;<br />
            &nbsp;&nbsp;name: "Sara Al-Mansoor",<br />
            &nbsp;&nbsp;gpa: 3.92<br />
            &#125;;
          </div>
          <span style={{ fontSize: 14, color: '#8b949e' }}>Raw data stored in computer RAM</span>
        </div>

        {/* Arrow 1 */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, color: ink.accent, fontWeight: 900 }}>
          &rarr;
        </div>

        {/* Step 2 */}
        <div
          style={{
            background: ink.accentSoft,
            borderRadius: 18,
            padding: 24,
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            border: `2px solid ${ink.accent}`,
          }}
        >
          <span style={{ fontSize: 13, fontWeight: 800, color: ink.accent, textTransform: 'uppercase' }}>
            Stage 2: The DOM Bridge API
          </span>
          <div style={{ fontSize: 22, fontWeight: 800, color: ink.text }}>The Live DOM Tree</div>
          <div style={{ fontFamily: font.mono, fontSize: 15, color: ink.soft, background: '#fff', padding: 12, borderRadius: 8, border: `1px solid ${ink.border}`, marginTop: 'auto' }}>
            document.querySelector("#name")<br />
            &nbsp;&nbsp;.textContent = user.name;
          </div>
          <span style={{ fontSize: 14, color: ink.muted }}>Target DOM element node updated</span>
        </div>

        {/* Arrow 2 */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, color: ink.accent, fontWeight: 900 }}>
          &rarr;
        </div>

        {/* Step 3 */}
        <div
          style={{
            background: ink.panel,
            borderRadius: 18,
            padding: 24,
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            border: `1px solid ${ink.border}`,
          }}
        >
          <span style={{ fontSize: 13, fontWeight: 800, color: ink.mint, textTransform: 'uppercase' }}>
            Stage 3: Browser Paint
          </span>
          <div style={{ fontSize: 22, fontWeight: 800, color: ink.text }}>Screen Pixels</div>
          <div style={{ background: '#fff', padding: 12, borderRadius: 8, border: '1px solid #cbd5e1', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', marginTop: 'auto' }}>
            <h4 style={{ margin: 0, fontSize: 17, color: '#0f172a' }}>Sara Al-Mansoor</h4>
            <span style={{ fontSize: 13, color: '#16a34a', fontWeight: 700 }}>GPA: 3.92 (Honors)</span>
          </div>
          <span style={{ fontSize: 14, color: ink.muted }}>Render tree repaints screen</span>
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ─── 12. Part 3 Divider ───────────────────────────────────────────────────────

const Part3Divider: Page = () => (
  <ChapterDivider
    num="03"
    title="DOM Querying: Finding Nodes with Precision"
    subtitle="Leverage your CSS selector mastery to pinpoint any element in the document"
    bullets={[
      'document.querySelector(): Single Element Targeting',
      'document.querySelectorAll(): Working with NodeLists',
      'Scoped Container Queries (element.querySelector)',
      'Defensive Selection: Surviving the Null Selector Trap',
    ]}
    icon={<IconSearch size={32} color={ink.sky} />}
  />
);

// ─── 13. querySelector Mastery ────────────────────────────────────────────────

const QuerySelectorMastery: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 3 · Selection"
      title="document.querySelector(): The Universal Selector"
      subtitle="Use the exact same selector syntax you already mastered in CSS"
    />

    <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 36, flex: 1, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <p style={{ fontSize: 22, color: ink.muted, margin: 0, lineHeight: 1.5 }}>
          <code>document.querySelector(selector)</code> accepts <strong>any valid CSS selector string</strong>.
          It scans the DOM from top to bottom and returns the <strong>first matching element</strong> (or <code>null</code> if no match exists).
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          {[
            { type: 'By Tag Name', code: 'document.querySelector("h1")', desc: 'Matches first <h1> on page' },
            { type: 'By Class Name', code: 'document.querySelector(".badge")', desc: 'Matches first element with class "badge"' },
            { type: 'By ID Attribute', code: 'document.querySelector("#profile")', desc: 'Matches unique element with id="profile"' },
            { type: 'By Combinator', code: 'document.querySelector(".card .price")', desc: 'Matches nested descendant .price in .card' },
          ].map((item, idx) => (
            <div key={idx} style={{ padding: 14, background: ink.panel, border: `1px solid ${ink.border}`, borderRadius: 12 }}>
              <div style={{ fontWeight: 800, fontSize: 16, color: ink.accent }}>{item.type}</div>
              <div style={{ fontFamily: font.mono, fontSize: 14, color: ink.text, margin: '4px 0', fontWeight: 600 }}>{item.code}</div>
              <div style={{ fontSize: 13, color: ink.muted }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <CodeWindow
        title="query-demo.js"
        fontSize={19}
        code={`// 1. Select the header title
const mainTitle = document.querySelector("#main-title");

// 2. Select by class tag
const primaryBadge = document.querySelector(".badge-primary");

// 3. Select with complex CSS attribute selector
const emailInput = document.querySelector('input[type="email"]');

// 4. Select direct child combinator
const firstItem = document.querySelector("ul.nav-list > li:first-child");

console.log(mainTitle); // Prints DOM Element node`}
      />
    </div>
    <SlideFooter />
  </div>
);

// ─── 14. querySelectorAll and NodeLists ────────────────────────────────────────

const QuerySelectorAllAndNodeLists: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 3 · Selection"
      title="document.querySelectorAll() &amp; NodeLists"
      subtitle="Gathering multiple elements and iterating cleanly with for...of"
    />

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, flex: 1, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <p style={{ fontSize: 22, color: ink.muted, margin: 0, lineHeight: 1.5 }}>
          When multiple elements share a class or tag (e.g. 10 product cards or 5 navigation links),
          use <code>querySelectorAll()</code>. It returns a static <strong>NodeList</strong>.
        </p>

        <div style={{ padding: 20, borderRadius: 14, background: ink.panel, border: `1px solid ${ink.border}` }}>
          <h4 style={{ margin: '0 0 6px 0', fontSize: 20, fontWeight: 800 }}>NodeList vs. Real Array</h4>
          <p style={{ margin: 0, fontSize: 16, color: ink.muted, lineHeight: 1.5 }}>
            A NodeList looks like an array (has <code>.length</code> and indexed access like <code>items[0]</code>),
            but it lacks array mutation methods like <code>.push()</code> or <code>.pop()</code>.
          </p>
        </div>

        <div style={{ padding: 18, borderRadius: 14, background: ink.mintSoft, border: `1px solid ${ink.mint}` }}>
          <div style={{ fontWeight: 800, fontSize: 17, color: ink.mint, marginBottom: 4 }}>
            ✅ Best Practice: Iterate with `for...of`
          </div>
          <div style={{ fontSize: 15, color: ink.soft }}>
            The cleanest, most readable way to update every item in a NodeList is modern <code>for...of</code> loop iteration.
          </div>
        </div>
      </div>

      <CodeWindow
        title="node-list.js"
        fontSize={19}
        code={`// 1. Select all product price tags on the page:
const priceElements = document.querySelectorAll(".product-price");

console.log(priceElements.length); // e.g. 8 cards

// 2. Iterate and update each node:
for (const priceEl of priceElements) {
  // Read current text, apply tax or discount:
  console.log(priceEl.textContent);
  priceEl.classList.add("price-active");
}

// 3. Convert to true array if needed:
const priceArray = Array.from(priceElements);`}
      />
    </div>
    <SlideFooter />
  </div>
);

// ─── 15. Scoped Queries ───────────────────────────────────────────────────────

const ScopedQueries: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 3 · Selection"
      title="Scoped Queries: element.querySelector()"
      subtitle="Restricting element searches to a specific container component"
    />

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, flex: 1, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <p style={{ fontSize: 22, color: ink.muted, margin: 0, lineHeight: 1.5 }}>
          You don't always search from the top-level <code>document</code>! Any DOM element can call
          <code>querySelector()</code> to search <strong>only within its own children</strong>.
        </p>

        <div style={{ padding: 22, borderRadius: 14, background: ink.panel, border: `1px solid ${ink.border}` }}>
          <h4 style={{ margin: '0 0 8px 0', fontSize: 20, fontWeight: 800 }}>Why Scoped Queries Matter:</h4>
          <ul style={{ margin: 0, paddingLeft: 20, fontSize: 16, color: ink.soft, lineHeight: 1.6 }}>
            <li>Prevents selecting elements with the same class in other cards.</li>
            <li>Enables reusable component functions (e.g. <code>renderCard(cardEl, data)</code>).</li>
            <li>Faster search performance since it only checks a small subtree.</li>
          </ul>
        </div>
      </div>

      <CodeWindow
        title="scoped-query.js"
        fontSize={19}
        code={`// 1. Select the specific hero product card:
const heroCard = document.querySelector("#hero-card");

// 2. Select sub-elements INSIDE heroCard only:
// Searches ONLY within #hero-card descendants!
const heroTitle = heroCard.querySelector(".card-title");
const heroPrice = heroCard.querySelector(".card-price");

heroTitle.textContent = "Noise Canceling Headphones";
heroPrice.textContent = "$199.99";

// Other cards with .card-title remain untouched!`}
      />
    </div>
    <SlideFooter />
  </div>
);

// ─── 16. Defensive Querying Null Trap ──────────────────────────────────────────

const DefensiveQueryingNullTrap: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 3 · Selection"
      title="Defensive Selection: The null Trap"
      subtitle="Surviving typos and dynamic missing nodes with guard clauses"
    />

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, flex: 1, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div
          style={{
            padding: 22,
            borderRadius: 16,
            background: ink.accentSoft,
            border: `2px solid ${ink.accent}`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <IconAlert size={26} color={ink.accent} />
            <h4 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: ink.accent }}>
              The #1 Browser Runtime Crash
            </h4>
          </div>
          <p style={{ margin: 0, fontSize: 16, color: ink.soft, lineHeight: 1.5 }}>
            If a selector doesn't match anything in the HTML, <code>querySelector()</code> returns <code>null</code>.
            Attempting to read or write properties on <code>null</code> throws an immediate fatal crash:
          </p>
          <div
            style={{
              marginTop: 10,
              fontFamily: font.mono,
              fontSize: 15,
              background: '#0d1117',
              color: '#ff7b72',
              padding: 10,
              borderRadius: 8,
            }}
          >
            TypeError: Cannot set properties of null (setting 'textContent')
          </div>
        </div>

        <div style={{ padding: 18, borderRadius: 14, background: ink.mintSoft, border: `1px solid ${ink.mint}` }}>
          <div style={{ fontWeight: 800, fontSize: 17, color: ink.mint, marginBottom: 4 }}>
            🛡️ The Guard Clause Defense
          </div>
          <div style={{ fontSize: 15, color: ink.soft }}>
            Always check <code>if (!element) return;</code> or verify existence before accessing properties!
          </div>
        </div>
      </div>

      <CodeWindow
        title="defensive-checks.js"
        fontSize={19}
        code={`// ❌ FATAL CRASH if typo or missing in HTML:
const btn = document.querySelector("#submit-btun"); // typo!
// btn is null!
btn.textContent = "Submit"; // 💥 CRASH!

// ✅ DEFENSIVE DEFENSE:
const submitBtn = document.querySelector("#submit-btn");

if (!submitBtn) {
  console.warn("Warning: #submit-btn not found in DOM");
} else {
  submitBtn.textContent = "Submit Order";
}`}
      />
    </div>
    <SlideFooter />
  </div>
);

// ─── 17. Part 4 Divider ───────────────────────────────────────────────────────

const Part4Divider: Page = () => (
  <ChapterDivider
    num="04"
    title="Dynamic Updates: Mutating the Live Page"
    subtitle="Safely update text, swap CSS classes, and manipulate attributes"
    bullets={[
      'Safe Plain Text: textContent vs innerText',
      'The Security Danger: Why innerHTML is an Anti-Pattern (XSS)',
      'Dynamic CSS Styling: classList add, remove, and toggle',
      'Attribute Reflection: setAttribute vs Direct Element Properties',
    ]}
    icon={<IconCode size={32} color={ink.mint} />}
  />
);

// ─── 18. Safe Text Updates ────────────────────────────────────────────────────

const SafeTextUpdates: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 4 · Mutation"
      title="Safe Text Updates: textContent vs. innerText"
      subtitle="Writing strings safely into element nodes"
    />

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, flex: 1, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={{ padding: 22, borderRadius: 16, background: ink.mintSoft, border: `2px solid ${ink.mint}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
            <IconCheck size={26} color={ink.mint} />
            <h4 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: ink.mint }}>
              element.textContent (The Gold Standard)
            </h4>
          </div>
          <p style={{ margin: 0, fontSize: 16, color: ink.soft, lineHeight: 1.5 }}>
            Retrieves or updates the raw text inside an element node and all its descendants.
            Extremely fast, ignores CSS formatting rules, and <strong>treats all input strictly as plain text</strong>.
          </p>
        </div>

        <div style={{ padding: 22, borderRadius: 16, background: ink.panel, border: `1px solid ${ink.border}` }}>
          <h4 style={{ margin: '0 0 6px 0', fontSize: 20, fontWeight: 800 }}>element.innerText (Layout Aware)</h4>
          <p style={{ margin: 0, fontSize: 16, color: ink.muted, lineHeight: 1.5 }}>
            Respects CSS styling (e.g. ignores text inside <code>display: none</code>).
            Because it forces the browser to calculate layout and reflow, it is significantly slower than <code>textContent</code>.
          </p>
        </div>

        <div style={{ fontSize: 16, color: ink.soft }}>
          💡 <strong>Production Rule:</strong> Default to <code>textContent</code> for 99% of text operations.
        </div>
      </div>

      <CodeWindow
        title="text-updates.js"
        fontSize={19}
        code={`const heading = document.querySelector("#card-title");
const priceTag = document.querySelector(".price-amount");

// Updating text directly:
heading.textContent = "Wireless Mechanical Keyboard";

// Template literals for formatted numbers:
const price = 129.99;
priceTag.textContent = \`$\${price.toFixed(2)}\`;

// Safe against injection:
heading.textContent = "<strong>Notice</strong>";
// Renders literally as the string "<strong>Notice</strong>",
// NOT bold text!`}
      />
    </div>
    <SlideFooter />
  </div>
);

// ─── 19. The innerHTML Minefield ──────────────────────────────────────────────

const TheInnerHTMLMinefield: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 4 · Security &amp; Best Practices"
      title="The innerHTML Trap: Security &amp; Performance"
      subtitle="Why inserting raw HTML strings introduces Cross-Site Scripting (XSS) risks"
    />

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, flex: 1, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={{ padding: 22, borderRadius: 16, background: ink.accentSoft, border: `2px solid ${ink.accent}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
            <IconAlert size={26} color={ink.accent} />
            <h4 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: ink.accent }}>
              Cross-Site Scripting (XSS) Vulnerability
            </h4>
          </div>
          <p style={{ margin: 0, fontSize: 16, color: ink.soft, lineHeight: 1.5 }}>
            When you assign user-provided data directly to <code>innerHTML</code>, an attacker can inject malicious
            scripts that execute inside your user's browser, stealing session tokens and cookies!
          </p>
        </div>

        <div style={{ padding: 20, borderRadius: 14, background: ink.panel, border: `1px solid ${ink.border}` }}>
          <h4 style={{ margin: '0 0 6px 0', fontSize: 19, fontWeight: 800 }}>The Performance Penalty</h4>
          <p style={{ margin: 0, fontSize: 15, color: ink.muted, lineHeight: 1.5 }}>
            <code>element.innerHTML = ...</code> destroys every existing child node, parses the string from scratch,
            rebuilds the DOM subtree, and destroys all attached event listeners!
          </p>
        </div>
      </div>

      <CodeWindow
        title="xss-demo.js"
        fontSize={19}
        code={`// Suppose user input comes from an API or search box:
const userInput = '<img src="x" onerror="alert(document.cookie)">';

// ❌ DANGEROUS: Executes attacker script!
profileBio.innerHTML = userInput;

// ✅ 100% SAFE: Injects as harmless literal string!
profileBio.textContent = userInput;
// Browser displays the text: '<img src="x"...>'
// Zero script execution!`}
      />
    </div>
    <SlideFooter />
  </div>
);

// ─── 20. ClassList Manipulation ───────────────────────────────────────────────

const ClassListManipulation: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 4 · Dynamic Styling"
      title="Dynamic Styling with element.classList"
      subtitle="Add, remove, and toggle styling states cleanly via CSS classes"
    />

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, flex: 1, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <p style={{ fontSize: 22, color: ink.muted, margin: 0, lineHeight: 1.5 }}>
          Instead of hardcoding colors and borders directly in JavaScript, <strong>let CSS handle visual styles</strong>!
          Use <code>element.classList</code> to turn states on and off.
        </p>

        {[
          { fn: 'classList.add("active")', desc: 'Adds class if not already present.' },
          { fn: 'classList.remove("hidden")', desc: 'Removes class if present.' },
          { fn: 'classList.toggle("dark-mode")', desc: 'Flips state: removes if present, adds if missing!' },
          { fn: 'classList.toggle("sale", isSale)', desc: 'Forced toggle: adds if 2nd arg is truthy, removes if falsy.' },
        ].map((item, idx) => (
          <div key={idx} style={{ padding: '12px 16px', background: ink.panel, border: `1px solid ${ink.border}`, borderRadius: 12 }}>
            <div style={{ fontFamily: font.mono, fontWeight: 700, fontSize: 16, color: ink.accent }}>{item.fn}</div>
            <div style={{ fontSize: 14, color: ink.muted, marginTop: 3 }}>{item.desc}</div>
          </div>
        ))}
      </div>

      <CodeWindow
        title="classlist-demo.js"
        fontSize={19}
        code={`const card = document.querySelector(".product-card");
const badge = card.querySelector(".stock-badge");

// 1. Add discount highlight:
card.classList.add("card-featured");

// 2. Remove pending placeholder:
badge.classList.remove("badge-pending");

// 3. Forced toggle based on stock count:
const inStock = stockCount > 0;
badge.classList.toggle("badge-available", inStock);
badge.classList.toggle("badge-soldout", !inStock);`}
      />
    </div>
    <SlideFooter />
  </div>
);

// ─── 21. State Checking and Themes ────────────────────────────────────────────

const StateCheckingAndThemes: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 4 · Dynamic Styling"
      title="Querying State with classList.contains()"
      subtitle="Branching logic based on whether an element currently has a class"
    />

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, flex: 1, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <p style={{ fontSize: 22, color: ink.muted, margin: 0, lineHeight: 1.5 }}>
          <code>element.classList.contains("active")</code> returns a <strong>boolean (true or false)</strong>.
          It allows your code to make conditional decisions based on live UI state.
        </p>

        <div style={{ padding: 22, borderRadius: 14, background: ink.panel, border: `1px solid ${ink.border}` }}>
          <h4 style={{ margin: '0 0 8px 0', fontSize: 20, fontWeight: 800 }}>The Theme Switcher Pattern</h4>
          <p style={{ margin: 0, fontSize: 16, color: ink.muted, lineHeight: 1.5 }}>
            Check if the body has class <code>dark-theme</code>. If yes, update button text to "Switch to Light";
            if no, update button text to "Switch to Dark".
          </p>
        </div>
      </div>

      <CodeWindow
        title="state-check.js"
        fontSize={19}
        code={`const body = document.body;
const themeBtn = document.querySelector("#theme-toggle");

function updateThemeButton() {
  const isDark = body.classList.contains("dark-mode");

  if (isDark) {
    themeBtn.textContent = "☀️ Switch to Light Mode";
  } else {
    themeBtn.textContent = "🌙 Switch to Dark Mode";
  }
}

// Toggle and refresh button label:
body.classList.toggle("dark-mode");
updateThemeButton();`}
      />
    </div>
    <SlideFooter />
  </div>
);

// ─── 22. Attribute Manipulation ───────────────────────────────────────────────

const AttributeManipulation: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 4 · Mutation"
      title="Attribute Binding: setAttribute vs. Properties"
      subtitle="Controlling image sources, hyperlink destinations, and form button states"
    />

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, flex: 1, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <p style={{ fontSize: 22, color: ink.muted, margin: 0, lineHeight: 1.5 }}>
          HTML elements have attributes like <code>src</code>, <code>href</code>, <code>alt</code>, and <code>disabled</code>.
          JavaScript can read and update them in two equivalent ways:
        </p>

        <div style={{ padding: 16, background: ink.panel, border: `1px solid ${ink.border}`, borderRadius: 12 }}>
          <div style={{ fontWeight: 800, fontSize: 17, color: ink.sky }}>Method 1: Direct Property Access</div>
          <div style={{ fontFamily: font.mono, fontSize: 15, margin: '4px 0', color: ink.text }}>
            imgEl.src = "avatar.png";<br />btn.disabled = true;
          </div>
          <div style={{ fontSize: 13, color: ink.muted }}>Fast and convenient for standard properties.</div>
        </div>

        <div style={{ padding: 16, background: ink.panel, border: `1px solid ${ink.border}`, borderRadius: 12 }}>
          <div style={{ fontWeight: 800, fontSize: 17, color: ink.purple }}>Method 2: Generic Attribute Methods</div>
          <div style={{ fontFamily: font.mono, fontSize: 15, margin: '4px 0', color: ink.text }}>
            el.setAttribute("data-id", "101");<br />el.getAttribute("data-id");
          </div>
          <div style={{ fontSize: 13, color: ink.muted }}>Required for custom `data-*` attributes and ARIA roles.</div>
        </div>
      </div>

      <CodeWindow
        title="attributes.js"
        fontSize={19}
        code={`const productImg = document.querySelector("#product-img");
const buyButton = document.querySelector("#buy-now-btn");
const detailLink = document.querySelector("#more-info-link");

// 1. Update image source and alt text:
productImg.src = "./assets/headphones-black.png";
productImg.alt = "Studio Monitor Headphones in Matte Black";

// 2. Disable button when inventory is zero:
buyButton.disabled = true;
buyButton.textContent = "Sold Out";

// 3. Update hyperlink destination:
detailLink.href = "/product/101-specs.html";`}
      />
    </div>
    <SlideFooter />
  </div>
);

// ─── 23. Inline Styles vs Classes ─────────────────────────────────────────────

const InlineStylesVsClasses: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 4 · Best Practices"
      title="Architectural Rule: CSS Classes Win Over Inline Styles"
      subtitle="Preserving separation of concerns in professional web applications"
    />

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, flex: 1, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={{ padding: 22, borderRadius: 16, background: ink.accentSoft, border: `2px solid ${ink.accent}` }}>
          <h4 style={{ margin: '0 0 6px 0', fontSize: 21, fontWeight: 800, color: ink.accent }}>
            ❌ Avoid: Hardcoding Inline Styles in JS
          </h4>
          <p style={{ margin: 0, fontSize: 16, color: ink.soft, lineHeight: 1.5 }}>
            Writing <code>el.style.backgroundColor = "red"</code> directly writes inline HTML styles.
            It pollutes markup, breaks media queries, and creates unbreakable specificity nightmares!
          </p>
        </div>

        <div style={{ padding: 22, borderRadius: 16, background: ink.mintSoft, border: `2px solid ${ink.mint}` }}>
          <h4 style={{ margin: '0 0 6px 0', fontSize: 21, fontWeight: 800, color: ink.mint }}>
            ✅ Recommended: Toggle Pre-Authored CSS Classes
          </h4>
          <p style={{ margin: 0, fontSize: 16, color: ink.soft, lineHeight: 1.5 }}>
            Define styling in your CSS stylesheet: <code>.is-error &#123; color: red; &#125;</code>.
            In JavaScript, simply write: <code>el.classList.add("is-error")</code>.
          </p>
        </div>
      </div>

      <CodeWindow
        title="architecture-rule.js"
        fontSize={19}
        code={`// ❌ ANTI-PATTERN: Direct inline CSS hacks
card.style.border = "2px solid red";
card.style.backgroundColor = "#fee2e2";
card.style.transform = "scale(1.05)";

// ✅ PROFESSIONAL PATTERN:
// CSS defines the aesthetic:
// .card-error {
//   border: 2px solid var(--accent);
//   background: var(--accent-soft);
//   transform: scale(1.05);
// }

// JS simply toggles the class:
card.classList.add("card-error");`}
      />
    </div>
    <SlideFooter />
  </div>
);

// ─── 24. Part 5 Divider ───────────────────────────────────────────────────────

const Part5Divider: Page = () => (
  <ChapterDivider
    num="05"
    title="Data-to-DOM: Functional Component Rendering"
    subtitle="Connecting pure calculation functions to automated UI generation"
    bullets={[
      'The Rendering Pipeline: Data Object -> Pure Functions -> DOM',
      'Building Single Entity Component Renderers',
      'Traversing and Populating Arrays of Objects',
      'Clean Element Construction with document.createElement()',
    ]}
    icon={<IconTerminal size={32} color={ink.amber} />}
  />
);

// ─── 25. The Rendering Pipeline ───────────────────────────────────────────────

const TheRenderingPipeline: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 5 · Functional Rendering"
      title="The Rendering Pipeline: Data to DOM"
      subtitle="How modern web applications convert data structures into view pixels"
    />

    <div style={{ display: 'flex', flexDirection: 'column', gap: 28, flex: 1, justifyContent: 'center' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
        {[
          {
            step: 'Step 1',
            title: 'Raw Data Entity',
            code: '{ id: 101, title: "Phone", price: 300, isSale: true }',
            desc: 'Stored in JavaScript memory / Heap.',
            color: ink.sky,
          },
          {
            step: 'Step 2',
            title: 'Pure Helpers',
            code: 'formatCurrency(price)\ngetDiscountLabel(isSale)',
            desc: 'Calculates formatting & derived states.',
            color: ink.purple,
          },
          {
            step: 'Step 3',
            title: 'DOM Query / Node Creation',
            code: 'const card = document.querySelector("#card")\n// or createElement',
            desc: 'Selects or builds the target element nodes.',
            color: ink.amber,
          },
          {
            step: 'Step 4',
            title: 'Safe Property Injection',
            code: 'titleEl.textContent = title;\ncard.classList.toggle("sale");',
            desc: 'Injects data safely into the live tree.',
            color: ink.mint,
          },
        ].map((card, idx) => (
          <div
            key={idx}
            style={{
              background: ink.panel,
              border: `1px solid ${ink.border}`,
              borderRadius: 16,
              padding: 22,
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 13, fontWeight: 800, color: card.color, textTransform: 'uppercase' }}>
                {card.step}
              </span>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: card.color }} />
            </div>
            <h3 style={{ margin: 0, fontSize: 20, fontWeight: 800 }}>{card.title}</h3>
            <div
              style={{
                fontFamily: font.mono,
                fontSize: 13,
                background: ink.panelDark,
                color: '#e6edf3',
                padding: 10,
                borderRadius: 8,
                whiteSpace: 'pre-wrap',
                lineHeight: 1.4,
              }}
            >
              {card.code}
            </div>
            <span style={{ fontSize: 14, color: ink.muted }}>{card.desc}</span>
          </div>
        ))}
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ─── 26. Component Generator Function ─────────────────────────────────────────

const ComponentGeneratorFunction: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 5 · Functional Rendering"
      title="Building an Entity Card Generator"
      subtitle="Encapsulating DOM selection and updates inside a reusable function"
    />

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, flex: 1, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <p style={{ fontSize: 22, color: ink.muted, margin: 0, lineHeight: 1.5 }}>
          Instead of scattering query selectors throughout your script, write a <strong>dedicated renderer function</strong>
          that takes an entity object and updates the DOM cleanly.
        </p>

        <div style={{ padding: 22, borderRadius: 14, background: ink.panel, border: `1px solid ${ink.border}` }}>
          <h4 style={{ margin: '0 0 8px 0', fontSize: 20, fontWeight: 800 }}>Benefits of the Renderer Function:</h4>
          <ul style={{ margin: 0, paddingLeft: 20, fontSize: 16, color: ink.soft, lineHeight: 1.6 }}>
            <li>Single source of truth for UI mapping.</li>
            <li>Can be called anytime data changes in memory.</li>
            <li>Easy to test with mock data objects.</li>
          </ul>
        </div>
      </div>

      <CodeWindow
        title="renderProductCard.js"
        fontSize={18}
        code={`function renderProductCard(cardEl, product) {
  if (!cardEl || !product) return; // Defensive guard

  // 1. Internal queries scoped to this card:
  const titleEl = cardEl.querySelector(".prod-title");
  const priceEl = cardEl.querySelector(".prod-price");
  const badgeEl = cardEl.querySelector(".prod-badge");

  // 2. Safe text content updates:
  if (titleEl) titleEl.textContent = product.title;
  if (priceEl) priceEl.textContent = \`$\${product.price.toFixed(2)}\`;

  // 3. Class state toggling:
  cardEl.classList.toggle("is-sale", Boolean(product.discount));
  if (badgeEl) {
    badgeEl.textContent = product.discount ? "SALE" : "REGULAR";
  }
}`}
      />
    </div>
    <SlideFooter />
  </div>
);

// ─── 27. Collection Rendering ─────────────────────────────────────────────────

const CollectionRendering: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 5 · Functional Rendering"
      title="Rendering Collections: Arrays to DOM Grids"
      subtitle="Iterating arrays of objects to populate dynamic catalogs and tables"
    />

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, flex: 1, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <p style={{ fontSize: 22, color: ink.muted, margin: 0, lineHeight: 1.5 }}>
          When rendering lists of records (e.g. students or catalog items), use
          <code>document.createElement()</code> and append rows sequentially in a <code>for...of</code> loop.
        </p>

        <div style={{ padding: 22, borderRadius: 14, background: ink.panel, border: `1px solid ${ink.border}` }}>
          <h4 style={{ margin: '0 0 8px 0', fontSize: 20, fontWeight: 800 }}>Clean Dynamic Elements</h4>
          <ol style={{ margin: 0, paddingLeft: 20, fontSize: 16, color: ink.soft, lineHeight: 1.6 }}>
            <li>Create node: <code>const card = document.createElement("article");</code></li>
            <li>Populate text: <code>title.textContent = item.title;</code></li>
            <li>Append to parent: <code>containerEl.appendChild(card);</code></li>
          </ol>
        </div>
      </div>

      <CodeWindow
        title="renderCatalog.js"
        fontSize={18}
        code={`function renderCatalog(containerEl, items) {
  // Clear stale contents safely:
  containerEl.textContent = "";

  for (const item of items) {
    const card = document.createElement("article");
    card.className = "product-card";

    const title = document.createElement("h3");
    title.textContent = item.title;

    const price = document.createElement("span");
    price.textContent = \`$\${item.price.toFixed(2)}\`;

    card.appendChild(title);
    card.appendChild(price);
    containerEl.appendChild(card);
  }
}`}
      />
    </div>
    <SlideFooter />
  </div>
);

// ─── 28. Part 6 Divider ───────────────────────────────────────────────────────

const Part6Divider: Page = () => (
  <ChapterDivider
    num="06"
    title="In-Class Guided Lab Walkthrough"
    subtitle="Hands-on build: Dynamic Student Profile & Honors Badge System"
    bullets={[
      'Lab Architecture: profile.html structure & profile.js contract',
      'Step-by-Step Code Surgery: Selection, Calculation & Injection',
      'Socratic AI Prompt Drill: textContent vs innerHTML Analysis',
      'Live Browser Verification with DevTools Inspector',
    ]}
    icon={<IconSparkles size={32} color={ink.indigo} />}
  />
);

// ─── 29. Lab Architecture ─────────────────────────────────────────────────────

const LabArchitecture: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 6 · Guided Lab"
      title="Lab Architecture: Dynamic Student Profile Card"
      subtitle="Connecting memory records to an accessible card layout"
    />

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, flex: 1, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ padding: 22, borderRadius: 14, background: ink.panel, border: `1px solid ${ink.border}` }}>
          <h4 style={{ margin: '0 0 8px 0', fontSize: 20, fontWeight: 800 }}>The HTML Skeleton (`profile.html`)</h4>
          <p style={{ margin: 0, fontSize: 16, color: ink.muted, lineHeight: 1.5 }}>
            A semantic card with IDs ready for JavaScript binding: <code>#profile-name</code>,
            <code>#profile-major</code>, <code>#profile-gpa</code>, and <code>#status-badge</code>.
          </p>
        </div>

        <div style={{ padding: 22, borderRadius: 14, background: ink.mintSoft, border: `1px solid ${ink.mint}` }}>
          <h4 style={{ margin: '0 0 8px 0', fontSize: 20, fontWeight: 800, color: ink.mint }}>
            The Data Entity (`profile.js`)
          </h4>
          <p style={{ margin: 0, fontSize: 16, color: ink.soft, lineHeight: 1.5 }}>
            A student object containing <code>fullName</code>, <code>major</code>, <code>gpa</code>, and <code>isHonors</code>.
          </p>
        </div>
      </div>

      <CodeWindow
        title="profile.html"
        fontSize={20}
        code={`<main>
  <article class="profile-card">
    <h2 id="profile-name">Student Name</h2>
    <p id="profile-major">Major</p>
    <p id="profile-gpa">GPA: 0.0</p>
    <div id="status-badge" class="badge badge-pending">
      Pending
    </div>
  </article>
</main>`}
      />
    </div>
    <SlideFooter />
  </div>
);

// ─── 30. Lab Build Walkthrough (Fixed Height & Tighter Typography) ─────────────

const LabBuildWalkthrough: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 6 · Guided Lab"
      title="Step-by-Step Build: profile.js"
      subtitle="Selecting elements, formatting data, and applying badge states"
    />

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, flex: 1, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ padding: 16, background: ink.panel, borderRadius: 12, border: `1px solid ${ink.border}` }}>
          <div style={{ fontWeight: 800, fontSize: 17, color: ink.sky }}>Step 1: Select Target Nodes</div>
          <div style={{ fontSize: 14, color: ink.muted, marginTop: 4 }}>
            Query each element ID: <code>#profile-name</code>, <code>#profile-major</code>, <code>#profile-gpa</code>, <code>#status-badge</code>.
          </div>
        </div>

        <div style={{ padding: 16, background: ink.panel, borderRadius: 12, border: `1px solid ${ink.border}` }}>
          <div style={{ fontWeight: 800, fontSize: 17, color: ink.purple }}>Step 2: Inject Safe Text Content</div>
          <div style={{ fontSize: 14, color: ink.muted, marginTop: 4 }}>
            Assign <code>textContent</code> from the <code>studentData</code> object using template strings.
          </div>
        </div>

        <div style={{ padding: 16, background: ink.panel, borderRadius: 12, border: `1px solid ${ink.border}` }}>
          <div style={{ fontWeight: 800, fontSize: 17, color: ink.mint }}>Step 3: Toggle Honors Badge Classes</div>
          <div style={{ fontSize: 14, color: ink.muted, marginTop: 4 }}>
            If <code>studentData.isHonors</code> is true, swap <code>badge-pending</code> for <code>badge-honors</code>!
          </div>
        </div>
      </div>

      <CodeWindow
        title="profile.js"
        fontSize={17}
        code={`const studentData = {
  fullName: "Sara Al-Mansoor",
  major: "Software Engineering",
  gpa: 3.85,
  isHonors: true
};

// 1. Select the DOM elements
const nameEl = document.querySelector("#profile-name");
const majorEl = document.querySelector("#profile-major");
const gpaEl = document.querySelector("#profile-gpa");
const badgeEl = document.querySelector("#status-badge");

// 2. Inject text safely
if (nameEl) nameEl.textContent = studentData.fullName;
if (majorEl) majorEl.textContent = studentData.major;
if (gpaEl) gpaEl.textContent = \`GPA: \${studentData.gpa}\`;

// 3. Dynamic styling based on boolean state
if (badgeEl && studentData.isHonors) {
  badgeEl.textContent = "Honors Student";
  badgeEl.classList.remove("badge-pending");
  badgeEl.classList.add("badge-honors");
}`}
      />
    </div>
    <SlideFooter />
  </div>
);

// ─── 31. Socratic AI Challenge ────────────────────────────────────────────────

const SocraticAiChallenge: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 6 · Socratic AI Drill"
      title="Socratic AI Challenge: textContent vs. innerHTML"
      subtitle="Train your AI tutor to grill you on web security fundamentals"
    />

    <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 36, flex: 1, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <p style={{ fontSize: 24, color: ink.muted, margin: 0, lineHeight: 1.5 }}>
          Open your AI assistant (Claude / ChatGPT) and prompt it with this exact prompt.
          Do NOT accept a simple answer — ask it to evaluate your own explanation!
        </p>

        <div
          style={{
            background: ink.panelDark,
            padding: 26,
            borderRadius: 16,
            border: `1px solid ${ink.accent}`,
            color: '#e6edf3',
            fontFamily: font.mono,
            fontSize: 19,
            lineHeight: 1.6,
          }}
        >
          <span style={{ color: '#ff7b72', fontWeight: 800 }}>&gt; Prompt your AI Tutor:</span><br /><br />
          "Why should web developers use <code>textContent</code> instead of <code>innerHTML</code> when updating user text on a webpage? Give me one critical security reason (XSS) and one performance reason, then give me a quiz question."
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ padding: 22, borderRadius: 14, background: ink.panel, border: `1px solid ${ink.border}` }}>
          <h4 style={{ margin: '0 0 6px 0', fontSize: 20, fontWeight: 800 }}>What to look for in AI's response:</h4>
          <ul style={{ margin: 0, paddingLeft: 20, fontSize: 16, color: ink.soft, lineHeight: 1.6 }}>
            <li>Does it mention script execution vectors via <code>&lt;img onerror&gt;</code>?</li>
            <li>Does it explain HTML parser overhead?</li>
            <li>Can you answer the follow-up quiz question without checking notes?</li>
          </ul>
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ─── 32. Part 7 Divider ───────────────────────────────────────────────────────

const Part7Divider: Page = () => (
  <ChapterDivider
    num="07"
    title="Homework Assignments &amp; Milestone Bridge"
    subtitle="Two production deliverables to cement your mastery before Event-Driven programming"
    bullets={[
      'Homework 1: The Dynamic E-Commerce Product Catalog',
      'Homework 2: Student Gradebook & Honors Dashboard',
      'Companion Starter Files & Rubrics in homework/session-7/',
      'Bridge to Session 08: addEventListener & UI State',
    ]}
    icon={<IconCheck size={32} color={ink.mint} />}
  />
);

// ─── 33. Homework 1 Showcase ──────────────────────────────────────────────────

const Homework1Showcase: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Homework Assignment 01"
      title="Homework 1: Dynamic E-Commerce Catalog"
      subtitle="Deliverables: catalog.html &amp; catalog.js in homework/session-7/"
    />

    <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 36, flex: 1, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={{ padding: 24, borderRadius: 16, background: ink.panel, border: `1px solid ${ink.border}` }}>
          <h4 style={{ margin: '0 0 10px 0', fontSize: 22, fontWeight: 800, color: ink.text }}>
            Core Mission &amp; Requirements:
          </h4>
          <ul style={{ margin: 0, paddingLeft: 22, fontSize: 18, color: ink.soft, lineHeight: 1.6 }}>
            <li>Write pure helper functions: <code>calculateFinalPrice()</code>, <code>formatCurrency()</code>, and <code>getStockLabel()</code>.</li>
            <li>Defensively select elements inside <code>#hero-product-card</code>.</li>
            <li>Safely populate titles, categories, and descriptions with <code>textContent</code>.</li>
            <li>Toggle discount badge class <code>badge-sale</code> and low-stock warnings.</li>
            <li>Verify output using the built-in console assertion suite!</li>
          </ul>
        </div>
        <div style={{ fontSize: 16, color: ink.muted }}>
          📁 Starter code provided in <code>homework/session-7/homework-1.md</code>.
        </div>
      </div>

      {/* Visual Mockup Card */}
      <div
        style={{
          background: '#0d1117',
          borderRadius: 18,
          padding: 28,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: shadow.window,
        }}
      >
        <div
          style={{
            width: 360,
            background: '#ffffff',
            borderRadius: 16,
            overflow: 'hidden',
            border: '2px solid #de3b3d',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 12px 28px rgba(0,0,0,0.25)',
          }}
        >
          <div
            style={{
              height: 140,
              background: '#e2e8f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              color: '#64748b',
              fontSize: 16,
              position: 'relative',
            }}
          >
            [ Beryllium Audio Driver ]
            <span
              style={{
                position: 'absolute',
                top: 10,
                right: 10,
                background: '#16a34a',
                color: '#fff',
                fontSize: 11,
                fontWeight: 800,
                padding: '4px 8px',
                borderRadius: 999,
              }}
            >
              20% OFF
            </span>
          </div>
          <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#64748b', textTransform: 'uppercase' }}>
              Audiophile Hardware
            </span>
            <h4 style={{ margin: 0, fontSize: 18, color: '#0f172a' }}>Aura Wireless Studio</h4>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
              <span style={{ fontSize: 24, fontWeight: 800, color: '#0f172a' }}>$239.99</span>
              <span style={{ fontSize: 14, color: '#94a3b8', textDecoration: 'line-through' }}>$299.99</span>
            </div>
            <span style={{ fontSize: 13, color: '#b45309', fontWeight: 700 }}>
              ⚠️ Only 4 left in stock - order soon!
            </span>
          </div>
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ─── 34. Homework 2 Showcase ──────────────────────────────────────────────────

const Homework2Showcase: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Homework Assignment 02"
      title="Homework 2: Student Gradebook &amp; Dashboard"
      subtitle="Deliverables: gradebook.html &amp; gradebook.js in homework/session-7/"
    />

    <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 36, flex: 1, alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={{ padding: 24, borderRadius: 16, background: ink.panel, border: `1px solid ${ink.border}` }}>
          <h4 style={{ margin: '0 0 10px 0', fontSize: 22, fontWeight: 800, color: ink.text }}>
            Core Mission &amp; Requirements:
          </h4>
          <ul style={{ margin: 0, paddingLeft: 22, fontSize: 18, color: ink.soft, lineHeight: 1.6 }}>
            <li>Build pure calculation pipeline: <code>calculateAverage()</code> and <code>getLetterGrade()</code>.</li>
            <li>Determine academic status: Honor Roll, Good Standing, or Academic Warning.</li>
            <li>Iterate array of students with <code>for...of</code> and dynamically construct <code>&lt;tr&gt;</code> rows.</li>
            <li>Safely populate text with <code>textContent</code> to prevent script injection.</li>
            <li>Compute aggregate cohort statistics (cohort average, honor roll count, risk count).</li>
          </ul>
        </div>
        <div style={{ fontSize: 16, color: ink.muted }}>
          📁 Starter code provided in <code>homework/session-7/homework-2.md</code>.
        </div>
      </div>

      {/* Visual Table Mockup */}
      <div
        style={{
          background: ink.panel,
          borderRadius: 18,
          border: `1px solid ${ink.border}`,
          padding: 24,
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          boxShadow: shadow.card,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ padding: 12, background: '#fff', borderRadius: 8, border: `1px solid ${ink.border}`, textAlign: 'center', flex: 1, marginRight: 8 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: ink.muted }}>AVG</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: ink.text }}>81.2%</div>
          </div>
          <div style={{ padding: 12, background: '#fff', borderRadius: 8, border: `1px solid ${ink.border}`, textAlign: 'center', flex: 1, marginRight: 8 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: ink.mint }}>HONORS</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: ink.mint }}>2</div>
          </div>
          <div style={{ padding: 12, background: '#fff', borderRadius: 8, border: `1px solid ${ink.border}`, textAlign: 'center', flex: 1 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: ink.muted }}>WARNING</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: ink.accent }}>1</div>
          </div>
        </div>

        <div style={{ border: `1px solid ${ink.border}`, borderRadius: 10, overflow: 'hidden', background: '#fff' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '10px 14px', background: '#f8fafc', fontWeight: 700, fontSize: 13, color: ink.muted }}>
            <span>Student</span>
            <span>Avg</span>
            <span>Status</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '10px 14px', borderTop: `1px solid ${ink.border}`, fontSize: 14, alignItems: 'center' }}>
            <span style={{ fontWeight: 600 }}>Sara Al-Mansoor</span>
            <span>94.7%</span>
            <span style={{ fontSize: 11, fontWeight: 800, color: ink.mint, background: ink.mintSoft, padding: '2px 8px', borderRadius: 6, width: 'fit-content' }}>HONOR</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '10px 14px', borderTop: `1px solid ${ink.border}`, fontSize: 14, alignItems: 'center' }}>
            <span style={{ fontWeight: 600 }}>Marcus Brody</span>
            <span>82.0%</span>
            <span style={{ fontSize: 11, fontWeight: 800, color: ink.indigo, background: ink.indigoSoft, padding: '2px 8px', borderRadius: 6, width: 'fit-content' }}>PASS</span>
          </div>
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ─── 35. Session Summary and Bridge ───────────────────────────────────────────

const SessionSummaryAndBridge: Page = () => (
  <div style={fill}>
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 24,
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 12,
          padding: '8px 20px',
          borderRadius: 999,
          background: ink.mintSoft,
          border: `1px solid ${ink.mint}`,
          width: 'fit-content',
        }}
      >
        <IconSparkles size={22} color={ink.mint} />
        <span style={{ fontSize: 18, fontWeight: 800, color: ink.mint, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          SESSION 07 COMPLETE!
        </span>
      </div>

      <h1
        style={{
          fontSize: 78,
          fontWeight: 900,
          fontFamily: font.display,
          letterSpacing: '-0.04em',
          lineHeight: 1.1,
          margin: 0,
          maxWidth: 1600,
        }}
      >
        You Have Bridged <span style={{ color: ink.accent }}>JavaScript Memory</span> to the <span style={{ color: ink.sky }}>Live Screen</span>!
      </h1>

      <p
        style={{
          fontSize: 28,
          color: ink.muted,
          maxWidth: 1400,
          margin: 0,
          lineHeight: 1.45,
          fontWeight: 500,
        }}
      >
        Today you mastered the two greatest weapons of modern frontend engineering: pure callable
        calculation functions and live DOM tree querying and dynamic mutation.
      </p>

      <div
        style={{
          background: ink.accentSoft,
          border: `2px solid ${ink.accent}`,
          borderRadius: 18,
          padding: '24px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: 1400,
          marginTop: 8,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <span style={{ fontSize: 16, fontWeight: 800, color: ink.accent, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            COMING UP IN SESSION 08
          </span>
          <span style={{ fontSize: 26, fontWeight: 800, color: ink.text }}>
            Event-Driven Programming: Clicks, Keyboard Inputs &amp; Reactive UI State
          </span>
          <span style={{ fontSize: 18, color: ink.muted }}>
            Turning static DOM cards into interactive web applications using addEventListener and state machines!
          </span>
        </div>
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            background: ink.accent,
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 28,
            fontWeight: 900,
            flexShrink: 0,
          }}
        >
          &rarr;
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ─── Presenter Speaker Notes (Index-Aligned: 35 Entries) ──────────────────────

export const notes = [
  // 01. Cover
  'Welcome students to Session 07! Emphasize the monumental milestone today represents: we bridge pure computation in JavaScript to the visual reality of HTML in the browser.',

  // 02. Agenda
  'Walk through the 7 structural pillars of today’s session. We begin by drilling functions first, explore the DOM tree in browser memory, and finish with our lab and 2 homework projects.',

  // 03. Part 1 Divider
  'Part 1: Functions: Reusable Computation Machines. Packaging logic into callable, isolated, predictable units of execution.',

  // 04. What is a Function?
  'Explain the Black Box mental model: Input parameters go in, processing logic runs, output returns. Highlight the DRY principle: Don’t Repeat Yourself.',

  // 05. Function Variations
  'Compare Function Declarations (hoisted), Function Expressions (TDZ protected), and modern Arrow Functions. Advise arrow functions for concise 1-liners and callbacks.',

  // 06. Parameters vs Arguments
  'Clearly contrast parameters (definition placeholders) with arguments (live passed values). Demonstrate default parameters to prevent undefined bugs.',

  // 07. Return Values vs Console Log
  'Drill the golden distinction: return produces a real value for downstream code; console.log only mirrors text for developer debugging. Warn about the undefined return trap.',

  // 08. Part 2 Divider
  'Part 2: The Document Object Model (DOM) Architecture. The living object graph connecting JavaScript to screen pixels.',

  // 09. Static HTML on Disk vs Live DOM in RAM
  'Demystify the browser memory model: your .html file on disk is dead static text. When loaded, browser RAM creates the live interactive DOM tree. JavaScript modifies RAM, not disk.',

  // 10. The DOM Tree Hierarchy
  'Explain the node tree hierarchy: document -> html -> head/body -> children and siblings. Show how document acts as the global gateway API.',

  // 11. The DOM Bridge Metaphor
  'Trace the 3-step pipeline: JavaScript heap memory -> document query & textContent update -> browser paint engine repainting screen pixels.',

  // 12. Part 3 Divider
  'Part 3: Element Selection: Finding Nodes with Precision. Using CSS selector engines inside JavaScript.',

  // 13. querySelector Mastery
  'Explain document.querySelector(). It uses the exact same CSS selector strings students already know (tags, .classes, #ids, attributes) and returns the first match.',

  // 14. querySelectorAll and NodeLists
  'Contrast querySelector with querySelectorAll. Explain that NodeLists are array-like structures that can be iterated with for...of loops.',

  // 15. Scoped Queries
  'Demonstrate element.querySelector(). Searching inside a specific container prevents global ID collisions and allows building modular component renderers.',

  // 16. Defensive Querying Null Trap
  'Warn against the #1 browser crash: TypeError: Cannot read properties of null. Show how simple guard clauses protect scripts from crashing when elements are missing.',

  // 17. Part 4 Divider
  'Part 4: Dynamic Updates: Changing the Live Page. Mutating text, classes, and attributes safely.',

  // 18. Safe Text Updates
  'Explain element.textContent as the standard, blazing-fast, secure property for plain text. Contrast with layout-aware innerText.',

  // 19. The innerHTML Minefield
  'Drill the security danger of innerHTML: Cross-Site Scripting (XSS). Explain how malicious strings can execute unauthorized scripts, and why textContent neutralizes tags.',

  // 20. ClassList Manipulation
  'Demonstrate classList.add, remove, and toggle. Emphasize that CSS should own visual design rules while JavaScript simply toggles state classes.',

  // 21. State Checking and Themes
  'Show how classList.contains() returns a boolean to make conditional decisions, such as toggling light and dark theme buttons.',

  // 22. Attribute Manipulation
  'Explain attribute reflection: updating img.src, img.alt, and button.disabled directly, alongside setAttribute() for custom data attributes.',

  // 23. Inline Styles vs Classes
  'Emphasize the architectural golden rule: always prefer CSS classes over direct element.style manipulation to avoid unmaintainable specificity wars.',

  // 24. Part 5 Divider
  'Part 5: Data-to-DOM: Functional Component Rendering. Connecting pure calculation functions to automated UI generation.',

  // 25. The Rendering Pipeline
  'Walk through the 4-stage pipeline: Raw Data Object -> Pure Formatting Helper -> DOM Target Selection -> Safe Property Injection.',

  // 26. Component Generator Function
  'Walk through a single-entity card renderer function: passing an element and a product object to encapsulate all DOM updates in one clean place.',

  // 27. Collection Rendering
  'Demonstrate rendering lists and tables: iterating an array of objects with for...of and appending dynamically created elements.',

  // 28. Part 6 Divider
  'Part 6: In-Class Guided Lab Walkthrough. Building the Dynamic Student Profile Card live.',

  // 29. Lab Architecture
  'Present profile.html layout and the studentData JavaScript object. Walk students through the element IDs they need to target.',

  // 30. Lab Build Walkthrough
  'Guide students through the 3 implementation steps: selecting elements, updating textContent, and swapping the badge-honors class.',

  // 31. Socratic AI Challenge
  'Instruct students to prompt their AI tutor on textContent vs innerHTML security and explain the difference in their own words.',

  // 32. Part 7 Divider
  'Part 7: Homework Assignments & Milestone Bridge. Launching our two production homework deliverables.',

  // 33. Homework 1 Showcase
  'Present Homework 1: The Dynamic E-Commerce Product Catalog. Review pure pricing helpers, textContent injection, and discount badge toggles.',

  // 34. Homework 2 Showcase
  'Present Homework 2: Student Gradebook & Honors Dashboard. Review multi-function pipelines, table row creation, and cohort average calculations.',

  // 35. Session Summary and Bridge
  'Celebrate completing Session 07! Recap the major breakthroughs and tease Session 08: Event-Driven Programming with addEventListener and interactive state.',
];

// ─── Slide Meta & Export Default ──────────────────────────────────────────────

export const meta: SlideMeta = {
  title: 'Session 07: Functions, Reusable Logic & The Live DOM Bridge',
  createdAt: '2026-11-08T20:30:00.000Z',
  theme: 'open-slide-default',
};

export default [
  Cover,
  Agenda,
  Part1Divider,
  WhatIsAFunction,
  FunctionVariations,
  ParametersAndArguments,
  ReturnValuesVsConsoleLog,
  Part2Divider,
  StaticHtmlVsLiveDom,
  TheDomTreeHierarchy,
  TheDomBridgeMetaphor,
  Part3Divider,
  QuerySelectorMastery,
  QuerySelectorAllAndNodeLists,
  ScopedQueries,
  DefensiveQueryingNullTrap,
  Part4Divider,
  SafeTextUpdates,
  TheInnerHTMLMinefield,
  ClassListManipulation,
  StateCheckingAndThemes,
  AttributeManipulation,
  InlineStylesVsClasses,
  Part5Divider,
  TheRenderingPipeline,
  ComponentGeneratorFunction,
  CollectionRendering,
  Part6Divider,
  LabArchitecture,
  LabBuildWalkthrough,
  SocraticAiChallenge,
  Part7Divider,
  Homework1Showcase,
  Homework2Showcase,
  SessionSummaryAndBridge,
] satisfies Page[];
