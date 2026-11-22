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

const IconZap = ({ size = 36, color = ink.accent }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </Svg>
);

const IconMouse = ({ size = 36, color = ink.sky }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <rect x="6" y="3" width="12" height="18" rx="6" />
    <line x1="12" y1="7" x2="12" y2="11" />
  </Svg>
);

const IconKeyboard = ({ size = 36, color = ink.purple }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <line x1="6" y1="8" x2="6" y2="8" />
    <line x1="10" y1="8" x2="10" y2="8" />
    <line x1="14" y1="8" x2="14" y2="8" />
    <line x1="18" y1="8" x2="18" y2="8" />
    <line x1="6" y1="12" x2="6" y2="12" />
    <line x1="10" y1="12" x2="10" y2="12" />
    <line x1="14" y1="12" x2="14" y2="12" />
    <line x1="18" y1="12" x2="18" y2="12" />
    <line x1="7" y1="16" x2="17" y2="16" />
  </Svg>
);

const IconCpu = ({ size = 36, color = ink.amber }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
  </Svg>
);

const IconLayers = ({ size = 36, color = ink.indigo }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
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
    <path d="M20 6L9 17l-5-5" />
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

const IconRefresh = ({ size = 36, color = ink.sky }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </Svg>
);

const IconBox = ({ size = 36, color = ink.amber }: { size?: number; color?: string }) => (
  <Svg size={size} color={color}>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </Svg>
);

// ─── Header & Footer ──────────────────────────────────────────────────────────

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
      marginBottom: 24,
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
          fontSize: 18,
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
          fontSize: 56,
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
    <footer
      style={{
        marginTop: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 16,
        borderTop: `1px solid ${ink.border}`,
        fontFamily: font.mono,
        fontSize: 16,
        color: ink.dim,
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: ink.accent }} />
        <span>Open-Slide Workshop · Session 08: Event-Driven Programming</span>
      </div>
      <div>
        Page {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </div>
    </footer>
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
    /(\b(?:function|return|const|let|var|if|else|switch|case|break|continue|default|for|of|in|while|do|typeof|true|false|null|undefined|document|window|addEventListener|removeEventListener|preventDefault|stopPropagation|target|currentTarget|value|classList|textContent|style)\b|\b\d+(?:\.\d+)?\b|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|[{}()[\].,;:?]|===|!==|==|!=|=>|<=|>=|&&|\|\||\+\+|--|[+\-*\/%!=<>])/g
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
    if (/^(?:document|window|addEventListener|removeEventListener|preventDefault|stopPropagation)$/.test(part)) {
      return (
        <span key={index} style={{ color: '#d2a8ff', fontWeight: 700 }}>
          {part}
        </span>
      );
    }
    if (/^(?:target|currentTarget|value|classList|textContent|style)$/.test(part)) {
      return (
        <span key={index} style={{ color: '#ffa657', fontWeight: 600 }}>
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
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f56' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#27c93f' }} />
          <span
            style={{
              marginLeft: 12,
              fontFamily: font.mono,
              fontSize: 14,
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
              padding: '3px 10px',
              borderRadius: 999,
              background: badgeColor,
              color: '#ffffff',
              fontSize: 12,
              fontFamily: font.mono,
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            {badge}
          </span>
        )}
      </div>
      <pre
        style={{
          margin: 0,
          padding: '20px 24px',
          fontFamily: font.mono,
          fontSize,
          lineHeight: 1.55,
          overflowX: 'hidden',
        }}
      >
        <code>
          {lines.map((line, i) => (
            <div key={i} style={{ display: 'flex', minHeight: '1.55em' }}>
              <span
                style={{
                  width: 38,
                  userSelect: 'none',
                  color: '#484f58',
                  textAlign: 'right',
                  paddingRight: 18,
                  fontSize: fontSize - 3,
                  flexShrink: 0,
                }}
              >
                {i + 1}
              </span>
              <span style={{ flex: 1, whiteSpace: 'pre' }}>{renderCodeLine(line)}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
};

// ─── Chapter Divider Helper ───────────────────────────────────────────────────

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
          fontSize: 88,
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
                fontFamily: font.mono,
              }}
            >
              {i + 1}
            </div>
            <span style={{ fontSize: 22, fontWeight: 600, color: ink.soft, lineHeight: 1.35 }}>
              {b}
            </span>
          </div>
        ))}
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ─── 01. Cover Slide ──────────────────────────────────────────────────────────

const Cover: Page = () => (
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
          gap: 14,
          padding: '10px 22px',
          borderRadius: 999,
          background: ink.accentSoft,
          border: `1.5px solid ${ink.accentBorder}`,
          alignSelf: 'flex-start',
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
        <span
          style={{
            fontSize: 20,
            fontWeight: 800,
            color: ink.accent,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          Phase 2 · JavaScript Fundamentals & Dynamic Actions
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <h1
          style={{
            fontSize: 92,
            fontWeight: 900,
            fontFamily: font.display,
            color: ink.text,
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
            margin: 0,
          }}
        >
          Event-Driven Programming:
          <br />
          <span style={{ color: ink.accent }}>Clicks, Inputs &amp; State</span>
        </h1>
        <p
          style={{
            fontSize: 34,
            color: ink.muted,
            lineHeight: 1.45,
            margin: 0,
            maxWidth: 1300,
          }}
        >
          Transforming static DOM documents into dynamic, reactive user experiences with modern
          event listeners, the browser event loop, and in-memory state models.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 24,
          marginTop: 20,
        }}
      >
        {[
          { label: 'Time Allocation', val: '2 Hours (45m Theory + 55m Lab)', icon: <IconCpu size={28} color={ink.sky} /> },
          { label: 'Core Mechanism', val: 'element.addEventListener()', icon: <IconMouse size={28} color={ink.accent} /> },
          { label: 'State Model', val: 'Memory Drives The View', icon: <IconBox size={28} color={ink.amber} /> },
          { label: 'Deliverable', val: 'Interactive Counter & Theme Hub', icon: <IconSparkles size={28} color={ink.purple} /> },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              background: ink.panel,
              border: `1px solid ${ink.border}`,
              borderRadius: 16,
              padding: '24px 26px',
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              boxShadow: shadow.card,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              {item.icon}
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: ink.dim,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  fontFamily: font.mono,
                }}
              >
                {item.label}
              </span>
            </div>
            <span style={{ fontSize: 24, fontWeight: 800, color: ink.text }}>{item.val}</span>
          </div>
        ))}
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ─── 02. Agenda Slide ─────────────────────────────────────────────────────────

