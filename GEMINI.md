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

## 1. Regola Post-Deploy: Check & Prossimo Passo Strategico (Obbligatoria dopo ogni deploy)
**Dopo ogni deploy** (su Vercel, GitHub o qualsiasi ambiente di produzione/staging), devi **sempre** concludere la risposta con:

1. **Check di Cosa è Stato Fatto (`✅ Check Stato Attuale`):**
   - Riepiloga sinteticamente cosa è appena andato live, verificando che rispetti [SITE_RULES.md](file:///Users/julianherrera/Downloads/toscan%20costruzioni/SITE_RULES.md) (focus su Proprietari/Albergatori committenti, compliance legale punto 0, design token "Toscana Contemporanea", zero gergo inglese inutile).
2. **Stato SEO/GEO (`🔍 SEO/GEO: OK`):**
   - Esegui la checklist del punto 2 qui sotto e riporta `🔍 SEO/GEO: OK` (o l'elenco dei problemi trovati/risolti).
3. **Proposta del Passaggio Successivo (`🚀 Prossimo Passo Consigliato`):**
   - Suggerisci proattivamente **il passaggio successivo più efficace** in base alla checklist CEO.

---

## 2. REGOLA PERMANENTE – VISIBILITÀ ORGANICA: SEO + POSIZIONAMENTO SULLE IA (GEO)
**Azienda:** Toscan Costruzioni · Blue Arroyo Group (`https://toscancostruzioni.it`)
**Posizionamento Unico (Fonte di Verità):** Impresa di costruzioni e general contractor a Firenze e in Toscana specializzato nella ristrutturazione e conversione chiavi in mano di Hotel e boutique hotel, Agriturismi e wine resort, Appartamenti per affitti brevi e medi, e Ristrutturazioni/cambi d'uso, con prezzo fisso a contratto, tempi garantiti con penali, arredo incluso e gestione ricettiva integrata tramite il gruppo Blue Arroyo.
**NAP Ufficiale Unico:** Toscan Costruzioni (Blue Arroyo Group) | Sede: Firenze, Toscana, Italia | Tel: +39 351 038 0392 | Email: toscancostruzioni@bluearroyo.it / admin@bluearroyo.it | Web: https://toscancostruzioni.it

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
