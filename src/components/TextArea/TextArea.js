import React from "react";
import "./TextArea.scss";

export const TextArea = ({
  value,
  label,
  name,
  placeholder,
  type,
  onChange,
  disabled,
}) => {
  return (
    <div className="text_area_container">
      {label && <div className="title_area">{label}</div>}
      <textarea
        disabled={disabled}
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
