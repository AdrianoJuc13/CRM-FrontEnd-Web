import React from "react";
import styles from "./PlanDeActiune.module.scss";
import TabelPlandeactiune from "./TabelPlandeactiune/TabelPlandeactiune";
function PlanDeActiune() {
  return (
    <div className={styles.plandeactiune}>
      <div className={styles.header}>
        <div className={styles.titlu}>Plan de actiune </div>
        <button className={styles.addbtn} onClick={() => {}}>
          Adauga plan de actiune
        </button>
      </div>

      <TabelPlandeactiune />
    </div>
  );
}

export default PlanDeActiune;
