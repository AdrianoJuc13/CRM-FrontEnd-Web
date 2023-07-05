import { createSlice } from "@reduxjs/toolkit";

//import actions for pagination
import pageUp from "../utils/table_state_management/pageUp";
import PageDown from "../utils/table_state_management/pageDown";
import setItemsPerPage from "../utils/table_state_management/setItemsPerPage";

//import async thunk actions
import { fetchActionPlan } from "./actions/crud/fetchActionPlan";
import { addActionPlan } from "./actions/crud/addActionPlan";
import { updateActionPlan } from "./actions/crud/updateActionPlan";
import { deleteActionPlan } from "./actions/crud/deleteActionPlan";
import { getNumberOfActionPlan } from "./actions/getNumberOfActionPlan";

//import ASYNC THUNK ACTIONS HANDLERS FOR ADD ActionPlan
import addActionPlanPending from "./handle_async_thunk/addActionPlan/pending";
import addActionPlanFulfilled from "./handle_async_thunk/addActionPlan/fulfilled";
import addActionPlanRejected from "./handle_async_thunk/addActionPlan/rejected";

//import ASYNC THUNK ACTIONS HANDLERS FOR UPDATE ActionPlan
import updateActionPlanPending from "./handle_async_thunk/updateActionPlan/pending";
import updateActionPlanFulfilled from "./handle_async_thunk/updateActionPlan/fulfilled";
import updateActionPlanRejected from "./handle_async_thunk/updateActionPlan/rejected";

//import ASYNC THUNK ACTIONS HANDLERS FOR DELETE ActionPlan
import deleteActionPlanPending from "./handle_async_thunk/deleteActionPlan/pending";
import deleteActionPlanFulfilled from "./handle_async_thunk/deleteActionPlan/fulfilled";
import deleteActionPlanRejected from "./handle_async_thunk/deleteActionPlan/rejected";

//import ASYNC THUNK ACTIONS HANDLERS FOR FETCH ActionPlan
import fetchActionPlanPending from "./handle_async_thunk/fetchActionPlan/pending";
import fetchActionPlanFulfilled from "./handle_async_thunk/fetchActionPlan/fulfilled";
import fetchActionPlanRejected from "./handle_async_thunk/fetchActionPlan/rejected";

//import ASYNC THUNK ACTIONS HANDLERS FOR FETCH NUMBER OF ActionPlan
import fetchNumberOfActionPlanPending from "./handle_async_thunk/getNumberOfActionPlan/pending";
import fetchNumberOfActionPlanFulfilled from "./handle_async_thunk/getNumberOfActionPlan/fulfilled";
import fetchNumberOfActionPlanRejected from "./handle_async_thunk/getNumberOfActionPlan/rejected";

const initialState = {
  // numarul total  de pagini de companii din baza de date
  numberOfTotalPages: 0,
  //numarul total de companii din baza de date
  numberOfTotalItems: 0,
  // acest parametru ne spune daca mai exista pagini de luat din baza de date
  numberOfTotalPagesError: "",
  numberOfTotalPagesLoading: false,

  //number of ActionPlan per page
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
  currentActionPlanState: {},

  loadingFetchActionPlan: false,
  errorFetchActionPlan: "",

  loadingAddActionPlan: false,
  errorAddActionPlan: "",

  loadingUpdateActionPlan: false,
  errorUpdateActionPlan: "",

  loadingDeleteActionPlan: false,
  errorDeleteActionPlan: "",
};

// Generates pending, fulfilled and rejected action types

const ActionPlanSlice = createSlice({
  name: "actionplan",
  initialState,
  reducers: {
    pageUpActionPlan(state, action) {
      pageUp(state, action);
    },
    pageDownActionPlan(state, action) {
      PageDown(state, action);
    },
    setItemsPerPageActionPlan(state, action) {
      setItemsPerPage(state, action);
    },
    clearErrorActionPlan(state, action) {
      state.error = "";
    },
    closePopUp(state, action) {
      state.isPopupOpen = false;
    },
    openPopup(state, action) {
      state.isPopupOpen = true;
    },
    setCurrentActionPlanState(state, action) {
      // const uidNumber = action.payload
      const index = action.payload;
      state.currentActionPlanState = state.currentPageItems[index];
    },
  },

  extraReducers: (builder) => {
    //fetch ActionPlan async thunk reducers
    builder.addCase(fetchActionPlan.pending, fetchActionPlanPending());
    builder.addCase(fetchActionPlan.fulfilled, fetchActionPlanFulfilled());
    builder.addCase(fetchActionPlan.rejected, fetchActionPlanRejected());

    //add ActionPlan async thunk reducers
    builder.addCase(addActionPlan.pending, addActionPlanPending());
    builder.addCase(addActionPlan.fulfilled, addActionPlanFulfilled());
    builder.addCase(addActionPlan.rejected, addActionPlanRejected());

    //update ActionPlan async thunk reducers
    builder.addCase(updateActionPlan.pending, updateActionPlanPending());
    builder.addCase(updateActionPlan.fulfilled, updateActionPlanFulfilled());
    builder.addCase(updateActionPlan.rejected, updateActionPlanRejected());

    //delete ActionPlan async thunk reducers
    builder.addCase(deleteActionPlan.pending, deleteActionPlanPending());
    builder.addCase(deleteActionPlan.fulfilled, deleteActionPlanFulfilled());
    builder.addCase(deleteActionPlan.rejected, deleteActionPlanRejected());

    //get number of ActionPlan async thunk reducers
    builder.addCase(
      getNumberOfActionPlan.pending,
      fetchNumberOfActionPlanPending()
    );
    builder.addCase(
      getNumberOfActionPlan.fulfilled,
      fetchNumberOfActionPlanFulfilled()
    );
    builder.addCase(
      getNumberOfActionPlan.rejected,
      fetchNumberOfActionPlanRejected()
    );
  },
});

export const {
  pageUpActionPlan,
  pageDownActionPlan,
  setItemsPerPageActionPlan,
  clearErrorActionPlan,
  closePopUp,
  openPopup,
  setCurrentActionPlanState,
} = ActionPlanSlice.actions;
export default ActionPlanSlice.reducer;
