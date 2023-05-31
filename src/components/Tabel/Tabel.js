import React from "react";
import styles from "./Tabel.module.scss";
import PopSide from "../Popside/PopSide";
import { useDispatch } from "react-redux";
import {
  openPop,
  changeCurrentName,
} from "../../features/current_actions/CurrentSlice";
import { fetchOportunitati } from "../../features/oportunitati/OportunitatiSlice";

function Tabel(props) {
  const dispatch = useDispatch();

  return (
    <div className={styles.tabel_rapoarte}>
      <div className={styles.main}>
        <div className={styles.header}>
          {props.header_name &&
            props.header_name.map((item, index) => {
              return (
                <div key={index} className={styles.hdata}>
                  {item}
                </div>
              );
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
                    dispatch(openPop(index));
                    dispatch(changeCurrentName(`${props.header_key[0]}`));
                    dispatch(fetchOportunitati());
                  }}
                >
                  {props.header_key &&
                    props.header_key.map((_itam, indax) => {
                      return (
                        <div key={indax} className={styles.td}>
                          {item[_itam]}
                        </div>
                      );
                    })}
                </div>
              );
            })}
        </div>
        <PopSide
          date={props.date}
          // detalii_name={props.detalii_name}
          // detalii_key={props.detalii_key}
        />
      </div>
    </div>
  );
}

export default Tabel;
