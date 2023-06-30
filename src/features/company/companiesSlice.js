import { createSlice } from "@reduxjs/toolkit";

//import actions for pagination
import pageUp from "../utils/table_state_management/pageUp";
import PageDown from "../utils/table_state_management/pageDown";
import setItemsPerPage from "../utils/table_state_management/setItemsPerPage";

//import async thunk actions
import { fetchCompanies } from "./actions/crud/fetchCompanies";
import { addCompany } from "./actions/crud/addCompany";
import { updateCompany } from "./actions/crud/updateCompany";
import { deleteCompany } from "./actions/crud/deleteCompany";
import { getNumberOfCompanies } from "./actions/getNumberOfCompanies";

//import ASYNC THUNK ACTIONS HANDLERS FOR ADD COMPANY
import addCompanyPending from "./handle_async_thunk/addCompany/pending";
import addCompanyFulfilled from "./handle_async_thunk/addCompany/fulfilled";
import addCompanyRejected from "./handle_async_thunk/addCompany/rejected";

//import ASYNC THUNK ACTIONS HANDLERS FOR UPDATE COMPANY
import updateCompanyPending from "./handle_async_thunk/updateCompany/pending";
import updateCompanyFulfilled from "./handle_async_thunk/updateCompany/fulfilled";
import updateCompanyRejected from "./handle_async_thunk/updateCompany/rejected";

//import ASYNC THUNK ACTIONS HANDLERS FOR DELETE COMPANY
import deleteCompanyPending from "./handle_async_thunk/deleteCompany/pending";
import deleteCompanyFulfilled from "./handle_async_thunk/deleteCompany/fulfilled";
import deleteCompanyRejected from "./handle_async_thunk/deleteCompany/rejected";

//import ASYNC THUNK ACTIONS HANDLERS FOR FETCH COMPANY
import fetchCompaniesPending from "./handle_async_thunk/fetchCompanies/pending";
import fetchCompaniesFulfilled from "./handle_async_thunk/fetchCompanies/fulfilled";
import fetchCompaniesRejected from "./handle_async_thunk/fetchCompanies/rejected";

//import ASYNC THUNK ACTIONS HANDLERS FOR FETCH NUMBER OF COMPANIES
import fetchNumberOfCompaniesPending from "./handle_async_thunk/getNumberOfCompanies/pending";
import fetchNumberOfCompaniesFulfilled from "./handle_async_thunk/getNumberOfCompanies/fulfilled";
import fetchNumberOfCompaniesRejected from "./handle_async_thunk/getNumberOfCompanies/rejected";

