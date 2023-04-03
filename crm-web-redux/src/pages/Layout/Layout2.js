import { Outlet } from "react-router-dom";
import SideMenu from "../../components/SideMenu/SideMenu";
import styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <SideMenu />
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
