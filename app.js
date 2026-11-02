/* ═══════════════════════════════════════════════════════════
   TOSCAN COSTRUZIONI – Part of Blue Arroyo Group (app.js)
   Hospitality, Short/Medium Term, Student Hotel & Agriturismi
   Business Models: Crowdfunding Chiuso (SPV) | Unico Investitore
   ═══════════════════════════════════════════════════════════ */

const DB_KEY = 'toscan_bluearroyo_db_v2';

async function loadDB(forceReload = false) {
  if (!forceReload) {
    const saved = localStorage.getItem(DB_KEY);
    if (saved) return JSON.parse(saved);
  }
  try {
    const res = await fetch('database/db.json?t=' + Date.now());
    const data = await res.json();
    saveDB(data);
    return data;
  } catch {
    const def = getDefaultDB();
    saveDB(def);
    return def;
  }
}

function saveDB(data) {
  localStorage.setItem(DB_KEY, JSON.stringify(data));
}

async function resetOfficialDB() {
  localStorage.removeItem(DB_KEY);
  DB = await loadDB(true);
  renderProgettiTable();
  renderLeadTable();
  renderStats();
}

function getDefaultDB() {
  return {
    progetti: [
      { id:'PRJ001', nome:'Palazzo Serragli Short-Term Suites – Firenze', tipo:'Short & Medium Term', modello_business:'Crowdfunding Chiuso', unita_chiavi:'14 Suites', cliente:'SPV Serragli Hospitality (Blue Arroyo Club Deal)', nazionalita_cliente:'Internazionale (Pool 8 Investitori)', localita:'Firenze – Oltrarno (FI)', mq:680, stato:'Completato', budget_contrattuale:1120000, roi_target:'14.8% IRR', valutazione_cliente:5, anno_inizio:2023, durata_mesi:11, note:'Riconversione cielo-terra in 14 serviced apartments per short e medium term. Operazione in crowdfunding chiuso per singola transazione.' },
      { id:'PRJ002', nome:'Podere Val d\'Orcia Wine & Agriturismo – Pienza', tipo:'Agriturismo & Resort', modello_business:'Unico Investitore', unita_chiavi:'12 Suite + Spa', cliente:'Thompson Hospitality Family Office', nazionalita_cliente:'Americana', localita:'Pienza – Val d\'Orcia (SI)', mq:920, stato:'Completato', budget_contrattuale:1650000, roi_target:'11.5% Yield', valutazione_cliente:5, anno_inizio:2023, durata_mesi:15, note:'Appalto completo dalla visione architettonica alla realizzazione chiavi in mano per unico investitore USA.' },
      { id:'PRJ003', nome:'Campus Novoli Student Hotel – Firenze', tipo:'Student Hotel (PBSA)', modello_business:'Crowdfunding Chiuso', unita_chiavi:'42 Camere + Co-Working', cliente:'SPV Firenze Student Living (Blue Arroyo)', nazionalita_cliente:'Italiana / EU (Pool 12 Investitori)', localita:'Firenze – Polo Novoli (FI)', mq:1250, stato:'Completato', budget_contrattuale:1980000, roi_target:'13.2% IRR', valutazione_cliente:5, anno_inizio:2022, durata_mesi:14, note:'Riconversione ex-immobile direzionale in Student Hotel con 42 camere private, cucina condivisa, palestra e study lounge.' },
      { id:'PRJ004', nome:'Boutique Hotel Lungarno – Firenze', tipo:'Boutique Hotel', modello_business:'Unico Investitore', unita_chiavi:'18 Camere + Rooftop', cliente:'Gruppo Alberghiero Helvetia AG', nazionalita_cliente:'Svizzera', localita:'Firenze – Lungarno (FI)', mq:840, stato:'In Corso', budget_contrattuale:1480000, roi_target:'12.4% Yield', valutazione_cliente:null, anno_inizio:2025, durata_mesi:12, note:'Commessa Unico Investitore: concept interior 5 stelle, restauro vincolato, rooftop bar e 18 suite.' },
      { id:'PRJ005', nome:'Sant\'Ambrogio Medium-Term Hub – Firenze', tipo:'Short & Medium Term', modello_business:'Crowdfunding Chiuso', unita_chiavi:'9 Serviced Apts', cliente:'SPV Sant\'Ambrogio Living (Blue Arroyo)', nazionalita_cliente:'Internazionale (Pool 6 Investitori)', localita:'Firenze – Sant\'Ambrogio (FI)', mq:460, stato:'In Corso', budget_contrattuale:690000, roi_target:'15.5% IRR', valutazione_cliente:null, anno_inizio:2025, durata_mesi:8, note:'Frazionamento e creazione di 9 unità destinate a soggiorni short e medium term per digital nomads e corporate.' },
      { id:'PRJ006', nome:'Tenuta Chianti Classico Eco-Resort – Greve', tipo:'Agriturismo & Resort', modello_business:'Unico Investitore', unita_chiavi:'10 Eco-Villas', cliente:'Famiglia De Luca / Wine Estates', nazionalita_cliente:'Italiana', localita:'Greve in Chianti (FI)', mq:780, stato:'In Corso', budget_contrattuale:1320000, roi_target:'11.8% Yield', valutazione_cliente:null, anno_inizio:2025, durata_mesi:13, note:'Sviluppo chiavi in mano per unico proprietario: recupero coloniche in agriturismo di lusso.' }
    ],
    lead: [
      { id:'LD001', nome_contatto:'Mr. James Hawkins – Apex Capital', email:'jhawkins@apexcap.co.uk', telefono:'+44 7700 900123', nazionalita:'Britannica', modello_interesse:'Unico Investitore', tipo_immobile:'Boutique Hotel (16 camere)', localita:'Firenze Centro Storico', mq_stimati:750, budget_dichiarato:1400000, stato:'Preventivo Inviato', canale:'Blue Arroyo Network', data_richiesta:'2025-09-10', note:'Family office UK vuole acquisire e riconvertire palazzo a Firenze affidando visione, interior e cantiere chiavi in mano.' },
      { id:'LD002', nome_contatto:'Dott. Roberto Ferri', email:'r.ferri@ferriholding.it', telefono:'+39 055 234 5678', nazionalita:'Italiana', modello_interesse:'Crowdfunding Chiuso', tipo_immobile:'Short & Medium Term (8 unità)', localita:'Firenze – Porta al Prato', mq_stimati:380, budget_dichiarato:250000, stato:'In Trattativa', canale:'Sito web', data_richiesta:'2025-09-22', note:'Interessato a entrare con ticket da €250k nel prossimo Club Deal / Crowdfunding chiuso per transazione Short-Term.' },
      { id:'LD003', nome_contatto:'Herr Wolfgang Braun', email:'w.braun@bavaria-invest.de', telefono:'+49 170 555 7890', nazionalita:'Tedesca', modello_interesse:'Unico Investitore', tipo_immobile:'Agriturismo Luxury (14 suite)', localita:'San Gimignano (SI)', mq_stimati:1100, budget_dichiarato:1850000, stato:'Sopralluogo Fissato', canale:'Referral da PRJ002', data_richiesta:'2025-10-04', note:'Ha già individuato il compendio rurale. Richiede studio di fattibilità e appalto completo chiavi in mano.' },
      { id:'LD004', nome_contatto:'Nordic Student Living AB', email:'expansion@nordicstudent.se', telefono:'+46 8 555 1234', nazionalita:'Svedese', modello_interesse:'Unico Investitore', tipo_immobile:'Student Hotel (60 posti letto)', localita:'Pisa / Firenze', mq_stimati:1600, budget_dichiarato:2400000, stato:'Convertito', canale:'Blue Arroyo Group', data_richiesta:'2025-08-15', note:'Operatore scandinavo per sviluppo nuovo Student Hub in Toscana. Contratto EPC firmato.' },
      { id:'LD005', nome_contatto:'Ing. Marco Valenti & Partners', email:'m.valenti@valentire.it', telefono:'+39 348 900 1122', nazionalita:'Italiana', modello_interesse:'Crowdfunding Chiuso', tipo_immobile:'Short & Medium Term (12 unità)', localita:'Siena Centro', mq_stimati:540, budget_dichiarato:150000, stato:'Nuovo Lead', canale:'LinkedIn / Blue Arroyo', data_richiesta:'2025-10-25', note:'Vuole co-investire nella prossima transazione chiusa di frazionamento per affitti brevi/medi.' }
    ]
  };
}

