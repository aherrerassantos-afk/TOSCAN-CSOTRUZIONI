# SITE_RULES.md — Regole Ufficiali di Posizionamento, Compliance Legale, Design & Conversione
**Sito:** https://toscancostruzioni.it (`Toscan Costruzioni` · firma secondaria `Blue Arroyo Group`, Firenze)

---

## 0. Priorità Assoluta: Compliance Legale & Posizionamento (Prima del Design)
1. **Conformità Legale (TUF / CONSOB / Regolamento UE Crowdfunding):**
   - **VIETATO** pubblicare offerte pubbliche di investimento, "ticket da 100.000 €", "crowdfunding chiuso", "club deal SPV" o promesse di rendimenti finanziari / IRR target (es. "14,5%–18,2%") senza verifica legale e prospetto/piattaforma autorizzata.
   - Qualsiasi riferimento a investitori deve rimanere **neutro/informativo** in fondo al sito (es. *"Partnership immobiliari per operatori professionali su invito"*), mai come sollecitazione al pubblico.
   - **VIETATO** pubblicare numeri di track record non documentabili (es. "18,4 M€"). Ogni cifra sul sito deve essere reale e verificabile (fasce di costo parametriche di cantiere `1.350–2.400 €/m²`, tempi contrattuali, garanzie di legge).
2. **Separazione dei Pubblici (Committenti al 1° Posto):**
   - **Percorso Principale (A — Core Business):** **Proprietari di immobili, albergatori e imprenditori ricettivi** che devono ristrutturare, frazionare o convertire un immobile in hotel, agriturismo, appartamenti per affitti brevi/medi o residenza.
   - **Promessa in una frase:** *"Trasformiamo il tuo immobile in una struttura ricettiva pronta a rendere: prezzo fisso, tempi garantiti, gestione inclusa."*
   - **Vantaggio Unico del Gruppo ("Dal cantiere agli ospiti"):** Progetto, cantiere, arredo e successiva gestione ricettiva (pulizie, prenotazioni, accoglienza ospiti tramite il gruppo Blue Arroyo) in un unico interlocutore.

---

## 1. Settings Core — Le 11 Regole Permanenti di Design & Sviluppo ("Flow 2026 · Toscana Contemporanea")

### 1) Flow 2026, Non 2000
- Il sito è un racconto continuo: ogni sezione porta in modo naturale alla successiva.
- Layout editoriali, ampi spazi, tipografia forte e immagini grandi.
- **Vietati:** caroselli automatici, pop-up all'ingresso, muri di testo, griglie di card tutte uguali, icone generiche, ombre pesanti, gradienti decorativi ed effetti da template.

### 2) Blocco Clean: Moderno e Pulito
- **Una sola idea per sezione** e **una sola azione principale per schermata**.
- Griglia coerente e spaziatura costante basata su **multipli di `8 px`** (`8, 16, 24, 32, 48, 64, 96, 128 px`).
- Massimo **2 famiglie di font** (`Cormorant Garamond` per i titoli e `Inter` per testo, numeri e bottoni).
- Rimuovere tutto ciò che non aiuta l'utente a capire o ad agire (*"Cosa posso togliere?"*).

### 3) Niente Emoji
- **Nessuna emoji** in testi, titoli, bottoni, menu o messaggi.
- Usare icone SVG minimali solo se migliorano la comprensione e sempre nello stesso stile a tratto sottile.

### 4) Testi Chiari
- Frasi brevi e parole semplici; il titolo deve far capire in 3 secondi cosa offriamo e a chi.
- Testo base di almeno `16 px` (`1rem`), `18 px` (`1.125rem`) nei paragrafi lunghi.
- Interlinea di almeno `1.5` (`1.6` nei paragrafi) e massimo `68–70` caratteri per riga (`max-width: 68ch`).
- **Niente frasi intere in maiuscolo** (nessun `text-transform: uppercase`).

### 5) Bottoni Grandi
- **Altezza minima:** `56 px` su telefono (`<= 768px`) e `48 px` su desktop (`> 768px`).
- **Testo:** almeno `16 px` (`1rem`), con un verbo chiaro (*"Richiedi lo studio gratuito"*, *"Prenota la Masterclass con l'esperto"*, non *"Scopri di più"*).
- **Spazio:** almeno `8 px` (`12 px` standard) tra elementi cliccabili.
- **Stati visibili:** `:hover`, `:focus-visible` (contorno `3px solid #1F1B16`), `:active` e `:disabled` sempre chiaramente distinguibili.

