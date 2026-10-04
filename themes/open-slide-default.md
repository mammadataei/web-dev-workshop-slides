---
name: Open Slide Default
description: Clean white editorial with a red accent, Geist font stack, and subtle motion — the house style used in the getting-started deck.
mode: light
---

# Open Slide Default

## Palette

| Role        | Value                      | Notes                                            |
| ----------- | -------------------------- | ------------------------------------------------ |
| bg          | `#ffffff`                  | Page background                                  |
| text        | `#0a0a0a`                  | Primary copy                                     |
| accent      | `#de3b3d`                  | Eyebrow labels, key callouts, the 16×16 mark dot |
| soft        | `#404040`                  | Secondary headings, subheads                     |
| muted       | `#6b6b6b`                  | Body paragraphs, supportive copy                 |
| dim         | `#a3a3a3`                  | Captions, footer                                 |
| rule        | `#e4e4e4`                  | Dividers, borders                                |
| hairline    | `#ececec`                  | Window chrome borders                            |
| panel       | `#f7f7f7`                  | Code/panel backgrounds                           |
| accentSoft  | `rgba(222, 59, 61, 0.10)`  | Accent tint for highlights                       |

## Typography

- Display font: `"Geist Variable", Geist, -apple-system, BlinkMacSystemFont, "Inter", system-ui, sans-serif` — weight 500–900 for headings.
- Body font: same stack — weight 400–500.
- Mono font: `"Geist Mono", ui-monospace, "SF Mono", Menlo, Consolas, monospace` — used for code, footer labels, window chrome.
- Webfont: none required (falls back gracefully to Inter → system-ui).
- Type-scale overrides:
  - Hero title: 152 px
  - Body text: 32 px
  - Eyebrow / label: 22 px, weight 500

## Layout

- Content padding: 120 px from canvas edges (1920 × 1080).
- Alignment: left-aligned editorial.
- Footer: absolute, bottom 88 px, left/right 120 px — monospace uppercase, 20 px, dim colour.
- Red mark: 16 × 16 px, borderRadius 4, accent colour, absolute at left 120 / top 101.
- Eyebrow: left 148 (with mark) or 120 (no mark), top 96, 22 px, weight 500, accent colour.
- Main heading: left 120, top 138, 64 px, weight 500, letterSpacing -0.03em, lineHeight 1.06.
- Lead paragraph: left 120, top 224, maxWidth 1240, 26 px, lineHeight 1.45, soft colour.
- Content area: left 120, right 120, top 316 (with lead) or 280 (no lead), bottom 160.

## Fixed components

### Mark

```tsx
const Mark = () => (
  <MorphElement id="mark">
    <div style={{ position: 'absolute', left: 120, top: 101, width: 16, height: 16, borderRadius: 4, background: 'var(--osd-accent)' }} />
  </MorphElement>
);
```

### Footer

```tsx
const Footer = () => {
  const { current, total } = useSlidePageNumber();
  return (
    <div style={{
      position: 'absolute', left: 120, right: 120, bottom: 88,
      display: 'flex', justifyContent: 'space-between',
      fontFamily: '"Geist Mono", ui-monospace, "SF Mono", Menlo, Consolas, monospace',
      fontSize: 20, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#a3a3a3',
    }}>
      <span>open-slide · session 01</span>
      <span>{pad2(current)} / {pad2(total)}</span>
    </div>
  );
};
```

### Frame

```tsx
const Frame = ({ eyebrow, title, lead, mark: showMark = true, children }: {
  eyebrow: string; title: ReactNode; lead?: ReactNode; mark?: boolean; children: ReactNode;
}) => {
  const active = useIsActivePage();
  return (
    <div style={fill} data-still={active ? undefined : ''}>
      <Styles />
      {showMark && <Mark />}
      <div className="gs gs-rise" style={{ position: 'absolute', left: showMark ? 148 : 120, top: 96, fontSize: 22, fontWeight: 500, color: 'var(--osd-accent)' }}>
        {eyebrow}
      </div>
      <h2 className="gs gs-rise" style={{ position: 'absolute', left: 120, top: 138, margin: 0, fontFamily: 'var(--osd-font-display)', fontSize: 64, fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1.06, animationDelay: '0.06s' }}>
        {title}
      </h2>
      {lead && (
        <p className="gs gs-rise" style={{ position: 'absolute', left: 120, top: 224, margin: 0, maxWidth: 1240, fontSize: 26, lineHeight: 1.45, color: '#404040', animationDelay: '0.12s' }}>
          {lead}
        </p>
      )}
      <div style={{ position: 'absolute', left: 120, right: 120, top: lead ? 316 : 280, bottom: 160 }}>
        {children}
      </div>
      <Footer />
    </div>
  );
};
```

## Motion

- Philosophy: **subtle** — entrance animations on every content element; keyframe-driven looping diagrams for key interactive pages. House transition is a soft 200ms translateY rise.
- Reusable keyframes:

```css
.gs { animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1); animation-fill-mode: both; }
[data-still] .gs { animation: none !important; }
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
```

## Aesthetic

Clean, editorial, product-grade light UI. White backgrounds with a single red accent acting as a chapter marker. Geist's neutral geometry reads as technical precision. No gradients, no drop shadows heavier than window chrome, no rounded corners above 12 px. Copy is tight (letterSpacing -0.01em at body, -0.03em at heading). Everything is left-aligned; centre-aligned copy is reserved for cover heroes only.

## Example usage

```tsx
const Content: Page = () => (
  <Frame eyebrow="PART 01" title="Client-Server Model" lead="Every web interaction is a conversation between two parties.">
    <Steps>
      <Step><div style={{ fontSize: 36, color: '#404040', lineHeight: 1.5 }}>Client (browser) = the customer</div></Step>
      <Step><div style={{ fontSize: 36, color: '#404040', lineHeight: 1.5 }}>Server = the kitchen</div></Step>
      <Step><div style={{ fontSize: 36, color: '#de3b3d', fontWeight: 600, lineHeight: 1.5 }}>HTTP = the waiter</div></Step>
    </Steps>
  </Frame>
);
```
