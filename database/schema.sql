-- ============================================================
-- TOSCAN COSTRUZIONI (Part of Blue Arroyo Group) - Database Schema
-- Hospitality & Living General Contractor | Firenze, Toscana
-- Specializzazioni: Hotel, Agriturismi, Student Hotel, Short & Medium Term
-- Modelli di Business: Crowdfunding Chiuso per Transazione | Unico Investitore
-- Email: toscancostruzioni@bluearroyo.it | Sito: https://toscancostruzioni.it
-- ============================================================

-- Tabella azienda (configurazione)
CREATE TABLE IF NOT EXISTS azienda (
  id INTEGER PRIMARY KEY,
  nome TEXT NOT NULL DEFAULT 'Toscan Costruzioni',
  gruppo TEXT NOT NULL DEFAULT 'Blue Arroyo Group',
  settore TEXT DEFAULT 'Hospitality & Living General Contractor (Hotel, Agriturismi, Student Hotel, Short & Medium Term)',
  anno_fondazione INTEGER DEFAULT 2005,
  sede TEXT DEFAULT 'Firenze, Toscana, Italia',
  email TEXT DEFAULT 'toscancostruzioni@bluearroyo.it',
  telefono TEXT DEFAULT '+39 351 038 0392',
  sito TEXT DEFAULT 'https://toscancostruzioni.it',
  referente TEXT DEFAULT 'Andres Julian Herrera Santos',
  email_referente TEXT DEFAULT 'admin@bluearroyo.it',
  aggiornato_il TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabella servizi e asset class
CREATE TABLE IF NOT EXISTS servizi (
  id TEXT PRIMARY KEY,
  nome TEXT NOT NULL,
  descrizione TEXT,
  prezzo_min_mq REAL,
  prezzo_max_mq REAL,
  prezzo_fisso REAL,
  percentuale_lavori REAL,
  attivo INTEGER DEFAULT 1,
  creato_il TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabella progetti & operazioni immobiliari
CREATE TABLE IF NOT EXISTS progetti (
  id TEXT PRIMARY KEY,
  nome TEXT NOT NULL,
  tipo TEXT,                  -- Short & Medium Term, Boutique Hotel, Agriturismo & Resort, Student Hotel (PBSA)
  modello_business TEXT,      -- 'Crowdfunding Chiuso' | 'Unico Investitore'
  unita_chiavi TEXT,          -- es. '14 Suites', '42 Camere', '12 Suite + Spa'
  cliente TEXT,
  nazionalita_cliente TEXT,
  localita TEXT,
  mq REAL,
  anno_inizio INTEGER,
  anno_fine INTEGER,
  stato TEXT DEFAULT 'In Corso',
  budget_contrattuale REAL,
  budget_finale REAL,
  scostamento_budget_pct REAL,
  durata_mesi INTEGER,
  ritardo_giorni INTEGER DEFAULT 0,
  roi_target TEXT,            -- es. '14.8% IRR', '11.5% Yield'
  valutazione_cliente INTEGER,
  note TEXT,
  creato_il TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabella lead, investitori e committenti
CREATE TABLE IF NOT EXISTS lead (
  id TEXT PRIMARY KEY,
  nome_contatto TEXT NOT NULL,
  email TEXT,
  telefono TEXT,
  nazionalita TEXT,
  modello_interesse TEXT,     -- 'Crowdfunding Chiuso' | 'Unico Investitore'
  tipo_immobile TEXT,         -- Asset class hospitality richiesta
  localita TEXT,
  mq_stimati REAL,
  budget_dichiarato REAL,
  preventivo_emesso REAL,
  stato TEXT DEFAULT 'Nuovo Lead',
  data_richiesta DATE,
  canale TEXT,
  note TEXT,
  creato_il TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================
-- DATI INIZIALI
-- ============================================================

INSERT OR IGNORE INTO azienda (id, nome, gruppo) VALUES (1, 'Toscan Costruzioni', 'Blue Arroyo Group');

INSERT OR IGNORE INTO progetti (id, nome, tipo, modello_business, unita_chiavi, cliente, nazionalita_cliente, localita, mq, anno_inizio, anno_fine, stato, budget_contrattuale, budget_finale, scostamento_budget_pct, durata_mesi, ritardo_giorni, roi_target, valutazione_cliente, note) VALUES
  ('PRJ001', 'Palazzo Serragli Short-Term Suites – Firenze', 'Short & Medium Term', 'Crowdfunding Chiuso', '14 Suites', 'SPV Serragli Hospitality (Blue Arroyo Club Deal)', 'Internazionale', 'Firenze – Oltrarno (FI)', 680, 2023, 2024, 'Completato', 1120000, 1115000, -0.45, 11, 0, '14.8% IRR', 5, 'Riconversione cielo-terra in 14 serviced apartments per short e medium term.'),
  ('PRJ002', 'Podere Val d''Orcia Wine & Agriturismo – Pienza', 'Agriturismo & Resort', 'Unico Investitore', '12 Suite + Spa', 'Thompson Hospitality Family Office', 'Americana', 'Pienza – Val d''Orcia (SI)', 920, 2023, 2024, 'Completato', 1650000, 1648000, -0.12, 15, 0, '11.5% Yield', 5, 'Appalto completo dalla visione architettonica alla realizzazione chiavi in mano.'),
  ('PRJ003', 'Campus Novoli Student Hotel – Firenze', 'Student Hotel (PBSA)', 'Crowdfunding Chiuso', '42 Camere + Co-Working', 'SPV Firenze Student Living (Blue Arroyo)', 'Italiana / EU', 'Firenze – Polo Novoli (FI)', 1250, 2022, 2024, 'Completato', 1980000, 1980000, 0.0, 14, 0, '13.2% IRR', 5, 'Riconversione ex-immobile direzionale in Student Hotel con 42 camere private.'),
  ('PRJ004', 'Boutique Hotel Lungarno – Firenze', 'Boutique Hotel', 'Unico Investitore', '18 Camere + Rooftop', 'Gruppo Alberghiero Helvetia AG', 'Svizzera', 'Firenze – Lungarno (FI)', 840, 2025, 2026, 'In Corso', 1480000, NULL, NULL, 12, 0, '12.4% Yield', NULL, 'Commessa Unico Investitore: concept interior 5 stelle, restauro vincolato, rooftop bar.'),
  ('PRJ005', 'Sant''Ambrogio Medium-Term Hub – Firenze', 'Short & Medium Term', 'Crowdfunding Chiuso', '9 Serviced Apts', 'SPV Sant''Ambrogio Living (Blue Arroyo)', 'Internazionale', 'Firenze – Sant''Ambrogio (FI)', 460, 2025, 2026, 'In Corso', 690000, NULL, NULL, 8, 0, '15.5% IRR', NULL, 'Frazionamento e creazione di 9 unità destinate a soggiorni short e medium term.'),
  ('PRJ006', 'Tenuta Chianti Classico Eco-Resort – Greve', 'Agriturismo & Resort', 'Unico Investitore', '10 Eco-Villas', 'Famiglia De Luca / Wine Estates', 'Italiana', 'Greve in Chianti (FI)', 780, 2025, 2026, 'In Corso', 1320000, NULL, NULL, 13, 0, '11.8% Yield', NULL, 'Sviluppo chiavi in mano per unico proprietario: recupero coloniche in agriturismo di lusso.');

INSERT OR IGNORE INTO lead (id, nome_contatto, email, telefono, nazionalita, modello_interesse, tipo_immobile, localita, mq_stimati, budget_dichiarato, preventivo_emesso, stato, data_richiesta, canale, note) VALUES
  ('LD001', 'Mr. James Hawkins – Apex Capital', 'jhawkins@apexcap.co.uk', '+44 7700 900123', 'Britannica', 'Unico Investitore', 'Boutique Hotel (16 camere)', 'Firenze Centro Storico', 750, 1400000, 1365000, 'Preventivo Inviato', '2025-09-10', 'Blue Arroyo Network', 'Family office UK vuole acquisire e riconvertire palazzo a Firenze.'),
  ('LD002', 'Dott. Roberto Ferri', 'r.ferri@ferriholding.it', '+39 055 234 5678', 'Italiana', 'Crowdfunding Chiuso', 'Short & Medium Term (8 unità)', 'Firenze – Porta al Prato', 380, 250000, 580000, 'In Trattativa', '2025-09-22', 'Sito web', 'Interessato a entrare con ticket da €250k nel prossimo Club Deal Short-Term.'),
  ('LD003', 'Herr Wolfgang Braun', 'w.braun@bavaria-invest.de', '+49 170 555 7890', 'Tedesca', 'Unico Investitore', 'Agriturismo Luxury (14 suite)', 'San Gimignano (SI)', 1100, 1850000, NULL, 'Sopralluogo Fissato', '2025-10-04', 'Referral da PRJ002', 'Richiede studio di fattibilità e appalto completo chiavi in mano.'),
  ('LD004', 'Nordic Student Living AB', 'expansion@nordicstudent.se', '+46 8 555 1234', 'Svedese', 'Unico Investitore', 'Student Hotel (60 posti letto)', 'Pisa / Firenze', 1600, 2400000, 2380000, 'Convertito', '2025-08-15', 'Blue Arroyo Group', 'Operatore scandinavo per sviluppo nuovo Student Hub in Toscana.'),
  ('LD005', 'Ing. Marco Valenti & Partners', 'm.valenti@valentire.it', '+39 348 900 1122', 'Italiana', 'Crowdfunding Chiuso', 'Short & Medium Term (12 unità)', 'Siena Centro', 540, 150000, NULL, 'Nuovo Lead', '2025-10-25', 'LinkedIn / Blue Arroyo', 'Vuole co-investire nella prossima transazione chiusa di frazionamento.');
