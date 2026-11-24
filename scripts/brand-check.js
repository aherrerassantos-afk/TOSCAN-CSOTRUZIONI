#!/usr/bin/env node
/**
 * TOSCAN COSTRUZIONI · BLUEARROYO S.R.L.
 * brand:check — Verifica integrita brand, Regola Zero, Flow 2026, Security, SEO e Red Team Static Audit
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const errors = [];
let checksRun = 0;

function pass(label) {
  checksRun++;
  return label;
}

function fail(scope, msg) {
  errors.push(`[${scope}] ${msg}`);
}

const htmlFiles = fs.readdirSync(ROOT).filter(f => f.endsWith('.html')).sort();
const toscanHtmlFiles = htmlFiles.filter(f => f !== 'crm.html');
const cssFiles = fs.readdirSync(ROOT).filter(f => f.endsWith('.css')).sort();

// 1. Verifica HTML Toscan (Brand, Regola Zero, Flow 2026, Sicurezza DOM, Assets)
for (const file of toscanHtmlFiles) {
  const full = path.join(ROOT, file);
  const raw = fs.readFileSync(full, 'utf8');
  checksRun++;

  // Title & Viewport
  if (!/<title>[^<]+<\/title>/i.test(raw)) fail(file, 'Tag <title> mancante o vuoto');
  const vpMatch = raw.match(/<meta\s+name=["']viewport["']\s+content=["']([^"']+)["']/i);
  if (!vpMatch || !vpMatch[1].includes('viewport-fit=cover')) {
    fail(file, 'Meta viewport privo di viewport-fit=cover');
  }
  if (vpMatch && (/user-scalable\s*=\s*no/i.test(vpMatch[1]) || /maximum-scale\s*=\s*1(\.0)?\b/i.test(vpMatch[1]))) {
    fail(file, 'Zoom bloccato nel meta viewport');
  }

  // Regola Zero: zero placeholder [DA CONFERMARE] o da confermare
  if (/da confermare/i.test(raw)) {
    fail(file, 'Trovato segnaposto "da confermare" non risolto');
  }

  // Flow 2026: zero emoji Unicode
  const emojiMatches = raw.match(/[\u{1F300}-\u{1FAFF}\u2600-\u27BF]/gu);
  if (emojiMatches) {
    fail(file, `Trovate emoji Unicode vietate (${emojiMatches.slice(0, 5).join(' ')})`);
  }

  // Flow 2026: zero raw <select>
  if (/<select[\s>]/i.test(raw)) {
    fail(file, 'Trovato elemento <select> grezzo vietato da Flow 2026');
  }

  // Sicurezza DOM: zero innerHTML / eval / document.write / new Function
  if (/\.innerHTML\b|\.outerHTML\b|insertAdjacentHTML|document\.write\s*\(|\beval\s*\(|new\s+Function\s*\(/i.test(raw)) {
    fail(file, 'Trovato sink DOM non sicuro (innerHTML/eval/document.write)');
  }

  // Brand Palette: zero blu Tailwind / elettrico hardcoded e zero 100vw / overflow-x hidden su html/body
  if (/bg-blue-|text-blue-|#2563eb|#3b82f6|#1d4ed8/i.test(raw)) {
    fail(file, 'Trovato colore blu elettrico fuori palette');
  }
  const styleBlocks = raw.match(/<style[\s\S]*?<\/style>/gi) || [];
  for (const sb of styleBlocks) {
    if (/\b100vw\b/.test(sb)) fail(file, 'Uso vietato di 100vw nei blocchi CSS');
    if (/(?:html|body)[^{]*\{[^}]*overflow(?:-x)?\s*:\s*(?:hidden|clip)/i.test(sb)) {
      fail(file, 'Uso vietato di overflow/overflow-x hidden|clip su html o body');
    }
  }

  // Coerenza regole aziendali verificate: penale 150 €/gg (mai 250), biancheria 90°C (mai 60°C), P.IVA reale
  if (/60\s*°\s*C/i.test(raw)) {
    fail(file, 'Trovata temperatura sanificazione obsoleta 60°C (ufficiale: 90°C)');
  }
  if (/(?:penal[ei]|ritard|delay)[^.\n<]{0,60}(?:250\s*€|€\s*250)|250\s*€\/g|€\s*250\/day/i.test(raw)) {
    fail(file, 'Trovata penale obsoleta 250 € (ufficiale Task #34: 150 €/giorno max 5%)');
  }
  if (/IT06TOSCAN2005FI/i.test(raw)) {
    fail(file, 'Trovata P.IVA storica non valida IT06TOSCAN2005FI');
  }

  // Controllo immagini statiche referenziate (src="assets/..." / href="assets/...")
  const assetRefs = [...raw.matchAll(/(?:src|href)=["']\/?(assets\/[^"'?#]+)["']/gi)].map(m => m[1]);
  for (const rel of assetRefs) {
    const abs = path.join(ROOT, rel);
    if (!fs.existsSync(abs) || fs.statSync(abs).size === 0) {
      fail(file, `Asset mancante o vuoto su disco: ${rel}`);
    }
  }
}

// Verifica immagini dinamiche referenziate nel JS di index.html
const indexRaw = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
checksRun++;
for (const imgName of ['villa-firenze.jpg', 'casale-pietra.jpg', 'piano-nobile.jpg', 'interno-toscano.jpg', 'esploso-costruttivo.jpg', 'tavola-rilievo.jpg', 'artigiano.jpg']) {
  const abs = path.join(ROOT, 'assets', imgName);
  if (!fs.existsSync(abs) || fs.statSync(abs).size === 0) {
    fail('assets', `Immagine core mancante: assets/${imgName}`);
  }
}
if (!indexRaw.includes('07480210488') || !indexRaw.includes('Via Matteo Palmieri 20/R')) {
  fail('index.html', 'Dati societari ufficiali BLUEARROYO S.R.L. assenti');
}

// 2. Verifica crm.html separatamente (parita CRM PBA preservata, ma controlli noindex e zero segreti privati)
const crmPath = path.join(ROOT, 'crm.html');
if (fs.existsSync(crmPath)) {
  checksRun++;
  const crmRaw = fs.readFileSync(crmPath, 'utf8');
  if (!/noindex,\s*nofollow/i.test(crmRaw)) {
    fail('crm.html', 'crm.html deve mantenere meta robots noindex, nofollow');
  }
  if (/service_role|BEGIN [A-Z ]*PRIVATE KEY/i.test(crmRaw)) {
    fail('crm.html', 'Trovata chiave privata/service_role vietata in crm.html');
  }
  for (const rel of ['src/brand/tokens.css', 'src/brand/logo-drop.svg', 'src/brand/brand-components.js']) {
    if (!fs.existsSync(path.join(ROOT, rel))) {
      fail('crm.html', `Dipendenza CRM mancante su disco: ${rel}`);
    }
  }
}

// 3. Verifica CSS e JS statici
for (const css of cssFiles) {
  checksRun++;
  const raw = fs.readFileSync(path.join(ROOT, css), 'utf8');
  if (/\b100vw\b/.test(raw)) fail(css, 'Uso vietato di 100vw');
  if (/(?:html|body)[^{]*\{[^}]*overflow(?:-x)?\s*:\s*(?:hidden|clip)/i.test(raw)) {
    fail(css, 'Uso vietato di overflow/overflow-x hidden|clip su html o body');
  }
  if (/bg-blue-|#2563eb|#3b82f6/i.test(raw)) fail(css, 'Colore fuori palette trovato');
}

const appJs = fs.readFileSync(path.join(ROOT, 'app.js'), 'utf8');
checksRun++;
if (/\.innerHTML\b|\.outerHTML\b|\beval\s*\(/.test(appJs)) fail('app.js', 'Uso non sicuro di innerHTML/eval');
if (/[\u{1F300}-\u{1FAFF}\u2600-\u27BF]/gu.test(appJs)) fail('app.js', 'Trovate emoji Unicode in app.js');

const dbJsonRaw = fs.readFileSync(path.join(ROOT, 'database/db.json'), 'utf8');
checksRun++;
try {
  const dbObj = JSON.parse(dbJsonRaw);
  if (dbObj.azienda?.partita_iva !== '07480210488') fail('database/db.json', 'P.IVA non allineata a 07480210488');
  if (!Array.isArray(dbObj.progetti) || dbObj.progetti.length !== 0 || !Array.isArray(dbObj.lead) || dbObj.lead.length !== 0) {
    fail('database/db.json', 'database/db.json deve essere privo di dati fittizi (progetti/lead vuoti)');
  }
} catch (e) {
  fail('database/db.json', `JSON non valido: ${e.message}`);
}

// 4. Verifica vercel.json (Security Headers, Rewrites, Noindex preview)
const vercelPath = path.join(ROOT, 'vercel.json');
checksRun++;
try {
  const vc = JSON.parse(fs.readFileSync(vercelPath, 'utf8'));
  if (vc.routes) fail('vercel.json', 'Usa "rewrites" + "headers" senza "routes" legacy');
  const rewrites = vc.rewrites || [];
  for (const rw of rewrites) {
    const dest = (rw.destination || '').replace(/^\//, '');
    if (!fs.existsSync(path.join(ROOT, dest))) {
      fail('vercel.json', `Rewrite ${rw.source} punta a file inesistente: ${dest}`);
    }
  }
  const allHeaders = (vc.headers || []).flatMap(h => h.headers || []).map(x => x.key.toLowerCase());
  for (const reqHdr of ['content-security-policy', 'x-frame-options', 'x-content-type-options', 'referrer-policy', 'permissions-policy']) {
    if (!allHeaders.includes(reqHdr)) fail('vercel.json', `Header di sicurezza mancante: ${reqHdr}`);
  }
  const hasVercelNoindex = (vc.headers || []).some(rule =>
    (rule.has || []).some(cond => cond.type === 'host' && String(cond.value || '').includes('vercel\\.app')) &&
    (rule.headers || []).some(h => h.key.toLowerCase() === 'x-robots-tag' && h.value.includes('noindex'))
  );
  if (!hasVercelNoindex) fail('vercel.json', 'Manca regola X-Robots-Tag: noindex, nofollow sui domini .vercel.app');
} catch (e) {
  fail('vercel.json', `JSON non valido: ${e.message}`);
}

// 5. Verifica SEO (robots.txt, sitemap.xml, llms.txt)
checksRun++;
const robotsTxt = fs.readFileSync(path.join(ROOT, 'robots.txt'), 'utf8');
if (!robotsTxt.includes('Sitemap: https://toscancostruzioni.it/sitemap.xml')) {
  fail('robots.txt', 'Direttiva Sitemap mancante');
}
const sitemapXml = fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8');
const locs = [...sitemapXml.matchAll(/<loc>(https:\/\/toscancostruzioni\.it\/([^<]*))<\/loc>/g)];
if (locs.length === 0) fail('sitemap.xml', 'Nessun <loc> trovato in sitemap.xml');
const vcRewrites = JSON.parse(fs.readFileSync(vercelPath, 'utf8')).rewrites || [];
const rewriteSet = new Set(vcRewrites.map(r => r.source.replace(/^\//, '')));
for (const [, , rel] of locs) {
  const clean = rel.trim();
  if (!clean) continue;
  const existsDirect = fs.existsSync(path.join(ROOT, clean));
  const existsRewrite = rewriteSet.has(clean) || fs.existsSync(path.join(ROOT, clean + '.html'));
  if (!existsDirect && !existsRewrite) {
    fail('sitemap.xml', `URL in sitemap non corrisponde a un file/rewrite valido: /${clean}`);
  }
}

const llmsTxt = fs.readFileSync(path.join(ROOT, 'llms.txt'), 'utf8');
if (/250\s*€\/giorno|60\s*°\s*C|IT06TOSCAN2005FI|Itassitance/i.test(llmsTxt)) {
  fail('llms.txt', 'Trovati valori obsoleti o refusi in llms.txt');
}

// 6. Red Team Static Secret Scan (su tutti i file serviti)
const secretScanExts = new Set(['.html', '.js', '.json', '.css', '.txt', '.xml']);
const secretPatterns = [
  /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,
  /\bsbp_[a-f0-9]{20,}\b/i,
  /\bsk-[A-Za-z0-9_-]{20,}\b/,
  /\bghp_[A-Za-z0-9]{20,}\b/,
  /service_role/i
];
for (const f of fs.readdirSync(ROOT)) {
  const full = path.join(ROOT, f);
  if (!fs.statSync(full).isFile()) continue;
  if (!secretScanExts.has(path.extname(f).toLowerCase())) continue;
  checksRun++;
  const txt = fs.readFileSync(full, 'utf8');
  for (const pat of secretPatterns) {
    if (pat.test(txt)) {
      fail('SECRET-SCAN', `Possibile segreto/chiave sensibile rilevata in ${f} (${pat})`);
    }
  }
}

console.log(`=== brand:check Toscan Costruzioni ===`);
console.log(`Controlli statici eseguiti: ${checksRun}`);
if (errors.length > 0) {
  console.error(`\nFALLITO CON ${errors.length} ERRORI:`);
  for (const err of errors) console.error(' -', err);
  process.exit(1);
}
console.log('ESITO: 0 ERRORI (100% PASS)');
process.exit(0);