### 6) Colori e Contrasto Verificato (WCAG AA)
Usare esclusivamente i colori della palette definiti come variabili CSS, tutti verificati per contrasto `>= 4.5:1` (testo) e `>= 3.0:1` (controlli e testo grande):
```css
:root {
  --stone: #F6F1E9;            /* Sfondo principale (contrasto con --ink: 15.1:1) */
  --paper: #FFFFFF;            /* Sfondo superfici editoriali (contrasto con --ink: 17.1:1) */
  --ink: #1F1B16;              /* Testo principale, titoli e footer */
  --muted: #5C544B;            /* Testo secondario (contrasto su --stone: 6.59:1, su --paper: 7.45:1) */
  --terracotta: #9E421B;       /* Azione principale e parola chiave in corsivo (contrasto con #FFF: 6.70:1, su --stone: 5.70:1) */
  --terracotta-hover: #7D3314; /* Stato hover primario (contrasto con #FFF: 8.85:1) */
  --olive: #4E5332;            /* Etichette e garanzie (contrasto con #FFF: 7.92:1, su --stone: 7.01:1) */
  --line: #C7BCA9;             /* Divisori strutturali */
  --border-control: #756B5E;   /* Bordi di input, chip e bottoni secondari (contrasto su --stone: 4.52:1 >= 3.0:1) */
  --overlay: rgba(31, 27, 22, 0.72); /* Velo sopra foto e video (contrasto testo bianco >= 7.5:1 in ogni fotogramma) */
}
```

### 7) Telefono Prima di Tutto (Mobile-First) — Il Design Non Si Taglia Mai
- Progettare prima per il telefono (`320, 360, 390, 430 px` + `844x390` orizzontale), poi adattare a tablet (`768, 1024 px`) e desktop (`1440 px`).
- Zero scroll orizzontale nativo senza usare `overflow: hidden` o `overflow-x: hidden`/`clip` su `html` e `body`; dimensioni fluide con `%`, `clamp()`, `flex` e `grid` con `min-width: 0` sui figli.
- Per le altezze a tutto schermo usare `svh` o `dvh`, mai `100vh`. Vietato usare `100vw` per la larghezza dei contenitori.
- Margini laterali della pagina: `max(16px, env(safe-area-inset-left))` a sinistra e `max(16px, env(safe-area-inset-right))` a destra; rispettare `env(safe-area-inset-top)` e `env(safe-area-inset-bottom)` e `scroll-padding-top: 88px`.

### 8) Immagini Organiche e Oneste
- Foto reali di cantieri, materiali e lavoro vero con luce naturale e resa cromatica coerente.
- Alternare aperture a tutto schermo, dettagli ravvicinati e composizioni asimmetriche.
- Etichettare sempre i render come **`Render di progetto — Cantiere in avvio`**.

### 9) Scroll, Video e Movimento a 60 fps
- Movimento narrativo: rivelazioni allo scroll, sezione fissata (`position: sticky`) con contenuto che scorre, zoom leggero dell'immagine di apertura.
- Animare solo `transform` e `opacity` a `60 fps`; rispettare `@media (prefers-reduced-motion: reduce)` con versione statica completa.
- Video in autoplay solo muti (`muted playsinline loop`) con attributo `poster` e velo di contrasto.

### 10) Marchio e Glossario Aziendale ("Parole Nostre")
Usare con coerenza in tutto il sito il vocabolario proprietario di **Toscan Costruzioni**, spiegando ogni termine la prima volta che compare:
- **Metodo Toscan:** Il sistema di appalto chiavi in mano che unisce in un solo contratto progetto, pratiche edilizie, cantiere a prezzo bloccato, arredo e avvio della gestione ospiti.
- **Prezzo Chiuso Toscan:** L'importo totale dei lavori bloccato alla firma del computo metrico esecutivo, con ogni imprevisto tecnico di cantiere a carico di Toscan Costruzioni.
- **Percorso a 5 SAL:** Il piano di pagamento protetto in 5 Stati di Avanzamento Lavori (15% avvio, 25% strutture, 25% impianti, 25% finiture, 10% collaudo) pagati solo a opere verificate.
- **Masterclass di Cantiere:** La sessione individuale di 60 minuti (`150 €`, interamente scalati dai lavori) con uno dei 4 direttori di settore (Geometra, Business Plan e Banche, Amministrazione SAL, Pre-Sales) per validare l'operazione prima di impegnare il capitale.
- **Pre-Sales Cantiere:** La strategia per vendere o affittare le unità immobiliari già durante i lavori grazie a layout ricettivo, render e unità campione.
- **Ciclo Blue Arroyo:** Il passaggio diretto dell'immobile finito alle società del gruppo: **itassistance** (conformità CIN/Questura e tariffe), **Blue Arroyo Cleaning** (biancheria a 60°C e kit gratuiti) e **SmartsBookings** (prenotazioni dirette con incasso all'85%).

### 11) Qualità Tecnica
- Immagini con dimensioni `width` e `height` dichiarate, `loading="lazy"` sotto la prima schermata, layout stabile (zero CLS), HTML semantico, navigazione da tastiera e contenuto principale interamente leggibile senza JavaScript.

---

