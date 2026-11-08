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

const IconRepeat = ({ size = 36, color = ink.amber }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <polyline points="17 1 21 5 17 9" />
    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
    <polyline points="7 23 3 19 7 15" />
    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
  </Svg>
);

const IconGitBranch = ({ size = 36, color = ink.indigo }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <line x1="6" y1="3" x2="6" y2="15" />
    <circle cx="18" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M18 9a9 9 0 0 1-9 9" />
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
          gap: 12,
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
        <span style={{ fontSize: 28, color: ink.muted, fontWeight: 500, flexShrink: 0 }}>
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
        <span style={{ fontWeight: 800, color: ink.text }}>SESSION 06</span>
        <span style={{ color: ink.border }}>|</span>
        <span>JavaScript Core: Non-Primitives, Memory & Control Flow</span>
      </div>
      <div style={{ fontFamily: font.mono, fontWeight: 700, color: ink.soft, flexShrink: 0 }}>
        {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </div>
    </div>
  );
};

// ─── Code Highlighter Helper ──────────────────────────────────────────────────

const renderCodeLine = (line: string): ReactNode => {
  if (
    line.trim().startsWith('//') ||
    line.trim().startsWith('/*') ||
    line.trim().startsWith('*')
  ) {
    return <span style={{ color: '#8b949e', fontStyle: 'italic' }}>{line}</span>;
  }

  const parts = line.split(
    /(\b(?:const|let|var|return|if|else|switch|case|break|continue|default|for|of|in|while|do|typeof|true|false|null|undefined|new)\b|\b\d+(?:\.\d+)?\b|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|[{}()[\].,;:?]|===|!==|==|!=|=>|<=|>=|&&|\|\||\+\+|--|[+\-*\/%!=<>])/g
  );

  return parts.map((part, index) => {
    if (!part) return null;
    if (
      /^(?:const|let|var|return|if|else|switch|case|break|continue|default|for|of|in|while|do|typeof)$/.test(
        part
      )
    ) {
      return (
        <span key={index} style={{ color: '#ff7b72', fontWeight: 600 }}>
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
  fontSize = 24,
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
        borderRadius: 18,
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
          padding: '14px 24px',
          background: 'rgba(255, 255, 255, 0.04)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <span style={{ width: 14, height: 14, borderRadius: '50%', background: '#ff5f56' }} />
          <span style={{ width: 14, height: 14, borderRadius: '50%', background: '#ffbd2e' }} />
          <span style={{ width: 14, height: 14, borderRadius: '50%', background: '#27c93f' }} />
          <span
            style={{
              marginLeft: 14,
              fontFamily: font.mono,
              fontSize: 18,
              color: '#8b949e',
              fontWeight: 600,
            }}
          >
            {title}
          </span>
        </div>
        {badge && (
          <span
            style={{
              padding: '6px 14px',
              borderRadius: 8,
              background: `${badgeColor}22`,
              border: `1px solid ${badgeColor}66`,
              color: badgeColor,
              fontFamily: font.mono,
              fontSize: 16,
              fontWeight: 700,
            }}
          >
            {badge}
          </span>
        )}
      </div>
      <pre
        style={{
          margin: 0,
          padding: '24px 28px',
          fontFamily: font.mono,
          fontSize,
          lineHeight: 1.55,
          color: '#e6edf3',
          overflow: 'hidden',
        }}
      >
        <code>
          {lines.map((line, idx) => (
            <div key={idx} style={{ display: 'flex' }}>
              <span
                style={{
                  width: 44,
                  userSelect: 'none',
                  color: '#484f58',
                  textAlign: 'right',
                  paddingRight: 20,
                  flexShrink: 0,
                }}
              >
                {idx + 1}
              </span>
              <span style={{ flex: 1 }}>{renderCodeLine(line)}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
};

// ─── Chapter Divider Page Helper (Fixes Giant Void & Collisions) ──────────────

const ChapterDivider = ({
  partNumber,
  title,
  subtitle,
  icon,
}: {
  partNumber: string;
  title: string;
  subtitle: string;
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
        gap: 32,
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 16,
          padding: '14px 28px',
          borderRadius: 999,
          background: ink.accentSoft,
          border: `1.5px solid ${ink.accentBorder}`,
          alignSelf: 'flex-start',
        }}
      >
        {icon}
        <span
          style={{
            fontSize: 26,
            fontWeight: 800,
            color: ink.accent,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          PART {partNumber}
        </span>
      </div>

      <h1
        style={{
          fontSize: 98,
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
          fontSize: 36,
          color: ink.muted,
          lineHeight: 1.5,
          margin: 0,
          maxWidth: 1350,
        }}
      >
        {subtitle}
      </p>
    </div>
    <SlideFooter />
  </div>
);

// ─── 01. Cover Page ───────────────────────────────────────────────────────────

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
        marginBottom: 36,
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
        SESSION 06
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
        PHASE 2: JAVASCRIPT FUNDAMENTALS
      </span>
    </div>

    <h1
      style={{
        fontFamily: font.display,
        fontSize: 108,
        fontWeight: 900,
        color: ink.text,
        letterSpacing: '-0.04em',
        lineHeight: 1.06,
        margin: '0 0 28px 0',
        maxWidth: 1600,
      }}
    >
      Non-Primitives, Memory References & Control Flow
    </h1>

    <p
      style={{
        fontSize: 36,
        color: ink.muted,
        lineHeight: 1.5,
        maxWidth: 1400,
        margin: '0 0 54px 0',
      }}
    >
      Demystifying Stack vs. Heap memory, the reference mutation trap, foundational operators,
      guard clauses, and algorithmic loops.
    </p>

    <div
      style={{
        display: 'flex',
        gap: 36,
        borderTop: `2px solid ${ink.border}`,
        paddingTop: 36,
        fontFamily: font.mono,
        fontSize: 24,
        color: ink.muted,
      }}
    >
      <div>
        <span style={{ color: ink.accent, fontWeight: 800 }}>STACK:</span> Primitive Values
      </div>
      <div>•</div>
      <div>
        <span style={{ color: ink.sky, fontWeight: 800 }}>HEAP:</span> Object References
      </div>
      <div>•</div>
      <div>
        <span style={{ color: ink.indigo, fontWeight: 800 }}>OPERATORS:</span> Strict Equality & Logic
      </div>
      <div>•</div>
      <div>
        <span style={{ color: ink.mint, fontWeight: 800 }}>CONTROL:</span> Guard Clauses & Loops
      </div>
    </div>
  </div>
);

// ─── 02. Agenda Page ──────────────────────────────────────────────────────────

const Agenda: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Roadmap"
      title="Session 06 Curriculum Architecture"
      subtitle="6 foundational pillars from memory layout to iterative control flow"
    />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 32,
        flex: 1,
        alignContent: 'center',
      }}
    >
      {[
        {
          num: '01',
          title: 'Memory Mental Model',
          desc: 'Stack (values) vs Heap (references), pointer mechanics, and the const paradox.',
          color: ink.accent,
        },
        {
          num: '02',
          title: 'Non-Primitives in Depth',
          desc: 'Contact cards (Objects), ice cube trays (Arrays), and arrays of objects.',
          color: ink.purple,
        },
        {
          num: '03',
          title: 'Operators & Equality',
          desc: 'Math, strict equality (===), reference comparisons, and short-circuiting.',
          color: ink.sky,
        },
        {
          num: '04',
          title: 'Control Flow: Conditionals',
          desc: 'The 8 falsy values, if/else, ternary operator, and clean Guard Clauses.',
          color: ink.indigo,
        },
        {
          num: '05',
          title: 'Control Flow: Iteration',
          desc: 'for, while, break vs continue, and collection traversal (for...of).',
          color: ink.mint,
        },
        {
          num: '06',
          title: 'Hands-on Lab & Socratic AI',
          desc: 'Console mutation experiments, cart calculation, and AI interrogation.',
          color: ink.amber,
        },
      ].map((card, idx) => (
        <div
          key={idx}
          style={{
            padding: 32,
            borderRadius: 18,
            background: ink.panel,
            border: `2px solid ${card.color}33`,
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontFamily: font.mono,
              fontWeight: 800,
              color: card.color,
            }}
          >
            PART {card.num}
          </div>
          <div style={{ fontSize: 32, fontWeight: 800, color: ink.text }}>{card.title}</div>
          <div style={{ fontSize: 24, color: ink.muted, lineHeight: 1.5 }}>{card.desc}</div>
        </div>
      ))}
    </div>
    <SlideFooter />
  </div>
);

// ─── Part 1: Memory Architecture ──────────────────────────────────────────────

const Part1Divider: Page = () => (
  <ChapterDivider
    partNumber="01"
    title="The Memory Mental Model: Primitives vs. Non-Primitives"
    subtitle="The Call Stack, the Memory Heap, pointer addresses, and why assigning an object shares live state."
    icon={<IconCpu size={48} color={ink.accent} />}
  />
);

// 04. Stack vs Heap Architecture
const StackVsHeapArchitecture: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 01 • Memory Architecture"
      title="The Two Memory Worlds: Call Stack vs. Heap"
      subtitle="How computer RAM allocates slots for different data categories"
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
          padding: 44,
          borderRadius: 24,
          background: ink.panel,
          border: `2px solid ${ink.border}`,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: font.mono, fontSize: 22, fontWeight: 800, color: ink.accent }}>
            FAST & ORDERED
          </span>
          <span
            style={{
              padding: '6px 16px',
              borderRadius: 8,
              background: ink.accentSoft,
              color: ink.accent,
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            Fixed-Size Slots
          </span>
        </div>
        <div style={{ fontSize: 44, fontWeight: 900, color: ink.text }}>The Call Stack</div>
        <div style={{ fontSize: 26, color: ink.muted, lineHeight: 1.55 }}>
          Stores primitive values directly inside the variable slot. Ultra-fast, organized, and
          freed immediately when scope finishes.
        </div>
        <div
          style={{
            marginTop: 'auto',
            background: '#ffffff',
            borderRadius: 16,
            border: `1.5px solid ${ink.border}`,
            padding: 24,
            fontFamily: font.mono,
            fontSize: 24,
            lineHeight: 1.8,
            color: ink.soft,
          }}
        >
          <div>[age: 25] ──► Direct primitive value</div>
          <div>[isOnline: true] ──► Direct primitive value</div>
          <div>[userPtr: #0x7A4F] ──► Memory address to Heap!</div>
        </div>
      </div>

      <div
        style={{
          padding: 44,
          borderRadius: 24,
          background: ink.skySoft,
          border: `2px solid ${ink.sky}44`,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: font.mono, fontSize: 22, fontWeight: 800, color: ink.sky }}>
            EXPANDABLE & DYNAMIC
          </span>
          <span
            style={{
              padding: '6px 16px',
              borderRadius: 8,
              background: '#ffffff',
              color: ink.sky,
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            Arbitrary Shapes
          </span>
        </div>
        <div style={{ fontSize: 44, fontWeight: 900, color: ink.sky }}>The Memory Heap</div>
        <div style={{ fontSize: 26, color: ink.soft, lineHeight: 1.55 }}>
          A vast, flexible memory warehouse. Objects and arrays expand dynamically at runtime.
          They are too large to fit in fixed stack slots.
        </div>
        <div
          style={{
            marginTop: 'auto',
            background: '#ffffff',
            borderRadius: 16,
            border: `1.5px solid ${ink.sky}44`,
            padding: 24,
            fontFamily: font.mono,
            fontSize: 24,
            lineHeight: 1.8,
            color: ink.soft,
          }}
        >
          <div style={{ color: ink.sky, fontWeight: 800 }}>Address #0x7A4F:</div>
          <div>{'{ name: "Amina", credits: 100, cart: [...] }'}</div>
          <div style={{ color: ink.dim, fontSize: 18 }}>Managed by Garbage Collector</div>
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 05. Primitive Storage By Value
const PrimitiveStorageByValue: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 01 • Memory Architecture"
      title="Primitives: Stored and Copied by Value"
      subtitle="Each variable receives its own independent slot in Stack memory"
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
      <CodeWindow
        title="primitive-copy.js"
        badge="Independent Clones"
        badgeColor={ink.mint}
        fontSize={26}
        code={`let scoreA = 100;
let scoreB = scoreA; // Copies literal value 100 into scoreB

scoreB = 85; // Only mutates scoreB's slot!

console.log(scoreA); // 100 (Completely untouched!)
console.log(scoreB); // 85`}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div
          style={{
            padding: 28,
            borderRadius: 18,
            background: ink.panel,
            border: `1.5px solid ${ink.border}`,
          }}
        >
          <div style={{ fontSize: 22, fontFamily: font.mono, color: ink.mint, fontWeight: 800 }}>
            STEP 1: ALLOCATION
          </div>
          <div style={{ fontSize: 28, fontWeight: 800, margin: '8px 0', color: ink.text }}>
            Stack Slot: [ scoreA = 100 ]
          </div>
          <div style={{ fontSize: 22, color: ink.muted, lineHeight: 1.5 }}>
            Variable <code>scoreA</code> holds the raw 64-bit float representation of 100.
          </div>
        </div>

        <div
          style={{
            padding: 28,
            borderRadius: 18,
            background: ink.panel,
            border: `1.5px solid ${ink.border}`,
          }}
        >
          <div style={{ fontSize: 22, fontFamily: font.mono, color: ink.sky, fontWeight: 800 }}>
            STEP 2: ASSIGNMENT COPY
          </div>
          <div style={{ fontSize: 28, fontWeight: 800, margin: '8px 0', color: ink.text }}>
            Stack Slot: [ scoreB = 100 ]
          </div>
          <div style={{ fontSize: 22, color: ink.muted, lineHeight: 1.5 }}>
            JavaScript reads 100 from <code>scoreA</code> and duplicates it into <code>scoreB</code>.
          </div>
        </div>

        <div
          style={{
            padding: 28,
            borderRadius: 18,
            background: ink.mintSoft,
            border: `1.5px solid ${ink.mint}44`,
          }}
        >
          <div style={{ fontSize: 22, fontFamily: font.mono, color: ink.mint, fontWeight: 800 }}>
            STEP 3: MUTATION ISOLATION
          </div>
          <div style={{ fontSize: 24, color: ink.soft, lineHeight: 1.5, marginTop: 4 }}>
            Changing <code>scoreB</code> overwrites <code>scoreB</code>'s slot only. Primitives have{' '}
            <strong>zero shared wiring</strong>.
          </div>
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 06. Non-Primitive Storage By Reference
const NonPrimitiveStorageByReference: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 01 • Memory Architecture"
      title="Non-Primitives: Stored and Copied by Reference"
      subtitle="Variables hold memory addresses pointing to objects in the Heap"
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
      <CodeWindow
        title="reference-sharing.js"
        badge="Shared Address Pointer"
        badgeColor={ink.accent}
        fontSize={26}
        code={`const userA = { name: "Sara", credits: 50 };

// Copies the POINTER address (#0x7A4F), NOT the object!
const userB = userA;

console.log(userA === userB); // true (Same pointer!)`}
      />

      <div
        style={{
          padding: 40,
          borderRadius: 24,
          background: ink.panel,
          border: `2px solid ${ink.border}`,
          display: 'flex',
          flexDirection: 'column',
          gap: 22,
        }}
      >
        <div style={{ fontSize: 22, fontFamily: font.mono, fontWeight: 800, color: ink.accent }}>
          STACK VS HEAP WIRING
        </div>
        <div style={{ fontSize: 36, fontWeight: 800, color: ink.text }}>
          The Remote Control Metaphor
        </div>
        <div style={{ fontSize: 26, color: ink.muted, lineHeight: 1.55 }}>
          Imagine the Heap object is a television in your room. The variable <code>userA</code> is a
          remote control pointing to that TV.
        </div>
        <div
          style={{
            background: '#ffffff',
            borderRadius: 16,
            border: `1.5px solid ${ink.accentBorder}`,
            padding: 24,
            fontSize: 24,
            color: ink.soft,
            lineHeight: 1.55,
          }}
        >
          Executing <code>const userB = userA</code> does <strong>not</strong> buy a second TV! It
          simply creates a <strong>second remote control</strong> programmed to the exact same TV.
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 07. The Reference Mutation Trap
const TheReferenceMutationTrap: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 01 • Memory Architecture"
      title="The Reference Mutation Trap"
      subtitle="How modifying properties through one variable corrupts all other references"
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
      <CodeWindow
        title="mutation-hazard.js"
        badge="Accidental Bug"
        badgeColor={ink.accent}
        fontSize={25}
        code={`const userA = { name: "Sara", credits: 50 };
const userB = userA; // Shared reference #0x7A4F

userB.credits = 99; // Mutates heap at #0x7A4F!

console.log(userA.credits); 
// ⚠️ 99! userA was mutated without being touched!`}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div
          style={{
            padding: 36,
            borderRadius: 20,
            background: ink.accentSoft,
            border: `2px solid ${ink.accentBorder}`,
          }}
        >
          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            <IconAlert size={36} color={ink.accent} />
            <div style={{ fontSize: 30, fontWeight: 800, color: ink.accent }}>
              The Production Danger
            </div>
          </div>
          <div style={{ fontSize: 24, color: ink.soft, marginTop: 16, lineHeight: 1.55 }}>
            In e-commerce apps, if a shopping cart modifies a product's price via a shared
            reference, the <strong>master store catalog</strong> is corrupted globally for all
            users!
          </div>
        </div>

        <div
          style={{
            padding: 36,
            borderRadius: 20,
            background: ink.panel,
            border: `1.5px solid ${ink.border}`,
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 800, color: ink.text }}>
            Why Did This Happen?
          </div>
          <div style={{ fontSize: 24, color: ink.muted, marginTop: 12, lineHeight: 1.55 }}>
            Both variables hold the same memory address <code>#0x7A4F</code>. When JavaScript follows
            either pointer into the Heap, it encounters the same physical memory slot.
          </div>
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 08. Reassignment vs Mutation
const ReassignmentVsMutation: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 01 • Memory Architecture"
      title="Reassignment vs. Mutation (The const Paradox)"
      subtitle="Why const locks variable reassignments on the Stack, but allows Heap mutations"
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
          borderRadius: 24,
          background: ink.mintSoft,
          border: `2px solid ${ink.mint}44`,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <IconCheck size={36} color={ink.mint} />
          <span style={{ fontSize: 28, fontWeight: 800, color: ink.mint }}>
            ALLOWED: HEAP PROPERTY MUTATION
          </span>
        </div>
        <div
          style={{
            background: '#ffffff',
            borderRadius: 16,
            border: `1.5px solid ${ink.mint}44`,
            padding: 22,
            fontFamily: font.mono,
            fontSize: 24,
            lineHeight: 1.7,
            color: ink.soft,
          }}
        >
          <div>const cart = [];</div>
          <div>cart.push("Headphones"); // ✅ OK!</div>
          <div>cart[0] = "Keyboard"; // ✅ OK!</div>
        </div>
        <div style={{ fontSize: 24, color: ink.soft, lineHeight: 1.55 }}>
          The memory pointer stored on the Stack (<code>#0x55FA</code>) remained completely
          unchanged. Only the data in the Heap expanded.
        </div>
      </div>

      <div
        style={{
          padding: 40,
          borderRadius: 24,
          background: ink.accentSoft,
          border: `2px solid ${ink.accentBorder}`,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <IconAlert size={36} color={ink.accent} />
          <span style={{ fontSize: 28, fontWeight: 800, color: ink.accent }}>
            FORBIDDEN: STACK REASSIGNMENT
          </span>
        </div>
        <div
          style={{
            background: '#ffffff',
            borderRadius: 16,
            border: `1.5px solid ${ink.accentBorder}`,
            padding: 22,
            fontFamily: font.mono,
            fontSize: 24,
            lineHeight: 1.7,
            color: ink.accent,
            fontWeight: 600,
          }}
        >
          <div>const cart = [];</div>
          <div>cart = ["New Array"]; // ❌ TypeError</div>
          <div style={{ color: ink.dim, fontSize: 18 }}>
            // Assignment to constant variable
          </div>
        </div>
        <div style={{ fontSize: 24, color: ink.soft, lineHeight: 1.55 }}>
          Creating a new array allocates address <code>#0x9999</code>. Attempting to overwrite the
          locked stack slot violates the <code>const</code> contract!
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 09. Cloning vs Referencing
const CloningVsReferencing: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 01 • Memory Architecture"
      title="Breaking the Link: Safe Cloning"
      subtitle="How to create genuine independent copies without shared mutation hazards"
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
          borderRadius: 24,
          background: ink.panel,
          border: `2px solid ${ink.accent}55`,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 32, fontWeight: 800, color: ink.text }}>Shared Reference</span>
          <span
            style={{
              fontFamily: font.mono,
              fontSize: 18,
              fontWeight: 800,
              color: ink.accent,
              background: ink.accentSoft,
              padding: '6px 14px',
              borderRadius: 8,
            }}
          >
            ⚠️ DANGER: SHARED
          </span>
        </div>
        <div
          style={{
            background: '#ffffff',
            borderRadius: 14,
            border: `1.5px solid ${ink.border}`,
            padding: 20,
            fontFamily: font.mono,
            fontSize: 22,
            color: ink.accent,
            fontWeight: 700,
          }}
        >
          const copy = original;
        </div>
        <div style={{ fontSize: 24, color: ink.muted, lineHeight: 1.55 }}>
          Zero cloning occurs. Both variables share the exact same Heap pointer address.
          Modifying properties via <code>copy</code> mutates <code>original</code>.
        </div>
      </div>

      <div
        style={{
          padding: 40,
          borderRadius: 24,
          background: ink.mintSoft,
          border: `2px solid ${ink.mint}55`,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 32, fontWeight: 800, color: ink.mint }}>
            Shallow Clone (Spread Syntax)
          </span>
          <span
            style={{
              fontFamily: font.mono,
              fontSize: 18,
              fontWeight: 800,
              color: ink.mint,
              background: '#ffffff',
              padding: '6px 14px',
              borderRadius: 8,
            }}
          >
            ✨ SAFE COPY
          </span>
        </div>
        <div
          style={{
            background: '#ffffff',
            borderRadius: 14,
            border: `1.5px solid ${ink.mint}44`,
            padding: 20,
            fontFamily: font.mono,
            fontSize: 22,
            color: ink.mint,
            fontWeight: 700,
          }}
        >
          <div>const objCopy = &#123; ...original &#125;;</div>
          <div>const arrCopy = [...originalArray];</div>
        </div>
        <div style={{ fontSize: 24, color: ink.soft, lineHeight: 1.55 }}>
          Allocates a brand-new object in the Heap with copied top-level values. Modifying the clone
          leaves the original completely untouched.
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ─── Part 2: Non-Primitives in Depth: Objects & Arrays ─────────────────────────

const Part2Divider: Page = () => (
  <ChapterDivider
    partNumber="02"
    title="Non-Primitives in Depth: Objects & Arrays"
    subtitle="Contact cards, ice cube trays, property mutations, and arrays of objects."
    icon={<IconLayers size={48} color={ink.purple} />}
  />
);

// 11. Objects Contact Card
const ObjectsContactCard: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 02 • Non-Primitives"
      title="Objects: The Labeled Contact Card"
      subtitle="Grouping labeled key-value properties into a single entity"
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
      <CodeWindow
        title="object-properties.js"
        badge="Key-Value Pairs"
        badgeColor={ink.purple}
        fontSize={24}
        code={`const student = {
  name: "Carlos",
  credits: 15,
  isActive: true,
  "home-city": "Madrid"
};

// 1. Dot notation (Standard):
console.log(student.name);         // "Carlos"

// 2. Bracket notation (Dynamic/Special keys):
console.log(student["home-city"]); // "Madrid"
const key = "credits";
console.log(student[key]);         // 15

// 3. Adding & deleting properties:
student.gpa = 3.9;
delete student.isActive;`}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div
          style={{
            padding: 32,
            borderRadius: 20,
            background: ink.panel,
            border: `1.5px solid ${ink.border}`,
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 800, color: ink.text }}>
            When to use Bracket Notation <code>[]</code>
          </div>
          <div style={{ fontSize: 22, color: ink.muted, marginTop: 10, lineHeight: 1.55 }}>
            Use bracket notation when property names contain hyphens or spaces, or when the property
            key is stored inside a variable.
          </div>
        </div>

        <div
          style={{
            padding: 32,
            borderRadius: 20,
            background: ink.purpleSoft,
            border: `1.5px solid ${ink.purple}44`,
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 800, color: ink.purple }}>
            The Contact Card Metaphor
          </div>
          <div style={{ fontSize: 22, color: ink.soft, marginTop: 10, lineHeight: 1.55 }}>
            An object is like a physical business card with printed fields: Name, Phone, Role.
            Each labeled field points to a specific value.
          </div>
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 12. Arrays Ice Cube Tray
const ArraysIceCubeTray: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 02 • Non-Primitives"
      title="Arrays: The Numbered Ice Cube Tray"
      subtitle="Ordered, zero-indexed numerical storage slots"
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
      <CodeWindow
        title="array-basics.js"
        badge="Zero-Based Index"
        badgeColor={ink.sky}
        fontSize={25}
        code={`const fruits = ["Apple", "Banana", "Cherry", "Date"];

console.log(fruits[0]);     // "Apple" (First slot)
console.log(fruits[2]);     // "Cherry"
console.log(fruits.length); // 4

// Accessing the last item:
console.log(fruits[fruits.length - 1]); // "Date"

// Modern ES2022 negative index:
console.log(fruits.at(-1)); // "Date" (Clean!)`}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div
          style={{
            padding: 32,
            borderRadius: 20,
            background: ink.skySoft,
            border: `1.5px solid ${ink.sky}44`,
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 800, color: ink.sky }}>
            Zero-Based Indexing
          </div>
          <div style={{ fontSize: 22, color: ink.soft, marginTop: 10, lineHeight: 1.55 }}>
            Slot numbers always start at <code>0</code>. The last index is always{' '}
            <code>length - 1</code>. Accessing an index beyond length returns <code>undefined</code>.
          </div>
        </div>

        <div
          style={{
            padding: 32,
            borderRadius: 20,
            background: ink.panel,
            border: `1.5px solid ${ink.border}`,
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 800, color: ink.text }}>
            The <code>.at(-1)</code> Superpower
          </div>
          <div style={{ fontSize: 22, color: ink.muted, marginTop: 10, lineHeight: 1.55 }}>
            Instead of writing clumsy expressions like <code>arr[arr.length - 1]</code>, use modern{' '}
            <code>arr.at(-1)</code> to read backwards from the end of the array.
          </div>
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 13. Array Methods Arsenal
const ArrayMethodsArsenal: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 02 • Non-Primitives"
      title="The Essential Array Methods Arsenal"
      subtitle="Mutating methods that modify the array vs. non-mutating query methods"
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
          borderRadius: 24,
          background: ink.panel,
          border: `2px solid ${ink.border}`,
          display: 'flex',
          flexDirection: 'column',
          gap: 18,
        }}
      >
        <span style={{ fontSize: 22, fontFamily: font.mono, fontWeight: 800, color: ink.accent }}>
          MUTATING METHODS (CHANGES ARRAY)
        </span>
        <div
          style={{
            background: '#ffffff',
            borderRadius: 16,
            border: `1.5px solid ${ink.border}`,
            padding: 24,
            fontFamily: font.mono,
            fontSize: 22,
            lineHeight: 1.8,
            color: ink.soft,
          }}
        >
          <div>arr.push("newItem");   // Adds to END</div>
          <div>const last = arr.pop(); // Removes from END</div>
          <div>arr.unshift("first");  // Adds to FRONT</div>
          <div>const fst = arr.shift(); // Removes from FRONT</div>
        </div>
        <div style={{ fontSize: 22, color: ink.muted, lineHeight: 1.5 }}>
          Directly alters the items stored in the Heap memory slot.
        </div>
      </div>

      <div
        style={{
          padding: 36,
          borderRadius: 24,
          background: ink.panel,
          border: `2px solid ${ink.border}`,
          display: 'flex',
          flexDirection: 'column',
          gap: 18,
        }}
      >
        <span style={{ fontSize: 22, fontFamily: font.mono, fontWeight: 800, color: ink.mint }}>
          QUERY & CLONE METHODS (SAFE)
        </span>
        <div
          style={{
            background: '#ffffff',
            borderRadius: 16,
            border: `1.5px solid ${ink.border}`,
            padding: 24,
            fontFamily: font.mono,
            fontSize: 22,
            lineHeight: 1.8,
            color: ink.soft,
          }}
        >
          <div>arr.includes("Apple");  // true / false</div>
          <div>arr.indexOf("Banana");  // 1 (or -1 if missing)</div>
          <div>arr.slice(0, 2);        // Clones a slice!</div>
          <div>[...arr];               // Shallow clone</div>
        </div>
        <div style={{ fontSize: 22, color: ink.muted, lineHeight: 1.5 }}>
          Returns new data without modifying the source array.
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 14. Arrays of Objects Real World
const ArraysOfObjectsRealWorld: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 02 • Non-Primitives"
      title="Real-World Web Data: Arrays of Objects"
      subtitle="How Netflix movies, Spotify tracks, and Amazon products are modeled"
    />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1.25fr 1fr',
        gap: 40,
        flex: 1,
        alignItems: 'center',
      }}
    >
      <CodeWindow
        title="catalog-processor.js"
        badge="Production Data Shape"
        badgeColor={ink.indigo}
        fontSize={23}
        code={`const catalog = [
  { id: 101, title: "Headphones", price: 200, inStock: true },
  { id: 102, title: "Mouse",      price: 50,  inStock: false },
  { id: 103, title: "Keyboard",   price: 120, inStock: true }
];

let totalValue = 0;
for (const item of catalog) {
  if (item.inStock) {
    totalValue += item.price;
  }
}

console.log(\`Total in-stock: \$\${totalValue}\`); // 320`}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div
          style={{
            padding: 32,
            borderRadius: 20,
            background: ink.panel,
            border: `1.5px solid ${ink.border}`,
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 800, color: ink.text }}>
            The Foundation of the Web
          </div>
          <div style={{ fontSize: 22, color: ink.muted, marginTop: 10, lineHeight: 1.55 }}>
            Virtually every REST API returns JSON formatted as an array of objects. In upcoming
            sessions, we will map this exact data structure directly to HTML UI cards!
          </div>
        </div>

        <div
          style={{
            padding: 32,
            borderRadius: 20,
            background: ink.mintSoft,
            border: `1.5px solid ${ink.mint}44`,
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 800, color: ink.mint }}>
            Accessing Nested Values
          </div>
          <div style={{ fontSize: 22, color: ink.soft, marginTop: 10, lineHeight: 1.55 }}>
            <code>catalog[0].title</code> reads index 0 of the array, then accesses the{' '}
            <code>title</code> property of that object in the Heap.
          </div>
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ─── Part 3: JavaScript Operators & Expressions ───────────────────────────────

const Part3Divider: Page = () => (
  <ChapterDivider
    partNumber="03"
    title="JavaScript Operators & Expressions"
    subtitle="Arithmetic, strict equality, reference comparisons, and logical short-circuiting."
    icon={<IconCode size={48} color={ink.sky} />}
  />
);

// 16. Arithmetic & String Operators
const ArithmeticAndStringOperators: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 03 • Operators & Expressions"
      title="Arithmetic, Math & The String Trap"
      subtitle="How mathematical expressions work and why string coercion creates subtle bugs"
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
      <CodeWindow
        title="operators-math.js"
        badge="Arithmetic Suite"
        badgeColor={ink.sky}
        fontSize={24}
        code={`// Core arithmetic operators:
const sum = 10 + 5;        // 15
const difference = 20 - 4; // 16
const product = 6 * 7;     // 42
const quotient = 10 / 4;   // 2.5
const remainder = 10 % 3;  // 1 (Modulo)
const power = 2 ** 3;      // 8 (Exponent)

// ⚠️ The String Concatenation Trap:
console.log("10" + 5);     // "105" (String wins!)
console.log("10" - 5);     // 5 (Coerced to number)
console.log("apple" * 2);  // NaN (Invalid math!)`}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div
          style={{
            padding: 32,
            borderRadius: 20,
            background: ink.panel,
            border: `1.5px solid ${ink.border}`,
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 800, color: ink.text }}>
            The Golden Rule of Strings
          </div>
          <div style={{ fontSize: 22, color: ink.muted, marginTop: 10, lineHeight: 1.55 }}>
            Never concatenate variables with <code>+</code>. Always use ES6{' '}
            <strong>Template Literals</strong> with backticks:
          </div>
          <div
            style={{
              marginTop: 14,
              background: '#ffffff',
              padding: '14px 20px',
              borderRadius: 10,
              border: `1px solid ${ink.border}`,
              fontFamily: font.mono,
              fontSize: 22,
              color: ink.sky,
              fontWeight: 700,
            }}
          >
            {`\`Subtotal: \${subtotal} USD\``}
          </div>
        </div>

        <div
          style={{
            padding: 32,
            borderRadius: 20,
            background: ink.accentSoft,
            border: `1.5px solid ${ink.accentBorder}`,
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 800, color: ink.accent }}>
            Understanding NaN (Not a Number)
          </div>
          <div style={{ fontSize: 22, color: ink.soft, marginTop: 10, lineHeight: 1.55 }}>
            <code>NaN</code> represents an undefined mathematical calculation. Crucial rule:{' '}
            <strong>Any arithmetic involving NaN results in NaN!</strong>
          </div>
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 17. Assignment & Increment Ops
const AssignmentAndIncrementOps: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 03 • Operators & Expressions"
      title="Assignment & Increment Mechanics"
      subtitle="Compound assignment shortcuts and prefix vs. postfix evaluation"
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
          borderRadius: 24,
          background: ink.panel,
          border: `2px solid ${ink.border}`,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        <span style={{ fontFamily: font.mono, fontSize: 22, fontWeight: 800, color: ink.sky }}>
          COMPOUND ASSIGNMENT
        </span>
        <div style={{ fontSize: 32, fontWeight: 800, color: ink.text }}>
          Concise Math Reassignments
        </div>
        <div
          style={{
            background: '#ffffff',
            borderRadius: 16,
            border: `1.5px solid ${ink.border}`,
            padding: 24,
            fontFamily: font.mono,
            fontSize: 24,
            lineHeight: 1.8,
            color: ink.soft,
          }}
        >
          <div>score += 10; // score = score + 10</div>
          <div>score -= 5;  // score = score - 5</div>
          <div>price *= 0.9;// price = price * 0.9</div>
          <div>count /= 2;  // count = count / 2</div>
        </div>
      </div>

      <div
        style={{
          padding: 38,
          borderRadius: 24,
          background: ink.panel,
          border: `2px solid ${ink.border}`,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        <span style={{ fontFamily: font.mono, fontSize: 22, fontWeight: 800, color: ink.amber }}>
          INCREMENT & DECREMENT
        </span>
        <div style={{ fontSize: 32, fontWeight: 800, color: ink.text }}>
          Postfix (i++) vs Prefix (++i)
        </div>
        <div
          style={{
            background: '#ffffff',
            borderRadius: 16,
            border: `1.5px solid ${ink.border}`,
            padding: 24,
            fontFamily: font.mono,
            fontSize: 24,
            lineHeight: 1.8,
            color: ink.soft,
          }}
        >
          <div>let a = 5; let b = a++; // b = 5, then a = 6</div>
          <div>let x = 5; let y = ++x; // x = 6, then y = 6</div>
          <div style={{ color: ink.dim, fontSize: 18 }}>
            *Rule: Keep increments on their own lines!
          </div>
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 18. Strict Equality vs Loose Equality (Enlarged & Filled)
const StrictEqualityVsLooseEquality: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 03 • Operators & Expressions"
      title="Strict Equality (===) vs. Loose Equality (==)"
      subtitle="Why === is non-negotiable in production and why == is forbidden"
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
          borderRadius: 24,
          background: ink.mintSoft,
          border: `2px solid ${ink.mint}55`,
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <IconCheck size={36} color={ink.mint} />
          <span style={{ fontSize: 30, fontWeight: 900, color: ink.mint }}>
            === STRICT EQUALITY (ALWAYS USE)
          </span>
        </div>
        <div style={{ fontSize: 24, fontWeight: 700, color: ink.soft }}>
          Checks both Type AND Value. Zero implicit type coercion!
        </div>
        <div
          style={{
            marginTop: 'auto',
            background: '#ffffff',
            borderRadius: 16,
            border: `1.5px solid ${ink.mint}44`,
            padding: 24,
            fontFamily: font.mono,
            fontSize: 24,
            lineHeight: 1.8,
            color: ink.soft,
          }}
        >
          <div>5 === 5; // true</div>
          <div>5 === "5"; // false (number !== string)</div>
          <div>0 === false; // false (number !== boolean)</div>
          <div>null === undefined; // false</div>
          <div>[1] === [1]; // false (different heap slots!)</div>
        </div>
      </div>

      <div
        style={{
          padding: 36,
          borderRadius: 24,
          background: ink.accentSoft,
          border: `2px solid ${ink.accentBorder}`,
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <IconAlert size={36} color={ink.accent} />
          <span style={{ fontSize: 30, fontWeight: 900, color: ink.accent }}>
            == LOOSE EQUALITY (FORBIDDEN)
          </span>
        </div>
        <div style={{ fontSize: 24, fontWeight: 700, color: ink.accent }}>
          Performs bizarre type coercion behind your back before comparing!
        </div>
        <div
          style={{
            marginTop: 'auto',
            background: '#ffffff',
            borderRadius: 16,
            border: `1.5px solid ${ink.accentBorder}`,
            padding: 24,
            fontFamily: font.mono,
            fontSize: 24,
            lineHeight: 1.8,
            color: ink.accent,
            fontWeight: 700,
          }}
        >
          <div>0 == ""; // true (Bizarre coercion!)</div>
          <div>0 == false; // true</div>
          <div>[] == false; // true</div>
          <div>null == undefined; // true</div>
          <div>"" == false; // true</div>
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 19. Restoring & Comparing References (Moved after equality!)
const RestoringAndComparingReferences: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 03 • Operators & Expressions"
      title="Restoring & Comparing References"
      subtitle="Why {} === {} evaluates to false, and what it means to restore a reference"
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
      <CodeWindow
        title="reference-restore.js"
        badge="Pointer Comparison"
        badgeColor={ink.indigo}
        fontSize={24}
        code={`let activeUser = { id: 1, name: "Ali" };
const initialRef = activeUser; // Cache #0x101

// 1. Reassigning breaks the pointer:
activeUser = { id: 2, name: "Zahra" }; // Now #0x202

// 2. Restoring the reference:
activeUser = initialRef; // Restored back to #0x101!

// 3. Comparing references:
console.log({} === {}); // FALSE! Different Heap addresses!
console.log(activeUser === initialRef); // TRUE! Identical #0x101`}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div
          style={{
            padding: 32,
            borderRadius: 20,
            background: ink.panel,
            border: `1.5px solid ${ink.border}`,
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 800, color: ink.text }}>
            Why does <code>&#123;&#125; === &#123;&#125;</code> return false?
          </div>
          <div style={{ fontSize: 22, color: ink.muted, marginTop: 10, lineHeight: 1.55 }}>
            Every time JavaScript executes <code>&#123;&#125;</code>, it allocates a brand-new slot
            in the Heap with its own unique memory address. <code>===</code> checks{' '}
            <strong>memory address identity</strong>, not visible property contents!
          </div>
        </div>

        <div
          style={{
            padding: 32,
            borderRadius: 20,
            background: ink.indigoSoft,
            border: `1.5px solid ${ink.indigo}44`,
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 800, color: ink.indigo }}>
            What is "Restoring a Reference"?
          </div>
          <div style={{ fontSize: 22, color: ink.soft, marginTop: 10, lineHeight: 1.55 }}>
            Restoring a reference means pointing a variable back to a previously cached memory
            pointer (like <code>initialRef</code>). It resets the variable to the exact original
            Heap object.
          </div>
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 20. Logical Operators Short-Circuit (Starkly Differentiating || and &&)
const LogicalOperatorsShortCircuit: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 03 • Operators & Expressions"
      title="Logical Operators: || vs. && (Short-Circuiting)"
      subtitle="|| finds the first truthy value; && finds the first falsy value"
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
          borderRadius: 24,
          background: ink.panel,
          border: `2px solid ${ink.sky}55`,
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 32, fontWeight: 900, color: ink.sky }}>
            || (OR) = THE FALLBACK
          </span>
          <span
            style={{
              padding: '6px 14px',
              borderRadius: 8,
              background: ink.skySoft,
              color: ink.sky,
              fontFamily: font.mono,
              fontSize: 18,
              fontWeight: 800,
            }}
          >
            FIRST TRUTHY
          </span>
        </div>
        <div style={{ fontSize: 24, color: ink.muted, lineHeight: 1.5 }}>
          Scans left to right. Stops and returns the <strong>first truthy value</strong> it hits.
          Used for default values:
        </div>
        <div
          style={{
            marginTop: 'auto',
            background: '#ffffff',
            borderRadius: 16,
            border: `1.5px solid ${ink.sky}44`,
            padding: 24,
            fontFamily: font.mono,
            fontSize: 23,
            lineHeight: 1.8,
            color: ink.soft,
          }}
        >
          <div>"" || "Anonymous"; // "Anonymous"</div>
          <div>"Sara" || "Anonymous"; // "Sara"</div>
          <div>null || undefined || "Guest"; // "Guest"</div>
        </div>
      </div>

      <div
        style={{
          padding: 36,
          borderRadius: 24,
          background: ink.panel,
          border: `2px solid ${ink.indigo}55`,
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 32, fontWeight: 900, color: ink.indigo }}>
            && (AND) = THE GATEKEEPER
          </span>
          <span
            style={{
              padding: '6px 14px',
              borderRadius: 8,
              background: ink.indigoSoft,
              color: ink.indigo,
              fontFamily: font.mono,
              fontSize: 18,
              fontWeight: 800,
            }}
          >
            FIRST FALSY
          </span>
        </div>
        <div style={{ fontSize: 24, color: ink.muted, lineHeight: 1.5 }}>
          Scans left to right. Stops and returns the <strong>first falsy value</strong>. Only reaches
          the end if everything is truthy:
        </div>
        <div
          style={{
            marginTop: 'auto',
            background: '#ffffff',
            borderRadius: 16,
            border: `1.5px solid ${ink.indigo}44`,
            padding: 24,
            fontFamily: font.mono,
            fontSize: 23,
            lineHeight: 1.8,
            color: ink.soft,
          }}
        >
          <div>false && inStock; // false (Stops immediately!)</div>
          <div>true && true && "Granted"; // "Granted"</div>
          <div>isLoggedIn && showDashboard(); // Guard!</div>
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ─── Part 4: Control Flow: Conditionals ────────────────────────────────────────

const Part4Divider: Page = () => (
  <ChapterDivider
    partNumber="04"
    title="Control Flow: Conditionals & Branching"
    subtitle="Decision trees, truthy vs. falsy values, ternary expressions, and guard clauses."
    icon={<IconGitBranch size={48} color={ink.indigo} />}
  />
);

// 22. Truthy & Falsy Values (Scaled Up & Filled)
const TruthyAndFalsyValues: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 04 • Control Flow"
      title="Truthy & Falsy: The 8 Falsy Values"
      subtitle="Any value not in this exact list of 8 is automatically truthy"
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
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 20,
        }}
      >
        {[
          { val: 'false', note: 'Boolean literal' },
          { val: '0 & -0', note: 'Numeric zeros' },
          { val: '0n', note: 'BigInt zero' },
          { val: '"" (empty string)', note: 'Zero characters' },
          { val: 'null', note: 'Intentional absence' },
          { val: 'undefined', note: 'Unassigned slot' },
          { val: 'NaN', note: 'Invalid math result' },
          { val: 'document.all', note: 'Browser quirk (historic)' },
        ].map((item, idx) => (
          <div
            key={idx}
            style={{
              padding: '20px 24px',
              borderRadius: 16,
              background: ink.panel,
              border: `1.5px solid ${ink.border}`,
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
            }}
          >
            <div style={{ fontFamily: font.mono, fontSize: 24, fontWeight: 800, color: ink.accent }}>
              {item.val}
            </div>
            <div style={{ fontSize: 20, color: ink.muted }}>{item.note}</div>
          </div>
        ))}
      </div>

      <div
        style={{
          padding: 40,
          borderRadius: 24,
          background: ink.skySoft,
          border: `2px solid ${ink.sky}44`,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        <div style={{ fontSize: 22, fontFamily: font.mono, fontWeight: 800, color: ink.sky }}>
          THE SURPRISE TRUTHY VALUES
        </div>
        <div style={{ fontSize: 34, fontWeight: 900, color: ink.text }}>
          Empty Objects and Arrays are TRUTHY!
        </div>
        <div style={{ fontSize: 24, color: ink.soft, lineHeight: 1.55 }}>
          Beginners frequently assume <code>[]</code> or <code>&#123;&#125;</code> evaluate to false.
          They do not!
        </div>
        <div
          style={{
            background: '#ffffff',
            borderRadius: 16,
            border: `1.5px solid ${ink.sky}44`,
            padding: 24,
            fontFamily: font.mono,
            fontSize: 24,
            lineHeight: 1.8,
            color: ink.soft,
          }}
        >
          <div>Boolean([]) === true;</div>
          <div>Boolean(&#123;&#125;) === true;</div>
          <div style={{ color: ink.dim, fontSize: 18 }}>
            *They are allocated heap references!
          </div>
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 23. If / Else Architecture
const IfElseArchitecture: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 04 • Control Flow"
      title="The if / else if / else Decision Tree"
      subtitle="Sequential branching evaluation with block-scoped execution"
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
      <CodeWindow
        title="branching.js"
        badge="Sequential Evaluation"
        badgeColor={ink.indigo}
        fontSize={24}
        code={`const grade = 82;

if (grade >= 90) {
  console.log("Grade: A (Honors)");
} else if (grade >= 80) {
  console.log("Grade: B (Proficient)"); // Executes!
} else if (grade >= 70) {
  console.log("Grade: C (Satisfactory)");
} else {
  console.log("Grade: Needs Improvement");
}`}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div
          style={{
            padding: 32,
            borderRadius: 20,
            background: ink.panel,
            border: `1.5px solid ${ink.border}`,
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 800, color: ink.text }}>
            Rule of Order Precedence
          </div>
          <div style={{ fontSize: 22, color: ink.muted, marginTop: 10, lineHeight: 1.55 }}>
            Conditions are evaluated top to bottom. As soon as a branch is truthy, its block
            executes and all subsequent branches are skipped. Place more restrictive checks first!
          </div>
        </div>

        <div
          style={{
            padding: 32,
            borderRadius: 20,
            background: ink.panel,
            border: `1.5px solid ${ink.border}`,
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 800, color: ink.text }}>
            Mandatory Curly Braces <code>&#123; &#125;</code>
          </div>
          <div style={{ fontSize: 22, color: ink.muted, marginTop: 10, lineHeight: 1.55 }}>
            Always wrap branch blocks in curly braces. Omitting braces causes famous security bugs
            when new lines are added later.
          </div>
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 24. The Ternary Operator (Moved after if/else!)
const TheTernaryOperator: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 04 • Control Flow"
      title="The Ternary Operator: Inline Decisions"
      subtitle="A concise inline alternative to if/else for simple variable assignments"
    />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1.15fr 1fr',
        gap: 40,
        flex: 1,
        alignItems: 'center',
      }}
    >
      <CodeWindow
        title="ternary.js"
        badge="Inline Expression"
        badgeColor={ink.mint}
        fontSize={24}
        code={`// Syntax: condition ? exprIfTrue : exprIfFalse

const score = 85;
const status = score >= 60 ? "Pass" : "Fail";

// Perfect for UI badge styles:
const badgeColor = isOnline ? "green" : "gray";

// ❌ ANTI-PATTERN: Nested Ternaries (Never do this!)
const tier = s > 90 ? "A" : s > 80 ? "B" : "C";`}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div
          style={{
            padding: 32,
            borderRadius: 20,
            background: ink.mintSoft,
            border: `1.5px solid ${ink.mint}44`,
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 800, color: ink.mint }}>
            When to Use the Ternary Operator
          </div>
          <div style={{ fontSize: 22, color: ink.soft, marginTop: 10, lineHeight: 1.55 }}>
            Use it when assigning a single value based on a condition without writing a verbose
            5-line <code>if/else</code> statement.
          </div>
        </div>

        <div
          style={{
            padding: 32,
            borderRadius: 20,
            background: ink.accentSoft,
            border: `1.5px solid ${ink.accentBorder}`,
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 800, color: ink.accent }}>
            The Golden Rule: Never Nest Ternaries
          </div>
          <div style={{ fontSize: 22, color: ink.soft, marginTop: 10, lineHeight: 1.55 }}>
            If you have more than 2 possible outcomes, use standard <code>if / else if</code> or a{' '}
            <code>switch</code> statement. Nested ternaries severely hurt code readability.
          </div>
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 25. Guard Clauses & Early Return (Scaled Up Code & Explanations)
const GuardClausesAndEarlyReturn: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 04 • Control Flow"
      title="Clean Code: The Guard Clause Pattern"
      subtitle="Eliminate the 'Pyramid of Doom' with flat, defensive early returns"
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
          borderRadius: 24,
          background: ink.accentSoft,
          border: `2px solid ${ink.accentBorder}`,
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <span style={{ fontSize: 22, fontFamily: font.mono, fontWeight: 800, color: ink.accent }}>
          ❌ AVOID: NESTED PYRAMID OF DOOM
        </span>
        <pre
          style={{
            margin: 0,
            background: '#ffffff',
            padding: 24,
            borderRadius: 16,
            fontFamily: font.mono,
            fontSize: 22,
            lineHeight: 1.6,
            color: ink.soft,
            flex: 1,
          }}
        >
          {`if (order) {
  if (order.items.length > 0) {
    if (order.isPaid) {
      status = "Processing";
    } else {
      status = "Payment required";
    }
  } else {
    status = "Cart empty";
  }
}`}
        </pre>
        <div style={{ fontSize: 20, color: ink.accent, fontWeight: 700 }}>
          🚨 4 levels of indentation. Difficult to read, debug, and maintain.
        </div>
      </div>

      <div
        style={{
          padding: 36,
          borderRadius: 24,
          background: ink.mintSoft,
          border: `2px solid ${ink.mint}55`,
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <span style={{ fontSize: 22, fontFamily: font.mono, fontWeight: 800, color: ink.mint }}>
          ✅ PREFERRED: LINEAR GUARD CLAUSES
        </span>
        <pre
          style={{
            margin: 0,
            background: '#ffffff',
            padding: 24,
            borderRadius: 16,
            fontFamily: font.mono,
            fontSize: 22,
            lineHeight: 1.6,
            color: ink.soft,
            flex: 1,
          }}
        >
          {`// 1. Check failure cases at top:
if (!order) return "No order";
if (order.items.length === 0) return "Cart empty";
if (!order.isPaid) return "Payment required";

// 2. Happy path stays completely flat!
return "Processing";`}
        </pre>
        <div style={{ fontSize: 20, color: ink.mint, fontWeight: 700 }}>
          ✨ Flat execution flow. Edge cases handled upfront.
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 26. Switch Case Statement
const SwitchCaseStatement: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 04 • Control Flow"
      title="Discrete Matching: switch / case"
      subtitle="Clean dispatching for exact discrete states and the critical break keyword"
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
      <CodeWindow
        title="switch-dispatch.js"
        badge="Discrete Dispatch"
        badgeColor={ink.indigo}
        fontSize={24}
        code={`const role = "editor";

switch (role) {
  case "admin":
    console.log("Full system access");
    break; // Stops fallthrough!
  case "editor":
    console.log("Content publishing access");
    break;
  case "viewer":
    console.log("Read-only access");
    break;
  default:
    console.log("Unrecognized user role");
}`}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div
          style={{
            padding: 32,
            borderRadius: 20,
            background: ink.panel,
            border: `1.5px solid ${ink.border}`,
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 800, color: ink.text }}>
            When to use <code>switch</code> over <code>if/else</code>
          </div>
          <div style={{ fontSize: 22, color: ink.muted, marginTop: 10, lineHeight: 1.55 }}>
            Use <code>switch</code> when comparing a single variable against 4 or more exact discrete
            values (e.g., HTTP status codes, user roles, order status).
          </div>
        </div>

        <div
          style={{
            padding: 32,
            borderRadius: 20,
            background: ink.accentSoft,
            border: `1.5px solid ${ink.accentBorder}`,
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 800, color: ink.accent }}>
            The <code>break</code> Keyword
          </div>
          <div style={{ fontSize: 22, color: ink.soft, marginTop: 10, lineHeight: 1.55 }}>
            Without <code>break</code>, execution falls through to the next case automatically!
            Always end each case block with <code>break</code>.
          </div>
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ─── Part 5: Control Flow: Iteration & Loops ──────────────────────────────────

const Part5Divider: Page = () => (
  <ChapterDivider
    partNumber="05"
    title="Control Flow: Iteration & Loops"
    subtitle="The DRY principle, the classic for loop, while loops, and modern collection traversal."
    icon={<IconRepeat size={48} color={ink.amber} />}
  />
);

// 28. Why We Loop
const WhyWeLoop: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 05 • Iteration & Loops"
      title="Why We Loop: The DRY Principle"
      subtitle="Don't Repeat Yourself: Transforming manual duplication into algorithmic iteration"
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
          borderRadius: 24,
          background: ink.panel,
          border: `2px solid ${ink.border}`,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        <span style={{ fontSize: 22, fontFamily: font.mono, fontWeight: 800, color: ink.dim }}>
          ❌ MANUAL DUPLICATION (BRITTLE)
        </span>
        <div style={{ fontSize: 28, fontWeight: 800, color: ink.text }}>
          What if we have 10,000 items?
        </div>
        <div
          style={{
            background: '#ffffff',
            borderRadius: 16,
            border: `1.5px solid ${ink.border}`,
            padding: 24,
            fontFamily: font.mono,
            fontSize: 22,
            lineHeight: 1.8,
            color: ink.muted,
          }}
        >
          <div>console.log(catalog[0]);</div>
          <div>console.log(catalog[1]);</div>
          <div>console.log(catalog[2]);</div>
          <div style={{ color: ink.dim }}>// 9,997 more lines of copy-paste!</div>
        </div>
      </div>

      <div
        style={{
          padding: 40,
          borderRadius: 24,
          background: ink.amberSoft,
          border: `2px solid ${ink.amber}55`,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        <span style={{ fontSize: 22, fontFamily: font.mono, fontWeight: 800, color: ink.amber }}>
          ✅ ALGORITHMIC LOOP (SCALABLE)
        </span>
        <div style={{ fontSize: 28, fontWeight: 800, color: ink.amber }}>
          Consistent 3-Line Execution
        </div>
        <div
          style={{
            background: '#ffffff',
            borderRadius: 16,
            border: `1.5px solid ${ink.amber}44`,
            padding: 24,
            fontFamily: font.mono,
            fontSize: 22,
            lineHeight: 1.8,
            color: ink.soft,
          }}
        >
          <div>for (let i = 0; i &lt; catalog.length; i++) &#123;</div>
          <div>&nbsp;&nbsp;console.log(catalog[i]);</div>
          <div>&#125;</div>
        </div>
        <div style={{ fontSize: 24, color: ink.soft, marginTop: 'auto', lineHeight: 1.5 }}>
          Works identically whether processing 3 items or 3,000,000 items.
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 29. Classic For Loop
const ClassicForLoop: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 05 • Iteration & Loops"
      title="Anatomy of the Classic for Loop"
      subtitle="Initialization, condition check, and step increment in one unified header"
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
      <CodeWindow
        title="for-anatomy.js"
        badge="3-Phase Engine"
        badgeColor={ink.amber}
        fontSize={24}
        code={`// for (initializer; condition; afterthought)

for (let i = 0; i < 4; i++) {
  console.log(\`Processing index: \${i}\`);
}

// Console Output:
// Processing index: 0
// Processing index: 1
// Processing index: 2
// Processing index: 3`}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {[
          {
            phase: '1. INITIALIZER',
            code: 'let i = 0',
            desc: 'Executes once before the loop starts. Sets up the counter variable.',
            color: ink.sky,
          },
          {
            phase: '2. CONDITION',
            code: 'i < 4',
            desc: 'Evaluated before every iteration. If true, block runs; if false, loop exits.',
            color: ink.amber,
          },
          {
            phase: '3. AFTERTHOUGHT',
            code: 'i++',
            desc: 'Executes after each iteration finishes. Advances the counter.',
            color: ink.mint,
          },
        ].map((item, idx) => (
          <div
            key={idx}
            style={{
              padding: 24,
              borderRadius: 16,
              background: ink.panel,
              border: `1.5px solid ${ink.border}`,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 20, fontFamily: font.mono, fontWeight: 800, color: item.color }}>
                {item.phase}
              </span>
              <code
                style={{
                  background: '#ffffff',
                  padding: '4px 12px',
                  borderRadius: 8,
                  border: `1px solid ${ink.border}`,
                  fontSize: 18,
                  fontWeight: 700,
                }}
              >
                {item.code}
              </code>
            </div>
            <div style={{ fontSize: 20, color: ink.muted, marginTop: 8, lineHeight: 1.5 }}>
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 30. While and Do While Loops
const WhileAndDoWhileLoops: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 05 • Iteration & Loops"
      title="Condition-Driven Loops: while & do...while"
      subtitle="When the number of iterations is unknown until runtime"
    />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1.15fr 1fr',
        gap: 40,
        flex: 1,
        alignItems: 'center',
      }}
    >
      <CodeWindow
        title="while-loops.js"
        badge="Condition Driven"
        badgeColor={ink.amber}
        fontSize={24}
        code={`// while: Checks condition FIRST:
let attempts = 0;
while (attempts < 3) {
  console.log(\`Attempt #\${attempts + 1}\`);
  attempts++; // Mandatory advancement!
}

// do...while: Executes AT LEAST ONCE:
let isConnecting = true;
do {
  console.log("Checking server...");
  isConnecting = checkConnection();
} while (isConnecting);`}
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
          <div style={{ fontSize: 26, fontWeight: 800, color: ink.accent }}>
            The Infinite Loop Trap
          </div>
          <div style={{ fontSize: 22, color: ink.soft, marginTop: 10, lineHeight: 1.55 }}>
            If you forget to advance the variable inside the <code>while</code> block, the condition
            never becomes false. The browser tab freezes at 100% CPU!
          </div>
        </div>

        <div
          style={{
            padding: 32,
            borderRadius: 20,
            background: ink.panel,
            border: `1.5px solid ${ink.border}`,
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 800, color: ink.text }}>
            When to use <code>for</code> vs <code>while</code>
          </div>
          <div style={{ fontSize: 22, color: ink.muted, marginTop: 10, lineHeight: 1.55 }}>
            Use <code>for</code> when you know how many times to repeat (like iterating an array).
            Use <code>while</code> when waiting for an external condition to change.
          </div>
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 31. Loop Control Break Continue
const LoopControlBreakContinue: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 05 • Iteration & Loops"
      title="Loop Control: break vs. continue"
      subtitle="Terminating early vs. skipping to the next iteration"
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
          borderRadius: 24,
          background: ink.panel,
          border: `2px solid ${ink.border}`,
          display: 'flex',
          flexDirection: 'column',
          gap: 18,
        }}
      >
        <span style={{ fontSize: 22, fontFamily: font.mono, fontWeight: 800, color: ink.accent }}>
          BREAK: IMMEDIATE EXIT
        </span>
        <div style={{ fontSize: 28, fontWeight: 800, color: ink.text }}>
          Stop the entire loop now
        </div>
        <pre
          style={{
            margin: 0,
            background: '#ffffff',
            padding: 22,
            borderRadius: 16,
            fontFamily: font.mono,
            fontSize: 22,
            lineHeight: 1.6,
            border: `1.5px solid ${ink.border}`,
          }}
        >
          {`for (const user of users) {
  if (user.id === targetId) {
    foundUser = user;
    break; // Target found, stop loop!
  }
}`}
        </pre>
        <div style={{ fontSize: 22, color: ink.muted, marginTop: 'auto', lineHeight: 1.5 }}>
          Saves CPU cycles by not inspecting remaining items once your search is complete.
        </div>
      </div>

      <div
        style={{
          padding: 36,
          borderRadius: 24,
          background: ink.panel,
          border: `2px solid ${ink.border}`,
          display: 'flex',
          flexDirection: 'column',
          gap: 18,
        }}
      >
        <span style={{ fontSize: 22, fontFamily: font.mono, fontWeight: 800, color: ink.sky }}>
          CONTINUE: SKIP ITERATION
        </span>
        <div style={{ fontSize: 28, fontWeight: 800, color: ink.text }}>
          Skip directly to the next item
        </div>
        <pre
          style={{
            margin: 0,
            background: '#ffffff',
            padding: 22,
            borderRadius: 16,
            fontFamily: font.mono,
            fontSize: 22,
            lineHeight: 1.6,
            border: `1.5px solid ${ink.border}`,
          }}
        >
          {`for (const product of products) {
  if (!product.inStock) {
    continue; // Skip out-of-stock item!
  }
  displayCard(product);
}`}
        </pre>
        <div style={{ fontSize: 22, color: ink.muted, marginTop: 'auto', lineHeight: 1.5 }}>
          Avoids deeply nesting the rest of the loop inside an <code>if</code> block.
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 32. Iterating Collections (for...of & Object.entries)
const IteratingCollections: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 05 • Iteration & Loops"
      title="Modern Traversal: for...of & Object.entries"
      subtitle="Clean, index-free iteration over arrays and object dictionaries"
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
          borderRadius: 24,
          background: ink.panel,
          border: `2px solid ${ink.border}`,
          display: 'flex',
          flexDirection: 'column',
          gap: 18,
        }}
      >
        <span style={{ fontSize: 22, fontFamily: font.mono, fontWeight: 800, color: ink.mint }}>
          FOR...OF (ARRAYS & ITERABLES)
        </span>
        <div style={{ fontSize: 28, fontWeight: 800, color: ink.text }}>
          Direct Value Traversal
        </div>
        <pre
          style={{
            margin: 0,
            background: '#ffffff',
            padding: 22,
            borderRadius: 16,
            fontFamily: font.mono,
            fontSize: 22,
            lineHeight: 1.6,
            border: `1.5px solid ${ink.border}`,
          }}
        >
          {`const colors = ["Red", "Green", "Blue"];

for (const color of colors) {
  console.log(color); // Direct value!
}`}
        </pre>
        <div style={{ fontSize: 22, color: ink.muted, lineHeight: 1.5 }}>
          No index counters, no <code>i++</code>, zero off-by-one errors.
        </div>
      </div>

      <div
        style={{
          padding: 36,
          borderRadius: 24,
          background: ink.panel,
          border: `2px solid ${ink.border}`,
          display: 'flex',
          flexDirection: 'column',
          gap: 18,
        }}
      >
        <span style={{ fontSize: 22, fontFamily: font.mono, fontWeight: 800, color: ink.purple }}>
          OBJECT.ENTRIES (OBJECT DICTIONARIES)
        </span>
        <div style={{ fontSize: 28, fontWeight: 800, color: ink.text }}>
          Key-Value Destructuring
        </div>
        <pre
          style={{
            margin: 0,
            background: '#ffffff',
            padding: 22,
            borderRadius: 16,
            fontFamily: font.mono,
            fontSize: 22,
            lineHeight: 1.6,
            border: `1.5px solid ${ink.border}`,
          }}
        >
          {`const car = { brand: "Toyota", year: 2024 };

for (const [key, val] of Object.entries(car)) {
  console.log(\`\${key} -> \${val}\`);
}`}
        </pre>
        <div style={{ fontSize: 22, color: ink.muted, lineHeight: 1.5 }}>
          Iterates safely over object properties without legacy prototype traps.
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ─── Part 6: Hands-on Lab & Socratic AI Challenge ──────────────────────────────

const Part6Divider: Page = () => (
  <ChapterDivider
    partNumber="06"
    title="Hands-on Lab & Socratic AI Challenge"
    subtitle="Applying memory models, operators, conditionals, and loops in real-world scenarios."
    icon={<IconTerminal size={48} color={ink.amber} />}
  />
);

// 34. Hands-on Lab Walkthrough
const HandsOnLabWalkthrough: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 06 • Hands-on Lab"
      title="Hands-on Lab: 3 Engineering Sprints"
      subtitle="50 minutes of console experimentation and algorithmic logic"
    />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 32,
        flex: 1,
        alignItems: 'stretch',
      }}
    >
      {[
        {
          sprint: 'SPRINT 1',
          time: '15 MIN',
          title: 'Memory Reference Experiment',
          tasks: [
            'Create a catalogItem object in Console.',
            'Assign cartItem = catalogItem.',
            'Mutate cartItem.price = 9.99.',
            'Observe catalogItem corruption in DevTools.',
            'Fix using spread clone { ...catalogItem }.',
          ],
          color: ink.accent,
        },
        {
          sprint: 'SPRINT 2',
          time: '20 MIN',
          title: 'Cart Modeling & Subtotal',
          tasks: [
            'Create an array of 3 product objects.',
            'Use a for...of loop to accumulate subtotal.',
            'Multiply price * quantity for each item.',
            'Add check for empty or invalid cart array.',
            'Log formatted currency total.',
          ],
          color: ink.sky,
        },
        {
          sprint: 'SPRINT 3',
          time: '15 MIN',
          title: 'Defensive Discount Rules',
          tasks: [
            'Implement discount branching with if/else.',
            'Apply 10% discount if coupon === "SAVE10".',
            'Use ternary for member free shipping.',
            'Flatten logic using linear Guard Clauses.',
            'Inspect final cart state in console.',
          ],
          color: ink.mint,
        },
      ].map((card, idx) => (
        <div
          key={idx}
          style={{
            padding: 34,
            borderRadius: 22,
            background: ink.panel,
            border: `2px solid ${card.color}44`,
            display: 'flex',
            flexDirection: 'column',
            gap: 18,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 22, fontFamily: font.mono, fontWeight: 800, color: card.color }}>
              {card.sprint}
            </span>
            <span
              style={{
                fontFamily: font.mono,
                fontSize: 16,
                fontWeight: 700,
                color: card.color,
                background: `${card.color}18`,
                padding: '6px 12px',
                borderRadius: 8,
              }}
            >
              {card.time}
            </span>
          </div>
          <div style={{ fontSize: 28, fontWeight: 800, color: ink.text }}>{card.title}</div>
          <ul
            style={{
              margin: 0,
              paddingLeft: 24,
              fontSize: 21,
              color: ink.muted,
              lineHeight: 1.6,
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            {card.tasks.map((task, tIdx) => (
              <li key={tIdx}>{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <SlideFooter />
  </div>
);

// 35. Socratic AI Challenge
const SocraticAiChallenge: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 06 • Socratic AI Challenge"
      title="The Socratic AI Tutor Challenge"
      subtitle="Interrogate your AI assistant to stress-test your memory mental models"
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
          padding: 38,
          borderRadius: 24,
          background: ink.panel,
          border: `2px solid ${ink.border}`,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        <span style={{ fontSize: 22, fontFamily: font.mono, fontWeight: 800, color: ink.indigo }}>
          CHALLENGE PROMPT 01
        </span>
        <div style={{ fontSize: 32, fontWeight: 800, color: ink.text }}>
          The Memory Address Metaphor
        </div>
        <div
          style={{
            background: '#ffffff',
            borderRadius: 16,
            border: `1.5px solid ${ink.border}`,
            padding: 24,
            fontSize: 24,
            lineHeight: 1.6,
            color: ink.soft,
            fontStyle: 'italic',
          }}
        >
          "I have two variables: <code>const a = &#123; role: 'admin' &#125;;</code> and{' '}
          <code>const b = &#123; role: 'admin' &#125;;</code>. Explain to me as if I am 12 years old
          why <code>a === b</code> is false, but <code>a.role === b.role</code> is true. Use the
          labeled box and house address metaphor."
        </div>
        <div style={{ fontSize: 22, color: ink.muted, marginTop: 'auto', lineHeight: 1.5 }}>
          Evaluate whether the AI correctly explains that variables store pointers, not object
          contents.
        </div>
      </div>

      <div
        style={{
          padding: 38,
          borderRadius: 24,
          background: ink.panel,
          border: `2px solid ${ink.border}`,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        <span style={{ fontSize: 22, fontFamily: font.mono, fontWeight: 800, color: ink.accent }}>
          CHALLENGE PROMPT 02
        </span>
        <div style={{ fontSize: 32, fontWeight: 800, color: ink.text }}>
          Guard Clause Refactoring Drill
        </div>
        <div
          style={{
            background: '#ffffff',
            borderRadius: 16,
            border: `1.5px solid ${ink.border}`,
            padding: 24,
            fontSize: 24,
            lineHeight: 1.6,
            color: ink.soft,
            fontStyle: 'italic',
          }}
        >
          "Here is a 4-level nested JavaScript if/else block. Show me how to refactor it into
          linear guard clauses with early returns, and explain why guard clauses make code easier to
          debug in production."
        </div>
        <div style={{ fontSize: 22, color: ink.muted, marginTop: 'auto', lineHeight: 1.5 }}>
          Practice identifying code smells and verifying that edge cases return immediately.
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// 36. Session Summary & Bridge
const SessionSummaryAndBridge: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Summary & Next Steps"
      title="Session 06 Recap & The Bridge to Session 07"
      subtitle="Connecting computational memory to reusable functions and DOM updates"
    />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 1fr',
        gap: 40,
        flex: 1,
        alignItems: 'stretch',
      }}
    >
      <div
        style={{
          padding: 38,
          borderRadius: 24,
          background: ink.panel,
          border: `2px solid ${ink.border}`,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        <span style={{ fontSize: 22, fontFamily: font.mono, fontWeight: 800, color: ink.accent }}>
          TODAY'S MILESTONES MASTERED
        </span>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 16,
            fontSize: 22,
            color: ink.soft,
          }}
        >
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <span style={{ color: ink.mint, fontWeight: 900 }}>✓</span> Stack vs Heap Memory
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <span style={{ color: ink.mint, fontWeight: 900 }}>✓</span> Copy Value vs Reference
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <span style={{ color: ink.mint, fontWeight: 900 }}>✓</span> The const Mutation Paradox
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <span style={{ color: ink.mint, fontWeight: 900 }}>✓</span> Objects & Arrays Deep Dive
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <span style={{ color: ink.mint, fontWeight: 900 }}>✓</span> Strict Equality (===)
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <span style={{ color: ink.mint, fontWeight: 900 }}>✓</span> Reference Comparisons
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <span style={{ color: ink.mint, fontWeight: 900 }}>✓</span> Short-Circuit (|| vs &&)
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <span style={{ color: ink.mint, fontWeight: 900 }}>✓</span> The 8 Falsy Values
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <span style={{ color: ink.mint, fontWeight: 900 }}>✓</span> Ternary & Guard Clauses
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <span style={{ color: ink.mint, fontWeight: 900 }}>✓</span> for, while & for...of
          </div>
        </div>
      </div>

      <div
        style={{
          padding: 38,
          borderRadius: 24,
          background: ink.mintSoft,
          border: `2px solid ${ink.mint}55`,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        <span style={{ fontSize: 22, fontFamily: font.mono, fontWeight: 800, color: ink.mint }}>
          COMING UP IN SESSION 07
        </span>
        <div style={{ fontSize: 32, fontWeight: 900, color: ink.mint }}>
          Functions & The Live DOM Bridge
        </div>
        <div style={{ fontSize: 24, color: ink.soft, lineHeight: 1.55 }}>
          In Session 07, we will package our logic into reusable <strong>Functions</strong> and connect
          JavaScript memory directly to the screen using <code>document.querySelector</code>!
        </div>
        <div
          style={{
            marginTop: 'auto',
            background: '#ffffff',
            borderRadius: 16,
            border: `1.5px solid ${ink.mint}44`,
            padding: 20,
            fontFamily: font.mono,
            fontSize: 22,
            color: ink.soft,
            fontWeight: 700,
          }}
        >
          Functions ──► DOM API ──► Live Web UI
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ─── Presenter Speaker Notes (Index-Aligned with 36 Pages) ────────────────────

export const notes: (string | undefined)[] = [
  // 01. Cover
  'Welcome students to Session 06! Today we demystify Stack vs Heap memory, non-primitives, operators, conditionals, and loops.',

  // 02. Agenda
  'Review the 6 core pillars today: Memory model, non-primitives, operators, conditionals, loops, and the hands-on lab.',

  // 03. Part 1 Divider
  'Part 1: The Memory Mental Model. Let us explore computer RAM to understand how variables and memory addresses work.',

  // 04. Stack vs Heap Architecture
  'Contrast the Call Stack with the Memory Heap. Explain that primitives live directly in stack slots, while objects reside in the expansive heap.',

  // 05. Primitive Storage By Value
  'Walk through scoreA and scoreB. Emphasize that copying a primitive duplicates the raw value into a completely independent slot.',

  // 06. Non-Primitive Storage By Reference
  'Introduce the remote control metaphor. Emphasize that userA and userB hold the exact same pointer address #0x7A4F.',

  // 07. The Reference Mutation Trap
  'Demonstrate the mutation hazard: modifying userB silently mutates userA! Mention real-world catalog bugs caused by this.',

  // 08. Reassignment vs Mutation
  'Answer the Session 05 question: const locks the stack pointer slot. Modifying properties mutates the heap, which is permitted.',

  // 09. Cloning vs Referencing
  'Show students how to break the pointer link safely using spread syntax {...obj} and [...arr] for shallow copies.',

  // 10. Part 2 Divider
  'Part 2: Non-Primitives in Depth: Objects and Arrays. The core data structures of the web.',

  // 11. Objects Contact Card
  'Review the contact card metaphor. Show dot notation vs bracket notation for dynamic keys, and adding/deleting properties.',

  // 12. Arrays Ice Cube Tray
  'Review the ice cube tray metaphor. Show zero-based indexing, length, and the modern arr.at(-1) syntax.',

  // 13. Array Methods Arsenal
  'Distinguish mutating methods (push, pop, shift, unshift) from safe query methods (includes, indexOf, slice).',

  // 14. Arrays of Objects Real World
  'Show how web platforms (Netflix, Amazon, Spotify) structure data as arrays of objects, and loop through to calculate totals.',

  // 15. Part 3 Divider
  'Part 3: JavaScript Operators and Expressions. The grammatical toolkit for math, comparisons, and logic.',

  // 16. Arithmetic & String Operators
  'Cover arithmetic operators, modulo, and highlight the classic string concatenation trap with "10" + 5.',

  // 17. Assignment & Increment Ops
  'Review compound assignments (+=, *=) and advise students to keep increments on their own lines.',

  // 18. Strict Equality vs Loose Equality
  'Drill the golden rule: ALWAYS use strict equality ===. Show why == is dangerous due to implicit coercion quirks.',

  // 19. Restoring & Comparing References
  'Explain why {} === {} evaluates to false (different heap addresses), and what it means to restore a cached reference.',

  // 20. Logical Operators Short-Circuit
  'Clearly contrast || (the fallback machine seeking first truthy) with && (the gatekeeper seeking first falsy).',

  // 21. Part 4 Divider
  'Part 4: Control Flow: Conditionals and Branching. Directing execution flow defensively.',

  // 22. Truthy & Falsy Values
  'List the exact 8 falsy values. Point out the surprise: empty arrays and objects are TRUTHY because they are heap references.',

  // 23. If / Else Architecture
  'Explain sequential evaluation order in if/else if trees, and remind students that curly braces are mandatory for clean code.',

  // 24. The Ternary Operator
  'Demonstrate ternary operators for clean inline 1-line decisions, and warn against the anti-pattern of nesting ternaries.',

  // 25. Guard Clauses & Early Return
  'Compare the Pyramid of Doom with flat Guard Clauses. Show how checking failure conditions at the top keeps code clean and readable.',

  // 26. Switch Case Statement
  'Explain switch statements for matching discrete states, and emphasize the essential role of the break keyword to prevent fallthrough.',

  // 27. Part 5 Divider
  'Part 5: Control Flow: Iteration and Loops. Automating repetitive tasks and applying the DRY principle.',

  // 28. Why We Loop
  'Illustrate the DRY principle: Don’t Repeat Yourself. Loops turn thousands of lines of copy-pasted code into 3 clean lines.',

  // 29. Classic For Loop
  'Break down the 3 phases of the for loop: initializer, condition check, and afterthought increment.',

  // 30. While and Do While Loops
  'Contrast for loops with while loops, and warn students about the infinite loop trap when the counter is not advanced.',

  // 31. Loop Control Break Continue
  'Contrast break (emergency exit from the loop) with continue (skipping to the next iteration).',

  // 32. Iterating Collections
  'Demonstrate modern for...of for arrays and Object.entries() for dictionaries, avoiding legacy for...in prototype traps.',

  // 33. Part 6 Divider
  'Part 6: Hands-on Lab and Socratic AI Challenge. Time to put everything into practice in the DevTools console.',

  // 34. Hands-on Lab Walkthrough
  'Guide students through the 3 sprints: Console mutation proof, cart subtotal calculation, and defensive discount processing.',

  // 35. Socratic AI Challenge
  'Have students prompt their AI assistant with the memory address challenge and practice explaining pointers in plain English.',

  // 36. Session Summary & Bridge
  'Recap today’s 10 major milestones and preview Session 07: Functions and connecting JavaScript memory to the live Browser DOM!',
];

// ─── Slide Meta & Export Default ──────────────────────────────────────────────

export const meta: SlideMeta = {
  title: 'Session 06: Non-Primitives, Memory References & Control Flow',
  createdAt: '2026-11-06T18:54:20.936Z',
  theme: 'open-slide-default',
};

export default [
  Cover,
  Agenda,
  Part1Divider,
  StackVsHeapArchitecture,
  PrimitiveStorageByValue,
  NonPrimitiveStorageByReference,
  TheReferenceMutationTrap,
  ReassignmentVsMutation,
  CloningVsReferencing,
  Part2Divider,
  ObjectsContactCard,
  ArraysIceCubeTray,
  ArrayMethodsArsenal,
  ArraysOfObjectsRealWorld,
  Part3Divider,
  ArithmeticAndStringOperators,
  AssignmentAndIncrementOps,
  StrictEqualityVsLooseEquality,
  RestoringAndComparingReferences,
  LogicalOperatorsShortCircuit,
  Part4Divider,
  TruthyAndFalsyValues,
  IfElseArchitecture,
  TheTernaryOperator,
  GuardClausesAndEarlyReturn,
  SwitchCaseStatement,
  Part5Divider,
  WhyWeLoop,
  ClassicForLoop,
  WhileAndDoWhileLoops,
  LoopControlBreakContinue,
  IteratingCollections,
  Part6Divider,
  HandsOnLabWalkthrough,
  SocraticAiChallenge,
  SessionSummaryAndBridge,
] satisfies Page[];
