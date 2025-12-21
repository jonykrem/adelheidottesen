# Artist Portfolio (SvelteKit + Static + Decap CMS)

Production-ready static portfolio built with SvelteKit, pre-rendered for Cloudflare Pages, and edited via Decap CMS.

## Tech Stack
- SvelteKit (TypeScript)
- `@sveltejs/adapter-static`
- Markdown + frontmatter
- Decap CMS (GitHub backend)
- Cloudflare Pages deployment

## Local Development

```bash
# install dependencies
npm install

# start dev server
npm run dev

# static build
npm run build

# preview built site
npm run preview
```

## Content Structure
- Artworks: `src/content/artworks/*.md`
- Pages: `src/content/pages/{about,cv}.md`
- Images: `static/images/artworks/*`
- CMS: `static/admin/{index.html,config.yml}`

Artwork frontmatter example:

```yaml
---
title: "Untitled (Blue)"
slug: "untitled-blue"
year: 2023
medium: "Oil on canvas"
dimensions: "120 × 90 cm"
category: "Painting"
featured: true
images:
  - blue-1.jpg
  - blue-2.jpg
---
```

## Decap CMS Setup (GitHub backend)
1. Update `static/admin/config.yml`:
   - `repo: your-github-username/your-repo-name`
   - `branch: main` (or your default branch)
2. Create a GitHub OAuth App:
   - Homepage: your deployed site URL
   - Authorization callback URL: `https://your-site/admin/`
   - Set env vars for the CMS (client ID/secret) via your hosting provider if using proxy server; for static hosting you can use a third-party auth proxy or run CMS locally with personal access token.
3. Commit and push. Visit `/admin` on the deployed site to use CMS.

Note: For a fully static site on Cloudflare Pages, Decap CMS GitHub backend requires an OAuth flow. Alternatively, use `git-gateway` with Netlify Identity if hosted on Netlify.

## Cloudflare Pages Deployment
1. Push this repo to GitHub.
2. In Cloudflare Pages, create a new project from your repo.
3. Build settings:
   - Build command: `npm run build`
   - Output directory: `build`
   - Node version: latest LTS
4. Environment variables (optional): none required for static build.

## Image Optimization
- Images are lazy-loaded (`loading="lazy"`, `decoding="async"`).
- For responsive sources, provide multiple sizes (e.g., `myimg-400.jpg`, `myimg-800.jpg`) and update templates accordingly.
- Keep originals reasonably sized (≤ 2000px width) to ensure fast loads.

## Accessibility & SEO
- Semantic markup for artwork pages.
- Basic meta tags in `src/app.html` and per-page titles.

## Structure Overview
- Routes:
  - `/` — landing (featured works)
  - `/gallery` — grid with category filter
  - `/gallery/[slug]` — artwork detail
  - `/about` — Markdown-driven
  - `/cv` — Markdown-driven
  - `/contact` — email + social links

## Notes
- Everything is pre-rendered via `adapter-static` (see `svelte.config.js`).
- CMS writes Markdown files to the repo; images live under `static/images/artworks`.
