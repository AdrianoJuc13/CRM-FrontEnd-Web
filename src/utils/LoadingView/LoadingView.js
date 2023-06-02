import React, { useEffect } from "react";
import styles from "./LoadingView.module.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function LoadingView() {
  const navigate = useNavigate();

  const { isLoggedIn } = useSelector((state) => state.authentification);

  useEffect(() => {
    if (!isLoggedIn) navigate("/login");
    else navigate("/");
  });

  return <div className={styles.screen}>Loading ..</div>;
}

export default LoadingView;
