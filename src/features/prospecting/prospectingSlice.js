import { createSlice } from "@reduxjs/toolkit";

//import actions for pagination
import pageUp from "../utils/table_state_management/pageUp";
import PageDown from "../utils/table_state_management/pageDown";
import setItemsPerPage from "../utils/table_state_management/setItemsPerPage";

//import async thunk actions
import { fetchProspecting } from "./actions/crud/fetchProspecting";
import { addProspecting } from "./actions/crud/addProspecting";
import { updateProspecting } from "./actions/crud/updateProspecting";
import { deleteProspecting } from "./actions/crud/deleteProspecting";
import { getNumberOfProspecting } from "./actions/getNumberOfProspecting";

//import ASYNC THUNK ACTIONS HANDLERS FOR ADD Prospecting
import addProspectingPending from "./handle_async_thunk/addProspecting/pending";
import addProspectingFulfilled from "./handle_async_thunk/addProspecting/fulfilled";
import addProspectingRejected from "./handle_async_thunk/addProspecting/rejected";

//import ASYNC THUNK ACTIONS HANDLERS FOR UPDATE Prospecting
import updateProspectingPending from "./handle_async_thunk/updateProspecting/pending";
import updateProspectingFulfilled from "./handle_async_thunk/updateProspecting/fulfilled";
import updateProspectingRejected from "./handle_async_thunk/updateProspecting/rejected";

//import ASYNC THUNK ACTIONS HANDLERS FOR DELETE Prospecting
import deleteProspectingPending from "./handle_async_thunk/deleteProspecting/pending";
import deleteProspectingFulfilled from "./handle_async_thunk/deleteProspecting/fulfilled";
import deleteProspectingRejected from "./handle_async_thunk/deleteProspecting/rejected";

//import ASYNC THUNK ACTIONS HANDLERS FOR FETCH Prospecting
import fetchProspectingPending from "./handle_async_thunk/fetchProspecting/pending";
import fetchProspectingFulfilled from "./handle_async_thunk/fetchProspecting/fulfilled";
import fetchProspectingRejected from "./handle_async_thunk/fetchProspecting/rejected";

//import ASYNC THUNK ACTIONS HANDLERS FOR FETCH NUMBER OF Prospecting
import fetchNumberOfProspectingPending from "./handle_async_thunk/getNumberOfProspecting/pending";
import fetchNumberOfProspectingFulfilled from "./handle_async_thunk/getNumberOfProspecting/fulfilled";
import fetchNumberOfProspectingRejected from "./handle_async_thunk/getNumberOfProspecting/rejected";

