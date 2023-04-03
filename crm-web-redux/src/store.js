import { configureStore } from "@reduxjs/toolkit";
import sidemenuReducer from "./features/sidemenu/SideMenuSlice";

export const store = configureStore({
  reducer: {
    sidemenu: sidemenuReducer,
  },
});
