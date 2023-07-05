import { store } from "../../../../store";
import { createAsyncThunk } from "@reduxjs/toolkit";

const axios = require("axios");

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async ({ page }) => {
    const state = store.getState();
    const authState = state.authentificationState;
    const configState = state.configurationState;
    const contactsState = state.contactsState;

    if (authState.isLoggedIn === false) throw Error("User is not logged in");

    if (page > contactsState.lastContactIds.length + 1 || page < 1) {
      throw Error("Page requested is incorect");
    }
    // eslint-disable-next-line
    const last_id = contactsState.lastContactIds[page - 1];

    const url = configState.backendHostname + "/contacts/pagination";
    const headers = {
      Authorization: `${authState.token}`,
    };
    const params = {
      limita: configState.itemsPerPage,
      last_id: contactsState.lastId,
    };
    return axios
      .get(url, {
        headers: headers,
        params: params,
      })
      .then((response) => response.data);
  }
);
