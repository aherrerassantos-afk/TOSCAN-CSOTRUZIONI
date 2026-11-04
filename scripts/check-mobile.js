#!/usr/bin/env node
/**
 * REGOLA BASE PERMANENTE — IL DESIGN NON SI TAGLIA MAI
 * Comando: npm run check:mobile
 *
 * Dimensioni obbligatorie:
 * - 320 x 568
 * - 360 x 800
 * - 390 x 844
 * - 430 x 932
 * - 768 x 1024
 * - 844 x 390 (telefono orizzontale)
 *
 * Motori obbligatori:
 * - Chromium con profilo telefono Android
 * - WebKit con profilo iPhone
 *
 * Il test fallisce se:
 * 1. document.documentElement.scrollWidth > document.documentElement.clientWidth (o se html/body usano overflow-x: hidden/clip).
 * 2. Un elemento visibile ha left < 0 oppure right > larghezza dello schermo, salvo contenuti dentro uno scroller intenzionale.
 * 3. Hamburger, logo o bottoni principali non sono interamente visibili (o hamburger < 48x48px).
 * 4. Un testo o controllo risulta tagliato dal contenitore.
 * 5. Un elemento cliccabile è coperto da un altro.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium, webkit, devices } = require('playwright');

const ROOT_DIR = path.resolve(__dirname, '..');

const VIEWPORTS = [
  { width: 320, height: 568, label: '320x568' },
  { width: 360, height: 800, label: '360x800' },
  { width: 390, height: 844, label: '390x844' },
  { width: 430, height: 932, label: '430x932' },
  { width: 768, height: 1024, label: '768x1024' },
  { width: 844, height: 390, label: '844x390' }
];

// Tutte le 26 pagine pubbliche e interne (IT + EN) + i 5 ruoli interni + i livelli della Cipolla
const ROUTES_ALL = [
  { url: '/index.html', name: 'index-it', fullMatrix: true, hasMenu: true },
  { url: '/tuscany-renovation-contractor.html', name: 'index-en', fullMatrix: true, hasMenu: true },
  { url: '/tuscany-hospitality-investment-general-contractor.html', name: 'hospitality-en', fullMatrix: true },
  { url: '/blog.html', name: 'blog-it', fullMatrix: true },
  { url: '/preventivo-tipo.html', name: 'preventivo-tipo', fullMatrix: true },
  { url: '/data-room.html', name: 'data-room', fullMatrix: true },
  { url: '/foglio-lavori.html', name: 'foglio-lavori', fullMatrix: true, hasModal: true },
  { url: '/villa-claudia.html', name: 'villa-claudia', fullMatrix: true },
  { url: '/partner-architetti-agenzie-property-manager-toscana.html', name: 'partner-b2b', fullMatrix: true },
  { url: '/styleguide.html', name: 'styleguide', fullMatrix: true },
  { url: '/kit-commerciale.html?role=dir', name: 'kit-role-dir', fullMatrix: true },
  { url: '/kit-commerciale.html?role=sales', name: 'kit-role-sales', fullMatrix: true },
  { url: '/kit-commerciale.html?role=tech', name: 'kit-role-tech', fullMatrix: true },
  { url: '/kit-commerciale.html?role=admin', name: 'kit-role-admin', fullMatrix: true },
  { url: '/kit-commerciale.html?role=hosp', name: 'kit-role-hosp', fullMatrix: true },
  { url: '/stato-cantiere.html', name: 'cantiere-L1', fullMatrix: true, hasCipolla: true },
  { url: '/affitti-brevi-toscana.html', name: 'seo-affitti-brevi', fullMatrix: true },
  { url: '/agriturismo-resort-arezzo-maremma-grosseto.html', name: 'seo-arezzo-maremma', fullMatrix: true },
  { url: '/agriturismo-wine-resort-siena-val-dorcia.html', name: 'seo-siena-valdorcia', fullMatrix: true },
  { url: '/arredo-contract-ffe-domotica-hotel-short-term-toscana.html', name: 'seo-arredo-ffe', fullMatrix: true },
  { url: '/bonus-ristrutturazione-2026.html', name: 'seo-bonus-2026', fullMatrix: true },
  { url: '/cambio-destinazione-uso-hotel-short-term-toscana.html', name: 'seo-cambio-uso', fullMatrix: true },
  { url: '/costruzione-hotel-student-housing-toscana.html', name: 'seo-costruzione-hotel', fullMatrix: true },
  { url: '/crowdfunding-immobiliare-chiuso-unico-investitore-toscana.html', name: 'seo-operazione-privata', fullMatrix: true },
  { url: '/general-contractor-firenze.html', name: 'seo-gc-firenze', fullMatrix: true },
  { url: '/hotel-ville-short-term-lucca-versilia.html', name: 'seo-lucca-versilia', fullMatrix: true },
  { url: '/ristrutturazione-casale-toscano.html', name: 'seo-casale-toscano', fullMatrix: true },
  { url: '/ristrutturazione-toscana.html', name: 'seo-ristrutturazione-toscana', fullMatrix: true },
  { url: '/student-housing-pbsa-firenze-pisa.html', name: 'seo-student-housing', fullMatrix: true },
  { url: '/sviluppo-immobili-short-medium-term-firenze.html', name: 'seo-sviluppo-firenze', fullMatrix: true }
];

function startStaticServer(rootDir) {
  const mimeTypes = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.txt': 'text/plain; charset=utf-8'
  };

  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      try {
        const cleanUrl = decodeURIComponent((req.url || '/').split('?')[0]);
        let relPath = cleanUrl;
        if (relPath === '/' || relPath.endsWith('/')) relPath += 'index.html';
        const fullPath = path.join(rootDir, relPath);
        if (!fullPath.startsWith(rootDir)) {
          res.writeHead(403);
          res.end('Forbidden');
          return;
        }
        if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) {
          const ext = path.extname(fullPath).toLowerCase();
          res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
          fs.createReadStream(fullPath).pipe(res);
        } else if (fs.existsSync(fullPath + '.html')) {
          res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
          fs.createReadStream(fullPath + '.html').pipe(res);
        } else {
          res.writeHead(404);
          res.end('Not found');
        }
      } catch (err) {
        res.writeHead(500);
        res.end(String(err));
      }
    });
    server.listen(0, '127.0.0.1', () => {
      resolve({ server, port: server.address().port });
    });
    server.on('error', reject);
  });
}

function runStaticCodeAudit() {
  const htmlFiles = fs.readdirSync(ROOT_DIR).filter(f => f.endsWith('.html'));
  const cssFiles = fs.readdirSync(ROOT_DIR).filter(f => f.endsWith('.css'));
  const violations = [];

  for (const file of htmlFiles) {
    const raw = fs.readFileSync(path.join(ROOT_DIR, file), 'utf8');
    // 1. Meta viewport check
    const vpMatch = raw.match(/<meta\s+name=["']viewport["']\s+content=["']([^"']+)["']/i);
    if (!vpMatch) {
      violations.push(`[Static Viewport] ${file}: manca <meta name="viewport">`);
    } else {
      const vp = vpMatch[1];
      if (!vp.includes('viewport-fit=cover')) {
        violations.push(`[Static Viewport] ${file}: manca viewport-fit=cover in "${vp}"`);
      }
      if (/user-scalable\s*=\s*no/i.test(vp) || /maximum-scale\s*=\s*1(\.0)?\b/i.test(vp)) {
        violations.push(`[Static Viewport] ${file}: zoom bloccato (${vp})`);
      }
    }
    // 2. Check 100vw usage in style blocks
    const styleBlocks = raw.match(/<style[\s\S]*?<\/style>/gi) || [];
    for (const sb of styleBlocks) {
      if (/\b100vw\b/.test(sb)) {
        violations.push(`[Static CSS 100vw] ${file}: trovato uso vietato di 100vw nel blocco <style>`);
      }
      if (/html\s*,\s*body\s*\{[^}]*overflow(-x)?\s*:\s*(hidden|clip)/i.test(sb) ||
          /body\s*\{[^}]*overflow-x\s*:\s*(hidden|clip)/i.test(sb) ||
          /html\s*\{[^}]*overflow-x\s*:\s*(hidden|clip)/i.test(sb)) {
        violations.push(`[Static CSS overflow-x] ${file}: trovato overflow-x: hidden/clip su html o body`);
      }
    }
  }

  for (const file of cssFiles) {
    const raw = fs.readFileSync(path.join(ROOT_DIR, file), 'utf8');
    if (/\b100vw\b/.test(raw)) {
      violations.push(`[Static CSS 100vw] ${file}: trovato uso vietato di 100vw`);
    }
    if (/html\s*,\s*body\s*\{[^}]*overflow(-x)?\s*:\s*(hidden|clip)/i.test(raw) ||
        /body\s*\{[^}]*overflow-x\s*:\s*(hidden|clip)/i.test(raw) ||
        /html\s*\{[^}]*overflow-x\s*:\s*(hidden|clip)/i.test(raw)) {
      violations.push(`[Static CSS overflow-x] ${file}: trovato overflow-x: hidden/clip su html o body`);
    }
  }

  return violations;
}

async function evaluateViewportState(page, stateLabel) {
  return page.evaluate((sLabel) => {
    const errs = [];
    const vw = document.documentElement.clientWidth;
    const vh = document.documentElement.clientHeight;

    const htmlStyle = window.getComputedStyle(document.documentElement);
    const bodyStyle = window.getComputedStyle(document.body);
    if (htmlStyle.overflowX === 'hidden' || htmlStyle.overflowX === 'clip') {
      errs.push(`[Regola Vietata] html ha overflow-x: ${htmlStyle.overflowX}`);
    }
    if (bodyStyle.overflowX === 'hidden' || bodyStyle.overflowX === 'clip') {
      errs.push(`[Regola Vietata] body ha overflow-x: ${bodyStyle.overflowX}`);
    }
    // Force visible overflow on html and body so scrollWidth exposes any real horizontal overflow
    document.documentElement.style.overflowX = 'visible';
    document.body.style.overflowX = 'visible';

    function isVisible(el) {
      if (!el || !(el instanceof Element)) return false;
      const st = window.getComputedStyle(el);
      if (st.display === 'none' || st.visibility === 'hidden' || parseFloat(st.opacity) === 0) return false;
      if (el.closest('[hidden], [aria-hidden="true"]:not(.mobile-drawer.is-open)')) return false;
      const r = el.getBoundingClientRect();
      return r.width > 0.5 && r.height > 0.5;
    }

    function isInsideIntentionalHorizontalScroller(el) {
      let cur = el.parentElement;
      while (cur && cur !== document.body && cur !== document.documentElement) {
        const st = window.getComputedStyle(cur);
        if (st.overflowX === 'auto' || st.overflowX === 'scroll') {
          return true;
        }
        cur = cur.parentElement;
      }
      return false;
    }

    function describeEl(el) {
      const tag = el.tagName.toLowerCase();
      const id = el.id ? `#${el.id}` : '';
      const cls = el.className && typeof el.className === 'string'
        ? '.' + el.className.trim().split(/\s+/).slice(0, 2).join('.')
        : '';
      const txt = (el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 28);
      return `<${tag}${id}${cls}${txt ? ` "${txt}"` : ''}>`;
    }

    // 1. document.documentElement.scrollWidth > clientWidth
    const scrollW = document.documentElement.scrollWidth;
    if (scrollW > vw + 1) {
      errs.push(`[#1 ScrollWidth > ClientWidth] (${sLabel}) scrollWidth=${scrollW}px > clientWidth=${vw}px`);
    }

    // 2. Un elemento visibile ha left < 0 oppure right > larghezza dello schermo, salvo scroller intenzionale
    const allElements = Array.from(document.querySelectorAll('body *'));
    for (const el of allElements) {
      if (!isVisible(el)) continue;
      if (isInsideIntentionalHorizontalScroller(el)) continue;
      // Ignore decorative SVG background watermarks inside an overflow:hidden section
      if (el.closest('[aria-hidden="true"]') && !el.closest('.mobile-drawer')) continue;

      const r = el.getBoundingClientRect();
      if (r.left < -1.5 || r.right > vw + 1.5) {
        errs.push(`[#2 Elemento Fuori Schermo] (${sLabel}) ${describeEl(el)} left=${Math.round(r.left)}px right=${Math.round(r.right)}px (viewport=${vw}px)`);
      }
    }

    // 3. Hamburger, logo o bottoni principali non sono interamente visibili
    const criticalElements = Array.from(document.querySelectorAll(
      '.site-header__brand, .brand, .nav-logo, .site-header__menu-btn, #menu-toggle, .menu-toggle, #menuToggle, .nav-toggle, .btn--primary, .btn-primary, .mobile-sticky-bar .btn'
    )).filter(isVisible);

    for (const el of criticalElements) {
      const r = el.getBoundingClientRect();
      if (r.left < -1 || r.right > vw + 1 || r.width < 20 || r.height < 20) {
        errs.push(`[#3 Controllo Principale Non Visibile] (${sLabel}) ${describeEl(el)} rect=(${Math.round(r.left)}, ${Math.round(r.top)}, ${Math.round(r.width)}x${Math.round(r.height)}) su ${vw}x${vh}`);
      }
      if (el.matches('.site-header__menu-btn, #menu-toggle, .menu-toggle, #menuToggle, .nav-toggle')) {
        if (r.width < 47 || r.height < 47) {
          errs.push(`[#3 Hamburger < 48x48px] (${sLabel}) ${describeEl(el)} misura ${Math.round(r.width)}x${Math.round(r.height)}px`);
        }
      }
    }

    // 4. Un testo o controllo risulta tagliato dal contenitore
    const textAndControlEls = Array.from(document.querySelectorAll(
      'h1, h2, h3, h4, p, a, button, .btn, .chip, input, select, textarea, label, .site-header__brand, .brand'
    )).filter(isVisible);

    for (const el of textAndControlEls) {
      if (isInsideIntentionalHorizontalScroller(el)) continue;
      const st = window.getComputedStyle(el);
      if ((st.overflowX === 'hidden' || st.overflowX === 'clip') && el.scrollWidth > el.clientWidth + 3) {
        if (st.textOverflow !== 'ellipsis') {
          errs.push(`[#4 Testo/Controllo Tagliato] (${sLabel}) ${describeEl(el)} scrollWidth=${el.scrollWidth}px > clientWidth=${el.clientWidth}px`);
        }
      }
    }

    // 5. Un elemento cliccabile è coperto da un altro (collisione nel header, barra fissa o controlli visibili)
    const headerInteractive = Array.from(document.querySelectorAll(
      'header a, header button, .site-header a, .site-header button, .onion-header a, .onion-header button, .topbar a, .topbar button'
    )).filter(isVisible);

    for (let i = 0; i < headerInteractive.length; i++) {
      for (let j = i + 1; j < headerInteractive.length; j++) {
        const a = headerInteractive[i];
        const b = headerInteractive[j];
        if (a.contains(b) || b.contains(a)) continue;
        const ra = a.getBoundingClientRect();
        const rb = b.getBoundingClientRect();
        const overlapX = Math.min(ra.right, rb.right) - Math.max(ra.left, rb.left);
        const overlapY = Math.min(ra.bottom, rb.bottom) - Math.max(ra.top, rb.top);
        if (overlapX > 2 && overlapY > 2) {
          errs.push(`[#5 Elementi Cliccabili Sovrapposti] (${sLabel}) ${describeEl(a)} copre/interseca ${describeEl(b)}`);
        }
      }
    }

    // Hit-test al centro dei controlli visibili nell'header e nella viewport corrente
    for (const el of headerInteractive) {
      const r = el.getBoundingClientRect();
      if (r.top >= 0 && r.bottom <= vh && r.left >= 0 && r.right <= vw) {
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const topEl = document.elementFromPoint(cx, cy);
        if (topEl && !el.contains(topEl) && !topEl.contains(el)) {
          errs.push(`[#5 Elemento Cliccabile Coperto] (${sLabel}) ${describeEl(el)} è coperto da ${describeEl(topEl)} a (${Math.round(cx)}, ${Math.round(cy)})`);
        }
      }
    }

    return errs.slice(0, 15);
  }, stateLabel);
}

async function runMobileChecks() {
  console.log('=== AVVIO CONTROLLO: IL DESIGN NON SI TAGLIA MAI (Playwright Chromium Android + WebKit iPhone) ===');

  const staticViolations = runStaticCodeAudit();
  console.log(`[Fase 1 - Audit Statico] ${staticViolations.length} violazioni statiche rilevate.`);

  const { server, port } = await startStaticServer(ROOT_DIR);
  const baseUrl = `http://127.0.0.1:${port}`;
  const allErrors = [...staticViolations];

  const engines = [
    {
      name: 'Chromium-Android',
      launcher: chromium,
      launchOpts: { headless: true },
      deviceBase: devices['Pixel 7']
    },
    {
      name: 'WebKit-iPhone',
      launcher: webkit,
      launchOpts: { headless: true },
      deviceBase: devices['iPhone 14']
    }
  ];

  let totalChecks = 0;

  try {
    for (const eng of engines) {
      let browser;
      try {
        browser = await eng.launcher.launch(eng.launchOpts);
      } catch (e) {
        // Fallback channel if default chromium binary is not installed
        browser = await eng.launcher.launch({ ...eng.launchOpts, channel: 'chrome' });
      }

      try {
        for (const vp of VIEWPORTS) {
          const context = await browser.newContext({
            ...eng.deviceBase,
            viewport: { width: vp.width, height: vp.height },
            isMobile: vp.width < 768
          });
          // Evita attesa di font/immagini esterne per velocizzare il test locale e mantenerlo deterministico
          await context.route('https://**', r => r.abort());
          const page = await context.newPage();

          for (const route of ROUTES_ALL) {
            const shouldRun = route.fullMatrix || vp.label === '320x568' || vp.label === '390x844' || vp.label === '844x390';
            if (!shouldRun) continue;

            const fullUrl = `${baseUrl}${route.url}`;
            const tag = `[${eng.name} | ${route.name} | ${vp.label}]`;

            await page.goto(fullUrl, { waitUntil: 'domcontentloaded' });
            totalChecks++;

            // A. Stato base (menu e finestre chiusi)
            const closedErrs = await evaluateViewportState(page, 'chiuso');
            for (const e of closedErrs) allErrors.push(`${tag} ${e}`);

            // B. Se la pagina ha un menu mobile hamburger, apri il menu e verifica che non tagli nulla e scorra
            if (route.hasMenu && vp.width <= 1024) {
              const btn = page.locator('#menu-toggle, .menu-toggle, #menuToggle, .site-header__menu-btn, .nav-toggle').first();
              if (await btn.isVisible()) {
                try {
                  await btn.click({ timeout: 1500 });
                  await page.waitForTimeout(40);
                  const openErrs = await evaluateViewportState(page, 'menu-aperto');
                  for (const e of openErrs) allErrors.push(`${tag} ${e}`);

                  const menuLinksOk = await page.evaluate(() => {
                    const drawer = document.querySelector('#mobile-menu, .mobile-menu, #mobileDrawer, .mobile-drawer');
                    if (!drawer) return true;
                    const r = drawer.getBoundingClientRect();
                    return r.left >= -1 && r.right <= document.documentElement.clientWidth + 1;
                  });
                  if (!menuLinksOk) {
                    allErrors.push(`${tag} [#3 Menu Aperto Fuori Schermo] Il menu mobile aperto esce dai bordi dello schermo`);
                  }
                  await btn.click({ timeout: 1500 });
                } catch (clickErr) {
                  allErrors.push(`${tag} [#5 Hamburger Non Cliccabile] ${String(clickErr.message || clickErr).split('\n')[0]}`);
                }
              }
            }

            // C. Se la pagina ha i livelli della Cipolla (stato-cantiere.html), controlla anche Livello 2, 3, 4
            if (route.hasCipolla && (vp.label === '320x568' || vp.label === '844x390')) {
              for (const hash of ['#/area-cantieri', '#/dettaglio-cantiere', '#/azione-prenota']) {
                await page.goto(`${fullUrl}${hash}`, { waitUntil: 'domcontentloaded' });
                const cipErrs = await evaluateViewportState(page, `cipolla-${hash}`);
                for (const e of cipErrs) allErrors.push(`${tag} ${e}`);
              }
            }
          }

          await context.close();
        }
      } finally {
        await browser.close();
      }
    }
  } finally {
    server.close();
  }

  try {
    fs.writeFileSync('/Users/julianherrera/.gemini/antigravity/brain/ffe91212-3fe3-435b-9700-e8398992fcee/scratch/mobile_errors.json', JSON.stringify(allErrors, null, 2));
  } catch (_) {}

  console.log(`\nControlli completati: ${totalChecks} combinazioni (Pagine x Dimensioni x Motori).`);
  if (allErrors.length > 0) {
    console.error(`\nTEST FALLITO CON ${allErrors.length} PROBLEMI RILEVATI:`);
    for (const err of allErrors.slice(0, 120)) {
      console.error('  -', err);
    }
    if (allErrors.length > 120) {
      console.error(`  ... e altri ${allErrors.length - 120} problemi.`);
    }
    process.exit(1);
  } else {
    console.log('\nTUTTI I CONTROLLI SUPERATI CON 0 ERRORI SU CHROMIUM (ANDROID) E WEBKIT (IPHONE)!');
    process.exit(0);
  }
}

runMobileChecks().catch(err => {
  console.error('Errore fatale durante check:mobile:', err);
  process.exit(1);
});
