# workshop-slides

Slide decks for **Web Development Fundamentals in the AI Era** — a 14-session / 28-hour course.

Course syllabus and session plans: [`COURSE_MATERIAL.md`](./COURSE_MATERIAL.md).  
Homework assignments: [`homework/`](./homework/README.md).


## Decks

| Deck | Title | Status |
| --- | --- | --- |
| `slides/session-01/` | Session 01: How the Web Works | Done |
| `slides/session-02/` … `session-14` | See roadmap in `COURSE_MATERIAL.md` | Planned |

## Run

Requires [Bun](https://bun.sh/docs/installation). Install it first, then:

```bash
bun install
bun dev
```

Open the dev server URL, pick a deck, and browse.

| Command | Description |
| --- | --- |
| `bun dev` | Start the dev server with hot reload. |
| `bun run build` | Build a static bundle into `dist/`. |
| `bun run preview` | Preview the built bundle locally. |

## Use

- Arrow keys / PageUp / PageDown move between pages.
- `F` enters fullscreen play mode; Esc exits.
- In play mode: Space / → next, ← prev.
