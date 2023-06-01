import React, { useEffect, useState } from "react";
import styles from "./Login.module.scss";
import Logo from "./../../assets/logosimplu_1.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { icons } from "../../styles/icons";
import {
  clearError,
  fetchLogin,
} from "../../features/authentification/authentificationSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn, error } = useSelector((state) => state.authentification);
  const [errorTrigger, setErrorTrigger] = useState(false);

  const [login, setLogin] = useState({
    email: "matei.anutei24@gmail.com",
    password: "test123",
  });

  useEffect(() => {
    if (isLoggedIn) navigate("/");
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    if (error) setErrorTrigger(true);

    setTimeout(() => {
      setErrorTrigger(false);
      dispatch(clearError());
    }, 5000);
  }, [error, dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchLogin(login));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setLogin((values) => ({ ...values, [name]: value }));
  };

  return (
    <div className={styles.login}>
      <div
        className={`${styles.error} ${
          errorTrigger ? styles.error_active : null
        }`}
      >
        {icons.IoWarningOutline} {error}
      </div>
      <div className={styles.header}>Login page</div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <img className={styles.logo} src={Logo} alt="logo" />

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
          type="text"
          placeholder="password"
          name="password"
          value={login.password}
          onChange={handleChange}
        />

        <button type="submit" className={styles.btn}>
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
