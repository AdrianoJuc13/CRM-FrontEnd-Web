import React from "react";
import styles from "./Home.module.scss";
import catalog_primagra from "./../../assets/catalog_primagra.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchLogin,
  fetchRegister,
} from "../../features/authentification/authentificationSlice";

import { addCompany } from "../../features/company/actions/addCompany";
import { updateCompany } from "../../features/company/actions/updateCompany";
import { deleteCompany } from "../../features/company/actions/deleteCompany";

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
          // dispatch(
          //   fetchLogin({
          //     email: "matei.anutei24@gmail.com",
          //     password: "test123",
          //   })
          // );
          dispatch(
            deleteCompany({
              companieId: "6e0043d4-c216-4a4e-866b-1800bed0ce74",
            })
          );
          console.log(state);
        }}
      />
    </div>
  );
}

export default Home;
