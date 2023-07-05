import { createSlice } from "@reduxjs/toolkit";

//import actions for pagination
import pageUp from "../utils/table_state_management/pageUp";
import PageDown from "../utils/table_state_management/pageDown";
import setItemsPerPage from "../utils/table_state_management/setItemsPerPage";

//import async thunk actions
import { fetchContacts } from "./actions/crud/fetchContact";
import { addContact } from "./actions/crud/addContact";
import { updateContact } from "./actions/crud/updateContact";
import { deleteContact } from "./actions/crud/deleteContact";
import { getNumberOfContacts } from "./actions/getNumberOfContacts";

//import ASYNC THUNK ACTIONS HANDLERS FOR ADD Contact
import addContactPending from "./handle_async_thunk/addContact/pending";
import addContactFulfilled from "./handle_async_thunk/addContact/fulfilled";
import addContactRejected from "./handle_async_thunk/addContact/rejected";

//import ASYNC THUNK ACTIONS HANDLERS FOR UPDATE Contact
import updateContactPending from "./handle_async_thunk/updateContact/pending";
import updateContactFulfilled from "./handle_async_thunk/updateContact/fulfilled";
import updateContactRejected from "./handle_async_thunk/updateContact/rejected";

//import ASYNC THUNK ACTIONS HANDLERS FOR DELETE Contact
import deleteContactPending from "./handle_async_thunk/deleteContact/pending";
import deleteContactFulfilled from "./handle_async_thunk/deleteContact/fulfilled";
import deleteContactRejected from "./handle_async_thunk/deleteContact/rejected";

//import ASYNC THUNK ACTIONS HANDLERS FOR FETCH Contact
import fetchContactsPending from "./handle_async_thunk/fetchContacts/pending";
import fetchContactsFulfilled from "./handle_async_thunk/fetchContacts/fulfilled";
import fetchContactsRejected from "./handle_async_thunk/fetchContacts/rejected";

//import ASYNC THUNK ACTIONS HANDLERS FOR FETCH NUMBER OF Contacts
import fetchNumberOfContactsPending from "./handle_async_thunk/getNumberOfContacts/pending";
import fetchNumberOfContactsFulfilled from "./handle_async_thunk/getNumberOfContacts/fulfilled";
import fetchNumberOfContactsRejected from "./handle_async_thunk/getNumberOfContacts/rejected";

const initialState = {
  // numarul total  de pagini de companii din baza de date
  numberOfTotalPages: 0,
  //numarul total de companii din baza de date
  numberOfTotalItems: 0,
  // acest parametru ne spune daca mai exista pagini de luat din baza de date
  numberOfTotalPagesError: "",
  numberOfTotalPagesLoading: false,

  //number of Contacts per page
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
  currentContactState: {},

  loadingFetchContacts: false,
  errorFetchContacts: "",

  loadingAddContact: false,
  errorAddContact: "",

  loadingUpdateContact: false,
  errorUpdateContact: "",

  loadingDeleteContact: false,
  errorDeleteContact: "",
};

// Generates pending, fulfilled and rejected action types

const ContactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    pageUpContacts(state, action) {
      pageUp(state, action);
    },
    pageDownContacts(state, action) {
      PageDown(state, action);
    },
    setItemsPerPageContacts(state, action) {
      setItemsPerPage(state, action);
    },
    clearErrorContacts(state, action) {
      state.error = "";
    },
    closePopUp(state, action) {
      state.isPopupOpen = false;
    },
    openPopup(state, action) {
      state.isPopupOpen = true;
    },
    setCurrentContactState(state, action) {
      // const uidNumber = action.payload
      const index = action.payload;
      state.currentContactState = state.currentPageItems[index];
    },
  },

  extraReducers: (builder) => {
    //fetch contacts async thunk reducers
    builder.addCase(fetchContacts.pending, fetchContactsPending());
    builder.addCase(fetchContacts.fulfilled, fetchContactsFulfilled());
    builder.addCase(fetchContacts.rejected, fetchContactsRejected());

    //add Contact async thunk reducers
    builder.addCase(addContact.pending, addContactPending());
    builder.addCase(addContact.fulfilled, addContactFulfilled());
    builder.addCase(addContact.rejected, addContactRejected());

    //update Contact async thunk reducers
    builder.addCase(updateContact.pending, updateContactPending());
    builder.addCase(updateContact.fulfilled, updateContactFulfilled());
    builder.addCase(updateContact.rejected, updateContactRejected());

    //delete Contact async thunk reducers
    builder.addCase(deleteContact.pending, deleteContactPending());
    builder.addCase(deleteContact.fulfilled, deleteContactFulfilled());
    builder.addCase(deleteContact.rejected, deleteContactRejected());

    //get number of Contacts async thunk reducers
    builder.addCase(
      getNumberOfContacts.pending,
      fetchNumberOfContactsPending()
    );
    builder.addCase(
      getNumberOfContacts.fulfilled,
      fetchNumberOfContactsFulfilled()
    );
    builder.addCase(
      getNumberOfContacts.rejected,
      fetchNumberOfContactsRejected()
    );
  },
});

export const {
  pageUpContacts,
  pageDownContacts,
  setItemsPerPageContacts,
  clearErrorContacts,
  closePopUp,
  openPopup,
  setCurrentContactState,
} = ContactsSlice.actions;
export default ContactsSlice.reducer;
