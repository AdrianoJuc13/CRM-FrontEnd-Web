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
