import React from "react";
import styles from "./Home.module.scss";
import catalog_primagra from "./../../assets/catalog_primagra.jpg";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className={styles.home}>
      <img
        src={catalog_primagra}
        alt="catalog_primagra"
        className={styles.image}
        // onClick={async () => {

        // }}
      />
    </div>
  );
}

export default Home;
