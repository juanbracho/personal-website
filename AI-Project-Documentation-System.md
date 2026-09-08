# The AI Project Documentation System
### A framework for keeping AI-assisted work organized, auditable, and consistent across sessions

---

## Why This Exists

When you work with AI tools — whether that's Claude, ChatGPT, no-code builders, or automation workflows — the biggest invisible problem is **context loss**. Every new session, every new chat, the AI starts cold. It doesn't remember what was decided last Tuesday, why a particular approach was abandoned, or what version of a file is actually current.

The second problem is **accountability**. If you're doing data governance or auditing work, you need to know: who touched what, when, why, and what changed. Without a documentation system, that answer is "I think…" instead of "here it is."

This system solves both. It takes 5–10 minutes per session to maintain, and it pays back hours of confusion and rework.

---

## The Folder Structure

Every project gets a `/Documentation/` folder at its root. Inside it, you maintain five types of files:

```
/YourProject/
├── Documentation/
│   ├── session.md        ← What happened each time you worked on it
│   ├── task.md           ← What needs to be done (the living backlog)
│   ├── debug.md          ← Bugs, errors, and how they were fixed
│   ├── planning.md       ← The TARP plan (see below)
│   └── TARP-[feature].md ← One per major feature or initiative
```

You don't need all five on day one. Start with `session.md` and `task.md`. Add the others as the project grows.

---

## The Five Files

### 1. `session.md` — The Work Log

This is your session journal. Every time you sit down to work on the project, you add a new entry. It becomes the single source of truth for "what has been done."

**Structure for each entry:**
```markdown
## Session YYYY-MM-DD: [One-line description of the session goal]

**Duration:** ~X hours
**Focus:** [What you were trying to accomplish]

### Work Completed
1. [Thing you did] — [brief result]
2. [Thing you did] — [brief result]

### Key Decisions Made
- [Decision] → [Why you made it]

### Files Modified
- `path/to/file.ext` — [what changed]

### Next Session Starts At
- [The first thing to do next time you open this project]
```

**Why it works:** When you start a new AI session, you paste the last 2–3 session entries into the chat as context. The AI instantly knows the project's current state without needing to re-read every file.

---

### 2. `task.md` — The Living Backlog

This tracks everything that needs to happen — past, present, and future. It's not a to-do app. It's a permanent record that shows the full arc of the project.

**Status legend:**
- ✅ = Completed
- 🔄 = In Progress
- ⏸️ = Paused / On Hold
- ❌ = Cancelled / Decided Against
- 📋 = Pending (not started)

**Structure:**
```markdown
# [Project Name] — Task Tracker

**Last Updated:** YYYY-MM-DD
**Current Phase:** [Name of what you're actively working on]

---

## Current Sprint: [Name]
**Goal:** [One sentence on what this sprint delivers]

### In Progress
- 🔄 [Task name]: [Brief description]

### Up Next
- 📋 [Task name]: [Brief description]
- 📋 [Task name]: [Brief description]

### Completed
- ✅ [Task name] — Done [date]
- ✅ [Task name] — Done [date]

### Cancelled / Not Doing
- ❌ [Task name] — [Why you decided against it]
```

**Why it works:** The `❌` cancelled items are as important as the completed ones. They prevent you (or an AI) from re-suggesting ideas that were already evaluated and rejected.

---

### 3. `debug.md` — The Error Log

Every time something breaks, goes wrong, or produces unexpected behavior — you log it here. Even small things.

**Structure for each entry:**
```markdown
### YYYY-MM-DD: [Short name for the issue]

**Issue:** [What went wrong — be specific]

**Cause:** [Root cause — what was actually broken and why]

**Fix:** [What resolved it]

**Status:** ✅ Fixed / 🔄 In Progress / ⚠️ Known Issue
```

**Why it works:** AI tools make the same mistakes repeatedly if you don't tell them the fix. When you start a session, pasting the relevant debug entries prevents the AI from confidently suggesting a solution that you already know doesn't work.

For data governance specifically: this becomes your audit trail. "Why does this field have this value?" → check the debug log.

---

### 4. `planning.md` — The Living Plan

This is not a one-time document you write at the start and forget. It's updated throughout the project. Every time a phase completes or a major decision changes, you update it.

