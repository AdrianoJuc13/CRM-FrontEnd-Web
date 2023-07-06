import { store } from "../../../../store";
import { createAsyncThunk } from "@reduxjs/toolkit";

const axios = require("axios");

export const fetchProspecting = createAsyncThunk(
  "prospecting/fetchProspecting",
  async ({ page }) => {
    const state = store.getState();
    const authState = state.authentificationState;
    const configState = state.configurationState;
    const prospectingState = state.prospectingState;

    if (authState.isLoggedIn === false) throw Error("User is not logged in");

    if (page > prospectingState.lastProspectingIds.length + 1 || page < 1) {
      throw Error("Page requested is incorect");
    }
    // eslint-disable-next-line
    const last_id = prospectingState.lastProspectingIds[page - 1];

    const url = configState.backendHostname + "/prospecting/pagination";
    const headers = {
      Authorization: `${authState.token}`,
    };
    const params = {
      limita: configState.itemsPerPage,
      last_id: prospectingState.lastId,
    };
    return axios
      .get(url, {
        headers: headers,
        params: params,
      })
      .then((response) => response.data);
  }
);
