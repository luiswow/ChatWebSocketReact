import React from "react";
import { Outlet } from "react-router-dom";
import { BankAccountRoutes } from "./bankAccountRoutes";

export const BankAccountRoutesModule = () => {
  return (
    <>
      <BankAccountRoutes />
    </>
  );
};
