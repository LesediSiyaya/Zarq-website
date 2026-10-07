// Post-build step: turns the single-page app into one static HTML file per route,
// each with its own metadata and structured data, plus sitemap.xml, robots.txt,
// llms.txt and llms-full.txt. Crawlers and AI tools that don't run JavaScript
// can then read every page. Runs automatically at the end of `vite build` (see vite.config.ts).
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const ssrDir = join(root, 'dist-ssr');

const { render, SITE_URL, pages, fullTitle, faqGroups, content } = await import(
  pathToFileURL(join(ssrDir, 'entry-server.js')).href
);
const c = content;
const template = await readFile(join(dist, 'index.html'), 'utf8');
const today = new Date().toISOString().slice(0, 10);

const url = (path) => `${SITE_URL}${path === '/' ? '/' : path}`;
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const rands = (s) => Number(s.replace(/[^\d]/g, ''));

// ---------- Structured data (schema.org JSON-LD) ----------
const ORG = `${SITE_URL}/#organization`;
const DIGITAL = `${SITE_URL}/#zarq-digital`;
const FOUNDER = `${SITE_URL}/#founder`;
const WEBSITE = `${SITE_URL}/#website`;

const address = {
  '@type': 'PostalAddress',
  streetAddress: 'ERF 547 Maluti Township',
  addressLocality: 'Matatiele',
  postalCode: '4740',
  addressRegion: 'Eastern Cape',
  addressCountry: 'ZA',
};
const areaServed = [
  { '@type': 'City', name: 'Matatiele' },
  { '@type': 'State', name: 'Eastern Cape' },
  { '@type': 'Country', name: 'South Africa' },
];

const globalGraph = [
  {
    '@type': 'Organization',
    '@id': ORG,
    name: 'Zarq',
    url: url('/'),
    logo: `${SITE_URL}/favicon.svg`,
    image: `${SITE_URL}/og-image.jpg`,
    description: `An early-stage youth technology and digital opportunity enterprise based in ${c.location.base}. ${c.coreMessage}`,
    founder: { '@id': FOUNDER },
    address,
    areaServed,
    email: c.contact.email,
    telephone: '+27730286401',
    sameAs: [c.contact.instagramUrl],
    knowsAbout: [
      'Digital literacy', 'AI literacy', 'Coding', 'Web development', 'App development', 'UI/UX design',
      'Cybersecurity awareness', 'Robotics', 'STEM education', 'Youth development', 'Digital inclusion',
    ],
    department: { '@id': DIGITAL },
  },
  {
    '@type': 'Person',
    '@id': FOUNDER,
    name: c.founder.name,
    jobTitle: 'Founder',
    worksFor: { '@id': ORG },
    description:
      'Founder of Zarq. Holds a BSc in Information Technology with practical experience in websites, applications, UI/UX, digital products and AI-related work.',
    image: `${SITE_URL}/founder.jpg`,
  },
  {
    '@type': 'WebSite',
    '@id': WEBSITE,
    url: url('/'),
    name: 'Zarq',
    inLanguage: 'en-ZA',
    publisher: { '@id': ORG },
  },
];

const allPrices = c.pricing.flatMap((p) => p.tiers.map((t) => rands(t.price)));
const digitalService = {
  '@type': 'ProfessionalService',
  '@id': DIGITAL,
  name: 'Zarq Digital',
  url: url('/digital'),
  description:
    'The commercial technology arm of Zarq. Based in Matatiele, Eastern Cape, with services delivered online. Revenue helps sustain Zarq youth programmes.',
  parentOrganization: { '@id': ORG },
  address,
  areaServed,
  email: c.contact.email,
  telephone: '+27730286401',
  priceRange: `R${Math.min(...allPrices).toLocaleString('en-US')} – R${Math.max(...allPrices).toLocaleString('en-US')}`,
  availableChannel: { '@type': 'ServiceChannel', serviceUrl: url('/contact'), name: 'Online and in Matatiele' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Zarq Digital services',
    itemListElement: c.pricing.map((p) => ({
      '@type': 'OfferCatalog',
      name: p.service,
      itemListElement: p.tiers.map((t) => ({
        '@type': 'Offer',
        name: `${p.service} – ${t.tier}`,
        description: t.desc,
        price: rands(t.price),
        priceCurrency: 'ZAR',
        itemOffered: { '@type': 'Service', name: p.service, provider: { '@id': DIGITAL } },
      })),
    })),
  },
  // Services without a published price.
  makesOffer: c.digitalServices
    .filter((s) => ['App development', 'IT services'].includes(s.title))
    .map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.title, description: s.text } })),
};

