import React, { useEffect } from "react";
import styles from "./TabelCompani.module.scss";
// import lista from "./TabelData.json";

import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

import { useDispatch, useSelector } from "react-redux";
import { fetchCompani, openPopUp } from "../../features/compani/CompaniSlice";
import PopUpCompanie from "../PopupCompanie/PopUpCompanie";

function Compani() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompani());
  }, [dispatch]);

  const compani = useSelector((state) => state.compani);
  return (
    <div className={styles.tabel_compani}>
      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.hdata}>Cod AX</div>
          <div className={styles.hdata}>Nume</div>
          <div className={styles.hdata}>Email</div>
          <div className={styles.hdata}>Vanzari</div>
          <div className={styles.hdata}>Segment</div>
          <div className={styles.hdata}>Telefon</div>
          <div className={styles.hdata}>Punct de lucru</div>
        </div>
        <div className={styles.rows}>
          {compani.loading && <div>Loading...</div>}
          {!compani.loading && compani.error ? (
            <div>Error: {compani.error}</div>
          ) : null}
          {compani &&
            compani.payload.map((item, index) => {
              return (
                <div
                  key={index}
                  className={styles.row}
                  onClick={() => {
                    dispatch(openPopUp(item.companie_id));
                  }}
                >
                  <div className={styles.td}>{index}</div>
                  <div className={styles.td}>{item.name}</div>
                  <div className={styles.td}>{item.email}</div>
                  <div className={styles.td}>{item.username}</div>
                  <div className={styles.td}>{item.website}</div>
                  <div className={styles.td}>{item.phone}</div>
                  <div className={styles.td}>{item.website}</div>
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
      <PopUpCompanie />
    </div>
  );
}

export default Compani;
