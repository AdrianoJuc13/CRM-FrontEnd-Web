import { createAsyncThunk } from "@reduxjs/toolkit";
import { store } from "../../../../store";
import axios from "axios";

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async ({ contactId }) => {
    const state = store.getState();
    // const state = "";
    const authentificationState = state.authentificationState;
    const configState = state.configurationState;

    const url = configState.backendHostname + "/contacte";

    if (authentificationState.isLoggedIn === false) {
      throw Error("user not logged in");
    }

    const headers = {
      Authorization: `${authentificationState.token}`,
    };

    console.log("Headers " + headers);
    console.log("url " + url);
    const data = {
      contact_id: contactId,
    };

    const config = {
      method: "delete",
      url: url,
      headers: headers,
      data: data,
    };
    return axios.request(config).then((response) => response.data);
  }
);
