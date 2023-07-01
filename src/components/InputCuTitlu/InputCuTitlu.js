import React from "react";
import styles from "./InputCuTitlu.module.scss";

const InputCuTitlu = ({
  value,
  label,
  name,
  placeholder,
  type,
  onChange,
  disabled,
}) => (
  <div className={styles.form_input}>
    {label && <div className={styles.subheading}>{label}</div>}

    <input
      disabled={disabled}
      className={styles.input}
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

export default InputCuTitlu;
