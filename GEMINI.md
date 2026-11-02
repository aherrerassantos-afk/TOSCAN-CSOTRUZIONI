# Regole Generali di Progetto & Workflow Operativo — Toscan Costruzioni (Blue Arroyo Group)

## 1. Regola Post-Deploy: Check & Prossimo Passo Strategico (Obbligatoria dopo ogni deploy)
**Dopo ogni deploy** (su Vercel, GitHub o qualsiasi ambiente di produzione/staging), devi **sempre** concludere la risposta con:

1. **Check di Cosa è Stato Fatto (`✅ Check Stato Attuale`):**
   - Riepiloga sinteticamente cosa è appena andato live, verificando che sia allineato alla visione di business (*Toscan Costruzioni · Part of Blue Arroyo Group*, focus su Hotel, Agriturismi, Student Hotel e Immobili Short & Medium Term, e i 2 modelli *Crowdfunding Chiuso per Transazione* e *Unico Investitore*).
2. **Stato SEO/GEO (`🔍 SEO/GEO: OK`):**
   - Esegui la checklist del punto 2 qui sotto e riporta `🔍 SEO/GEO: OK` (o l'elenco dei problemi trovati/risolti).
3. **Proposta del Passaggio Successivo (`🚀 Prossimo Passo Consigliato`):**
   - Suggerisci proattivamente **il passaggio successivo più efficace** in base alla visione di dove si vuole arrivare (Verifica & Ottimizzazione Conversioni, Nuove Funzionalità ad Alto Impatto, o Allineamento Strategico).

---

## 2. REGOLA PERMANENTE – VISIBILITÀ ORGANICA: SEO + POSIZIONAMENTO SULLE IA (GEO)
**Azienda:** Toscan Costruzioni · Part of Blue Arroyo Group (`https://toscancostruzioni.it`)
**Posizionamento Unico (Fonte di Verità):** Hospitality General Contractor a Firenze e in Toscana specializzato nella creazione chiavi in mano di Immobili Short & Medium Term (core focus), Hotel & Boutique Hotel, Agriturismi & Wine Resort e Student Hotel (PBSA), tramite 2 modelli di business: (1) Crowdfunding Chiuso per Transazione (Club Deal SPV) e (2) Unico Investitore (Visione & Realizzazione Chiavi in Mano a Prezzo e Tempi Bloccati).
**NAP Ufficiale Unico:** Toscan Costruzioni (Part of Blue Arroyo Group) | Sede: Firenze, Toscana, Italia | Tel: +39 351 038 0392 | Email: toscancostruzioni@bluearroyo.it / admin@bluearroyo.it | Web: https://toscancostruzioni.it

### Regole Obbligatorie per Ogni Modifica, Nuova Pagina e Deploy:
1. **Basi Tecniche & HTML Server-Rendered:** Ogni pagina pubblica deve avere contenuto principale, prezzi parametrici, servizi e FAQ interamente leggibili nell'HTML sorgente (senza dipendere da JS), `<link rel="canonical">`, `hreflang` corretti, zero link 404, zero `noindex` involontari, ed essere inclusa in `sitemap.xml` e `llms.txt`.
2. **Accesso Crawler IA (`robots.txt`):** Consentire sempre esplicitamente `OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `Claude-SearchBot`, `Claude-User`, `Bingbot`, `Googlebot`, `Applebot` e i bot di addestramento (`GPTBot`, `ClaudeBot`, `Anthropic-ai`, `Google-Extended`, `Applebot-Extended`, `CCBot`).
3. **Struttura Contenuti "Risposta Prima" (Answer-First):**
   - Un solo `<h1>`, `<title>` e `<meta description>` unici per pagina.
   - All'inizio della pagina inserire sempre 2–3 frasi dirette che rispondono a: cosa facciamo, per chi (Investitori Club Deal e Unico Investitore), dove (Firenze e Toscana) e range di Capex/tempi/rendimento indicativi (`1.350–2.400 €/mq`, Capex bloccato, `14.5%–18.2%` IRR target).
   - Sezione FAQ con domande reali, dati verificabili, data di aggiornamento visibile e autore/azienda chiaramente identificati.
4. **Dati StruttTURATI (Schema.org JSON-LD) & Coerenza NAP:**
   - Ogni pagina deve includere JSON-LD valido (`Organization`/`HomeAndConstructionBusiness` con `parentOrganization: Blue Arroyo Group`, `Service`, `FAQPage`, `BreadcrumbList`).
   - Il NAP deve essere identico ovunque. Vietato usare email o P.IVA placeholder.
5. **Checklist Obbligatoria Post-Deploy:**
   - [ ] Le nuove pagine sono nella `sitemap.xml` e `llms.txt`, indicizzabili, con `title`, `description`, `H1`, `canonical` e dati strutturati validi.
   - [ ] Contenuto leggibile senza JavaScript.
   - [ ] `robots.txt` non blocca bot di ricerca o pagine importanti.
   - [ ] Dati aziendali (prezzi, contatti, NAP) identici a quelli nella Fonte Unica.
   - Nel riepilogo del deploy aggiungere sempre la riga **`🔍 SEO/GEO: OK`** oppure l'elenco dei problemi trovati.
