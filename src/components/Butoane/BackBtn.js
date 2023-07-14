import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Butoane.module.scss";

function BackBtn(props) {
  const navigate = useNavigate();
  return (
    <button
      className={styles.backbtn}
      onClick={() => {
        navigate(`${props.link}`);
      }}
    >
      {props.icon ? <div className={styles.icon}>{props.icon}</div> : null}
      <div className={styles.text}>{props.name}</div>
    </button>
  );
}

export default BackBtn;
