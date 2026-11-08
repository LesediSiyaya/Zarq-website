# ZARQ website (zarq.co.za)

## Stack
- Vite 6 + React 18 + react-router 7 SPA, Tailwind v4. Build-time prerender (`scripts/prerender.mjs`) writes flat HTML per route (`dist/about.html`, `dist/programmes/digital-kindness.html`), plus sitemap, robots.txt, llms.txt, llms-full.txt and JSON-LD (Organization with legalName/identifier, Service/Offer, FAQPage, breadcrumbs).
- Hosting: Cloudflare Worker **"zarq"** (Workers Builds from `main`), `wrangler.jsonc`, assets from `./dist`, `run_worker_first`. `worker/index.js` 301-redirects any other host to zarq.co.za. Custom domains zarq.co.za and www. Old Pages project novatechhub.pages.dev redirects too.
- DNS on Cloudflare, domain registered at xneelo. Email on Zoho (MX/SPF/DKIM set; DMARC suggested: `_dmarc` TXT `v=DMARC1; p=none; rua=mailto:admin@zarq.co.za`).
- Forms: Web3Forms (`src/app/components/zarq/web3forms.ts`), delivers to admin@zarq.co.za, honeypot field. Web3Forms rejects datacenter IPs, so the owner tests forms on the live site.
- Analytics: GA4 G-ML4HXH48R0, loads only after consent (`analytics.ts`, localStorage `zarq_analytics_consent`). Events: generate_lead, sign_up, whatsapp_click, partner_pack_download.
- Search Console verified for zarq.co.za; sitemap https://zarq.co.za/sitemap.xml.

## Key files
- `src/app/components/zarq/content.ts` - all copy and facts (single source of truth)
- `src/app/seo/pages.ts` - per-page titles/descriptions; `fullTitle` adds " | ZARQ" unless the title contains ZARQ
- `src/app/routes.tsx` - routes and old-URL redirects (also `public/_redirects`)
- `src/app/components/zarq/ui.tsx` - Section (tones white/paper/ink/blush), SectionHeading, Eyebrow, ButtonLink, Card, CTABand, PageHeader
- Pages: Home, About, Programmes, Digital, GetInvolved, Partners, Contact, FAQ, Terms, Privacy; landing pages in `pages/services/`: Websites, CipcRegistration, CodingClasses, DigitalKindness
- `public/zarq-partner-pack.pdf` (6 pages), `public/media/stock/CREDITS.txt` (Unsplash/Pexels credits, not shown on site)

## Workflow (every change)
1. Work on the session's feature branch (historically `claude/great-galileo-7uqebj`). Commit there and push.
2. `npm install --no-package-lock --no-audit --no-fund` (there is no lockfile; `npm ci` fails), then `npm run build`.
3. Screenshot with Playwright (`/opt/node22/lib/node_modules/playwright`) against `npx vite preview --port 4173`; send desktop and phone shots.
4. Wait for "go live", then publish:
   `git fetch -q origin main && git merge-base --is-ancestor origin/main HEAD && git push origin HEAD:main`
   Cloudflare rebuilds in a few minutes; confirm with curl on the live URL.

## Gotchas
- Stop the preview server with `ps -eo pid,comm,args | awk '$2=="node" && /vite/ && /preview/ {print $1}' | xargs -r kill` (pkill can kill your own shell).
- Headless Chromium cannot play H.264 video; the site's mp4s play fine in real browsers. Use VP9 webm when you need video inside a headless render.
- Give new images new filenames (browser caching). Founder images use `object-[50%_18%]` so the head isn't cropped.
- Use stock photos without faces where captions could be read as ZARQ people; never add on-page "stock" labels.
- Keep honesty wording in `content.ts` comments (status fields: current/developing/planned) in step with reality.
