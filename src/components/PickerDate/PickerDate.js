import React from "react";
import "./PickerDate.scss";
import { DatePicker } from "antd";

export const PickerDate = ({ label, handleChangeDate, name, value }) => {
  return (
    <div className="picker_date">
      {label && <div className="subheading">{label}</div>}
      <DatePicker
        className="input"
        placeholder={value ? null : "DD/MM/YYYY"}
        onChange={(date, dateString) =>
          handleChangeDate(date, dateString, name)
        }
        format={"DD/MM/YYYY"}
      />
    </div>
  );
};
