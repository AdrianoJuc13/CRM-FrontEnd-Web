import { store } from "../../../../store";
import { createAsyncThunk } from "@reduxjs/toolkit";

const axios = require("axios");

export const fetchObjective = createAsyncThunk(
  "objective/fetchObjective",
  async ({ page }) => {
    const state = store.getState();
    const authState = state.authentificationState;
    const configState = state.configurationState;
    const objectiveState = state.objectiveState;

    if (authState.isLoggedIn === false) throw Error("User is not logged in");

    if (page > objectiveState.lastObjectiveIds.length + 1 || page < 1) {
      throw Error("Page requested is incorect");
    }
    // eslint-disable-next-line
    const last_id = objectiveState.lastObjectiveIds[page - 1];

    const url = configState.backendHostname + "/objective/pagination";
    const headers = {
      Authorization: `${authState.token}`,
    };
    const params = {
      limita: configState.itemsPerPage,
      last_id: objectiveState.lastId,
    };
    return axios
      .get(url, {
        headers: headers,
        params: params,
      })
      .then((response) => response.data);
  }
);
