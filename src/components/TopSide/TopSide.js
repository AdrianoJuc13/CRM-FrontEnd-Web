import styles from "./TopSide.module.scss";
import { BsSearch } from "react-icons/bs";
import { MdNotificationsNone } from "react-icons/md";

function TopSide() {
  return (
    <div className={styles.topside}>
      <BsSearch />
      <input className={styles.input} placeholder="Cauta o companie"></input>
      <MdNotificationsNone className={styles.clopotel} />
    </div>
  );
}

export default TopSide;
