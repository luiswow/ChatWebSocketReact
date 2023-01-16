import * as React from "react";
import { IBankAccount } from "../reducerBankAccount/types";
import { useState } from "react";
import { Dispatch } from "redux";
import {
  callBankAccountDepositFundsAsync,
  withdrawFundsBankAccountAsync,
} from "../reducerBankAccount/async-actions";
import { useDispatch } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

type Props = {
  postBankAccount: (bankAccount: IBankAccount) => void;
};

export const EditBankAccount = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { id } = useParams();

  const balance = searchParams.get("balance");
  const accountType = searchParams.get("accountType");
  const accountHolder = searchParams.get("accountHolder");
  const withdraw = searchParams.get("withdraw");

  const creationDate = searchParams.get("creationDate");

  const [bankAccount, setBankAccount]: any = useState<IBankAccount | {}>({
    id,
    balance,
    amount: 0,
    accountType,
    creationDate,
    accountHolder,
  });
  const handleData = (e: React.FormEvent<HTMLInputElement>) => {
    setBankAccount({
      ...bankAccount,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };
  const dispatch: Dispatch<any> = useDispatch();

  const callBankAccountDepositFundsApi = React.useCallback(
    (bankAccount: IBankAccount) =>
      dispatch(callBankAccountDepositFundsAsync(bankAccount)),
    [dispatch]
  );

  const callBankAccountWithDrawFundsApi = React.useCallback(
    (bankAccount: IBankAccount) =>
      dispatch(withdrawFundsBankAccountAsync(bankAccount)),
    [dispatch]
  );
  const history = useNavigate();

  const sendPostBankAccount = async (e: React.FormEvent) => {
    if (withdraw === "withdraw") {
      e.preventDefault();
      const convertNumber = +bankAccount.balance - +bankAccount.amount;
      await callBankAccountWithDrawFundsApi({
        accountHolder: bankAccount.accountHolder,
        accountType: "SAVINGS",
        id: id,
        creationDate: bankAccount.creationDate,
        balance: convertNumber,
        amount: bankAccount.amount,
      });
      return await history("/bank");
    } else {
      e.preventDefault();
      const convertNumber = +bankAccount.balance + +bankAccount.amount;

      await callBankAccountDepositFundsApi({
        accountHolder: bankAccount.accountHolder,
        accountType: "SAVINGS",
        id: id,
        creationDate: bankAccount.creationDate,
        balance: convertNumber,
        amount: bankAccount.amount,
      });
      await history("/bank");
    }
  };

  return (
    <form onSubmit={sendPostBankAccount}>
      <div className="form-group">
        <label>ID</label>
        <input
          value={bankAccount?.id}
          type="text"
          readOnly={true}
          id="id"
          onChange={handleData}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label>Account Holder</label>
        <input
          readOnly={true}
          value={bankAccount?.accountHolder}
          type="text"
          id="accountHolder"
          placeholder="Account Holder"
          onChange={handleData}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label> Current Balance</label>
        <input
          value={bankAccount?.balance}
          id="balance"
          readOnly={true}
          placeholder="Balance"
          onChange={handleData}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>{withdraw ? "Withdraw amount" : "Deposit amount"}</label>
        <input
          value={bankAccount?.amount}
          id="amount"
          placeholder="Amount"
          onChange={handleData}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label>Account Type</label>
        <input
          readOnly={true}
          value={bankAccount?.accountType}
          id="accountType"
          placeholder="Account Type"
          onChange={handleData}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Creation Date</label>
        <input
          value={bankAccount?.creationDate}
          readOnly={true}
          id="creationDate"
          placeholder="Creation Date"
          onChange={handleData}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {withdraw ? "Withdraw" : "Deposit"}
      </button>
    </form>
  );
};
