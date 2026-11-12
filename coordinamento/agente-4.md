# Ordini Operativi — `agente-4` (Amministrazione — Ponte verso `/amministrazione`, SAL, DURC & Subentro Ciclo Blue Arroyo)

**Ultimo aggiornamento:** 10/11/2026 (`JUL-055` · Avanzamento Piano 1 al **100% `DEPLOY-READY toscan-100`** · Titolarità `BLUEARROYO S.R.L.` confermata)  
**Stato assegnazioni:** **100% `Fatto`** (resta solo eventuale verifica umana operativa di Gabriela/Biviana su `/amministrazione`)

## 1. Connettore Additivo 1-Clic verso `/api/amministrazione/company-input` (Task #101 — `Fatto`)
- Implementato in modalità **SOLO ADDITIVA** in `kit-commerciale.html` (`#toscan-company-input-bridge`, `#btn-send-company-input-all`, `#btn-send-company-input-single`, `#btn-tech-company-input` e helper globale `window.sendToscanCompanyInput()`):
  - Trasmette in 1 clic a `http://localhost:3000/api/amministrazione/company-input` (con `azienda_id: 'toscan'`) il pacchetto completo o singolo dei **Report Operativi/Commerciali (`Verbale SAL`, `DURC & Cassa Edile`, `Contratto 5 SAL`, `Ore Cantiere & Deep Cleaning PBA 30 €/h DOC`, `Provvigione Partner 2–3%`)** per il controllo centralizzato di **Gabriela, Biviana e Julian** su `/amministrazione` e `/contabilita` (`DEC-17`).

## 2. Task #102 — Task di Pulizia Piano 1 (`In corso` — Pronta per Step 5)
- **Titolo:** *"Task di Pulizia Piano 1 — Rimozione moduli admin locali post-verifica trasloco su /amministrazione e separazione 100% Operativo & Commerciale"*
- **Regola di Sicurezza (Step 4 → Step 5):** Nessun modulo amministrativo locale viene rimosso finché **Julian, Gabriela e Biviana** non hanno completato il confronto in parallelo (Step 4) verificando che ogni dato (5 SAL, DURC, Cassa Edile, contratti, ore cantiere, fee partner 2–3%, intercompany PBA 30 €/h DOC) arrivi correttamente su `/amministrazione`. Ricevuto l'OK dello Step 4, `agente-4` e `agente-1` eseguiranno lo Step 5 rimuovendo i pannelli admin locali ridondanti e lasciando il Piano 1 **100% Operativo & Commerciale**.
