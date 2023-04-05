import React, { useEffect } from "react";
import styles from "./TabelOportunitati.module.scss";
import PopUpOportunitati from "./../PopUpOportunitati/PopUpOportunitati";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import {
  fetchOportunitati,
  openPopUp,
} from "../../../features/oportunitati/OportunitatiSlice";
import { useDispatch, useSelector } from "react-redux";

function TabelOportunitati() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOportunitati());
  }, [dispatch]);

  const oportunitati = useSelector((state) => state.contacte);
  return (
    <div className={styles.tabel_oportunitati}>
      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.hdata}>Tipul</div>
          <div className={styles.hdata}>Titlu</div>
          <div className={styles.hdata}>Identificat de </div>
          <div className={styles.hdata}>Data crearii</div>
          <div className={styles.hdata}>Perioada de desfasurare</div>
          <div className={styles.hdata}>Deadline</div>
        </div>
        <div className={styles.rows}>
          {oportunitati.loading && <div>Loading...</div>}
          {!oportunitati.loading && oportunitati.error ? (
            <div>Error: {oportunitati.error}</div>
          ) : null}
          {oportunitati &&
            oportunitati.payload.map((item, index) => {
              return (
                <div
                  key={index}
                  className={styles.row}
                  onClick={() => {
                    dispatch(openPopUp(item.companie_id));
                  }}
                >
                  <div className={styles.td}>fdgd</div>
                  <div className={styles.td}>dsad</div>
                  <div className={styles.td}>dsad</div>
                  <div className={styles.td}>dsadame</div>
                  <div className={styles.td}>dsadte</div>
                  <div className={styles.td}>dsad</div>
                </div>
              );
            })}
        </div>
      </div>
      <div className={styles.arrows}>
        <BsFillArrowLeftSquareFill className={styles.arrow} />
        <div className={styles.numerotare}>1</div>
        <BsFillArrowRightSquareFill className={styles.arrow} />
      </div>
      <PopUpOportunitati />
    </div>
  );
}

export default TabelOportunitati;
