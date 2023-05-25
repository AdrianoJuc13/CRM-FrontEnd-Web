import React from "react";
import styles from "./SectiuneField.module.scss";
import { icons } from "../../styles/icons";
function SectiuneField(props) {
  return (
    <div className={styles.section}>
      <div className={styles.titlu}>
        {icons[`${props.icon}`]}
        {"  "}
        {props.titlu}
      </div>
      <div className={styles.field}>
        {props.details.map((item, index) => {
          return (
            <div key={index} className={styles.section_item}>
              {item[0]}:{"  "}
              {item[1]}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SectiuneField;
