import React from "react";
import styles from "./SectiuneFieldEdit.module.scss";
import { icons } from "../../styles/icons";
import InputCuTitlu from "../InputCuTitlu/InputCuTitlu";

function SectiuneFieldEdit(props) {
  return (
    <div className={styles.section}>
      <div className={styles.titlu}>
        {icons[`${props.icon}`]}
        {"  "}
        {props.titlu}
      </div>
      <div className={styles.field}>
        {props.details &&
          props.details.map((item, index) => {
            // console.log(typeof item[1]);
            return (
              <div key={index} className={styles.section_item}>
                <InputCuTitlu
                  value={item[1]}
                  label={item[0]}
                  name={item[2]}
                  placeholder={"placeholder"}
                  type={"text"}
                  onChange={props.handle}
                  disabled={false}
                />
                {/* aci este de modificat */}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default SectiuneFieldEdit;
