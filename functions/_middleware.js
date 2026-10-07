export async function onRequest({ request, next, env }) {
  const response = await next();

  // Every real page is prerendered to its own HTML file at build time, so anything
  // still not found is a genuine 404: serve the 404 page with a 404 status.
  if (response.status === 404) {
    const notFound = await env.ASSETS.fetch(new URL('/404.html', request.url).toString());
    return new Response(notFound.body, { status: 404, headers: notFound.headers });
  }

  return response;
}
