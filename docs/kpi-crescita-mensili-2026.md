# Cruscotto KPI Crescita Mensili — Toscan Costruzioni (Task #100)

**Ultimo aggiornamento:** 10/11/2026 (`JUL-003` · `agente-1`)  
**Integrazione:** Sincronizzato con `kit-commerciale.html?role=dir` e con `/api/amministrazione/company-input` (`azienda_id: 'toscan'`).

## 1. Matrice KPI Mensili (Target & Consuntivo Operativo 2026)

| KPI Operativo / Commerciale | Formula / Fonte Dati | Target Mensile | Soglia Alert | Stato Attuale (Nov 2026) |
| :--- | :--- | :---: | :---: | :--- |
| **1. Lead Qualificati (Proprietari & Albergatori)** | Form `#contatti` + Tabella 1 CRM (`kit-commerciale.html`) | `>= 25 lead/mese` | `< 15 lead/mese` | **Attivo** (6 commesse pilota in Tabella 1 CRM) |
| **2. SLA Prima Risposta Commerciale** | Timestamp Lead → Invio WA 1-Tap (`#btn-sales-one-tap`) | `< 2 ore lavorative` | `> 4 ore` | **100% conforme** (`< 2h`) |
| **3. Studi di Fattibilità Consegnati in 48h** | Preventivo PDF (`/preventivo-tipo`) inviato al cliente | `>= 15 studi/mese` | `< 8 studi/mese` | **Attivo** (generatore 1-Tap operativo) |
| **4. Masterclass 150 € & Step 2–4 Attivati** | Voucher Step 1 (`150 €`), Step 2 (`950 €`), Step 3 (`2.200 €`), Step 4 (`18.500 €`) | `>= 6 step/mese` | `< 3 step/mese` | **Attivo** (scalo 100% su SAL 1 integrato) |
| **5. Contratti 5 SAL Firmati & m² Contrattualizzati** | Contratti approvati in `/data-room` (`1.350–2.400 €/m²`) | `>= 500 m²/mese` | `< 250 m²/mese` | **Pipeline attiva:** `1.860 m²` in valutazione |
| **6. Rispetto Cronoprogramma & Rischio Penale** | Giornale lavori (`foglio-lavori.html`) vs Gantt (`150 €/g`) | `0 giorni ritardo` | `> 5 giorni ritardo` | **0 ritardi** (Alert automatico attivo) |
| **7. Subentri 1-Tap Ciclo Blue Arroyo** | Collaudi inviati a Itassitance + PBA (`30 €/h DOC`) + SmartsBookings (`85%`) | `100% unità finite` | `< 100%` | **3/3 webhook collaudati (`DEC-16`)** |
| **8. Provvigioni Rete Partner (2–3%)** | Segnalazioni Architetti/Agenzie/PM in Tabella 2 CRM | `>= 4 segnalazioni/mese` | `< 2/mese` | **Rete attiva** (liquidazione 50% SAL 1 + 50% SAL 2) |
