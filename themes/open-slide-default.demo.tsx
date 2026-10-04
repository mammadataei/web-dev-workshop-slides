import { type DesignSystem, type Page, useSlidePageNumber } from '@open-slide/core';
import type { CSSProperties } from 'react';

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

const ink = {
  soft: '#404040',
  muted: '#6b6b6b',
  dim: '#a3a3a3',
  rule: '#e4e4e4',
  hairline: '#ececec',
  panel: '#f7f7f7',
};

const mono = '"Geist Mono", ui-monospace, "SF Mono", Menlo, Consolas, monospace';

const fill: CSSProperties = {
  width: '100%',
  height: '100%',
  position: 'relative',
  overflow: 'hidden',
  background: 'var(--osd-bg)',
  color: 'var(--osd-text)',
  fontFamily: 'var(--osd-font-body)',
  letterSpacing: '-0.01em',
  WebkitFontSmoothing: 'antialiased' as const,
};

const pad2 = (n: number) => String(n).padStart(2, '0');

const css = `
  .d { animation-timing-function: cubic-bezier(0.22,1,0.36,1); animation-fill-mode: both; }
  @keyframes d-rise { from { opacity: 0; transform: translateY(12px); } }
  @keyframes d-fade { from { opacity: 0; } }
  .d-rise { animation-name: d-rise; animation-duration: 0.7s; }
  .d-fade { animation-name: d-fade; animation-duration: 0.45s; }
`;
const Styles = () => <style>{css}</style>;

const Mark = () => (
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
);

const Footer = () => {
  const { current, total } = useSlidePageNumber();
  return (
    <div
      style={{
        position: 'absolute',
        left: 120,
        right: 120,
        bottom: 88,
        display: 'flex',
        justifyContent: 'space-between',
        fontFamily: mono,
        fontSize: 20,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: ink.dim,
      }}
    >
      <span>open-slide · default theme</span>
      <span>
        {pad2(current)} / {pad2(total)}
      </span>
    </div>
  );
};

const Cover: Page = () => (
  <div style={{ ...fill, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 160px' }}>
    <Styles />
    <div className="d d-fade" style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 48 }}>
      <div style={{ width: 16, height: 16, borderRadius: 4, background: 'var(--osd-accent)' }} />
      <span style={{ fontFamily: mono, fontSize: 20, letterSpacing: '0.12em', textTransform: 'uppercase', color: ink.dim }}>
        Theme Demo
      </span>
    </div>
    <h1
      className="d d-rise"
      style={{
        margin: 0,
        fontFamily: 'var(--osd-font-display)',
        fontSize: 'var(--osd-size-hero)',
        fontWeight: 900,
        letterSpacing: '-0.04em',
        lineHeight: 1,
        animationDelay: '0.05s',
      }}
    >
      Open Slide
      <br />
      <span style={{ color: 'var(--osd-accent)' }}>Default</span>
    </h1>
    <p
      className="d d-rise"
      style={{ margin: '40px 0 0', fontSize: 36, color: ink.muted, maxWidth: 1000, lineHeight: 1.45, animationDelay: '0.14s' }}
    >
      Clean white editorial · red accent · Geist typography
    </p>
    <Footer />
  </div>
);

const Content: Page = () => (
  <div style={fill}>
    <Styles />
    <Mark />
    <div
      className="d d-rise"
      style={{
        position: 'absolute',
        left: 148,
        top: 96,
        fontSize: 22,
        fontWeight: 500,
        color: 'var(--osd-accent)',
      }}
    >
      PART 01
    </div>
    <h2
      className="d d-rise"
      style={{
        position: 'absolute',
        left: 120,
        top: 138,
        margin: 0,
        fontFamily: 'var(--osd-font-display)',
        fontSize: 64,
        fontWeight: 500,
        letterSpacing: '-0.03em',
        lineHeight: 1.06,
        animationDelay: '0.06s',
      }}
    >
      Content Page Layout
    </h2>
    <p
      className="d d-rise"
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
      Red mark · eyebrow label · heading · lead line · body content area. Footer uses monospace uppercase.
    </p>
    <div style={{ position: 'absolute', left: 120, right: 120, top: 316, bottom: 160 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
        {['Palette: 1 bg · 1 text · 1 accent · supporting grays', 'Typography: Geist sans + Geist Mono', 'Motion: subtle entrance keyframes, no transitions by default'].map((txt, i) => (
          <div
            key={i}
            className="d d-rise"
            style={{ display: 'flex', alignItems: 'center', gap: 24, animationDelay: `${0.18 + i * 0.08}s` }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: 'var(--osd-accent)',
                flexShrink: 0,
              }}
            />
            <span style={{ fontSize: 34, lineHeight: 1.4, color: ink.soft }}>{txt}</span>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

const Closer: Page = () => (
  <div
    style={{
      ...fill,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Styles />
    <div
      className="d d-fade"
      style={{
        width: 64,
        height: 64,
        borderRadius: 16,
        background: 'var(--osd-accent)',
        marginBottom: 48,
      }}
    />
    <p
      className="d d-rise"
      style={{ margin: 0, fontFamily: mono, fontSize: 22, letterSpacing: '0.14em', textTransform: 'uppercase', color: ink.dim, animationDelay: '0.08s' }}
    >
      Open Slide Default Theme
    </p>
    <h2
      className="d d-rise"
      style={{
        margin: '16px 0 0',
        fontFamily: 'var(--osd-font-display)',
        fontSize: 80,
        fontWeight: 700,
        letterSpacing: '-0.04em',
        animationDelay: '0.14s',
      }}
    >
      Ready to build.
    </h2>
    <Footer />
  </div>
);

export default [Cover, Content, Closer] satisfies Page[];