const Agenda: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Session Overview"
      title="Workshop Agenda & Milestones"
      subtitle="A 2-hour systematic journey from synchronous scripts to interactive web applications"
    />
    <div
      style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(2, 1fr)',
        gap: 24,
      }}
    >
      {[
        {
          num: '01',
          title: 'The Event-Driven Mental Model',
          time: '20 min',
          desc: 'How the browser pauses, listens, and executes code via the Event Loop and Callback Queue.',
          color: ink.sky,
        },
        {
          num: '02',
          title: 'addEventListener & The Callback Contract',
          time: '20 min',
          desc: 'The Doorman Metaphor, event type arsenal, named handlers vs anonymous closures, and unbinding.',
          color: ink.accent,
        },
        {
          num: '03',
          title: 'The Event Object & Propagation',
          time: '20 min',
          desc: 'Inspecting e.target, e.preventDefault(), bubbling flow, and high-performance Event Delegation.',
          color: ink.purple,
        },
        {
          num: '04',
          title: 'UI State: Memory Drives The View',
          time: '20 min',
          desc: 'Why the DOM is a reflection, not a database. Unidirectional State -> Render loop architecture.',
          color: ink.amber,
        },
        {
          num: '05',
          title: 'Live Inputs & Form Controls',
          time: '15 min',
          desc: 'Reading input.value in real-time, input vs change events, live character counters, and form validation.',
          color: ink.mint,
        },
        {
          num: '06',
          title: 'Hands-on Lab & Homework Showcase',
          time: '25 min',
          desc: 'Building the Interactive Click Counter & Theme Switcher from scratch, followed by project briefs.',
          color: ink.indigo,
        },
      ].map((item, i) => (
        <div
          key={i}
          style={{
            background: ink.panel,
            border: `1px solid ${ink.border}`,
            borderRadius: 18,
            padding: '28px 30px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: shadow.card,
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 16,
              }}
            >
              <span
                style={{
                  fontSize: 28,
                  fontWeight: 900,
                  fontFamily: font.mono,
                  color: item.color,
                }}
              >
                {item.num}
              </span>
              <span
                style={{
                  padding: '4px 12px',
                  borderRadius: 999,
                  background: 'rgba(0,0,0,0.04)',
                  border: `1px solid ${ink.border}`,
                  fontSize: 14,
                  fontWeight: 700,
                  fontFamily: font.mono,
                  color: ink.muted,
                }}
              >
                {item.time}
              </span>
            </div>
            <h3
              style={{
                fontSize: 26,
                fontWeight: 800,
                color: ink.text,
                margin: '0 0 10px 0',
                lineHeight: 1.25,
              }}
            >
              {item.title}
            </h3>
            <p style={{ fontSize: 20, color: ink.muted, lineHeight: 1.45, margin: 0 }}>
              {item.desc}
            </p>
          </div>
          <div
            style={{
              height: 4,
              width: '100%',
              borderRadius: 2,
              background: `linear-gradient(90deg, ${item.color}, transparent)`,
              marginTop: 18,
            }}
          />
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
    title="The Event-Driven Mental Model"
    subtitle="How browsers wait, listen, and dispatch execution when human users interact with the screen"
    bullets={[
      'Procedural execution vs asynchronous event dispatch',
      'The Browser Event Loop, Call Stack & Task Queue',
      'Single-threaded execution without freezing the UI',
    ]}
    icon={<IconZap size={36} color={ink.accent} />}
  />
);

// ─── 04. Sync vs Event-Driven ─────────────────────────────────────────────────

const SyncVsEventDriven: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 01 · Mental Models"
      title="Synchronous Script vs Event-Driven Reactivity"
      subtitle="Moving from top-to-bottom procedural code to reactive event subscription"
    />
    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div
          style={{
            padding: '16px 20px',
            borderRadius: 12,
            background: ink.skySoft,
            border: `1px solid ${ink.sky}`,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <IconCpu size={28} color={ink.sky} />
          <span style={{ fontSize: 20, fontWeight: 700, color: ink.sky }}>
            Synchronous Code: Linear & Immediate
          </span>
        </div>
        <p style={{ fontSize: 22, color: ink.muted, lineHeight: 1.45, margin: 0 }}>
          Code runs top-to-bottom upon page load. Once line 10 finishes, JavaScript exits. If no
          listeners were registered, the page remains completely inert.
        </p>
        <CodeWindow
          title="procedural.js"
          badge="Runs Once on Load"
          badgeColor={ink.sky}
          code={`console.log("1. Page loading starts");

const title = document.querySelector("#title");
title.textContent = "Welcome to the Store!";

console.log("2. Setup complete. Script ends.");
// The JS runtime is now idle.`}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div
          style={{
            padding: '16px 20px',
            borderRadius: 12,
            background: ink.accentSoft,
            border: `1px solid ${ink.accent}`,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <IconZap size={28} color={ink.accent} />
          <span style={{ fontSize: 20, fontWeight: 700, color: ink.accent }}>
            Event-Driven Code: Asynchronous & Reactive
          </span>
        </div>
        <p style={{ fontSize: 22, color: ink.muted, lineHeight: 1.45, margin: 0 }}>
          Instead of running immediately, we register a <strong>Callback Function</strong> that
          sleeps in memory until the browser fires a designated event.
        </p>
        <CodeWindow
          title="reactive.js"
          badge="Listens Forever"
          badgeColor={ink.accent}
          code={`const btn = document.querySelector("#buy-btn");

// We subscribe to human intent:
btn.addEventListener("click", function() {
  console.log("User clicked buy! Processing item...");
});

console.log("Listener registered. Ready for clicks.");`}
        />
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ─── 05. The Browser Event Loop Architecture ──────────────────────────────────

const EventLoopArchitecture: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 01 · Runtime Architecture"
      title="The Browser Event Loop Demystified"
      subtitle="How the single-threaded V8 engine coordinates with browser Web APIs to handle clicks"
    />
    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 32 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div
          style={{
            background: ink.panel,
            border: `1px solid ${ink.border}`,
            borderRadius: 16,
            padding: '24px 28px',
            boxShadow: shadow.card,
          }}
        >
          <h4 style={{ fontSize: 24, fontWeight: 800, margin: '0 0 12px 0', color: ink.text }}>
            The 4 Runtime Components:
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              {
                name: '1. Call Stack',
                desc: 'Executes synchronous JavaScript frames (LIFO). Only one function runs at any given microsecond.',
                tag: 'Single Thread',
                color: ink.accent,
              },
              {
                name: '2. Web APIs (Browser)',
                desc: 'C++ background threads in Chrome/Safari that monitor hardware events (mouse clicks, network, timers).',
                tag: 'Multi-Threaded Host',
                color: ink.sky,
              },
              {
                name: '3. Task Queue (Callback Queue)',
                desc: 'Holding pen (FIFO) where completed click callbacks wait until the Call Stack becomes completely empty.',
                tag: 'Buffer Queue',
                color: ink.amber,
              },
              {
                name: '4. The Event Loop Tick',
                desc: 'An infinite loop constantly checking: "Is the Call Stack empty? If YES, push the first waiting task onto it!"',
                tag: 'Coordinator',
                color: ink.mint,
              },
            ].map((c, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 14,
                  padding: '12px 16px',
                  background: '#ffffff',
                  borderRadius: 12,
                  border: `1px solid ${ink.border}`,
                }}
              >
                <span
                  style={{
                    padding: '3px 8px',
                    borderRadius: 6,
                    background: `${c.color}15`,
                    color: c.color,
                    fontFamily: font.mono,
                    fontSize: 12,
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {c.tag}
                </span>
                <div>
                  <strong style={{ fontSize: 18, color: ink.text }}>{c.name}: </strong>
                  <span style={{ fontSize: 18, color: ink.muted }}>{c.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <CodeWindow
          title="event-loop-trace.js"
          badge="Execution Order"
          badgeColor={ink.indigo}
          fontSize={19}
          code={`console.log("A. Script starts");

const btn = document.querySelector("#save-btn");

btn.addEventListener("click", () => {
  console.log("C. Button callback fired!");
});

console.log("B. Script finishes");

// Output when page loads:
// "A. Script starts"
// "B. Script finishes"

// Output later when user clicks button:
// "C. Button callback fired!"`}
        />
        <div
          style={{
            background: ink.mintSoft,
            border: `1.5px solid ${ink.mint}`,
            borderRadius: 14,
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: 14,
          }}
        >
          <IconCheck size={28} color={ink.mint} />
          <span style={{ fontSize: 18, color: ink.soft, lineHeight: 1.4 }}>
            <strong>Key Insight:</strong> JavaScript never polls in an expensive loop. The browser
            host manages listener registrations and alerts JS only when events occur.
          </span>
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ─── 06. Single-Threaded Non-Blocking Reality ─────────────────────────────────

const SingleThreadedNonBlocking: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 01 · Runtime Architecture"
      title="Single-Threaded & Non-Blocking Reality"
      subtitle="Why heavy synchronous loops freeze the UI while event callbacks keep the web responsive"
    />
    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div
          style={{
            padding: '16px 20px',
            borderRadius: 12,
            background: ink.accentSoft,
            border: `1.5px solid ${ink.accent}`,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <IconAlert size={28} color={ink.accent} />
          <span style={{ fontSize: 20, fontWeight: 700, color: ink.accent }}>
            The Danger: Blocking the Call Stack
          </span>
        </div>
        <p style={{ fontSize: 22, color: ink.muted, lineHeight: 1.45, margin: 0 }}>
          If synchronous code runs a massive calculation or infinite loop, the Call Stack never
          empties. The browser cannot paint, scroll, or process user clicks.
        </p>
        <CodeWindow
          title="blocking-bad.js"
          badge="Freezes Browser"
          badgeColor={ink.accent}
          code={`// ❌ DISASTER: Blocks Call Stack for 5 seconds
function sleep(ms) {
  const start = Date.now();
  while (Date.now() - start < ms) {
    // Doing nothing, burning CPU cycles!
  }
}

sleep(5000); // UI completely freezes!
// User clicks are ignored and dropped.`}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div
          style={{
            padding: '16px 20px',
            borderRadius: 12,
            background: ink.mintSoft,
            border: `1.5px solid ${ink.mint}`,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <IconCheck size={28} color={ink.mint} />
          <span style={{ fontSize: 20, fontWeight: 700, color: ink.mint }}>
            The Solution: Event Delegation & Callbacks
          </span>
        </div>
        <p style={{ fontSize: 22, color: ink.muted, lineHeight: 1.45, margin: 0 }}>
          Event callbacks are lightweight. They execute rapidly and yield the Call Stack back to the
          browser so the UI renders smoothly at 60 frames per second.
        </p>
        <CodeWindow
          title="non-blocking-good.js"
          badge="Responsive & Fast"
          badgeColor={ink.mint}
          code={`// ✅ CORRECT: Fast, reactive callback
const submitBtn = document.querySelector("#submit");

submitBtn.addEventListener("click", () => {
  // Quick validation & state update
  saveUserData(); 
  // Finishes in < 2ms, Stack yields immediately!
});`}
        />
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ─── 07. Part 2 Divider ───────────────────────────────────────────────────────

const Part2Divider: Page = () => (
  <ChapterDivider
    num="02"
    title="addEventListener & The Callback Contract"
    subtitle="The universal web standard for binding user actions to JavaScript execution"
    bullets={[
      'The Doorman Metaphor and syntax anatomy',
      'Anonymous arrow closures vs named handler functions',
      'The Event Types arsenal & proper listener removal',
    ]}
    icon={<IconMouse size={36} color={ink.accent} />}
  />
);

// ─── 08. The Doorman Metaphor ─────────────────────────────────────────────────

const DoormanMetaphor: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 02 · The Callback Contract"
      title="The Doorman Metaphor & Listener Anatomy"
      subtitle="Hiring a dedicated guard to watch an element and execute instructions upon contact"
    />
    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div
          style={{
            background: ink.panel,
            border: `1px solid ${ink.border}`,
            borderRadius: 18,
            padding: '24px 28px',
            boxShadow: shadow.card,
          }}
        >
          <h4 style={{ fontSize: 24, fontWeight: 800, margin: '0 0 12px 0', color: ink.text }}>
            The 3 Essential Ingredients:
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              {
                label: '1. The Target Element',
                detail: 'The DOM node we want to monitor (obtained via querySelector).',
                code: 'targetElement',
                color: ink.accent,
              },
              {
                label: '2. The Event String',
                detail: 'The exact string identifying what action to listen for ("click", "input").',
                code: '"click"',
                color: ink.sky,
              },
              {
                label: '3. The Callback Function',
                detail: 'The executable instructions to run when the trigger occurs.',
                code: 'function(event) { ... }',
                color: ink.mint,
              },
            ].map((p, i) => (
              <div
                key={i}
                style={{
                  padding: '14px 18px',
                  background: '#ffffff',
                  borderRadius: 12,
                  border: `1px solid ${ink.border}`,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <strong style={{ fontSize: 18, color: p.color }}>{p.label}</strong>
                  <code style={{ fontFamily: font.mono, fontSize: 16, color: ink.soft }}>
                    {p.code}
                  </code>
                </div>
                <div style={{ fontSize: 17, color: ink.muted }}>{p.detail}</div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            background: ink.accentSoft,
            border: `1.5px solid ${ink.accentBorder}`,
            borderRadius: 16,
            padding: '18px 24px',
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <span style={{ fontSize: 36 }}>🚪</span>
          <p style={{ margin: 0, fontSize: 19, color: ink.soft, lineHeight: 1.4 }}>
            <strong>The Doorman Analogy:</strong> "Stand by the lobby door (<code>#btn</code>).
            Whenever someone rings (<code>'click'</code>), run into the kitchen and ring the bell
            (<code>callback()</code>)."
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <CodeWindow
          title="listener-anatomy.js"
          badge="Method Signature"
          badgeColor={ink.accent}
          fontSize={19}
          code={`// Step 1: Select the element from the live DOM
const counterBtn = document.querySelector("#counter-btn");

// Step 2: Bind the listener
counterBtn.addEventListener("click", function(event) {
  console.log("Doorman triggered! Someone clicked the button.");
});

// Modern Arrow Function Syntax:
counterBtn.addEventListener("click", (event) => {
  console.log("Concise modern callback!");
});`}
        />
        <div
          style={{
            background: ink.panel,
            border: `1px solid ${ink.border}`,
            borderRadius: 14,
            padding: '14px 18px',
            fontSize: 17,
            color: ink.muted,
          }}
        >
          💡 <strong>Note:</strong> Notice that we do <em>not</em> write <code>callback()</code> with
          parentheses when passing the function! Passing parentheses calls it immediately; omitting
          them passes the function reference to the browser.
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ─── 09. Anonymous vs Named Handler Functions ─────────────────────────────────

const AnonymousVsNamedHandlers: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 02 · The Callback Contract"
      title="Anonymous Callbacks vs Named Handler Functions"
      subtitle="Balancing quick one-off handlers with testable, reusable, and decoupled functions"
    />
    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div
          style={{
            padding: '12px 18px',
            borderRadius: 12,
            background: ink.skySoft,
            border: `1px solid ${ink.sky}`,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <span style={{ fontSize: 18, fontWeight: 700, color: ink.sky }}>
            Option A: Inline Anonymous Callback
          </span>
        </div>
        <CodeWindow
          title="anonymous.js"
          badge="Quick / Compact"
          badgeColor={ink.sky}
          fontSize={19}
          code={`const resetBtn = document.querySelector("#reset-btn");

resetBtn.addEventListener("click", () => {
  count = 0;
  displayEl.textContent = count;
});`}
        />
        <div
          style={{
            background: ink.panel,
            border: `1px solid ${ink.border}`,
            borderRadius: 14,
            padding: '16px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
          }}
        >
          <div style={{ fontSize: 17, color: ink.soft }}>
            👍 <strong>Pros:</strong> Quick to write, variables from surrounding scope are accessible.
          </div>
          <div style={{ fontSize: 17, color: ink.accent }}>
            👎 <strong>Cons:</strong> Cannot be removed via <code>removeEventListener</code>; harder to unit test.
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div
          style={{
            padding: '12px 18px',
            borderRadius: 12,
            background: ink.mintSoft,
            border: `1px solid ${ink.mint}`,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <span style={{ fontSize: 18, fontWeight: 700, color: ink.mint }}>
            Option B: Separate Named Handler Function (Recommended)
          </span>
        </div>
        <CodeWindow
          title="named-handler.js"
          badge="Production Standard"
          badgeColor={ink.mint}
          fontSize={19}
          code={`const resetBtn = document.querySelector("#reset-btn");

// 1. Declare pure handler with descriptive name:
function handleCounterReset() {
  count = 0;
  displayEl.textContent = count;
}

// 2. Attach handler by reference:
resetBtn.addEventListener("click", handleCounterReset);`}
        />
        <div
          style={{
            background: ink.panel,
            border: `1px solid ${ink.border}`,
            borderRadius: 14,
            padding: '16px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
          }}
        >
          <div style={{ fontSize: 17, color: ink.soft }}>
            👍 <strong>Pros:</strong> Stack traces show function names; can be attached to multiple buttons; removable.
          </div>
          <div style={{ fontSize: 17, color: ink.muted }}>
            ⭐ <strong>Best Practice:</strong> Use naming prefix like <code>handle*</code> or <code>on*</code>.
          </div>
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ─── 10. Event Types Arsenal ──────────────────────────────────────────────────

const EventTypesArsenal: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 02 · The Callback Contract"
      title="The Browser Event Types Arsenal"
      subtitle="Categorized overview of the primary events you will listen to in modern web interfaces"
    />
    <div
      style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 24,
      }}
    >
      {[
        {
          category: 'Mouse Events',
          icon: <IconMouse size={32} color={ink.sky} />,
          events: [
            { name: '"click"', desc: 'Fires when mouse button is clicked & released' },
            { name: '"dblclick"', desc: 'Fires on rapid double click' },
            { name: '"mouseenter"', desc: 'Pointer moves over element (no bubble)' },
            { name: '"mouseleave"', desc: 'Pointer leaves element boundary' },
          ],
          color: ink.sky,
        },
        {
          category: 'Keyboard Events',
          icon: <IconKeyboard size={32} color={ink.purple} />,
          events: [
            { name: '"keydown"', desc: 'Key is pressed down (repeats if held)' },
            { name: '"keyup"', desc: 'Key is released by user' },
            { name: 'e.key', desc: 'Inspects key: "Enter", "Escape", "a"' },
            { name: 'e.shiftKey', desc: 'Boolean flag for modifier keys' },
          ],
          color: ink.purple,
        },
        {
          category: 'Form & Input Events',
          icon: <IconCode size={32} color={ink.accent} />,
          events: [
            { name: '"input"', desc: 'Fires immediately on every character typed' },
            { name: '"change"', desc: 'Fires on blur or selection change' },
            { name: '"submit"', desc: 'Fires when form is submitted' },
            { name: '"focus" / "blur"', desc: 'Element gains or loses active focus' },
          ],
          color: ink.accent,
        },
        {
          category: 'Window & Lifecycle',
          icon: <IconRefresh size={32} color={ink.mint} />,
          events: [
            { name: '"DOMContentLoaded"', desc: 'HTML parsed, DOM tree ready in memory' },
            { name: '"resize"', desc: 'Browser window viewport dimensions changed' },
            { name: '"scroll"', desc: 'User scrolls content vertically or horizontally' },
            { name: '"online" / "offline"', desc: 'Network connectivity state changes' },
          ],
          color: ink.mint,
        },
      ].map((cat, i) => (
        <div
          key={i}
          style={{
            background: ink.panel,
            border: `1px solid ${ink.border}`,
            borderRadius: 18,
            padding: '24px 22px',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: shadow.card,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
            {cat.icon}
            <h4 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: ink.text }}>
              {cat.category}
            </h4>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, flex: 1 }}>
            {cat.events.map((e, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: `1px solid ${ink.border}`,
                  borderRadius: 12,
                  padding: '12px 14px',
                }}
              >
                <code
                  style={{
                    fontFamily: font.mono,
                    fontSize: 16,
                    fontWeight: 700,
                    color: cat.color,
                    display: 'block',
                    marginBottom: 4,
                  }}
                >
                  {e.name}
                </code>
                <span style={{ fontSize: 16, color: ink.muted, lineHeight: 1.35 }}>
                  {e.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    <SlideFooter />
  </div>
);

// ─── 11. Listener Lifecycle & removeEventListener ─────────────────────────────

const ListenerLifecycleRemove: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 02 · The Callback Contract"
      title="Listener Lifecycle & removeEventListener"
      subtitle="Understanding memory references and preventing memory leaks in interactive web applications"
    />
    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div
          style={{
            padding: '16px 20px',
            borderRadius: 12,
            background: ink.accentSoft,
            border: `1.5px solid ${ink.accent}`,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <IconAlert size={28} color={ink.accent} />
          <span style={{ fontSize: 20, fontWeight: 700, color: ink.accent }}>
            The Anonymous Trap: Cannot Be Removed!
          </span>
        </div>
        <p style={{ fontSize: 22, color: ink.muted, lineHeight: 1.45, margin: 0 }}>
          Every time you type <code>() =&gt; &#123;&#125;</code>, a new object reference is created in RAM.
          Passing an anonymous function to <code>removeEventListener</code> does nothing because the
          references do not match!
        </p>
        <CodeWindow
          title="broken-removal.js"
          badge="Memory Leak Trap"
          badgeColor={ink.accent}
          code={`const btn = document.querySelector("#btn");

// ❌ FAILS TO REMOVE:
btn.addEventListener("click", () => console.log("Hi"));

// This creates a NEW anonymous function in RAM!
// It does NOT unbind the listener above:
btn.removeEventListener("click", () => console.log("Hi"));`}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div
          style={{
            padding: '16px 20px',
            borderRadius: 12,
            background: ink.mintSoft,
            border: `1.5px solid ${ink.mint}`,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <IconCheck size={28} color={ink.mint} />
          <span style={{ fontSize: 20, fontWeight: 700, color: ink.mint }}>
            The Solution: Stable Function Reference
          </span>
        </div>
        <p style={{ fontSize: 22, color: ink.muted, lineHeight: 1.45, margin: 0 }}>
          Store the handler in a named function variable. When removing, provide the exact same
          function reference to tear down the listener cleanly.
        </p>
        <CodeWindow
          title="clean-removal.js"
          badge="Clean Lifecycle"
          badgeColor={ink.mint}
          code={`const modal = document.querySelector("#modal");

function handleKeyDown(event) {
  if (event.key === "Escape") {
    closeModal();
  }
}

// When modal opens:
window.addEventListener("keydown", handleKeyDown);

// When modal closes, tear down to prevent leak:
window.removeEventListener("keydown", handleKeyDown);`}
        />
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ─── 12. Part 3 Divider ───────────────────────────────────────────────────────

const Part3Divider: Page = () => (
  <ChapterDivider
    num="03"
    title="The Event Object & Event Propagation"
    subtitle="Unpacking the event payload, preventing browser defaults, and leveraging event bubbling"
    bullets={[
      'Inspecting event.target vs event.currentTarget',
      'Preventing default browser actions with event.preventDefault()',
      'High-performance Event Delegation on parent containers',
    ]}
    icon={<IconLayers size={36} color={ink.accent} />}
  />
);

// ─── 13. Anatomy of the Event Object ──────────────────────────────────────────

const EventObjectAnatomy: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 03 · Event Propagation"
      title="Anatomy of the Event Object (`e` / `event`)"
      subtitle="The comprehensive payload of metadata automatically delivered to every listener callback"
    />
    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 32 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div
          style={{
            background: ink.panel,
            border: `1px solid ${ink.border}`,
            borderRadius: 16,
            padding: '22px 26px',
            boxShadow: shadow.card,
          }}
        >
          <h4 style={{ margin: '0 0 14px 0', fontSize: 22, fontWeight: 800, color: ink.text }}>
            Critical Properties You Will Use Every Day:
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              { prop: 'e.target', desc: 'The exact element the user clicked (e.g. inner <span> or <img>).' },
              { prop: 'e.currentTarget', desc: 'The element holding the listener (where addEventListener was called).' },
              { prop: 'e.type', desc: 'The string type of the event ("click", "keydown", "submit").' },
              { prop: 'e.key', desc: 'The character or command key pressed ("Enter", "ArrowDown").' },
              { prop: 'e.clientX / Y', desc: 'Viewport coordinates of the mouse click position in pixels.' },
              { prop: 'e.timeStamp', desc: 'Milliseconds elapsed since page load when event fired.' },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: `1px solid ${ink.border}`,
                  borderRadius: 12,
                  padding: '12px 14px',
                }}
              >
                <code
                  style={{
                    fontFamily: font.mono,
                    fontSize: 16,
                    fontWeight: 700,
                    color: ink.accent,
                    display: 'block',
                    marginBottom: 4,
                  }}
                >
                  {item.prop}
                </code>
                <span style={{ fontSize: 16, color: ink.muted, lineHeight: 1.35 }}>
                  {item.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            background: ink.skySoft,
            border: `1px solid ${ink.sky}`,
            borderRadius: 14,
            padding: '14px 20px',
            fontSize: 18,
            color: ink.soft,
          }}
        >
          💡 <strong>Naming convention:</strong> Developers commonly name this parameter{' '}
          <code>e</code>, <code>evt</code>, or <code>event</code>. It is passed automatically as the
          first argument!
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <CodeWindow
          title="inspect-event.js"
          badge="Live Payload Inspection"
          badgeColor={ink.purple}
          fontSize={19}
          code={`const cardBtn = document.querySelector("#card-button");

cardBtn.addEventListener("click", (event) => {
  console.log("Event Type:", event.type);       // "click"
  console.log("Clicked Node:", event.target);    // <span>Add to Cart</span>
  console.log("Listener Node:", event.currentTarget); // <button>
  
  if (event.shiftKey) {
    console.log("Special secret action: Shift+Click!");
  }
});`}
        />
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ─── 14. Preventing Default Actions ───────────────────────────────────────────

const PreventDefaultAction: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 03 · Event Propagation"
      title="Preventing Default Actions (`e.preventDefault()`)"
      subtitle="Halting native browser behaviors like automatic form reloads and hyperlink navigation"
    />
    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div
          style={{
            padding: '16px 20px',
            borderRadius: 12,
            background: ink.accentSoft,
            border: `1.5px solid ${ink.accent}`,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <IconAlert size={28} color={ink.accent} />
          <span style={{ fontSize: 20, fontWeight: 700, color: ink.accent }}>
            The Default Form Problem
          </span>
        </div>
        <p style={{ fontSize: 22, color: ink.muted, lineHeight: 1.45, margin: 0 }}>
          By default, submitting an HTML form causes the browser to send an HTTP GET/POST request and
          <strong> completely reload the page</strong>, wiping all in-memory JavaScript variables!
        </p>
        <div
          style={{
            background: ink.panel,
            border: `1px solid ${ink.border}`,
            borderRadius: 14,
            padding: '18px 22px',
          }}
        >
          <h5 style={{ margin: '0 0 8px 0', fontSize: 18, color: ink.text }}>
            Common Native Defaults You Will Intercept:
          </h5>
          <ul style={{ margin: 0, paddingLeft: 24, fontSize: 18, color: ink.muted, lineHeight: 1.6 }}>
            <li><code>&lt;form&gt;</code> submit $\rightarrow$ Reloads current URL</li>
            <li><code>&lt;a href="..."&gt;</code> click $\rightarrow$ Navigates away from page</li>
            <li><code>&lt;input type="checkbox"&gt;</code> click $\rightarrow$ Toggles checkmark</li>
          </ul>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <CodeWindow
          title="prevent-default.js"
          badge="Stop Form Reload"
          badgeColor={ink.accent}
          fontSize={19}
          code={`const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-query");

searchForm.addEventListener("submit", (event) => {
  // 1. STOP the browser from reloading the page:
  event.preventDefault();

  // 2. Safely read input and process with JavaScript:
  const query = searchInput.value.trim();
  console.log("Searching for items matching:", query);
  
  // 3. Update DOM without losing application state!
  performSearch(query);
});`}
        />
        <div
          style={{
            background: ink.mintSoft,
            border: `1px solid ${ink.mint}`,
            borderRadius: 12,
            padding: '12px 16px',
            fontSize: 17,
            color: ink.soft,
          }}
        >
          ✅ <code>event.preventDefault()</code> tells the browser: "I am taking control of this
          action with client-side JavaScript. Do not trigger your default HTTP behavior."
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ─── 15. Event Bubbling & Capturing ───────────────────────────────────────────

const EventBubblingAndCapturing: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 03 · Event Propagation"
      title="Event Propagation: Capturing & Bubbling"
      subtitle="How events travel through the DOM hierarchy from the root document to the target node and back"
    />
    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div
          style={{
            background: ink.panel,
            border: `1px solid ${ink.border}`,
            borderRadius: 18,
            padding: '24px 28px',
            boxShadow: shadow.card,
          }}
        >
          <h4 style={{ margin: '0 0 16px 0', fontSize: 24, fontWeight: 800, color: ink.text }}>
            The 3 Phases of Every Event:
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              {
                phase: 'Phase 1: Capturing',
                flow: 'window → document → body → parent → target',
                desc: 'Event trickles down through ancestor nodes towards the target element.',
                color: ink.sky,
              },
              {
                phase: 'Phase 2: Target',
                flow: 'Directly on the clicked element',
                desc: 'The event reaches the exact node that initiated the human interaction.',
                color: ink.accent,
              },
              {
                phase: 'Phase 3: Bubbling (Default)',
                flow: 'target → parent → body → document → window',
                desc: 'The event floats back up like an air bubble through water, notifying ancestors.',
                color: ink.mint,
              },
            ].map((p, i) => (
              <div
                key={i}
                style={{
                  padding: '14px 18px',
                  background: '#ffffff',
                  borderRadius: 12,
                  border: `1px solid ${ink.border}`,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <strong style={{ fontSize: 18, color: p.color }}>{p.phase}</strong>
                </div>
                <div style={{ fontSize: 15, fontFamily: font.mono, color: ink.dim, marginBottom: 4 }}>
                  {p.flow}
                </div>
                <div style={{ fontSize: 16, color: ink.muted }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <CodeWindow
          title="bubbling-trace.js"
          badge="Bubbling Upwards"
          badgeColor={ink.mint}
          fontSize={19}
          code={`const outer = document.querySelector("#card");
const innerBtn = document.querySelector("#buy-btn");

outer.addEventListener("click", () => {
  console.log("2. Card container heard the click!");
});

innerBtn.addEventListener("click", (e) => {
  console.log("1. Button heard the click!");
  // To stop the bubble from continuing up:
  // e.stopPropagation();
});

// Clicking #buy-btn prints:
// 1. Button heard the click!
// 2. Card container heard the click!`}
        />
        <div
          style={{
            background: ink.panel,
            border: `1px solid ${ink.border}`,
            borderRadius: 14,
            padding: '14px 18px',
            fontSize: 17,
            color: ink.soft,
          }}
        >
          💡 <strong>Why Bubbling Matters:</strong> Because events bubble upwards, we do not need to
          attach listeners to every single item. We can listen on the parent!
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ─── 16. Event Delegation Pattern ─────────────────────────────────────────────

const EventDelegationPattern: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 03 · Event Propagation"
      title="Event Delegation: The Master Architecture"
      subtitle="Attaching one listener to a common parent instead of dozens to dynamic children"
    />
    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div
          style={{
            padding: '16px 20px',
            borderRadius: 12,
            background: ink.accentSoft,
            border: `1.5px solid ${ink.accent}`,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <IconAlert size={28} color={ink.accent} />
          <span style={{ fontSize: 20, fontWeight: 700, color: ink.accent }}>
            The Naive Anti-Pattern: N Listeners
          </span>
        </div>
        <p style={{ fontSize: 22, color: ink.muted, lineHeight: 1.45, margin: 0 }}>
          If you have 100 table rows or a dynamic list where items are added and deleted, attaching
          individual listeners consumes RAM and fails completely on newly created cards!
        </p>
        <CodeWindow
          title="naive-listeners.js"
          badge="High Memory / Brittle"
          badgeColor={ink.accent}
          code={`// ❌ ANTI-PATTERN: Attaches 100 separate listeners
const allButtons = document.querySelectorAll(".delete-btn");

allButtons.forEach(btn => {
  btn.addEventListener("click", handleDelete);
});

// BUG: New buttons added next minute WON'T WORK!`}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div
          style={{
            padding: '16px 20px',
            borderRadius: 12,
            background: ink.mintSoft,
            border: `1.5px solid ${ink.mint}`,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <IconCheck size={28} color={ink.mint} />
          <span style={{ fontSize: 20, fontWeight: 700, color: ink.mint }}>
            The Pro Pattern: Single Parent Delegation
          </span>
        </div>
        <p style={{ fontSize: 22, color: ink.muted, lineHeight: 1.45, margin: 0 }}>
          Attach <strong>1 single listener</strong> on the parent <code>&lt;ul&gt;</code>. Use{' '}
          <code>e.target.closest()</code> to determine which child button was clicked!
        </p>
        <CodeWindow
          title="event-delegation.js"
          badge="High Performance"
          badgeColor={ink.mint}
          code={`const todoList = document.querySelector("#todo-list");

// ✅ Single listener handles all current & future items:
todoList.addEventListener("click", (event) => {
  const deleteBtn = event.target.closest(".delete-btn");
  if (!deleteBtn) return; // Click was elsewhere

  const item = deleteBtn.closest("li");
  item.remove();
  console.log("Deleted item via event delegation!");
});`}
        />
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ─── 17. Part 4 Divider ───────────────────────────────────────────────────────

const Part4Divider: Page = () => (
  <ChapterDivider
    num="04"
    title="UI State: Memory That Drives The View"
    subtitle="Decoupling state representation from the visual DOM tree for robust interfaces"
    bullets={[
      'What is state? JavaScript variables as the single source of truth',
      'The Unidirectional State-Action-Render feedback loop',
      'Eliminating the "State in the DOM" anti-pattern forever',
    ]}
    icon={<IconBox size={36} color={ink.accent} />}
  />
);

// ─── 18. What is State? ───────────────────────────────────────────────────────

const WhatIsState: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 04 · UI State Architecture"
      title="What is 'State'? Memory as Single Source of Truth"
      subtitle="Understanding why your data lives in JavaScript variables, not inside HTML strings"
    />
    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div
          style={{
            background: ink.panel,
            border: `1px solid ${ink.border}`,
            borderRadius: 18,
            padding: '24px 28px',
            boxShadow: shadow.card,
          }}
        >
          <h4 style={{ margin: '0 0 14px 0', fontSize: 24, fontWeight: 800, color: ink.text }}>
            Definition of UI State:
          </h4>
          <p style={{ margin: 0, fontSize: 22, color: ink.soft, lineHeight: 1.5 }}>
            <strong>State</strong> is the minimal set of data stored in JavaScript variables that
            completely determines what the user sees on the screen at any given moment.
          </p>
          <div
            style={{
              marginTop: 18,
              padding: '16px 20px',
              borderRadius: 12,
              background: '#ffffff',
              border: `1px solid ${ink.border}`,
              fontSize: 18,
              color: ink.muted,
              lineHeight: 1.5,
            }}
          >
            📊 <strong>Examples of State in Real Web Apps:</strong>
            <ul style={{ margin: '8px 0 0 0', paddingLeft: 22 }}>
              <li>Current counter tally: <code>let count = 4;</code></li>
              <li>Active visual theme: <code>let isDarkMode = true;</code></li>
              <li>Shopping cart contents: <code>const cart = [&#123; id: 101, qty: 2 &#125;];</code></li>
              <li>Modal visibility: <code>let isModalOpen = false;</code></li>
            </ul>
          </div>
        </div>

        <div
          style={{
            background: ink.skySoft,
            border: `1.5px solid ${ink.sky}`,
            borderRadius: 16,
            padding: '18px 22px',
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <IconSparkles size={32} color={ink.sky} />
          <span style={{ fontSize: 19, color: ink.soft, lineHeight: 1.4 }}>
            <strong>The Core Mental Model:</strong> The DOM is a dumb screen projection. Your JS
            variables are the master brain. Never ask the projection what the brain knows!
          </span>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <CodeWindow
          title="state-model.js"
          badge="Memory Model"
          badgeColor={ink.indigo}
          fontSize={19}
          code={`// 1. STATE: Lives in RAM as pure JavaScript variables:
let currentCount = 0;
let isDarkTheme = false;

// 2. DOM CACHE: Select elements once:
const countDisplay = document.querySelector("#count");
const themeBtn = document.querySelector("#theme-btn");

// 3. RENDER FUNCTION: Projects state into DOM elements:
function render() {
  countDisplay.textContent = currentCount;
  document.body.classList.toggle("dark", isDarkTheme);
}

// Initial render:
render();`}
        />
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ─── 19. The State-Action-Render Loop ─────────────────────────────────────────

const StateActionRenderLoop: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 04 · UI State Architecture"
      title="The Unidirectional State-Action-Render Loop"
      subtitle="The foundational architecture powering everything from vanilla JavaScript to React"
    />
    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div
          style={{
            background: ink.panel,
            border: `1px solid ${ink.border}`,
            borderRadius: 18,
            padding: '24px 26px',
            boxShadow: shadow.card,
          }}
        >
          <h4 style={{ margin: '0 0 16px 0', fontSize: 24, fontWeight: 800, color: ink.text }}>
            The 3-Step Lifecycle:
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              {
                step: 'Step 1: User Action (Event)',
                desc: 'User clicks button, types into text box, or presses a key.',
                color: ink.sky,
              },
              {
                step: 'Step 2: State Mutation (Memory)',
                desc: 'The callback updates the JavaScript variable (e.g. count = count + 1).',
                color: ink.accent,
              },
              {
                step: 'Step 3: DOM Re-Render (View Sync)',
                desc: 'A dedicated render function updates the textContent and classList.',
                color: ink.mint,
              },
            ].map((s, idx) => (
              <div
                key={idx}
                style={{
                  padding: '14px 18px',
                  background: '#ffffff',
                  borderRadius: 12,
                  border: `1px solid ${ink.border}`,
                }}
              >
                <strong style={{ fontSize: 18, color: s.color, display: 'block', marginBottom: 4 }}>
                  {s.step}
                </strong>
                <span style={{ fontSize: 17, color: ink.muted }}>{s.desc}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            padding: '14px 20px',
            background: ink.amberSoft,
            border: `1px solid ${ink.amber}`,
            borderRadius: 12,
            fontSize: 17,
            color: ink.soft,
          }}
        >
          ⚠️ <strong>Golden Rule:</strong> Never mutate the DOM directly inside event handlers
          without updating your state variables first!
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <CodeWindow
          title="unidirectional-loop.js"
          badge="Clean Architecture"
          badgeColor={ink.mint}
          fontSize={19}
          code={`// State:
let count = 0;

// Nodes:
const display = document.querySelector("#counter");
const incBtn = document.querySelector("#increment-btn");

// Dedicated Render function:
function updateDisplay() {
  display.textContent = count;
  display.style.color = count > 0 ? "green" : count < 0 ? "red" : "black";
}

// Event handler coordinates the loop:
incBtn.addEventListener("click", () => {
  count = count + 1;  // 1. Mutate State
  updateDisplay();    // 2. Sync DOM
});`}
        />
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ─── 20. The "State in the DOM" Anti-Pattern ──────────────────────────────────

const StateInDomAntiPattern: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 04 · UI State Architecture"
      title="The 'State in the DOM' Anti-Pattern"
      subtitle="Why parsing strings from HTML tags creates brittle, buggy, and insecure applications"
    />
    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div
          style={{
            padding: '16px 20px',
            borderRadius: 12,
            background: ink.accentSoft,
            border: `1.5px solid ${ink.accent}`,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <IconAlert size={28} color={ink.accent} />
          <span style={{ fontSize: 20, fontWeight: 700, color: ink.accent }}>
            The Brittle Way: Scraping HTML Strings
          </span>
        </div>
        <p style={{ fontSize: 22, color: ink.muted, lineHeight: 1.45, margin: 0 }}>
          Beginners often read values from the DOM, parse them with <code>parseInt()</code>, modify
          them, and write them back. This leads to formatting bugs, NaN errors, and race conditions.
        </p>
        <CodeWindow
          title="fragile-dom-state.js"
          badge="Fragile & Buggy"
          badgeColor={ink.accent}
          code={`// ❌ ANTI-PATTERN: Reading state from DOM
incBtn.addEventListener("click", () => {
  const currentText = displayEl.textContent; // "$100.00"
  // Fails with currency symbols or commas!
  let currentNum = parseInt(currentText); // NaN!
  currentNum = currentNum + 1;
  displayEl.textContent = currentNum;
});`}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div
          style={{
            padding: '16px 20px',
            borderRadius: 12,
            background: ink.mintSoft,
            border: `1.5px solid ${ink.mint}`,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <IconCheck size={28} color={ink.mint} />
          <span style={{ fontSize: 20, fontWeight: 700, color: ink.mint }}>
            The Robust Way: Pure JavaScript State
          </span>
        </div>
        <p style={{ fontSize: 22, color: ink.muted, lineHeight: 1.45, margin: 0 }}>
          Hold clean numeric primitives in JavaScript variables. Math is performed on pure numbers,
          and formatting is applied cleanly during the render step.
        </p>
        <CodeWindow
          title="robust-state.js"
          badge="Bulletproof Architecture"
          badgeColor={ink.mint}
          code={`// ✅ ROBUST: Pure number in memory
let balance = 100.00;

function renderBalance() {
  // Format purely for human eyes:
  displayEl.textContent = \`$\${balance.toFixed(2)}\`;
}

depositBtn.addEventListener("click", () => {
  balance = balance + 25.50; // Pure math!
  renderBalance();
});`}
        />
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ─── 21. Coordinating Compound State ──────────────────────────────────────────

const CompoundStateCoordination: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 04 · UI State Architecture"
      title="Coordinating Compound State"
      subtitle="Managing multiple interacting state variables within a single cohesive interface"
    />
    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div
          style={{
            background: ink.panel,
            border: `1px solid ${ink.border}`,
            borderRadius: 18,
            padding: '24px 28px',
            boxShadow: shadow.card,
          }}
        >
          <h4 style={{ margin: '0 0 14px 0', fontSize: 24, fontWeight: 800, color: ink.text }}>
            Multi-Variable Coordination:
          </h4>
          <p style={{ margin: 0, fontSize: 20, color: ink.muted, lineHeight: 1.45 }}>
            Real web applications manage multiple state variables simultaneously. An event in one
            part of the screen may affect another part of the UI.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 16 }}>
            {[
              'Count value changes $\\rightarrow$ Adjusts button disable states (e.g. disable decrement at 0)',
              'Theme changes $\\rightarrow$ Updates body background and toggle button icon',
              'Validation error $\\rightarrow$ Disables submit button until input is resolved',
            ].map((txt, idx) => (
              <div
                key={idx}
                style={{
                  padding: '10px 14px',
                  background: '#ffffff',
                  borderRadius: 10,
                  border: `1px solid ${ink.border}`,
                  fontSize: 16,
                  color: ink.soft,
                }}
              >
                {txt}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <CodeWindow
          title="state-object.js"
          badge="Compound State Object"
          badgeColor={ink.purple}
          fontSize={19}
          code={`// Organizing related state in an object:
const appState = {
  count: 0,
  min: 0,
  max: 10,
  theme: "light",
};

function syncView() {
  countEl.textContent = appState.count;
  document.body.className = appState.theme;

  // Coordinate button disabled states:
  decBtn.disabled = appState.count <= appState.min;
  incBtn.disabled = appState.count >= appState.max;
}

incBtn.addEventListener("click", () => {
  if (appState.count < appState.max) {
    appState.count++;
    syncView();
  }
});`}
        />
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ─── 22. Part 5 Divider ───────────────────────────────────────────────────────

const Part5Divider: Page = () => (
  <ChapterDivider
    num="05"
    title="Live Inputs, Form Controls & Real-Time Feedback"
    subtitle="Reading, transforming, and validating user keystrokes in real time"
    bullets={[
      'Capturing user typing with input.value and type coercion',
      'Event timing: input vs change vs keydown',
      'Building live character counters & form validation flows',
    ]}
    icon={<IconKeyboard size={36} color={ink.accent} />}
  />
);

// ─── 23. Reading Input Values with input.value ─────────────────────────────────

const ReadingInputValues: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 05 · Live Inputs & Forms"
      title="Reading Form Inputs with `input.value`"
      subtitle="Capturing text, numbers, and inputs from text fields, textareas, and select menus"
    />
    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div
          style={{
            background: ink.panel,
            border: `1px solid ${ink.border}`,
            borderRadius: 18,
            padding: '24px 28px',
            boxShadow: shadow.card,
          }}
        >
          <h4 style={{ margin: '0 0 14px 0', fontSize: 24, fontWeight: 800, color: ink.text }}>
            Critical Rules for Form Controls:
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div
              style={{
                padding: '12px 16px',
                background: '#ffffff',
                borderRadius: 12,
                border: `1px solid ${ink.border}`,
              }}
            >
              <strong style={{ color: ink.accent }}>1. Always Returns a String:</strong>
              <div style={{ fontSize: 17, color: ink.muted, marginTop: 4 }}>
                Even for <code>&lt;input type="number"&gt;</code>, <code>input.value</code> returns a
                string (e.g. <code>"42"</code>). Always parse with <code>Number()</code>!
              </div>
            </div>
            <div
              style={{
                padding: '12px 16px',
                background: '#ffffff',
                borderRadius: 12,
                border: `1px solid ${ink.border}`,
              }}
            >
              <strong style={{ color: ink.sky }}>2. Setting Clears the Field:</strong>
              <div style={{ fontSize: 17, color: ink.muted, marginTop: 4 }}>
                To empty an input after submission, assign an empty string: <code>input.value = ""</code>.
              </div>
            </div>
            <div
              style={{
                padding: '12px 16px',
                background: '#ffffff',
                borderRadius: 12,
                border: `1px solid ${ink.border}`,
              }}
            >
              <strong style={{ color: ink.mint }}>3. Always Trim Whitespace:</strong>
              <div style={{ fontSize: 17, color: ink.muted, marginTop: 4 }}>
                Use <code>input.value.trim()</code> to prevent users from submitting pure spaces.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <CodeWindow
          title="reading-inputs.js"
          badge="Live Value Extraction"
          badgeColor={ink.sky}
          fontSize={19}
          code={`const nameInput = document.querySelector("#user-name");
const ageInput = document.querySelector("#user-age");
const submitBtn = document.querySelector("#save-btn");

submitBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const age = Number(ageInput.value); // Convert string to number

  if (!name) {
    alert("Please enter a valid name!");
    return;
  }

  console.log(\`User: \${name}, Age: \${age}\`);
  nameInput.value = ""; // Clear after submit
});`}
        />
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ─── 24. Input vs Change vs Keydown ───────────────────────────────────────────

const InputVsChangeVsKeydown: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 05 · Live Inputs & Forms"
      title="Event Timing: `input` vs `change` vs `keydown`"
      subtitle="Selecting the correct event trigger based on real-time feedback requirements"
    />
    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
      {[
        {
          name: '"input" (Real-Time)',
          timing: 'Fires on every keystroke',
          useCase: 'Live search, character counters, password strength meters.',
          behavior: 'Fires instantly whenever value changes (typing, pasting, deleting, cutting text).',
          code: `inputEl.addEventListener("input", (e) => {
  console.log("Current:", e.target.value);
});`,
          color: ink.accent,
        },
        {
          name: '"change" (On Commit)',
          timing: 'Fires on blur / Enter',
          useCase: 'Dropdown selection, checkboxes, final field validation.',
          behavior: 'Does NOT fire per keystroke. Fires only when user unfocuses (blurs) or presses Enter.',
          code: `selectEl.addEventListener("change", (e) => {
  console.log("Selected:", e.target.value);
});`,
          color: ink.sky,
        },
        {
          name: '"keydown" (Hardware Key)',
          timing: 'Fires on key press',
          useCase: 'Keyboard shortcuts, Escape to close, Enter to submit.',
          behavior: 'Fires before the character appears in the field. Ideal for detecting specific control keys.',
          code: `window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});`,
          color: ink.purple,
        },
      ].map((item, i) => (
        <div
          key={i}
          style={{
            background: ink.panel,
            border: `1px solid ${ink.border}`,
            borderRadius: 18,
            padding: '24px 22px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: shadow.card,
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-block',
                padding: '4px 12px',
                borderRadius: 999,
                background: `${item.color}15`,
                color: item.color,
                fontFamily: font.mono,
                fontSize: 14,
                fontWeight: 700,
                marginBottom: 12,
              }}
            >
              {item.timing}
            </div>
            <h4 style={{ margin: '0 0 10px 0', fontSize: 24, fontWeight: 800, color: ink.text }}>
              {item.name}
            </h4>
            <p style={{ margin: '0 0 12px 0', fontSize: 17, color: ink.soft, lineHeight: 1.4 }}>
              {item.behavior}
            </p>
            <div style={{ fontSize: 16, color: ink.muted, marginBottom: 16 }}>
              <strong>Best For:</strong> {item.useCase}
            </div>
          </div>
          <CodeWindow
            title="timing-example.js"
            fontSize={17}
            badge="Syntax"
            badgeColor={item.color}
            code={item.code}
          />
        </div>
      ))}
    </div>
    <SlideFooter />
  </div>
);

// ─── 25. Live Character Counter ───────────────────────────────────────────────

const LiveCharacterCounter: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 05 · Live Inputs & Forms"
      title="Live Character Counter & Real-Time Echo"
      subtitle="Connecting real-time input listeners to responsive feedback indicators"
    />
    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div
          style={{
            background: ink.panel,
            border: `1px solid ${ink.border}`,
            borderRadius: 18,
            padding: '24px 28px',
            boxShadow: shadow.card,
          }}
        >
          <h4 style={{ margin: '0 0 14px 0', fontSize: 24, fontWeight: 800, color: ink.text }}>
            Step-by-Step Architecture:
          </h4>
          <ol style={{ margin: 0, paddingLeft: 22, fontSize: 19, color: ink.soft, lineHeight: 1.6 }}>
            <li>Define a character threshold (e.g. max 140 chars).</li>
            <li>Listen to the <code>"input"</code> event on the textarea.</li>
            <li>Calculate <code>remaining = max - textarea.value.length</code>.</li>
            <li>Update counter display textContent.</li>
            <li>If remaining &lt; 20, add warning class (e.g. amber or red color).</li>
          </ol>
        </div>

        <div
          style={{
            background: '#ffffff',
            border: `1px solid ${ink.border}`,
            borderRadius: 16,
            padding: '20px 24px',
            boxShadow: shadow.card,
          }}
        >
          <span style={{ fontSize: 15, fontWeight: 700, color: ink.dim, textTransform: 'uppercase' }}>
            Visual UI Preview:
          </span>
          <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div
              style={{
                padding: '12px 16px',
                borderRadius: 10,
                border: `1px solid ${ink.border}`,
                background: ink.panel,
                fontFamily: font.sans,
                fontSize: 18,
                color: ink.text,
              }}
            >
              Building event-driven apps in JavaScript!
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 16 }}>
              <span style={{ color: ink.muted }}>Character limit</span>
              <strong style={{ color: ink.mint, fontFamily: font.mono }}>99 / 140 left</strong>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <CodeWindow
          title="char-counter.js"
          badge="Live Keystroke Monitor"
          badgeColor={ink.mint}
          fontSize={19}
          code={`const tweetBox = document.querySelector("#tweet-text");
const charCount = document.querySelector("#char-count");
const MAX_CHARS = 140;

tweetBox.addEventListener("input", (event) => {
  const currentLength = event.target.value.length;
  const remaining = MAX_CHARS - currentLength;

  charCount.textContent = \`\${remaining} / \${MAX_CHARS}\`;

  if (remaining < 20) {
    charCount.style.color = "red";
  } else {
    charCount.style.color = "gray";
  }
});`}
        />
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ─── 26. Form Submission & Validation Pipeline ────────────────────────────────

const FormSubmitValidation: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 05 · Live Inputs & Forms"
      title="Form Submission & Validation Flow"
      subtitle="Intercepting submit, validating data fields defensively, and giving user feedback"
    />
    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div
          style={{
            background: ink.panel,
            border: `1px solid ${ink.border}`,
            borderRadius: 18,
            padding: '24px 28px',
            boxShadow: shadow.card,
          }}
        >
          <h4 style={{ margin: '0 0 14px 0', fontSize: 24, fontWeight: 800, color: ink.text }}>
            The 4-Step Form Pipeline:
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { step: '1. Intercept', desc: 'form.addEventListener("submit", e => e.preventDefault())' },
              { step: '2. Extract', desc: 'Read all input values with .value.trim()' },
              { step: '3. Validate', desc: 'Check requirements (non-empty, email format, minimum length)' },
              { step: '4. Feedback', desc: 'Show success message or toggle inline error classes' },
            ].map((p, idx) => (
              <div
                key={idx}
                style={{
                  padding: '12px 16px',
                  background: '#ffffff',
                  borderRadius: 12,
                  border: `1px solid ${ink.border}`,
                }}
              >
                <strong style={{ fontSize: 17, color: ink.accent }}>{p.step}: </strong>
                <span style={{ fontSize: 17, color: ink.muted }}>{p.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <CodeWindow
          title="form-validation.js"
          badge="Complete Pipeline"
          badgeColor={ink.indigo}
          fontSize={19}
          code={`const loginForm = document.querySelector("#login-form");
const emailField = document.querySelector("#email");
const errorMsg = document.querySelector("#error-msg");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop page reload!

  const email = emailField.value.trim();

  if (!email.includes("@")) {
    errorMsg.textContent = "Please enter a valid email address.";
    errorMsg.classList.remove("hidden");
    emailField.classList.add("input-error");
    return;
  }

  // Clear errors & proceed:
  errorMsg.classList.add("hidden");
  console.log("Submitting payload for:", email);
});`}
        />
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ─── 27. Part 6 Divider ───────────────────────────────────────────────────────

const Part6Divider: Page = () => (
  <ChapterDivider
    num="06"
    title="Hands-on Lab: Click Counter & Theme Switcher"
    subtitle="Constructing an interactive stateful web component from clean HTML wireframes to dynamic actions"
    bullets={[
      'Architecture & wireframe breakdown of counter.html',
      'Step-by-step state tracking and defensive DOM caching',
      'The Socratic AI challenge: The Doorbell & Doorman Analogy',
    ]}
    icon={<IconSparkles size={36} color={ink.accent} />}
  />
);

// ─── 28. Lab Architecture & Layout ───────────────────────────────────────────

const LabArchitectureLayout: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 06 · Hands-on Lab"
      title="Lab Architecture & Component Layout"
      subtitle="Visual layout, DOM element hierarchy, and interactive goals for counter.html"
    />
    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div
          style={{
            background: ink.panel,
            border: `1px solid ${ink.border}`,
            borderRadius: 18,
            padding: '24px 28px',
            boxShadow: shadow.card,
          }}
        >
          <h4 style={{ margin: '0 0 14px 0', fontSize: 24, fontWeight: 800, color: ink.text }}>
            Lab Deliverable Specifications:
          </h4>
          <ul style={{ margin: 0, paddingLeft: 22, fontSize: 19, color: ink.soft, lineHeight: 1.6 }}>
            <li><strong>Theme Toggle:</strong> Switches <code>body.dark-theme</code> class.</li>
            <li><strong>Counter Display:</strong> Huge numeric display of state variable.</li>
            <li><strong>Dynamic Colors:</strong> Green if &gt; 0, Red if &lt; 0, Black if 0.</li>
            <li><strong>Button Controls:</strong> Decrement (-), Increment (+), and Reset.</li>
          </ul>
        </div>

        <div
          style={{
            background: '#ffffff',
            border: `1px solid ${ink.border}`,
            borderRadius: 16,
            padding: '24px 28px',
            boxShadow: shadow.card,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <span style={{ fontSize: 16, fontWeight: 700, color: ink.dim }}>App Container</span>
            <div
              style={{
                padding: '6px 14px',
                borderRadius: 999,
                border: `1px solid ${ink.border}`,
                background: ink.panel,
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              Toggle Theme 🌙
            </div>
          </div>
          <div
            style={{
              fontSize: 84,
              fontWeight: 900,
              fontFamily: font.mono,
              color: ink.mint,
            }}
          >
            +3
          </div>
          <div style={{ display: 'flex', gap: 16 }}>
            <div style={{ padding: '10px 24px', borderRadius: 10, background: '#fee2e2', color: '#b91c1c', fontWeight: 800, fontSize: 22 }}>-</div>
            <div style={{ padding: '10px 24px', borderRadius: 10, background: '#dcfce7', color: '#15803d', fontWeight: 800, fontSize: 22 }}>+</div>
            <div style={{ padding: '10px 24px', borderRadius: 10, background: '#f1f5f9', color: '#475569', fontWeight: 800, fontSize: 22 }}>Reset</div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <CodeWindow
          title="counter.html"
          badge="HTML Structure"
          badgeColor={ink.sky}
          fontSize={18}
          code={`<div class="app-container">
  <button id="theme-toggle" type="button">
    Toggle Theme
  </button>

  <div class="counter-display">
    <h1 id="count-value">0</h1>
    <div class="btn-group">
      <button id="decrement-btn" type="button">-</button>
      <button id="increment-btn" type="button">+</button>
      <button id="reset-btn" type="button">Reset</button>
    </div>
  </div>
</div>`}
        />
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ─── 29. Lab Step 1: State & DOM Caching ──────────────────────────────────────

const LabStep1StateDomBinding: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 06 · Hands-on Lab"
      title="Lab Step 1: State Initialization & DOM Caching"
      subtitle="Declaring memory variables and querying required elements defensively"
    />
    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div
          style={{
            background: ink.panel,
            border: `1px solid ${ink.border}`,
            borderRadius: 18,
            padding: '24px 28px',
            boxShadow: shadow.card,
          }}
        >
          <h4 style={{ margin: '0 0 14px 0', fontSize: 24, fontWeight: 800, color: ink.text }}>
            Why We Cache Elements at the Top:
          </h4>
          <ul style={{ margin: 0, paddingLeft: 22, fontSize: 19, color: ink.soft, lineHeight: 1.6 }}>
            <li>
              <strong>Performance:</strong> <code>document.querySelector()</code> traverses the DOM
              tree. Running it once and storing references is 100x faster than calling it inside
              every click event!
            </li>
            <li>
              <strong>Clean State Initialization:</strong> <code>let count = 0;</code> establishes the
              single source of truth.
            </li>
          </ul>
        </div>

        <div
          style={{
            padding: '16px 20px',
            background: ink.skySoft,
            border: `1px solid ${ink.sky}`,
            borderRadius: 14,
            fontSize: 18,
            color: ink.soft,
          }}
        >
          💡 <strong>Tip:</strong> Notice <code>let</code> is used for <code>count</code> (it mutates),
          while <code>const</code> is used for DOM element references (the node reference is constant).
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <CodeWindow
          title="counter.js (Step 1)"
          badge="Initialization"
          badgeColor={ink.sky}
          fontSize={19}
          code={`// 1. In-Memory State:
let count = 0;

// 2. Cache DOM References:
const countDisplay = document.querySelector("#count-value");
const incrementBtn = document.querySelector("#increment-btn");
const decrementBtn = document.querySelector("#decrement-btn");
const resetBtn = document.querySelector("#reset-btn");
const themeToggle = document.querySelector("#theme-toggle");

console.log("State and DOM nodes successfully initialized.");`}
        />
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ─── 30. Lab Step 2: The View Sync Function ───────────────────────────────────

const LabStep2UpdateDisplay: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 06 · Hands-on Lab"
      title="Lab Step 2: The View Synchronization Function"
      subtitle="Writing the dedicated updateDisplay() renderer to reflect state in the DOM"
    />
    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div
          style={{
            background: ink.panel,
            border: `1px solid ${ink.border}`,
            borderRadius: 18,
            padding: '24px 28px',
            boxShadow: shadow.card,
          }}
        >
          <h4 style={{ margin: '0 0 14px 0', fontSize: 24, fontWeight: 800, color: ink.text }}>
            What updateDisplay() Accomplishes:
          </h4>
          <ol style={{ margin: 0, paddingLeft: 22, fontSize: 19, color: ink.soft, lineHeight: 1.6 }}>
            <li>Injects the numeric <code>count</code> state into <code>countDisplay.textContent</code>.</li>
            <li>Checks if <code>count &gt; 0</code> $\rightarrow$ sets text color to green.</li>
            <li>Checks if <code>count &lt; 0</code> $\rightarrow$ sets text color to red.</li>
            <li>Otherwise (<code>count === 0</code>) $\rightarrow$ sets text color to black.</li>
          </ol>
        </div>

        <div
          style={{
            padding: '16px 20px',
            background: ink.mintSoft,
            border: `1px solid ${ink.mint}`,
            borderRadius: 14,
            fontSize: 18,
            color: ink.soft,
          }}
        >
          ✅ <strong>Separation of Concerns:</strong> None of the buttons need to write custom styling
          code. They all simply mutate <code>count</code> and call <code>updateDisplay()</code>!
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <CodeWindow
          title="counter.js (Step 2)"
          badge="Render Function"
          badgeColor={ink.mint}
          fontSize={19}
          code={`function updateDisplay() {
  // Sync text:
  countDisplay.textContent = count;

  // Sync color state:
  if (count > 0) {
    countDisplay.style.color = "green";
  } else if (count < 0) {
    countDisplay.style.color = "red";
  } else {
    countDisplay.style.color = "black";
  }
}

// Run once on load to ensure initial state matches DOM:
updateDisplay();`}
        />
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ─── 31. Lab Step 3: Wiring Listeners ─────────────────────────────────────────

const LabStep3WiringListeners: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 06 · Hands-on Lab"
      title="Lab Step 3: Wiring Interactive Listeners"
      subtitle="Connecting click events to state mutations and toggling the dark theme"
    />
    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <CodeWindow
          title="counter.js (Step 3: Counters)"
          badge="State Mutators"
          badgeColor={ink.accent}
          fontSize={18}
          code={`// Increment Action:
incrementBtn.addEventListener("click", function() {
  count = count + 1;
  updateDisplay();
});

// Decrement Action:
decrementBtn.addEventListener("click", function() {
  count = count - 1;
  updateDisplay();
});

// Reset Action:
resetBtn.addEventListener("click", function() {
  count = 0;
  updateDisplay();
});`}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <CodeWindow
          title="counter.js (Step 3: Theme Toggle)"
          badge="Theme Toggle"
          badgeColor={ink.purple}
          fontSize={18}
          code={`// Theme Switcher:
themeToggle.addEventListener("click", function() {
  // Toggles the .dark-theme class on <body>:
  document.body.classList.toggle("dark-theme");

  const isDark = document.body.classList.contains("dark-theme");
  themeToggle.textContent = isDark 
    ? "Switch to Light ☀️" 
    : "Switch to Dark 🌙";
});`}
        />
        <div
          style={{
            background: ink.panel,
            border: `1px solid ${ink.border}`,
            borderRadius: 14,
            padding: '16px 20px',
            fontSize: 17,
            color: ink.soft,
          }}
        >
          🎉 <strong>Complete Application!</strong> The user can click any button, the state updates
          in memory, and the screen re-renders instantaneously.
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ─── 32. Socratic AI Challenge ────────────────────────────────────────────────

const SocraticAiChallenge: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 06 · AI Tutor Challenge"
      title="Socratic AI Challenge: The Doorbell Analogy"
      subtitle="Cementing the conceptual mechanics of callback functions using your personal AI tutor"
    />
    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div
          style={{
            background: ink.panel,
            border: `1.5px solid ${ink.accentBorder}`,
            borderRadius: 18,
            padding: '26px 30px',
            boxShadow: shadow.card,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <IconSparkles size={32} color={ink.accent} />
            <span
              style={{
                fontSize: 18,
                fontWeight: 800,
                color: ink.accent,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Copy &amp; Paste Prompt to Your AI Tutor:
            </span>
          </div>
          <div
            style={{
              padding: '18px 22px',
              borderRadius: 12,
              background: '#ffffff',
              border: `1px solid ${ink.border}`,
              fontFamily: font.mono,
              fontSize: 20,
              lineHeight: 1.5,
              color: ink.text,
            }}
          >
            "What is an 'event listener callback function' in JavaScript? Explain it using an
            everyday analogy like a doorbell or telephone, and explain why we do NOT put parentheses
            when attaching it."
          </div>
        </div>

        <div
          style={{
            background: ink.skySoft,
            border: `1px solid ${ink.sky}`,
            borderRadius: 14,
            padding: '16px 20px',
            fontSize: 18,
            color: ink.soft,
          }}
        >
          💡 <strong>Discussion Question:</strong> Why is passing <code>btn.addEventListener("click", sayHello)</code>{' '}
          fundamentally different from <code>btn.addEventListener("click", sayHello())</code>?
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div
          style={{
            background: '#ffffff',
            border: `1px solid ${ink.border}`,
            borderRadius: 18,
            padding: '24px 28px',
            boxShadow: shadow.card,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          <h4 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: ink.text }}>
            What to Look for in the AI's Response:
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              {
                title: 'Registration vs Execution',
                desc: 'Giving someone your phone number is registration; ringing it later is execution.',
              },
              {
                title: 'The Parentheses Trap',
                desc: 'Parentheses () invoke the function immediately during page load, returning undefined to the listener.',
              },
              {
                title: 'Asynchronous Invocation',
                desc: 'The browser holds the reference and invokes it later on demand.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: '12px 16px',
                  background: ink.panel,
                  borderRadius: 10,
                  border: `1px solid ${ink.border}`,
                }}
              >
                <strong style={{ color: ink.accent }}>{item.title}: </strong>
                <span style={{ color: ink.muted, fontSize: 17 }}>{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ─── 33. Part 7 Divider ───────────────────────────────────────────────────────

const Part7Divider: Page = () => (
  <ChapterDivider
    num="07"
    title="Real-World Interactive UI Patterns"
    subtitle="Essential production patterns every modern web engineer implements"
    bullets={[
      'Modal dialogs with backdrop dismissal & Escape key listeners',
      'Interactive accordions & collapsible FAQ panels',
      'Real-time client-side search filtering',
    ]}
    icon={<IconBox size={36} color={ink.accent} />}
  />
);

// ─── 34. Pattern 1: Modal Dialog ──────────────────────────────────────────────

const PatternModalDialog: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 07 · Production Patterns"
      title="Pattern 1: Modal Dialog & Backdrop Dismissal"
      subtitle="Coordinating multi-trigger overlays with click, backdrop, and Escape key listeners"
    />
    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div
          style={{
            background: ink.panel,
            border: `1px solid ${ink.border}`,
            borderRadius: 18,
            padding: '24px 28px',
            boxShadow: shadow.card,
          }}
        >
          <h4 style={{ margin: '0 0 14px 0', fontSize: 24, fontWeight: 800, color: ink.text }}>
            The 3 Ways to Close a Modal:
          </h4>
          <ol style={{ margin: 0, paddingLeft: 22, fontSize: 19, color: ink.soft, lineHeight: 1.6 }}>
            <li>Clicking the explicit <strong>"Close" (X)</strong> button inside the modal.</li>
            <li>Clicking outside on the darkened <strong>Backdrop Overlay</strong> (<code>e.target === overlay</code>).</li>
            <li>Pressing the <strong>Escape</strong> key anywhere on the keyboard (<code>e.key === "Escape"</code>).</li>
          </ol>
        </div>

        <div
          style={{
            padding: '16px 20px',
            background: ink.skySoft,
            border: `1px solid ${ink.sky}`,
            borderRadius: 14,
            fontSize: 18,
            color: ink.soft,
          }}
        >
          💡 <strong>Key Technique:</strong> Check <code>e.target === modalOverlay</code> to avoid
          closing when the user clicks inside the white modal content box!
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <CodeWindow
          title="modal-pattern.js"
          badge="Accessible Overlay"
          badgeColor={ink.purple}
          fontSize={18}
          code={`const modal = document.querySelector("#modal-overlay");
const openBtn = document.querySelector("#open-btn");
const closeBtn = document.querySelector("#close-btn");

function openModal() { modal.classList.remove("hidden"); }
function closeModal() { modal.classList.add("hidden"); }

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

// Backdrop click:
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// Escape key listener:
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});`}
        />
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ─── 35. Pattern 2: Stateful Accordion ────────────────────────────────────────

const PatternAccordionPanel: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 07 · Production Patterns"
      title="Pattern 2: Stateful Accordion / Collapsible FAQ"
      subtitle="Toggling interactive active classes and managing single-open vs multi-open logic"
    />
    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div
          style={{
            background: ink.panel,
            border: `1px solid ${ink.border}`,
            borderRadius: 18,
            padding: '24px 28px',
            boxShadow: shadow.card,
          }}
        >
          <h4 style={{ margin: '0 0 14px 0', fontSize: 24, fontWeight: 800, color: ink.text }}>
            How Accordions Work:
          </h4>
          <p style={{ margin: '0 0 12px 0', fontSize: 20, color: ink.soft, lineHeight: 1.5 }}>
            Each accordion question header is wired with a click listener. Toggling the{' '}
            <code>.active</code> class on the parent accordion item allows CSS transitions to expand
            the answer smoothly.
          </p>
          <div
            style={{
              padding: '12px 16px',
              borderRadius: 10,
              background: '#ffffff',
              border: `1px solid ${ink.border}`,
              fontSize: 17,
              color: ink.muted,
            }}
          >
            🔒 <strong>Bonus Rule:</strong> In single-open accordions, loop over all sibling panels
            and remove <code>.active</code> before opening the clicked item!
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <CodeWindow
          title="accordion-pattern.js"
          badge="Interactive Accordion"
          badgeColor={ink.sky}
          fontSize={18}
          code={`const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
  header.addEventListener("click", () => {
    const parentItem = header.parentElement;
    
    // Optional: Close other open items:
    document.querySelectorAll(".accordion-item").forEach(item => {
      if (item !== parentItem) item.classList.remove("active");
    });

    // Toggle clicked item:
    parentItem.classList.toggle("active");
  });
});`}
        />
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ─── 36. Pattern 3: Real-Time List Filter Preview ─────────────────────────────

const PatternLiveFilter: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 07 · Production Patterns"
      title="Pattern 3: Real-Time Search Filter"
      subtitle="Connecting an input listener to DOM list visibility without heavy frameworks"
    />
    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div
          style={{
            background: ink.panel,
            border: `1px solid ${ink.border}`,
            borderRadius: 18,
            padding: '24px 28px',
            boxShadow: shadow.card,
          }}
        >
          <h4 style={{ margin: '0 0 14px 0', fontSize: 24, fontWeight: 800, color: ink.text }}>
            Filtering Mechanics:
          </h4>
          <ol style={{ margin: 0, paddingLeft: 22, fontSize: 19, color: ink.soft, lineHeight: 1.6 }}>
            <li>Listen for <code>"input"</code> on the search input box.</li>
            <li>Convert query to lowercase: <code>query.toLowerCase()</code>.</li>
            <li>Iterate through list items with <code>querySelectorAll("li")</code>.</li>
            <li>Compare <code>item.textContent.toLowerCase()</code> with query.</li>
            <li>Toggle <code>item.style.display = match ? "block" : "none"</code>.</li>
          </ol>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <CodeWindow
          title="live-filter.js"
          badge="Instant Search"
          badgeColor={ink.mint}
          fontSize={18}
          code={`const searchBox = document.querySelector("#search-box");
const contactItems = document.querySelectorAll(".contact-item");

searchBox.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase().trim();

  contactItems.forEach(item => {
    const text = item.textContent.toLowerCase();
    const isMatch = text.includes(searchTerm);

    // Toggle visibility:
    item.style.display = isMatch ? "flex" : "none";
  });
});`}
        />
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ─── 37. Part 8 Divider ───────────────────────────────────────────────────────

const Part8Divider: Page = () => (
  <ChapterDivider
    num="08"
    title="Homework Assignments & Milestone Bridge"
    subtitle="Applying event-driven state and input mechanics to comprehensive deliverables"
    bullets={[
      'Homework 1: Interactive Task Tracker & Filter',
      'Homework 2: Quick Budget & Expense Logger',
      'Milestone summary & Bridge to Session 09 (Array Iteration)',
    ]}
    icon={<IconCheck size={36} color={ink.accent} />}
  />
);

// ─── 38. Homework Showcase & Bridge to Session 09 ─────────────────────────────

const HomeworkAndBridge: Page = () => (
  <div style={fill}>
    <SlideHeader
      part="Part 08 · Synthesis & Next Steps"
      title="Homework Showcase & Bridge to Session 09"
      subtitle="Cementing event-driven state architecture before advancing to collection rendering"
    />
    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div
          style={{
            background: ink.panel,
            border: `1.5px solid ${ink.border}`,
            borderRadius: 18,
            padding: '24px 28px',
            boxShadow: shadow.card,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
            <span style={{ fontSize: 16, fontWeight: 700, color: ink.accent, textTransform: 'uppercase' }}>
              Homework Assignment 1
            </span>
            <span style={{ fontFamily: font.mono, fontSize: 14, color: ink.dim }}>tasks.html · tasks.js</span>
          </div>
          <h4 style={{ margin: '0 0 10px 0', fontSize: 24, fontWeight: 800, color: ink.text }}>
            Interactive Task Tracker &amp; Filter
          </h4>
          <p style={{ margin: 0, fontSize: 18, color: ink.muted, lineHeight: 1.5 }}>
            Build a task list with real-time text input, an add button, complete/strike-through toggles,
            and an active/completed filter bar using event delegation.
          </p>
        </div>

        <div
          style={{
            background: ink.panel,
            border: `1.5px solid ${ink.border}`,
            borderRadius: 18,
            padding: '24px 28px',
            boxShadow: shadow.card,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
            <span style={{ fontSize: 16, fontWeight: 700, color: ink.sky, textTransform: 'uppercase' }}>
              Homework Assignment 2
            </span>
            <span style={{ fontFamily: font.mono, fontSize: 14, color: ink.dim }}>budget.html · budget.js</span>
          </div>
          <h4 style={{ margin: '0 0 10px 0', fontSize: 24, fontWeight: 800, color: ink.text }}>
            Quick Budget &amp; Expense Logger
          </h4>
          <p style={{ margin: 0, fontSize: 18, color: ink.muted, lineHeight: 1.5 }}>
            Build a ledger where users enter an item description and dollar amount. Track running
            total balance in memory and update status colors dynamically.
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div
          style={{
            background: '#ffffff',
            border: `2px solid ${ink.accent}`,
            borderRadius: 18,
            padding: '26px 30px',
            boxShadow: shadow.window,
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <IconSparkles size={32} color={ink.accent} />
            <h4 style={{ margin: 0, fontSize: 24, fontWeight: 900, color: ink.text }}>
              Coming Next: Session 09
            </h4>
          </div>
          <span style={{ fontSize: 20, fontWeight: 700, color: ink.accent }}>
            Array Iteration &amp; Dynamic Card Rendering
          </span>
          <p style={{ margin: 0, fontSize: 18, color: ink.soft, lineHeight: 1.5 }}>
            In Session 08, we connected single buttons and inputs to state variables. Next session,
            we will take entire collections of data objects, loop through them using{' '}
            <code>for...of</code> and <code>forEach</code>, and dynamically generate rich card grids!
          </p>
          <div
            style={{
              padding: '12px 16px',
              borderRadius: 12,
              background: ink.panel,
              fontFamily: font.mono,
              fontSize: 16,
              color: ink.muted,
            }}
          >
            [User Input] $\rightarrow$ [Array of 50 Objects] $\rightarrow$ [Dynamic Grid Cards]
          </div>
        </div>
      </div>
    </div>
    <SlideFooter />
  </div>
);

// ─── Slide Notes Export ────────────────────────────────────────────────────────

export const notes: (string | undefined)[] = [
  // 01. Cover
  `Welcome to Session 08: Event-Driven Programming: Clicks, Inputs & State!
Today marks a monumental shift in our engineering journey: we transition from static documents that merely sit on the screen to responsive, reactive applications that listen for human intent.`,

  // 02. Agenda
  `Walk through our 2-hour schedule.
Emphasize that we will dedicate 45 minutes to foundational theory and mental models, followed by a full 55-minute hands-on build where every student writes interactive JavaScript.`,

  // 03. Part 1 Divider
  `Introduce Part 1: The Event-Driven Mental Model.
We need to understand how JavaScript, despite being single-threaded, manages to wait for clicks without freezing our browser.`,

  // 04. Sync vs Event-Driven
  `Contrast procedural code with event-driven code.
Explain that procedural code finishes in milliseconds upon page load. Event listeners, on the other hand, register a subscription in memory and patiently wait for the user.`,

  // 05. The Browser Event Loop Architecture
  `Walk through the Event Loop architecture step-by-step:
1. Call Stack handles immediate synchronous execution.
2. Web APIs monitor hardware events in the background.
3. Callback Queue holds waiting functions.
4. Event Loop checks if Stack is empty before executing.`,

  // 06. Single-Threaded Non-Blocking Reality
  `Emphasize that JavaScript has one main thread.
Show why a blocking loop freezes the entire tab, and why event callbacks are designed to execute in a fraction of a millisecond and yield control back to the browser.`,

  // 07. Part 2 Divider
  `Introduce Part 2: addEventListener & The Callback Contract.
This is the workhorse API of web interactivity.`,

  // 08. The Doorman Metaphor
  `Present the Doorman Metaphor:
Target element is the lobby door. Event string is the visitor ringing the bell. Callback function is the instruction sheet the doorman follows.
Remind students not to include parentheses when passing the callback!`,

  // 09. Anonymous vs Named Handler Functions
  `Compare inline anonymous arrow functions with named handler functions.
Recommend named functions for production code because they produce readable stack traces and can be detached later.`,

  // 10. Event Types Arsenal
  `Review the primary event categories: Mouse, Keyboard, Form, and Window lifecycle.
Point out that 'input' and 'change' are subtly different, which we will explore in detail in Part 5.`,

  // 11. Listener Lifecycle & removeEventListener
  `Explain the anonymous function memory trap!
Because two anonymous functions create distinct references in RAM, you cannot remove an anonymous listener. You must maintain a reference to the function.`,

  // 12. Part 3 Divider
  `Introduce Part 3: The Event Object & Event Propagation.
When an event fires, the browser doesn't just call our function—it delivers a rich information payload.`,

  // 13. Anatomy of the Event Object
  `Explain the Event object passed as parameter 'e'.
Highlight e.target (the node clicked) vs e.currentTarget (the node with the listener), as well as coordinate and modifier key flags.`,

  // 14. Preventing Default Actions
  `Demonstrate e.preventDefault().
Explain that HTML forms default to an HTTP submit that reloads the whole page. Calling preventDefault() allows client-side JS to take full control.`,

  // 15. Event Bubbling & Capturing
  `Explain event propagation through the DOM tree.
Show how events trickle down in the capturing phase and bubble back up to the document root. Bubbling is what makes event delegation possible.`,

  // 16. Event Delegation Pattern
  `Present the Event Delegation pattern:
Instead of attaching 100 listeners to 100 list items, attach 1 listener on the parent container. Use e.target.closest() to identify the clicked button.`,

  // 17. Part 4 Divider
  `Introduce Part 4: UI State: Memory That Drives The View.
This is the most critical architectural concept in frontend engineering.`,

  // 18. What is State?
  `Define State clearly:
State is the minimal data in JavaScript variables that dictates the screen. The DOM is just a reflection of memory; memory is the single source of truth.`,

  // 19. The State-Action-Render Loop
  `Walk through the Unidirectional Data Flow:
User Interaction -> Mutate State in RAM -> Re-render DOM.
This loop is the foundation of React, Vue, Svelte, and modern web architecture.`,

  // 20. The "State in the DOM" Anti-Pattern
  `Call out the common beginner mistake of reading and parsing values from textContent.
Show how currency symbols or formatted strings break parseInt and cause NaN errors. Always keep the number in a variable!`,

  // 21. Coordinating Compound State
  `Show how multiple state variables coordinate.
Updating count also updates disabled states on buttons; toggling theme updates both body classes and button labels.`,

  // 22. Part 5 Divider
  `Introduce Part 5: Live Inputs, Form Controls & Real-Time Feedback.
Handling user keystrokes in real time.`,

  // 23. Reading Input Values with input.value
  `Explain input.value:
Always returns a string, even for numeric inputs. Emphasize parsing with Number() and trimming whitespace with .trim().`,

  // 24. Input vs Change vs Keydown
  `Distinguish the timing of 'input' (instantaneous per keystroke), 'change' (on blur or selection change), and 'keydown' (detecting Escape, Enter, or hotkeys).`,

  // 25. Live Character Counter
  `Walk through building a real-time character counter.
Listening to 'input', calculating remaining characters, and dynamically changing color when approaching the limit.`,

  // 26. Form Submission & Validation Pipeline
  `Review the 4-step form pipeline: intercept with preventDefault(), extract values, validate rules, and show user feedback.`,

  // 27. Part 6 Divider
  `Introduce Part 6: Hands-on Lab: Interactive Click Counter & Theme Switcher.
Time to build our production component together.`,

  // 28. Lab Architecture & Layout
  `Review the HTML layout and CSS classes of counter.html.
Point out the theme button, big counter heading, and the three control buttons.`,

  // 29. Lab Step 1: State & DOM Caching
  `Guide students through Step 1:
Initialize 'let count = 0;' and query all five required elements into const variables at the top of counter.js.`,

  // 30. Lab Step 2: The View Sync Function
  `Guide students through Step 2:
Write updateDisplay(). Set textContent to count and apply conditional colors for positive, negative, and zero.`,

  // 31. Lab Step 3: Wiring Listeners
  `Guide students through Step 3:
Attach click listeners to increment, decrement, reset, and the theme toggle. Celebrate seeing the application come alive!`,

  // 32. Socratic AI Challenge
  `Introduce the Socratic AI Challenge.
Have students prompt their AI tutor about the doorbell analogy and explain why we do not write parentheses when attaching callbacks.`,

  // 33. Part 7 Divider
  `Introduce Part 7: Real-World Interactive UI Patterns.
Three patterns that students will encounter in every professional frontend codebase.`,

  // 34. Pattern 1: Modal Dialog
  `Review the Modal Dialog pattern:
Closing via close button, clicking the backdrop overlay, and pressing the Escape key.`,

  // 35. Pattern 2: Stateful Accordion
  `Review the Stateful Accordion pattern:
Toggling .active classes on FAQ panels and optionally collapsing sibling panels.`,

  // 36. Pattern 3: Real-Time List Filter Preview
  `Review the Real-Time Search Filter pattern:
Iterating list items on every keystroke and setting style.display based on text matching.`,

  // 37. Part 8 Divider
  `Introduce Part 8: Homework Assignments & Milestone Bridge.
Launching our two production homework deliverables.`,

  // 38. Homework Showcase & Bridge to Session 09
  `Present Homework 1 (Task Tracker) and Homework 2 (Budget Logger).
Congratulate students on completing Session 08 and tease Session 09: Array Iteration & Dynamic Card Rendering!`,
];

// ─── Slide Meta & Export Default ──────────────────────────────────────────────

export const meta: SlideMeta = {
  title: 'Session 08: Event-Driven Programming: Clicks, Inputs & State',
  createdAt: '2026-11-22T14:48:18.914Z',
  theme: 'open-slide-default',
};

export default [
  Cover,
  Agenda,
  Part1Divider,
  SyncVsEventDriven,
  EventLoopArchitecture,
  SingleThreadedNonBlocking,
  Part2Divider,
  DoormanMetaphor,
  AnonymousVsNamedHandlers,
  EventTypesArsenal,
  ListenerLifecycleRemove,
  Part3Divider,
  EventObjectAnatomy,
  PreventDefaultAction,
  EventBubblingAndCapturing,
  EventDelegationPattern,
  Part4Divider,
  WhatIsState,
  StateActionRenderLoop,
  StateInDomAntiPattern,
  CompoundStateCoordination,
  Part5Divider,
  ReadingInputValues,
  InputVsChangeVsKeydown,
  LiveCharacterCounter,
  FormSubmitValidation,
  Part6Divider,
  LabArchitectureLayout,
  LabStep1StateDomBinding,
  LabStep2UpdateDisplay,
  LabStep3WiringListeners,
  SocraticAiChallenge,
  Part7Divider,
  PatternModalDialog,
  PatternAccordionPanel,
  PatternLiveFilter,
  Part8Divider,
  HomeworkAndBridge,
] satisfies Page[];
