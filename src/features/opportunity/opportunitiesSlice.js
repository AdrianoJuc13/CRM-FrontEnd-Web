import { createSlice } from "@reduxjs/toolkit";

//import actions for pagination
import pageUp from "../utils/table_state_management/pageUp";
import PageDown from "../utils/table_state_management/pageDown";
import setItemsPerPage from "../utils/table_state_management/setItemsPerPage";

//import async thunk actions
import { fetchOpportunities } from "./actions/crud/fetchOpportunities";
import { addOpportunity } from "./actions/crud/addOpportunity";
import { updateOpportunity } from "./actions/crud/updateOpportunity";
import { deleteOpportunity } from "./actions/crud/deleteOpportunity";
import { getNumberOfOpportunities } from "./actions/getNumberOfOpportunities";

//import ASYNC THUNK ACTIONS HANDLERS FOR ADD Opportunity
import addOpportunityPending from "./handle_async_thunk/addOpportunity/pending";
import addOpportunityFulfilled from "./handle_async_thunk/addOpportunity/fulfilled";
import addOpportunityRejected from "./handle_async_thunk/addOpportunity/rejected";

//import ASYNC THUNK ACTIONS HANDLERS FOR UPDATE Opportunity
import updateOpportunityPending from "./handle_async_thunk/updateOpportunity/pending";
import updateOpportunityFulfilled from "./handle_async_thunk/updateOpportunity/fulfilled";
import updateOpportunityRejected from "./handle_async_thunk/updateOpportunity/rejected";

//import ASYNC THUNK ACTIONS HANDLERS FOR DELETE Opportunity
import deleteOpportunityPending from "./handle_async_thunk/deleteOpportunity/pending";
import deleteOpportunityFulfilled from "./handle_async_thunk/deleteOpportunity/fulfilled";
import deleteOpportunityRejected from "./handle_async_thunk/deleteOpportunity/rejected";

//import ASYNC THUNK ACTIONS HANDLERS FOR FETCH Opportunity
import fetchOpportunitiesPending from "./handle_async_thunk/fetchOpportunities/pending";
import fetchOpportunitiesFulfilled from "./handle_async_thunk/fetchOpportunities/fulfilled";
import fetchOpportunitiesRejected from "./handle_async_thunk/fetchOpportunities/rejected";

//import ASYNC THUNK ACTIONS HANDLERS FOR FETCH NUMBER OF Opportunities
import fetchNumberOfOpportunitiesPending from "./handle_async_thunk/getNumberOfOpportunities/pending";
import fetchNumberOfOpportunitiesFulfilled from "./handle_async_thunk/getNumberOfOpportunities/fulfilled";
import fetchNumberOfOpportunitiesRejected from "./handle_async_thunk/getNumberOfOpportunities/rejected";

