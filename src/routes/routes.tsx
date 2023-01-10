import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { CloseBankAccount } from '../app/bankAccount/closeBankAccount/closeBankAccount'
import App from '../app/bankAccount/openingBankAccount/testAppBankAccountMain'
import { BankAccountRoutes } from '../app/bankAccount/routes/bankAccountRoutes'
// import { OpenBankAccount } from "../app/bank-account/openingBankAccount/openBankAccount"
import { DashBoard } from "../app/components/dashBoardComponent/ts/dashBoard";
import '../scss/style.scss'

export function RoutesHandler() {
    return <BankAccountRoutes />
}
