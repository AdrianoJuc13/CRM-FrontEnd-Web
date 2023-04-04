import styles from "./Error.module.scss";
import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  return (
    <div className={styles.error_page}>
      <div className={`${styles.title} ${styles.bigger_title} `}>Error 404</div>
      <div className={styles.title}>There is no page here :( </div>
      <div
        className={`${styles.title} ${styles.go_to} `}
        onClick={() => {
          navigate("/");
        }}
      >
        Go Home
      </div>
    </div>
  );
}

export default Error;
