# Lindelof Limited

This is the website for [lindeloflimited.com](https://lindeloflimited.com), Zach Lindelof’s freelance video production business. It is a plain static site (HTML, CSS, and a little JavaScript) so it can be hosted for free on GitHub Pages instead of Squarespace.

The old Squarespace shop, product pages, cart, and checkout are not part of this site. Shop is not in the menu.

## What’s in here

| Page | Address |
| --- | --- |
| Home / work grid | `/` and `/work/` |
| 2026 Resume & Work Reels | `/work/resumeandreels/` |
| Creative Works | `/work/creativeworks/` |
| Screenwriting | `/work/screenwriting/` |
| Broadcast Portfolio | `/work/espnportfolio/` |
| Due Diligence | `/work/due-diligence/` |
| Disney PhotoPass | `/work/disney-photopass/` |
| Photography | `/work/photography/` |
| Twitch Streaming | `/work/twitchstreaming/` |
| Contact | `/contact/` |

Photos and the short background videos live in `images/` and `videos/`. YouTube, Google Drive, Twitch, and Instagram stay as links or embeds. They keep working after Squarespace is cancelled because they are not stored on Squarespace.

The contact page is the email address **hello@lindeloflimited.com**, which opens the visitor’s email app. The Squarespace site did not have a contact form, so you do **not** need a Formspree account (or any other form service) for this site to work.

If you later want a form on the page instead of an email link, [Formspree](https://formspree.io) has a free plan: create an account, make a form that sends to your email, and paste the form endpoint they give you into `contact/index.html`.

## Preview on your computer

You need the site served as a website, not opened as a file.

1. Install [Python](https://www.python.org/downloads/) if you don’t already have it.
2. Open Terminal (Mac) or Command Prompt (Windows).
3. Go into this folder. Example: `cd Desktop/lindeloflimited-site`
4. Run: `python3 -m http.server 8080`
5. Open [http://localhost:8080](http://localhost:8080)

## Put it on GitHub Pages

The file `.github/workflows/pages.yml` publishes the site whenever the `main` branch changes. You still have to turn Pages on once.

1. On GitHub, open the repository **duediligence26/lindeloflimited-site**.
2. Click **Settings**.
3. In the left sidebar, click **Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. If a workflow is waiting, open the **Actions** tab, click **Deploy GitHub Pages**, and let it finish. The first run starts on the next push to `main`, or you can click **Run workflow**.
6. When it succeeds, Pages will show a site address. After the domain steps below, that address becomes lindeloflimited.com.

The file `CNAME` already contains `lindeloflimited.com`. Leave that file in the repo. It tells GitHub which domain this site uses.

## Point the domain at GitHub Pages

Do this at the company where the domain’s DNS is managed. If the domain was registered with Squarespace, that place is Squarespace (Domains → DNS), even after you cancel the website plan.

Add these records. Remove any old Squarespace website records that conflict (often `A` records pointing at Squarespace, or a `CNAME` for `www` that points at Squarespace). Leave MX records alone if you use email at this domain.

**A records** for the root domain (`@` or `lindeloflimited.com`), four of them:

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

**CNAME** for `www`:

- Host: `www`
- Points to: `duediligence26.github.io`

DNS can take a few minutes, and sometimes a few hours. Check by visiting https://lindeloflimited.com. It should show this site, not Squarespace.

## Turn on HTTPS

1. GitHub → the repo → **Settings** → **Pages**.
2. After GitHub sees the DNS records, check **Enforce HTTPS**.

If the checkbox stays disabled, wait and refresh. GitHub needs the domain to point here before it can issue the certificate.

## Cancel Squarespace without losing the domain

The **website plan** (about $36 a month) and the **domain registration** are two different bills.

- The website plan is Squarespace hosting. That is the one this project replaces.
- If the domain was registered through Squarespace Domains, registration is a separate, cheaper yearly cost. Keep paying that if you want to keep the name `lindeloflimited.com`. Cancelling the website plan does not automatically cancel the domain, and cancelling the domain would make the name available for someone else to buy.

Before you cancel the website plan:

1. Confirm https://lindeloflimited.com and https://www.lindeloflimited.com both show this GitHub site, with the padlock (HTTPS).
2. In Squarespace, download a backup of the site if you want a copy of the old editor version (Settings → Site availability, or the export option Squarespace shows for your plan).
3. Confirm the domain still lists you as the owner and that auto-renew for the **domain** is on, if you want to keep the name.
4. Then cancel only the **website** subscription.

If you would rather move the domain away from Squarespace entirely, unlock it in Squarespace Domains and transfer it to another registrar (Cloudflare, Namecheap, Google Domains’ successor, and so on). Transfer the domain only after this site is already loading on the name, and do not let the domain expire during the transfer.

## Editing the words later

Each page is an `index.html` file in a folder. To change a sentence, open that file in any text editor, change the words between the tags, save, and push to `main`. GitHub Pages will republish.

Example: the contact email is in `contact/index.html`. Project descriptions are under `work/`.

The look (colors, header, grid) is in `css/styles.css`. The menu and photo arrows are in `js/site.js`.

## Differences from the Squarespace site

- Shop, cart, checkout, and the account login are not included.
- The typeface on Squarespace was Aktiv Grotesk, loaded from Adobe. That font is not licensed for this repo, and the Squarespace font kit was not published for other domains. The site uses Helvetica / Arial, which is the same kind of plain grotesque.
- Background clips from the old site are saved in `videos/` and play on the page. YouTube, Google Drive, Twitch, and Instagram stay as embeds or links.
- The Instagram block is a grid of saved photos that link to the original posts, so it still works after Squarespace is cancelled. It is not a live Instagram feed.
- Squarespace’s exact drag-and-drop spacing is approximated. The words, photos, and videos are the same.
