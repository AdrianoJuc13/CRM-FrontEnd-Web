import { Outlet } from "react-router-dom";
import SideMenu from "../components/SideMenu/SideMenu";
import TopSide from "../components/TopSide/TopSide";
import styles from "./Layout.module.scss";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchNise } from "../features/relations/NiseSlice";
import { fetchPuncteLucru } from "../features/relations/PuncteLucruSlice";
import { fetchMarimiCompani } from "../features/relations/MarimiCompaniSlice";

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNise());
  });
  useEffect(() => {
    dispatch(fetchPuncteLucru());
  });
  useEffect(() => {
    dispatch(fetchMarimiCompani());
  });

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