It follows the **T.A.R.P. methodology** (see next section).

---

### 5. `TARP-[feature-name].md` — Feature Plans

For larger initiatives — a new workflow, an audit of a specific data domain, building a new no-code tool — you create a dedicated TARP document. Same structure as `planning.md`, but scoped to that one thing.

---

## The T.A.R.P. Methodology

**T.A.R.P. = Think → Analyze → Research → Plan**

The rule is simple: **no work before T.A.R.P.** You don't start building, editing, automating, or auditing until you've gone through all four phases. It feels slow the first time. It saves enormous time from the second time onward.

---

### T — Think

*Understand the full problem before touching anything.*

Answer these questions in writing:
- What is actually being asked? (Not just the surface request — what's the real need?)
- Who does this affect and how?
- What does "done" look like? What are the success criteria?
- What are the risks or constraints?

**For data governance:** What is the scope of this audit? Which datasets, folders, or systems are in scope? What constitutes a compliance issue vs. a recommendation?

---

### A — Analyze

*Study what exists before deciding what to change.*

- Map the current state: what files, tools, workflows, data structures exist right now?
- Identify the delta: what's the gap between current state and the goal?
- Note what's working well (so you don't accidentally break it).
- Find the dependencies: what else will be affected by a change here?

**For data governance:** Run an inventory before making recommendations. What folders exist? What naming conventions are in use? What's duplicated? What's missing permissions?

---

### R — Research

*Explore options before committing to an approach.*

- What are the standard ways to solve this problem?
- What have others done in similar situations?
- What are the tradeoffs between the top 2–3 options?
- Is there a simpler solution than what you initially thought?

This phase is where you ask the AI for options, read documentation, look at examples. You're gathering — not yet deciding.

---

### P — Plan

*Write a step-by-step plan before you execute.*

The plan should be concrete enough that someone else (or you, three weeks from now) could pick it up and know exactly what to do next.

```markdown
## Plan

### Phase 1: [Name] — [Estimated effort]
- [ ] Step 1
- [ ] Step 2
- [ ] Step 3

### Phase 2: [Name] — [Estimated effort]
- [ ] Step 1
...

### Decisions Made
- [Decision]: [Why]

### Out of Scope
- [Thing]: [Why not now]
```

**Update this plan as work progresses.** Check off steps. Note if a phase took longer or shorter than expected. If you discover something mid-execution that changes the approach, update the plan — don't just proceed differently while the document says something else.

---

## How to Use This With AI

The system is designed to make AI assistance dramatically more reliable. Here's the workflow:

### Starting a Session

Paste this into your AI chat at the start:

```
I'm continuing work on [Project Name]. Here's my current context:

**Last Session (paste from session.md):**
[last session entry]

**Current Tasks (paste from task.md):**
[current sprint section]

**Known Issues (paste from debug.md if relevant):**
[any open issues]

Today I want to: [your goal for this session]

Before we do anything, let's run T.A.R.P.
```

### During the Session

When the AI suggests something you reject, write it down in `task.md` as a `❌` item with the reason. When it fixes a bug, log it in `debug.md`. When it makes a decision with you, note it in the session entry under "Key Decisions Made."

### Ending a Session

Before closing the chat:
1. Add a new entry to `session.md`
2. Update `task.md` (mark completed items, add new ones discovered)
3. Add any errors you hit to `debug.md`
4. Update `planning.md` if anything changed

This takes 5–10 minutes. It makes the next session 10× faster.

---

## Starter Prompt for Your First Audit

Copy this prompt to start your first T.A.R.P.-style audit session with Claude or ChatGPT:

```
I need to audit [describe what you're auditing — e.g., "our Google Drive folder structure for the Marketing team"].

Before we do any work, I want to run through T.A.R.P.:

**T — Think:**
Help me define: What is the scope of this audit? What does a good outcome look like?
What are the most common data governance problems we should look for?

**A — Analyze:**
I'll share the current structure with you [paste folder list, file inventory, or describe it].
Help me map what exists and identify where the problems are.

**R — Research:**
What are the standard best practices for [Google Drive / this type of system] governance?
What naming conventions, folder hierarchies, or access control patterns work best?

**P — Plan:**
Based on T and A and R, help me write a phased plan to fix what we found.
Include: quick wins (can do today), medium-term fixes, and long-term structural changes.

Let's start with T — Think.
```

