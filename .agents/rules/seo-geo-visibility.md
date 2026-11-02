# REGOLA PERMANENTE – VISIBILITÀ ORGANICA: SEO + POSIZIONAMENTO SULLE IA (GEO) & COMPLIANCE

**Azienda:** Toscan Costruzioni · Blue Arroyo Group (`https://toscancostruzioni.it`)
**Posizionamento Unico (Fonte di Verità):** Impresa di costruzioni e general contractor a Firenze e in Toscana specializzato nella ristrutturazione e conversione chiavi in mano di Hotel e boutique hotel, Agriturismi e wine resort, Appartamenti per affitti brevi e medi, e Ristrutturazioni/cambi d'uso, con prezzo fisso a contratto, tempi garantiti con penali, arredo incluso e gestione ricettiva integrata tramite il gruppo Blue Arroyo.
**NAP Ufficiale Unico:** Toscan Costruzioni (Blue Arroyo Group) | Sede: Firenze, Toscana, Italia | Tel: +39 351 038 0392 | Email: toscancostruzioni@bluearroyo.it / admin@bluearroyo.it | Web: https://toscancostruzioni.it

## Regole Obbligatorie per Ogni Modifica, Nuova Pagina e Deploy:
0. **Compliance Legale (Punto 0 CEO):** Vietato pubblicare offerte pubbliche di investimento, "ticket da 100.000 €", "crowdfunding chiuso", "club deal SPV", IRR promessi o numeri di track record non documentati. Focus primario su Proprietari e Albergatori committenti.
1. **Basi Tecniche & HTML Server-Rendered:** Ogni pagina pubblica deve avere contenuto principale, costi indicativi al m², servizi e FAQ interamente leggibili nell'HTML sorgente (senza dipendere da JS), `<link rel="canonical">`, `hreflang` corretti, zero link 404, zero `noindex` involontari (eccetto `/styleguide`), ed essere inclusa in `sitemap.xml` e `llms.txt`.
2. **Accesso Crawler IA (`robots.txt`):** Consentire sempre esplicitamente `OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `Claude-SearchBot`, `Claude-User`, `Bingbot`, `Googlebot`, `Applebot` e i bot di addestramento (`GPTBot`, `ClaudeBot`, `Anthropic-ai`, `Google-Extended`, `Applebot-Extended`, `CCBot`).
3. **Struttura Contenuti "Risposta Prima" (Answer-First):**
   - Un solo `<h1>`, `<title>` e `<meta description>` unici per pagina.
   - All'inizio della pagina inserire sempre 2–3 frasi dirette in italiano chiaro che rispondono a: cosa facciamo, per chi (proprietari di immobili, albergatori, imprenditori ricettivi), dove (Firenze e Toscana) e fascia di costo indicativa (`1.350–2.400 €/m²` a prezzo fisso, tempi garantiti con penali `5–12 mesi`, gestione ospiti inclusa).
   - Sezione FAQ con domande reali, dati verificabili, data di aggiornamento visibile e azienda chiaramente identificata.
4. **Dati Strutturati (Schema.org JSON-LD) & Coerenza NAP:**
   - Ogni pagina deve includere JSON-LD valido (`HomeAndConstructionBusiness`/`GeneralContractor` con `parentOrganization: Blue Arroyo Group`, `Service`, `FAQPage`, `BreadcrumbList`).
   - Il NAP deve essere identico ovunque. Vietato usare email o P.IVA placeholder.
5. **Checklist Obbligatoria Post-Deploy:**
   - [ ] Le nuove pagine sono nella `sitemap.xml` e `llms.txt`, indicizzabili, con `title`, `description`, `H1`, `canonical` e dati strutturati validi.
   - [ ] Zero offerte finanziarie pubbliche non autorizzate.
   - [ ] Contenuto leggibile senza JavaScript, in italiano chiaro e senza gergo inutile.
   - [ ] Dati aziendali (costi €/m², contatti, NAP) identici a quelli nella Fonte Unica.
   - Nel riepilogo del deploy aggiungere sempre la riga **`🔍 SEO/GEO: OK`** oppure l'elenco dei problemi trovati.
