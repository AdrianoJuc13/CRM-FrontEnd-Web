import React from "react";
import "./PickerRangeDate.scss";
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;
export const PickerRangeDate = ({ label, handleChangeDate, name, value }) => {
  return (
    <div className="picker_range_date">
      {label && <div className="subheading">{label}</div>}
      <RangePicker
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
