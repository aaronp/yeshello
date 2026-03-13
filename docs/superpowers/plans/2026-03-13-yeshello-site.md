# yeshello.site Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a deadpan parody of nohello.net that mirrors its structure but argues in favor of saying hello, using Ted Lasso characters in mock Slack conversations.

**Architecture:** Single `App.tsx` component rendering static content. No routing or state management. Dark-themed page with mock Slack chat bubbles, styled entirely with CSS.

**Tech Stack:** Bun, React 18, Vite, TypeScript. No additional dependencies.

**Spec:** `docs/superpowers/specs/2026-03-13-yeshello-site-design.md`

---

## Chunk 1: Full Implementation

### Task 1: Project scaffolding and deployment config

Update the skeleton project identity and deployment configuration to target yeshello.site.

**Files:**
- Modify: `package.json` (line 2: name field)
- Modify: `vite.config.ts` (line 6: base path)
- Modify: `.github/workflows/deploy.yml` (line 6: branch trigger)
- Modify: `index.html` (lines 5-6: favicon, title)
- Create: `public/CNAME`

- [ ] **Step 1: Update package.json name**

In `package.json`, change the `name` field:

```json
"name": "yeshello",
```

- [ ] **Step 2: Update vite.config.ts base path**

In `vite.config.ts`, change `base` from `'/ui-skeleton/'` to `'/'`:

```ts
export default defineConfig({
  plugins: [react()],
  base: '/'
})
```

- [ ] **Step 3: Update deploy.yml branch trigger**

In `.github/workflows/deploy.yml`, change `master` to `main`:

```yaml
on:
  push:
    branches:
      - main
```

- [ ] **Step 4: Update index.html**

Replace the title and remove the Vite favicon reference:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="please DO just say hello" />
    <title>yes hello!</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 5: Create public/CNAME**

Create `public/CNAME` with contents:

```
yeshello.site
```

- [ ] **Step 6: Verify build works**

Run: `bun run build`
Expected: Build succeeds, `dist/` created with `CNAME` file copied in.

- [ ] **Step 7: Commit**

```bash
git add package.json vite.config.ts .github/workflows/deploy.yml index.html public/CNAME
git commit -m "chore: configure project for yeshello.site deployment"
```

---

### Task 2: Global styles

Replace the Vite skeleton styles with yeshello's dark theme base.

**Files:**
- Modify: `src/index.css` (full replacement)

- [ ] **Step 1: Replace index.css**

Replace `src/index.css` entirely:

```css
:root {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  font-weight: 400;
  color: #e0e0e0;
  background-color: #1a1a2e;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
}

a {
  color: #82aaff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
```

- [ ] **Step 2: Commit**

```bash
git add src/index.css
git commit -m "style: replace skeleton global styles with yeshello dark theme"
```

---

### Task 3: Page styles

Write the component CSS for all yeshello page elements: layout, chat messages, sections, and footer.

**Files:**
- Modify: `src/App.css` (full replacement)

- [ ] **Step 1: Replace App.css**

Replace `src/App.css` entirely:

```css
.page {
  max-width: 640px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

/* Header */
.header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.header h1 {
  font-size: 3rem;
  margin: 0;
  color: #fff;
}

.header .tagline {
  color: #aaa;
  font-size: 1.15rem;
  margin-top: 0.5rem;
}

/* Intro */
.intro {
  margin-bottom: 2.5rem;
  color: #ccc;
}

.intro p {
  margin: 0 0 1rem;
}

/* Sections (bad/good examples, alternatives) */
.section {
  margin-bottom: 2.5rem;
}

.section-title {
  font-size: 1.25rem;
  margin: 0 0 0.75rem;
}

.section-title.bad {
  color: #ff6b6b;
}

.section-title.good {
  color: #51cf66;
}

/* Chat conversation container */
.chat {
  background: #2a2a3e;
  border-radius: 8px;
  padding: 1rem;
}

/* Individual chat message */
.message {
  margin-bottom: 0.75rem;
}

.message:last-child {
  margin-bottom: 0;
}

.message-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
}

.avatar {
  width: 28px;
  height: 28px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  color: #fff;
  flex-shrink: 0;
}

.message-name {
  font-weight: 700;
  font-size: 0.9rem;
  color: #fff;
}

.message-time {
  color: #666;
  font-size: 0.75rem;
}

.message-text {
  margin-left: 36px;
  color: #ddd;
}

/* Caption below chat examples */
.caption {
  color: #aaa;
  font-size: 0.85rem;
  font-style: italic;
  margin-top: 0.5rem;
}

/* Alternatives list */
.alternatives {
  color: #ccc;
  line-height: 2;
  padding-left: 1.25rem;
}

/* Footer */
.footer {
  text-align: center;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid #333;
}

.footer .disclaimer {
  color: #888;
  font-size: 0.85rem;
  margin: 0 0 0.5rem;
}

.footer .attribution {
  color: #666;
  font-size: 0.75rem;
  margin: 0;
}
```

