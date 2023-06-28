import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  companii_tabel: [
    "Nume",
    "Email",
    "Vanzari",
    "Segment",
    "Telefon",
    "Activitate",
  ],
  contacte_tabel: [
    "Nume",
    "Prenume",
    "Email",
    "Telefon",
    "Companie",
    "Functie",
  ],
  oportunitatii_tabel: [
    "Titlu",
    "Tip",
    "Descriere",
    "Identificat de",
    "Data Emitere",
  ],
  plan_de_actiuni_tabel: [
    "Tip",
    "Status",
    "Emitator",
    "Data Crearii",
    "Data Limita",
    "Oportunitate",
  ],
  prospectare_tabel: [
    "Status",
    "Receptor",
    "Emitator",
    "Data Crearii",
    "Data Limita",
    "Oportunitate",
  ],
  obiective_tabel: [
    "Tip",
    "Titlu",
    "Pct. Lucru",
    "Nisa",
    "Companie",
    "Vanzari Totale",
    "Data Crearii",
    "Data Limita",
  ],

  //   rapoarte_tabel: [
  //     "Tip",
  //     "Titlu",
  //   ],

  nise_tabel: ["Nume", "Persoana Responsabila", "Vanzari Totale"],
};
const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {},
});

export default tableSlice.reducer;
