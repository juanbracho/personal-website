# Planning: "The Bracho Record" Broadsheet Redesign

**Last Updated:** 2026-09-07
**Current Phase:** Not started — plan drafted, awaiting kickoff on Phase 1

---

## T — Think

**What's actually being asked:** A full visual redesign of juanbracho.com, replacing the current "Desk" aesthetic (wood grain, draggable cards, coffee stains) with a newspaper-broadsheet aesthetic ("The Bracho Record") documented in `redesign 2.0/README.md` and prototyped in `redesign-d-broadsheet.html`. This supersedes the prior Desk redesign (tracked in `/Redesign/planning.md`) — the look changes, but proven structural patterns from that effort (mobile responsive handling, routing) may be reused where they don't conflict with the new visual system.

**Who it affects:** Solo portfolio site. Primary audience is hiring managers/recruiters in compliance and operations. Target tone: professional first, playful second (~60/100 fun).

**What "done" looks like:** Every current route (`/home`, `/apps`, `/apps/:id`, `/writing`, `/writing/:id`, `/about`, `/contact`, `/study`, `/curriculum`) is rebuilt in the broadsheet visual language, wired to real data files, with no content rewritten — only re-framed. Legacy redirects stay intact. Drag-and-drop and wood-themed decoration are fully removed.

**Correction from user (2026-09-07), after reviewing the live prototype:**
- **Keep the site multi-page.** The prototype homepage folds employment, apps, essays, shelf, credentials, capabilities, and footer all onto one scrolling page. User does NOT want a one-pager — the existing separate pages/routes (Home, Apps, Writing, About, Study, Curriculum) stay separate. The broadsheet *visual system* (tokens, type, rules, grid) gets adopted across all of them; the *one-pager layout* does not get adopted. Home becomes a shorter landing/overview in the new visual language, not a page that absorbs everything.
- **Drop "The Bracho Record" masthead entirely.** User doesn't want the newspaper-persona branding/name. Replace with something plain and low-key — direction given: "welcome to my website, here you will find a bit about me."
- **Drop the "I turn regulation into systems people actually use" lead line.** User explicitly does not identify with the "I build systems companies actually use" framing — it's not how they'd describe themselves. Preferred framing leans more personal/hobbyist: languages spoken, apps built for himself (not "for companies"). Any homepage lead copy needs to be rewritten in this register — this is a narrow, deliberate exception to "content is frozen," scoped only to this invented prototype copy (which was written for the prototype, not pulled from an existing data file), not to real content elsewhere on the site.

**Constraints:**
- **Content is frozen.** No copy changes — only re-presentation of existing data.
- **Design is not fully frozen for interior pages.** Only the homepage has a built prototype; interior pages are spec'd in prose (README table) and need their own HTML prototypes before implementation, per user decision.
- Existing data files (`data.js`, `appsData.js`, `articlesData.js`, `booksData.js`, `projectsData.js`) remain the source of truth.

---

## A — Analyze

**Current state (React CRA app, `HashRouter`):**
- Routes live in `src/App.js`; pages in `src/pages/`; data in `src/components/*Data.js` + `data.js`; drag physics in `src/hooks/useDraggable.js`; mobile detection in `src/hooks/useIsMobile.js`.
- `Home.js` currently hardcodes `SKILLS` (6 categories: Spoken, Code, Technical, Operations, Compliance, PM) rather than sourcing from `data.js` — the README's wiring assumption (a `skills` object in `data.js`) doesn't exist yet.
- `articlesData.js` featured articles are generated in part by `add_article.py`; article set has changed very recently (`a-jack-of-all-trades` deleted, `the-art-of-doing-nothing` and `what-are-we-doing` added) — confirmed live against the running app's real data, not the prototype's hardcoded picks.
- `appsData.js` has real taglines/descriptions for Kaizen/Kage/Kioku that don't match the prototype's invented ad copy (prototype swapped Kage/Kaizen descriptions).
- `booksData.js` (591 lines) has real book data; prototype shelf uses invented placeholder titles (explicitly flagged in-prototype and in README).

**Desired state:** Broadsheet visual system per README + prototype, applied across all pages, sourced entirely from the real data files above — never from prototype-hardcoded content.

