import { combineReducers } from "@reduxjs/toolkit";

import AuthReducer from "./authentification/authentificationSlice";
import configurationReducer from "./configuration/configurationSlice";
import companiesPageReducer from "./company/companiesSlice";
import sideMenuReducer from "./sidemenu/SideMenuSlice";

const rootReducer = combineReducers({
  authentificationState: AuthReducer,
  configurationState: configurationReducer,
  companiesState: companiesPageReducer,
  sideMenuState: sideMenuReducer,
});

export default rootReducer;
