import React from "react";
import styles from "./Butoane.module.scss";
function SaveBtn() {
  return (
    <button className={styles.btn_salveaza} type="submit">
      Salveaza
    </button>
  );
}

export default SaveBtn;