let DB = {};

document.addEventListener('DOMContentLoaded', async () => {
  DB = await loadDB();
  renderProgettiTable();
  renderLeadTable();
  renderStats();
  calcola();
  initNavbar();
  initImages();
});

function initNavbar() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

function initImages() {
  const gradients = [
    'linear-gradient(135deg, #8B7355 0%, #C8704A 100%)',
    'linear-gradient(135deg, #2D1F0E 0%, #8B7355 100%)',
    'linear-gradient(135deg, #1E293B 0%, #32281E 100%)'
  ];
  document.querySelectorAll('img').forEach((img, i) => {
    img.addEventListener('error', () => {
      img.style.display = 'none';
      const parent = img.closest('.prj-img-wrap, .chi-img-wrap');
      if (parent) parent.style.background = gradients[i % gradients.length];
    });
  });
}

function preselectModello(tipoLabel) {
  const sel = document.getElementById('cfModello');
  if (!sel) return;
  if (tipoLabel.includes('Crowdfunding')) {
    sel.value = 'Crowdfunding Chiuso';
  } else {
    sel.value = 'Unico Investitore';
  }
}

// ═══════════════════════════════════════════════════════════
// TABS
// ═══════════════════════════════════════════════════════════
function switchTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  const btn = document.getElementById('tab-' + tabId.replace('-tab', '') + '-btn');
  if (btn) btn.classList.add('active');
}

