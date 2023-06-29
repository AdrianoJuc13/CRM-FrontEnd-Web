//react imports
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

//another imports
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

//custom style imports
import styles from "./Tabel.module.scss";
import { icons } from "../../styles/icons";

//universal imports
import PopSide from "../Popside/PopSide";

function Tabel(props) {
  const dispatch = useDispatch();

  //specific defines
  // const { currentPage, error, hasMore } = useSelector(
  //   (state) => state.companiesPage
  // );

  const table_column_name = props.table_column_name;
  const table_state = useSelector((store) => store.tableState);
  const table_columns = table_state[table_column_name];

  // useEffect(() => {
  //   if (error) {
  //     NotificationManager.warning(error, "Error", 4000);
  //     dispatch(clearError());
  //   }
  // }, [error, dispatch]);

  return (
    <div className={styles.tabel_style}>
      <div className={styles.main}>
        <div className={styles.header}>
          {table_columns &&
            table_columns.map((item, index) => {
              return (
                <div key={index} className={styles.hdata}>
                  {item}
                </div>
              );
            })}
        </div>
        <div className={styles.rows}>
          {/* {props.date.loading && <div>Loading...</div>}
          {!props.date.loading && props.date.error ? (
            <div>Error: {props.date.error}</div>
          ) : null} */}

          {
            // props.date &&
            //   props.date.companies.map((item, index) => {
            //     if (
            //       ((currentPage - 1) * 15 <= index && index < currentPage * 15) ||
            //       (index === 0 && currentPage === 1)
            //     )
            //       return (
            //         <div
            //           key={index}
            //           className={styles.row}
            //           onClick={() => {
            //             dispatch(openPop(index));
            //             dispatch(changeCurrentName(`${props.header_key[0]}`));
            //             dispatch(fetchOportunitati());
            //           }}
            //         >
            //           {/* {index} */}
            //           {props.header_key &&
            //             props.header_key.map((_itam, indax) => {
            //               return (
            //                 <div key={indax} className={styles.td}>
            //                   {item[_itam] ? item[_itam] : "-"}
            //                 </div>
            //               );
            //             })}
            //         </div>
            //       );
            //     else return null;
            //   })
          }
        </div>
        <NotificationContainer />
        {/* <PopSide
          date={props.date}
          // detalii_name={props.detalii_name}
          // detalii_key={props.detalii_key}
        /> */}
      </div>
      {/* <div className={styles.arrows}>
        {currentPage !== 1 ? (
          <div
            className={styles.left_arrow}
            onClick={() => {
              dispatch(pageDown());
            }}
          >
            {icons.AiOutlineArrowLeft}
          </div>
        ) : (
          <div style={{ width: "3.5rem" }} />
        )}
        {currentPage}
        <div
          className={styles.right_arrow}
          onClick={() => {
            dispatch(pageUp());
          }}
        >
          {icons.AiOutlineArrowRight}
        </div>
      </div> */}
    </div>
  );
}

export default Tabel;