- [ ] **Step 2: Commit**

```bash
git add src/App.css
git commit -m "style: add yeshello page component styles"
```

---

### Task 4: Page content

Replace the skeleton App component with the full yeshello page content.

**Files:**
- Modify: `src/App.tsx` (full replacement)

- [ ] **Step 1: Replace App.tsx**

Replace `src/App.tsx` entirely:

```tsx
import './App.css'

function App() {
  return (
    <div className="page">
      {/* Header */}
      <header className="header">
        <h1>yes hello!</h1>
        <p className="tagline">please DO just say hello</p>
      </header>

      {/* Intro */}
      <div className="intro">
        <p>
          <strong>If you want to connect with someone on chat, DO just say hello.</strong>{' '}
          Don't launch straight into your question — that's impersonal and honestly a bit rude.
        </p>
        <p>
          Imagine walking into someone's office, not making eye contact, and just barking a
          question at them. That's what skipping "hello" feels like. 🤦‍♂️
        </p>
      </div>

      {/* Bad example */}
      <div className="section">
        <h2 className="section-title bad">❌ Don't do this:</h2>
        <div className="chat">
          <div className="message">
            <div className="message-header">
              <div className="avatar" style={{ backgroundColor: '#e74c3c' }}>JT</div>
              <span className="message-name">Jamie Tartt</span>
              <span className="message-time">9:32 AM</span>
            </div>
            <div className="message-text">
              Hey can you check if the Richmond server is responding to API calls? It's returning
              502 errors on the /players endpoint and coach needs the lineup data by noon.
            </div>
          </div>
          <div className="message">
            <div className="message-header">
              <div className="avatar" style={{ backgroundColor: '#3498db' }}>TL</div>
              <span className="message-name">Ted Lasso</span>
              <span className="message-time">9:45 AM</span>
            </div>
            <div className="message-text">... 😔</div>
          </div>
        </div>
        <p className="caption">
          Jamie didn't even say hello. Ted is hurt but will fix the server anyway because he's Ted.
        </p>
      </div>

      {/* Good example */}
      <div className="section">
        <h2 className="section-title good">✅ Instead, try this:</h2>
        <div className="chat">
          <div className="message">
            <div className="message-header">
              <div className="avatar" style={{ backgroundColor: '#9b59b6' }}>RK</div>
              <span className="message-name">Roy Kent</span>
              <span className="message-time">2:15 PM</span>
            </div>
            <div className="message-text">Hey Ted! Hope your day's going well 👋</div>
          </div>
          <div className="message">
            <div className="message-header">
              <div className="avatar" style={{ backgroundColor: '#3498db' }}>TL</div>
              <span className="message-name">Ted Lasso</span>
              <span className="message-time">2:16 PM</span>
            </div>
            <div className="message-text">Roy! Hey there, buddy! 😄 What's going on?</div>
          </div>
          <div className="message">
            <div className="message-header">
              <div className="avatar" style={{ backgroundColor: '#9b59b6' }}>RK</div>
              <span className="message-name">Roy Kent</span>
              <span className="message-time">2:16 PM</span>
            </div>
            <div className="message-text">
              Not bad. Listen — the Richmond server's throwing 502s on /players. Coach needs
              lineup data by noon tomorrow. Can you take a look?
            </div>
          </div>
          <div className="message">
            <div className="message-header">
              <div className="avatar" style={{ backgroundColor: '#3498db' }}>TL</div>
              <span className="message-name">Ted Lasso</span>
              <span className="message-time">2:17 PM</span>
            </div>
            <div className="message-text">
              On it like a bonnet! 🎉 I'll have that sorted before you can say "football is life."
            </div>
          </div>
        </div>
        <p className="caption">
          Roy said hello first. Ted feels valued as a human being. The server still gets fixed,
          but now everyone's day is a little better.
        </p>
      </div>

      {/* Warm alternatives */}
      <div className="section">
        <h3>Some warm alternatives:</h3>
        <ul className="alternatives">
          <li>"Hey! Quick question when you have a sec — [question]"</li>
          <li>"Hi [name]! Hope you're doing well. I was wondering..."</li>
          <li>"Good morning! Got a minute? [question]"</li>
          <li>"Hello! 👋 [question]"</li>
        </ul>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p className="disclaimer">We are completely serious. 🫡</p>
        <p className="attribution">
          A rebuttal to <a href="https://nohello.net/en/">nohello.net</a>
        </p>
      </footer>
    </div>
  )
}

export default App
```

- [ ] **Step 2: Verify dev server renders correctly**

Run: `bun run dev`
Expected: Page renders at localhost:5173 with dark theme, header, two chat examples, alternatives list, and footer.

- [ ] **Step 3: Verify production build**

Run: `bun run build`
Expected: Build succeeds with no errors or warnings.

- [ ] **Step 4: Commit**

```bash
git add src/App.tsx
git commit -m "feat: add yeshello page content with Ted Lasso chat examples"
```
