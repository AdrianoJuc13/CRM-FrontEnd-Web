import React from "react";
import styles from "./TabelOportunitati.module.scss";

import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

function TabelOportunitati() {
  return (
    <div className={styles.tabel_oportunitati}>
      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.hdata}>Tipul</div>
          <div className={styles.hdata}>Titlu</div>
          <div className={styles.hdata}>Identificat de </div>
          <div className={styles.hdata}>Data crearii</div>
          <div className={styles.hdata}>Perioada de desfasurare</div>
          <div className={styles.hdata}>Deadline</div>
        </div>
        <div className={styles.rows}>
          <div className={styles.row}>
            <div className={styles.td}>fdgd</div>
            <div className={styles.td}>dsad</div>
            <div className={styles.td}>dsad</div>
            <div className={styles.td}>dsadame</div>
            <div className={styles.td}>dsadte</div>
            <div className={styles.td}>dsad</div>
          </div>
        </div>
      </div>
      <div className={styles.arrows}>
        <BsFillArrowLeftSquareFill className={styles.arrow} />
        <div className={styles.numerotare}>1</div>
        <BsFillArrowRightSquareFill className={styles.arrow} />
      </div>
      {/* <PopUpContacte /> */}
    </div>
  );
}

export default TabelOportunitati;
