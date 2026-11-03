# DESIGN.md — Aura Design System: "Toscana Monograph & Architectural Blueprint"
**Progetto:** Toscan Costruzioni · Blue Arroyo Group (`https://toscancostruzioni.it`)
**Archetipo Aura.build selezionato:** *Luxury Architectural Monograph & Editorial Real Estate Design System* (ispirato a monografie d'architettura contemporanea, griglie asimmetriche da tavola tecnica con filetti `1px solid`, fondi materici in pietra serena calda `#F6F1E9`, tipografia editoriale ad alto contrasto `Cormorant Garamond` + `Inter` con numeri tabulari `tabular-nums`, e narrazione sticky allo scroll).

---

## 1. Perché questo Design System di Aura.build è il più adatto a Toscan Costruzioni · Blue Arroyo Group
Tra i sistemi di `aura.build/design-systems`, l'archetipo **Architectural Monograph & Editorial Real Estate** è l'unico che unisce i due mondi del gruppo **Blue Arroyo**:
1. **L'autorità ingegneristica e artigianale del cantiere (`Toscan Costruzioni`):** griglie strutturate con bordi sottili a vista (`1px solid #C7BCA9`) che richiamano le tavole esecutive di un computo metrico e di un progetto architettonico.
2. **L'eleganza dell'ospitalità toscana a 5 stelle (`Ciclo Blue Arroyo`: itassistance, Blue Arroyo Cleaning, SmartsBookings):** toni caldi della materia vera (Pietra Serena, Terracotta dell'Impruneta, Verde Olivo, Carbone) e fotografia a tutto campo con luce naturale.

---

## 2. Design Tokens (Palette Verificata WCAG AA, Tipografia, Spaziatura 8px)

```css
:root {
  /* Palette Materica Toscana Contemporanea (Contrasto Verificato WCAG AA/AAA) */
  --stone: #F6F1E9;            /* Sfondo principale Pietra Serena Chiara (15.1:1 con --ink) */
  --paper: #FFFFFF;            /* Superfici editoriali, schede tecniche e moduli (17.1:1 con --ink) */
  --ink: #1F1B16;              /* Testo principale, titoli e footer Carbone Toscano */
  --muted: #5C544B;            /* Testo secondario e didascalie (6.59:1 su --stone) */
  --terracotta: #9E421B;       /* Azione principale e accenti in corsivo (6.70:1 con #FFFFFF) */
  --terracotta-hover: #7D3314; /* Stato hover/active primario (8.85:1 con #FFFFFF) */
  --terracotta-on-dark: #E89572; /* Accento su sfondo scuro --ink (7.40:1) */
  --olive: #4E5332;            /* Etichette tecniche, garanzie e stati completati (7.92:1 con #FFFFFF) */
  --line: #C7BCA9;             /* Filetti architettonici 1px tra blocchi e sezioni */
  --border-control: #756B5E;   /* Bordi di input, chip e bottoni secondari (4.52:1 >= 3.0:1) */
  --overlay: rgba(31, 27, 22, 0.74); /* Velo protettivo sopra foto e video (>= 7.5:1) */

  /* Tipografia (Massimo 2 Famiglie) */
  --font-serif: 'Cormorant Garamond', Georgia, serif;
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

  /* Spaziatura Multipli di 8px */
  --space-1: 8px;
  --space-2: 16px;
  --space-3: 24px;
  --space-4: 32px;
  --space-6: 48px;
  --space-8: 64px;
  --space-12: 96px;

  /* Misure Componenti Mobile-First */
  --btn-h-mobile: 56px;
  --btn-h-desktop: 48px;
  --header-h: 56px;
  --bottom-nav-h: 64px;
  --radius: 2px;
}
```

---

## 3. Componenti Architettonici del Design System Aura applicati al Sito

1. **Expanding Architectural Hero (`100svh`):**
   - Immagine reale a tutto schermo con leggero zoom-out (`scale(1.04 -> 1)`), velo `--overlay` calibrato e blocco editoriale allineato in griglia con 1 sola CTA primaria (`56 px` di altezza su telefono).
2. **Blueprint Spec Strip (Barra Garanzie a Filetti `1px`):**
   - Striscia orizzontale divisa da filetti sottili verticali che espone le 5 garanzie contrattuali verificabili (Garanzia decennale art. 1669 c.c., Prezzo Chiuso Toscan, Penale ritardo `250 €/giorno`, Polizza CAR e RC, DURC e Cassa Edile).
3. **Asymmetric Editorial Split (`7fr / 5fr` e `5fr / 7fr`):**
   - Sostituisce le griglie di card uguali: ogni tipologia di intervento (Hotel, Agriturismi, Appartamenti, Ristrutturazioni) alterna una grande fotografia reale con una scheda tecnica contenente fascia al m², tempi contrattuali e azione dedicata.
4. **Interactive Before/After Architectural Slider:**
   - Confronto trascinabile col dito o da tastiera (`ArrowLeft`/`ArrowRight`) tra stato pre-intervento e opera finita, con etichetta trasparente **`Render di progetto — Cantiere in avvio`** per i cantieri in partenza.
5. **Pinned Sticky Narrative (`position: sticky`):**
   - Colonna sinistra fissata che mantiene visibile la promessa e il contratto tipo, mentre a destra scorrono i **5 Gradini di Acquisto Scaglionato per Disponibilità Economica** (dalla **Masterclass di Cantiere** da `150 €` fino al **Percorso a 5 SAL** e all'**Area Membri Approvati** da `2.000 €`).
6. **Tactile Material Grid & Glossario Proprietario:**
   - Fotografie reali ravvicinate di Pietra Serena, Cotto dell'Impruneta, Rovere spazzolato e Intonaco a calce abbinate al Glossario ufficiale delle 6 parole del marchio.
7. **Sistema Cipolla Post-Login (Livelli 1–4 su `/stato-cantiere`):**
   - App mobile-first con Header fisso `56 px`, tasto `Indietro` contestuale, Barra Inferiore `64 px` a 4 voci e accesso protetto riservato ai **Membri Approvati** dalla Governance con **Simulatore Quota da 2.000 € in 5 SAL**.

---

## 4. COPY COMPLETO INCOLLATO SUL DESIGN SYSTEM (Pronto per Aura.build e attivo su `index.html`)

### [HEADER E MENU]
- **Marchio:** Toscan *Costruzioni* · Part of Blue Arroyo Group
- **Voci Menu:** `Servizi` · `Progetti` · `Come lavoriamo` · `Journal & Guide` · `Area Membri`
- **Bottone Primario:** `Studio di fattibilità`

### [SEZIONE 1 — HERO APERTURA]
- **Occhiello:** Impresa di costruzioni e general contractor · Firenze e Toscana
- **Titolo H1:** Trasformiamo il tuo immobile in una struttura che rende. *Prezzo fisso*, tempi garantiti.
- **Sottotitolo Risposta-Prima:** Ristrutturiamo e convertiamo chiavi in mano hotel, agriturismi, casali e appartamenti a reddito a Firenze e in tutta la Toscana (`1.350–2.400 €/m²`, consegna garantita in `5–12 mesi` con penali giornaliere). Con il **Metodo Toscan** uniamo progetto, cantiere, arredo e successiva gestione ospiti con il gruppo **Blue Arroyo**.
- **Bottone Primario (56 px):** `Studio di fattibilità gratuito in 48h`
- **Bottone Secondario:** `Guarda i lavori e il Prima/Dopo`

### [SEZIONE 2 — BARRA DI FIDUCIA E GARANZIE]
1. **Garanzia decennale** · Copertura postuma di legge art. 1669 c.c. su strutture e opere
2. **Prezzo Chiuso Toscan** · Importo bloccato a corpo sul computo metrico esecutivo
3. **Penali per ritardo** · `250 €/giorno` riconosciuti al committente per ogni giorno di ritardo
4. **Polizza CAR e RC** · Copertura assicurativa All Risks attiva su ogni cantiere
5. **DURC e Cassa Edile** · Regolarità contributiva verificata prima di ogni pagamento SAL

### [SEZIONE 3 — RACCONTO ASIMMETRICO DEI 4 INTERVENTI (`#servizi`)]
- **Occhiello:** Cosa realizziamo in Toscana
- **Titolo H2:** Quattro ambiti di intervento con *Prezzo Chiuso Toscan* e resa misurabile
- **Intervento 01 — Hotel e boutique hotel:** Riqualificazione completa in bassa stagione, camere insonorizzate, bagni en-suite, impianti ad alta efficienza e hall progettate per alzare la tariffa media giornaliera. Fascia: `1.750 – 2.400 €/m²` · Tempi: `8–12 mesi` · Bottone: `Simula il costo per il tuo hotel`
- **Intervento 02 — Agriturismi, casali e wine resort:** Recupero conservativo di coloniche in pietra, tetti ventilati in legno e cotto, piscine panoramiche, autorizzazioni paesaggistiche e Soprintendenza incluse. Fascia: `1.650 – 2.300 €/m²` · Tempi: `8–12 mesi` · Bottone: `Simula il costo per il tuo casale`
- **Intervento 03 — Appartamenti per affitti brevi e medi:** Frazionamenti urbani ad alta redditività a Firenze e nelle città d'arte: una camera = un bagno privato, serrature smart, vano biancheria dedicato e messa a norma CIN. Fascia: `1.350 – 1.850 €/m²` · Tempi: `5–7 mesi` · Bottone: `Simula il frazionamento appartamento`
- **Intervento 04 — Ristrutturazioni complete e cambi d'uso:** Conversione di uffici, fondi commerciali o palazzi cielo-terra in strutture ricettive o residenze di pregio, dalla verifica urbanistica al collaudo finale. Fascia: `1.450 – 2.100 €/m²` · Tempi: `6–10 mesi` · Bottone: `Richiedi verifica urbanistica in 48h`

### [SEZIONE 4 — CASI STUDIO E CONFRONTO PRIMA/DOPO (`#progetti`)]
- **Occhiello:** Cantieri reali e trasformazioni in Toscana
- **Titolo H2:** Dal fabbricato datato alla struttura *pronta per gli ospiti*
- **Caso 1 — Villa Claudia (Colline di Firenze · 420 m²):** Etichetta: `Render di progetto — Cantiere in avvio`. Trasformazione di villa storica in residenza ricettiva con 6 suite indipendenti, giardino storico e piscina. Fascia applicata: `1.950 €/m²` · Durata: `9 mesi`.
- **Caso 2 — Piano Nobile Santa Croce (Firenze Centro · 240 m²):** Frazionamento in 4 suite insonorizzate con bagno en-suite, parquet in rovere e avvio immediato nel **Ciclo Blue Arroyo**. Costo a corpo: `1.550 €/m²` · Durata: `6 mesi`.
- **Caso 3 — Casale in Pietra (Val d'Orcia / Chianti · 380 m²):** Consolidamento strutturale, tetto ventilato, impianti ibridi e 6 camere con bagno privato. Costo a corpo: `1.850 €/m²` · Durata: `9 mesi`.

### [SEZIONE 5 — RACCONTO FISSATO ALLO SCROLL: I 5 GRADINI PER DISPONIBILITÀ ECONOMICA (`#come-lavoriamo`)]
- **Occhiello:** Acquisto scaglionato per disponibilità economica
- **Titolo H2:** Non devi firmare subito un cantiere intero: parti dalla *Masterclass di Cantiere* e avanza passo dopo passo
- **Gradino 1 (Ingresso Molto Accessibile · `150 €` scalati al 100%):** **Masterclass di Cantiere (Sessione 1-to-1 di 60 minuti)** con l'esperto della materia che più ti interessa: **1A Geometra e Parte Tecnica Preliminare**, **1B Business Plan e Leva con le Banche**, **1C Amministrazione Cantiere e 5 SAL**, **1D Pre-Sales Cantiere (vendere sulla carta)**.
- **Gradino 2 (`950 – 1.800 €` scalati al 100%):** Sopralluogo del Geometra in sito, Due Diligence pre-rogito e Business Plan bancabile per istituti di credito.
- **Gradino 3 (`2.200 – 4.200 €` scalati al 100%):** Progetto di Interior Design ricettivo, pratiche edilizie CILA/SCIA, Kit **Pre-Sales Cantiere** e Computo Metrico Esecutivo che blocca il **Prezzo Chiuso Toscan**.
- **Gradino 4 (Budget Graduale):** Realizzazione della prima **Unità Campione / Lotto Pilota** a prezzo fisso per incassare o pre-vendere mentre prosegue il resto dell'opera.
- **Gradino 5 (Operazione Completa · `1.350–2.400 €/m²`):** Cantiere chiavi in mano con pagamento protetto nel **Percorso a 5 SAL** (`15% · 25% · 25% · 25% · 10%`) e attivazione del **Ciclo Blue Arroyo**. Per i **Membri Approvati** dalla Governance, accesso riservato ai cantieri in corso di apertura con quote da `2.000 €` in su.

### [SEZIONE 6 — IL VANTAGGIO DEL GRUPPO ("DAL CANTIERE AGLI OSPITI") E GLOSSARIO (`#gruppo`)]
- **Occhiello:** Sinergia unica in Toscana · Blue Arroyo Group
- **Titolo H2:** Quattro aziende autonome, un solo ciclo del valore: *dal cantiere agli ospiti*
1. **Toscan Costruzioni crea il bene:** Consegna un immobile nuovo, cablato e collaudato con Prezzo Chiuso Toscan e garanzia decennale.
2. **itassistance lo protegge:** Attiva immediatamente CIN, Alloggiati Questura, ISTAT e ottimizza le tariffe dinamiche per massimizzare la resa.
3. **Blue Arroyo Cleaning lo allestisce:** Lo trasforma in una suite d'albergo con biancheria lavata a 60°C, kit biologici e controlli fotografici certificati.
4. **SmartsBookings lo riempie di turisti:** Vende le notti senza commissioni OTA superflue, premia l'ospite col cashback e bonifica l'85% al proprietario entro le ore 12:00 del check-out.

### [SEZIONE 7 — CONTATTI E MODULO STUDIO DI FATTIBILITÀ IN 2 PASSAGGI (`#contatti`)]
- **Titolo H2:** Richiedi il tuo *studio di fattibilità* gratuito in 48h o prenota la Masterclass
- **Passaggio 1 di 2:** Tipo di immobile (`Appartamento`, `Casale / Agriturismo`, `Hotel`, `Cambio d'uso`), Comune in Toscana, Metri quadri indicativi, Obiettivo (`Ristrutturare chiavi in mano`, `Partire dalla Masterclass 150 €`, `Valutare acquisto immobile`).
- **Passaggio 2 di 2:** Nome e Cognome, Email, Telefono o WhatsApp.
- **Bottone Primario:** `Richiedi lo studio gratuito`
- **Rassicurazioni:** Risposta entro 24h · Sopralluogo preliminare gratuito · Dati protetti e nessun impegno contrattuale.
