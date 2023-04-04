import React from "react";
import styles from "./Register.module.scss";
import Logo from "./../../assets/logosimplu_1.png";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  return (
    <div className={styles.register}>
      <div className={styles.header}>Register page</div>
      <form className={styles.form}>
        <img className={styles.logo} src={Logo} alt="logo" />

        <input className={styles.input} type="name" placeholder="Name"></input>
        <input
          className={styles.input}
          type="email"
          placeholder="Email"
        ></input>
        <input
          className={styles.input}
          type="password"
          placeholder="password"
        ></input>
        <input
          className={styles.input}
          type="password"
          placeholder="repeat password"
        ></input>
        <button
          onClick={() => {
            navigate("/");
          }}
          className={styles.btn}
        >
          Register
        </button>
      </form>
      <div
        className={styles.footer}
        onClick={() => {
          navigate("/login");
        }}
      >
        Do you already have an account ?
      </div>
    </div>
  );
}

export default Register;
