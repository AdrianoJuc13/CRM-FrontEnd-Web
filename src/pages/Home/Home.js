import React from "react";
import styles from "./Home.module.scss";
import catalog_primagra from "./../../assets/catalog_primagra.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchLogin,
  fetchRegister,
} from "../../features/authentification/authentificationSlice";
function Home() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className={styles.home}>
      <img
        src={catalog_primagra}
        alt="catalog_primagra"
        className={styles.image}
        onClick={() => {
          dispatch(
            fetchRegister({
              email: "matei.anutei26@gmail.com",
              password: "test123",
            })
          );

          console.log(state);
        }}
      />
    </div>
  );
}

export default Home;
