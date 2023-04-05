import React from "react";
import styles from "./PopUpCompanie.module.scss";

function Main3() {
  return (
    <div className={styles.screen}>
      <div className={styles.main}>
        <div className={styles.headertable}>
          <div className={styles.hdata}>Titlu</div>
          <div className={styles.hdata}>Tipul</div>
          <div className={styles.hdata}>Status</div>
          <div className={styles.hdata}>Descriere</div>
          <div className={styles.hdata}>Data Emitere</div>
          <div className={styles.hdata}>Deadline</div>
        </div>
        <div className={styles.rows}>
          <div className={styles.row}>
            <div className={styles.td}>Vanzare</div>
            <div className={styles.td}>general</div>
            <div className={styles.td}>4/5/2023</div>
            <div className={styles.td}>20/5/2023</div>
            <div className={styles.td}>Marius</div>
            <div className={styles.td}>20%</div>
          </div>
          <div className={styles.row}>
            <div className={styles.td}>Rulmenti</div>
            <div className={styles.td}>general</div>
            <div className={styles.td}>4/5/2023</div>
            <div className={styles.td}>20/5/2023</div>
            <div className={styles.td}>Marius</div>
            <div className={styles.td}>20%</div>
          </div>
          <div className={styles.row}>
            <div className={styles.td}>Potenital vanzare cuplaje</div>
            <div className={styles.td}>general</div>
            <div className={styles.td}>4/5/2023</div>
            <div className={styles.td}>20/5/2023</div>
            <div className={styles.td}>Marius</div>
            <div className={styles.td}>20%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main3;
