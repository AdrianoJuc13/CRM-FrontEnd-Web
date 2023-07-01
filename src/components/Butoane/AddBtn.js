import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Butoane.module.scss";
function AddBtn(props) {
  const navigate = useNavigate();
  return (
    <button
      className={styles.addBtn}
      onClick={() => {
        navigate(`${props.link}`);
      }}
    >
      {props.icon ? <div className={styles.icon}>{props.icon}</div> : null}
      <div className={styles.text}>{props.name}</div>
    </button>
  );
}

export default AddBtn;
