import React, { useState } from "react";
import styles from "./Login.module.scss";
import Logo from "./../../assets/logosimplu_1.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchLogin } from "../../features/authentification/authentificationSlice";

function Login() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [login, setLogin] = useState({
    email: "matei.anutei24@gmail.com",
    password: "test123",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    dispatch(fetchLogin(login));
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setLogin((values) => ({ ...values, [name]: value }));
  };

  return (
    <div className={styles.login}>
      <div className={styles.header}>Login page</div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <img
          className={styles.logo}
          src={Logo}
          alt="logo"
          onClick={() => {
            navigate("/");
          }}
        />

        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="email"
          value={login.email}
          onChange={handleChange}
        />

        <input
          className={styles.input}
          type="password"
          placeholder="password"
          name="password"
          value={login.email}
          onChange={handleChange}
        ></input>

        <button type="submit" className={styles.btn} onClick={() => {}}>
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
