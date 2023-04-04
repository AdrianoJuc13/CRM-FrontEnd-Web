import { configureStore } from "@reduxjs/toolkit";
import sidemenuReducer from "./features/sidemenu/SideMenuSlice";
import popupReducer from "./features/popupcompanie/PopUpCompanieSlice";
export const store = configureStore({
  reducer: {
    sidemenu: sidemenuReducer,
    popup: popupReducer,
  },
});
