// Cloudflare Worker for zarq.co.za. Serves the built site from ./dist and sends every
// other address (www.zarq.co.za, zarq.sa-tech.workers.dev) to the main domain with a
// permanent redirect that keeps the path, so links and search rankings carry over.
// Keep CANONICAL_HOST in sync with SITE_URL in src/app/seo/site.ts.

const CANONICAL_HOST = 'zarq.co.za';
const LOCAL_HOSTS = new Set(['localhost', '127.0.0.1']);

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname !== CANONICAL_HOST && !LOCAL_HOSTS.has(url.hostname)) {
      url.protocol = 'https:';
      url.hostname = CANONICAL_HOST;
      url.port = '';
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
