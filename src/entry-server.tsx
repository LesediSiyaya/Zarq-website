// Build-time rendering entry used by scripts/prerender.mjs.
// Renders each route to static HTML so crawlers and AI tools can read the full content without JavaScript.
import { renderToString } from 'react-dom/server';
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from 'react-router';
import { routes } from './app/routes';

export { SITE_URL } from './app/seo/site';
export { pages, pageMeta, fullTitle } from './app/seo/pages';
export { faqGroups } from './app/pages/FAQ';
export * as content from './app/components/zarq/content';

const handler = createStaticHandler(routes);

export async function render(path: string): Promise<string> {
  const context = await handler.query(new Request(`http://localhost${path}`));
  if (context instanceof Response) throw new Error(`Unexpected redirect while rendering ${path}`);
  const router = createStaticRouter(handler.dataRoutes, context);
  return renderToString(<StaticRouterProvider router={router} context={context} hydrate={false} />);
}
