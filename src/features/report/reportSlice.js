import { createSlice } from "@reduxjs/toolkit";

//import actions for pagination
import pageUp from "../utils/table_state_management/pageUp";
import PageDown from "../utils/table_state_management/pageDown";
import setItemsPerPage from "../utils/table_state_management/setItemsPerPage";

//import async thunk actions
import { fetchReport } from "./actions/crud/fetchReport";
import { addReport } from "./actions/crud/addReport";
import { updateReport } from "./actions/crud/updateReport";
import { deleteReport } from "./actions/crud/deleteReport";
import { getNumberOfReport } from "./actions/getNumberOfReport";

//import ASYNC THUNK ACTIONS HANDLERS FOR ADD Report
import addReportPending from "./handle_async_thunk/addReport/pending";
import addReportFulfilled from "./handle_async_thunk/addReport/fulfilled";
import addReportRejected from "./handle_async_thunk/addReport/rejected";

//import ASYNC THUNK ACTIONS HANDLERS FOR UPDATE Report
import updateReportPending from "./handle_async_thunk/updateReport/pending";
import updateReportFulfilled from "./handle_async_thunk/updateReport/fulfilled";
import updateReportRejected from "./handle_async_thunk/updateReport/rejected";

//import ASYNC THUNK ACTIONS HANDLERS FOR DELETE Report
import deleteReportPending from "./handle_async_thunk/deleteReport/pending";
import deleteReportFulfilled from "./handle_async_thunk/deleteReport/fulfilled";
import deleteReportRejected from "./handle_async_thunk/deleteReport/rejected";

//import ASYNC THUNK ACTIONS HANDLERS FOR FETCH Report
import fetchReportPending from "./handle_async_thunk/fetchReport/pending";
import fetchReportFulfilled from "./handle_async_thunk/fetchReport/fulfilled";
import fetchReportRejected from "./handle_async_thunk/fetchReport/rejected";

//import ASYNC THUNK ACTIONS HANDLERS FOR FETCH NUMBER OF Report
import fetchNumberOfReportPending from "./handle_async_thunk/getNumberOfReport/pending";
import fetchNumberOfReportFulfilled from "./handle_async_thunk/getNumberOfReport/fulfilled";
import fetchNumberOfReportRejected from "./handle_async_thunk/getNumberOfReport/rejected";

