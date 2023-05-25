import React, { useState } from "react";
import styles from "./Pop.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { closePop } from "../../features/current_actions/CurrentSlice";

import { AiOutlineClose } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";

import EcranCuPagini from "../Ecrane/EcranCuPagini";
import EcranFaraPagini from "../Ecrane/EcranFaraPagini";

function PopSide(props) {
  const dispatch = useDispatch();
  const [trigger, setTrigger] = useState(true);
  const { isOpen, currentId } = useSelector((state) => state.current);

  //
  const pathname = window.location.pathname;

  return (
    <div
      className={`${styles.grey_screen} ${
        isOpen ? styles.grey_screen_appear : null
      }
      ${trigger ? null : styles.grey_screen_move}
      `}
    >
      <div className={styles.pop_up}>
        <div className={styles.pop_header}>
          <div className={styles.pop_titlu}>
            {props &&
              props.date &&
              props.date.payload &&
              props.date.payload[currentId] &&
              props.date.payload[currentId].name}
          </div>
          <div className={styles.pop_butoane}>
            <BiEdit
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
            />
          </div>
        </div>
        <div
        // onClick={() => {
        //   console.log(props.date.payload[currentId]);
        // }}
        >
          {pathname === "/compani" ? <EcranCuPagini /> : <EcranFaraPagini />}
        </div>
      </div>
      <div className={styles.pop_down}>
        <div
          onClick={() => {
            setTrigger(true);
          }}
        >
          move up
        </div>
      </div>
    </div>
  );
}

export default PopSide;