## 2. Struttura Obbligatoria della Home (Percorso Committente)
1. **Menu (max 5 voci + 1 CTA):** `Servizi` · `Progetti` · `Come lavoriamo` · `Chi siamo` · `Contatti` + pulsante **`Studio di fattibilità`**.
2. **Hero:** Titolo *"Trasformiamo il tuo immobile in una struttura che rende. *Prezzo fisso*, tempi garantiti."* + 1 sola CTA primaria (*"Studio di fattibilità gratuito in 48h"*) + link secondario (*"Guarda i lavori"*).
3. **Barra di fiducia:** Garanzia decennale · Prezzo fisso a contratto · Penali per ritardo · Polizza CAR e RC · Regolarità DURC / Cassa Edile.
4. **Cosa facciamo (4 card):** Hotel e boutique hotel · Agriturismi e wine resort · Appartamenti per affitti brevi · Ristrutturazioni e cambi d'uso.
5. **Progetti (Casi Studio con Slider PRIMA/DOPO trascinabile e accessibile da tastiera):** problema → intervento → numeri (m², mesi, fascia costo) → foto prima/dopo → CTA.
6. **Come lavoriamo (Timeline interattiva delle 6 fasi):** 1. Fattibilità (48h) → 2. Progetto e permessi → 3. Cantiere → 4. Arredo → 5. Consegna → 6. Gestione ospiti + **Contratto tipo** con penali ritardo consultabile/scaricabile.
7. **Stima rapida in 3 domande:** (1) Tipo immobile, (2) Metri quadri, (3) Livello di finitura → fascia di costo `€/m²` indicativa (sempre etichettata come *stima indicativa, non preventivo*) → CTA *"Ricevi lo studio di fattibilità gratuito"*.
8. **Il vantaggio del gruppo ("Dal cantiere agli ospiti") + Palette Materiali (Pietra serena, Cotto, Rovere, Intonaco a calce).**
9. **Il Team e le Credenziali:** figure tecniche reali, ruoli, esperienza.
10. **Testimonianze e Mappa della Toscana SVG cliccabile.**
11. **FAQ chiare** (costi €/m², tempi, permessi, bonus edilizi, garanzie).
12. **CTA finale con Form breve in 2 step:**
    - Step 1: Tipo di immobile [chip selezionabili], Dove si trova l'immobile?, Metri quadri indicativi, Qual è il tuo obiettivo? [chip].
    - Step 2: Nome e cognome, Email, Telefono o WhatsApp, Note facoltative.
    - Bottone: **`Richiedi lo studio gratuito`** + 3 rassicurazioni: *Risposta entro 24h · Sopralluogo gratuito · Nessun impegno*.
13. **Barra fissa in basso:** visibile **SOLO su mobile** (*"Studio gratuito"* + *WhatsApp*), nascosta su desktop e quando il form è visibile.

---

## 3. Pagina `/styleguide` e SEO/GEO
- Mantenere attiva `/styleguide` (`styleguide.html`, `noindex`) con i design token e tutti i componenti riutilizzabili (`Button`, `ProjectCard`, `BeforeAfter`, `Timeline`, `Chip`, `FormStep`, `FAQ`, `Testimonial`).
- Applicare la regola SEO/GEO del gruppo su tutte le pagine pubbliche (HTML leggibile senza JS, JSON-LD `HomeAndConstructionBusiness`/`GeneralContractor`, `Service`, `FAQPage`, `BreadcrumbList`, NAP coerente: `Blue Arroyo S.r.l. – Sede legale: Via Matteo Palmieri 20R, Firenze | P.IVA / C.F. 07480210488 · REA FI-706161 · SDI M5UXCR1 · PEC: [DA CONFERMARE] · Capitale sociale: [DA CONFERMARE] | Riferimento Toscan Costruzioni (D5): [DA CONFERMARE] | +39 351 038 0392 | toscancostruzioni@bluearroyo.it`).

---

## 4. Metodo Permanente "Piano degli Input" (5 Fasi) & Matrice Ruoli × Attività

### Metodo Operativo in 5 Fasi (Ordine Obbligatorio)
1. **PRIMA i ruoli interni (Team/Azienda):** 1. Direzione/Admin (`?role=dir`), 2. Vendite (`?role=sales`), 3. Operativo/Field (`?role=tech`, mobile-first), 4. Amministrazione (`?role=admin`, desktop), 5. Assistenza & Ospiti Blue Arroyo (`?role=hosp`).
2. **POI i ruoli esterni:** Prospect Committente (capisce → si educa → acquista in 3 clic), Cliente Attivo, Ospite Finale, Partner/Fornitore.
3. **Le 5 Fasi sequenziali:**
   - **FASE 1 – CONTROLLA (Audit):** misura clic/tap, campi a mano, schermate, tempo, duplicati e blocchi.
   - **FASE 2 – TOGLI:** elimina il superfluo, rendi facoltativo ciò che non blocca, applica la regola **"Ogni dato si inserisce una sola volta"** (`localStorage` `tc_active_commessa_v1` + parametri URL `?type=&city=&sqm=&cliente=` tra Console, `/preventivo-tipo`, `/data-room` e `/#contatti`).
   - **FASE 3 – OTTIMIZZA:** una "Home" pulita per ruolo, chip a 1 tap al posto di testo libero o `<select>`.
   - **FASE 4 – VELOCIZZA:** obiettivo misurabile **−50% di clic e di tempo** rispetto alla Fase 1 (azioni combinate in 1 tap: WhatsApp + CRM insieme).
   - **FASE 5 – CREA:** aggiungi nuove funzioni solo se risolvono un bisogno reale non coperto dalle fasi 2–4, indicando ruolo, clic/tempo risparmiati e costo di sviluppo.

