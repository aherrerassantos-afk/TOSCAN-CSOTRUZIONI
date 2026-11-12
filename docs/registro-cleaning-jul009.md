# Registro Cleaning & Bonifica Dati — ORDINE ESECUTIVO MASTER JUL-009 (REGOLA ZERO – SOLO INFO VERA)

**Progetto:** **Piano 1 · Toscan Costruzioni** (`/Users/julianherrera/Downloads/toscan costruzioni`)  
**Ordine:** `JUL-009 · REGOLA ZERO – SOLO INFO VERA (Pulizia completa di tutte le informazioni non verificate)`  
**Data esecuzione:** 10/11/2026  
**PM Responsabile:** `pm-toscan`

---

## 1. Dati Societari e Numerazione Piani Confermati (`JUL-009`)

1. **Numerazione Piani Ufficiale Ripristinata:**
   - **Piano 1** = **Toscan Costruzioni**
   - **Piano 2** = **PBA – Palazzo by Blue Arroyo**
   - **Piano 3** = **SmartsBookings.com**
   - **Piano 4** = **Itassitance** (`itadreamteam.com`)
   - **Attico** = **Holding + Amministrazione centrale 2FA** (`Gabriela`, `Biviana`, `Julian`)
2. **Unico Riferimento Societario e di Sede Ammesso sui File Pubblici e Template (`JUL-009` + `JUL-046` Visura Camerale CCIAA Firenze + `JUL-055` Chiusura definitiva punto societario):**
   - `Toscan Costruzioni opera sotto BLUEARROYO S.R.L. – Sede legale: Via Matteo Palmieri 20/R, 50122 Firenze (FI)`
   - `P.IVA / C.F. 07480210488 · REA FI-706161 · SDI M5UXCR1 · PEC: bluearroyosrl@pec.it · Capitale sociale: € 50.000,00 i.v.`
   - **Zero `[DA CONFERMARE]` societari:** confermata ufficialmente da Julian (`JUL-055`) l'operatività diretta sotto `BLUEARROYO S.R.L.`
3. **Indirizzi Operativi / Magazzini Rimossi dai File Pubblici:**
   - Rimosso ogni riferimento pubblico a `Magazzino: Via dell'Agnolo 72R, Firenze` e a diciture `Ufficio:` / sedi operative non pubbliche da tutti i file HTML e da `llms.txt`.
   - Verificata l'assenza totale (`0` occorrenze) di `Via Filippo Corridoni 76` / `Corridoni` sull'intero repository.

---

## 2. Tabella Completa delle Rimozioni e Sostituzioni (`Rimosso / Dove (file + riga) / Perché`)

