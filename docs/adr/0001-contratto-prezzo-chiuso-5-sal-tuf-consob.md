# ADR-0001: Adozione esclusiva Appalto a Corpo 5 SAL, Conformità TUF/CONSOB e Subentro 1-Tap Ciclo Blue Arroyo

- **Stato:** Accettata e in produzione (`Fatto`)
- **Data:** 09/11/2026
- **Decisori:** Julian (Titolare Holding), `pm-toscan`, `agente-1` (Legale/Direzione), `agente-3` (Tecnico)
- **Riferimenti:** `DEC-05`, `DEC-07`, `DEC-15`, `DEC-16`, `DEC-17`, Task `#1–#6, #30–#38`

## 1. Contesto
Toscan Costruzioni opera come General Contractor del Gruppo Blue Arroyo per la ristrutturazione e conversione chiavi in mano di immobili ricettivi (Hotel, Boutique Hotel, Agriturismi, Residenze Studentesche e Appartamenti per Affitti Brevi) in Toscana. Era necessario eliminare qualsiasi ambiguità terminologica legata a modelli finanziari (crowdfunding, SPV, quote) e standardizzare il contratto d'appalto e gli standard tecnici per le 3 aziende sorelle (Itassitance, PBA, SmartsBookings).

## 2. Decisione
1. **Esclusività Percorso A (Appalto a Corpo ex art. 1655 c.c.):** Fascia prezzo chiuso bloccata da computo metrico esecutivo (`1.350 – 2.400 €/m²`), pagamento in **5 SAL (`15% / 25% / 25% / 25% / 10%`)** solo a opere verificate dal Direttore Lavori e previa verifica **DURC Online regolare** e **Congruità Cassa Edile**.
2. **Scala Scaglionata 100% Detraibile:** Step 1 Masterclass (`150 €` scalati sul SAL 1) → Step 2 Sopralluogo Pre-Rogito (`950–1.800 €`) → Step 3 Kit Pre-Sales (`2.200–4.200 €`) → Step 4 Lotto Pilota / Unità Campione → Step 5 Appalto Completo.
3. **Clausola Penale Ritardo Consegna:** Durata garantita `5–12 mesi` con penale automatica di **`150 €/giorno`** a carico dell'impresa (tetto massimo `5%` dell'importo contrattuale).
4. **Standard Tecnico Obbligatorio Ciclo Blue Arroyo:**
   - Cablaggio serrature smart keyless e Wi-Fi mesh per check-in remoto **Itassitance** (`subentroToscanCollaudoOneTap`);
   - Vani biancheria dedicati Runner (3 set/posto letto) e **Deep Cleaning post-cantiere affidato a PBA a `30 €/ora tutto incluso, pago per risultato finale DOC`** (`deepCleaningToscanPba30EurDoc`);
   - Allestimento fotografico e pubblicazione diretta su **SmartsBookings** (`smartsBookingsFeedIcalCashback48h`, payout `85%` proprietario + `15%` cashback ospite).

## 3. Conseguenze
- Conformità 100% a TUF (D.Lgs. 58/1998) e Reg. UE 2020/1503.
- Tutte le varianti future delle singole commesse vengono tracciate come ADR figlie in `docs/adr/` e sincronizzate con `/api/amministrazione/company-input` (`azienda_id: 'toscan'`).
