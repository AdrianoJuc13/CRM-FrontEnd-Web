import { Outlet } from "react-router-dom";
import SideMenu from "../components/SideMenu/SideMenu";
import TopSide from "../components/TopSide/TopSide";
import styles from "./Layout.module.scss";
// import { SidemenuV2 } from "../components/SidemenuV2/SidemenuV2";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <SideMenu />
      {/* <SidemenuV2 /> */}
      <div className={styles.outlet}>
        <TopSide />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