const initialState = {
  // numarul total  de pagini de companii din baza de date
  numberOfTotalPages: 0,
  //numarul total de companii din baza de date
  numberOfTotalItems: 0,
  // acest parametru ne spune daca mai exista pagini de luat din baza de date
  numberOfTotalPagesError: "",
  numberOfTotalPagesLoading: false,

  //number of Report per page
  itemsPerPage: 5,

  //companiile de pe pagina curenta
  currentPageItems: [
    {
      tip_rezultat: "a629d783-98fa-40b9-8535-d76f5d89a634",
      valoare: 50,
      actiune_id: "f51deff2-b025-4577-9a4d-a4e6e4273419",
      rezultat_descriere: "am vandut la panemar testare",
    },
    {
      tip_rezultat: "a629d783-98fa-40b9-8535-d76f5d89a634",
      valoare: 50,
      actiune_id: "f51deff2-b025-4577-9a4d-a4e6e4273419",
      rezultat_descriere: "am vandut la panemar testare",
    },
    {
      tip_rezultat: "a629d783-98fa-40b9-8535-d76f5d89a634",
      valoare: 50,
      actiune_id: "f51deff2-b025-4577-9a4d-a4e6e4273419",
      rezultat_descriere: "am vandut la panemar testare",
    },
    {
      tip_rezultat: "a629d783-98fa-40b9-8535-d76f5d89a634",
      valoare: 50,
      actiune_id: "f51deff2-b025-4577-9a4d-a4e6e4273419",
      rezultat_descriere: "am vandut la panemar testare",
    },
    {
      tip_rezultat: "a629d783-98fa-40b9-8535-d76f5d89a634",
      valoare: 50,
      actiune_id: "f51deff2-b025-4577-9a4d-a4e6e4273419",
      rezultat_descriere: "am vandut la panemar testare",
    },
    {
      tip_rezultat: "a629d783-98fa-40b9-8535-d76f5d89a634",
      valoare: 50,
      actiune_id: "f51deff2-b025-4577-9a4d-a4e6e4273419",
      rezultat_descriere: "am vandut la panemar testare",
    },
    {
      tip_rezultat: "a629d783-98fa-40b9-8535-d76f5d89a634",
      valoare: 50,
      actiune_id: "f51deff2-b025-4577-9a4d-a4e6e4273419",
      rezultat_descriere: "am vandut la panemar testare",
    },
    {
      tip_rezultat: "a629d783-98fa-40b9-8535-d76f5d89a634",
      valoare: 50,
      actiune_id: "f51deff2-b025-4577-9a4d-a4e6e4273419",
      rezultat_descriere: "am vandut la panemar testare",
    },
    {
      tip_rezultat: "a629d783-98fa-40b9-8535-d76f5d89a634",
      valoare: 50,
      actiune_id: "f51deff2-b025-4577-9a4d-a4e6e4273419",
      rezultat_descriere: "am vandut la panemar testare",
    },
    {
      tip_rezultat: "a629d783-98fa-40b9-8535-d76f5d89a634",
      valoare: 50,
      actiune_id: "f51deff2-b025-4577-9a4d-a4e6e4273419",
      rezultat_descriere: "am vandut la panemar testare",
    },
    {
      tip_rezultat: "a629d783-98fa-40b9-8535-d76f5d89a634",
      valoare: 50,
      actiune_id: "f51deff2-b025-4577-9a4d-a4e6e4273419",
      rezultat_descriere: "am vandut la panemar testare",
    },
    {
      tip_rezultat: "a629d783-98fa-40b9-8535-d76f5d89a634",
      valoare: 50,
      actiune_id: "f51deff2-b025-4577-9a4d-a4e6e4273419",
      rezultat_descriere: "am vandut la panemar testare",
    },
    {
      tip_rezultat: "a629d783-98fa-40b9-8535-d76f5d89a634",
      valoare: 50,
      actiune_id: "f51deff2-b025-4577-9a4d-a4e6e4273419",
      rezultat_descriere: "am vandut la panemar testare",
    },
    {
      tip_rezultat: "a629d783-98fa-40b9-8535-d76f5d89a634",
      valoare: 50,
      actiune_id: "f51deff2-b025-4577-9a4d-a4e6e4273419",
      rezultat_descriere: "am vandut la panemar testare",
    },
    {
      tip_rezultat: "a629d783-98fa-40b9-8535-d76f5d89a634",
      valoare: 50,
      actiune_id: "f51deff2-b025-4577-9a4d-a4e6e4273419",
      rezultat_descriere: "am vandut la panemar testare",
    },
    {
      tip_rezultat: "a629d783-98fa-40b9-8535-d76f5d89a634",
      valoare: 50,
      actiune_id: "f51deff2-b025-4577-9a4d-a4e6e4273419",
      rezultat_descriere: "am vandut la panemar testare",
    },
    {
      tip_rezultat: "a629d783-98fa-40b9-8535-d76f5d89a634",
      valoare: 50,
      actiune_id: "f51deff2-b025-4577-9a4d-a4e6e4273419",
      rezultat_descriere: "am vandut la panemar testare",
    },
    {
      tip_rezultat: "a629d783-98fa-40b9-8535-d76f5d89a634",
      valoare: 50,
      actiune_id: "f51deff2-b025-4577-9a4d-a4e6e4273419",
      rezultat_descriere: "am vandut la panemar testare",
    },
    {
      tip_rezultat: "a629d783-98fa-40b9-8535-d76f5d89a634",
      valoare: 50,
      actiune_id: "f51deff2-b025-4577-9a4d-a4e6e4273419",
      rezultat_descriere: "am vandut la panemar testare",
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
  currentReportState: {},

  loadingFetchReport: false,
  errorFetchReport: "",

  loadingAddReport: false,
  errorAddReport: "",

  loadingUpdateReport: false,
  errorUpdateReport: "",

  loadingDeleteReport: false,
  errorDeleteReport: "",
};

// Generates pending, fulfilled and rejected action types

const ReportSlice = createSlice({
  name: "report",
  initialState,
  reducers: {
    pageUpReport(state, action) {
      pageUp(state, action);
    },
    pageDownReport(state, action) {
      PageDown(state, action);
    },
    setItemsPerPageReport(state, action) {
      setItemsPerPage(state, action);
    },
    clearErrorReport(state, action) {
      state.error = "";
    },
    closePopUp(state, action) {
      state.isPopupOpen = false;
    },
    openPopup(state, action) {
      state.isPopupOpen = true;
    },
    setCurrentReportState(state, action) {
      // const uidNumber = action.payload
      const index = action.payload;
      state.currentReportState = state.currentPageItems[index];
    },
  },

  extraReducers: (builder) => {
    //fetch Report async thunk reducers
    builder.addCase(fetchReport.pending, fetchReportPending());
    builder.addCase(fetchReport.fulfilled, fetchReportFulfilled());
    builder.addCase(fetchReport.rejected, fetchReportRejected());

    //add Report async thunk reducers
    builder.addCase(addReport.pending, addReportPending());
    builder.addCase(addReport.fulfilled, addReportFulfilled());
    builder.addCase(addReport.rejected, addReportRejected());

    //update Report async thunk reducers
    builder.addCase(updateReport.pending, updateReportPending());
    builder.addCase(updateReport.fulfilled, updateReportFulfilled());
    builder.addCase(updateReport.rejected, updateReportRejected());

    //delete Report async thunk reducers
    builder.addCase(deleteReport.pending, deleteReportPending());
    builder.addCase(deleteReport.fulfilled, deleteReportFulfilled());
    builder.addCase(deleteReport.rejected, deleteReportRejected());

    //get number of Report async thunk reducers
    builder.addCase(getNumberOfReport.pending, fetchNumberOfReportPending());
    builder.addCase(
      getNumberOfReport.fulfilled,
      fetchNumberOfReportFulfilled()
    );
    builder.addCase(getNumberOfReport.rejected, fetchNumberOfReportRejected());
  },
});

export const {
  pageUpReport,
  pageDownReport,
  setItemsPerPageReport,
  clearErrorReport,
  closePopUp,
  openPopup,
  setCurrentReportState,
} = ReportSlice.actions;
export default ReportSlice.reducer;
