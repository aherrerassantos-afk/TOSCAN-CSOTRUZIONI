/**
 * Web Components & Helpers per <brand-logo> (src/brand/brand-components.js)
 * + Sincronizzazione lead/preventivi esclusivamente verso il CRM Commerciale (/api/crm-prospects)
 * + Helper `window.forwardToHolding` tramite proxy server-side `/api/holding-forward` (R0.3 / D-15).
 */
(function () {
  var BRAND_DROP_PATH = '/src/brand/logo-drop.svg';
  var BRAND_NAME_FULL = 'Palazzo by Blue Arroyo';
  var BRAND_NAME_MOBILE = 'Blue Arroyo';
  var BRAND_TAGLINE = 'Turnover Case Vacanze';

  var FRONT_DESK = {
    display: '344 422 6310',
    intl: '+39 344 422 6310',
    wa: '393444226310',
    waUrl: 'https://wa.me/393444226310',
  };

  var KEY_CRM_PROSPECTS = 'pba_crm_prospects_v2026';

  function buildBrandLogoInnerHtml(variant, size, showTagline, href) {
    var v = variant === 'dark' ? 'dark' : 'light';
    var s = size === 'sm' || size === 'lg' ? size : 'md';
    var px = s === 'sm' ? 28 : s === 'lg' ? 40 : 34;
    var taglineHtml = showTagline
      ? '<span class="pba-brand-logo__tagline brand__sub">' + BRAND_TAGLINE + '</span>'
      : '';
    var inner =
      '<img src="' +
      BRAND_DROP_PATH +
      '" alt="Goccia Palazzo by Blue Arroyo" class="pba-brand-logo__drop brand__drop" width="' +
      px +
      '" height="' +
      px +
      '">' +
      '<div class="pba-brand-logo__text brand__text">' +
      '<span class="pba-brand-logo__name brand__name">' +
      '<span class="ba-d">' +
      BRAND_NAME_FULL +
      '</span>' +
      '<span class="ba-m">' +
      BRAND_NAME_MOBILE +
      '</span>' +
      '</span>' +
      taglineHtml +
      '</div>';

    var cls = 'pba-brand-logo pba-brand-logo--' + v + ' pba-brand-logo--' + s + ' brand';
    if (href) {
      return '<a href="' + href + '" class="' + cls + '" aria-label="' + BRAND_NAME_FULL + '">' + inner + '</a>';
    }
    return '<span class="' + cls + '">' + inner + '</span>';
  }

  if (typeof window !== 'undefined' && window.customElements && !window.customElements.get('brand-logo')) {
    class PbaBrandLogoElement extends HTMLElement {
      static get observedAttributes() {
        return ['variant', 'size', 'show-tagline', 'href'];
      }
      connectedCallback() {
        this.render();
      }
      attributeChangedCallback() {
        this.render();
      }
      render() {
        var variant = this.getAttribute('variant') || 'light';
        var size = this.getAttribute('size') || 'md';
        var showTagline =
          this.hasAttribute('show-tagline') && this.getAttribute('show-tagline') !== 'false';
        var href = this.getAttribute('href') || '';
        this.innerHTML = buildBrandLogoInnerHtml(variant, size, showTagline, href);
      }
    }
    window.customElements.define('brand-logo', PbaBrandLogoElement);
  }

  function safeJsonParse(raw, fallback) {
    if (!raw) return fallback;
    try {
      var parsed = JSON.parse(raw);
      return parsed !== null && parsed !== undefined ? parsed : fallback;
    } catch (_) {
      return fallback;
    }
  }

  function getStoredAuthToken() {
    try {
      if (typeof sessionStorage !== 'undefined') {
        return (
          sessionStorage.getItem('palazzo_admin_token') ||
          sessionStorage.getItem('pba_auth_token') ||
          sessionStorage.getItem('pba_session_token') ||
          ''
        );
      }
    } catch (_) {}
    return '';
  }

  /**
   * Proxy client -> `/api/holding-forward` (R0.3 / D-15: zero chiamate dirette a porte locali e zero segreti nel browser).
   */
  async function forwardToHolding(path, payload, options) {
    var opts = options || {};
    var method = String(opts.method || (payload === undefined ? 'GET' : 'POST')).toUpperCase();
    var headers = { 'Content-Type': 'application/json' };
    var token = getStoredAuthToken();
    if (token) {
      headers.Authorization = 'Bearer ' + token;
    }
    if (method === 'GET') {
      var url = '/api/holding-forward?path=' + encodeURIComponent(path);
      return fetch(url, { method: 'GET', headers: headers });
    }
    return fetch('/api/holding-forward', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        path: path,
        method: method,
        payload: payload || {},
      }),
    });
  }

  /**
   * Invia un preventivo o richiesta web esclusivamente al CRM Commerciale (`/api/crm-prospects` + `pba_crm_prospects_v2026`).
   * Ordine #3 di Julian: nessun task CRM viene iniettato in HR o Planner Turni.
   */
  function submitPbaQuoteOrFormToCrmPlannerHr(payload) {
    payload = payload || {};
    var now = new Date();
    var nowIso = now.toISOString();
    var rand4 = String(Math.floor(1000 + Math.random() * 9000));
    var quoteCode = payload.quoteCode || 'PBA-' + now.getFullYear() + '-' + rand4;
    var prospectId =
      payload.prospectId || 'pba-prospect-' + Date.now() + '-' + Math.floor(Math.random() * 100);

    var unitType = payload.unitType || payload.propertyType || payload.ruolo || 'Bilocale';
    var units = Math.max(1, parseInt(payload.units || payload.proprieta || 1, 10) || 1);
    var zone = payload.zone || payload.citta || 'Centro Storico Firenze';
    var rawTurnPrice = Number(payload.pricePerTurnover || payload.price || 0);
    var tipoServizioP = payload.tipoServizio || 'entrambi';
    var pricePerTurnover = (typeof window !== 'undefined' && window.PbaPackMinimo && rawTurnPrice > 0)
      ? window.PbaPackMinimo.applicaMinimoPack({ tipoServizio: tipoServizioP, subtotaleEur: rawTurnPrice }).totaleEur
      : (rawTurnPrice > 0 ? rawTurnPrice : 59);
    var turnsPerMonth = Number(payload.turnsPerMonth || units * 6) || 6;
    var estimatedMonthly =
      Number(payload.estimatedMonthly || pricePerTurnover * turnsPerMonth) || pricePerTurnover * 6;

    var clientName =
      String(payload.clientName || payload.nome || payload.name || '').trim() ||
      'Prospect ' + unitType + ' · ' + zone.split('/')[0].trim();
    var agencyName = String(payload.agencyName || payload.azienda || payload.company || '').trim();
    var phone = String(payload.phone || payload.telefono || '').trim();
    var email = String(payload.email || '').trim();
    var source = payload.source || 'Preventivatore Web';
    var notes = String(payload.notes || payload.note || '').trim();
    var preferredDate = payload.preferredDate || nowIso.slice(0, 10);

    var record = {
      prospectId: prospectId,
      quoteCode: quoteCode,
      source: source,
      clientName: clientName,
      agencyName: agencyName,
      phone: phone,
      email: email,
      unitType: unitType,
      units: units,
      zone: zone,
      pricePerTurnover: pricePerTurnover,
      estimatedMonthly: estimatedMonthly,
      notes: notes,
      preferredDate: preferredDate,
      createdAt: nowIso,
      updatedAt: nowIso,
    };

    try {
      // Pulisce eventuali chiavi legacy di inbox HR/Planner rimosse con Ordine #3
      localStorage.removeItem('pba_crm_tasks_v2026');
      localStorage.removeItem('pba_planner_hr_leads_v2026');

      var prospects = safeJsonParse(localStorage.getItem(KEY_CRM_PROSPECTS), []);
      if (!Array.isArray(prospects)) prospects = [];

      var existingIdx = -1;
      for (var pi = 0; pi < prospects.length; pi++) {
        var p = prospects[pi];
        if (
          (email && p.email && p.email.toLowerCase() === email.toLowerCase()) ||
          (phone &&
            p.phone &&
            p.phone.replace(/\D/g, '') &&
            p.phone.replace(/\D/g, '') === phone.replace(/\D/g, ''))
        ) {
          existingIdx = pi;
          break;
        }
      }

      if (existingIdx !== -1) {
        var existing = prospects[existingIdx];
        existing.stage = 'PROPOSAL_SENT';
        existing.priority = 'HOT';
        existing.updatedAt = nowIso;
        existing.investigationNotes =
          (existing.investigationNotes || '') +
          (notes ? ' | ' + notes : ' | Aggiornamento preventivo ' + quoteCode);
        prospects.splice(existingIdx, 1);
        prospects.unshift(existing);
      } else {
        prospects.unshift({
          id: prospectId,
          companyName: agencyName || null,
          contactName: clientName,
          phone: phone || null,
          email: email || null,
          estimatedUnits: units,
          city: 'Firenze',
          address: zone,
          stage: 'PROPOSAL_SENT',
          priority: 'HOT',
          potentialMonthlyRevenue: estimatedMonthly,
          estimatedTurnoverPrice: pricePerTurnover,
          quoteCode: quoteCode,
          channel: 'FORM_PALAZZO_BLUE_ARROYO',
          investigationNotes:
            '[' + quoteCode + '] ' + unitType + ' — €' + pricePerTurnover + '/turnover' + (notes ? ' · ' + notes : ''),
          nextFollowUpDate: preferredDate,
          createdAt: nowIso,
          updatedAt: nowIso,
        });
      }
      localStorage.setItem(KEY_CRM_PROSPECTS, JSON.stringify(prospects.slice(0, 250)));
    } catch (_) {}

    try {
      if (typeof fetch === 'function') {
        var headers = { 'Content-Type': 'application/json' };
        var token = getStoredAuthToken();
        if (token) headers.Authorization = 'Bearer ' + token;

        fetch('/api/crm-prospects', {
          method: 'POST',
          headers: headers,
          body: JSON.stringify({
            prospect: {
              id: prospectId,
              companyName: agencyName || null,
              contactName: clientName,
              phone: phone,
              email: email,
              city: 'Firenze',
              address: zone,
              estimatedUnits: units,
              stage: 'PROPOSAL_SENT',
              priority: 'HOT',
              potentialMonthlyRevenue: estimatedMonthly,
              estimatedTurnoverPrice: pricePerTurnover,
              investigationNotes:
                '[' + quoteCode + '] ' + source + (notes ? ' · ' + notes : ''),
            },
          }),
        }).catch(function () {});
      }
    } catch (_) {}

    return record;
  }

  function noopEmptyArray() {
    return [];
  }

  function noop() {}

  if (typeof window !== 'undefined') {
    window.PBA_BRAND = {
      dropPath: BRAND_DROP_PATH,
      name: BRAND_NAME_FULL,
      tagline: BRAND_TAGLINE,
      renderLogo: buildBrandLogoInnerHtml,
    };
    window.PBA_FRONT_DESK = FRONT_DESK;
    window.forwardToHolding = forwardToHolding;
    window.getPbaCrmTasks = noopEmptyArray;
    window.getPbaPlannerHrLeads = noopEmptyArray;
    window.submitPbaQuoteOrFormToCrmPlannerHr = submitPbaQuoteOrFormToCrmPlannerHr;
    window.updatePbaCrmTaskContact = noop;
    window.openPbaCrmTaskPopup = noop;
    window.closePbaCrmTaskPopup = noop;
    window.savePbaCrmPopupDetails = noop;
  }
})();