### Matrice Permanente Ruoli × Attività (Prima vs Dopo Fasi 2–4)

| Ruolo | Attività Ricorrente | Route / Strumento | PRIMA (Clic · Campi · Tempo) | DOPO (Clic · Campi · Tempo) | Risparmio |
| :--- | :--- | :--- | :---: | :---: | :---: |
| **1. Direzione / Admin** | Controllo KPI commessa e approvazione preventivo/contratto | `/kit-commerciale?role=dir` | 12 clic · 3 campi · 10 min | **1 tap · 0 campi · 15 sec** | **−92% clic / −97% tempo** |
| **1. Direzione / Admin** | Autorizzazione emissione fattura SAL / fee Partner | `/kit-commerciale?role=dir` | 10 clic · 4 campi · 10 min | **1 tap · 0 campi · 15 sec** | **−90% clic / −97% tempo** |
| **2. Vendite (Giuliano)** | Da qualifica / lead inbound a Preventivo PDF + WA + CRM | `/kit-commerciale?role=sales` | 9–11 clic · 5 campi · 4 min | **2 tap · 0–1 campo · 20 sec** | **−80% clic / −91% tempo** |
| **2. Vendite (Giuliano)** | Invio messaggio Outbound Partner pre-intestato (4 canali) | `/kit-commerciale?role=sales` | 7 clic · 2 correzioni · 3 min | **2 tap · 0 campi · 20 sec** | **−71% clic / −89% tempo** |
| **3. Operativo / Field** | Invio Report Fotografico del Venerdì + aggiornamento SAL | `/kit-commerciale?role=tech` | 8 clic · 2 campi · 5 min | **2 tap · 0 campi (chip) · 30 sec** | **−75% clic / −90% tempo** |
| **3. Operativo / Field** | Segnalazione urgente cantiere (materiali / variante / sblocco SAL) | `/kit-commerciale?role=tech` | 10+ clic · testo · 6 min | **1 tap (chip) · 0 campi · 15 sec** | **−90% clic / −95% tempo** |
| **4. Amministrazione** | Generazione Contratto Tipo con i 5 SAL calcolati in Euro | `/kit-commerciale?role=admin` → `/data-room` | 14 clic · 8+ campi · 22 min | **2 clic · 0 campi · 30 sec** | **−86% clic / −97% tempo** |
| **4. Amministrazione** | Invio avviso emissione fattura SAL + conferma DURC al cliente | `/kit-commerciale?role=admin` | 10 clic · 5 campi · 10 min | **1 tap · 0 campi · 20 sec** | **−90% clic / −96% tempo** |
| **5. Assistenza & Ospiti** | Passaggio Cantiere → Ospiti Blue Arroyo + messaggio al proprietario | `/kit-commerciale?role=hosp` | 7 clic · testo statico · 4 min | **1 tap · 0 campi · 20 sec** | **−85% clic / −91% tempo** |
| **5. Assistenza & Ospiti** | Assegnazione ticket assistenza post-cantiere al Direttore Tecnico | `/kit-commerciale?role=hosp` | 9 clic · testo libero · 8 min | **1 tap (chip) · 0 campi · 15 sec** | **−89% clic / −96% tempo** |
| **Esterno: Prospect** | Stima €/m² → Distinta PDF → Richiesta studio gratuito in 48h | `/#stima-rapida` → `/preventivo-tipo` → `/#contatti` | 9 clic · 7 campi · 3,5 min | **3 clic · 2 campi (`Nome`+`Tel`) · 35 sec** | **−67% clic / −83% tempo** |
| **Esterno: Prospect (F5.2)** | Accettazione digitale stima preliminare da link inviato da Vendite | `/preventivo-tipo?cliente=...` | 8 clic · 4 campi · 10 min | **1 tap · 0–1 campo · 15 sec** | **−88% clic / −97% tempo** |
| **Esterno: Prospect / Cliente** | Approvazione schema contrattuale a 5 SAL in Euro | `/data-room?cliente=...` | 10 clic · email esterna · 15 min | **1 tap · 0 campi · 15 sec** | **−90% clic / −98% tempo** |
| **Esterno: Cliente Attivo** | Controllo piano 5 SAL in € e richiesta verbale SAL + DURC | `/stato-cantiere` e `/data-room` | 7 clic · messaggio manuale · 5 min | **1 tap · 0 campi · 15 sec** | **−86% clic / −95% tempo** |
| **Esterno: Cliente Attivo (F5.3)** | Consultazione Report del Venerdì, avanzamento 5 SAL e attivazione Blue Arroyo | `/stato-cantiere?cliente=...&sal=...` | 10+ messaggi WA sparsi · 12 min | **1 tap da link WA · 0 campi · 20 sec** | **−90% clic / −97% tempo** |
| **Interno: Vendite (F5.1)** | Presa in carico lead inbound da notifica `n8n` a Console già compilata | `link_console_vendite_1tap` → `/kit-commerciale` | 11 clic · 5 campi ridigitati · 4 min | **1 tap su link notifica · 0 campi · 10 sec** | **−91% clic / −96% tempo** |
| **Interno: Vendite (CRM Tabella 1)** | Cold Calling Investitore + Offerta Micro-Servizio Step A + Invio Articolo Blog su WA + CRM | `/kit-commerciale?role=sales` | 12 clic · 5 campi · 6 min | **1 tap su riga CRM · 0 campi · 15 sec** | **−92% clic / −96% tempo** |
| **Esterno: Investitore / Prospect (Leva 1)** | Prenotazione Masterclass di Cantiere (Step 1: `150 €` scalati + Slot Orario + Voucher) dal Blog | `/blog?mc=...&cliente=...#prenota-step-a` | 9 clic · 6 campi · 4 min | **1 tap da link WA pre-compilato · 0–2 campi · 15 sec** | **−88% clic / −94% tempo** |
| **Interno: Sinergia Gruppo (Leva 2)** | Proposta Riqualificazione Invernale ADR (`itassistance`/`Cleaning` → `Toscan Costruzioni`) | `/kit-commerciale?role=hosp` | 11 clic · 5 campi · 8 min | **1 tap (chip) · 0 campi · 15 sec** | **−91% clic / −97% tempo** |
| **Esterno: Prospect / Investitore (Leva 3)** | Scelta Scaglione (`150 €`/`950 €`/`2.200 €`) + Leva Bancaria SAL (65%) + Payout 85% SmartsBookings | `/preventivo-tipo` → `/blog?mc=1B` | 10 clic · 4 campi · 10 min | **1 tap · 0 campi · 15 sec** | **−90% clic / −97% tempo** |
| **1. Direzione / Governance** | Qualifica e Approvazione Membro Area Riservata (Tutela Co-Investitori · Accesso da 2.000 €) | `/kit-commerciale?role=dir` | 10 clic · 4 campi · 8 min | **1 tap · 0 campi · 12 sec** | **−90% clic / −97% tempo** |
| **Esterno: Membro Approvato (Cipolla L1–L4)** | Navigazione Area Riservata Post-Login (5 SAL, Documenti, Allocazione Cantieri da 2.000 €) | `/stato-cantiere#/livello-1` | 11 clic · pagina unica caotica · 8 min | **3 tap guidati (Livelli 1→4) · 1 chip · 25 sec** | **−73% clic / −95% tempo** |
| **Esterno: Partner / Fornitore** | Segnalazione immobile e generazione Accordo Partner (2–3%) | `/partner#attiva-partner` | 9 clic · 7 campi impropri · 4 min | **2 tap · 2 campi (`Studio`+`Tel`) · 25 sec** | **−78% clic / −90% tempo** |

