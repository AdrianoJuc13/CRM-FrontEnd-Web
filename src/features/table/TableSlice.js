import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Companies---------------------------------------
  company_tabel: [
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
  contact_table: ["Nume", "Prenume", "Email", "Telefon", "Companie", "Functie"],
  contact_keys_table: [
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
  oportunity_table: [
    "Titlu",
    "Tip",
    "Descriere",
    "Identificat de",
    "Data Emitere",
  ],
  oportunity_keys_table: [
    "oportunitate_id",
    "descriere",
    "titlu_oportunitate",
    "tip_oportunitate",
    "data_creare_initiala",
    // "data_emitere",
    // "perioada_desfasurare",
    // "data_limita",
    // "obiectiv_id",
    // "identificat_de",
    // "vanzari_totale",
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
    "actiune_id",
    "tip_actiune",
    "status",
    "receptor_id",
    "emitator_id",
    "descriere",
    // "data_creare_initiala",
    // "data_emitere",
    // "due_date",
    // "oportunitate_id",
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
    "actiune_id",
    "tip_actiune",
    "status",
    "receptor_id",
    "emitator_id",
    "descriere",
    // "data_creare_initiala",
    // "data_emitere",
    // "due_date",
    // "oportunitate_id",
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
    "obiectiv_id",
    "tip_obiectiv",
    "titlu_obiectiv",
    "nisa_id",
    "punct_lucru_id",
    // "companie_id",
    // "vanzari_totale",
    // "data_creare_initiala",
    // "data_emitere",
    // "numar_luni",
    // "data_limita",
  ],
  // ------------------------------------------------

  // Raports ----------------------------------------
  report_table: ["Tip", "Valoare", "id actiune", "Descriere"],
  report_keys_table: [
    "tip_rezultat",
    "valoare",
    "actiune_id",
    "rezultat_descriere",
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