| Rimosso (Testo / Dato precedente) | Dove (`file + riga`) | Perché (Motivazione `JUL-009` Regola Zero) | Sostituito con |
|---|---|---|---|
| `Ufficio: Via Matteo Palmieri 20R, 50122 Firenze · Magazzino: Via dell'Agnolo 72R, Firenze` e `(232 €/mese risparmiati dal PM)` | `SITE_RULES.md` (righe 116, 204) | Magazzino ad uso esclusivamente interno; metrica `232 €/mese` non verificata; adeguamento a `Blue Arroyo S.r.l.` | `Blue Arroyo S.r.l. – Sede legale: Via Matteo Palmieri 20R, Firenze · P.IVA / C.F. 07480210488 · REA FI-706161 · SDI M5UXCR1 · PEC: bluearroyosrl@pec.it · Capitale sociale: € 50.000,00 i.v. · Opera sotto BLUEARROYO S.R.L. (JUL-055)` |
| `Piano 4` e `Ufficio: Via Matteo Palmieri 20R · Magazzino: Via dell'Agnolo 72R` | `GEMINI.md` (righe 30–32) | Ripristino numerazione `Piano 1 · Toscan Costruzioni` e rimozione indirizzo magazzino dai riferimenti pubblici | `Piano 1` + `Blue Arroyo S.r.l. – Sede legale: Via Matteo Palmieri 20R, Firenze` + dati tecnici verificati + `Opera sotto BLUEARROYO S.R.L. (JUL-055)` |
| `Piano 4 · Toscan` e riga `Magazzino: Via dell'Agnolo 72R, Firenze` | `README.md` (righe 34–49) | Ripristino `Piano 1 · Toscan Costruzioni` e allineamento tabella societaria a `Blue Arroyo S.r.l.` | Tabella societaria con `Blue Arroyo S.r.l. – Sede legale: Via Matteo Palmieri 20R, Firenze`, `P.IVA / C.F. 07480210488`, `REA FI-706161`, `SDI M5UXCR1`, `PEC: bluearroyosrl@pec.it`, `Capitale sociale: € 50.000,00 i.v.`, `Opera sotto BLUEARROYO S.R.L. (JUL-055)` |
| `Ufficio: Via Matteo Palmieri 20R · Magazzino: Via dell'Agnolo 72R, Firenze` | `llms.txt` (righe 40–50) | File pubblico AI/SEO: rimosso indirizzo magazzino e inseriti dati societari ufficiali `Blue Arroyo S.r.l.` | `Blue Arroyo S.r.l. – Sede legale: Via Matteo Palmieri 20R, Firenze` + `P.IVA / C.F. 07480210488 · REA FI-706161 · SDI M5UXCR1 · PEC: bluearroyosrl@pec.it · Capitale sociale: € 50.000,00 i.v.` + `Opera sotto BLUEARROYO S.R.L. (JUL-055)` |
| JSON-LD senza `legalName` / `taxID` | `index.html` (righe 30–55) | Allineamento Schema.org ai dati verificati `Blue Arroyo S.r.l.` | `legalName: "Blue Arroyo S.r.l."`, `taxID: "07480210488"`, `streetAddress: "Via Matteo Palmieri 20R"` |
| Metriche e costi caso studio 1 (`280 m²`, `6 mesi e mezzo`, `1.500 €/m² (420.000 € totali)`) | `index.html` (righe 1723–1741) | Dati numerici di caso studio esemplificativo non ancora certificati da fascicolo chiuso | `[DA CONFERMARE]` |
| Metriche e costi caso studio 2 (`460 m²`, `9 mesi`, `1.820 €/m²`) | `index.html` (righe 1747–1765) | Dati numerici di caso studio esemplificativo non ancora certificati | `[DA CONFERMARE]` |
| Metriche e costi caso studio 3 (`390 m² · Firenze Novoli`, `6 mesi`, `1.440 €/m²`) | `index.html` (righe 1771–1789) | Dati numerici di caso studio esemplificativo non ancora certificati | `[DA CONFERMARE]` |
| Sottotitolo Villa Claudia (`520 m² · 6 unità`) e query `?quota=2000` | `index.html` (righe 1795, 1808) | Metratura caso studio non certificata e parametro legacy `quota=2000` | `[DA CONFERMARE]` e link pulito `/stato-cantiere?ruolo=membro&cantiere=firenze#dettaglio-cantiere` |
| 3 recensioni/testimonianze nominative (`Lorenzo M.`, `Famiglia Rinaldi`, `David e Claire H.`) | `index.html` (righe 2068–2084) | Testimonianze esemplificative non verificate | `[DA CONFERMARE — Testimonianza committente verificata da caricare]` e `[DA CONFERMARE]` |
| Footer con `Ufficio: Via Matteo Palmieri 20R · Magazzino: Via dell'Agnolo 72R` | `index.html` (righe 2307, 2358) | Rimozione indirizzo magazzino pubblico e inserimento dati legali `Blue Arroyo S.r.l.` | `Blue Arroyo S.r.l. – Sede legale: Via Matteo Palmieri 20R, Firenze · P.IVA / C.F. 07480210488 · REA FI-706161 · SDI M5UXCR1 · PEC: bluearroyosrl@pec.it · Capitale sociale: € 50.000,00 i.v. · Opera sotto BLUEARROYO S.R.L. (JUL-055)` |
| KPI e metriche Villa Claudia (`520 m²`, `6 Unità`, `9 Mesi`, `1.650 €/m²`, `38 dB`, `54 dB`, `Classe F → A2`) | `villa-claudia.html` (righe 212–322) | Metriche tecniche di caso studio in attesa di certificazione finale | `[DA CONFERMARE]` |
| Riferimento a `Magazzino di Via dell'Agnolo 72R` e `Ufficio di Via Matteo Palmieri 20R` nella tabella Prima/Dopo | `villa-claudia.html` (riga 316) | Rimozione indirizzo magazzino/operativo da pagina pubblica | `[DA CONFERMARE]` |
| Footer con `Magazzino: Via dell'Agnolo 72R, Firenze` | `villa-claudia.html` (righe 362–366) | Allineamento footer pubblico ai soli dati verificati `Blue Arroyo S.r.l.` | `Blue Arroyo S.r.l. – Sede legale: Via Matteo Palmieri 20R, Firenze · P.IVA / C.F. 07480210488 · REA FI-706161 · SDI M5UXCR1 · PEC: bluearroyosrl@pec.it · Capitale sociale: € 50.000,00 i.v. · Opera sotto BLUEARROYO S.R.L. (JUL-055)` |
| Numeri, importi e citazioni nei 3 casi studio (`420.000 €`, `837.200 €`, `858.000 €`, `Lorenzo M.`, `Famiglia Rinaldi`, `Direzione Villa Claudia`) | `foglio-lavori.html` (righe 228–340) | Importi esemplificativi e citazioni non verificate | `[DA CONFERMARE]` e `[DA CONFERMARE — Testimonianza committente verificata da caricare]` |
| Numeri di protocollo/certificato esemplificativi (`#ASL-FI-2026-08412`, `FIR #IT-2026-FIR-00941..00958`, `Genio Civile FI #GC-2026-4410`, `Di.Co. #DM37-2026-E04 / #DM37-2026-I04`, `54 dB`, `Magazzino Via dell'Agnolo 72R`, `Verbale CSE #08/2026`, `Verbale Venerdì #14`, `NC-2026-03`) | `foglio-lavori.html` (righe 385–587) | Numeri di protocollo esemplificativi e indirizzo magazzino su pagina pubblica | `[DA CONFERMARE]` |
| Footer con `Magazzino: Via dell'Agnolo 72R, Firenze` | `foglio-lavori.html` (righe 674–678) | Allineamento footer pubblico ai soli dati verificati `Blue Arroyo S.r.l.` | `Blue Arroyo S.r.l. – Sede legale: Via Matteo Palmieri 20R, Firenze · P.IVA / C.F. 07480210488 · REA FI-706161 · SDI M5UXCR1 · PEC: bluearroyosrl@pec.it · Capitale sociale: € 50.000,00 i.v. · Opera sotto BLUEARROYO S.R.L. (JUL-055)` |
| Cartiglio contrattuale precompilato con valori d'esempio (`Firenze (280 m²)`, `434.000 € + IVA`, rate SAL `65.100 €`, `108.500 €`, `43.400 €`, piscina `65.000 – 130.000 €`, massimale CAR `2.500.000 €`, placeholder `Lorenzo Medici`) | `data-room.html` (righe 326–562, 650–675) | Valori esemplificativi non legati a commessa reale verificata | `[DA CONFERMARE]` |
| Footer e riferimenti societari nel contratto | `data-room.html` (righe 355–366, 583–588) | Allineamento a `Blue Arroyo S.r.l. – Sede legale: Via Matteo Palmieri 20R, Firenze` + dati fiscali verificati | `Blue Arroyo S.r.l. – Sede legale: Via Matteo Palmieri 20R, Firenze · P.IVA / C.F. 07480210488 · REA FI-706161 · SDI M5UXCR1 · PEC: bluearroyosrl@pec.it · Capitale sociale: € 50.000,00 i.v. · Opera sotto BLUEARROYO S.R.L. (JUL-055)` |
| JSON-LD e Footer in `bonus-ristrutturazione-2026.html` | `bonus-ristrutturazione-2026.html` (righe 20–45, 381, 426–431) | Allineamento a `Blue Arroyo S.r.l.` e inserimento `P.IVA 07480210488` nella causale bonifico parlante | `Blue Arroyo S.r.l. – Sede legale: Via Matteo Palmieri 20R, Firenze · P.IVA / C.F. 07480210488 · REA FI-706161 · SDI M5UXCR1 · PEC: bluearroyosrl@pec.it · Capitale sociale: € 50.000,00 i.v. · Opera sotto BLUEARROYO S.R.L. (JUL-055)` |
| Committente fittizio `Lorenzo Medici`, commesse `Marco Bellini (Firenze · 360 m²)`, `Studio Rinaldi Srl (Siena · 460 m²)` e importi precompilati (`372.000 €`, `741.000 €`, `890.000 €`, `434.000 €`, `65.100 €`, `108.500 €`, `43.400 €`) | `stato-cantiere.html` (righe 731, 805, 895–947, 974–975, 1126, 1168–1236, 1390–1445, 1564–1710) | Rimozione nominativi e importi esemplificativi non verificati + aggiunta footer societario `Blue Arroyo S.r.l.` | `[DA CONFERMARE]` + footer `Blue Arroyo S.r.l. – Sede legale: Via Matteo Palmieri 20R, Firenze` |
| Nominativi e telefoni fittizi nei preset e nella Tabella CRM (`Lorenzo Medici`, `Famiglia Rinaldi`, `Hotel Savoia`, `Marco Bellini`, `Vanguard Family Office`, `+393331234567`, ecc.), pacchetti upgrade non verificati (`18.500 €`, `9.800 €`, `24.000 €`, `48.000 €`, `+420 €/mese`) e `Magazzino: Via dell'Agnolo 72R` nel footer e nel payload `DEC-16` | `kit-commerciale.html` (righe 254–277, 323–337, 404–405, 490–507, 668–672, 726, 761–771, 796, 830, 855–862, 1286, 1300–1316, 1395–1446) | Rimozione nominativi/numeri fittizi e rimozione indirizzo magazzino dal file template | `[DA CONFERMARE]` + `Blue Arroyo S.r.l. – Sede legale: Via Matteo Palmieri 20R, Firenze · P.IVA / C.F. 07480210488 · REA FI-706161 · SDI M5UXCR1 · PEC: bluearroyosrl@pec.it · Capitale sociale: € 50.000,00 i.v. · Opera sotto BLUEARROYO S.R.L. (JUL-055)` |

