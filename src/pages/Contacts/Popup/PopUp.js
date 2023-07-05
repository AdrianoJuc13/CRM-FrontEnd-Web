// react imports
import React, { useState } from "react";
import "./styles.scss";
import { useDispatch } from "react-redux";
//-------------------

// my imports
import { ViewPage } from "./content/ViewPage";
import { EditPage } from "./content/EditPage";
//-------------------

export const PopUp = (props) => {
  const dispatch = useDispatch();
  const [move, setMove] = useState(false);

  return props.trigger ? (
    <div className={`popup ${move ? "move_popup" : null}`}>
      {/* first page in popup contains close/edit button + the element content*/}
      <div className="inner_view">
        <div
          className="close_btn"
          onClick={() => {
            dispatch(props.closePopUp());
          }}
        >
          close
        </div>
        <div
          className="edit_btn"
          onClick={() => {
            setMove(true);
          }}
        >
          edit
        </div>
        <ViewPage />
      </div>
      {/* ------------------------------------------- */}

      {/* second page in popup contains close btn + the form content */}
      <div className="inner_edit">
        <div
          className="close_btn"
          onClick={() => {
            setMove(false);
          }}
        >
          close
        </div>
        <EditPage />
      </div>
      {/* ------------------------------------------- */}
    </div>
  ) : null;
};
