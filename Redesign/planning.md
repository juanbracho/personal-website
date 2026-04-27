# Personal Website — Desk Style Rework
### Planning Document · Living Artifact

> **Status:** Phase 8 Complete — Mobile Done
> **Last Updated:** 2026-04-26
> **Methodology:** No code before T.A.R.P.

---

## T — Think

The goal is to rework the existing React portfolio site to adopt the **Desk** aesthetic established in the `/Personal Website/` prototypes. This is a **visual + interaction rework**, not a data or feature rework. All existing content (apps, articles, books, projects, resume, contact) must be preserved; the delivery mechanism changes.

The Desk style is a fully realized design language: warm wooden desk surface, physical-world metaphors (polaroid, drawer, passport, torn paper, bookshelf, tickets, sticky notes), draggable/flippable cards, and a specific type palette. The prototype is fully functional — the challenge is translating it from a standalone JSX/Babel prototype into the existing React + Router + CSS architecture.

---

## A — Analyze

### Current Site Structure

| Page | File | Route | Status |
|------|------|--------|--------|
| Home | `src/pages/Home.js` | `/home` | **Needs full rework** |
| Apps | `src/pages/Apps.js` | `/apps` | **Needs rework** |
| App Detail | `src/pages/AppDetail.js` | `/apps/:appId` | **Needs rework** |
| App Legal | `src/pages/AppLegal.js` | `/apps/:appId/privacy` | Preserve content, light restyle |
| App Support | `src/pages/AppSupport.js` | `/apps/:appId/support` | Preserve content, light restyle |
| Portfolio | `src/pages/Portfolio.js` | `/portfolio` | **No desk equivalent** — needs new design |
| Articles | `src/pages/Articles.js` | `/articles` | **Needs rework** |
| Article Detail | `src/pages/ArticleDetail.js` | `/articles/:articleId` | **Needs rework** |
| Books | `src/pages/Books.js` | `/books` | **Needs rework → Shelf** |
| Resume | `src/pages/Resume.js` | `/resume` | **No desk equivalent** — needs new design |
| Contact | `src/pages/Contact.js` | `/contact` | **No desk equivalent** — needs new design |

### Current Component Inventory

| Component | Notes |
|-----------|-------|
| `Header.js` | Nav system — entire paradigm changes to pill buttons |
| `Footer.js` | Social links — may collapse into About/desk footer |
| `ThemeToggle.js` | 3-mode toggle — Desk is single-theme (warm wood); clarification needed |
| `Hero.js` | Replaced by DeskHome nameplate + bio card |
| `FeaturedApps.js` | Replaced by draggable app cards in DeskHome |
| `FeaturedBooks.js` | Replaced by Shelf card in DeskHome |
| `FeaturedArticles.js` | Replaced by ticket-style cards in DeskHome |
| `Skills.js` | No desk equivalent → needs new design |
| `ProjectGrid.js` | No desk equivalent → needs new design |
| `BookCard.js` | Replaced by desk shelf metaphor |
| `Experience.js` | Used in Resume — no desk equivalent yet |
| `Education.js` | Used in Resume — no desk equivalent yet |

### Desk Design Language (extracted from prototype)

**Color Palette:**
- Wood background: `linear-gradient(160deg, #b88454 0%, #8a5a32 50%, #6b4220 100%)`
- Cream paper: `#fffaf0`
- Dark brown text: `#2a1f15`
- Terracotta accent: `#c4633c`
- Gold nameplate: `#d4a056`
- Sticky yellow: `#fef080`
- Dark ink: `#1f1d18`
- Muted warm text: `#5a4530`
- Header/ghost text: `#fbeed8`

**Typography:**
- `Fraunces` — serif, display/headings (opsz 9–144, wt 500–700)
- `Special Elite` — monospace, labels/badges/nav
- `Caveat` — cursive handwritten, notes/captions/signatures (wt 400–700)
- `Inter` — sans-serif, body/UI (wt 400–700)

**Physical Metaphors per Page:**
| Page | Metaphor |
|------|----------|
| Home | Wooden desk with draggable/flippable cards |
| App Detail | Open drawer pulled from desk |
| Article Reader | Torn cream paper with margin doodles |
| About | Passport + timeline |
| Books/Shelf | Physical bookshelf with spine-visible books |
| Portfolio | Filing cabinet — tabbed folders per project category |
| Resume | Manila folder — each job as a tabbed sheet (lives inside Shelf page) |
| Contact | Handwritten letter — form styled as letter being composed on lined paper |

