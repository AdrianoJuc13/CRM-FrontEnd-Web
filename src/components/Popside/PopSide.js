import React, { useState } from "react";
import styles from "./Pop.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { closePopUp } from "../../features/rapoarte/RapoarteSlice";

function PopSide() {
  const [trigger, setTrigger] = useState(false);
  const { isOpen } = useSelector((state) => state.rapoarte);

  const dispatch = useDispatch();
  return (
    <div
      className={`${styles.grey_screen} ${
        isOpen ? styles.grey_screen_appear : null
      }
      ${trigger ? null : styles.grey_screen_move}
      `}
    >
      <div className={styles.pop_up}>
        <div
          onClick={() => {
            dispatch(closePopUp());
          }}
        >
          exit
        </div>
        <div
          onClick={() => {
            setTrigger(false);
            console.log(trigger);
          }}
        >
          move down
        </div>
      </div>
      <div className={styles.pop_down}>
        <div
          onClick={() => {
            setTrigger(true);
            console.log(trigger);
          }}
        >
          move up
        </div>
      </div>
    </div>
  );
}

export default PopSide;