// ═══════════════════════════════════════════════════════════
// PROGETTI & OPERAZIONI TABLE
// ═══════════════════════════════════════════════════════════
function renderProgettiTable() {
  const tbody = document.getElementById('tbodyProgetti');
  if (!tbody || !DB.progetti) return;
  tbody.innerHTML = '';
  DB.progetti.forEach((p, i) => {
    const stateBadge = getStateBadge(p.stato);
    const modelBadge = getModelBadge(p.modello_business || 'Unico Investitore');
    const budget = p.budget_contrattuale ? '€' + p.budget_contrattuale.toLocaleString('it-IT') : '–';
    const tr = document.createElement('tr');
    tr.dataset.rowIndex = i;
    tr.innerHTML = `
      <td><code style="font-size:0.72rem;color:var(--text-muted)">${p.id}</code></td>
      <td><strong>${p.nome}</strong><br><small style="color:var(--text-muted)">${p.localita || ''}</small></td>
      <td><strong>${p.tipo}</strong></td>
      <td>${modelBadge}</td>
      <td><span style="font-weight:600;color:var(--terra-dark)">${p.unita_chiavi || '–'}</span></td>
      <td>${p.cliente}<br><small style="color:var(--text-muted)">${p.nazionalita_cliente || ''}</small></td>
      <td>${p.mq} mq</td>
      <td>${stateBadge}</td>
      <td style="font-weight:700">${budget}</td>
      <td><span class="badge badge-completato">${p.roi_target || '–'}</span></td>
      <td>
        <button class="action-btn" onclick="viewNote('${escHtml(p.nome)}','${escHtml(p.note||'')}')" title="Dettagli Operazione">📝</button>
        <button class="action-btn danger" onclick="deleteProgetto('${p.id}')" title="Elimina">🗑</button>
      </td>`;
    tbody.appendChild(tr);
  });
}

function deleteProgetto(id) {
  if (!confirm('Eliminare questa operazione?')) return;
  DB.progetti = DB.progetti.filter(p => p.id !== id);
  saveDB(DB);
  renderProgettiTable();
  renderStats();
}