---

## Why This System Works — The Real Reasons

Most people set up documentation systems and abandon them because they feel like overhead. This one sticks because it isn't built for documentation's sake — it's built to solve two specific pain points that show up every single day when working with AI.

### For You: The Long-Term Benefits

**You stop losing work.** Every project has a graveyard of decisions that got made, forgotten, and then re-made. Why was that folder restructured? Why did we stop using that tool? Why is this field formatted this way? Without logs, the answer is "I think…" or "I don't remember." With this system, the answer is always "let me check."

**Your projects become handoff-ready.** Whether that's handing off to a colleague, a new hire, or yourself after a two-month break — anyone can read the `session.md` chronologically and understand the full history of the project. The task tracker shows not just what's done but what was considered and rejected. That institutional memory is usually locked inside someone's head.

**You make better decisions under pressure.** When a crisis hits and someone asks "what changed last week?" — you have a log. When an auditor asks "who approved this restructure?" — you have a record. When you're unsure whether to try an approach — you check the debug log first and find you already tried it six months ago.

**You get faster over time, not slower.** Most projects get harder to work on as they grow — more context to remember, more files to track, more dependencies. With this system, the opposite happens. Each session builds on the last cleanly. After three months, starting a new session takes two minutes to get oriented instead of thirty.

**Ideas don't get lost.** One of the underrated benefits of `task.md` is that `📋 Pending` items don't expire. You can park an idea for six months, come back, and it's still there, still described with the reasoning you had when you wrote it. That's your project's brain — not your actual brain.

---

### For the AI: Why Structure Makes It Dramatically Better

This is the part most people don't think about, and it's the biggest unlock.

AI tools like Claude or ChatGPT are stateless by default. Every new conversation, they know nothing about your project. They don't know what was tried, what failed, what was decided, or what the current state is. They are genuinely smart — but they're working blind.

When you paste context from your documentation at the start of a session, something important happens: **the AI stops guessing and starts knowing.** The quality of what it produces changes entirely.

Here's what structured documentation does for an AI companion specifically:

**It eliminates confident wrong answers.** Without context, an AI will confidently suggest solutions you've already tried, propose approaches you've already rejected, and make recommendations based on a version of your project that no longer exists. The debug log and task tracker directly prevent this. The AI reads "❌ Tried X — caused Y" and routes around it.

**It gives the AI a model of your project, not just your question.** When you paste the last few session entries, the AI understands the arc — where the project started, what changed, what matters now. That's a fundamentally different quality of help than answering a question in isolation.

**It makes the AI a better decision-making partner.** The T.A.R.P. methodology forces a conversation before any action. When you tell the AI "before we do anything, let's run T.A.R.P.," you're asking it to think with you, not just execute for you. That produces analysis and tradeoffs instead of just a first-instinct answer.

**It makes the AI's outputs auditable.** When a session ends with documented decisions and a session log, you can look back at any point and see exactly what the AI helped you do and why you agreed to it. That matters in data governance — you're not just clicking through AI suggestions, you're running a documented process.

**It keeps the AI honest about what it doesn't know.** A good AI response to "what should we do next?" when it has full context is different from one with no context. With context, it can say "based on session 4, you were going to tackle X next — is that still the priority?" Without it, it just invents a reasonable-sounding next step.

The system is, at its core, a way to give your AI companion a persistent memory that it doesn't natively have. You're the keeper of that memory. The documentation files are how you hand it back at the start of each session.

---

## Quick Reference Card

| File | Updated When | Contains |
|------|-------------|----------|
| `session.md` | Every session | What you did, decided, and changed |
| `task.md` | Every session | Everything to do, doing, done, or cancelled |
| `debug.md` | When something breaks | Issue, cause, fix, status |
| `planning.md` | At start + after each phase | The T.A.R.P. plan, living artifact |
| `TARP-[feature].md` | Per major initiative | Scoped T.A.R.P. for one feature/audit |

**The golden rule:** If the AI would need to know it to help you next time, write it down now.

---

*Framework based on real project work across multiple software and data projects. The system evolves — start simple, add structure as you need it.*
