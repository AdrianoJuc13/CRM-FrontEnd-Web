import { configureStore } from "@reduxjs/toolkit";
import sidemenuReducer from "./features/sidemenu/SideMenuSlice";
import companiReducer from "./features/compani/CompaniSlice";
import contacteReducer from "./features/contacte/ContacteSlice";
import oportunitatiReducer from "./features/oportunitati/OportunitatiSlice";
import plandeactiuneReducer from "./features/plandeactiune/PlandeactiuneSlice";
import prospectareReducer from "./features/prospectare/ProspectareSlice";
import obiectiveReducer from "./features/obiective/ObiectiveSlice";
import rapoarteReducer from "./features/rapoarte/RapoarteSlice";
import niseReducer from "./features/relations/NiseSlice";
import PuncteLucruReducer from "./features/relations/PuncteLucruSlice";
import MarimiCompaniReducer from "./features/relations/MarimiCompaniSlice";
import HeadersReducer from "./features/headers_tabel/HeadersSlice";

export const store = configureStore({
  reducer: {
    sidemenu: sidemenuReducer,
    compani: companiReducer,
    contacte: contacteReducer,
    oportunitati: oportunitatiReducer,
    plandeactiune: plandeactiuneReducer,
    prospectare: prospectareReducer,
    obiective: obiectiveReducer,
    rapoarte: rapoarteReducer,
    nise: niseReducer,
    punctelucru: PuncteLucruReducer,
    marimicompani: MarimiCompaniReducer,
    headers: HeadersReducer,
  },
});