function addProgetto(e) {
  e.preventDefault();
  const newId = 'PRJ' + String(DB.progetti.length + 1).padStart(3, '0');
  DB.progetti.push({
    id: newId,
    nome: val('pNome'),
    tipo: val('pTipo'),
    modello_business: val('pModello') || 'Crowdfunding Chiuso',
    unita_chiavi: val('pUnita') || '–',
    cliente: val('pCliente'),
    nazionalita_cliente: val('pNazionalita') || 'Italiana',
    localita: val('pLocalita'),
    mq: Number(val('pMq')) || 0,
    stato: val('pStato'),
    budget_contrattuale: Number(val('pBudget')) || 0,
    roi_target: val('pRoi') || '12% Target',
    anno_inizio: new Date().getFullYear(),
    durata_mesi: Number(val('pDurata')) || 12,
    valutazione_cliente: null,
    note: val('pNote')
  });
  saveDB(DB);
  renderProgettiTable();
  renderStats();
  closeModal('modalProgetto');
  document.getElementById('formProgetto').reset();
}

// ═══════════════════════════════════════════════════════════
// LEAD / INVESTITORI TABLE
// ═══════════════════════════════════════════════════════════
function renderLeadTable() {
  const tbody = document.getElementById('tbodyLead');
  if (!tbody || !DB.lead) return;
  tbody.innerHTML = '';
  DB.lead.forEach((l, i) => {
    const stateBadge = getLeadBadge(l.stato);
    const modelBadge = getModelBadge(l.modello_interesse || 'Unico Investitore');
    const budget = l.budget_dichiarato ? '€' + l.budget_dichiarato.toLocaleString('it-IT') : '–';
    const tr = document.createElement('tr');
    tr.dataset.rowIndex = i;
    tr.innerHTML = `
      <td><code style="font-size:0.72rem;color:var(--text-muted)">${l.id}</code></td>
      <td>
        <strong>${l.nome_contatto}</strong><br>
        <a href="mailto:${l.email}" style="color:var(--terra);font-size:0.78rem">${l.email}</a>
      </td>
      <td>${l.nazionalita || '–'}</td>
      <td>${modelBadge}</td>
      <td><strong>${l.tipo_immobile || '–'}</strong></td>
      <td>${l.localita || '–'}</td>
      <td>${l.mq_stimati ? l.mq_stimati + ' mq' : '–'}</td>
      <td style="font-weight:700">${budget}</td>
      <td>${stateBadge}</td>
      <td style="font-size:0.8rem">${l.data_richiesta || '–'}</td>
      <td>
        <button class="action-btn" onclick="viewNote('${escHtml(l.nome_contatto)}','${escHtml(l.note||'')}')" title="Note">📝</button>
        <button class="action-btn danger" onclick="deleteLead('${l.id}')" title="Elimina">🗑</button>
      </td>`;
    tbody.appendChild(tr);
  });
}

function deleteLead(id) {
  if (!confirm('Eliminare questo contatto dal Deal Flow?')) return;
  DB.lead = DB.lead.filter(l => l.id !== id);
  saveDB(DB);
  renderLeadTable();
  renderStats();
}

function addLead(e) {
  e.preventDefault();
  const newId = 'LD' + String(DB.lead.length + 1).padStart(3, '0');
  DB.lead.push({
    id: newId,
    nome_contatto: val('lNome'),
    email: val('lEmail'),
    telefono: val('lTelefono'),
    nazionalita: val('lNazionalita') || 'Italiana',
    modello_interesse: val('lModello') || 'Unico Investitore',
    tipo_immobile: val('lTipoImmobile'),
    localita: val('lLocalita'),
    mq_stimati: Number(val('lMq')) || 0,
    budget_dichiarato: Number(val('lBudget')) || 0,
    stato: val('lStato'),
    canale: 'Direct / Deal Flow',
    data_richiesta: new Date().toISOString().slice(0, 10),
    note: val('lNote')
  });
  saveDB(DB);
  renderLeadTable();
  renderStats();
  closeModal('modalLead');
  document.getElementById('formLead').reset();
}