**Delta / risk areas:**
1. Content wiring gaps: `skills` needs a real home in data (currently only in `Home.js`); featured-articles logic must read live from `articlesData.js`; app ad copy must pull from `appsData.js`, not the prototype text.
2. Interior pages have no visual prototype yet — only a prose spec (README's routes table). These need dedicated HTML mockups before coding, matching the homepage's token system (colors, type, rules) from the README's Design Tokens section.
3. Removal work: `useDraggable.js`, wood-gradient tokens, coffee-ring/pen decorations, all `localStorage` card-position code — need to confirm nothing else depends on these hooks before deleting.
4. Two prior "Desk" redesign artifacts to actively decide about: `/Redesign` folder (previous prototypes, now archived reference) and its `planning.md` (superseded by this doc for visual direction, but may still hold useful mobile-pattern notes worth mining during interior-page design).

---

## R — Research

**Already substantially done** by the user in the design conversation that produced `redesign 2.0/README.md` — four directions were explored (register/statement/standing/broadsheet), broadsheet won explicitly for hitting "professional without going boring." That reasoning is preserved in the README and doesn't need to be redone.

**Remaining research, folded into Phase 1 below:** applying the README's Design Tokens (color, type, rule/border system) consistently to interior-page layouts that don't yet have a mockup — essay reader, apps index/detail, study (shelf + projects + CV), about (long-form + timeline), contact (classified submission form).

---

## Plan

### Phase 0: Foundations — before any prototype or code
- [ ] Reconcile content-wiring gaps identified in Analyze: decide where `skills` data lives, confirm featured-article selection logic, confirm app ad copy will pull from `appsData.js` fields (not prototype text)
- [ ] **Skills data is duplicated three ways, found 2026-09-07** — needs a decision, not just a wiring fix:
  - `Home.js` `SKILLS` const: 6 broad categories (Spoken, Code, Technical, Operations, Compliance, PM)
  - `Curriculum.js` inline skills list: 7 detailed categories with sub-items each (Procurement & Sourcing, Vendor & Contract Management, Supply & Inventory Operations, AI-Assisted Research & Tools, Governance & Compliance, Technical, Languages) — this is the most complete/accurate version
  - Prototype's capabilities strip: 4 condensed groups, invented for the mockup, matches neither
  - **Decided (2026-09-07):** Consolidate into one source — Curriculum's 7 detailed categories move into `data.js` as the canonical `skills` export. Home's skills card shows a short curated subset pulled from that same data (not a separately hand-maintained list). Prototype's 4-group version is discarded.
- [x] Featured-article logic (2026-09-07): keep the existing mechanism as-is — `articlesData.js`'s `featured: true/false` field, sorted by date descending. No logic change, just re-skinned in the new visual system. This was already the plan; confirmed with user rather than assumed.
- [x] Quick inventory of `/Redesign` (2026-09-07): the `.jsx` prototype files there have no mobile-specific code at all (`grep` for `isMobile`/`useIsMobile` across them returns nothing) — the actual working mobile responsiveness lives directly in the live pages (`Home.js`, `About.js`, `Study.js`, `Curriculum.js` all already branch on `useIsMobile()`). So there's nothing to "port" from `/Redesign` itself; the thing worth preserving is the *live app's* existing responsive behavior, which carries forward automatically unless a page is rewritten from scratch. Nothing else in `/Redesign` is reusable for this redesign — it's a different, discarded visual system. This item is resolved: treat `/Redesign` as archived reference only.
- [x] Rework the homepage plan from a one-pager into a proper landing/overview page — mapped prototype sections to existing pages (2026-09-07), based on the current IA (`Home.js`, `About.js`, `Study.js`, `Curriculum.js` reviewed directly):

  | Prototype section | Goes to | Why |
  |---|---|---|
  | Masthead + lead story + polaroid/fact-box/stamp | **Home** (replaces nameplate + About preview card) | Home is already the short landing/intro; gets the rewritten plain-tone lead, not a full page move |
  | Employment History (2×2 grid) | **Curriculum** (`Experience` section) | Curriculum already renders `experiences` from `data.js` as the CV; this is the natural home for a structured job grid. `About`'s Timeline stays as its own narrative (separate content, immigration/life journey, not job bullets) — not merged |
  | The Workshop (apps as ads) | **Apps** index (full page) | Matches README's own "Screens/Views" spec; Home keeps only a short preview linking out, like it does today |
  | From the Columns (essays) | **Writing** index (full page) | Same pattern — Home keeps a short preview linking out |
  | On the Shelf (books) | **Study** page (`The Shelf` zone) | Study already owns the full shelf; Home keeps a short preview linking out |
  | Credentials | **Curriculum** (`Education` section) | Already lives there |
  | Capabilities strip (skills) | **Curriculum** (`Skills` section), with a short version staying on Home | Matches current dual placement (Home skills card + Curriculum skills section) |
  | Classified footer (Correspondence / Also Inside / Notice) | **Shared footer**, shown on every page | Currently footer markup only exists ad hoc in `Home.js` and `AppLegal.js` — becomes a real shared component (likely folded into `PageShell`) so every page ends the same way, like a paper's back page |

  Net effect: Home shrinks to a short intro (rewritten lead, no masthead branding) + short link-out previews of apps/writing/shelf/skills. Full content stays on its existing dedicated page, just re-skinned in the broadsheet system. No page is deleted or merged.
- [ ] Rewrite the homepage masthead/lead copy: drop "The Bracho Record" branding and the "systems people actually use" line; draft plain, low-key framing per user direction ("welcome to my website, here you will find a bit about me"), leaning into languages spoken and apps built for himself rather than corporate/consulting framing

### Phase 1: Interior page prototypes (HTML, design-only, no code)
Design one self-contained HTML mockup per interior page, matching the homepage's tokens (`--paper`, `--ink`, `--red`, Bodoni Moda / Source Serif 4 / Special Elite / Caveat, hairline/double-rule/no-radius system):
- [ ] `/home` — **new mockup needed.** The existing `redesign-d-broadsheet.html` prototype is the one-pager and is no longer the spec for this route — mock up the shrunk landing page instead: rewritten plain-tone lead (no masthead branding, no "systems people actually use" line) + short preview/link-out blocks for apps, writing, shelf, skills, matching the multi-page mapping above
- [ ] `/writing` — essay index (column briefs + filter chips)
- [ ] `/writing/:id` — article reader (single measure, drop cap, margin notes)
- [ ] `/apps` — apps index (full-page classified section)
- [ ] `/apps/:id` — app detail (masthead-scale name, spec table)
- [ ] `/study` — shelf + projects + CV (three ruled sections)
- [ ] `/about` — lead-story treatment + dateline-strip timeline
- [ ] `/contact` — "Place your notice" classified form
- [ ] Shared classified footer (Correspondence / Also Inside / Notice) — mock once, reused across all pages
- [ ] Review all 8 with user; note approved copy/layout deltas back into this doc

### Phase 2: Homepage implementation
**Scope corrected 2026-09-07 to match the multi-page decision** — Home is now the shrunk landing page, not the full one-pager. Full sections (employment, credentials, capabilities, shelf, workshop ads, columns) move to their real pages in Phase 3, not here.
- [ ] Build Home from its Phase 1 mockup: dateline + rewritten plain-tone lead + polaroid/fact-box, short link-out previews (apps, writing, shelf, skills subset from the new `data.js` `skills` export)
- [ ] Delete `useDraggable.js` usage on Home, wood/coffee-ring decorations, localStorage card-position code
- [ ] Move `skills` data from `Home.js`/`Curriculum.js` inline consts into `data.js` as the single canonical export (Curriculum's 7 detailed categories), update both pages to read from it
- [ ] Google Fonts link (Bodoni Moda, Source Serif 4, Special Elite, Caveat)

### Phase 3: Interior page implementation
- [ ] Build each of the 8 interior pages/components from their approved Phase 1 mockups, wired to real data:
  - Writing index + reader (featured flag + date-descending, unchanged logic)
  - Apps index + detail (real `appsData.js` copy, not prototype's invented ad text)
  - Study (shelf from real `booksData.js`, deterministic spine heights/colors; keep Cabinet + CV-link zones)
  - About (lead-story treatment + existing timeline, kept separate from Curriculum's employment grid)
  - Curriculum (Employment 2×2 grid, Credentials, Skills — all from `data.js`)
  - Contact ("Place your notice" classified form)
  - Shared classified footer component, used across all pages
- [ ] Keep existing routes and legacy redirects in `App.js` intact
- [ ] Global `a` / `a:hover` link styling

### Phase 4: Responsive pass
- [ ] Verify breakpoints per README (880px lead-story collapse, 640px employment single-column) across all pages
- [ ] Test masthead at 320px

### Phase 5: Polish & ship
- [ ] Resolve the two flagged placeholders (already tracked: book titles, polaroid caption)
- [ ] Print stylesheet for Curriculum/CV page (one clean page)
- [ ] Cross-check no broken links (App Store, Play Store, LinkedIn, GitHub)
- [ ] Deploy

---

## Decisions Made
- Broadsheet visual system fully replaces Desk aesthetic (2026-09-07)
- Some structural patterns from the old `/Redesign` effort may be reused where they don't conflict with the new visual system — not a full discard (2026-09-07)
- Planning lives at `redesign 2.0/planning.md`, distinct from the archived `/Redesign/planning.md` (2026-09-07)
- Interior pages get full HTML prototypes designed and reviewed before any implementation code is written (2026-09-07)
- Site stays multi-page — the prototype's one-pager layout is rejected, only its visual system (tokens/type/rules) is adopted (2026-09-07)
- "The Bracho Record" masthead/branding is dropped in favor of plain, low-key framing (2026-09-07)
- The prototype's "systems people actually use" lead line is rejected as not matching how the user describes himself; rewrite in a more personal register (languages, apps built for himself) (2026-09-07)
- Skills consolidate into one source in `data.js` — Curriculum's 7 detailed categories win, Home shows a curated subset of the same data (2026-09-07)
- Featured-article logic stays as-is: `articlesData.js`'s `featured` flag, sorted by date descending — no change, just re-skinned (2026-09-07)
- `/Redesign` (old Desk prototypes) confirmed to have nothing portable for this redesign — archived reference only (2026-09-07)

## Out of Scope
- Content rewrites of any kind — copy is frozen
- The border-crossing easter-egg minigame (tracked separately per README, not part of this redesign)
- Print stylesheet beyond the CV/Curriculum page

## Progress Log
- **2026-09-07:** T.A.R.P. run for redesign kickoff. Reviewed README + live prototype (`redesign-d-broadsheet.html`) against real data files. Found and logged content-wiring mismatches (stale featured articles, swapped app ad copy, missing `skills` data source, capabilities-strip grouping mismatch). User decided: reuse some old-redesign structure where useful, planning doc lives in `redesign 2.0/`, and interior pages get full prototypes before coding.
- **2026-09-07 (same session, correction):** User rejected the prototype's one-pager layout and its masthead/lead copy after seeing it live. Site stays multi-page. Reviewed current IA directly (`Home.js`, `About.js`, `Study.js`, `Curriculum.js`) and mapped every prototype section to its existing page (table in Phase 0). Net: Home shrinks to a short intro + link-out previews; full content stays on Apps/Writing/Study/Curriculum/About, just re-skinned. Added a new Home mockup and a shared classified footer to Phase 1's prototype list (now 8 items, not 7).
- **2026-09-07 (same session, Phase 0 wrap-up):** Found skills data is duplicated three ways (`Home.js` 6 broad categories, `Curriculum.js` 7 detailed categories, prototype's own invented 4 groups) — user decided to consolidate into `data.js` with Curriculum's detailed version as the canonical source. Confirmed featured-article logic stays unchanged (existing `featured` flag + date-descending). Confirmed `/Redesign` has nothing portable (no mobile-specific code in its prototype files; the live pages' own responsive behavior already carries forward). Rewrote Phase 2/3 scope to match the multi-page decision — Phase 2 is now Home-only (shrunk landing page), Phase 3 absorbed the full sections (employment, credentials, skills, shelf, workshop, columns) onto their real pages. Phase 0 is now fully resolved except drafting the actual homepage lead copy, which folds into the Phase 1 `/home` mockup. Next: start Phase 1 mockups, beginning with `/home`.
