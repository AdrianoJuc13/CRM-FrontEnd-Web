import React, { useEffect, useState } from "react";
import styles from "./SideMenu.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  closeSideMenu,
  openSideMenu,
} from "../../features/sidemenu/SideMenuSlice";

import { Link, useLocation } from "react-router-dom";
import Logo from "./../../assets/logo-cont.png";

import { BiHomeAlt } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";
import { BsPinMapFill } from "react-icons/bs";
import { AiOutlineFlag } from "react-icons/ai";

import { HiDotsVertical } from "react-icons/hi";
import { TbReportSearch } from "react-icons/tb";
import { BsPeople } from "react-icons/bs";
import { FaRegBuilding } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import { RxTarget } from "react-icons/rx";
import { IoSettingsSharp } from "react-icons/io5";
import { MdContactSupport } from "react-icons/md";

import avatar from "./../../assets/avatar.png";

function SideMenu() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.sidemenu);

  const [mousePos, setMousePos] = useState({});
  const location = useLocation();

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // if (mousePos.x > 250 && isOpen) dispatch(closeSideMenu());
  }, [mousePos.x, dispatch, isOpen]);

  return (
    <div className={isOpen ? styles.sidemenu_open : styles.sidemenu_closed}>
      <div className={styles.header}>
        <img
          src={Logo}
          alt="Logo"
          // className={`${styles.logo} ${isOpen ? null : styles.logo_closed}`}
          className={styles.logo}
        />

        <button
          className={isOpen ? styles.lini : styles.lini_closed}
          onClick={() => {
            isOpen ? dispatch(closeSideMenu()) : dispatch(openSideMenu());
          }}
        >
          <BiMenu />
        </button>
      </div>
      {/* ------------------------------------------------ */}
      <Link
        to="/"
        className={styles.btn_section}
        style={location.pathname === "/" ? { color: "white" } : null}
      >
        <div className={styles.btn}>
          <BiHomeAlt />
        </div>
        <div className={styles.btn_title}>Home</div>
      </Link>
      {/* ------------------------------------------------ */}
      <Link
        to="/compani"
        className={styles.btn_section}
        style={location.pathname === "/compani" ? { color: "white" } : null}
      >
        <div className={styles.btn}>
          <FaRegBuilding />
        </div>
        <div className={styles.btn_title}>Companii</div>
      </Link>
      {/* ------------------------------------------------ */}
      <Link
        to="/contact"
        className={styles.btn_section}
        style={location.pathname === "/contact" ? { color: "white" } : null}
      >
        <div className={styles.btn}>
          <BsPeople />
        </div>
        <div className={styles.btn_title}>Contacte</div>
      </Link>
      {/* ------------------------------------------------ */}
      <Link
        to="/Oportunitati"
        className={styles.btn_section}
        style={
          location.pathname === "/oportunitati" ? { color: "white" } : null
        }
      >
        <div className={styles.btn}>
          <RxTarget />
        </div>
        <div className={styles.btn_title}>Oportunitati</div>
      </Link>
      {/* ------------------------------------------------ */}
      <Link
        to="/plan_de_actiune"
        className={styles.btn_section}
        style={
          location.pathname === "/plan_de_actiune" ? { color: "white" } : null
        }
      >
        <div className={styles.btn}>
          <FaTasks />
        </div>
        <div className={styles.btn_title}>Plan de actiune</div>
      </Link>
      {/* ------------------------------------------------ */}
      <Link
        to="/prospectare"
        className={styles.btn_section}
        style={location.pathname === "/prospectare" ? { color: "white" } : null}
      >
        <div className={styles.btn}>
          <BsPinMapFill />
        </div>
        <div className={styles.btn_title}>Prospectare</div>
      </Link>
      {/* ------------------------------------------------ */}
      <Link
        to="/obiective"
        className={styles.btn_section}
        style={location.pathname === "/obiective" ? { color: "white" } : null}
      >
        <div className={styles.btn}>
          <AiOutlineFlag />
        </div>
        <div className={styles.btn_title}>Obiective</div>
      </Link>
      {/* ------------------------------------------------ */}
      <Link
        to="/login"
        className={styles.btn_section}
        style={location.pathname === "/login" ? { color: "white" } : null}
      >
        <div className={styles.btn}>
          <TbReportSearch />
        </div>
        <div className={styles.btn_title}>Rapoarte</div>
      </Link>
      {/* ------------------------------------------------ */}
      <div className={styles.btn_section_2}>
        <Link
          to="/setari"
          className={styles.btn_section}
          style={location.pathname === "/setari" ? { color: "white" } : null}
        >
          <div className={styles.btn}>
            <IoSettingsSharp />
          </div>
          <div className={styles.btn_title}>Setari</div>
        </Link>
        <Link
          to="/support"
          className={styles.btn_section}
          style={location.pathname === "/support" ? { color: "white" } : null}
        >
          <div className={styles.btn}>
            <MdContactSupport />
          </div>
          <div className={styles.btn_title}>Support</div>
        </Link>
        <Link
          to="/delogare"
          className={styles.btn_section}
          style={location.pathname === "/delogare" ? { color: "white" } : null}
        >
          <div className={styles.btn}>
            <BiLogOut />
          </div>
          <div className={styles.btn_title}>Delogare</div>
        </Link>
      </div>
      {/* ------------------------------------------------ */}

      <div className={styles.endMenu}>
        <div className={`${styles.card} ${isOpen ? null : styles.cardclosed}`}>
          <Link
            to="/profile"
            className={`${styles.profile_card}`}
            style={location.pathname === "/profile" ? { color: "white" } : null}
          >
            <img className={styles.btn} src={avatar} alt="avatar" />
          </Link>
          <div className={styles.user}>
            <div className={styles.username}>Alexandru Tipa</div>
            <div className={styles.email}>alexandrutipa@primagra.ro</div>
          </div>
          <Link
            to="/settings"
            className={`${styles.settings_card}`}
            style={
              location.pathname === "/settings" ? { color: "white" } : null
            }
          >
            <div className={styles.btn}>
              <HiDotsVertical />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
