import React from "react";
import "./DefaultPage.scss";

import Logo from "./../../assets/logosimplu_1.png";
import { useNavigate } from "react-router-dom";

export const DefaultPage = () => {
  const navigate = useNavigate();
  return (
    <div className="default">
      <div className="container">
        <img className="logo" src={Logo} alt="logo" />
        <div className="header">Primagra APP</div>
        <div className="buttons_area">
          <div
            className="btn"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </div>
          <div
            className="btn"
            onClick={() => {
              navigate("/register");
            }}
          >
            Register
          </div>
        </div>
      </div>
    </div>
  );
};
