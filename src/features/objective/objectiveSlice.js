import { createSlice } from "@reduxjs/toolkit";

//import actions for pagination
import pageUp from "../utils/table_state_management/pageUp";
import PageDown from "../utils/table_state_management/pageDown";
import setItemsPerPage from "../utils/table_state_management/setItemsPerPage";

//import async thunk actions
import { fetchObjective } from "./actions/crud/fetchObjective";
import { addObjective } from "./actions/crud/addObjective";
import { updateObjective } from "./actions/crud/updateObjective";
import { deleteObjective } from "./actions/crud/deleteObjective";
import { getNumberOfObjective } from "./actions/getNumberOfObjective";

//import ASYNC THUNK ACTIONS HANDLERS FOR ADD Objective
import addObjectivePending from "./handle_async_thunk/addObjective/pending";
import addObjectiveFulfilled from "./handle_async_thunk/addObjective/fulfilled";
import addObjectiveRejected from "./handle_async_thunk/addObjective/rejected";

//import ASYNC THUNK ACTIONS HANDLERS FOR UPDATE Objective
import updateObjectivePending from "./handle_async_thunk/updateObjective/pending";
import updateObjectiveFulfilled from "./handle_async_thunk/updateObjective/fulfilled";
import updateObjectiveRejected from "./handle_async_thunk/updateObjective/rejected";

//import ASYNC THUNK ACTIONS HANDLERS FOR DELETE Objective
import deleteObjectivePending from "./handle_async_thunk/deleteObjective/pending";
import deleteObjectiveFulfilled from "./handle_async_thunk/deleteObjective/fulfilled";
import deleteObjectiveRejected from "./handle_async_thunk/deleteObjective/rejected";

//import ASYNC THUNK ACTIONS HANDLERS FOR FETCH Objective
import fetchObjectivePending from "./handle_async_thunk/fetchObjective/pending";
import fetchObjectiveFulfilled from "./handle_async_thunk/fetchObjective/fulfilled";
import fetchObjectiveRejected from "./handle_async_thunk/fetchObjective/rejected";

//import ASYNC THUNK ACTIONS HANDLERS FOR FETCH NUMBER OF Objective
import fetchNumberOfObjectivePending from "./handle_async_thunk/getNumberOfObjective/pending";
import fetchNumberOfObjectiveFulfilled from "./handle_async_thunk/getNumberOfObjective/fulfilled";
import fetchNumberOfObjectiveRejected from "./handle_async_thunk/getNumberOfObjective/rejected";

