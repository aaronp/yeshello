# yeshello.site — Design Spec

## Overview

A deadpan parody of [nohello.net](https://nohello.net/en/) that mirrors its exact structure, format, and tone beat-for-beat — but flips every argument to advocate for saying hello in chat. The site argues that skipping greetings is impersonal and rude, using the same mock-Slack conversation format to make its case.

**Domain:** yeshello.site
**Tech stack:** Bun + React + Vite + TypeScript (existing scaffold)
**Deploy:** GitHub Pages via GitHub Actions

## Tone

Deadpan parody. The humor comes from committing fully to the bit — the page reads exactly like nohello.net in structure and seriousness, but every position is reversed. No winking at the audience except the footer disclaimer: "We are completely serious."

## Page Structure

The page is a single, vertically-scrolling layout with these sections in order:

### 1. Header

- Title: **"yes hello!"** (large, centered)
- Tagline: "please DO just say hello"
- Mirrors nohello.net's header style

### 2. Introductory Copy

Two short paragraphs flipping nohello's core argument:

- **Thesis:** If you want to connect with someone on chat, DO just say hello. Don't launch straight into your question — that's impersonal and honestly a bit rude.
- **Analogy:** Imagine walking into someone's office, not making eye contact, and just barking a question at them. That's what skipping "hello" feels like.

Keep the copy concise. Mirror nohello's paragraph count and length.

### 3. Bad Example (❌ "Don't do this")

A mock Slack conversation showing the **no-hello** approach as the wrong way:

- **Jamie Tartt** (9:32 AM): Jumps straight to a technical question without greeting — asks Ted to check a server issue.
- **Ted Lasso** (9:45 AM): Responds with just "... 😔"
- **Caption (italic, muted):** "Jamie didn't even say hello. Ted is hurt but will fix the server anyway because he's Ted."

### 4. Good Example (✅ "Instead, try this")

A mock Slack conversation showing the **yes-hello** approach:

- **Roy Kent** (2:15 PM): "Hey Ted! Hope your day's going well 👋"
- **Ted Lasso** (2:16 PM): "Roy! Hey there, buddy! 😄 What's going on?"
- **Roy Kent** (2:16 PM): Greets, then asks the same technical question naturally.
- **Ted Lasso** (2:17 PM): Enthusiastic, happy response — same problem gets solved but the interaction is warm.
- **Caption (italic, muted):** "Roy said hello first. Ted feels valued as a human being. The server still gets fixed, but now everyone's day is a little better."

### 5. Warm Alternatives

A list of suggested phrasings that combine greetings with questions:

- "Hey! Quick question when you have a sec — [question]"
- "Hi [name]! Hope you're doing well. I was wondering..."
- "Good morning! Got a minute? [question]"
- "Hello! 👋 [question]"

### 6. Footer

- Disclaimer: **"We are completely serious. 🫡"**
- Attribution: "A rebuttal to nohello.net" (linked)

## Visual Design

- **Dark theme** — dark background (#1a1a2e or similar), light text
- **Chat bubbles** styled to look like Slack messages:
  - Colored avatar squares with initials (not actual images — avoids IP issues)
  - Bold username, muted timestamp
  - Message text indented from avatar
  - Contained in slightly lighter card backgrounds (#2a2a3e)
- **Color coding:** Red (#ff6b6b) for the bad example heading, green (#51cf66) for the good example heading
- **Typography:** System font stack, clean and readable
- **Centered, narrow content column** (~600px max-width)

## Characters

Ted Lasso cast, using initials in colored avatar squares:

| Character | Avatar Color | Role |
|-----------|-------------|------|
| Jamie Tartt | Red (#e74c3c) | Bad example — skips greeting |
| Ted Lasso | Blue (#3498db) | Recipient in both examples |
| Roy Kent | Purple (#9b59b6) | Good example — greets first |

## Implementation Details

### Architecture

Single `App.tsx` component. No routing, no state management needed. The page is entirely static content rendered once.

### Files to modify

- `src/App.tsx` — Replace skeleton with yeshello page content
- `src/App.css` — Replace skeleton styles with yeshello styles
- `src/index.css` — Minor global style adjustments (background color, font)
- `index.html` — Update page title and meta tags
- `package.json` — Update name from "ui-skeleton" to "yeshello"
- `vite.config.ts` — Set base path to `/` for custom domain deployment (currently `/ui-skeleton/`)
- `.github/workflows/deploy.yml` — Update trigger branch from `master` to `main`

### Files to create

- `public/CNAME` — Contains `yeshello.site` for GitHub Pages custom domain configuration

### Files to keep as-is

- `Makefile` — Build commands still apply
- `tsconfig.json` — No changes needed
- `readme.md` — Leave as-is or update minimally (low priority)

### No new dependencies

The page is simple enough to build with React + CSS alone. No component libraries, animation libraries, or CSS frameworks.

## Out of Scope

- Language selector (nohello has one — could add later)
- Dark/light theme toggle
- Analytics
- SEO optimization beyond basic meta tags
- Mobile-specific optimizations beyond responsive CSS
