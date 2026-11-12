# BOARD DI COORDINAMENTO — TOSCAN COSTRUZIONI (Piano 1 · Toscan Costruzioni)

**Ultimo aggiornamento:** 11/11/2026 (`JUL-055` A5 + Chiusura definitiva `Task #102` e `YV-mw9mxsq8` · Avanzamento **100% (`102/102 Fatto` · `DEPLOY-READY toscan-100`)**: confermato ufficialmente che **Toscan Costruzioni opera sotto `BLUEARROYO S.R.L.` – Sede legale: Via Matteo Palmieri 20/R, 50122 Firenze (FI) · P.IVA / C.F. 07480210488 · REA FI-706161 · SDI M5UXCR1 · PEC: bluearroyosrl@pec.it · Capitale sociale: € 50.000,00 i.v.** e che i moduli admin locali restano attivi e aggregati da `/amministrazione` Holding)  
**Manager:** `pm-toscan`  
**Riferimento modello economico:** `docs/modello-economico.md`  
**Riferimento checklist:** `docs/checklist.csv` (**100% — 102/102 task `Fatto`**: 100 base + #101 Connettore Additivo + #102 Chiusa definitivamente su conferma di Julian `11/11`)  
**Link Google Drive Checklist Toscan Costruzioni (DEC-03):** `https://drive.google.com/drive/folders/1sZttPcUjsc3WD3OYKh4iMxkilvRgcMds?usp=sharing`

---

## 1. Stato Globale Checklist (`docs/checklist.csv`)

| Stato | Conteggio | Note |
| :--- | :---: | :--- |
| **Fatto** | **102** | **100% completato (`102/102 Fatto`)**: tutte le 100 task della Checklist base Piano 1 · Toscan Costruzioni + **Task #101** e **Task #102** (Ponte `/api/amministrazione/company-input` attivo, titolarità societaria `BLUEARROYO S.R.L.` completata al 100% con `JUL-055` e chiusura definitiva `Task #102` confermata da Julian l'`11/11`: i moduli admin locali restano attivi e vengono aggregati da `/amministrazione`) |
| **In corso** | **0** | Zero task tecniche o societarie aperte |
| **Da fare** | **0** | Zero task arretrate |
| **Totale** | **102** | **100% (`DEPLOY-READY toscan-100`)** — 102/102 Task completate |

### Distribuzione per Agente / Ruolo
- **Julian (Titolare / Decisioni P1):** 9 task (`#5, #6, #9, #10, #16, #31, #33, #34, #69`) — **9/9 validate e completate (`Fatto`)**
- **Manager (`pm-toscan`):** 2 task (`#7, #8`) — **2/2 `Fatto`**
- **`agente-1` (Direzione, Legale, Compliance TUF/CONSOB & Contratti 5 SAL):** 12 task + co-titolare **Task #102** — **100% `Fatto`**
- **`agente-2` (Vendite, Studio 48h, Preventivo PDF, SEO/GEO & Partner):** 23 task — **100% `Fatto`**
- **`agente-3` (Tecnico, Progetto Esecutivo, Cantiere, Sicurezza & Report del Venerdì):** 36 task — **100% `Fatto`** (strumenti digitali `foglio-lavori.html` pronti per verbali reali)
- **`agente-4` (Amministrazione — Gabriela, SAL, DURC, Fornitori & Connettore `/amministrazione`):** 20 task (`+ #101, #102`) — **100% `Fatto`** (restando solo eventuale verifica umana di Gabriela e Biviana su `/amministrazione`)

---

## 2. Trasloco Admin Centrale 2FA (`/amministrazione` — Gabriela, Biviana, Julian) & Task #102

In esecuzione dell'ordine di Julian (`[HOLDING → pm-toscan – 09/11 17:28]`), il Piano 1 opera secondo il protocollo in 5 Step per il trasloco dell'Amministrazione nella console centrale protetta da 2FA (`/amministrazione` e `/contabilita` della Palazzina Holding):

### A. Regola Operativa Attuale (Step 1–4: Modalità SOLO ADDITIVA)
- **Nessun codice o modulo esistente è stato rimosso** da `kit-commerciale.html` prima della verifica congiunta (Step 4) di **Julian, Gabriela e Biviana**.
- È stato aggiunto in `kit-commerciale.html` (sia nella sezione `#role-admin` con il pannello `#toscan-company-input-bridge` e il bottone `#btn-send-company-input-all`, sia nella sezione `#role-tech` con il bottone `#btn-tech-company-input`, oltre alla funzione globale `window.sendToscanCompanyInput()`) il **connettore 1-clic** che invia i **Report Operativi/Commerciali (`Verbale SAL`, `DURC & Cassa Edile`, `Contratto 5 SAL`, `Ore Cantiere & Deep Cleaning PBA 30 €/h DOC`, `Provvigione Partner 2–3%`)** a:
  - `POST http://localhost:3000/api/amministrazione/company-input` (con fallback automatico su `/api/amministrazione/company-input`)
  - Identificativo univoco: `azienda_id: 'toscan'`

### B. Chiusura Definitiva `Task #102` (`11/11/2026` — Regola Permanente `JUL-009` Blocco 3)
Su conferma ufficiale di Julian (`11/11/2026`), la vecchia ipotesi di Step 5 (*rimozione moduli admin locali*) è **definitivamente archiviata e chiusa (`Fatto` 100%)**:
- I moduli amministrativi e operativi locali in `kit-commerciale.html`, `data-room.html`, `foglio-lavori.html` e `stato-cantiere.html` **restano attivi**.
- La Dashboard Admin Generale `/amministrazione` della Holding **legge e aggrega** i flussi inviati da `agente-1..4` tramite `POST /api/amministrazione/company-input` (`azienda_id: 'toscan'`) senza sostituire né cancellare le console locali.

---

## 3. Priorità Strategica `YV-mw9cv67c`: Sito Pubblico & Piattaforma Interna Stabili e Pronti per Dati Reali

Su ordine diretto di Julian (`YV-mw9cv67c`), sia il **sito commerciale pubblico** (`index.html`, `crowdfunding-immobiliare-chiuso-unico-investitore-toscana.html`, `preventivo-tipo.html`, `data-room.html`, `blog.html`, `app.js`, `llms.txt`) sia la **piattaforma interna operativa** (`kit-commerciale.html`, `stato-cantiere.html`, `foglio-lavori.html`) sono stabili, senza bug, 100% conformi TUF/CONSOB e pronti per il caricamento immediato di dati reali.

---

## 4. Sistema Amministrativo e Contabile di Gruppo per Gabriela (`DEC-17`, `YV-mw9bdirw` & `YV-mw9be3p2`)

Approvato da Julian con **DEC-17** e collegato in tempo reale tramite `http://localhost:3000/api/amministrazione/company-input` (`azienda_id: 'toscan'`):
1. **5 Metodi di Caricamento Dati Reali:** Upload PDF/Foto con OCR automatico, Connessione diretta SDI XML FatturaPA, Importazione Estratti Conto Bancari CSV/PSD2, Form Manuale Rapido e Importazione Dati Storici.
2. **4 Gate di Validazione di Gabriela (con Biviana e Julian):** Pre-classificazione automatica → Gate documentale Piano 1 (Verbale SAL DL + DURC Online + Congruità Cassa Edile + esito DOC Deep Cleaning PBA `30 €/h`) → Riconciliazione bancaria → Consolidato mensile sui 4 piani.

---

## 5. Matrice Responsabili × Agenti e Perimetri File

| Agente | Ruolo Primario | Perimetro File Autorizzato | ECC Agents & Skills Collegati |
| :--- | :--- | :--- | :--- |
| **`pm-toscan`** | Project Manager Piano 1 | `docs/checklist.csv`, `docs/ruoli.csv`, `docs/flussi.csv`, `docs/modello-economico.md`, `coordinamento/*`, `README.md` | `planner`, `architect`, `architecture-decision-records` |
| **`agente-1`** | Direzione, Legale, Compliance TUF/CONSOB & Contratti 5 SAL | `data-room.html`, `app.js`, `crowdfunding-immobiliare-chiuso-unico-investitore-toscana.html`, `tuscany-hospitality-investment-general-contractor.html` | `security-reviewer`, `code-reviewer`, `master-agreement-generator`, `architecture-decision-records` |
| **`agente-2`** | Vendite, Studio 48h, Preventivo PDF, SEO/GEO & Partner | `index.html`, `preventivo-tipo.html`, `blog.html`, `partner-*.html`, `llms.txt`, `sitemap.xml`, `robots.txt` | `seo-specialist`, `marketing-agent`, `seo`, `brand-voice`, `content-engine`, `marketing-campaign`, `lead-intelligence` |
| **`agente-3`** | Tecnico, Progetto, Cantiere, Sicurezza & Report del Venerdì | `stato-cantiere.html`, `foglio-lavori.html`, `foglio-style.css`, `villa-claudia.html`, sezioni `?role=tech` di `kit-commerciale.html` | `a11y-architect`, `accessibility`, `production-scheduling`, `quality-nonconformance` |
| **`agente-4`** | Amministrazione (Ponte verso `/amministrazione`), SAL, DURC & Subentro Ciclo Blue Arroyo | Sezioni `?role=admin` e `?role=hosp` di `kit-commerciale.html`, connettore `/api/amministrazione/company-input` e Task #102 | `finance-billing-ops`, `customer-billing-ops` |
