import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdaugaCompanie from "./pages/AdaugaCompanie/AdaugaCompanie";
import Compani from "./pages/Compani/Compani";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import Layout2 from "./pages/Layout/Layout2";
import Layout from "./pages/Layout/Layout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="compani" element={<Compani />} />
          <Route path="contact" element={<div>Contact </div>} />
        </Route>

        <Route path="/" element={<Layout2 />}>
          <Route path="adauga_companie" element={<AdaugaCompanie />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