---

## 3. Elenco Campi Marcati `[DA CONFERMARE]` (In Attesa di Conferma Ufficiale)

1. **Dati Societari / Legali (`BLUEARROYO S.R.L.` / `Toscan Costruzioni` — 100% CONFERMATI, ZERO `[DA CONFERMARE]` SOCIETARI):**
   - `Titolarità societaria Toscan Costruzioni`: **CONFERMATA (`JUL-055`)** → `Toscan Costruzioni opera sotto BLUEARROYO S.R.L. – Sede legale: Via Matteo Palmieri 20/R, 50122 Firenze (FI)`
   - `P.IVA / C.F. · REA · SDI`: **CONFERMATI (`JUL-046`)** → `07480210488 · REA FI-706161 · SDI M5UXCR1`
   - `PEC`: **CONFERMATA (`JUL-046`)** → `bluearroyosrl@pec.it`
   - `Capitale sociale`: **CONFERMATO (`JUL-046`)** → `€ 50.000,00 i.v.`
2. **Polizze e Estremi Assicurativi (`data-room.html`):**
   - Compagnia assicurativa, numero polizza e massimale `Polizza CAR/RC` e `Decennale Postuma`: `[DA CONFERMARE]`
3. **Casi Studio, Metriche Cantieri e Testimonianze (`index.html`, `villa-claudia.html`, `foglio-lavori.html`, `stato-cantiere.html`):**
   - Metrature effettive, durate certificate, importi consuntivi a corpo e testimonianze firmate dei committenti: `[DA CONFERMARE]`
   - Numeri di protocollo pratiche/collaudi (`Notifica ASL`, `FIR`, `Collaudo Statico`, `Di.Co. DM 37/08`, `Verbali CSE/DL`): `[DA CONFERMARE]`
4. **Preset CRM e Pacchetti Riqualificazione (`kit-commerciale.html`, `data-room.html`):**
   - Nominativi committenti reali, metrature e importi specifici delle singole commesse: `[DA CONFERMARE]`
