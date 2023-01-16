import React from 'react'
import { Routes, Route } from "react-router-dom";
import ChatWebSocket from "../../components/chatComponent/App";
import App from "../components/AppBankAccountMain";
import { EditBankAccount } from "../components/editBankAccount";

export const BankAccountRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="edit/:id" element={<EditBankAccount />} />
    </Routes>
  );
};
