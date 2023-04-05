import React, { useEffect } from "react";
import styles from "./TabelRapoarte.module.scss";
// import PopUpPlandeactiune from "./../PopUpPlandeactiune/PopUpPlandeactiune";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

import {
  fetchRapoarte,
  openPopUp,
} from "../../../features/rapoarte/RapoarteSlice";
import { useDispatch, useSelector } from "react-redux";

function TabelRapoarte() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRapoarte());
  }, [dispatch]);

  const rapoarte = useSelector((state) => state.rapoarte);
  return (
    <div className={styles.tabel_rapoarte}>
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
          {rapoarte.loading && <div>Loading...</div>}
          {!rapoarte.loading && rapoarte.error ? (
            <div>Error: {rapoarte.error}</div>
          ) : null}
          {rapoarte &&
            rapoarte.payload.map((item, index) => {
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
      {/* <PopUpOportunitati /> */}
    </div>
  );
}

export default TabelRapoarte;
