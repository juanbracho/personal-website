# Handoff: juanbracho.com — "The Bracho Record" Broadsheet Redesign

## Overview

A full visual redesign of [juanbracho.com](https://juanbracho.com), Juan Bracho's personal site. The existing site is a React (CRA) app built around a "Desk" metaphor — wood-grain background, draggable cards, coffee stains. It works, but it reads as a toy before it reads as the portfolio of an operations and compliance professional with an MA in Business Law.

**This redesign replaces the visual language entirely. The content does not change.** Every role, essay, app, book, and credential currently on the site stays. What changes is the frame around them.

The new direction is **a newspaper broadsheet printed on a desk** — "The Bracho Record." A Bodoni masthead, warm newsprint ground, typewriter-set labels, real editorial grid. The personality that used to live in the wallpaper (drag physics, wood, coffee rings) now lives in the structure: employment history is set as a broadsheet grid, apps are sold as boxed classified ads, essays run as column briefs, the reading list is a physical shelf, and the photo is a taped polaroid.

**Target tone:** professional first, playful second. The user explicitly calibrated this at roughly **60/100 on a fun scale** — noticeably more characterful than a standard résumé site, but never at the expense of a recruiter scanning it in ten seconds.

**Primary audience:** hiring managers and recruiters in compliance and operations.

---

## About the Design Files

The files in this bundle are **design references created in HTML** — a prototype demonstrating intended layout, typography, color, and behavior. **They are not production code to copy directly into the app.**

The task is to **recreate this design inside the existing React codebase** (`juanbracho.com`, Create React App + React Router), using its established component and routing patterns. All existing data files (`appsData.js`, `booksData.js`, `articlesData.js`, `projectsData.js`, `data.js`) are the source of truth for content and must be wired in — the prototype hardcodes content only because it had no access to those modules at build time.

Do not port the prototype's inline `<script>` blocks or its single-file CSS wholesale. Translate them into components and CSS modules consistent with the existing repo.

---

## Fidelity

**High-fidelity.** Colors, typography, spacing, and interaction states in the prototype are final and should be matched closely. Exact values are documented in the Design Tokens section below.

Two deliberate exceptions, both flagged in the prototype UI itself:

1. **The book shelf uses placeholder titles.** The twelve spine labels in the prototype are invented and must be replaced with real data from `src/components/booksData.js`. The prototype visibly labels this section "Placeholder titles" so it cannot be shipped by accident.
2. **The polaroid photo** uses `assets/profile.png` (a formal headshot). If a more casual travel photo is preferred, swap the image and update the handwritten caption to match.

---

## Screens / Views

The prototype delivers **the homepage** in full. Interior pages are specified below but not built — they should extend the same visual system.

### 1. Homepage — "The Bracho Record" (built)

**Purpose:** A recruiter or hiring manager lands here and, without scrolling, learns who Juan is and what he does. Scrolling gives them full employment history, credentials, capabilities, and evidence that he builds things.

**Page container:** `max-width: 1180px`, centered, `padding: 0 26px 80px`.

**Background:** `#efe9dc` (warm newsprint) with a subtle two-layer paper grain:
```css
background-image:
  radial-gradient(circle at 12% 20%, rgba(0,0,0,.022) 0 1px, transparent 1px),
  radial-gradient(circle at 68% 62%, rgba(0,0,0,.018) 0 1px, transparent 1px);
background-size: 7px 7px, 11px 11px;
```

---

#### 1a. Dateline strip

- Flex row, `justify-content: space-between`, wraps on narrow screens
- `padding: 20px 0 10px`, `border-bottom: 1px solid #1b1a17`
- Special Elite, `10.5px`, `letter-spacing: .13em`, uppercase, `color: #5c574c`
- Three items: location + current date · `Vol. XXXI · No. 3` · `Weather: 30% chance of paperwork`
- **The date should be live** — render today's date, formatted `Monday, September 7, 2026`
- The volume number is a joke on his age/years; the weather line is the single driest gag on the page. Keep both.

#### 1b. Masthead

- Centered, `padding: 22px 0 12px`, `border-bottom: 3px double #1b1a17`
- `<h1>` "The Bracho Record" — Bodoni Moda, weight **900**, `font-size: clamp(44px, 10.5vw, 116px)`, `line-height: .9`, `letter-spacing: -.015em`
- Sub-line "Operations · Compliance · Occasional Software" — Special Elite, `10.5px`, `letter-spacing: .34em`, uppercase, `#5c574c`, `margin-top: 12px`

#### 1c. Lead story (two-column region)

Grid: `1.55fr .95fr`, `border-bottom: 2px solid #1b1a17`. Collapses to one column below 880px.

**Left — the story** (`padding: 26px 30px 26px 0`, `border-right: 1px solid #c8c0ac`):

| Element | Spec |
|---|---|
| Kicker | Special Elite `10.5px`, `.2em` tracking, uppercase, `#a8321f`. Text: "Page One · Who's Writing" |
| Headline | Bodoni Moda 700, `clamp(30px, 4.4vw, 50px)`, `line-height: 1.04`. Text: "I turn regulation into systems people *actually use*." — the italic phrase is `#a8321f` |
| Deck | Source Serif 4 italic, `18px`, `#5c574c`, `border-bottom: 1px solid #c8c0ac`, `padding-bottom: 16px` |
| Body | Two CSS columns, `column-gap: 26px`, `column-rule: 1px solid #c8c0ac`. Paragraphs `15.5px`, `line-height: 1.56`, `text-align: justify`, `hyphens: auto` |
| Drop cap | First paragraph `::first-letter` — Bodoni Moda 900, `56px`, `line-height: .82`, float left, `padding: 4px 8px 0 0`, `#a8321f` |
| Byline | Special Elite `10px`, `.13em`, uppercase, `#a49c8a`, `border-top: 1px solid #c8c0ac` |

Body copy (three paragraphs) is in the prototype and was approved — do not rewrite it.

**Right — the rail** (`padding: 26px 0 26px 28px`, flex column, `gap: 22px`):

**Polaroid**
- `background: #fdfbf5`, `padding: 11px 11px 0`, `max-width: 250px`, self-centered
- `transform: rotate(-2.2deg)`, `box-shadow: 0 6px 18px rgba(40,30,15,.18)`
- Tape strip via `::before`: `88px × 26px`, `background: rgba(212,190,140,.55)`, positioned `top: -13px`, centered, `rotate(-3deg)`
- Image: `width: 100%`, `height: 236px`, `object-fit: cover`, `object-position: center 18%`, `filter: grayscale(.35) contrast(1.06)` — the desaturation is what makes it read as newsprint
- Caption: Caveat `19px`, centered, `padding: 8px 4px 12px`

**"The Particulars" fact box**
- `border: 1px solid #c8c0ac`, `background: rgba(255,253,247,.6)`, `padding: 16px 18px`
- Heading: Special Elite `10px`, `.18em`, uppercase, `#5c574c`, underlined with `1px solid #c8c0ac`
- Five rows, each `display: flex; justify-content: space-between`. Label in Source Serif 600 (`14.5px`), value right-aligned in Special Elite `10.5px` `#a49c8a`
- Rows: Now / Based / Credential / Frameworks / Languages

**Stamp**
- `border: 2.5px solid #a8321f`, `color: #a8321f`, Special Elite `11px`, `.14em`, uppercase, `padding: 7px 12px`, `transform: rotate(-6deg)`, `opacity: .82`
- Text: "Available for the right thing"

---

#### 1d. Section headers (repeating pattern)

Used before every major section. Flex row, `align-items: center`, `gap: 14px`, `margin: 42px 0 20px`, `padding-bottom: 8px`, `border-bottom: 2px solid #1b1a17`.

- `<h2>`: Bodoni Moda 700, `clamp(22px, 3vw, 31px)`
- Right-aligned meta (`margin-left: auto`): Special Elite `10px`, `.16em`, uppercase, `#a49c8a` — used for counts and asides ("Four entries · 2017 to present")

---

#### 1e. Employment History

**A strict 2×2 grid at desktop** (`grid-template-columns: 1fr 1fr`), collapsing to one column below 640px.

> ⚠️ This was originally `auto-fit / minmax(290px, 1fr)`, which resolved to three columns and left the fourth card orphaned with a dangling table edge. **Keep it explicitly two columns.** If a fifth role is ever added, span the lead role across both columns rather than reverting to auto-fit.

Container has `border-left: 1px solid #c8c0ac`; each card carries `border-right` + `border-bottom` so the set reads as one ruled table.

Each card: `padding: 20px 22px`, `background: rgba(255,253,247,.35)`
- Date: Special Elite `10px`, `.12em`, uppercase, `#a8321f`
- Title: Bodoni Moda 700, `21px`
- Org + city: Source Serif italic `14px`, `#5c574c`
- Bullets: `14.5px`, `line-height: 1.5`, `padding-left: 16px`
- Tech pills: Special Elite `9.5px`, `.08em`, uppercase, `padding: 3px 8px`, `border: 1px solid #c8c0ac`, `color: #5c574c`, no radius

Four roles, in reverse chronological order — HydroGraph, Atwell, Avaya, MYRO. Wire from `src/components/data.js`.

---

#### 1f. The Workshop (apps as classified ads)

Grid `repeat(auto-fit, minmax(215px, 1fr))`, `gap: 14px`.

Each ad is a boxed advertisement:
- `border: 2px solid #1b1a17`, `padding: 18px 18px 16px`, centered text, `background: rgba(255,253,247,.5)`
- Inner hairline via `::after`: `position: absolute; inset: 4px; border: 1px solid #c8c0ac; pointer-events: none` — the double-rule is what sells the newspaper-ad look
- Kicker: Special Elite `9px`, `.2em`, uppercase, `#a49c8a` ("Now on iOS & Android")
- Name: Bodoni Moda **900**, `29px`
- Description: `14px`, `#5c574c`
- CTA: Special Elite `10px`, `.12em`, uppercase, `#a8321f`, `border-top: 1px solid #c8c0ac`, `padding-top: 9px`

Three apps: Kaizen, Kage, Kioku. Wire from `appsData.js`; link each to `/apps/:appId`.

---

#### 1g. Two-up region: Columns + Shelf

Grid `1.35fr 1fr`, `gap: 34px`, collapses below 880px.

**Left — "From the Columns"** (essays)

Each brief: flex row, `gap: 16px`, `align-items: baseline`, `padding: 14px 0`, `border-bottom: 1px solid #c8c0ac`
- Index number: Special Elite `10px`, `#a49c8a`
- Title: Bodoni Moda 700, `20px`, linked
- Subtitle: `14.5px` italic `#5c574c`
- Year: pushed right (`margin-left: auto`), Special Elite `10px`, `#a49c8a`

Wire from `articlesData.js`, filtered to featured, sorted by date descending. Link to `/writing/:articleId`.

**Right — "On the Shelf"**

- Container: `background: rgba(255,253,247,.5)`, `border: 1px solid #c8c0ac`, `padding: 18px 18px 0`
- Spine strip: flex row, `gap: 5px`, `align-items: flex-end`, `height: 150px`, `overflow: hidden`, bled to container edges with negative margins
- Shelf board: `border-bottom: 9px solid #6b4220` — the only wood left on the site, and it earns its place
- Each spine: `width: 26px`, varying heights (100–142px), `border-radius: 2px 2px 0 0`, `box-shadow: inset -3px 0 6px rgba(0,0,0,.18)`
- Spine label: `writing-mode: vertical-rl; transform: rotate(180deg)`, Special Elite `9px`, `rgba(255,250,240,.92)`, ellipsis on overflow
- Hover: `transform: translateY(-9px)`, `transition: .16s`

> 🔴 **Replace the placeholder titles with real data from `booksData.js`.** Assign each spine a color from the palette below and vary heights deterministically (the prototype uses `100 + ((i * 37) % 42)`). Consider linking through to `/study`.

---

#### 1h. Credentials

Grid `repeat(auto-fit, minmax(230px, 1fr))`, `gap: 16px`.

Each entry: `border-top: 3px solid #1b1a17`, `padding-top: 12px`
- Year: Special Elite `10px`, `.12em`, uppercase, `#a8321f`
- Degree: Bodoni Moda 700, `20px`
- School: Source Serif italic, `#1b1a17`
- Blurb: `14px`, `#5c574c`

Three entries from `data.js` — UADE, UT Austin, Universidad Rafael Urdaneta.

---

#### 1i. Capabilities strip

Grid `repeat(auto-fit, minmax(220px, 1fr))`, `gap: 22px`, bounded top and bottom by `1px solid #c8c0ac`, `padding: 20px 0`.

Four groups, each with a Special Elite `10px` `.14em` uppercase `#a8321f` heading and a `14px` `#5c574c` comma-run of skills. Wire from the `skills` object in `data.js`.

---

#### 1j. Classified footer

`border: 3px double #1b1a17`, `padding: 24px`, grid `repeat(auto-fit, minmax(220px, 1fr))`, `gap: 22px`.

Three columns:
1. **Correspondence** — email, LinkedIn, GitHub
2. **Also Inside** — links to the full shelf, projects, printable résumé
3. **Notice** — a Caveat `19px` handwritten note teasing the hidden border-crossing minigame

Column headings: Special Elite `10px`, `.16em`, uppercase, `#5c574c`, underlined `1px solid #c8c0ac`.

**Colophon** below, centered: Special Elite `10px`, `.16em`, uppercase, `#a49c8a` — "Set in Bodoni Moda, Source Serif & Special Elite · Printed in Austin · juanbracho.com"

---

### 2. Interior pages (specified, not built)

All interior pages keep the dateline, masthead (reduced), and classified footer so the paper feels continuous. Recommended treatments:

| Route | Page | Treatment |
|---|---|---|
| `/writing` | Essay index | Full-width column briefs, same pattern as the homepage section, with filter chips (All / On This Site / LinkedIn) |
| `/writing/:id` | Article reader | Single measure, `max-width: 680px`, Source Serif `18px`, drop cap on the opening paragraph, Caveat margin notes where the old site had doodles |
| `/apps` | Apps index | Full-page classified section — the three boxed ads at larger scale, each with screenshots |
| `/apps/:id` | App detail | Product page as a full-page advertisement: masthead-scale app name, phone mockup, spec table set like a classified |
| `/study` | Shelf + projects + CV | Three ruled sections down one page. Shelf at full size with hover cards; projects as a ruled table; CV as a printable column |
| `/about` | About | Lead-story treatment: long-form column text, the journey (VE → AR → US) as a dateline strip, timeline as a ruled list |
| `/contact` | Contact | Form styled as a classified submission — "Place your notice" — inputs as ruled lines |

---

## Interactions & Behavior

Deliberately restrained. The old site's drag-and-drop is **removed**.

| Interaction | Behavior |
|---|---|
| Book spine hover | `translateY(-9px)`, `transition: .16s`. Should also surface a title/author/rating popup (see the old `Study.js` implementation — use `position: fixed` off `getBoundingClientRect()` so it isn't clipped) |
| Job card hover | None currently. Optional: `background` lift to `rgba(255,253,247,.6)` |
| Ad hover | None currently. Optional: border color to `#a8321f` |
| Links | `color: #a8321f`, underline on hover. **Define `a` and `a:hover` globally** — the old site left some link states to browser defaults |
| Dateline date | Renders live from `new Date()` |
| Easter egg | The classified "Notice" hints at the border-crossing minigame. Trigger TBD — see the separate minigame planning doc |

**No scroll animations, no parallax, no reveal-on-scroll.** A newspaper does not animate.

---

## Responsive Behavior

| Breakpoint | Changes |
|---|---|
| `> 880px` | Full broadsheet: two-column lead, 2×2 jobs, two-up columns/shelf |
| `≤ 880px` | Lead story collapses to one column (rail moves below story, gains `border-top`); body text drops from two CSS columns to one; two-up region stacks |
| `≤ 640px` | Employment history goes single-column |

The masthead scales fluidly via `clamp()` and needs no breakpoint. Test the masthead at 320px — it is the tightest element on the page.

---

## State Management

Minimal. The homepage is essentially static.

- `books` — read from `booksData.js`, grouped for spine rendering
- `articles` — filtered to `featured === true`, sorted by date descending, sliced to 4
- Current date for the dateline
- If book hover popups are implemented: `hoveredBook` + anchor rect

No global state, no persistence. The old site's `localStorage` card-position system is obsolete and should be deleted along with `useDraggable.js`.

---

## Design Tokens

```css
--paper:  #efe9dc;  /* page ground, warm newsprint */
--paper2: #e7e0d0;  /* image placeholder ground */
--ink:    #1b1a17;  /* primary text, heavy rules */
--mid:    #5c574c;  /* secondary text */
--faint:  #a49c8a;  /* meta, labels, tertiary */
--red:    #a8321f;  /* accent: kickers, dates, links, stamp, drop cap */
--blue:   #2c4356;  /* reserved, book spines */
--rule:   #c8c0ac;  /* hairline rules, borders */
--tape:   rgba(212,190,140,.55);  /* polaroid tape */
--shelf:  #6b4220;  /* shelf board — the only wood left */
```

**Card fills:** `rgba(255,253,247,.35)` (jobs) · `rgba(255,253,247,.5)` (ads, shelf) · `rgba(255,253,247,.6)` (fact box) · `#fdfbf5` (polaroid)

**Book spine palette:** `#7c3f2a` `#2c4356` `#5e6b4a` `#8a5a32` `#a8321f` `#3f4a6b` `#6b5a2a` `#4a3550` `#2f5a4a` `#7a3550` `#3a4a3a` `#6b4220`

### Typography

| Face | Role | Weights |
|---|---|---|
| **Bodoni Moda** | Masthead, headlines, section heads, job titles, app names | 400 / 700 / 900 + italic |
| **Source Serif 4** | Body copy, bullets, descriptions | 400 / 600 + italic |
| **Special Elite** | Labels, kickers, dates, pills, meta, colophon | 400 |
| **Caveat** | Handwritten captions and the classified notice | 400 / 600 |

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,700;0,6..96,900;1,6..96,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&family=Special+Elite&family=Caveat:wght@400;600&display=swap" />
```

Base body: `16.5px`, `line-height: 1.55`.

**Special Elite is always uppercase with wide tracking** (`.08em` to `.34em` depending on size — tighter as size grows). This is the single most load-bearing typographic rule on the page.

### Rules & borders

| Use | Value |
|---|---|
| Hairline | `1px solid #c8c0ac` |
| Section head underline | `2px solid #1b1a17` |
| Masthead / classified box | `3px double #1b1a17` |
| Credential top rule | `3px solid #1b1a17` |
| Ad border | `2px solid #1b1a17` + `1px solid #c8c0ac` inset 4px |
| Shelf board | `9px solid #6b4220` |

**No border radius anywhere** except book spines (`2px 2px 0 0`) and tech pills (`0` — explicitly square). Rounded corners break the print illusion.

**No box shadows** except the polaroid (`0 6px 18px rgba(40,30,15,.18)`) and the shelf-spine inset.

---

## Assets

| Asset | Source | Notes |
|---|---|---|
| `assets/profile.png` | Existing repo (`src/assets/profile.png`), 284×406 PNG with transparency | Used in the polaroid. `object-position: center 18%` frames the face. `grayscale(.35)` applied |
| Fonts | Google Fonts | Four families, linked above |
| Book spine colors | Generated | No cover images needed — spines are pure CSS |

No icons, no illustrations, no SVG. Everything on the page is type, rules, and one photograph.

---

## Files in This Bundle

| File | What it is |
|---|---|
| `redesign-d-broadsheet.html` | **The design reference.** Complete homepage, self-contained. Open in a browser |
| `assets/profile.png` | The polaroid photograph |
| `redesign-a-register.html` | Rejected direction — filterable ledger. Included for context on what was explored |
| `redesign-b-statement.html` | Rejected direction — narrow essay column |
| `redesign-c-standing.html` | Rejected direction — fixed sidebar + scrolling records |

The three rejected directions are included only so the developer understands the range considered and why the broadsheet won: it was the one that got the site to "professional" without going boring.

---

## Implementation Notes

1. **Content is frozen.** This is a visual rework. Every string on the page either comes from an existing data file or was approved in the design conversation. Do not rewrite copy.
2. **Delete, don't migrate:** `useDraggable.js`, the wood-gradient tokens, coffee-ring and pen decorations, all `localStorage` card persistence.
3. **The two flagged placeholders must be resolved before ship** — book titles and the polaroid caption.
4. Keep the existing routing and legacy redirects (`/articles` → `/writing`, etc.) intact.
5. `Special Elite` has no bold weight. Never apply `font-weight: 700` to it; use tracking and color for emphasis instead.
6. Justified body text with `hyphens: auto` is essential to the newspaper read. Do not switch it to left-aligned.
7. Print stylesheet is out of scope but the CV page should eventually print to one clean page.