const initialState = {
  // numarul total  de pagini de companii din baza de date
  numberOfTotalPages: 0,
  //numarul total de companii din baza de date
  numberOfTotalItems: 0,
  // acest parametru ne spune daca mai exista pagini de luat din baza de date
  numberOfTotalPagesError: "",
  numberOfTotalPagesLoading: false,

  //number of Prospecting per page
  itemsPerPage: 5,

  //companiile de pe pagina curenta
  currentPageItems: [
    {
      actiune_id: "09556d43-2010-4d0c-ad7f-c0ab077650fd",
      tip_actiune: "8594a581-b10b-41f4-a50f-b47dd200aa9e",
      status: "1a05ad64-24e5-4054-8419-d510691d6bd6",
      receptor_id: "266caa08-f7c7-4620-8168-0198f33aa63b",
      emitator_id: "266caa08-f7c7-4620-8168-0198f33aa63b",
      descriere: "test descriere de sters + update",
      data_creare_initiala: "test data creare initiala",
      data_emitere: "test data emitere",
      due_date: "test due date",
      oportunitate_id: "48765480-7bad-43b2-8c1f-5c5af780871c",
    },
    {
      actiune_id: "09556d43-2010-4d0c-ad7f-c0ab077650fd",
      tip_actiune: "8594a581-b10b-41f4-a50f-b47dd200aa9e",
      status: "1a05ad64-24e5-4054-8419-d510691d6bd6",
      receptor_id: "266caa08-f7c7-4620-8168-0198f33aa63b",
      emitator_id: "266caa08-f7c7-4620-8168-0198f33aa63b",
      descriere: "test descriere de sters + update",
      data_creare_initiala: "test data creare initiala",
      data_emitere: "test data emitere",
      due_date: "test due date",
      oportunitate_id: "48765480-7bad-43b2-8c1f-5c5af780871c",
    },
    {
      actiune_id: "09556d43-2010-4d0c-ad7f-c0ab077650fd",
      tip_actiune: "8594a581-b10b-41f4-a50f-b47dd200aa9e",
      status: "1a05ad64-24e5-4054-8419-d510691d6bd6",
      receptor_id: "266caa08-f7c7-4620-8168-0198f33aa63b",
      emitator_id: "266caa08-f7c7-4620-8168-0198f33aa63b",
      descriere: "test descriere de sters + update",
      data_creare_initiala: "test data creare initiala",
      data_emitere: "test data emitere",
      due_date: "test due date",
      oportunitate_id: "48765480-7bad-43b2-8c1f-5c5af780871c",
    },
    {
      actiune_id: "09556d43-2010-4d0c-ad7f-c0ab077650fd",
      tip_actiune: "8594a581-b10b-41f4-a50f-b47dd200aa9e",
      status: "1a05ad64-24e5-4054-8419-d510691d6bd6",
      receptor_id: "266caa08-f7c7-4620-8168-0198f33aa63b",
      emitator_id: "266caa08-f7c7-4620-8168-0198f33aa63b",
      descriere: "test descriere de sters + update",
      data_creare_initiala: "test data creare initiala",
      data_emitere: "test data emitere",
      due_date: "test due date",
      oportunitate_id: "48765480-7bad-43b2-8c1f-5c5af780871c",
    },
    {
      actiune_id: "09556d43-2010-4d0c-ad7f-c0ab077650fd",
      tip_actiune: "8594a581-b10b-41f4-a50f-b47dd200aa9e",
      status: "1a05ad64-24e5-4054-8419-d510691d6bd6",
      receptor_id: "266caa08-f7c7-4620-8168-0198f33aa63b",
      emitator_id: "266caa08-f7c7-4620-8168-0198f33aa63b",
      descriere: "test descriere de sters + update",
      data_creare_initiala: "test data creare initiala",
      data_emitere: "test data emitere",
      due_date: "test due date",
      oportunitate_id: "48765480-7bad-43b2-8c1f-5c5af780871c",
    },
    {
      actiune_id: "09556d43-2010-4d0c-ad7f-c0ab077650fd",
      tip_actiune: "8594a581-b10b-41f4-a50f-b47dd200aa9e",
      status: "1a05ad64-24e5-4054-8419-d510691d6bd6",
      receptor_id: "266caa08-f7c7-4620-8168-0198f33aa63b",
      emitator_id: "266caa08-f7c7-4620-8168-0198f33aa63b",
      descriere: "test descriere de sters + update",
      data_creare_initiala: "test data creare initiala",
      data_emitere: "test data emitere",
      due_date: "test due date",
      oportunitate_id: "48765480-7bad-43b2-8c1f-5c5af780871c",
    },
    {
      actiune_id: "09556d43-2010-4d0c-ad7f-c0ab077650fd",
      tip_actiune: "8594a581-b10b-41f4-a50f-b47dd200aa9e",
      status: "1a05ad64-24e5-4054-8419-d510691d6bd6",
      receptor_id: "266caa08-f7c7-4620-8168-0198f33aa63b",
      emitator_id: "266caa08-f7c7-4620-8168-0198f33aa63b",
      descriere: "test descriere de sters + update",
      data_creare_initiala: "test data creare initiala",
      data_emitere: "test data emitere",
      due_date: "test due date",
      oportunitate_id: "48765480-7bad-43b2-8c1f-5c5af780871c",
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
  currentProspectingState: {},

  loadingFetchProspecting: false,
  errorFetchProspecting: "",

  loadingAddProspecting: false,
  errorAddProspecting: "",

  loadingUpdateProspecting: false,
  errorUpdateProspecting: "",

  loadingDeleteProspecting: false,
  errorDeleteProspecting: "",
};

// Generates pending, fulfilled and rejected action types

const ProspectingSlice = createSlice({
  name: "prospecting",
  initialState,
  reducers: {
    pageUpProspecting(state, action) {
      pageUp(state, action);
    },
    pageDownProspecting(state, action) {
      PageDown(state, action);
    },
    setItemsPerPageProspecting(state, action) {
      setItemsPerPage(state, action);
    },
    clearErrorProspecting(state, action) {
      state.error = "";
    },
    closePopUp(state, action) {
      state.isPopupOpen = false;
    },
    openPopup(state, action) {
      state.isPopupOpen = true;
    },
    setCurrentProspectingState(state, action) {
      // const uidNumber = action.payload
      const index = action.payload;
      state.currentProspectingState = state.currentPageItems[index];
    },
  },

  extraReducers: (builder) => {
    //fetch Prospecting async thunk reducers
    builder.addCase(fetchProspecting.pending, fetchProspectingPending());
    builder.addCase(fetchProspecting.fulfilled, fetchProspectingFulfilled());
    builder.addCase(fetchProspecting.rejected, fetchProspectingRejected());

    //add Prospecting async thunk reducers
    builder.addCase(addProspecting.pending, addProspectingPending());
    builder.addCase(addProspecting.fulfilled, addProspectingFulfilled());
    builder.addCase(addProspecting.rejected, addProspectingRejected());

    //update Prospecting async thunk reducers
    builder.addCase(updateProspecting.pending, updateProspectingPending());
    builder.addCase(updateProspecting.fulfilled, updateProspectingFulfilled());
    builder.addCase(updateProspecting.rejected, updateProspectingRejected());

    //delete Prospecting async thunk reducers
    builder.addCase(deleteProspecting.pending, deleteProspectingPending());
    builder.addCase(deleteProspecting.fulfilled, deleteProspectingFulfilled());
    builder.addCase(deleteProspecting.rejected, deleteProspectingRejected());

    //get number of Prospecting async thunk reducers
    builder.addCase(
      getNumberOfProspecting.pending,
      fetchNumberOfProspectingPending()
    );
    builder.addCase(
      getNumberOfProspecting.fulfilled,
      fetchNumberOfProspectingFulfilled()
    );
    builder.addCase(
      getNumberOfProspecting.rejected,
      fetchNumberOfProspectingRejected()
    );
  },
});

export const {
  pageUpProspecting,
  pageDownProspecting,
  setItemsPerPageProspecting,
  clearErrorProspecting,
  closePopUp,
  openPopup,
  setCurrentProspectingState,
} = ProspectingSlice.actions;
export default ProspectingSlice.reducer;
