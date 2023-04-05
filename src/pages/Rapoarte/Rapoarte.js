import React from "react";
import styles from "./Rapoarte.module.scss";
import TabelRapoarte from "./TabelRapoarte/TabelRapoarte";

function Rapoarte() {
  return (
    <div className={styles.rapoarte}>
      <div className={styles.header}>
        <div className={styles.titlu}>Rapoarte </div>
        <button className={styles.addbtn} onClick={() => {}}>
          Adauga rapoarte
        </button>
      </div>

      <TabelRapoarte />
    </div>
    // pula mea e mare
  );
}

export default Rapoarte;
