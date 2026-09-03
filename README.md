# Ouail Djebbari — Portfolio

A production-ready, static portfolio website for **Ouail Djebbari**, built with
React + TypeScript + Tailwind CSS and Vite. The design follows a **Minimalist
Monochrome** editorial aesthetic — pure black and white, serif display type,
sharp zero-radius geometry, and generous negative space.

## Project Overview

| Section    | Purpose                                                        |
| ---------- | -------------------------------------------------------------- |
| Hero       | Name, tagline, CTA linking to the GitHub repo                   |
| About      | Candidate background and key statistics                         |
| Skills     | Full skill grid with categories                                 |
| Projects   | Prompt Forge, EasyBuy, Snaggr — screenshots, tags, live links   |
| Strengths  | Signal list presented as an inverted editorial block            |
| Contact    | Email, LinkedIn, GitHub channels                                |

## Tech Stack

- **React 18** + **TypeScript**
- **Tailwind CSS** (custom monochrome design tokens)
- **Vite** for bundling (lazy loading, code-splitting, minimal bundle)
- **lucide-react** for icons
- Google Fonts: Playfair Display, Source Serif 4, JetBrains Mono

## Prerequisites

- **Node.js** 18+ (LTS recommended)
- **npm** 9+ (comes bundled with Node)

## Installation

```bash
npm install
```

## Local Development

```bash
npm run dev
```

Open the printed local URL (default `http://localhost:5173`). Vite provides
hot module replacement for instant updates.

## Customize

Before deploying, replace the placeholders in **`src/config/site.ts`**:

- `email` — your real email
- `github` / `linkedin` — profile URLs
- `projectsRepo` — URL of this repository (used by the Hero CTA)
- `projects[].image` — screenshot paths (see `public/screenshots/README.md`)

Place screenshot images in `public/screenshots/` with matching filenames.

## Build

```bash
npm run build
```

Outputs a minified, production-ready site to the `dist/` directory.

## Deploy to GitHub Pages

1. **Update the base path** in `vite.config.ts` so assets load correctly under
   a sub-path. This scaffold ships pre-configured with:

   ```ts
   base: "/portfolio/",
   ```

   Replace `portfolio` with your **repository name**. If your repo is named
   exactly `<username>.github.io`, set `base: "/"` instead.

2. **Create a repository** on GitHub (e.g. `portfolio`).

3. **Push the code**:

   ```bash
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<username>/portfolio.git
   git push -u origin main
   ```

4. **Enable Pages** (two options):

   - **GitHub Actions (recommended):** add the workflow below to
     `.github/workflows/deploy.yml`, then push. GitHub builds and deploys on
     every push to `main`.
   - **Manual:** in repo **Settings → Pages → Source**, choose branch
     `gh-pages` (after running the build-and-deploy steps) or use a static
     site generator action.

5. The site is live at:

   ```text
   https://<username>.github.io/portfolio/
   ```

### GitHub Actions workflow (`.github/workflows/deploy.yml`)

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

## Deploy to Netlify / Vercel

- **Netlify:** drag-and-drop the `dist/` folder after `npm run build`, or
  connect the repo (build command `npm run build`, publish dir `dist`).
- **Vercel:** import the repo; defaults (build `npm run build`, output `dist`)
  work out of the box.

## Folder Structure

```
portfolio/
├─ public/
│  ├─ screenshots/          # project screenshot images
│  └─ vite.svg              # site favicon
├─ src/
│  ├─ assets/               # (future) shared assets
│  ├─ components/           # section components
│  ├─ config/
│  │  └─ site.ts            # content + links (EDIT THIS)
│  ├─ App.tsx               # page composition
│  ├─ index.css             # global styles + monochrome tokens
│  └─ main.tsx              # React entry point
├─ index.html
├─ package.json
├─ tailwind.config.js
├─ tsconfig.json
├─ vite.config.ts
└─ README.md
```

## License

Personal use. Replace all placeholder links, images, and personal references
with the candidate's actual information before publishing.
