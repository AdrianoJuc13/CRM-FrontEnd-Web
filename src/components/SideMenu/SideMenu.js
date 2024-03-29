import React, {
  useEffect,
  // ,useState
} from "react";
import styles from "./SideMenu_copy.module.scss";
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

import { logOut } from "../../features/authentification/authentificationSlice";

function SideMenu() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.sideMenuState);
  // const [mousePos, setMousePos] = useState({});
  const location = useLocation();

  useEffect(() => {
    const handleMouseMove = (event) => {
      // setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // useEffect(() => {
  //   if (mousePos.x > 280 && isOpen) dispatch(closeSideMenu());
  // }, [mousePos.x, dispatch, isOpen]);

  return (
    <div className={isOpen ? styles.sidemenu_open : styles.sidemenu_closed}>
      <div className={styles.header}>
        <img
          src={Logo}
          alt="Logo"
          // className={`${styles.logo} ${isOpen ? null : styles.logo_closed}`}
          className={isOpen ? styles.logo : styles.closed}
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
      <Link to="/" className={styles.btn_section}>
        <div
          className={styles.btn}
          style={
            location.pathname === "/"
              ? { background: "rgba(255,255,255,0.3)", borderRadius: "0.5rem" }
              : null
          }
        >
          <BiHomeAlt />
        </div>
        <div className={styles.btn_title}>Home</div>
      </Link>
      {/* ------------------------------------------------ */}
      <Link to="/compani" className={styles.btn_section}>
        <div
          className={styles.btn}
          style={
            location.pathname === "/compani"
              ? { background: "rgba(255,255,255,0.3)", borderRadius: "0.5rem" }
              : null
          }
        >
          <FaRegBuilding />
        </div>
        <div className={styles.btn_title}>Companii</div>
      </Link>
      {/* ------------------------------------------------ */}
      <Link to="/contacte" className={styles.btn_section}>
        <div
          className={styles.btn}
          style={
            location.pathname === "/contacte"
              ? { background: "rgba(255,255,255,0.3)", borderRadius: "0.5rem" }
              : null
          }
        >
          <BsPeople />
        </div>
        <div className={styles.btn_title}>Contacte</div>
      </Link>
      {/* ------------------------------------------------ */}
      <Link to="/oportunitati" className={styles.btn_section}>
        <div
          className={styles.btn}
          style={
            location.pathname === "/oportunitati"
              ? { background: "rgba(255,255,255,0.3)", borderRadius: "0.5rem" }
              : null
          }
        >
          <RxTarget />
        </div>
        <div className={styles.btn_title}>Oportunitati</div>
      </Link>
      {/* ------------------------------------------------ */}
      <Link to="/plandeactiune" className={styles.btn_section}>
        <div
          className={styles.btn}
          style={
            location.pathname === "/plandeactiune"
              ? { background: "rgba(255,255,255,0.3)", borderRadius: "0.5rem" }
              : null
          }
        >
          <FaTasks />
        </div>
        <div className={styles.btn_title}>Plan de actiune</div>
      </Link>
      {/* ------------------------------------------------ */}
      <Link to="/prospectare" className={styles.btn_section}>
        <div
          className={styles.btn}
          style={
            location.pathname === "/prospectare"
              ? { background: "rgba(255,255,255,0.3)", borderRadius: "0.5rem" }
              : null
          }
        >
          <BsPinMapFill />
        </div>
        <div className={styles.btn_title}>Prospectare</div>
      </Link>
      {/* ------------------------------------------------ */}
      <Link to="/obiective" className={styles.btn_section}>
        <div
          className={styles.btn}
          style={
            location.pathname === "/obiective"
              ? { background: "rgba(255,255,255,0.3)", borderRadius: "0.5rem" }
              : null
          }
        >
          <AiOutlineFlag />
        </div>
        <div className={styles.btn_title}>Obiective</div>
      </Link>
      {/* ------------------------------------------------ */}
      <Link to="/rapoarte" className={styles.btn_section}>
        <div
          className={styles.btn}
          style={
            location.pathname === "/rapoarte"
              ? { background: "rgba(255,255,255,0.3)", borderRadius: "0.5rem" }
              : null
          }
        >
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
          to="/suport"
          className={styles.btn_section}
          style={location.pathname === "/suport" ? { color: "white" } : null}
        >
          <div className={styles.btn}>
            <MdContactSupport />
          </div>
          <div className={styles.btn_title}>Suport</div>
        </Link>
        <Link
          to="/login"
          className={styles.btn_section}
          style={location.pathname === "/login" ? { color: "white" } : null}
          onClick={() => {
            dispatch(logOut());
          }}
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