---

## 6. Sistema CRM Prima Tabella (Investitori), Acquisto Scaglionato per Disponibilità Economica & Blog Autonomo 3x/Settimana (`/blog`)
1. **Scala di Acquisto Scaglionato in base alla Disponibilità Economica (Dal Primo Step Molto Accessibile "Masterclass Call" fino all'Appalto Completo):**
   - **Step 1 (Ingresso Molto Accessibile · `150 €`, 100% scalato): "Masterclass Call" 1-to-1 (60 min) con gli Esperti della materia che più interessa al cliente:**
     - **Masterclass 1A · Geometra & Parte Tecnica Preliminare:** fattibilità urbanistica, frazionamenti, cambi d'uso, altezze, scarichi e vincoli Soprintendenza prima dell'acquisto.
     - **Masterclass 1B · Business Plan & Come Fare Leva con le Banche:** strutturazione del conto economico immobiliare/ricettivo e dossier bancario (mutuo acquisto + SAL edilizio) per operare in leva senza immobilizzare tutta la liquidità.
     - **Masterclass 1C · Amministrazione Cantiere, Contratti & 5 SAL:** come funziona economicamente il cantiere, contratti a prezzo fisso con penali, controllo dei 5 SAL, DURC, Cassa Edile, Polizza CAR e gestione fornitori.
     - **Masterclass 1D · Sales: Come Vendere un Cantiere in Pre-Sales:** come pre-vendere o pre-affittare le unità sulla carta durante i lavori tramite layout ricettivo, render, capitolato e canale Gruppo Blue Arroyo.
     - *Durante la Masterclass Call, i tecnici e gli incaricati fanno la loro magia di vendita, accompagnando il cliente allo step successivo in base al suo budget.*
   - **Step 2 (Budget Preliminare · `950–1.800 €`, 100% scalato):** Sopralluogo del Geometra sull'immobile + Verifica Tecnica Pre-Rogito + Business Plan Bancabile.
   - **Step 3 (Budget Progettuale & Pre-Sales · `2.200–4.200 €`, 100% scalato):** Interior Design + Kit Pre-Sales (Render + Pratiche CILA/SCIA + Computo Esecutivo Bloccato al centesimo).
   - **Step 4 (Budget Graduale):** Realizzazione Lotto Pilota / Unità Campione a Prezzo Fisso (per mostrare l'immobile finito a banche e acquirenti Pre-Sales).
   - **Step 5 (Operazione Completa Chiavi in Mano · `1.350–2.400 €/m²` in 5 SAL):** Appalto Completo + Ciclo Virtuoso Gruppo Blue Arroyo (`1. Toscan Costruzioni crea il bene` → `2. itassistance lo protegge` → `3. Blue Arroyo Cleaning lo allestisce` → `4. SmartsBookings lo riempie di turisti`).
2. **Motore Editoriale & Blog Autonomo (`/blog` — 3 Pubblicazioni a Settimana: Lunedì, Mercoledì, Venerdì):**
   - Insegna al cliente da zero come funziona davvero un'impresa di costruzioni, sempre con il box pratico ***"Cosa farei io se l'immobile fosse mio"*** e l'invito diretto al Micro-Servizio associato:
     - **Lunedì (*Il Consulente di Sviluppo, Acquisti & Transazioni Immobiliari*):** fattibilità pre-rogito, frazionamenti, cambi d'uso e business plan ricettivo.
     - **Mercoledì (*Il Direttore di Cantiere*):** dietro le quinte del cantiere, perché i preventivi bassi raddoppiano, varianti, 5 SAL, DURC, impianti e isolamento acustico.
     - **Venerdì (*L'Architetto & Interior Designer Ricettivo*):** layout distributivo, bagni en-suite, materiali toscani durevoli e arredo che alza la tariffa media giornaliera (ADR).

---

## 5. Architettura Ufficiale del Gruppo Blue Arroyo (4 Aziende Autonome × 3 General Directors)

### Il Ciclo Virtuoso del Gruppo (Manifesto Ufficiale in 4 Passi)
```text
1. TOSCAN COSTRUZIONI crea il bene
   └─► Consegna un appartamento nuovo, cablato e collaudato che non ha bisogno di riparazioni per anni.
        │
2. ITASSISTANCE lo protegge
   └─► Lo rende immediatamente conforme alla legge (Questura e Comune) e ne ottimizza le tariffe dinamiche.
        │
3. BLUE ARROYO CLEANING lo allestisce
   └─► Lo trasforma in una suite d'albergo con biancheria a 60°C, kit biologici e spugne sigillate a costo zero per il PM.
        │
4. SMARTSBOOKINGS lo riempie di turisti
   └─► Vende le notti senza regalare il 20% alle multinazionali OTA, restituisce il 15% di cashback all'ospite e bonifica l'85% al proprietario.
```
Ogni General Director (`1. GD Operatività`, `2. GD Amministrazione`, `3. GD Vendite`) ha il suo cruscotto, i suoi numeri e i suoi obiettivi autonomi, **ma tutto il valore rimane all'interno del Gruppo Blue Arroyo**:

| Ordine | Azienda del Gruppo | Cliente Target Primario | Problema Risolto & Output Specifico | I 3 General Directors (Autonomia) | Come Aiuta / Riceve Aiuto nel Gruppo (Sinergia) |
| :-: | :--- | :--- | :--- | :--- | :--- |
| **1** | **Toscan Costruzioni**<br>(`toscancostruzioni.it`) | **Investitori & Committenti Immobiliari**<br>*(che investono per creare o valorizzare immobili a reddito, nel rispetto TUF/CONSOB)* | Trasforma immobili grezzi in asset ricettivi chiavi in mano con **prezzo fisso a corpo (`1.350–2.400 €/m²`)**, tempi garantiti con penali (`5–12 mesi`), pagamento in **5 SAL** e polizza CAR/Decennale. | • **GD Vendite**<br>• **GD Operatività**<br>• **GD Amministrazione** | **Aiuta 2, 3 e 4:** crea nuovi immobili già dotati di CIN, DM 37/08, serrature smart e vani Runner/biancheria.<br>**Riceve da 2 e 3:** segnalazioni di immobili da ristrutturare o frazionare. |
| **2** | **itassistance**<br>(`itsdreamteam.com`) | **Property Manager (PM) & Proprietari** | Elimina sanzioni e lavoro manuale: Alloggiati Web `.TXT` 24h, ISTAT Ross1000, Tassa Soggiorno, **Matrice Prezzi 14gg (`+420 €/mese`)**, 6 Generatori PDF in 1 clic e **Report Mattutino ore `08:00`**. | • **GD Vendite**<br>• **GD Operatività**<br>• **GD Amministrazione** | **Aiuta 1:** segnala immobili in gestione che necessitano di riqualificazione per alzare l'ADR.<br>**Aiuta 3 e 4:** sincronizza calendari check-in/out per le pulizie e il canale chiuso. |
| **3** | **Blue Arroyo Cleaning Co.**<br>(`PBA` · Palazzo Blue Arroyo) | **Property Manager (PM)**<br>*(che gestiscono per conto dei proprietari)* | Garantisce a Firenze (`Blue Arroyo S.r.l. – Sede legale: Via Matteo Palmieri 20R, Firenze`) **100% turnover chiusi entro le 15:00**, biancheria igienizzata a `60°C`, forniture bagno/cucina, **Dossier Foto SHA-256** anti-rimborsi OTA e fattura unica SDI (`M5UXCR1`). | • **GD Vendite**<br>• **GD Operatività**<br>• **GD Amministrazione** | **Aiuta 1:** esegue le pulizie di fine cantiere e presenta i PM clienti B2B che acquisiscono nuovi immobili da ristrutturare.<br>**Aiuta 2 e 4:** garantisce alloggi immacolati per turisti e PM. |
| **4** | **SmartsBookings**<br>(`smartsbookings.com`) | **I Turisti / Viaggiatori** | Offre al turista il **prezzo più basso garantito** (zero ricarichi OTA), il **15% di cashback reale** a 48h dal soggiorno e il **servizio Runner valigie** (mani libere da casa a casa), garantendo **Payout 85% entro le 12:00** del check-out. | • **GD Vendite**<br>• **GD Operatività**<br>• **GD Amministrazione** | **Aiuta 1, 2 e 3:** porta domanda turistica diretta ad alto margine (`+15–25%` netto) che massimizza il rendimento degli immobili costruiti da `1` e gestiti/puliti da `2` e `3`. |

---

## 7. Regola Permanente Post-Login: SISTEMA CIPOLLA (Livelli 0–4) & Accesso Riservato Membri Approvati (da 2.000 €)

### 7.1 Regola di Accesso e Tutela dei Co-Investitori (Area Privata vs Sito Pubblico)
1. **Livello 0 (Sito Pubblico — `index.html`, `blog.html`):**
   - Nessuna offerta finanziaria pubblica sul sito aperto: presenta i servizi edili chiavi in mano (`1.350–2.400 €/m²`), la **Masterclass di Cantiere** (`150 €`), lo studio di fattibilità gratuito e l'accesso all'Area Riservata per i membri qualificati.
2. **Area Privata Post-Login (`/stato-cantiere` e `/kit-commerciale` — Membri Già Approvati):**
   - **Filtro di Tutela Co-Investitori:** Per partecipare al crowdfunding chiuso sui cantieri in corso di apertura, ogni membro deve essere **prima esaminato e approvato dal profilo di Governance dedicato (Direzione / Compliance)**, così da tutelare tutti gli altri investitori del gruppo.
   - **Accesso Riservato:** L'Area Privata è destinata **esclusivamente a membri già approvati**, con possibilità di allocare capitali sui **Cantieri in Corso di Apertura a partire da 2.000 € in su** (oltre a monitorare i propri cantieri attivi e i 5 SAL).
   - Se un utente non è ancora approvato, vede lo stato **"In attesa di qualifica del profilo"** e può solo inviare la richiesta di verifica al Direttore preposto.

### 7.2 Architettura Obbligatoria del SISTEMA CIPOLLA (Livelli 0–4)
Non mostrare mai tutto insieme: l'utente apre un livello alla volta e vede solo ciò che gli serve in quel momento.

- **Livello 0 — Sito Pubblico:** spiega cosa offriamo e porta allo studio di fattibilità o al login dell'Area Riservata.
- **Livello 1 — Home dopo il login:**
  - Saluto o titolo breve con badge di **Membro Approvato** (o ruolo interno).
  - Una sola riga che indica lo stato o la cosa più importante da fare oggi.
  - Una sola azione principale in evidenza.
  - Da **3 a 5 grandi blocchi**, uno per area (ciascuno con titolo, una riga descrittiva e un dato chiave).
- **Livello 2 — Pagina dell'area:**
  - Titolo chiaro + una frase che spiega a cosa serve + riepilogo essenziale + massimo **4 o 5 bottoni** dedicati a quell'area.
- **Livello 3 — Dettaglio:**
  - Solo le informazioni dell'elemento scelto (es. singolo SAL o singolo Cantiere in corso di apertura da 2.000 €).
  - Contenuti secondari raccolti in sezioni espandibili (`<details>`) o schede + azioni pertinenti.
- **Livello 4 — Azione:**
  - Una sola attività per schermata (compilare, confermare, caricare o prenotare quota da 2.000 €).
  - Moduli divisi in passaggi con indicatore **"Passaggio X di Y"**, seguiti da conferma chiara e passo successivo.

### 7.3 Regole di Navigazione Multi-Livello e Misure da Telefono
- **Header fisso (`56 px`):** titolo del livello corrente e bottone **Indietro** nei livelli 2, 3 e 4 (sincronizzato con URL `#/livello/...` e tasto Indietro del telefono `popstate`, preservando scroll e dati inseriti).
- **Barra inferiore fissa (`>= 64 px` + `env(safe-area-inset-bottom)`):** massimo **4 o 5 voci** sempre uguali con icona SVG a tratto sottile ed etichetta chiara.
- **Misure mobile-first (`320–1440 px`):** margini laterali `16 px`, una sola colonna su telefono, bottoni principali alti `56 px` (`100%` larghezza su mobile), aree toccabili `>= 48 × 48 px` distanziate di almeno `8 px`, input `>= 16 px`, tabelle trasformate in schede su telefono, pannelli dal basso (`max-height: 90dvh`), zero scroll orizzontale e stati completi (Caricamento, Stato vuoto, Errore, Conferma).

---

## 8. REGOLA BASE PERMANENTE — IL DESIGN NON SI TAGLIA MAI (Priorità Assoluta sul Layout)

Questa regola vale per ogni progetto, pagina, componente e modifica, e ha priorità su qualsiasi scelta estetica.

### 8.1 Obiettivo
Su ogni schermo devono restare completamente visibili e utilizzabili: logo, menu hamburger, bottoni, testi, bordi, schede, immagini importanti, tabelle e finestre.
Se un elemento non entra, il layout deve adattarsi: va a capo, si impila o passa al livello successivo della cipolla. Non deve mai essere tagliato, rimpicciolito fino a diventare illeggibile o spinto fuori schermo.

### 8.2 Fase 1 — Controllo Iniziale
Prima di modificare il codice:
1. Apri il progetto alle larghezze indicate sotto.
2. Trova ogni elemento che esce dallo schermo o viene tagliato.
3. Identifica la causa nel codice.
4. Correggi la causa nel componente condiviso, non con eccezioni pagina per pagina.

### 8.3 Base Tecnica Obbligatoria
- Meta viewport: `width=device-width, initial-scale=1, viewport-fit=cover`.
- Imposta `box-sizing: border-box` su tutti gli elementi.
- Progetta prima per il telefono, poi amplia per schermi maggiori.
- Usa `flex` e `grid` con `gap`, `min-width: 0` sui figli e dimensioni fluide.
- Immagini, video, iframe e SVG: `max-width: 100%`.
- Margini laterali della pagina: `max(16px, env(safe-area-inset-left))` a sinistra e `max(16px, env(safe-area-inset-right))` a destra.
- Rispetta anche le aree sicure in alto e in basso (`env(safe-area-inset-top)`, `env(safe-area-inset-bottom)`).
- Altezze a schermo intero: usa `dvh` o `svh`.

### 8.4 Vietato
- Usare `100vw` per la larghezza dei contenitori.
- Impostare `width` o `min-width` fissi che superano lo schermo.
- Usare margini negativi o `transform` che portano contenuti fuori dallo schermo.
- Usare `overflow: hidden` o `overflow-x: hidden` (o `overflow-x: clip`) su `html` e `body` per nascondere il problema.
- Usare `white-space: nowrap` su testi lunghi senza verificare che entrino.
- Posizionare header, menu o bottoni con coordinate fisse o `position: absolute` che causano sovrapposizioni o fuoriuscite.
- Bloccare lo zoom con `user-scalable=no` o `maximum-scale=1`.

### 8.5 Header e Menu Hamburger
- Struttura consigliata: `grid-template-columns: auto minmax(0, 1fr) auto`.
- Hamburger: area di almeno `48 x 48 px`, sempre interamente visibile e con `flex-shrink: 0`.
- Logo: si adatta allo spazio disponibile senza spingere l'hamburger fuori.
- Header e icone rispettano i margini laterali e le aree sicure.
- Il menu aperto occupa la larghezza disponibile e scorre verticalmente se le voci sono tante.
- Il bottone di chiusura e tutte le voci restano raggiungibili anche con schermo basso o in orizzontale.

### 8.6 Bordi, Schede e Componenti Larghi
- Schede e pannelli: `width: 100%`, `max-width: 100%`. Tutti e quattro i bordi devono restare visibili.
- Le ombre non devono essere tagliate dai contenitori.
- Tabelle: su telefono diventano schede. Se una tabella deve restare tale, solo la tabella scorre dentro il proprio contenitore.
- Calendari, tab e filtri: adattali al telefono oppure rendi chiaro lo scorrimento interno, senza far scorrere la pagina.
- Finestre e pannelli: larghezza entro lo schermo, altezza massima `90dvh`, scroll interno e chiusura sempre visibile.
- Testi lunghi, URL e codici: usa `overflow-wrap: anywhere` dove serve.
- Immagini importanti: non usare `object-fit: cover` se taglia volti, prodotti o testi. Prevedi un'inquadratura per telefono o usa `object-fit: contain`.

### 8.7 Test Obbligatori Dopo Ogni Modifica (`npm run check:mobile`)
Comando `npm run check:mobile` con Playwright eseguito su tutte le pagine pubbliche e interne, con menu e finestre sia chiusi sia aperti, in ogni lingua e ruolo disponibile:
- **Dimensioni:** `320 x 568`, `360 x 800`, `390 x 844`, `430 x 932`, `768 x 1024`, `844 x 390` (telefono orizzontale).
- **Motori:** Chromium con profilo telefono Android e WebKit con profilo iPhone.
- **Il test fallisce se:**
  1. `document.documentElement.scrollWidth` è maggiore di `clientWidth`.
  2. Un elemento visibile ha `left < 0` oppure `right > larghezza dello schermo`, salvo contenuti dentro uno scroller intenzionale.
  3. Hamburger, logo o bottoni principali non sono interamente visibili.
  4. Un testo o controllo risulta tagliato dal contenitore.
  5. Un elemento cliccabile è coperto da un altro.




