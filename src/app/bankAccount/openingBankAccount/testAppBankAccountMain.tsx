import * as React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import axios from "axios";

import { Dispatch } from "redux";

import { IBankAccount } from "../reducerBankAccount/types";
import { RootState } from "../../../store";
import {
  httpGetBankAccounts,
  testBankAccountAsync,
} from "../reducerBankAccount/async-actions";
import { PostBankAccount } from "./openBankAccount";
import { getBankAccounts } from "../reducerBankAccount/http/httpActions";

const App: React.FC = () => {
  const bankAccountStore: readonly IBankAccount[] = useSelector(
    (state: RootState) => state.bankAccountReducer.bankAccountsData,
    shallowEqual
  );

  React.useEffect(() => {
    getBankAccounts().then((response) => {
      return dispatch(httpGetBankAccounts(response?.data?.accounts));
    });
  }, []);
  console.log(bankAccountStore);

  const dispatch: Dispatch<any> = useDispatch();

  const testBankAccountApi = React.useCallback(
    (bankAccount: IBankAccount) => dispatch(testBankAccountAsync(bankAccount)),
    [dispatch]
  );

  return (
    <>
      <h1>TESTING API REST CQRS BANK ACCOUNT</h1>
      <PostBankAccount postBankAccount={testBankAccountApi} />

      {bankAccountStore?.map((data) => {
        return (
          <ul>
            <li key={data?.id}>{data?.accountHolder}</li>
          </ul>
        );
      })}
      {/* { bankAccountStore.map((bankAccount: IBankAccount) => (
        <Article
          key={article.id}
          article={article}
          removeArticle={removeArticle}
        />
      ))} */}
    </>
  );
};

export default App;
