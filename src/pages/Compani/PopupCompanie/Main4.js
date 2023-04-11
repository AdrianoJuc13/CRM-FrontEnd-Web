import React from "react";
// import styles from "./PopUpCompanie.module.scss";
import image from "../../../assets/revenue-profit-margin-by-product.png";
function Main4() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <img src={image} alt="images" style={{ width: "50%" }} />
    </div>
  );
}

export default Main4;
