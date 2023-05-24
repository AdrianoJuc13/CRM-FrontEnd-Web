import React from "react";
import styles from "./Tabel.module.scss";
// import PopUp from "../Popside/PopUp";
// import { useDispatch } from "react-redux";
// import { openPopUp } from "../../features/rapoarte/RapoarteSlice";

function Tabel(props) {
  // const dispatch = useDispatch();
  return (
    <div className={styles.tabel_rapoarte}>
      <div className={styles.main}>
        <div className={styles.header}>
          {props.headers.map((item, index) => {
            return <div className={styles.hdata}>{item}</div>;
          })}
        </div>
        <div className={styles.rows}>
          {props.date.loading && <div>Loading...</div>}
          {!props.date.loading && props.date.error ? (
            <div>Error: {props.date.error}</div>
          ) : null}
          {props.date &&
            props.date.payload.map((item, index) => {
              return (
                <div
                  key={index}
                  className={styles.row}
                  onClick={() => {
                    // dispatch(openPopUp(item.companie_id));
                  }}
                >
                  <div className={styles.td}>{item.name}</div>
                  <div className={styles.td}>{item.username}</div>
                  <div className={styles.td}>dsad</div>
                  <div className={styles.td}>dsadame</div>
                  <div className={styles.td}>dsadte</div>
                  <div className={styles.td}>dsad</div>
                </div>
              );
            })}
        </div>
        {/* <PopUp /> */}
      </div>
    </div>
  );
}

export default Tabel;