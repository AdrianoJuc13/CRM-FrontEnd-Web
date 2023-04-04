import { Outlet } from "react-router-dom";
import SideMenu from "../../components/SideMenu/SideMenu";
import TopSide from "../../components/TopSide/TopSide";
import styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <SideMenu />
      <div className={styles.outlet}>
        <TopSide />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
