// Runs on the Cloudflare Pages project only (novatechhub.pages.dev).

// The old Pages address permanently redirects to the main site, so search engines
// consolidate on one address. Keep in sync with SITE_URL in src/app/seo/site.ts.
const OLD_HOST = 'novatechhub.pages.dev';
const SITE_URL = 'https://zarq.sa-tech.workers.dev';

export async function onRequest({ request, next, env }) {
  const url = new URL(request.url);
  if (url.hostname === OLD_HOST) {
    return Response.redirect(`${SITE_URL}${url.pathname}${url.search}`, 301);
  }

  const response = await next();

  // Every real page is prerendered to its own HTML file at build time, so anything
  // still not found is a genuine 404: serve the 404 page with a 404 status.
  if (response.status === 404) {
    const notFound = await env.ASSETS.fetch(new URL('/404.html', request.url).toString());
    return new Response(notFound.body, { status: 404, headers: notFound.headers });
  }

  return response;
}