// ═══════════════════════════════════════════════════════════
// STATS & KPI GRUPPO
// ═══════════════════════════════════════════════════════════
function renderStats() {
  if (!DB.progetti || !DB.lead) return;
  const completati = DB.progetti.filter(p => p.stato === 'Completato').length;
  const inCorso    = DB.progetti.filter(p => p.stato === 'In Corso').length;
  const clubDeals  = DB.progetti.filter(p => (p.modello_business || '').includes('Crowdfunding')).length;
  const singleInv  = DB.progetti.filter(p => (p.modello_business || '').includes('Unico')).length;
  const valoreTot  = DB.progetti.reduce((s, p) => s + (p.budget_contrattuale || 0), 0);
  const unitaTot   = DB.progetti.reduce((s, p) => {
    const m = String(p.unita_chiavi || '').match(/\d+/);
    return s + (m ? parseInt(m[0], 10) : 0);
  }, 0);

  setText('statCompletati', completati);
  setText('statInCorso', inCorso);
  setText('statClubDeals', clubDeals);
  setText('statSingleInv', singleInv);
  setText('statUnita', unitaTot || 105);
  setText('statValore', '€ ' + (valoreTot / 1e6).toFixed(2) + 'M');

  const statiLead = ['Nuovo Lead','Sopralluogo Fissato','Preventivo Inviato','In Trattativa','Convertito','Perso'];
  const container = document.getElementById('pipelineBars');
  if (!container) return;
  const counts = {};
  statiLead.forEach(s => { counts[s] = DB.lead.filter(l => l.stato === s).length; });
  const maxVal = Math.max(...Object.values(counts), 1);
  container.innerHTML = '';
  statiLead.forEach(s => {
    const count = counts[s];
    const pct   = Math.round((count / maxVal) * 100);
    const row   = document.createElement('div');
    row.className = 'pipeline-row';
    row.innerHTML = `
      <div class="pl-label">${s}</div>
      <div class="pl-bar-wrap"><div class="pl-bar" style="width:0%" data-pct="${pct}"></div></div>
      <div class="pl-count">${count}</div>`;
    container.appendChild(row);
  });
  setTimeout(() => {
    container.querySelectorAll('.pl-bar').forEach(bar => {
      bar.style.width = bar.dataset.pct + '%';
    });
  }, 100);
}

// ═══════════════════════════════════════════════════════════
// SIMULATORE CAPEX & FATTIBILITÀ HOSPITALITY
// ═══════════════════════════════════════════════════════════
const PREZZI_HOSPITALITY = {
  short_term:  { min: 950,  max: 1650, revPerUnitYear: 38000, label: 'Short & Medium Term' },
  hotel:       { min: 1350, max: 2450, revPerUnitYear: 54000, label: 'Boutique Hotel' },
  agriturismo: { min: 1250, max: 2250, revPerUnitYear: 46000, label: 'Agriturismo & Resort' },
  student:     { min: 1050, max: 1750, revPerUnitYear: 16500, label: 'Student Hotel (PBSA)' }
};

const MULT_FINITURA = {
  standard: 1.0,
  medio_alto: 1.25,
  lusso: 1.6
};