**Interaction Model:**
- Cards: draggable (mouse), flippable (click when not dragged), z-order managed
- Navigation: pill buttons top-right (Home · Apps · Writing · About · Shelf)
- Pages open as overlays or route changes
- "← back to desk" navigation on inner pages
- "↻ tidy desk" resets card positions
- Rotating tip text in header ("psst — drag the cards")

### What Desk Prototype Doesn't Cover (Gap Analysis)

1. **Portfolio page** — 22 bootcamp projects + 4 major projects + 3 web apps. Needs a desk metaphor. Candidate: filing cabinet drawer, corkboard/pinboard, or stacked folders.
2. **Resume page** — Work experience + education. Passport page partially covers biography; full resume needs a metaphor. Candidate: printed CV on paper, manila folder.
3. **Contact page** — Web3Forms form. Needs a metaphor. Candidate: handwritten letter/envelope, notepad.
4. **Skills section** — Currently in Home. Could become a card on the desk or move to About/Resume.
5. **Theme toggle** — Current site supports light/dark/contrast. Desk is a single warm-wood theme. Decision needed.
6. **Responsive/mobile** — Prototype is fixed 1280×1640. Production site needs responsive behavior.
7. **Navigation completeness** — Prototype nav has: Home · Apps · Writing · About · Shelf. Current site adds: Portfolio · Resume · Contact. Need to reconcile.

---

## R — Research

### Approaches Considered

**Option A — Full Desk Immersion (closest to prototype)**
Wrap entire app in the desk surface. Home is the draggable card board. All inner pages use `PageShell` with wood background. Navigation stays as pill buttons. Dragging persists via localStorage.
- ✅ Most faithful to design intent
- ✅ Most memorable/distinctive UX
- ⚠️ Complex drag system must be built in React properly
- ⚠️ Responsive is hardest to solve here

**Option B — Desk Language, Standard Routing**
Apply Desk color palette, typography, and metaphors (cards, torn paper, etc.) to the existing route structure without the drag/flip interaction. Cards look like desk objects but don't move.
- ✅ Easier to implement
- ✅ Fully responsive from the start
- ❌ Loses the signature interactivity that makes Desk special

**Option C — Hybrid: Interactive Desk Home, Desk-styled Inner Pages**
Home stays as the full draggable desk. Inner pages use the Desk language (wood bg, cream paper, metaphors) via `PageShell` but are standard scrollable pages accessed via React Router.
- ✅ Best of both: signature home, practical inner pages
- ✅ Matches the prototype's actual structure
- ✅ Allows responsive on inner pages even if home is desktop-first
- ✅ Cleanest migration path from current code
- **→ RECOMMENDED**

### Implementation Strategy

- Keep all existing data files (`appsData.js`, `booksData.js`, `articlesData.js`, `projectsData.js`, etc.) unchanged
- Replace CSS files with Desk design tokens (new CSS variables)
- Replace component markup to use Desk metaphors
- Port drag/flip system from prototype into a reusable React hook (`useDraggable`)
- Replace Header/Footer with Desk nav shell
- Build missing pages (Portfolio, Resume, Contact) using Desk language

---

## Locked Decisions

| # | Decision | Answer |
|---|----------|--------|
| Q1 | Portfolio metaphor | Filing cabinet — tabbed folders per category (Web Apps / Major Projects / Bootcamp) |
| Q2 | Resume metaphor | Manila folder — start here, revisit if it feels weak |
| Q3 | Contact metaphor | Handwritten letter on lined paper |
| Q4 | Theme toggle | **Removed.** Desk warm-wood is the only theme. Dark wood + candlelight noted as a future v2 idea. |
| Q5 | Navigation | **5 pills:** Home · Apps · Writing · About · **Study** — see Study Room concept below |
| Q6 | Responsive | Desktop-first. Mobile is its own phase after desktop ships. |
| Q7 | Skills section | Lives as a draggable card on the desk home |

### Q5 — The "Study" Page (key architectural decision)

The Shelf concept was expanded into a single **Study Room** page — a full-wall layout containing three zones:

```
┌──────────────────────────────────────────────────────┐
│  BOOKSHELF  (top of wall)                            │
│  Physical book spines, hoverable, 2025 / 2026 rows   │
├──────────────────────────────────────────────────────┤
│  FILING CABINET  (below shelf)                       │
│  Tabbed drawers: Web Apps · Major Projects · Bootcamp│
│  Click drawer → pulls open with project cards inside │
├──────────────────────────────────────────────────────┤
│  CV TABLE  (desk surface within the room)            │
│  Manila folder open flat — work experience +         │
│  education as tabbed pages inside                    │
└──────────────────────────────────────────────────────┘
```