const statusText = { current: 'Current: exists today.', developing: 'Developing: being built now.', planned: 'Planned: a future initiative, not yet running.' };
const programmeList = [c.academy, ...c.tracks, ...c.ecosystem].map((p, i) => ({
  '@type': 'ListItem',
  position: i + 1,
  item: {
    '@type': p.id === 'hub' ? 'Place' : 'EducationalOccupationalProgram',
    name: p.name,
    description: `${p.summary} Status: ${statusText[p.status]}`,
    url: `${url('/programmes')}#${p.id}`,
    ...(p.id === 'hub' ? {} : { provider: { '@id': ORG } }),
  },
}));

const pageTypes = { '/about': 'AboutPage', '/contact': 'ContactPage', '/faq': 'FAQPage', '/programmes': 'CollectionPage' };

function pageGraph(meta) {
  const pageUrl = url(meta.path);
  const graph = [...globalGraph];
  const webPage = {
    '@type': pageTypes[meta.path] ?? 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: fullTitle(meta),
    description: meta.description,
    isPartOf: { '@id': WEBSITE },
    about: { '@id': ORG },
    inLanguage: 'en-ZA',
    dateModified: today,
  };
  if (meta.path !== '/') {
    webPage.breadcrumb = {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: url('/') },
        { '@type': 'ListItem', position: 2, name: meta.name, item: pageUrl },
      ],
    };
  }
  if (meta.path === '/faq') {
    webPage.mainEntity = faqGroups.flatMap((g) =>
      g.items.map((q) => ({ '@type': 'Question', name: q.question, acceptedAnswer: { '@type': 'Answer', text: q.answer } }))
    );
  }
  if (meta.path === '/programmes') webPage.mainEntity = { '@type': 'ItemList', itemListElement: programmeList };
  if (meta.path === '/about') webPage.mainEntity = { '@id': ORG };
  graph.push(webPage);
  if (meta.path === '/digital' || meta.path === '/') graph.push(digitalService);
  return { '@context': 'https://schema.org', '@graph': graph };
}

// ---------- HTML head ----------
function setTag(html, pattern, replacement) {
  if (!pattern.test(html)) throw new Error(`Template is missing ${pattern}`);
  return html.replace(pattern, replacement);
}

