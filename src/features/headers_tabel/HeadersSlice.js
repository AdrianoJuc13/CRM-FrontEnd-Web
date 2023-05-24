import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  header_tabel: {
    link_uri: [],
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
};

const HeadersSlice = createSlice({
  name: "headers",
  initialState,
  reducers: {},
});

// export const { openPopUp } = HeadersSlice.actions;

export default HeadersSlice.reducer;