This means `/books`, `/portfolio`, and `/resume` all merge into a single `/study` route. The nav pill says **Study**. This is the most coherent desk-world metaphor and eliminates three separate pages.

### Future Ideas (do not implement now)
- **Dark wood candlelight mode** — a night variant of the desk: dark walnut surface, warm amber/candlelight glow, cream text on dark backgrounds. Save for v2 after desktop ships.

---

## P — Plan

### Final Navigation Structure

| Pill | Route | Page | Description |
|------|-------|------|-------------|
| Home | `/` | Home (DeskHome) | Interactive desk with draggable cards |
| Apps | `/apps` | Apps listing | Cards for Kaizen, Kage, Kioku |
| — | `/apps/:id` | App Detail | Drawer metaphor |
| Writing | `/writing` | Articles listing | Ticket-style article cards |
| — | `/writing/:id` | Article Detail | Torn paper reader |
| About | `/about` | About | Passport + bio + timeline |
| — | `/contact` | Contact | Handwritten letter (linked from About or nav) |
| Study | `/study` | Study Room | Bookshelf + Filing cabinet + CV table |

> **Note on Contact:** Contact gets its own route `/contact` but is not a pill — it's reached via a "write to me" link on the About page and a card on the desk. This keeps the 5-pill nav clean.

---

### Phases

---

#### Phase 0 — Foundation & Design Tokens
**Goal:** Establish the Desk design system. No pages yet — only the infrastructure every page will use.

- [x] 0.1 Replace CSS variables in `src/index.css` with Desk palette + typography tokens
- [x] 0.2 Update `public/index.html` — add Google Fonts: Fraunces, Special Elite, Caveat (keep Inter)
- [x] 0.3 Create `src/hooks/useDraggable.js` — drag + flip + z-order hook ported from prototype
- [x] 0.4 DeskShell omitted — Home handles its own wood bg directly (cleaner)
- [x] 0.5 Create `src/components/PageShell.js` + `PageShell.css` — inner page wrapper
- [x] 0.6 Create `src/components/DeskNav.js` + `DeskNav.css` — 5 pill nav
- [x] 0.7 Theme toggle removed, all theme-mode CSS stripped
- [x] 0.8 Update `src/App.js` — all routes + legacy redirects
- [x] 0.9 Old Header.js, Footer.js, Hero.js deleted

✅ **Phase 0 Complete**

---

#### Phase 1 — Home (DeskHome)
**Goal:** Full interactive desk surface with all cards.