const initialState = {
  // numarul total  de pagini de companii din baza de date
  numberOfTotalPages: 0,
  //numarul total de companii din baza de date
  numberOfTotalItems: 0,
  // acest parametru ne spune daca mai exista pagini de luat din baza de date
  numberOfTotalPagesError: "",
  numberOfTotalPagesLoading: false,

  //number of Opportunities per page
  itemsPerPage: 5,

  //companiile de pe pagina curenta
  currentPageItems: [
    {
      angajat_id: "266caa08-f7c7-4620-8168-0198f33aa63b",
      angajat_nume: "Buleu",
      angajat_prenume: "Alexandru",
      angajat_tip: "6c04ecef-b291-477d-887c-756f65f480ff",
      angajat_functie: "87b4a0ca-5769-4cad-9bad-7b81459b2dbb",
      angajat_email: "matei.anutei24@gmail.com",
      angajat_numar_telefon: "07noidoi",
      angajat_punct_lucru_id: "b0fbaff2-943b-4d21-a834-01942bf2a7c1",
      tip_angajat_id: "6c04ecef-b291-477d-887c-756f65f480ff",
      tip_angajat_nume: "tip 2",
      functie_angajat_id: "87b4a0ca-5769-4cad-9bad-7b81459b2dbb",
      functie_angajat_nume: "functie 2",
      punct_lucru_i: "b0fbaff2-943b-4d21-a834-01942bf2a7c1",
      punct_lucru_nume: "Punct lucru 1",
      punct_lucru_adresa: "Calea Burdujeni",
      punct_lucru_locatie_gps: "127 30",
      punct_lucru_vanzari_totale: 1000,
    },
    {
      angajat_id: "266caa08-f7c7-4620-8168-0198f33aa63b",
      angajat_nume: "Macedon",
      angajat_prenume: "Benjamin",
      angajat_tip: "6c04ecef-b291-477d-887c-756f65f480ff",
      angajat_functie: "87b4a0ca-5769-4cad-9bad-7b81459b2dbb",
      angajat_email: "matei.anei2@gmail.com",
      angajat_numar_telefon: "07noidoi",
      angajat_punct_lucru_id: "b0fbaff2-943b-4d21-a834-01942bf2a7c1",
      tip_angajat_id: "6c04ecef-b291-477d-887c-756f65f480ff",
      tip_angajat_nume: "tip 2",
      functie_angajat_id: "87b4a0ca-5769-4cad-9bad-7b81459b2dbb",
      functie_angajat_nume: "functie 2",
      punct_lucru_i: "b0fbaff2-943b-4d21-a834-01942bf2a7c1",
      punct_lucru_nume: "Punct lucru -2",
      punct_lucru_adresa: "Calea Oratorului",
      punct_lucru_locatie_gps: "127 30",
      punct_lucru_vanzari_totale: 1000,
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
  currentOpportunityState: {},

  loadingFetchOpportunities: false,
  errorFetchOpportunities: "",

  loadingAddOpportunity: false,
  errorAddOpportunity: "",

  loadingUpdateOpportunity: false,
  errorUpdateOpportunity: "",

  loadingDeleteOpportunity: false,
  errorDeleteOpportunity: "",
};

// Generates pending, fulfilled and rejected action types

const OpportunitiesSlice = createSlice({
  name: "opportunities",
  initialState,
  reducers: {
    pageUpOpportunities(state, action) {
      pageUp(state, action);
    },
    pageDownOpportunities(state, action) {
      PageDown(state, action);
    },
    setItemsPerPageOpportunities(state, action) {
      setItemsPerPage(state, action);
    },
    clearErrorOpportunities(state, action) {
      state.error = "";
    },
    closePopUp(state, action) {
      state.isPopupOpen = false;
    },
    openPopup(state, action) {
      state.isPopupOpen = true;
    },
    setCurrentOpportunityState(state, action) {
      // const uidNumber = action.payload
      const index = action.payload;
      state.currentOpportunityState = state.currentPageItems[index];
    },
  },

  extraReducers: (builder) => {
    //fetch Opportunities async thunk reducers
    builder.addCase(fetchOpportunities.pending, fetchOpportunitiesPending());
    builder.addCase(
      fetchOpportunities.fulfilled,
      fetchOpportunitiesFulfilled()
    );
    builder.addCase(fetchOpportunities.rejected, fetchOpportunitiesRejected());

    //add Opportunity async thunk reducers
    builder.addCase(addOpportunity.pending, addOpportunityPending());
    builder.addCase(addOpportunity.fulfilled, addOpportunityFulfilled());
    builder.addCase(addOpportunity.rejected, addOpportunityRejected());

    //update Opportunity async thunk reducers
    builder.addCase(updateOpportunity.pending, updateOpportunityPending());
    builder.addCase(updateOpportunity.fulfilled, updateOpportunityFulfilled());
    builder.addCase(updateOpportunity.rejected, updateOpportunityRejected());

    //delete Opportunity async thunk reducers
    builder.addCase(deleteOpportunity.pending, deleteOpportunityPending());
    builder.addCase(deleteOpportunity.fulfilled, deleteOpportunityFulfilled());
    builder.addCase(deleteOpportunity.rejected, deleteOpportunityRejected());

    //get number of Opportunities async thunk reducers
    builder.addCase(
      getNumberOfOpportunities.pending,
      fetchNumberOfOpportunitiesPending()
    );
    builder.addCase(
      getNumberOfOpportunities.fulfilled,
      fetchNumberOfOpportunitiesFulfilled()
    );
    builder.addCase(
      getNumberOfOpportunities.rejected,
      fetchNumberOfOpportunitiesRejected()
    );
  },
});

export const {
  pageUpOpportunities,
  pageDownOpportunities,
  setItemsPerPageOpportunities,
  clearErrorOpportunities,
  closePopUp,
  openPopup,
  setCurrentOpportunityState,
} = OpportunitiesSlice.actions;
export default OpportunitiesSlice.reducer;
