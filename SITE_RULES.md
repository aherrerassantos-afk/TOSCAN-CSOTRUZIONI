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
