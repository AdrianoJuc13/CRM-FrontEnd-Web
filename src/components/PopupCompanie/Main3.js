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
          <div className={styles.hdata}>Data Emitere</div>
          <div className={styles.hdata}>Deadline</div>
        </div>
        <div className={styles.rows}>
          <div className={styles.row}>
            <div className={styles.td}>Prezentare cuplaje</div>
            <div className={styles.td}>task</div>
            <div className={styles.td}>activ</div>
            <div className={styles.td}>4/5/2023</div>
            <div className={styles.td}>20/5/2023</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main3;
