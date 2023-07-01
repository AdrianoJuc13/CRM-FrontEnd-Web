import React from "react";
import styles from "./SectiuneTabel.module.scss";

function SectiuneTabel(props) {
  return (
    <div className={styles.tabel}>
      <div className={styles.header}>
        {props.headers &&
          props.headers.map((item, index) => {
            return (
              <div key={index} className={styles.hd}>
                {item}
              </div>
            );
          })}
      </div>
      <div className={styles.rows}>
        {props.data &&
          props.data.map((item, index) => {
            return (
              <div key={index} className={styles.row}>
                {item &&
                  item.map((itam, indax) => {
                    return (
                      <div key={indax} className={styles.data}>
                        {itam}
                      </div>
                    );
                  })}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default SectiuneTabel;
