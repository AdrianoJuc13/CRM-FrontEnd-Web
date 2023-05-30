import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  header_name: {
    compani: ["Nume", "Email", "Vanzari", "Segment", "Telefon", "Activitate"],
    contacte: [""],
    rapoarte: [
      "raport1",
      "raport2",
      "raport3",
      "raport4",
      "raport5",
      "raport6",
    ],
    prospectare: [
      "alexandru",
      "adriano",
      "vasile",
      "ion",
      "alexandru",
      "adriano",
      "vasile",
      "ion",
    ],
    plan_de_actiune: ["alexandru", "adriano", "vasile", "ion"],
    oportunitatii: [
      "alexandru",
      "adriano",
      "vasile",
      "ion",
      "alexandru",
      "adriano",
      "vasile",
      "ion",
    ],
    obiectivee: [
      "raport1",
      "raport2",
      "raport3",
      "raport4",
      "raport5",
      "raport6",
    ],
  },
  header_key: {
    compani: [
      "companie_denumire",
      "companie_email",
      "companie_vanzari_totale",
      "nisa_denumire",
      "companie_numar_telefon",
      "activitate_companie_denumire",
    ],
    contacte: [""],
  },
  detalii_name: {
    compani: [
      "Nr. inmatric.",
      "Cod CAEN",
      "Cod inreg.",
      "Adresa pct. lucru",
      "Sector vanzari",
      "Punct de lucru",
      "Angaj. resp. Nume",
      "Angaj. resp. Preume",
      "Segment piata",
      "Adresa pct. lucru",
      "Adresa sociala",
      "Coordonate GPS",
    ],
  },
  detalii_key: {
    compani: [
      "companie_cod_fiscalj",
      "empty",
      "companie_numar_inregistrare",
      "punct_lucru_adresa",
      "nisa_denumire",
      "punct_lucru_nume",
      "angajat_nume",
      "angajat_prenume",
      "marime_companie_denumire",
      "punct_lucru_adresa",
      "companie_adresa_facturare",
      "companie_locatie_gps",
    ],
  },
};

const HeadersSlice = createSlice({
  name: "headers",
  initialState,
  reducers: {},
});

// export const { changeCurrentName } = HeadersSlice.actions;

export default HeadersSlice.reducer;
