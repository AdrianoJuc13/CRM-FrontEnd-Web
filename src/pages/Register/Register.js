import React, { useEffect, useState } from "react";
import styles from "./Register.module.scss";
import Logo from "./../../assets/logosimplu_1.png";
import { useNavigate } from "react-router-dom";
import {
  clearError,
  fetchRegister,
} from "../../features/authentification/authentificationSlice";
import { useDispatch, useSelector } from "react-redux";
import { icons } from "../../styles/icons";

import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

function Register() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState("text");
  const dispatch = useDispatch();
  const { isLoggedIn, error } = useSelector(
    (state) => state.authentificationState
  );

  const [register, setRegister] = useState({
    email: "matei.anutei24@gmail.com",
    password: "test123",
  });
  const [secondPassword, setSecondPassword] = useState("test123");

  useEffect(() => {
    if (isLoggedIn) navigate("/");
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    if (error) {
      NotificationManager.warning(
        "Posibil sa existe deja un cont cu acelasi email",
        "Erroare la inregistrare",
        4000
      );
      dispatch(clearError());
    }
  }, [error, dispatch]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (register.password !== secondPassword) {
      NotificationManager.warning(
        "Parolele nu corespund",
        "Erroare la inregistrare",
        4000
      );
    } else {
      console.log(register);
      dispatch(fetchRegister(register));
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegister((values) => ({ ...values, [name]: value }));
    // console.log(register);
  };

  const handleSChange = (event) => {
    setSecondPassword(event.target.value);
  };

  const toggle = () => {
    if (visible === "password") {
      setVisible("text");
      return;
    }
    setVisible("password");
  };

  return (
    <div className={styles.register}>
      <div className={styles.header}>Register page</div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <img className={styles.logo} src={Logo} alt="logo" />

        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="email"
          value={register.email}
          onChange={handleChange}
          required={true}
        />
        <input
          className={styles.input}
          type={visible}
          placeholder="password"
          name="password"
          value={register.password}
          onChange={handleChange}
          required={true}
          minLength={4}
        />

        <input
          className={styles.input}
          type={visible}
          placeholder="repeat password"
          value={secondPassword}
          onChange={handleSChange}
          required={true}
          minLength={4}
        />
        <div className={styles.eye} onClick={toggle}>
          {visible === "password"
            ? icons.HiOutlineEyeSlash
            : icons.HiOutlineEye}
        </div>
        <button className={styles.btn}>Register</button>
      </form>
      <div
        className={styles.footer}
        onClick={() => {
          navigate("/login");
        }}
      >
        Do you already have an account ?
      </div>

      <NotificationContainer />
    </div>
  );
}

export default Register;
