import * as React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import { Dispatch } from "redux";

import { IBankAccount } from "../reducerBankAccount/types";
import { RootState } from "../../../store";
import {
  httpGetBankAccounts,
  testBankAccountAsync,
} from "../reducerBankAccount/async-actions";
import { PostBankAccount } from "./openBankAccount";
import { getBankAccounts } from "../reducerBankAccount/http/httpActions";

import { IColumnType, Table } from "../../components/tableComponent/table";

const App: React.FC = () => {
  interface IData {
    fullName: string;
    role: string;
    tags: string[];
  }

  const bankAccountStore: IBankAccount[] = useSelector(
    (state: RootState) => state.bankAccountReducer.bankAccountsData,
    shallowEqual
  );

  React.useEffect(() => {
    getBankAccounts().then((response) => {
      return dispatch(httpGetBankAccounts(response?.data?.accounts));
    });
  }, []);

  const dispatch: Dispatch<any> = useDispatch();

  const testBankAccountApi = React.useCallback(
    (bankAccount: IBankAccount) => dispatch(testBankAccountAsync(bankAccount)),
    [dispatch]
  );

  const columns: IColumnType<any>[] = [
    {
      key: "id",
      title: "id",
      width: 200,
    },
    {
      key: "accountHolder",
      title: "Account holder",
      width: 200,
    },
    // {
    //   key: "actions",
    //   title: "Actions",
    //   width: 200,
    //   render: (_, { tags }) => (
    //     <>
    //       {tags.map((tag: any, tagIndex: any) => (
    //         <span key={`tag-${tagIndex}`} style={{ marginLeft: tagIndex * 4 }}>
    //           {tag}
    //         </span>
    //       ))}
    //     </>
    //   ),
    // },
  ];
  const data: IData[] = [
    {
      fullName: "Francisco Mendes",
      role: "Full Stack",
      tags: ["dev", "blogger"],
    },
    {
      fullName: "Ricardo Malva",
      role: "Social Media Manager",
      tags: ["designer", "photographer"],
    },
  ];

  console.log(bankAccountStore);
  return (
    <>
      <h1>TESTING API REST CQRS BANK ACCOUNT</h1>
      <PostBankAccount postBankAccount={testBankAccountApi} />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Table data={bankAccountStore} columns={columns} />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
