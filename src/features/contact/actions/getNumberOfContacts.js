import { store } from "../../../store";
import { createAsyncThunk } from "@reduxjs/toolkit";

const axios = require("axios");

export const getNumberOfContacts = createAsyncThunk(
  "contacts/getNumberOfContacts",
  async ({}) => {
    const state = store.getState();
    const authState = state.authentificationState;
    const contactsState = state.contactsState;
    const configState = state.configurationState;
    if (authState.isLoggedIn == false) throw Error("User is not logged in");

    const url = configState.backendHostname + "/contacte/getNumber";
    const headers = {
      Authorization: `${authState.token}`,
    };
    const params = {
      limit: contactsState.itemsPerPage,
      page: contactsState.currentPage,
    };
    return axios
      .get(url, {
        headers: headers,
        params: params,
      })
      .then((response) => {
        {
          return response.data;
        }
      });
  }
);