function calcola() {
  const modello  = val('calcModello')  || 'unico';
  const tipo     = val('calcTipo')     || 'short_term';
  const mq       = Number(val('calcMq'))    || 650;
  const unita    = Number(val('calcUnita')) || 12;
  const finitura = val('calcFinitura') || 'medio_alto';
  const pratiche = document.getElementById('chkPratiche')?.checked;
  const design   = document.getElementById('chkDesign')?.checked;
  const energia  = document.getElementById('chkEnergia')?.checked;
  const intl     = document.getElementById('chkInternational')?.checked;

  const base = PREZZI_HOSPITALITY[tipo] || PREZZI_HOSPITALITY.short_term;
  const mult = MULT_FINITURA[finitura] || 1.25;

  let min = base.min * mult * mq;
  let max = base.max * mult * mq;

  const breakdown = [{ label: `Opere Edili & Impianti (${base.label})`, min, max }];

  if (pratiche) {
    const pMin = 8500, pMax = 22000;
    min += pMin; max += pMax;
    breakdown.push({ label: 'Visione, Cambio Uso & Pratiche Ricettive', min: pMin, max: pMax });
  }
  if (design) {
    const ffeMin = unita * 11000 * (finitura === 'lusso' ? 1.5 : 1);
    const ffeMax = unita * 18500 * (finitura === 'lusso' ? 1.5 : 1);
    min += ffeMin; max += ffeMax;
    breakdown.push({ label: `FF&E Contract Allestimento (${unita} unità/camere)`, min: ffeMin, max: ffeMax });
  }
  if (energia) {
    const eMin = 180 * mq, eMax = 360 * mq;
    min += eMin; max += eMax;
    breakdown.push({ label: 'Domotica Self Check-in, BMS & ESG', min: eMin, max: eMax });
  }
  if (intl) {
    const iFixed = 8000;
    min += iFixed; max += iFixed;
    breakdown.push({ label: 'International Investor Desk / SPV Reporting', min: iFixed, max: iFixed });
  }

  const avgCapex = (min + max) / 2;
  const costPerKey = Math.round(avgCapex / Math.max(unita, 1) / 1000);
  const estGrossRev = Math.round((unita * base.revPerUnitYear * (finitura === 'lusso' ? 1.35 : 1)) / 1000);

  setText('resModelloHeader', modello === 'crowdfunding'
    ? '🔐 Strutturazione Crowdfunding Chiuso (SPV Transazione)'
    : '🏛️ Appalto Unico Investitore (Visione & Realizzazione)');

  setText('resMin', '€ ' + Math.round(min / 1000).toLocaleString('it-IT') + 'k');
  setText('resMax', '€ ' + Math.round(max / 1000).toLocaleString('it-IT') + 'k');
  setText('resMq', `${mq} mq · ${unita} Unità/Camere (~€${costPerKey}k/chiave) · Ricavo Lordo Stimato A Regime: ~€${estGrossRev}k/anno`);

  const bEl = document.getElementById('resBreakdown');
  if (bEl) {
    bEl.innerHTML = breakdown.map(b =>
      `<div class="breakdown-row">
        <span>${b.label}</span>
        <span>€${Math.round(b.min/1000)}k – €${Math.round(b.max/1000)}k</span>
       </div>`
    ).join('');
  }
}

// ═══════════════════════════════════════════════════════════
// TABLE UTILITIES
// ═══════════════════════════════════════════════════════════
function filterTable(tableId, query) {
  const q = query.toLowerCase().trim();
  document.querySelectorAll(`#${tableId} tbody tr`).forEach(tr => {
    const text = tr.textContent.toLowerCase();
    tr.classList.toggle('hidden-row', q && !text.includes(q));
  });
}

function filterTableByStatus(tableId, status, colIndex) {
  document.querySelectorAll(`#${tableId} tbody tr`).forEach(tr => {
    if (!status) { tr.classList.remove('hidden-row'); return; }
    const cells = tr.querySelectorAll('td');
    const cell  = cells[colIndex];
    const text  = cell ? cell.textContent.toLowerCase() : '';
    tr.classList.toggle('hidden-row', !text.includes(status.toLowerCase()));
  });
}

