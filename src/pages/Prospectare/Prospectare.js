import React from "react";
import TabelProspectare from "./TabelProspectare/TabelProspectare";
import styles from "./Prospectare.module.scss";

function Prospectare() {
  return (
    <div className={styles.prospectare}>
      <div className={styles.header}>
        <div className={styles.titlu}>Prospectare </div>
        <button className={styles.addbtn} onClick={() => {}}>
          Adauga propsectare
        </button>
      </div>

      <TabelProspectare />
    </div>
  );
}

export default Prospectare;
