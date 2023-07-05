import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Companies---------------------------------------
  companii_tabel: [
    "Nume",
    "Email",
    "Vanzari",
    "Segment",
    "Telefon",
    "Activitate",
  ],
  company_keys_table: [
    "nume",
    // "companie_id",
    "adresa_livrare",
    "activitate_companie_id",
    "angajat_responsabil",
    "cifra_afaceri",
    "numar_inregistrare",
    // "nisa_id",
    // "marime_companie_id",
    // "vanzari_totale",
    // "adresa_facturare",
    // "numar_angajati",
    // "locatie_gps",
    // "punct_lucru_id",
  ],
  // ------------------------------------------------

  // Contacts ----------------------------------------
  contacts_table: [
    "Nume",
    "Prenume",
    "Email",
    "Telefon",
    "Companie",
    "Functie",
  ],
  contacts_keys_table: [
    "angajat_nume",
    "angajat_prenume",
    "angajat_email",
    "angajat_numar_telefon",
    "angajat_id",
    "angajat_functie",

    // "angajat_tip",
    // "angajat_punct_lucru_id",
    // "tip_angajat_id",
    // "tip_angajat_nume",
    // "functie_angajat_id",
    // "functie_angajat_nume",
    // "punct_lucru_i",
    // "punct_lucru_nume",
    // "punct_lucru_adresa",
    // "punct_lucru_vanzari_totale",
  ],
  // ------------------------------------------------

  // Oportunities -----------------------------------
  oportunities_table: [
    "Titlu",
    "Tip",
    "Descriere",
    "Identificat de",
    "Data Emitere",
  ],
  oportunities_keys_table: [
    "nume",
    "c2-----------",
    "c3-----------",
    "c4-----------",
    "c5-----------",
    "c6-----------",
  ],
  // ------------------------------------------------

  // Action Plan -----------------------------------
  action_plan_table: [
    "Tip",
    "Status",
    "Emitator",
    "Data Crearii",
    "Data Limita",
    "Oportunitate",
  ],
  action_plan_keys_table: [
    "nume",
    "c2-----------",
    "c3-----------",
    "c4-----------",
    "c5-----------",
    "c6-----------",
  ],
  // ------------------------------------------------

  // Prospecting visit -----------------------------------
  prospecting_visit_table: [
    "Status",
    "Receptor",
    "Emitator",
    "Data Crearii",
    "Data Limita",
    "Oportunitate",
  ],
  prospecting_visit_keys_table: [
    "nume",
    "c2-----------",
    "c3-----------",
    "c4-----------",
    "c5-----------",
    "c6-----------",
  ],
  // ------------------------------------------------

  // Objective----------------------------------
  objective_table: [
    "Tip",
    "Titlu",
    "Pct. Lucru",
    "Nisa",
    "Companie",
    "Vanzari Totale",
    "Data Crearii",
    "Data Limita",
  ],
  objective_keys_table: [
    "nume",
    "c2-----------",
    "c3-----------",
    "c4-----------",
    "c5-----------",
    "c6-----------",
  ],
  // ------------------------------------------------

  // Raports ----------------------------------------
  reports_table: ["Tip", "Titlu"],
  reports_keys_table: [
    "nume",
    "c2-----------",
    "c3-----------",
    "c4-----------",
    "c5-----------",
    "c6-----------",
  ],
  // ------------------------------------------------

  // Nise ???
  nise_tabel: ["Nume", "Persoana Responsabila", "Vanzari Totale"],
  // ------------------------------------------------
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {},
});

export default tableSlice.reducer;
