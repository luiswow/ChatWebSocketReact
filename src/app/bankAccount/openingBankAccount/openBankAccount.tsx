import * as React from "react";
import { IBankAccount } from "../reducerBankAccount/types";
import { useState } from "react";

type Props = {
  postBankAccount: (bankAccount: IBankAccount) => void;
};

export const PostBankAccount: React.FC<Props> = ({ postBankAccount }) => {
  const [bankAccount, setBankAccount]: any = useState<IBankAccount | {}>();
  const [value, setValue] = useState<number>(0);

  const handleData = (e: React.FormEvent<HTMLInputElement>) => {
    setBankAccount({
      ...bankAccount,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const sendPostBankAccount = (e: React.FormEvent) => {
    e.preventDefault();

    postBankAccount({
      accountHolder: bankAccount.accountHolder,
      accountType: "SAVINGS",
      openingBalance: bankAccount.openingBalance,
    });
  };

  return (
    <form onSubmit={sendPostBankAccount}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Account Holder</label>
        <input
          type="text"
          id="accountHolder"
          placeholder="Account Holder"
          onChange={handleData}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Opening Balance</label>
        <input
          id="openingBalance"
          placeholder="Opening Balance"
          onChange={handleData}
          className="form-control"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
    // <form onSubmit={sendPostBankAccount} className="Add-article">

    //     <input

    //   />

    //     SEND POST
    //   </button>
    // </form>
  );
};
