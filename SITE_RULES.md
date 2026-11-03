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

## 1. Identità Visiva — "Toscana Contemporanea"
Impaginazione editoriale da rivista di architettura toscana contemporanea: materia, luce naturale, chiarezza.

### Design Token (Unica Fonte CSS Custom Properties)
```css
:root {
  --stone: #F6F1E9;       /* Sfondo principale */
  --paper: #FFFFFF;       /* Sfondo card e superfici */
  --ink: #1F1B16;         /* Testo principale (contrasto WCAG AA >= 4.5:1) */
  --muted: #6E665C;       /* Testo secondario */
  --terracotta: #B4532A;  /* Accento primario, CTA e parola chiave in corsivo (max 10% pagina) */
  --olive: #6B7048;       /* Accento secondario (badge, natura, garanzie) */
  --line: #E4DCCF;        /* Bordi e divisori architettonici */
}
```

### Tipografia & Linguaggio
- **Titoli:** `Cormorant Garamond` (serif display), con **corsivo terracotta su UNA sola parola chiave** per titolo (es. *"Prezzo *fisso*, tempi garantiti"*).
- **Testo e Interfaccia:** `Inter` o `Manrope` (`font-display: swap`).
- **Scala fluida `clamp()`:**
  - `H1`: `clamp(2.5rem, 5vw, 4.5rem)` (`40–72px`)
  - `H2`: `clamp(1.75rem, 3.5vw, 2.75rem)` (`28–44px`)
  - Corpo testo: `16–18px`, `line-height: 1.55`, larghezza riga max `70ch`.
- **Etichette MAIUSCOLE:** solo per eyebrow brevi (max 3 parole, max 1 per sezione). **MAI** per frasi intere né per le label dei form.
- **Italiano chiaro, zero gergo:** vietati anglicismi inutili (`Turnkey EPC`, `Core Focus`, `Deal Flow`, `Capex`, `SPV`, `PBSA`, `Output`) nei titoli e nelle label dei form.

### Spaziatura, Griglia e Fotografia
- Griglia a 12 colonne, `max-width: 1200px`, scala `4/8px`.
- Padding verticale sezioni: `96–160px` desktop, `64–96px` mobile.
- Angoli architettonici: `border-radius: 0–4px`.
- **Onestà Fotografica:** foto reali di cantieri, materiali e prima/dopo; i rendering di progetti in avvio (es. Villa Claudia) devono avere sempre l'etichetta visibile **`Progetto`** o **`Cantiere in avvio — Render di progetto`**.

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
- Applicare la regola SEO/GEO del gruppo su tutte le pagine pubbliche (HTML leggibile senza JS, JSON-LD `HomeAndConstructionBusiness`/`GeneralContractor`, `Service`, `FAQPage`, `BreadcrumbList`, NAP coerente: `Toscan Costruzioni · Blue Arroyo Group | Firenze | +39 351 038 0392 | toscancostruzioni@bluearroyo.it`).

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
| **Esterno: Investitore / Prospect** | Prenotazione Micro-Servizio d'Ingresso (Step A: Interior Design + Business Plan) dal Blog | `/blog#prenota-step-a` | 9 clic · 6 campi · 4 min | **2 tap · 2 campi (`Nome`+`Tel`) · 20 sec** | **−78% clic / −92% tempo** |
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
| **3** | **Blue Arroyo Cleaning Co.**<br>(`PBA` · Palazzo Blue Arroyo) | **Property Manager (PM)**<br>*(che gestiscono per conto dei proprietari)* | Garantisce in ZTL (3 hub fisici) **100% turnover chiusi entro le 15:00**, biancheria igienizzata a `60°C`, forniture bagno/cucina gratuite (`232 €/mese` risparmiati dal PM), **Dossier Foto SHA-256** anti-rimborsi OTA e fattura unica SDI. | • **GD Vendite**<br>• **GD Operatività**<br>• **GD Amministrazione** | **Aiuta 1:** esegue le pulizie di fine cantiere e presenta i PM clienti B2B che acquisiscono nuovi immobili da ristrutturare.<br>**Aiuta 2 e 4:** garantisce alloggi immacolati per turisti e PM. |
| **4** | **SmartsBookings**<br>(`smartsbookings.com`) | **I Turisti / Viaggiatori** | Offre al turista il **prezzo più basso garantito** (zero ricarichi OTA), il **15% di cashback reale** a 48h dal soggiorno e il **servizio Runner valigie** (mani libere da casa a casa), garantendo **Payout 85% entro le 12:00** del check-out. | • **GD Vendite**<br>• **GD Operatività**<br>• **GD Amministrazione** | **Aiuta 1, 2 e 3:** porta domanda turistica diretta ad alto margine (`+15–25%` netto) che massimizza il rendimento degli immobili costruiti da `1` e gestiti/puliti da `2` e `3`. |


