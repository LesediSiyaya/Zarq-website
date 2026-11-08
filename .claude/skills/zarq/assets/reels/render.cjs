const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const path = require('path');
const [,, dir, out, warpJson] = process.argv;
const W = JSON.parse(warpJson);
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  await p.goto('file://' + path.join(dir, process.env.REEL || 'reel.html'));
  await p.evaluate(() => document.fonts.ready);
  // The classes reel embeds a video; wait for it when present.
  await p.waitForFunction(() => { const v = document.getElementById('vid'); return !v || v.readyState >= 2; }, null, { timeout: 15000 });
  await p.evaluate(() => Promise.all([...document.images].map(i => i.complete ? 0 : new Promise(r => i.onload = r))));
  await p.evaluate(w => { window.WARP = w; }, W);
  const fps = 30, total = W[W.length - 1][0];
  const n = Math.round(total * fps);
  for (let i = 0; i < n; i++) {
    await p.evaluate(t => window.render(t), i / fps);
    await p.screenshot({ path: `${out}/${String(i).padStart(5, '0')}.jpg`, type: 'jpeg', quality: 92 });
  }
  await b.close();
})();
