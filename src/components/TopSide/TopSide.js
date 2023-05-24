import { useState } from "react";
import styles from "./TopSide.module.scss";
import { BsSearch } from "react-icons/bs";
import { MdNotificationsNone } from "react-icons/md";

function TopSide() {
  const [search, setSearch] = useState();

  return (
    <div className={styles.topside}>
      <BsSearch />
      <form
        onSubmit={() => {
          // alert(search);
        }}
      >
        <input
          className={styles.input}
          placeholder="Cauta o companie"
          onChange={(item) => {
            setSearch(item.target.value);
            console.log(search);
          }}
        ></input>
      </form>
      <MdNotificationsNone className={styles.clopotel} />
    </div>
  );
}

export default TopSide;
