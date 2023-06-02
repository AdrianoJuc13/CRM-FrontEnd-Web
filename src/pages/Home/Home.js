import React from "react";
import styles from "./Home.module.scss";
import catalog_primagra from "./../../assets/catalog_primagra.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchLogin,
  fetchRegister,
} from "../../features/authentification/authentificationSlice";
import {
  changeItemsPerPage,
  changeBackendHostname,
} from "../../features/configuration/configurationSlice";
import { fetchCompanies } from "../../features/pages/companiesPage/companySlice";
import { pageUp } from "../../features/pages/companiesPage/companySlice";

function Home() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className={styles.home}>
      <img
        src={catalog_primagra}
        alt="catalog_primagra"
        className={styles.image}
        onClick={async () => {
          dispatch(
            fetchLogin({
              email: "matei.anutei28@gmail.com",
              password: "test123",
            })
          );
          dispatch(pageUp());
          dispatch(fetchCompanies());
          // //  dispatch(changeItemsPerPage({ number: 25 }));
          // // dispatch(changeBackendHostname({ hostname: "hostname1" }));
          console.log(state);
        }}
      />
    </div>
  );
}

export default Home;
