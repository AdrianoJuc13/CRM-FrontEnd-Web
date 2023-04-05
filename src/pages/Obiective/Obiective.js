import React from "react";
import styles from "./Obiective.module.scss";
import TabelObiective from "./TabelObiective/TabelObiective";

function Obiective() {
  return (
    <div className={styles.obiective}>
      <div className={styles.header}>
        <div className={styles.titlu}>Obiective </div>
        <button className={styles.addbtn} onClick={() => {}}>
          Adauga obiective
        </button>
      </div>

      <TabelObiective />
    </div>
  );
}

export default Obiective;
