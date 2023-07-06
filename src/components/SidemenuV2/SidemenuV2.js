import React from "react";
import "./SidemenuV2.scss";

import logo from "../../assets/logosimplu_1.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { BiHomeAlt } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";
import { BsPinMapFill } from "react-icons/bs";
import { AiOutlineFlag } from "react-icons/ai";
import { TbReportSearch } from "react-icons/tb";
import { BsPeople } from "react-icons/bs";
import { FaRegBuilding } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { RxTarget } from "react-icons/rx";
import { IoSettingsSharp } from "react-icons/io5";
import { MdContactSupport } from "react-icons/md";
import { useDispatch } from "react-redux";

import { logOut } from "../../features/authentification/authentificationSlice";

export const SidemenuV2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  return (
    <div className="side">
      <img
        className="logo"
        alt="logo"
        src={logo}
        onClick={() => {
          navigate("/");
        }}
      />
      <div className="top_buttons">
        <Link
          to="/"
          className="button"
          style={location.pathname === "/" ? { color: "white" } : null}
        >
          <div className="btn_icon">
            <BiHomeAlt />
          </div>
          <div className="btn_title">Home</div>
        </Link>
        {/* ------------------------------------------------ */}
        <Link
          to="/compani"
          className="button"
          style={location.pathname === "/compani" ? { color: "white" } : null}
        >
          <div className="btn_icon">
            <FaRegBuilding />
          </div>
          {/* <div className="btn_title">Companii</div> */}
        </Link>
        {/* ------------------------------------------------ */}
        <Link
          to="/contacte"
          className="button"
          style={location.pathname === "/contacte" ? { color: "white" } : null}
        >
          <div className="btn_icon">
            <BsPeople />
          </div>
          {/* <div className="btn_title">Contacte</div> */}
        </Link>
        {/* ------------------------------------------------ */}
        <Link
          to="/Oportunitati"
          className="button"
          style={
            location.pathname === "/oportunitati" ? { color: "white" } : null
          }
        >
          <div className="btn_icon">
            <RxTarget />
          </div>
          {/* <div className="btn_title">Oportunitati</div> */}
        </Link>
        {/* ------------------------------------------------ */}
        <Link
          to="/plandeactiune"
          className="button"
          style={
            location.pathname === "/plandeactiune" ? { color: "white" } : null
          }
        >
          <div className="btn_icon">
            <FaTasks />
          </div>
          {/* <div className="btn_title">Plan de actiune</div> */}
        </Link>
        {/* ------------------------------------------------ */}
        <Link
          to="/prospectare"
          className="button"
          style={
            location.pathname === "/prospectare" ? { color: "white" } : null
          }
        >
          <div className="btn_icon">
            <BsPinMapFill />
          </div>
          {/* <div className="btn_title">Prospectare</div> */}
        </Link>
        {/* ------------------------------------------------ */}
        <Link
          to="/obiective"
          className="button"
          style={location.pathname === "/obiective" ? { color: "white" } : null}
        >
          <div className="btn_icon">
            <AiOutlineFlag />
          </div>
          {/* <div className="btn_title">Obiective</div> */}
        </Link>
        {/* ------------------------------------------------ */}
        <Link
          to="/rapoarte"
          className="button"
          style={location.pathname === "/rapoarte" ? { color: "white" } : null}
        >
          <div className="btn_icon">
            <TbReportSearch />
          </div>
          {/* <div className="btn_title">Rapoarte</div> */}
        </Link>
        {/* ------------------------------------------------ */}
        <div className="bottom_buttons">
          <Link
            to="/setari"
            className="button"
            style={location.pathname === "/setari" ? { color: "white" } : null}
          >
            <div className="btn_icon">
              <IoSettingsSharp />
            </div>
            {/* <div className="btn_title">Setari</div> */}
          </Link>
          {/* ------------------------------------------------ */}
          <Link
            to="/suport"
            className="button"
            style={location.pathname === "/suport" ? { color: "white" } : null}
          >
            <div className="btn_icon">
              <MdContactSupport />
            </div>
            {/* <div className="btn_title">Suport</div> */}
          </Link>
          {/* ------------------------------------------------ */}
          <Link
            to="/login"
            className="button"
            style={location.pathname === "/login" ? { color: "white" } : null}
            onClick={() => {
              dispatch(logOut());
            }}
          >
            <div className="btn_icon">
              <BiLogOut />
            </div>
            {/* <div className="btn_title">Delogare</div> */}
          </Link>
        </div>
        {/* ------------------------------------------------ */}
      </div>
    </div>
  );
};
