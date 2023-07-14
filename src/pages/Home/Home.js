import React from "react";
import styles from "./Home.module.scss";
import catalog_primagra from "./../../assets/catalog_primagra.jpg";
import { Image } from "antd";

function Home() {
  return (
    <div className={styles.home}>
      <Image width="50vw" src={catalog_primagra} />
    </div>
  );
}

export default Home;