const initialState = {
  // numarul total  de pagini de companii din baza de date
  numberOfTotalPages: 0,
  //numarul total de companii din baza de date
  numberOfTotalItems: 0,
  // acest parametru ne spune daca mai exista pagini de luat din baza de date
  numberOfTotalPagesError: "",
  numberOfTotalPagesLoading: false,

  //number of companies per page
  itemsPerPage: 5,

  //companiile de pe pagina curenta
  currentPageItems: [
    {
      companie_id: "be06ca78-3577-4c55-9718-d73b00f9cead",
      nume: "Poligon Tech",
      numar_inregistrare: "test numar inregistrare",
      nisa_id: "9c7d8ec7-ec66-4910-9b78-56bd242956a8",
      marime_companie_id: "9bc0f1d8-acc6-4ddc-81b7-e65e7a18512f",
      activitate_companie_id: "27790647-5601-45ba-a44f-905a67438c04",
      vanzari_totale: 88888,
      adresa_livrare: "strada terst",
      adresa_facturare: "tesdf t",
      numar_angajati: 20,
      cifra_afaceri: 222222,
      locatie_gps: "asdasd",
      angajat_responsabil: "d12c96f0-1433-4399-be22-8e46ba02ae41",
      punct_lucru_id: "f1ceb2e2-77d5-421d-89df-0fdf63e1591c",
    },
    {
      companie_id: "a32f348e-5bee-44af-89ea-3f156aa31391",
      nume: "Poligon Tech UPDATED2",
      numar_inregistrare: "test numar inregistrare",
      nisa_id: "9c7d8ec7-ec66-4910-9b78-56bd242956a8",
      marime_companie_id: "9bc0f1d8-acc6-4ddc-81b7-e65e7a18512f",
      activitate_companie_id: "27790647-5601-45ba-a44f-905a67438c04",
      vanzari_totale: 88888,
      adresa_livrare: "strada terst",
      adresa_facturare: "tesdf t",
      numar_angajati: 20,
      cifra_afaceri: 222222,
      locatie_gps: "asdasd",
      angajat_responsabil: "d12c96f0-1433-4399-be22-8e46ba02ae41",
      punct_lucru_id: "f1ceb2e2-77d5-421d-89df-0fdf63e1591c",
    },
  ],
  // numarul paginii curente
  currentPage: 1,

  // toate companiile incarcate din baza de date
  itemsLoaded: [],
  // numarul paginilor incarcate din baza de date
  pagesLoaded: [],

  // trigger-ul popup-ului pentru a-l afisa pe ecran
  isPopupOpen: false,

  // state-ul companiei selectate
  currentCompanyState: {},

  loadingFetchCompanies: false,
  errorFetchCompanies: "",

  loadingAddCompany: false,
  errorAddCompany: "",

  loadingUpdateCompany: false,
  errorUpdateCompany: "",

  loadingDeleteCompany: false,
  errorDeleteCompany: "",
};

// Generates pending, fulfilled and rejected action types

const CompaniesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    pageUpCompanies(state, action) {
      pageUp(state, action);
    },
    pageDownCompanies(state, action) {
      PageDown(state, action);
    },
    setItemsPerPageCompanies(state, action) {
      setItemsPerPage(state, action);
    },
    clearErrorCompanies(state, action) {
      state.error = "";
    },
    closePopUp(state, action) {
      state.isPopupOpen = false;
    },
    openPopup(state, action) {
      state.isPopupOpen = true;
    },
    setCurrentCompanyState(state, action) {
      // const uidNumber = action.payload
      const index = action.payload;
      state.currentCompanyState = state.currentPageItems[index];
    },
  },

  extraReducers: (builder) => {
    //fetch companies async thunk reducers
    builder.addCase(fetchCompanies.pending, fetchCompaniesPending());
    builder.addCase(fetchCompanies.fulfilled, fetchCompaniesFulfilled());
    builder.addCase(fetchCompanies.rejected, fetchCompaniesRejected());

    //add company async thunk reducers
    builder.addCase(addCompany.pending, addCompanyPending());
    builder.addCase(addCompany.fulfilled, addCompanyFulfilled());
    builder.addCase(addCompany.rejected, addCompanyRejected());

    //update company async thunk reducers
    builder.addCase(updateCompany.pending, updateCompanyPending());
    builder.addCase(updateCompany.fulfilled, updateCompanyFulfilled());
    builder.addCase(updateCompany.rejected, updateCompanyRejected());

    //delete company async thunk reducers
    builder.addCase(deleteCompany.pending, deleteCompanyPending());
    builder.addCase(deleteCompany.fulfilled, deleteCompanyFulfilled());
    builder.addCase(deleteCompany.rejected, deleteCompanyRejected());

    //get number of companies async thunk reducers
    builder.addCase(
      getNumberOfCompanies.pending,
      fetchNumberOfCompaniesPending()
    );
    builder.addCase(
      getNumberOfCompanies.fulfilled,
      fetchNumberOfCompaniesFulfilled()
    );
    builder.addCase(
      getNumberOfCompanies.rejected,
      fetchNumberOfCompaniesRejected()
    );
  },
});

export const {
  pageUpCompanies,
  pageDownCompanies,
  setItemsPerPageCompanies,
  clearErrorCompanies,
  closePopUp,
  openPopup,
  setCurrentCompanyState,
} = CompaniesSlice.actions;
export default CompaniesSlice.reducer;