let sortDir = {};
function sortTable(tableId, colIndex) {
  const table = document.getElementById(tableId);
  const tbody = table.querySelector('tbody');
  const rows  = Array.from(tbody.querySelectorAll('tr:not(.hidden-row)'));
  const dir   = (sortDir[tableId + colIndex] === 'asc') ? 'desc' : 'asc';
  sortDir[tableId + colIndex] = dir;

  rows.sort((a, b) => {
    const aText = (a.cells[colIndex]?.textContent || '').trim();
    const bText = (b.cells[colIndex]?.textContent || '').trim();
    const aNum  = parseFloat(aText.replace(/[€.,kmq%\s]/g, ''));
    const bNum  = parseFloat(bText.replace(/[€.,kmq%\s]/g, ''));
    if (!isNaN(aNum) && !isNaN(bNum)) return dir === 'asc' ? aNum - bNum : bNum - aNum;
    return dir === 'asc' ? aText.localeCompare(bText, 'it') : bText.localeCompare(aText, 'it');
  });

  rows.forEach(row => tbody.appendChild(row));
}

function exportCSV(tableId, filename) {
  const table = document.getElementById(tableId);
  const rows  = [];
  table.querySelectorAll('tr').forEach(tr => {
    const cells = Array.from(tr.querySelectorAll('th, td'))
      .slice(0, -1)
      .map(c => '"' + c.textContent.replace(/\s+/g, ' ').trim().replace(/"/g, '""') + '"');
    rows.push(cells.join(','));
  });
  const blob = new Blob(['\uFEFF' + rows.join('\n')], { type: 'text/csv;charset=utf-8;' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
}

// ═══════════════════════════════════════════════════════════
// MODALS & CONTACT FORM
// ═══════════════════════════════════════════════════════════
function openModal(id) {
  document.getElementById(id).classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('click', e => {
  if (e.target.classList.contains('modal')) closeModal(e.target.id);
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') document.querySelectorAll('.modal.open').forEach(m => closeModal(m.id));
});

function viewNote(title, note) {
  alert(`📋 ${title}\n\n${note || 'Nessuna nota.'}`);
}

function submitForm(e) {
  e.preventDefault();
  const newId = 'LD' + String(DB.lead.length + 1).padStart(3, '0');
  DB.lead.push({
    id: newId,
    nome_contatto: val('cfNome'),
    email: val('cfEmail'),
    telefono: val('cfTelefono'),
    nazionalita: document.getElementById('cfInternational')?.checked ? 'Internazionale' : 'Italiana',
    modello_interesse: val('cfModello') || 'Unico Investitore',
    tipo_immobile: val('cfTipo'),
    localita: val('cfLocalita'),
    mq_stimati: 0,
    budget_dichiarato: Number(val('cfBudget')) || 0,
    stato: 'Nuovo Lead',
    canale: 'Sito Web Ufficiale',
    data_richiesta: new Date().toISOString().slice(0, 10),
    note: val('cfMessaggio') + (document.getElementById('cfInternational')?.checked ? ' [International Investor Desk]' : '')
  });
  saveDB(DB);
  renderLeadTable();
  renderStats();

  document.getElementById('contactForm').style.display = 'none';
  document.getElementById('formSuccess').style.display = 'block';
}

function val(id) {
  return (document.getElementById(id)?.value || '').trim();
}
function setText(id, txt) {
  const el = document.getElementById(id);
  if (el) el.textContent = txt;
}
function escHtml(str) {
  return (str || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

function getModelBadge(modello) {
  if ((modello || '').toLowerCase().includes('crowdfunding')) {
    return `<span class="badge badge-club">🔐 Crowdfunding Chiuso</span>`;
  }
  return `<span class="badge badge-single">🏛️ Unico Investitore</span>`;
}

function getStateBadge(stato) {
  const map = {
    'Completato': 'completato',
    'In Corso':   'in-corso',
    'Preventivo': 'preventivo',
    'Sospeso':    'in-corso'
  };
  const cls = map[stato] || 'preventivo';
  return `<span class="badge badge-${cls}">${stato}</span>`;
}

function getLeadBadge(stato) {
  const map = {
    'Nuovo Lead':         'nuovo',
    'Sopralluogo Fissato':'sopralluogo',
    'Preventivo Inviato': 'preventivo',
    'In Trattativa':      'trattativa',
    'Convertito':         'completato',
    'Perso':              'perso'
  };
  const cls = map[stato] || 'nuovo';
  return `<span class="badge badge-${cls}">${stato}</span>`;
}
