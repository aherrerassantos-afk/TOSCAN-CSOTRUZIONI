/* ═══════════════════════════════════════════════════════════
   TOSCAN COSTRUZIONI – Part of Blue Arroyo Group (app.js)
   Hospitality, Short/Medium Term, Student Hotel & Agriturismi
   Modello Operativo (DEC-07 / DEC-15): General Contractor Puro a Corpo
   (1.350–2.400 €/m² · 5 SAL Verificati · Masterclass 150 € scalabile · Deep Cleaning PBA 30 €/ora DOC)
   ═══════════════════════════════════════════════════════════ */

const DB_KEY = 'toscan_bluearroyo_gc_v3';

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
      { id:'PRJ001', nome:'Palazzo Serragli Short-Term Suites – Firenze', tipo:'Short & Medium Term', modello_business:'Appalto a Corpo 5 SAL', unita_chiavi:'14 Suites', cliente:'Proprietà Immobiliare Serragli Srl', nazionalita_cliente:'Italiana', localita:'Firenze – Oltrarno (FI)', mq:680, stato:'Completato', budget_contrattuale:1120000, Fascia_euro_mq:'1.647 €/m² (Prezzo Chiuso)', valutazione_cliente:5, anno_inizio:2023, durata_mesi:11, note:'Riconversione cielo-terra in 14 serviced apartments per short e medium term. Appalto chiavi in mano a prezzo chiuso e 5 SAL verificati + Subentro 1-Tap Ciclo Blue Arroyo.' },
      { id:'PRJ002', nome:'Podere Val d\'Orcia Wine & Agriturismo – Pienza', tipo:'Agriturismo & Resort', modello_business:'Appalto a Corpo 5 SAL', unita_chiavi:'12 Suite + Spa', cliente:'Tenuta Val d\'Orcia Agriturismo Srl', nazionalita_cliente:'Internazionale', localita:'Pienza – Val d\'Orcia (SI)', mq:920, stato:'Completato', budget_contrattuale:1650000, Fascia_euro_mq:'1.793 €/m² (Prezzo Chiuso)', valutazione_cliente:5, anno_inizio:2023, durata_mesi:12, note:'Appalto completo dalla progettazione esecutiva alla realizzazione chiavi in mano per proprietario agrituristico con Deep Cleaning PBA 30 €/ora DOC.' },
      { id:'PRJ003', nome:'Campus Novoli Student Hotel – Firenze', tipo:'Student Hotel (PBSA)', modello_business:'Appalto a Corpo 5 SAL', unita_chiavi:'42 Camere + Co-Working', cliente:'Firenze Student Living Srl', nazionalita_cliente:'Italiana / EU', localita:'Firenze – Polo Novoli (FI)', mq:1250, stato:'Completato', budget_contrattuale:1980000, Fascia_euro_mq:'1.584 €/m² (Prezzo Chiuso)', valutazione_cliente:5, anno_inizio:2022, durata_mesi:12, note:'Riconversione ex-immobile direzionale in Student Hotel con 42 camere private, cucina condivisa, palestra e study lounge a prezzo chiuso.' },
      { id:'PRJ004', nome:'Boutique Hotel Lungarno – Firenze', tipo:'Boutique Hotel', modello_business:'Appalto a Corpo 5 SAL', unita_chiavi:'18 Camere + Rooftop', cliente:'Gruppo Alberghiero Helvetia AG', nazionalita_cliente:'Svizzera', localita:'Firenze – Lungarno (FI)', mq:840, stato:'In Corso', budget_contrattuale:1480000, Fascia_euro_mq:'1.762 €/m² (Prezzo Chiuso)', valutazione_cliente:null, anno_inizio:2025, durata_mesi:11, note:'Commessa General Contractor a corpo: concept interior 5 stelle, restauro vincolato, rooftop bar e 18 suite con penali ritardo garantite.' },
      { id:'PRJ005', nome:'Sant\'Ambrogio Medium-Term Hub – Firenze', tipo:'Short & Medium Term', modello_business:'Lotto Pilota + 5 SAL', unita_chiavi:'9 Serviced Apts', cliente:'Proprietà Sant\'Ambrogio Living', nazionalita_cliente:'Italiana', localita:'Firenze – Sant\'Ambrogio (FI)', mq:460, stato:'In Corso', budget_contrattuale:690000, Fascia_euro_mq:'1.500 €/m² (Prezzo Chiuso)', valutazione_cliente:null, anno_inizio:2025, durata_mesi:8, note:'Frazionamento e creazione di 9 unità destinate a soggiorni short e medium term con collaudo Subentro 1-Tap Itassitance, PBA (30 €/h DOC) e SmartsBookings.' },
      { id:'PRJ006', nome:'Tenuta Chianti Classico Eco-Resort – Greve', tipo:'Agriturismo & Resort', modello_business:'Appalto a Corpo 5 SAL', unita_chiavi:'10 Eco-Villas', cliente:'Famiglia De Luca / Wine Estates', nazionalita_cliente:'Italiana', localita:'Greve in Chianti (FI)', mq:780, stato:'In Corso', budget_contrattuale:1320000, Fascia_euro_mq:'1.692 €/m² (Prezzo Chiuso)', valutazione_cliente:null, anno_inizio:2025, durata_mesi:11, note:'Sviluppo chiavi in mano per unico proprietario: recupero coloniche in agriturismo ricettivo con contratto 5 SAL.' }
    ],
    lead: [
      { id:'LD001', nome_contatto:'Famiglia Bellini – Palazzo Storico', email:'m.bellini@bellinifirenze.it', telefono:'+39 055 900123', nazionalita:'Italiana', modello_interesse:'Appalto a Corpo 5 SAL', tipo_immobile:'Boutique Hotel (16 camere)', localita:'Firenze Centro Storico', mq_stimati:750, budget_dichiarato:1400000, stato:'Preventivo Inviato', canale:'Blue Arroyo Network', data_richiesta:'2025-09-10', note:'Proprietario immobiliare richiede progettazione, interior e cantiere chiavi in mano a prezzo chiuso (1.350–2.400 €/m²).' },
      { id:'LD002', nome_contatto:'Dott. Roberto Ferri', email:'r.ferri@ferriimmobiliare.it', telefono:'+39 055 234 5678', nazionalita:'Italiana', modello_interesse:'Masterclass 150 € + Step 2', tipo_immobile:'Short & Medium Term (8 unità)', localita:'Firenze – Porta al Prato', mq_stimati:380, budget_dichiarato:620000, stato:'In Trattativa', canale:'Sito web', data_richiesta:'2025-09-22', note:'Ha prenotato la Masterclass Call da 150 € (100% scalabile) per frazionamento di un immobile di proprietà in 8 unità ricettive.' },
      { id:'LD003', nome_contatto:'Tenuta San Gimignano Srl', email:'direzione@tenutasangimignano.it', telefono:'+39 0577 555 789', nazionalita:'Italiana / DE', modello_interesse:'Appalto a Corpo 5 SAL', tipo_immobile:'Agriturismo Ricettivo (14 suite)', localita:'San Gimignano (SI)', mq_stimati:1100, budget_dichiarato:1850000, stato:'Sopralluogo Fissato', canale:'Referral Partner Architetto', data_richiesta:'2025-10-04', note:'Compendio rurale di proprietà. Richiede studio di fattibilità 48h e appalto completo chiavi in mano.' },
      { id:'LD004', nome_contatto:'Nordic Student Living AB', email:'expansion@nordicstudent.se', telefono:'+46 8 555 1234', nazionalita:'Svedese', modello_interesse:'Appalto a Corpo 5 SAL', tipo_immobile:'Student Hotel (60 posti letto)', localita:'Pisa / Firenze', mq_stimati:1600, budget_dichiarato:2400000, stato:'Convertito', canale:'Blue Arroyo Group', data_richiesta:'2025-08-15', note:'Operatore ricettivo per ristrutturazione nuovo Student Hub in Toscana. Contratto a prezzo chiuso 5 SAL firmato.' },
      { id:'LD005', nome_contatto:'Studio Arch. Marco Valenti & Partners', email:'m.valenti@valentistudio.it', telefono:'+39 348 900 1122', nazionalita:'Italiana', modello_interesse:'Lotto Pilota Step 4', tipo_immobile:'Short & Medium Term (12 unità)', localita:'Siena Centro', mq_stimati:540, budget_dichiarato:860000, stato:'Nuovo Lead', canale:'Partner Architetti (Fee 2-3%)', data_richiesta:'2025-10-25', note:'Segnalazione Partner per frazionamento ricettivo con avvio da Unità Campione (Step 4) e subentro Ciclo Blue Arroyo.' }
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
  if (!nav) return;
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
  if ((tipoLabel || '').includes('Masterclass') || (tipoLabel || '').includes('Pilota')) {
    sel.value = 'Percorso Scaglionato (Masterclass 150 € / Lotto Pilota)';
  } else {
    sel.value = 'Appalto a Corpo 5 SAL (Prezzo Chiuso)';
  }
}

