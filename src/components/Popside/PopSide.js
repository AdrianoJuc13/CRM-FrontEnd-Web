import React, { useState } from "react";
import styles from "./Pop.module.scss";
import { useDispatch, useSelector } from "react-redux";
// import { closePop } from "../../features/current_actions/CurrentSlice";

import { AiOutlineClose } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";

import EcranCuPagini from "../Ecrane/EcranCuPagini";
import EcranFaraPagini from "../Ecrane/EcranFaraPagini";
import PopDownEditeaza from "../PopDownEditeaza/PopDownEditeaza";

function PopSide(props) {
  const dispatch = useDispatch();
  const [trigger, setTrigger] = useState(true);
  // const { isOpen, currentId, currentName } = useSelector(
  //   (state) => state.current
  // );

  //
  const pathname = window.location.pathname;

  return (
    <div
      className={
        `${styles.grey_screen}`
        // ${trigger ? null : styles.grey_screen_move}
      }
    >
      <div className={styles.pop_up}>
        <div className={styles.pop_header}>
          <div className={styles.pop_titlu}>
            {/* {props &&
              props.date &&
              props.date.payload &&
              props.date.payload[currentId] &&
              props.date.payload[currentId][currentName]} */}
          </div>
          <div className={styles.pop_butoane}>
            {/* <BiEdit
              className={styles.pop_edit}
              onClick={() => {
                setTrigger(false);
              }}
            />
            <AiOutlineClose
              className={styles.pop_exit}
              onClick={() => {
                dispatch(closePop());
              }}
            /> */}
          </div>
        </div>
        <div
        // onClick={() => {
        //   console.log(props.date.payload[currentId]);
        // }}
        >
          {pathname === "/compani" ? (
            <EcranCuPagini date={props.date} />
          ) : (
            <EcranFaraPagini />
          )}
        </div>
      </div>
      <div className={styles.pop_down}>
        {/* <div>
          <div className={styles.pop_header}>
            <div className={styles.pop_titlu}>
              {props &&
                props.date &&
                props.date.payload &&
                props.date.payload[currentId] &&
                props.date.payload[currentId][currentName]}
            </div>
            <div className={styles.pop_butoane}>
              <AiOutlineClose
                className={styles.pop_exit}
                onClick={() => {
                  setTrigger(true);
                }}
              />
            </div>
          </div>
          <PopDownEditeaza date={props.date} />
        </div> */}
      </div>
    </div>
  );
}

export default PopSide;
