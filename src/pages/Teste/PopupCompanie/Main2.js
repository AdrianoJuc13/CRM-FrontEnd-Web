import React from "react";
import styles from "./PopUpCompanie.module.scss";

function Main2() {
  return (
    <div className={styles.screen}>
      <div className={styles.main}>
        <div className={styles.headertable}>
          <div className={styles.hdata}>Tipul</div>
          <div className={styles.hdata}>Titlu</div>
          <div className={styles.hdata}>Data emitere</div>
          <div className={styles.hdata}>Deadline</div>
          <div className={styles.hdata}>Identificat de</div>
          <div className={styles.hdata}>Grad de realizare obiectiv</div>
        </div>
        <div className={styles.rows}>
          <div
            className={styles.row}
            onClick={() => {
              // dispatch(openPopUp(item.companie_id));
            }}
          >
            <div className={styles.td}>Ceva titlu sau id</div>
            <div className={styles.td}>vizita</div>
            <div className={styles.td}>activ</div>
            <div className={styles.td}>Potenital vanzare</div>
            <div className={styles.td}>4/5/2023</div>
            <div className={styles.td}>20/5/2023</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main2;
