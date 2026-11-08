# ZARQ marketing assets

## Partner pack
- `public/zarq-partner-pack.pdf`, 6 A4 pages: cover, the need (Stats SA figures), approach and programmes, ways to support, accountability and goals, founder and contact.
- Its HTML source was lost with a scratch folder. For small changes (a photo swap) edit the PDF in place with pikepdf: the founder image is XObject `/X65` on page 6 (900×1352, DCTDecode); crop a replacement to that ratio and `img.write(jpeg_bytes, filter=pikepdf.Name.DCTDecode)`. For bigger changes, rebuild the pack as HTML (brand fonts, 210×297 mm pages) and print to PDF with Playwright.

## Pitch deck (Claude Slides artifact)
- https://claude.ai/artifact/MpmFWXWkYTgA7JmBxkWki2 - 17 slides: cover, contents, statement ("Talent is everywhere. Access isn't."), access gap numbers, two sides, funding-model circle, ZARQ Digital prices, full-bleed robotics video slide, learner tracks, Digital Kindness, pathway, timeline (done/next/planned), year-one goals, founder, partner options, accountability, close.
- Open question for the owner: whether to add an "Our ask" slide with an amount and use of funds.

## Instagram (@zarq_sa)
- Playbook page: https://claude.ai/artifact/JcKycUdFawjBsMujXvZPEA (profile setup, pillars, weekly rhythm, calendar, growth tactics, captions with copy buttons).
- Profile: Name "ZARQ | Websites & Free Tech Classes"; bio "Websites, branding & CIPC registration for SA businesses. / Free coding, robotics & AI classes for youth in Matatiele. / Classes from Jan 2027 ↓"; link zarq.co.za?utm_source=instagram&utm_medium=social&utm_campaign=bio; highlights Classes, Digital, Prices, Kindness, About.
- Pillars: useful tips 35% (reach), ZARQ Digital 25% (clients), programmes & Digital Kindness 25% (mission), people & behind the scenes 15% (trust).
- Rhythm: Mon carousel tip, Wed reel, Fri offer/local feature, Sun people post; stories daily.
- Launch week 9–16 Nov 2026 (posted in this order): 1 Hello Matatiele carousel · 2 Why ZARQ exists (13.3%) · 3 Meet the founder · 4 CIPC in 4 steps · 5 classes reel · 6 website prices · 7 child safety online · 8 ZARQ Digital reel · 9 registrations open. Pin intro + both reels (pinning is phone-app only for this account).
- Phases: grow to 13 Dec → registrations and "new year, new website" push to 10 Jan → classes launch January 2027.
- Growth: WhatsApp Status/Facebook sharing, collab posts with Matatiele businesses and schools, "Comment WEBSITE / CLASSES" calls to action, 20 min/day local commenting, 3–5 specific hashtags, boost best reel ~R50/day, R1,000–R1,500/month ads; never buy followers.
- Post template: `assets/instagram/posts.html` (1080×1350 slides; render each `section[id]` to PNG with Playwright). Ideas backlog for weeks 2–6 is on the playbook page.

## Google Business Profile
- Guide written for the owner: business name "ZARQ", category Website designer, service-area business (no public address), services list, products (websites R1,500, CIPC R480, free classes), opening date at the January launch, no AI-generated video in photos.