Cards on the desk:
| Card | Front | Back | Action |
|------|-------|------|--------|
| About | Bio short text, lined paper | Bullet journey (VE→AR→TX) | Back: link → `/about` |
| Polaroid | Profile photo | Current status (book #, app WIP, etc.) | — |
| App × 3 | Glyph + name + gradient | Stats + tech stack | Back: "open" → `/apps/:id` |
| Article ticket × 3 | Title + date + excerpt | Tags | Click "read" → `/writing/:id` |
| Skills | Category list (6 skills) | Proficiency detail | Flip to expand |
| Sticky note | To-do list | Easter egg message | — |
| Shelf preview | Book spines mini | "Click for full shelf" | Click → `/study` |

- [x] 1.1 Draggable card system built with `useDraggable` hook
- [x] 1.2 All cards implemented with front/back faces (About, Skills, Polaroid, App×3, Article tickets×3, Sticky, Shelf)
- [x] 1.3 Decorative props: wood grain overlay, coffee ring, pen with gold nib
- [x] 1.4 Rotating tip text (cycles every 4.5s through 6 hints)
- [x] 1.5 "↻ tidy desk" reset button
- [x] 1.6 All navigation actions wired from card backs/clicks
- [x] 1.7 Card positions + flip state persisted in localStorage

✅ **Phase 1 Complete**

---

#### Phase 2 — Apps Pages
**Goal:** App listing + drawer-metaphor detail pages.

- [x] 2.1 Apps.js — 3-column card grid with glyph headers, tech pills, store links
- [x] 2.2 AppDetail.js — drawer metaphor: gold handle, phone mockup, stats grid, store buttons
- [x] 2.3 All data wired from appsData.js + appDetailData.js (colors, glyphs, store URLs, tech)
- [x] 2.4 AppLegal.js + AppSupport.js restyled with PageShell + cream paper

✅ **Phase 2 Complete**

---

#### Phase 3 — Writing (Articles)
**Goal:** Ticket listing + torn-paper reader.

- [x] 3.1 Writing.js (new, replaces Articles.js) at route `/writing` with filter pills (All / On This Site / LinkedIn), ticket layout with clip-path torn edge + hover animation
- [x] 3.2 ArticleDetail.js — SVG torn top edge, margin doodle, ReactMarkdown prose, side rail (tags sticky, related, contact card), signature
- [x] Legacy redirects `/articles` → `/writing` in App.js

✅ **Phase 3 Complete**

---

#### Phase 4 — About Page
**Goal:** Passport + timeline. Contact linked from here.

- [x] 4.1 About.js — passport (dark leather, name, photo, Austin TX stamp, quick links) + bio + 9-entry ALL_TIMELINE + "right now" box + CTA buttons
- [x] 4.2 Skills live as draggable desk card (confirmed)

✅ **Phase 4 Complete**

---

#### Phase 5 — Contact Page
**Goal:** Handwritten letter metaphor.

- [x] 5.1 Contact.js — cream lined paper (-0.5deg rotation), tape strip, pen decoration, letterhead with today's date, Caveat inputs (underline only), circular wax-seal send button, idle/sending/done/error states, Web3Forms integration
- [x] 5.2 Linked from About "Write to me" buttons and desk sticky card

✅ **Phase 5 Complete**

---

#### Phase 6 — Study Room (Bookshelf + Filing Cabinet + CV)
**Goal:** One wall, three zones. Replaces `/books`, `/portfolio`, `/resume`.

**Zone A — Bookshelf (top)**
- [x] 6.1 BookSpine component — book data grouped by yearRead (2025 / 2026 rows)
- [x] 6.2 Hover: spine lifts 14px, popup card appears with title/author/rating/review snippet/tags
- [x] 6.3 Featured trio cards below shelf with colored left border + review excerpt
- [x] 6.4 Shelf bottom bar (18px solid #5a3a1a) per row

**Zone B — Filing Cabinet (middle)**
- [x] 6.5 CabinetDrawer component — gold handle, label with icon, animated max-height open/close
- [x] 6.6 3 drawers: WEB APPLICATIONS / MAJOR PROJECTS / BOOTCAMP WORK
- [x] 6.7 ProjectCard component — name, description, tech pills, GitHub link, hover highlight
- [x] 6.8 Data from projectsData.js (webApps, projects, assignments)

**Zone C — CV Table (bottom)**
- [x] 6.9 Manila folder with rounded top tabs (EXPERIENCE / EDUCATION)
- [x] 6.10 Tab switching with active tab highlighting
- [x] 6.11 Experience from data.js — 4 bullet points shown + "+N more" indicator
- [x] 6.12 Education from data.js — description shown
- [x] 6.13 LinkedIn link in folder footer

✅ **Phase 6 Complete**

---

#### Phase 7 — Polish & Desktop QA
**Goal:** Production-ready desktop experience.

- [x] 7.1 Typography — all pages use Fraunces/Special Elite/Caveat/Inter consistently
- [x] 7.2 Color — all pages use only locked palette
- [x] 7.3 Dead CSS files removed (Home.css, Apps.css, AppDetail.css, AppLegal.css, AppSupport.css, ArticleDetail.css, Articles.css, Books.css, Portfolio.css, Resume.css, Contact.css, Hero.css, etc.)
- [x] 7.4 Dead components removed (Hero, FeaturedApps, FeaturedBooks, FeaturedArticles, BookCard, ThemeToggle, Header, Footer, About[component], Experience, Education, ProjectGrid, Skills, ResumeCarousel.css)
- [x] 7.5 Dead page files removed (Articles.js, Books.js, Portfolio.js, Resume.js)
- [x] 7.9 All ESLint warnings resolved (unused vars across About, AppSupport, Home, Study, Writing)
- [x] 7.10 `npm run build` → **Compiled successfully** — zero errors, zero warnings
- [ ] 7.6 External link verification (App Store, Play Store, LinkedIn, GitHub)
- [ ] 7.7 localStorage persistence test across reload
- [ ] 7.11 Deploy to GitHub Pages

✅ **Phase 7 Cleanup Complete**

---

#### Phase 7.5 — Bug Fixes & Refinements (active)
**Goal:** Identify and fix all bugs, visual polish gaps, and UX friction found during real browser testing.

*Items will be added here as discovered during QA.*

| # | Area | Issue | Fix | Status |
|---|------|-------|-----|--------|
| 1 | All flippable cards | On hover after flip, card becomes invisible | Removed `filter: brightness()` from `.desk-card:hover` in index.css — `filter` breaks `backface-visibility` in 3D context | ✅ Fixed |
| 2 | Home shelf card | Grab-to-drag triggers `/study` navigation on release | Added `wasDragged()` ref to useDraggable; shelf `onClick` guarded with `if (!wasDragged())` | ✅ Fixed |
| 3 | Home shelf card | Book spines overflow container and block title text | Set shelf books div to `height: 190, overflow: hidden`; added `flexShrink: 0` to spines | ✅ Fixed |
| 4 | Home desk | Recent essays showing any 3 articles, not top 3 featured | Filter `recentArticles` by `featured === true` before sorting by date | ✅ Fixed |
| 5 | Contact form | "Warm regards" signature shows static dashes, not sender's name | `form.name` auto-populates the signature line as user types their name | ✅ Fixed |
| 6 | Study bookshelf | Book hover popup clipped by `overflow: auto` shelf container | Changed popup from `position: absolute` to `position: fixed` using `getBoundingClientRect()` coords; `zIndex: 9999` | ✅ Fixed |
| 7 | Study filing cabinet | Close animation snaps items left-aligned before collapsing | Replaced `max-height` transition with `grid-template-rows: 1fr → 0fr` for smooth layout-preserving collapse | ✅ Fixed |
| 8 | Study CV section | "The CV" title blocked by folder tab buttons (`position: absolute, top: -40`) | Increased `marginBottom` of title section from 24 → 56px | ✅ Fixed |
| 9 | Home desk | Layout reorder | Cards repositioned to match target layout screenshot | ✅ Fixed |

---

#### Phase 7.6 — Content Review & Layout Polish (complete)
**Goal:** Review and update copy/content on every card and section on the desk home page.

| Item | Card | Changes |
|------|------|---------|
| 1 | Nameplate tagline | Changed to `Polyglot · Writes Sometimes · Builds with AI · 🇻🇪 → 🇦🇷 → 🇺🇸` |
| 2 | About card front | New description: Lawyer + Master's in Business Law, builds apps for real problems, "Books help too." |
| 2 | About card back | Updated: "5 productivity apps built (2025)" (was "3 apps shipped") |
| 3 | Skills card front | Added `Spoken` row (Spanish · English · Italian · FR · JP learning); renamed `Languages` → `Code` |
| 4 | Polaroid front | New photo (Granada, Spain); caption updated to "last fall · Granada, Spain ↑" |
| 4 | Polaroid back | Replaced book/app status with: Reading · Solving a problem · 🇫🇷 Learning a language · Writing something; Instagram handle `juanbracho16` with icon |
| 5 | Sticky note front | Updated to-do: walk dogs, read 30 min (checked), French class, don't be an asshole, call a friend |
| 5 | Sticky note back | Easter egg updated: "go be nice to someone today — pay forward what others have given you" |
| 6 | App order | Swapped: Kage → №001, Kaizen → №002 |
| 7 | Desk layout | Shelf → upper right (top:0, left:820); Polaroid → middle right; App cards tightened; Sticky note repositioned; Pencil + coffee stain moved alongside articles |

---

#### Phase 8 — Mobile
**Goal:** Mobile-friendly version of the desk experience across all pages.

**Breakpoints:**
- `≥ 1024px` — Desktop (current behavior, unchanged)
- `< 768px` — Mobile (significant layout changes)
- `768–1023px` — Tablet (inherits mobile layout, minor tweaks)

**Core strategy:** Preserve the Desk visual language (cream paper, wood, typography, physical metaphors). Adapt the interaction model — no drag on touch; flip via tap. Home becomes a vertical card feed instead of an absolute-positioned canvas.

---

**8.1 — `useIsMobile` hook**
New file: `src/hooks/useIsMobile.js`. Returns `true` when `window.innerWidth < 768`, updates on resize.

**8.2 — `useDraggable`: expose `flipCard(id)`**
Export a `flipCard(id)` function that directly toggles `flipped[id]`. Used by mobile card `onClick` handlers in place of `startDrag`.

**8.3 — DeskNav: mobile styles**
On `< 768px`:
- Hide tip text (`desk-nav__tip`) entirely
- Keep brand text left (slightly smaller)
- Pills row: `overflow-x: auto`, hidden scrollbar, `white-space: nowrap` — horizontal scroll if needed
- No hamburger — the scroll pattern is sufficient for 5 pills

**8.4 — Home: mobile vertical card feed**
On mobile (`isMobile`):
- Replace the `position: relative, minHeight: 1200` card surface with a `display: flex, flexDirection: column, gap: 20px, padding: 16px` container
- Each card becomes `position: relative` (not absolute) with responsive widths
- Cards maintain all visual styling and flip animations
- `onMouseDown` → `undefined`; `onClick` → `flipCard(id)` (tap to flip)
- "↻ tidy desk" footer button hidden
- Decorative props (coffee ring, pencil) hidden
- Card order: About → App×3 (stacked) → Article tickets → Skills → Polaroid → Sticky → Shelf preview
- Article tickets: drop `clipPath` torn edge on mobile (it clips wrongly at narrow widths), use a simple border-left instead
- App cards: reduce height from 330px → 260px on mobile

**8.5 — Apps.js: responsive grid**
`gridTemplateColumns: 'repeat(3, 1fr)'` → `repeat(auto-fill, minmax(280px, 1fr))`. On mobile: single column. Title font 56px → 38px.

**8.6 — AppDetail.js: responsive layout**
Check layout; likely a two-section row → stack. Phone mockup image centered. Stats grid 4-col → 2-col on mobile.

**8.7 — Writing.js: responsive tickets** ✅
Mobile tickets use a stacked layout: date + "read →" on one row, full-width title below, description, tags. No date column squeezing the title.

**8.8 — ArticleDetail.js: responsive**
Two-column layout (prose + sidebar) → sidebar moves below prose on mobile. Side rail becomes a horizontal strip.

**8.9 — About.js: responsive passport**
`gridTemplateColumns: '380px 1fr'` → single column on mobile. Passport goes full-width (sticky removed on mobile). Timeline + right-now boxes stack below.

**8.10 — Contact.js: responsive letter**
Letter has a max-width and slight rotation — verify padding and font sizes at 375px. Likely minimal changes needed.

**8.11 — Study.js: responsive**
- Bookshelf: horizontal scroll row of spines (natural on mobile — `overflow-x: auto`). Book rows stack vertically. Featured trio → single column.
- Filing cabinet: accordion already works; ProjectCard grid → single column.
- CV table: tabs + content already stack; verify font sizes and padding.

**8.12 — Final mobile QA**
Test at 375px (iPhone SE), 390px (iPhone 14), 768px (iPad). All nav paths, all flips, all links.

---

## Dependency Map

```
Phase 0 (Foundation — tokens, hooks, shells, nav, routes)
  ├── Phase 1 (Home — desk cards)
  ├── Phase 2 (Apps — drawer detail)
  ├── Phase 3 (Writing — tickets + torn paper)
  ├── Phase 4 (About — passport)
  │     └── Phase 5 (Contact — linked from About)
  └── Phase 6 (Study — shelf + cabinet + CV)
        └── Phase 7 (Polish & QA — all phases complete)
              └── Phase 8 (Mobile — future)
```

Phases 1–6 can run in parallel once Phase 0 is complete.

---

## Progress Log

| Date | Phase | Action | Notes |
|------|-------|--------|-------|
| 2026-04-26 | — | T.A.R.P. complete, planning.md created | Awaiting answers to Q1–Q7 |
| 2026-04-26 | — | All Q1–Q7 answered, plan finalized | Study Room concept locked, 5-pill nav, desktop-first |
| 2026-04-26 | 0–6 | Full implementation complete | All pages built: Home, Apps, AppDetail, AppLegal, AppSupport, Writing, ArticleDetail, About, Contact, Study |
| 2026-04-26 | 7 | Cleanup complete, clean build | 30+ dead files deleted, all ESLint warnings resolved, `npm run build` → 0 errors 0 warnings |
| 2026-04-26 | 7.5 | Bug fixes & refinements begin | Entering QA phase — live on localhost:3000 |
| 2026-04-26 | 7.5 | Bugs #1–8 fixed | Flip hover invisible, shelf drag/click, shelf title, featured articles, contact name, bookshelf tooltip, cabinet animation, CV title spacing |
| 2026-04-26 | 7.5 | Bug #9 fixed | Desk layout reordered to match target screenshot |
| 2026-04-26 | 7.6 | Content review complete | All home page cards reviewed and updated — nameplate, about, skills, polaroid, sticky note, app order, layout polish |
| 2026-04-26 | 8 | Phase 8 plan written | Mobile strategy: vertical card feed, tap-to-flip, nav pill scroll, responsive inner pages |
