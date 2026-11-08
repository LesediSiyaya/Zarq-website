const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const path = require('path');
const dir = process.argv[2];
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 2400, height: 1400 } });
  await p.goto('file://' + path.join(dir, 'posts.html'));
  await p.evaluate(() => document.fonts.ready);
  await p.evaluate(() => Promise.all([...document.images].map(i => i.complete ? 0 : new Promise(r => i.onload = r))));
  const ids = await p.$$eval('section[id]', els => els.map(e => e.id));
  for (const id of ids) await p.locator('#' + id).screenshot({ path: `${dir}/out/${id}.png` });
  console.log(ids.length + ' images');
  await b.close();
})();
