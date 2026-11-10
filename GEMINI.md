# Regole Generali di Progetto & Workflow Operativo — Toscan Costruzioni (Blue Arroyo Group)

> **Riferimento Completo Design & Compliance:** Leggi e applica sempre anche [SITE_RULES.md](file:///Users/julianherrera/Downloads/toscan%20costruzioni/SITE_RULES.md).

## 0. Priorità Assoluta: Compliance Legale (TUF/CONSOB) & Posizionamento Committenti
1. **Divieto di Offerta Pubblica Finanziaria non Autorizzata:**
   - È severamente vietato pubblicare sul sito offerte pubbliche di investimento, "ticket da 100.000 €", "crowdfunding chiuso", "club deal SPV" o promesse di rendimenti/IRR target (es. "14,5%–18,2%") finché non vi sia validazione legale formale.
   - È vietato pubblicare numeri di track record non documentati (es. "18,4 M€"). Tutti i dati pubblicati devono essere reali e verificabili (fasce di costo di ristrutturazione `1.350–2.400 €/m²`, garanzie contrattuali, polizze).
2. **Posizionamento Unico (Percorso A — Proprietari e Albergatori al 1° Posto):**
   - **Promessa in una frase:** *"Trasformiamo il tuo immobile in una struttura ricettiva pronta a rendere: prezzo fisso, tempi garantiti, gestione inclusa."*
   - **Vantaggio Unico del Gruppo ("Dal cantiere agli ospiti"):** Progetto, cantiere, arredo e successiva gestione ricettiva (pulizie, prenotazioni, ospiti tramite il gruppo Blue Arroyo) in un unico gruppo.
   - **CTA Unica Primaria per Pagina:** *"Studio di fattibilità gratuito in 48h"* / *"Richiedi lo studio gratuito"*.

---

## 1. Regola Post-Deploy: Check, Prima/Dopo Ruoli & Step Consigliato (Obbligatoria dopo ogni deploy)
**Dopo ogni deploy** (su Vercel, GitHub o qualsiasi ambiente di produzione/staging), devi **sempre** concludere la risposta con:

1. **Cosa è cambiato e per quali ruoli (`✅ Check Stato Attuale & Ruoli Toccati`):**
   - Riepiloga sinteticamente cosa è cambiato, per quali ruoli (interni: `Direzione`, `Vendite`, `Operativo/Field`, `Amministrazione`, `Assistenza/Ospiti`; esterni: `Prospect`, `Cliente Attivo`, `Ospite`, `Partner/Fornitore`) e verifica il rispetto di [SITE_RULES.md](file:///Users/julianherrera/Downloads/toscan%20costruzioni/SITE_RULES.md).
2. **Prima / Dopo in Clic, Campi e Tempo (`⚡ Impatto Misurabile Prima/Dopo`):**
   - Riporta il confronto numerico in **clic, campi e tempo** per le attività toccate (obiettivo: `−50%` di clic e di tempo rispetto alla Fase 1), più lo stato **`🔍 SEO/GEO: OK`**.
3. **Prossimo Passo Consigliato (`🚀 Prossimo Passo Consigliato`):**
   - Scegli tra: **(a) controllare quanto fatto**, **(b) implementare una nuova funzione**, oppure **(c) chiarire o semplificare il percorso verso il risultato più efficace**, spiegando **in una riga perché**.
   - Mantieni sempre aggiornata la **Matrice del Piano degli Input** in [SITE_RULES.md](file:///Users/julianherrera/Downloads/toscan%20costruzioni/SITE_RULES.md).

---

## 2. REGOLA PERMANENTE – VISIBILITÀ ORGANICA: SEO + POSIZIONAMENTO SULLE IA (GEO)
**Azienda:** Toscan Costruzioni · Piano 1 (`https://toscancostruzioni.it`) — opera sotto `BLUEARROYO S.R.L. – Sede legale: Via Matteo Palmieri 20/R, 50122 Firenze (FI)`
**Posizionamento Unico (Fonte di Verità):** Impresa di costruzioni e general contractor a Firenze e in Toscana specializzato nella ristrutturazione e conversione chiavi in mano di Hotel e boutique hotel, Agriturismi e wine resort, Appartamenti per affitti brevi e medi, e Ristrutturazioni/cambi d'uso, con prezzo fisso a contratto, tempi garantiti con penali, arredo incluso e gestione ricettiva integrata tramite il gruppo Blue Arroyo.
**NAP Ufficiale Unico (JUL-009 / JUL-046 / JUL-055):** `Toscan Costruzioni opera sotto BLUEARROYO S.R.L. – Sede legale: Via Matteo Palmieri 20/R, 50122 Firenze (FI)` | `P.IVA / C.F. 07480210488 · REA FI-706161 · SDI M5UXCR1 · PEC: bluearroyosrl@pec.it · Capitale sociale: € 50.000,00 i.v.` | Tel: +39 351 038 0392 | Email: toscancostruzioni@bluearroyo.it / admin@bluearroyo.it | Web: https://toscancostruzioni.it

### Regole Obbligatorie per Ogni Modifica, Nuova Pagina e Deploy:
1. **Basi Tecniche & HTML Server-Rendered:** Ogni pagina pubblica deve avere contenuto principale, costi indicativi al m², fasi di lavoro e FAQ interamente leggibili nell'HTML sorgente (senza dipendere da JS), `<link rel="canonical">`, `hreflang` corretti, zero link 404, zero `noindex` involontari (eccetto `/styleguide`), ed essere inclusa in `sitemap.xml` e `llms.txt`.
2. **Accesso Crawler IA (`robots.txt`):** Consentire sempre esplicitamente `OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `Claude-SearchBot`, `Claude-User`, `Bingbot`, `Googlebot`, `Applebot` e i bot di addestramento (`GPTBot`, `ClaudeBot`, `Anthropic-ai`, `Google-Extended`, `Applebot-Extended`, `CCBot`).
3. **Struttura Contenuti "Risposta Prima" (Answer-First):**
   - Un solo `<h1>`, `<title>` e `<meta description>` unici per pagina.
   - All'inizio della pagina inserire sempre 2–3 frasi dirette in italiano chiaro che rispondono a: cosa facciamo, per chi (proprietari di immobili, albergatori, imprenditori ricettivi), dove (Firenze e Toscana) e fascia di costo indicativa al m² (`1.350–2.400 €/m²` chiavi in mano a prezzo fisso, tempi garantiti con penali `5–12 mesi`).
   - Sezione FAQ con domande reali, dati verificabili, data di aggiornamento visibile e azienda chiaramente identificata.
4. **Dati Strutturati (Schema.org JSON-LD) & Coerenza NAP:**
   - Ogni pagina deve includere JSON-LD valido (`HomeAndConstructionBusiness`/`GeneralContractor` con `parentOrganization: Blue Arroyo Group`, `Service`, `FAQPage`, `BreadcrumbList`).
   - Il NAP deve essere identico ovunque. Vietato usare email o P.IVA placeholder.
5. **Checklist Obbligatoria Post-Deploy:**
   - [ ] Le nuove pagine sono nella `sitemap.xml` e `llms.txt`, indicizzabili, con `title`, `description`, `H1`, `canonical` e dati strutturati validi.
   - [ ] Zero offerte finanziarie pubbliche non autorizzate (niente ticket, IRR promessi o crowdfunding pubblico).
   - [ ] Contenuto leggibile senza JavaScript, in italiano chiaro e senza gergo inutile.
   - [ ] Dati aziendali (costi €/m², contatti, NAP) identici a quelli nella Fonte Unica.
   - Nel riepilogo del deploy aggiungere sempre la riga **`🔍 SEO/GEO: OK`** oppure l'elenco dei problemi trovati.

---

## 3. REGOLA BASE PERMANENTE – IL DESIGN NON SI TAGLIA MAI (Priorità su qualsiasi scelta estetica)

### Obiettivo
Su ogni schermo devono restare completamente visibili e utilizzabili: logo, menu hamburger, bottoni, testi, bordi, schede, immagini importanti, tabelle e finestre.
Se un elemento non entra, il layout deve adattarsi: va a capo, si impila o passa al livello successivo della cipolla. Non deve mai essere tagliato, rimpicciolito fino a diventare illeggibile o spinto fuori schermo.

### Fase 1 — Controllo Iniziale (Prima di modificare il codice)
1. Apri il progetto alle larghezze indicate sotto (`320x568`, `360x800`, `390x844`, `430x932`, `768x1024`, `844x390`).
2. Trova ogni elemento che esce dallo schermo o viene tagliato.
3. Identifica la causa nel codice.
4. Correggi la causa nel componente condiviso, non con eccezioni pagina per pagina.

### Base Tecnica Obbligatoria
- Meta viewport: `width=device-width, initial-scale=1, viewport-fit=cover`.
- Imposta `box-sizing: border-box` su tutti gli elementi.
- Progetta prima per il telefono, poi amplia per schermi maggiori.
- Usa `flex` e `grid` con `gap`, `min-width: 0` sui figli e dimensioni fluide.
- Immagini, video, iframe e SVG: `max-width: 100%`.
- Margini laterali della pagina: `max(16px, env(safe-area-inset-left))` a sinistra e `max(16px, env(safe-area-inset-right))` a destra.
- Rispetta anche le aree sicure in alto e in basso.
- Altezze a schermo intero: usa `dvh` o `svh`.

### Vietato
- Usare `100vw` per la larghezza dei contenitori.
- Impostare `width` o `min-width` fissi che superano lo schermo.
- Usare margini negativi o `transform` che portano contenuti fuori dallo schermo.
- Usare `overflow: hidden` o `overflow-x: hidden` (o `overflow-x: clip`) su `html` e `body` per nascondere il problema.
- Usare `white-space: nowrap` su testi lunghi senza verificare che entrino.
- Posizionare header, menu o bottoni con coordinate fisse o `position: absolute` che rischiano collisioni o fuoriuscite.
- Bloccare lo zoom con `user-scalable=no` o `maximum-scale=1`.

### Header e Menu Hamburger
- Struttura consigliata: `grid-template-columns: auto minmax(0, 1fr) auto`.
- Hamburger: area di almeno `48 x 48 px`, sempre interamente visibile e con `flex-shrink: 0`.
- Logo: si adatta allo spazio disponibile senza spingere l'hamburger fuori.
- Header e icone rispettano i margini laterali e le aree sicure.
- Il menu aperto occupa la larghezza disponibile e scorre verticalmente se le voci sono tante.
- Il bottone di chiusura e tutte le voci restano raggiungibili anche con schermo basso o in orizzontale (`844 x 390`).

### Bordi, Schede e Componenti Larghi
- Schede e pannelli: `width: 100%`, `max-width: 100%`. Tutti e quattro i bordi devono restare visibili.
- Le ombre non devono essere tagliate dai contenitori.
- Tabelle: su telefono diventano schede. Se una tabella deve restare tale, solo la tabella scorre dentro il proprio contenitore.
- Calendari, tab e filtri: adattali al telefono oppure rendi chiaro lo scorrimento interno, senza far scorrere la pagina.
- Finestre e pannelli: larghezza entro lo schermo, altezza massima `90dvh`, scroll interno e chiusura sempre visibile.
- Testi lunghi, URL e codici: usa `overflow-wrap: anywhere` dove serve.
- Immagini importanti: non usare `object-fit: cover` se taglia volti, prodotti o testi. Prevedi un'inquadratura per telefono o usa `object-fit: contain`.

### Test Obbligatori Dopo Ogni Modifica (`npm run check:mobile`)
Esegui `npm run check:mobile` con Playwright su tutte le pagine pubbliche e interne, con menu e finestre sia chiusi sia aperti, in ogni lingua e ruolo disponibile:
- **Dimensioni:** `320 x 568`, `360 x 800`, `390 x 844`, `430 x 932`, `768 x 1024`, `844 x 390` (telefono orizzontale).
- **Motori:** Chromium con profilo telefono Android e WebKit con profilo iPhone.
- **Condizioni di fallimento:**
  1. `document.documentElement.scrollWidth > document.documentElement.clientWidth`.
  2. Un elemento visibile ha `left < 0` oppure `right > larghezza dello schermo`, salvo contenuti dentro uno scroller intenzionale.
  3. Hamburger, logo o bottoni principali non sono interamente visibili.
  4. Un testo o controllo risulta tagliato dal contenitore.
  5. Un elemento cliccabile è coperto da un altro.