// ═══════════════════════════════════════════════════════════
// TABS
// ═══════════════════════════════════════════════════════════
function switchTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  const target = document.getElementById(tabId);
  if (target) target.classList.add('active');
  const btn = document.getElementById('tab-' + tabId.replace('-tab', '') + '-btn');
  if (btn) btn.classList.add('active');
}

// ═══════════════════════════════════════════════════════════
// PROGETTI & COMMESSE TABLE
// ═══════════════════════════════════════════════════════════
function renderProgettiTable() {
  const tbody = document.getElementById('tbodyProgetti');
  if (!tbody || !DB.progetti) return;
  tbody.innerHTML = '';
  DB.progetti.forEach((p, i) => {
    const stateBadge = getStateBadge(p.stato);
    const modelBadge = getModelBadge(p.modello_business || 'Appalto a Corpo 5 SAL');
    const budget = p.budget_contrattuale ? '€' + p.budget_contrattuale.toLocaleString('it-IT') : '–';
    const fascia = p.Fascia_euro_mq || (p.budget_contrattuale && p.mq ? Math.round(p.budget_contrattuale / p.mq) + ' €/m²' : '1.350–2.400 €/m²');
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
      <td><span class="badge badge-completato">${fascia}</span></td>
      <td>
        <button class="action-btn" onclick="viewNote('${escHtml(p.nome)}','${escHtml(p.note||'')}')" title="Dettagli Commessa">📝</button>
        <button class="action-btn danger" onclick="deleteProgetto('${p.id}')" title="Elimina">🗑</button>
      </td>`;
    tbody.appendChild(tr);
  });
}

function deleteProgetto(id) {
  if (!confirm('Eliminare questa commessa?')) return;
  DB.progetti = DB.progetti.filter(p => p.id !== id);
  saveDB(DB);
  renderProgettiTable();
  renderStats();
}

function addProgetto(e) {
  e.preventDefault();
  const newId = 'PRJ' + String(DB.progetti.length + 1).padStart(3, '0');
  const mqVal = Number(val('pMq')) || 250;
  const budgetVal = Number(val('pBudget')) || (mqVal * 1650);
  DB.progetti.push({
    id: newId,
    nome: val('pNome'),
    tipo: val('pTipo'),
    modello_business: val('pModello') || 'Appalto a Corpo 5 SAL',
    unita_chiavi: val('pUnita') || '–',
    cliente: val('pCliente'),
    nazionalita_cliente: val('pNazionalita') || 'Italiana',
    localita: val('pLocalita'),
    mq: mqVal,
    stato: val('pStato'),
    budget_contrattuale: budgetVal,
    Fascia_euro_mq: Math.round(budgetVal / Math.max(mqVal, 1)) + ' €/m² (Prezzo Chiuso)',
    anno_inizio: new Date().getFullYear(),
    durata_mesi: Number(val('pDurata')) || 8,
    valutazione_cliente: null,
    note: val('pNote')
  });
  saveDB(DB);
  renderProgettiTable();
  renderStats();
  closeModal('modalProgetto');
  document.getElementById('formProgetto')?.reset();
}

// ═══════════════════════════════════════════════════════════
// LEAD PROPRIETARI & ALBERGATORI TABLE
// ═══════════════════════════════════════════════════════════
function renderLeadTable() {
  const tbody = document.getElementById('tbodyLead');
  if (!tbody || !DB.lead) return;
  tbody.innerHTML = '';
  DB.lead.forEach((l, i) => {
    const stateBadge = getLeadBadge(l.stato);
    const modelBadge = getModelBadge(l.modello_interesse || 'Appalto a Corpo 5 SAL');
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
  if (!confirm('Eliminare questo contatto dal CRM Committenti?')) return;
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
    modello_interesse: val('lModello') || 'Appalto a Corpo 5 SAL',
    tipo_immobile: val('lTipoImmobile'),
    localita: val('lLocalita'),
    mq_stimati: Number(val('lMq')) || 0,
    budget_dichiarato: Number(val('lBudget')) || 0,
    stato: val('lStato'),
    canale: 'Studio Fattibilità 48h',
    data_richiesta: new Date().toISOString().slice(0, 10),
    note: val('lNote')
  });
  saveDB(DB);
  renderLeadTable();
  renderStats();
  closeModal('modalLead');
  document.getElementById('formLead')?.reset();
}

// ═══════════════════════════════════════════════════════════
// STATS & KPI GENERAL CONTRACTOR
// ═══════════════════════════════════════════════════════════
function renderStats() {
  if (!DB.progetti || !DB.lead) return;
  const completati = DB.progetti.filter(p => p.stato === 'Completato').length;
  const inCorso    = DB.progetti.filter(p => p.stato === 'In Corso').length;
  const lottiPilota = DB.progetti.filter(p => (p.modello_business || '').includes('Pilota')).length;
  const appalti5Sal = DB.progetti.filter(p => !(p.modello_business || '').includes('Pilota')).length;
  const valoreTot  = DB.progetti.reduce((s, p) => s + (p.budget_contrattuale || 0), 0);
  const unitaTot   = DB.progetti.reduce((s, p) => {
    const m = String(p.unita_chiavi || '').match(/\d+/);
    return s + (m ? parseInt(m[0], 10) : 0);
  }, 0);

  setText('statCompletati', completati);
  setText('statInCorso', inCorso);
  setText('statClubDeals', lottiPilota);
  setText('statSingleInv', appalti5Sal);
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
// SIMULATORE PREZZO CHIUSO A CORPO (1.350–2.400 €/m²) & 5 SAL
// ═══════════════════════════════════════════════════════════
const PREZZI_HOSPITALITY = {
  short_term:  { min: 1350, max: 1750, label: 'Short & Medium Term (1.350–1.750 €/m²)' },
  hotel:       { min: 1650, max: 2400, label: 'Boutique Hotel (1.650–2.400 €/m²)' },
  agriturismo: { min: 1500, max: 2200, label: 'Agriturismo & Resort (1.500–2.200 €/m²)' },
  student:     { min: 1350, max: 1850, label: 'Student Hotel PBSA (1.350–1.850 €/m²)' }
};

const MULT_FINITURA = {
  standard: 1.0,
  medio_alto: 1.12,
  lusso: 1.25
};

function calcola() {
  const modello  = val('calcModello')  || 'appalto_5sal';
  const tipo     = val('calcTipo')     || 'short_term';
  const mq       = Number(val('calcMq'))    || 280;
  const unita    = Number(val('calcUnita')) || 6;
  const finitura = val('calcFinitura') || 'medio_alto';
  const pratiche = document.getElementById('chkPratiche')?.checked;
  const design   = document.getElementById('chkDesign')?.checked;
  const energia  = document.getElementById('chkEnergia')?.checked;
  const deepClean = document.getElementById('chkInternational')?.checked;

  const base = PREZZI_HOSPITALITY[tipo] || PREZZI_HOSPITALITY.short_term;
  const mult = MULT_FINITURA[finitura] || 1.0;

  let min = base.min * mult * mq;
  let max = Math.min(2400 * mq, base.max * mult * mq);

  const breakdown = [{ label: `Opere Edili & Impianti DM 37/08 (${base.label})`, min, max }];

  if (pratiche) {
    const pMin = 4500, pMax = 12000;
    min += pMin; max += pMax;
    breakdown.push({ label: 'Pratiche Edilizie CILA/SCIA, Cambio Uso & Requisiti CIN', min: pMin, max: pMax });
  }
  if (design) {
    const ffeMin = unita * 8500;
    const ffeMax = unita * 14500;
    min += ffeMin; max += ffeMax;
    breakdown.push({ label: `FF&E Contract Allestimento Pronto Ospiti (${unita} unità)`, min: ffeMin, max: ffeMax });
  }
  if (energia) {
    const eMin = 120 * mq, eMax = 240 * mq;
    min += eMin; max += eMax;
    breakdown.push({ label: 'Domotica Self Check-in, Serrature Smart & Acustica', min: eMin, max: eMax });
  }
  if (deepClean) {
    const oreStimate = Math.max(24, Math.round(mq * 0.35));
    const costoPba = oreStimate * 30;
    min += costoPba; max += costoPba;
    breakdown.push({ label: `Deep Cleaning Fine Cantiere PBA (${oreStimate}h × 30 €/ora tutto incluso DOC)`, min: costoPba, max: costoPba });
  }

  // Detrazione Masterclass 150 € scalabile al 100%
  breakdown.push({ label: 'Credito Masterclass Call 150 € (100% scalato sul SAL 1)', min: -150, max: -150 });

  const avgCapex = Math.max(0, ((min + max) / 2) - 150);
  const costPerKey = Math.round(avgCapex / Math.max(unita, 1) / 1000);

  setText('resModelloHeader', modello === 'pilota'
    ? '🧱 Step 4 Lotto Pilota / Unità Campione + Appalto 5 SAL'
    : '🏛️ Appalto General Contractor a Corpo (5 SAL: 15/25/25/25/10%)');

  setText('resMin', '€ ' + Math.round(min / 1000).toLocaleString('it-IT') + 'k');
  setText('resMax', '€ ' + Math.round(max / 1000).toLocaleString('it-IT') + 'k');
  setText('resMq', `${mq} mq · ${unita} Unità (~€${costPerKey}k/unità) · Tempi garantiti 5–12 mesi con penale 150 €/gg`);

  const bEl = document.getElementById('resBreakdown');
  if (bEl) {
    bEl.innerHTML = breakdown.map(b =>
      `<div class="breakdown-row">
        <span>${b.label}</span>
        <span>${b.min < 0 ? '−€150 (Scalato)' : `€${Math.round(b.min/1000)}k – €${Math.round(b.max/1000)}k`}</span>
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
  if (!table) return;
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
  if (!table) return;
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
  document.getElementById(id)?.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(id) {
  document.getElementById(id)?.classList.remove('open');
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
    modello_interesse: val('cfModello') || 'Appalto a Corpo 5 SAL',
    tipo_immobile: val('cfTipo'),
    localita: val('cfLocalita'),
    mq_stimati: 0,
    budget_dichiarato: Number(val('cfBudget')) || 0,
    stato: 'Nuovo Lead',
    canale: 'Studio Fattibilità 48h',
    data_richiesta: new Date().toISOString().slice(0, 10),
    note: val('cfMessaggio') + (document.getElementById('cfInternational')?.checked ? ' [Committente Internazionale]' : '')
  });
  saveDB(DB);
  renderLeadTable();
  renderStats();

  const cf = document.getElementById('contactForm');
  const fs = document.getElementById('formSuccess');
  if (cf) cf.style.display = 'none';
  if (fs) fs.style.display = 'block';
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
  if ((modello || '').toLowerCase().includes('pilota') || (modello || '').toLowerCase().includes('masterclass')) {
    return `<span class="badge badge-club">🧱 Percorso Scaglionato</span>`;
  }
  return `<span class="badge badge-single">🏛️ Appalto a Corpo 5 SAL</span>`;
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
