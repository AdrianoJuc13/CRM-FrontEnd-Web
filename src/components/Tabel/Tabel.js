//react imports
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

//notification imports
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

// style imports
import styles from "./Tabel.module.scss";
import { icons } from "../../styles/icons";

function Tabel(props) {
  const dispatch = useDispatch();

  const table_column_name = props.table_column_name;
  const table_column_key_name = props.table_column_key;

  const table_state = useSelector((store) => store.tableState);

  const table_columns = table_state[table_column_name];
  const table_columns_keys = table_state[table_column_key_name];

  const {
    itemsPerPage,
    currentPageItems,
    // loadingFetchCompanies, --------------------------------------------> trebuiesc folosite in redux in locul variabilelor generale
    // errorFetchCompanies,
    error,
    loading,
  } = useSelector((store) => store[props.state_name + "State"]); // selects the state by name

  // Notification messages for any error in the state
  useEffect(() => {
    if (error) {
      NotificationManager.warning(error, "Error", 4000);
      dispatch(props.clearErrorState());
    }
  }, [error, dispatch, props]);
  // ------------------------------------------------

  // change the number of items per page
  function handleChange(item) {
    dispatch(props.setItemsPerPage(parseInt(item.target.value)));
  }
  // ------------------------------------------------

  return (
    <div className={styles.tabel_style}>
      {/* items per page-select */}
      <div className={styles.table_funtionalities_area}>
        <select
          className={styles.select_items_per_page}
          onChange={handleChange}
          value={itemsPerPage}
        >
          <option>5</option>
          <option>10</option>
          <option>15</option>
        </select>
      </div>
      {/* ------------------------------ */}
      {/* here starts the table */}
      <div className={styles.main}>
        {/* mapping the column names */}
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
        {/* ---------------------------- */}

        {/* mapping data rows with the data */}
        <div className={styles.rows}>
          {loading && <div>Loading...</div>}
          {loading && error ? <div>Error: {error}</div> : null}
          {currentPageItems &&
            currentPageItems.map((item, index) => {
              return (
                <div
                  key={index}
                  className={styles.row}
                  onClick={() => {
                    dispatch(props.setCurrentState(index));
                    dispatch(props.openPopup());

                    // dispatch(openPop(index));
                    // dispatch(changeCurrentName(`${props.header_key[0]}`));
                    // dispatch(fetchOportunitati());
                  }}
                >
                  {table_columns_keys &&
                    table_columns_keys.map((_itam, indax) => {
                      return (
                        <div key={indax} className={styles.td}>
                          {item[_itam] ? item[_itam] : "-"}
                        </div>
                      );
                    })}
                </div>
              );
            })}
        </div>
      </div>
      {/* --------------------------------------------- */}
      {/* arrow section for changing the page */}
      <div className={styles.arrows}>
        {2 !== 1 ? (
          <div
            className={styles.left_arrow}
            onClick={() => {
              // dispatch(pageDown());
            }}
          >
            {icons.AiOutlineArrowLeft}
          </div>
        ) : (
          <div style={{ width: "3.5rem" }} />
        )}
        {2}
        <div
          className={styles.right_arrow}
          onClick={() => {
            // dispatch(pageUp());
          }}
        >
          {icons.AiOutlineArrowRight}
        </div>
      </div>
      {/* --------------------------------------------- */}

      {/* Notification call */}
      <NotificationContainer />
    </div>
  );
}

export default Tabel;
