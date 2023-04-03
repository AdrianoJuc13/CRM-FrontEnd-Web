import React from "react";
import styles from "./Login.module.scss";
import Logo from "./../../assets/logosimplu_1.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div className={styles.login}>
      <div className={styles.header}>Login page</div>
      <form className={styles.form}>
        <img className={styles.logo} src={Logo} alt="logo" />
        <input
          className={styles.input}
          type="email"
          placeholder="email"
        ></input>
        <input
          className={styles.input}
          type="password"
          placeholder="password"
        ></input>
        <button
          onClick={() => {
            navigate("/");
          }}
          className={styles.btn}
        >
          Login
        </button>
      </form>
      <div
        className={styles.footer}
        onClick={() => {
          navigate("/register");
        }}
      >
        Do you have an account ?
      </div>
    </div>
  );
}

export default Login;
