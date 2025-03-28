import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Header from "./Header";

function ProtectedRoutes() {
  const token = localStorage.getItem("token"); // will get from browser storage
  return token ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" replace />
  );
}

export default ProtectedRoutes;
