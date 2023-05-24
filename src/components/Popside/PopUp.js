import React from "react";
import styles from "./Pop.module.scss";
function PopUp() {
  return (
    <div style={styles.grey_screen}>
      <div className={styles.pop_up}></div>
    </div>
  );
}

export default PopUp;
