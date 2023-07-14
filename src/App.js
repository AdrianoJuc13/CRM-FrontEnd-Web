import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

// Layout
import Layout2 from "./Layout/Layout2";
import Layout from "./Layout/Layout";

// import Error from "./pages/Error/Error";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

// other pages
import Home from "./pages/Home/Home";
import Setari from "./pages/Setari/Setari";
import Suport from "./pages/Suport/Suport";
import { DefaultPage } from "./pages/Default/DefaultPage";

// Pages
import Compani from "./pages/Compani/Compani";
import Contacts from "./pages/Contacts/Contacts";
import Opportunities from "./pages/Opportunitites/Opportunitites";
import ActionPlan from "./pages/ActionPlan/ActionPlan";
import ProspectingVisit from "./pages/ProspectingVisit/ProspectingVisit";
import Objectives from "./pages/Objectives/Objectives";
import Reports from "./pages/Reports/Reports";

// ADD Pages
import AdaugaCompanie from "./pages/Compani/AdaugaCompanie/AdaugaCompanie";
import AddContact from "./pages/Contacts/AddContact/AddContact";
import AddOpportunity from "./pages/Opportunitites/AddOpportunity/AddOpportunity";
import AddActionPlan from "./pages/ActionPlan/AddActionPlan/AddActionPlan";
import AddProspectingVisit from "./pages/ProspectingVisit/AddProspectingVisit/AddProspectingVisit";
import AddObjectives from "./pages/Objectives/AddObjectives/AddObjectives";
import AddReports from "./pages/Reports/AddReports/AddReports";

function App() {
  const { isLoggedIn } = useSelector((state) => state.authentificationState);

  // Checking the user logged in status
  if (isLoggedIn)
    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<DefaultPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate replace to="/login" />} />
        </Routes>
      </BrowserRouter>
    );
  else
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="compani" element={<Compani />} />
            <Route path="contacte" element={<Contacts />} />
            <Route path="oportunitati" element={<Opportunities />} />
            <Route path="plandeactiune" element={<ActionPlan />} />
            <Route path="prospectare" element={<ProspectingVisit />} />
            <Route path="obiective" element={<Objectives />} />
            <Route path="rapoarte" element={<Reports />} />
          </Route>

          <Route path="/" element={<Layout2 />}>
            <Route path="adauga_companie" element={<AdaugaCompanie />} />
            <Route path="adauga_contact" element={<AddContact />} />
            <Route path="adauga_oportunitate" element={<AddOpportunity />} />
            <Route path="adauga_actiune" element={<AddActionPlan />} />
            <Route
              path="adauga_prospectare"
              element={<AddProspectingVisit />}
            />
            <Route path="adauga_obiectiv" element={<AddObjectives />} />
            <Route path="adauga_raport" element={<AddReports />} />
          </Route>

          <Route path="/setari" element={<Setari />} />
          <Route path="/suport" element={<Suport />} />

          <Route path="*" element={<Navigate replace to="/" />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
      </BrowserRouter>
    );
}

export default App;
