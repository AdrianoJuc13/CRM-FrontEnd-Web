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
      {props.name}
    </button>
  );
}

export default AddBtn;
