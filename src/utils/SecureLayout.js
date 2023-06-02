import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import LoadingView from "./LoadingView/LoadingView";

function SecureLayout() {
  const { isLoggedIn } = useSelector((state) => state.authentification);

  return isLoggedIn ? <Outlet /> : <LoadingView />;
}

export default SecureLayout;
