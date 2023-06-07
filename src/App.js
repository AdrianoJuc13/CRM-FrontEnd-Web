import { BrowserRouter, Route, Routes } from "react-router-dom";
import Compani from "./pages/Compani/Compani";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import Layout2 from "./Layout/Layout2";
import Layout from "./Layout/Layout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Contacte from "./pages/Contacte/Contacte";
import Oportunitati from "./pages/Oportunitati/Oportunitati";
import PlanDeActiune from "./pages/Plandeactiune/Plandeactiune";
import Prospectare from "./pages/Prospectare/Prospectare";
import Obiective from "./pages/Obiective/Obiective";
import Rapoarte from "./pages/Rapoarte/Rapoarte";
import Setari from "./pages/Setari/Setari";
import Suport from "./pages/Suport/Suport";
import AdaugaCompanie from "./pages/Compani/AdaugaCompanie";

import SecureLayout from "./utils/SecureLayout";
import AdaugaContact from "./pages/Contacte/AdaugaContact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />
        <Route path="/" element={<SecureLayout />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="compani" element={<Compani />} />
            <Route path="contacte" element={<Contacte />} />
            <Route path="oportunitati" element={<Oportunitati />} />
            <Route path="plandeactiune" element={<PlanDeActiune />} />
            <Route path="prospectare" element={<Prospectare />} />
            <Route path="obiective" element={<Obiective />} />
            <Route path="rapoarte" element={<Rapoarte />} />
          </Route>

          <Route path="/" element={<Layout2 />}>
            <Route path="adauga_companie" element={<AdaugaCompanie />} />
            <Route path="adauga_contact" element={<AdaugaContact />} />
          </Route>

          <Route path="/setari" element={<Setari />} />
          <Route path="/suport" element={<Suport />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
