import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import App from "../openingBankAccount/testAppBankAccountMain";

export const BankAccountRoutes = () => {
    return (
        <Routes>
            <Route path="/create-new-account" element={<App />} />
        </Routes>
    )
}
