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
    progetti: [],
    lead: []
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
function makeBadge(cls, text) {
  const s = document.createElement('span');
  s.className = 'badge ' + cls;
  s.textContent = text;
  return s;
}
function renderProgettiTable() {
  const tbody = document.getElementById('tbodyProgetti');
  if (!tbody || !DB.progetti) return;
  tbody.replaceChildren();
  DB.progetti.forEach((p, i) => {
    const budget = p.budget_contrattuale ? '€' + p.budget_contrattuale.toLocaleString('it-IT') : '–';
    const fascia = p.Fascia_euro_mq || (p.budget_contrattuale && p.mq ? Math.round(p.budget_contrattuale / p.mq) + ' €/m²' : '1.350–2.400 €/m²');
    const tr = document.createElement('tr');
    tr.dataset.rowIndex = i;

    const tdId = document.createElement('td');
    const c = document.createElement('code'); c.style.cssText = 'font-size:0.72rem;color:var(--text-muted)'; c.textContent = p.id || '';
    tdId.appendChild(c);

    const tdName = document.createElement('td');
    const bName = document.createElement('strong'); bName.textContent = p.nome || '';
    const smLoc = document.createElement('small'); smLoc.style.color = 'var(--text-muted)'; smLoc.textContent = p.localita || '';
    tdName.append(bName, document.createElement('br'), smLoc);

    const tdTipo = document.createElement('td');
    const bTipo = document.createElement('strong'); bTipo.textContent = p.tipo || '';
    tdTipo.appendChild(bTipo);

    const tdMod = document.createElement('td');
    const isPil = ((p.modello_business || '').toLowerCase().includes('pilota') || (p.modello_business || '').toLowerCase().includes('masterclass'));
    tdMod.appendChild(makeBadge(isPil ? 'badge-club' : 'badge-single', isPil ? 'Percorso Scaglionato' : 'Appalto a Corpo 5 SAL'));

    const tdUni = document.createElement('td');
    const spUni = document.createElement('span'); spUni.style.cssText = 'font-weight:600;color:var(--terra-dark)'; spUni.textContent = p.unita_chiavi || '–';
    tdUni.appendChild(spUni);

    const tdCli = document.createElement('td');
    const smNat = document.createElement('small'); smNat.style.color = 'var(--text-muted)'; smNat.textContent = p.nazionalita_cliente || '';
    tdCli.append(document.createTextNode(p.cliente || ''), document.createElement('br'), smNat);

    const tdMq = document.createElement('td');
    tdMq.textContent = (p.mq || 0) + ' mq';

    const tdSt = document.createElement('td');
    const stMap = { 'Completato': 'completato', 'In Corso': 'in-corso', 'Preventivo': 'preventivo', 'Sospeso': 'in-corso' };
    tdSt.appendChild(makeBadge('badge-' + (stMap[p.stato] || 'preventivo'), p.stato || ''));

    const tdBud = document.createElement('td');
    tdBud.style.fontWeight = '700';
    tdBud.textContent = budget;

    const tdFas = document.createElement('td');
    tdFas.appendChild(makeBadge('badge-completato', fascia));

    const tdAct = document.createElement('td');
    const btnNote = document.createElement('button');
    btnNote.className = 'action-btn'; btnNote.title = 'Dettagli Commessa'; btnNote.textContent = 'Note';
    btnNote.addEventListener('click', () => viewNote(p.nome, p.note || ''));
    const btnDel = document.createElement('button');
    btnDel.className = 'action-btn danger'; btnDel.title = 'Elimina'; btnDel.textContent = 'Elimina';
    btnDel.addEventListener('click', () => deleteProgetto(p.id));
    tdAct.append(btnNote, btnDel);

    tr.append(tdId, tdName, tdTipo, tdMod, tdUni, tdCli, tdMq, tdSt, tdBud, tdFas, tdAct);
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
  tbody.replaceChildren();
  DB.lead.forEach((l, i) => {
    const budget = l.budget_dichiarato ? '€' + l.budget_dichiarato.toLocaleString('it-IT') : '–';
    const tr = document.createElement('tr');
    tr.dataset.rowIndex = i;

    const tdId = document.createElement('td');
    const c = document.createElement('code'); c.style.cssText = 'font-size:0.72rem;color:var(--text-muted)'; c.textContent = l.id || '';
    tdId.appendChild(c);

    const tdContact = document.createElement('td');
    const bName = document.createElement('strong'); bName.textContent = l.nome_contatto || '';
    const aMail = document.createElement('a'); aMail.href = 'mailto:' + encodeURIComponent(l.email || ''); aMail.style.cssText = 'color:var(--terra);font-size:0.78rem'; aMail.textContent = l.email || '';
    tdContact.append(bName, document.createElement('br'), aMail);

    const tdNat = document.createElement('td'); tdNat.textContent = l.nazionalita || '–';

    const tdMod = document.createElement('td');
    const isPil = ((l.modello_interesse || '').toLowerCase().includes('pilota') || (l.modello_interesse || '').toLowerCase().includes('masterclass'));
    tdMod.appendChild(makeBadge(isPil ? 'badge-club' : 'badge-single', isPil ? 'Percorso Scaglionato' : 'Appalto a Corpo 5 SAL'));

    const tdTipo = document.createElement('td');
    const bTipo = document.createElement('strong'); bTipo.textContent = l.tipo_immobile || '–';
    tdTipo.appendChild(bTipo);

    const tdLoc = document.createElement('td'); tdLoc.textContent = l.localita || '–';
    const tdMq = document.createElement('td'); tdMq.textContent = l.mq_stimati ? l.mq_stimati + ' mq' : '–';
    const tdBud = document.createElement('td'); tdBud.style.fontWeight = '700'; tdBud.textContent = budget;

    const tdSt = document.createElement('td');
    const lMap = { 'Nuovo Lead':'nuovo', 'Sopralluogo Fissato':'sopralluogo', 'Preventivo Inviato':'preventivo', 'In Trattativa':'trattativa', 'Convertito':'completato', 'Perso':'perso' };
    tdSt.appendChild(makeBadge('badge-' + (lMap[l.stato] || 'nuovo'), l.stato || ''));

    const tdDt = document.createElement('td'); tdDt.style.fontSize = '0.8rem'; tdDt.textContent = l.data_richiesta || '–';

    const tdAct = document.createElement('td');
    const btnNote = document.createElement('button');
    btnNote.className = 'action-btn'; btnNote.title = 'Note'; btnNote.textContent = 'Note';
    btnNote.addEventListener('click', () => viewNote(l.nome_contatto, l.note || ''));
    const btnDel = document.createElement('button');
    btnDel.className = 'action-btn danger'; btnDel.title = 'Elimina'; btnDel.textContent = 'Elimina';
    btnDel.addEventListener('click', () => deleteLead(l.id));
    tdAct.append(btnNote, btnDel);

    tr.append(tdId, tdContact, tdNat, tdMod, tdTipo, tdLoc, tdMq, tdBud, tdSt, tdDt, tdAct);
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
  container.replaceChildren();
  statiLead.forEach(s => {
    const count = counts[s];
    const pct   = Math.round((count / maxVal) * 100);
    const row   = document.createElement('div');
    row.className = 'pipeline-row';
    const lbl = document.createElement('div'); lbl.className = 'pl-label'; lbl.textContent = s;
    const wrap = document.createElement('div'); wrap.className = 'pl-bar-wrap';
    const bar = document.createElement('div'); bar.className = 'pl-bar'; bar.style.width = '0%'; bar.dataset.pct = String(pct);
    wrap.appendChild(bar);
    const cnt = document.createElement('div'); cnt.className = 'pl-count'; cnt.textContent = String(count);
    row.append(lbl, wrap, cnt);
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
    ? 'Step 4 Lotto Pilota / Unità Campione + Appalto 5 SAL'
    : 'Appalto General Contractor a Corpo (5 SAL: 15/25/25/25/10%)');

  setText('resMin', '€ ' + Math.round(min / 1000).toLocaleString('it-IT') + 'k');
  setText('resMax', '€ ' + Math.round(max / 1000).toLocaleString('it-IT') + 'k');
  setText('resMq', `${mq} mq · ${unita} Unità (~€${costPerKey}k/unità) · Tempi garantiti 5–12 mesi con penale 150 €/gg`);

  const bEl = document.getElementById('resBreakdown');
  if (bEl) {
    const rows = breakdown.map(b => {
      const row = document.createElement('div');
      row.className = 'breakdown-row';
      const l = document.createElement('span');
      l.textContent = b.label;
      const r = document.createElement('span');
      r.textContent = b.min < 0 ? '−€150 (Scalato)' : `€${Math.round(b.min / 1000)}k – €${Math.round(b.max / 1000)}k`;
      row.append(l, r);
      return row;
    });
    bEl.replaceChildren(...rows);
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
  document.body.style.overflowY = 'hidden';
}
function closeModal(id) {
  document.getElementById(id)?.classList.remove('open');
  document.body.style.overflowY = '';
}
document.addEventListener('click', e => {
  if (e.target.classList.contains('modal')) closeModal(e.target.id);
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') document.querySelectorAll('.modal.open').forEach(m => closeModal(m.id));
});

function viewNote(title, note) {
  alert(`${title}\n\n${note || 'Nessuna nota.'}`);
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
    return `<span class="badge badge-club">Percorso Scaglionato</span>`;
  }
  return `<span class="badge badge-single">Appalto a Corpo 5 SAL</span>`;
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
