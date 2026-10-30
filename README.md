# gatescao.com

Personal site for essays and projects. Static Astro, hosted on Cloudflare Pages, custom domain `gatescao.com`.

## Local

```sh
npm install
npm run dev
```

The site runs at `http://localhost:4321`.

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build |

## Writing

### Essays

Add a Markdown (or MDX) file in `src/content/essays/`:

```md
---
title: The title
description: One sentence for lists, RSS, and search.
pubDate: 2026-10-30
tags:
  - math
draft: false
---

The essay itself.
```

The filename becomes the URL: `why-this-site.md` → `/essays/why-this-site`.

Set `draft: true` to keep a piece off the public lists and RSS (drafts still show in `npm run dev`).

In MDX, a margin note is available:

```mdx
<MarginNote>This sits in the outer margin on a wide screen.</MarginNote>
```

### Projects

Same pattern in `src/content/projects/`:

```md
---
title: An AI agent
description: A project in progress.
pubDate: 2026-10-30
status: in-progress   # in-progress | paused | done
featured: true
url: https://example.com
repo: https://github.com/gatescao/example
tags:
  - ai
---
```

`featured: true` puts the project on the home page under “On the desk.” If none are featured, the most recently dated project is used.

Site copy (name, tagline) lives in `src/consts.ts`.

## Deploy: GitHub + Cloudflare Pages

This repo is meant to be pushed to GitHub, then built by Cloudflare Pages on every push to `main`.

### 1. Create the GitHub repository

If git is not initialized yet:

```sh
git init -b main
```

Then on GitHub, create a public repo (for example `gatescao/gatescao.com`), add it as `origin`, and push:

```sh
git add .
git commit -m "Initial commit"
git remote add origin git@github.com:gatescao/gatescao.com.git
git push -u origin main
```

### 2. Create the Pages project

1. Open the [Cloudflare dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create** → **Pages** → **Import an existing Git repository**.
2. Connect GitHub and select this repo.
3. Use these build settings:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | `22` (set `NODE_VERSION` to `22` under environment variables, or rely on `.node-version`) |

4. Save and deploy. The first preview URL will be something like `https://gatescao.pages.dev`.

A `wrangler.jsonc` is included for local preview (`npx astro build && npx wrangler pages dev dist`). You do not need Wrangler for the GitHub-connected Pages deploy.

### 3. Attach gatescao.com

1. In the Pages project, open **Custom domains**.
2. Add `gatescao.com` and `www.gatescao.com`.
3. If the domain already lives in this Cloudflare account, DNS records are created for you. If it does not, either move the nameservers to Cloudflare or add the CNAME Cloudflare shows you at your current DNS host.

After the certificate is issued, `https://gatescao.com` is the live site. Later pushes to `main` rebuild and publish automatically.

## Stack

- [Astro](https://astro.build) (static)
- Markdown / MDX content collections
- RSS at `/rss.xml`
- No server adapter — Cloudflare Pages serves `dist/` as static files
