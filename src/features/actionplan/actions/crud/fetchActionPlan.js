import { store } from "../../../../store";
import { createAsyncThunk } from "@reduxjs/toolkit";

const axios = require("axios");

export const fetchActionPlan = createAsyncThunk(
  "actionplan/fetchActionPlan",
  async ({ page }) => {
    const state = store.getState();
    const authState = state.authentificationState;
    const configState = state.configurationState;
    const actionPlanState = state.actionPlanState;

    if (authState.isLoggedIn === false) throw Error("User is not logged in");

    if (page > actionPlanState.lastContactIds.length + 1 || page < 1) {
      throw Error("Page requested is incorect");
    }
    // eslint-disable-next-line
    const last_id = actionPlanState.lastContactIds[page - 1];

    const url = configState.backendHostname + "/actionplan/pagination";
    const headers = {
      Authorization: `${authState.token}`,
    };
    const params = {
      limita: configState.itemsPerPage,
      last_id: actionPlanState.lastId,
    };
    return axios
      .get(url, {
        headers: headers,
        params: params,
      })
      .then((response) => response.data);
  }
);
