import React from "react";
import styles from "./Oportunitati.module.scss";
import TabelOportunitati from "./TabelOportunitati/TabelOportunitati";
function Oportunitati() {
  return (
    <div className={styles.compani}>
      <div className={styles.header}>
        <div className={styles.titlu}>Oportunitati </div>
        <button className={styles.addbtn} onClick={() => {}}>
          Adauga oportunitate
        </button>
      </div>

      <TabelOportunitati />
    </div>
  );
}

export default Oportunitati;
