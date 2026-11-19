# AI Handoff: lindeloflimited.com

Read this first if you are an AI assistant (Claude, ChatGPT, Cursor, Copilot, etc.) asked to change this website.

## What this is

- The website for **Lindelof Limited** (https://lindeloflimited.com), the freelance video production business of **Zach Lindelof**. Zach is a filmmaker (BFA Film & TV Production), a Disney PhotoPass photographer, and he's job hunting, so the site is both a client portfolio and a hiring showcase.
- Repo: https://github.com/duediligence26/lindeloflimited-site (GitHub account `duediligence26`, public repo, default branch `main`).
- Rebuilt in Nov 2026 from Squarespace into a **plain static site** (HTML + CSS + a little vanilla JS) so it's hosted free on **GitHub Pages**. No framework, no build step, no package.json, no dependencies.
- Zach is not a developer. Explain changes in plain language and keep things simple.

## How it deploys

- `.github/workflows/pages.yml` deploys the **whole repo root** to GitHub Pages on every push to `main` (it can also be run manually with "Run workflow").
- Pages source is set to **GitHub Actions** in repo settings. Custom domain: `lindeloflimited.com` (the `CNAME` file holds it; don't delete it). `.nojekyll` disables Jekyll; keep it.
- DNS is at Squarespace Domains: four A records to 185.199.108–111.153 and `www` CNAME to `duediligence26.github.io`. Don't suggest changing DNS unless asked.
- **Anything pushed to `main` goes live within about a minute.** Prefer a branch + pull request for anything bigger than a small text fix, and let Zach review before merging.

## File layout

| Path | What it is |
| --- | --- |
| `index.html` | Home page (work grid) |
| `work/index.html` | Work grid (same as home) |
| `work/<slug>/index.html` | One page per project: `resumeandreels`, `creativeworks`, `screenwriting`, `espnportfolio` (Broadcast Portfolio), `due-diligence`, `disney-photopass`, `photography`, `twitchstreaming` |
| `contact/index.html` | Contact page (mailto link to hello@lindeloflimited.com; there's no form) |
| `404.html` | Not-found page |
| `css/styles.css` | All styling (colors, header, grid, layout) |
| `js/site.js` | Mobile menu and photo-gallery arrows |
| `images/` | All photos, card thumbnails, logo, favicon, Instagram grid thumbnails (`ig-01..16.jpg`) |
| `videos/` | Short muted background clips (MP4, ~960px wide) |
| `sitemap.xml`, `robots.txt` | SEO files; update `sitemap.xml` if you add or remove a page |
| `README.md` | Human-facing setup guide (Pages, DNS, HTTPS, cancelling Squarespace) |

Each page is a folder with an `index.html` so URLs stay clean (`/work/photography/`), matching the old Squarespace URLs.

## Conventions

- **Use relative paths** (`css/styles.css`, `../../images/x.jpg`), never root-absolute (`/css/...`). This keeps the site working both on the custom domain and at the preview URL `https://duediligence26.github.io/lindeloflimited-site/`.
- Header/nav and footer are **copied into every HTML file** (no templating). If you change the menu or footer, update every page.
- Keep media local. Put new images in `images/` (web-optimized JPG, ~1600–2000px max for heroes, smaller for cards) and clips in `videos/`. Don't hot-link Squarespace CDN URLs; they'll break once Squarespace is cancelled.
- Long videos stay as **YouTube / Google Drive / Twitch / Instagram embeds or links**, not files in the repo.
- Font is a system Helvetica/Arial stack (the original Adobe font isn't licensed here). Don't add paid fonts without asking.
- Keep pages responsive and lightweight, and keep meta/Open Graph tags on each page.

## Things Zach has decided

- **No Shop.** The old Squarespace shop, products, cart, checkout and login were dropped on purpose. Don't add them back unless he asks.
- He reviewed five redesign concepts (reel-first, editorial, hire-me, contact sheet, clip bin) and **rejected all of them**. The current look is the one he wants. Don't propose a full redesign unless asked; make targeted changes.
- Contact is a mailto link. A Formspree form is optional (see README) and only if he asks.

## How to work on it

1. Clone: `git clone https://github.com/duediligence26/lindeloflimited-site.git`
2. Preview locally: `python3 -m http.server 8080`, then open http://localhost:8080 (don't open the files directly; paths need a server).
3. Make the change, check desktop and mobile widths, and check that links and images load.
4. Small text fix: commit to `main`. Anything else: new branch, open a PR, and summarize it for Zach in plain words.
5. After merging, check the "Deploy GitHub Pages" run in the Actions tab passed, then check https://lindeloflimited.com.

## Access

To push, the AI tool needs access to the `duediligence26` GitHub account (for example the GitHub integration in Claude/Cursor/ChatGPT, or a fine-grained personal access token limited to this repo with Contents and Pull requests read/write). Never commit tokens or passwords to this repo; it's public.
