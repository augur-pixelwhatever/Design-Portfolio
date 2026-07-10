# Katherine De Zilva — Portfolio Website

Interaction design portfolio built from Figma wireframes. Fixed 1440px desktop layout.

## Tech Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** with Figma design tokens
- **Static export** — no server runtime needed

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) at **1440px browser width** for the intended experience.

## Build & Static Export

```bash
npm run build
```

Output goes to `out/`. Upload the contents of `out/` to any static host (GoDaddy, Netlify, Vercel, Cloudflare Pages).

## Pages

| Route | Page |
|-------|------|
| `/` | Home — portfolio overview |
| `/about` | About — bio + design methodology |
| `/work/bytesize` | bytesize case study |
| `/work/ocf` | OCF Website Redesign case study |
| `/work/nook` | Nook case study |
| `/artwork` | Artwork — rendering + concepting galleries |

## Fonts

- **Hanken Grotesk** — headings and body text
- **Josefin Sans** — navigation, labels, captions

Loaded via `next/font/google` (no external stylesheet requests).

## Deployment (GitHub Pages)

Live URL (after setup): **https://augur-pixelwhatever.github.io/Design-Portfolio/**

### One-time setup

1. Create a public repo on GitHub named **Design Portfolio** under `augur-pixelwhatever`
2. In the repo, go to **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**
3. Push this project to the repo (see below)

### Push to GitHub

```bash
cd "Portfolio Website"
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/augur-pixelwhatever/Design-Portfolio.git
git push -u origin main
```

Every push to `main` rebuilds and deploys automatically via `.github/workflows/deploy.yml`.

### Local build

```bash
npm run build
```

Static files are written to `out/`. The `basePath` in `next.config.mjs` is set for the `Design-Portfolio` repo slug (GitHub converts spaces to hyphens in URLs).

No server runtime, database, or API keys required.