function buildPage(meta, body) {
  const pageUrl = url(meta.path);
  const title = esc(fullTitle(meta));
  const desc = esc(meta.description);
  let html = template;
  html = setTag(html, /<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
  html = setTag(html, /<meta name="description"[^>]*>/, `<meta name="description" content="${desc}" />`);
  html = setTag(html, /<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${pageUrl}" />`);
  html = setTag(html, /<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${pageUrl}" />`);
  html = setTag(html, /<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${title}" />`);
  html = setTag(html, /<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${desc}" />`);
  html = setTag(html, /<meta property="og:image" [^>]*>/, `<meta property="og:image" content="${SITE_URL}/og-image.jpg" />`);
  html = setTag(html, /<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${title}" />`);
  html = setTag(html, /<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${desc}" />`);
  html = setTag(html, /<meta name="twitter:image"[^>]*>/, `<meta name="twitter:image" content="${SITE_URL}/og-image.jpg" />`);
  html = setTag(
    html,
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
    `<script type="application/ld+json">${JSON.stringify(pageGraph(meta)).replace(/</g, '\\u003c')}</script>`
  );
  if (meta.indexable === false) {
    html = html.replace('</title>', '</title>\n    <meta name="robots" content="noindex" />');
    html = html.replace(/\s*<link rel="canonical"[^>]*>/, '');
  }
  html = setTag(html, /<div id="root"><\/div>/, `<div id="root">${body}</div>`);
  return html;
}

// ---------- Render every page ----------
for (const meta of pages) {
  const body = await render(meta.path === '/404' ? '/__not-found__' : meta.path);
  const html = buildPage(meta, body);
  const file = meta.path === '/' ? join(dist, 'index.html') : meta.path === '/404' ? join(dist, '404.html') : join(dist, meta.path.slice(1), 'index.html');
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, html);
  console.log(`prerendered ${meta.path.padEnd(14)} → ${file.replace(root + '/', '')}`);
}

// ---------- sitemap.xml & robots.txt ----------
const indexable = pages.filter((p) => p.indexable !== false);
const priority = { '/': '1.0', '/programmes': '0.9', '/digital': '0.9', '/privacy': '0.3' };
await writeFile(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${indexable
    .map((p) => `  <url>\n    <loc>${url(p.path)}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority[p.path] ?? '0.7'}</priority>\n  </url>`)
    .join('\n')}\n</urlset>\n`
);

const aiBots = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'PerplexityBot', 'Google-Extended', 'Applebot-Extended', 'Bingbot'];
await writeFile(
  join(dist, 'robots.txt'),
  `# Zarq welcomes search engines and AI assistants.\nUser-agent: *\nAllow: /\n\n${aiBots
    .map((b) => `User-agent: ${b}\nAllow: /`)
    .join('\n\n')}\n\nSitemap: ${SITE_URL}/sitemap.xml\n`
);

// ---------- llms.txt & llms-full.txt ----------
const statusWord = { current: 'Current', developing: 'Developing', planned: 'Planned' };
const llms = `# Zarq

> ${c.coreMessage}

Zarq is an early-stage youth technology and digital opportunity enterprise based in ${c.location.base}, founded by ${c.founder.name}. It is a hybrid social-impact and commercial enterprise: Zarq Digital sells technology services, and that revenue plus partnerships help fund accessible youth programmes. ${c.location.delivery}

Zarq is honest about its stage: programmes are marked as current, developing or planned, and impact figures are Year 1 targets, not results.

## Pages

${indexable.map((p) => `- [${p.name}](${url(p.path)}): ${p.description}`).join('\n')}

## Details

- [Full fact sheet](${SITE_URL}/llms-full.txt): services and prices, programmes and their status, targets, FAQ and contact details in one plain-text file.

## Contact

- Email: ${c.contact.email}
- Phone / WhatsApp: ${c.contact.phoneDisplay} (+27 73 028 6401)
- Instagram: ${c.contact.instagramHandle} (${c.contact.instagramUrl})
- Address: ${c.contact.addressLines.join(', ')}
`;

const programmesMd = [c.academy, ...c.tracks, ...c.ecosystem]
  .map((p) => `- **${p.name}** (${statusWord[p.status]}): ${p.summary}${p.points ? ` Learning areas: ${p.points.join(', ')}.` : ''}`)
  .join('\n');

const pricingMd = c.pricing
  .map((p) => `### ${p.service}\n\n${p.tiers.map((t) => `- ${t.tier}: ${t.price} (regular price ${t.was}) – ${t.desc}`).join('\n')}`)
  .join('\n\n');

const llmsFull = `# Zarq – full fact sheet

Last updated: ${today}. Website: ${url('/')}

## Summary

${c.coreMessage}

- What: an early-stage youth technology and digital opportunity enterprise.
- Where: ${c.location.base}. ${c.location.delivery}
- Founder: ${c.founder.name}, who holds a BSc in Information Technology with practical experience in websites, applications, UI/UX, digital products and AI-related work.
- Model: hybrid social-impact and commercial. Zarq Digital earns revenue; revenue and partnerships fund youth programmes; programmes build skills, projects and opportunity pathways.
- Stage: in development. Zarq Digital is taking enquiries now. Youth programmes are being developed, starting with a first structured programme. Zarq Hub (a physical centre in Matatiele) is planned and not yet open.

## Vision

${c.vision}

## Mission

${c.mission}

## The Zarq journey

${c.journey.map((j, i) => `${i + 1}. ${j.step}: ${j.text}`).join('\n')}

## Programmes

${programmesMd}

## Zarq Digital (technology services)

Zarq Digital is the commercial arm of Zarq, based in Matatiele, Eastern Cape, with services delivered online. It works with ${c.digitalAudiences.join('; ').toLowerCase()}.

Services:

${c.digitalServices.map((s) => `- ${s.title}: ${s.text}`).join('\n')}

## Zarq Digital pricing

Current pricing is an introductory launch special (${c.pricingNote.toLowerCase()}). All prices exclude VAT. Custom quotes are available for larger projects. App development and IT services are not in the price list; contact Zarq to discuss them.

${pricingMd}

## Year 1 targets (targets, not results)

${c.yearOneTargets.map((t) => `- ${t.value} ${t.label}`).join('\n')}

## Year 1 plan

${c.yearOnePlan.map((p, i) => `${i + 1}. ${p.phase} (${p.months}): ${p.text}`).join('\n')}

## Ways to get involved

- Young people and families: register interest to join a programme.
- Schools: partner with Zarq on learner programmes and workshops.
- Technology professionals: become a mentor.
- Corporates, CSI/ESG programmes, NGOs and foundations: partner with Zarq.
- Sponsors and supporters: support devices, connectivity, resources and programme funding.
- Businesses and organisations: work with Zarq Digital.

All enquiries: ${url('/contact')}

## Frequently asked questions

${faqGroups.map((g) => `### ${g.title}\n\n${g.items.map((q) => `**${q.question}**\n${q.answer}`).join('\n\n')}`).join('\n\n')}

## Contact

- Email: ${c.contact.email}
- Phone / WhatsApp: ${c.contact.phoneDisplay} (+27 73 028 6401)
- Instagram: ${c.contact.instagramHandle} (${c.contact.instagramUrl})
- Address: ${c.contact.addressLines.join(', ')}
`;

await writeFile(join(dist, 'llms.txt'), llms);
await writeFile(join(dist, 'llms-full.txt'), llmsFull);
await rm(ssrDir, { recursive: true, force: true });
console.log('wrote sitemap.xml, robots.txt, llms.txt, llms-full.txt');
