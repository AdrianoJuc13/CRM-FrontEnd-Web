import React from "react";
import styles from "./SelectCuTiltu.module.scss";

const SelectCuTitlu = ({
  value,
  label,
  name,
  placeholder,
  type,
  onChange,
  disabled,
  optiuni,
}) => (
  <div className={styles.form_select}>
    {label && <div className={styles.subheading}>{label}</div>}

    <select
      disabled={disabled}
      className={styles.select}
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    >
      {optiuni &&
        optiuni.map((item, index) => {
          return <option key={index}>{item}</option>;
        })}
    </select>
  </div>
);

export default SelectCuTitlu;
