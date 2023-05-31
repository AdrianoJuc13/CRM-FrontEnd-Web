import React from "react";
import styles from "./Home.module.scss";
import catalog_primagra from "./../../assets/catalog_primagra.jpg";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin } from "../../features/login/LoginSlice";

function Home() {
  const { payload, loading, error } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  return (
    <div className={styles.home}>
      <img
        src={catalog_primagra}
        alt="catalog_primagra"
        className={styles.image}
        onClick={() => {
          dispatch(fetchLogin());
          console.log(payload);
          console.log(loading);
          console.log(error);
        }}
      />
    </div>
  );
}

export default Home;
