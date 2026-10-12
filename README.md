# Zarq Website

The website for Zarq: Zarq Digital technology services and Zarq youth technology programmes, from Matatiele, Eastern Cape.

## Running the code

- `npm i` installs the dependencies.
- `npm run dev` starts the development server.
- `npm run build` builds the site into `dist/`, prerendering every page to static HTML and generating the sitemap, robots.txt, llms.txt and llms-full.txt.

## Where things live

- Site copy and facts: `src/app/components/zarq/content.ts`
- Page titles and descriptions: `src/app/seo/pages.ts`
- Site address: `src/app/seo/site.ts` (`SITE_URL`) and `functions/_middleware.js`
