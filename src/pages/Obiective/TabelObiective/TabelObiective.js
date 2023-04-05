import React, { useEffect } from "react";
import styles from "./TabelObiective.module.scss";
// import PopUpPlandeactiune from "./../PopUpPlandeactiune/PopUpPlandeactiune";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

import {
  fetchObiective,
  openPopUp,
} from "../../../features/obiective/ObiectiveSlice";
import { useDispatch, useSelector } from "react-redux";

function TabelObiective() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchObiective());
  }, [dispatch]);

  const obiective = useSelector((state) => state.obiective);
  return (
    <div className={styles.tabel_obiective}>
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
          {obiective.loading && <div>Loading...</div>}
          {!obiective.loading && obiective.error ? (
            <div>Error: {obiective.error}</div>
          ) : null}
          {obiective &&
            obiective.payload.map((item, index) => {
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

export default TabelObiective;
