# Registro Decisioni Progettuali e Contrattuali (ADR) — Toscan Costruzioni (Piano 1 · Toscan Costruzioni)

Questo registro raccoglie le **Architecture & Project Decision Records (ADR)** delle commesse di **Toscan Costruzioni** (Piano 1 · `Toscan Costruzioni opera sotto BLUEARROYO S.R.L. – Sede legale: Via Matteo Palmieri 20/R, 50122 Firenze (FI) · P.IVA / C.F. 07480210488 · REA FI-706161 · SDI M5UXCR1 · PEC: bluearroyosrl@pec.it · Capitale sociale: € 50.000,00 i.v.`), in conformità alla **Task #30** di `docs/checklist.csv` e a `JUL-009`.

## Indice ADR Attive

| ID | Data | Stato | Titolo Decisione | Commessa / Ambito |
| :--- | :--- | :--- | :--- | :--- |
| [ADR-0001](./0001-contratto-prezzo-chiuso-5-sal-tuf-consob.md) | 09/11/2026 | Accettata (`Fatto`) | Adozione esclusiva Appalto a Corpo 5 SAL (`1.350–2.400 €/m²`), conformità TUF/CONSOB (`DEC-07`/`DEC-15`) e Subentro 1-Tap Ciclo Blue Arroyo (`DEC-05`/`DEC-16`) | Tutte le commesse Piano 1 + Villa Claudia |

## Regola Operativa per Nuove Varianti in Corso d'Opera (Task #30 & #38)
1. Nessuna variante progettuale o impiantistica viene eseguita in cantiere senza **Ordine di Variante scritto e firmato** dal Committente e dal Direttore Lavori.
2. Ogni variante approvata genera una scheda `ADR-00xx` numerata in questa cartella e viene trasmessa in 1 clic a `/api/amministrazione/company-input` (`azienda_id: 'toscan'`) per il controllo di Gabriela, Biviana e Julian.
