import { useEffect } from 'react';
import { SITE_URL } from '../seo/site';
import { pageMeta, fullTitle } from '../seo/pages';

// Keeps the document head in sync during client-side navigation.
// The same metadata is written into each page's static HTML at build time (scripts/prerender.mjs).
export function useSEO(path: string) {
  useEffect(() => {
    const meta = pageMeta(path);
    const url = `${SITE_URL}${meta.path === '/' ? '/' : meta.path}`;
    const title = fullTitle(meta);
    document.title = title;

    const setMeta = (selector: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(el.hasAttribute('content') ? 'content' : 'href', value);
    };

    setMeta('meta[name="description"]', meta.description);
    setMeta('link[rel="canonical"]', url);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', meta.description);
    setMeta('meta[property="og:url"]', url);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', meta.description);
  }, [path]);
}