const initialState = {
  // numarul total  de pagini de companii din baza de date
  numberOfTotalPages: 0,
  //numarul total de companii din baza de date
  numberOfTotalItems: 0,
  // acest parametru ne spune daca mai exista pagini de luat din baza de date
  numberOfTotalPagesError: "",
  numberOfTotalPagesLoading: false,

  //number of Objective per page
  itemsPerPage: 5,

  //companiile de pe pagina curenta
  currentPageItems: [
    {
      obiectiv_id: "1191af37-3c36-46ee-bb98-715accbede78",
      tip_obiectiv: "2bdf7ccc-6db3-40de-a951-ac2f6dfe3c6b",
      titlu_obiectiv: "obiectiv test 2 UPDATED",
      nisa_id: "2ab1b898-8acc-4953-975e-5c4795033dfb",
      punct_lucru_id: "b0fbaff2-943b-4d21-a834-01942bf2a7c1",
      companie_id: "38994c55-2233-438f-b24d-79c2aa2c2f7c",
      vanzari_totale: 1203,
      data_creare_initiala: "test data creare initiala",
      data_emitere: "test data emitere",
      numar_luni: 10,
      data_limita: "test data limita",
    },
    {
      obiectiv_id: "1191af37-3c36-46ee-bb98-715accbede78",
      tip_obiectiv: "2bdf7ccc-6db3-40de-a951-ac2f6dfe3c6b",
      titlu_obiectiv: "obdsiectiv test 2 UPDATED",
      nisa_id: "2ab1b898-8acc-4953-975e-5c4795033dfb",
      punct_lucru_id: "b0fbaff2-943b-4d21-a834-01942bf2a7c1",
      companie_id: "38994c55-2233-438f-b24d-79c2aa2c2f7c",
      vanzari_totale: 1203,
      data_creare_initiala: "test data creare initiala",
      data_emitere: "test data emitere",
      numar_luni: 10,
      data_limita: "test data limita",
    },
    {
      obiectiv_id: "1191af37-3c36-46ee-bb98-715accbede78",
      tip_obiectiv: "2bdf7ccc-6db3-40de-a951-ac2f6dfe3c6b",
      titlu_obiectiv: "obiectiv test 2 UPDATED",
      nisa_id: "2ab1b898-8dsacc-4953-975e-5c4795033dfb",
      punct_lucru_id: "b0fbaff2-943b-4d21-a834-01942bf2a7c1",
      companie_id: "38994c55-2233-438f-b24d-79c2aa2c2f7c",
      vanzari_totale: 1203,
      data_creare_initiala: "test data creare initiala",
      data_emitere: "test data emitere",
      numar_luni: 10,
      data_limita: "test data limita",
    },
    {
      obiectiv_id: "1191af37-3c36-46ee-bb98-715accbede78",
      tip_obiectiv: "2bdf7ccc-6db3-40de-a951-ac2f6dfe3c6b",
      titlu_obiectiv: "obiedsctiv test 2 UPDATED",
      nisa_id: "2ab1b898-8acc-4953-975e-5c4795033dfb",
      punct_lucru_id: "b0fbafsdf2-943b-4d21-a834-01942bf2a7c1",
      companie_id: "38994c55-2233-438f-b24d-79c2aa2c2f7c",
      vanzari_totale: 1203,
      data_creare_initiala: "test data creare initiala",
      data_emitere: "test datdsa emitere",
      numar_luni: 10,
      data_limita: "test data limita",
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
  currentObjectiveState: {},

  loadingFetchObjective: false,
  errorFetchObjective: "",

  loadingAddObjective: false,
  errorAddObjective: "",

  loadingUpdateObjective: false,
  errorUpdateObjective: "",

  loadingDeleteObjective: false,
  errorDeleteObjective: "",
};

// Generates pending, fulfilled and rejected action types

const ObjectiveSlice = createSlice({
  name: "objective",
  initialState,
  reducers: {
    pageUpObjective(state, action) {
      pageUp(state, action);
    },
    pageDownObjective(state, action) {
      PageDown(state, action);
    },
    setItemsPerPageObjective(state, action) {
      setItemsPerPage(state, action);
    },
    clearErrorObjective(state, action) {
      state.error = "";
    },
    closePopUp(state, action) {
      state.isPopupOpen = false;
    },
    openPopup(state, action) {
      state.isPopupOpen = true;
    },
    setCurrentObjectiveState(state, action) {
      // const uidNumber = action.payload
      const index = action.payload;
      state.currentObjectiveState = state.currentPageItems[index];
    },
  },

  extraReducers: (builder) => {
    //fetch Objective async thunk reducers
    builder.addCase(fetchObjective.pending, fetchObjectivePending());
    builder.addCase(fetchObjective.fulfilled, fetchObjectiveFulfilled());
    builder.addCase(fetchObjective.rejected, fetchObjectiveRejected());

    //add Objective async thunk reducers
    builder.addCase(addObjective.pending, addObjectivePending());
    builder.addCase(addObjective.fulfilled, addObjectiveFulfilled());
    builder.addCase(addObjective.rejected, addObjectiveRejected());

    //update Objective async thunk reducers
    builder.addCase(updateObjective.pending, updateObjectivePending());
    builder.addCase(updateObjective.fulfilled, updateObjectiveFulfilled());
    builder.addCase(updateObjective.rejected, updateObjectiveRejected());

    //delete Objective async thunk reducers
    builder.addCase(deleteObjective.pending, deleteObjectivePending());
    builder.addCase(deleteObjective.fulfilled, deleteObjectiveFulfilled());
    builder.addCase(deleteObjective.rejected, deleteObjectiveRejected());

    //get number of Objective async thunk reducers
    builder.addCase(
      getNumberOfObjective.pending,
      fetchNumberOfObjectivePending()
    );
    builder.addCase(
      getNumberOfObjective.fulfilled,
      fetchNumberOfObjectiveFulfilled()
    );
    builder.addCase(
      getNumberOfObjective.rejected,
      fetchNumberOfObjectiveRejected()
    );
  },
});

export const {
  pageUpObjective,
  pageDownObjective,
  setItemsPerPageObjective,
  clearErrorObjective,
  closePopUp,
  openPopup,
  setCurrentObjectiveState,
} = ObjectiveSlice.actions;
export default ObjectiveSlice.reducer;
