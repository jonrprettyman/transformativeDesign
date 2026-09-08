# transformative.design

A simple, modern personal landing page — no build tools, no frameworks, no
external packages. Just HTML, CSS, and a few lines of vanilla JavaScript.

It does two things:

1. Introduces you with a short bio and CV summary.
2. Hosts a growing list of projects.

## Files

```
index.html   the page itself (one page, with anchor sections)
style.css    all styling, light/dark aware
script.js    theme toggle + copyright year (no dependencies)
CNAME        tells GitHub Pages to serve this repo at transformative.design
```

## GitHub Pages

This repo is served at `transformative.design` via GitHub Pages, deploying
from the `main` branch, `/ (root)` folder. The `CNAME` file in this repo
tells GitHub Pages which custom domain to use.

## Adding a new project

Open `index.html` and find the `<!-- PROJECT CARD TEMPLATE -->` comment
inside the `<div class="project-grid">`. Duplicate this block for each real
project, and delete the "coming soon" placeholder card once you have at
least one:

```html
<article class="project-card">
  <span class="project-tag">Optional tag, e.g. "2026"</span>
  <h3>Project name</h3>
  <p>One or two sentences on what it is and why it exists.</p>
  <p><a href="https://link-to-project-or-repo">View project →</a></p>
</article>
```

Cards lay themselves out in a responsive grid automatically — no other
changes needed.

## Editing your bio / CV

The "About" and "Experience" sections are plain HTML in `index.html` —
edit the text directly. The experience list uses a simple timeline
structure (`<li class="timeline-item">`); copy an existing item to add a
new role.

## Local preview

No build step is needed. Either open `index.html` directly in a browser,
or run a tiny local server from this folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.
