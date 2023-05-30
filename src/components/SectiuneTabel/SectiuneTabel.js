import React from "react";
import styles from "./SectiuneTabel.module.scss";

function SectiuneTabel(props) {
  return (
    <div className={styles.tabel}>
      <div className={styles.header}>
        <div className={styles.hd}>Ceva1</div>
        <div className={styles.hd}>Ceva2</div>
        <div className={styles.hd}>Ceva3</div>
        <div className={styles.hd}>Ceva4</div>
        <div className={styles.hd}>Status</div>
      </div>
      <div className={styles.rows}>
        {props.data &&
          props.data.map((item, index) => {
            return (
              <div key={index} className={styles.row}>
                <div className={styles.data}>{item}</div>
                <div className={styles.data}>date</div>
                <div className={styles.data}>date</div>
                <div className={styles.data}>date</div>
                <div className={styles.data}>date</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default SectiuneTabel;
