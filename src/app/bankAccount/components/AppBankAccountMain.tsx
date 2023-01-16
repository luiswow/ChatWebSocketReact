import * as React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { DateTime } from "luxon";
import { Dispatch } from "redux";

import { IBankAccount } from "../reducerBankAccount/types";
import { RootState } from "../../../store";
import {
  actionAsyncCloseBankAccount,
  httpGetBankAccounts,
  createBankAccountAsync,
} from "../reducerBankAccount/async-actions";
import { PostBankAccount } from "./openBankAccount";
import { getBankAccounts } from "../reducerBankAccount/http/httpActions";

import { IColumnType, Table } from "../../components/tableComponent/table";
import { useNavigate } from "react-router-dom";
import { modalComponent } from "../../components/swalComponent";

const App: React.FC = () => {
  const history = useNavigate();

  const bankAccountStore: IBankAccount[] = useSelector(
    (state: RootState) => state?.bankAccountReducer?.bankAccountsData,
    shallowEqual
  );
  React.useEffect(() => {
    getBankAccounts().then((response) => {
      console.log(response);
      return dispatch(
        httpGetBankAccounts(
          response?.data?.accounts ? response?.data?.accounts : []
        )
      );
    });
  }, []);

  const dispatch: Dispatch<any> = useDispatch();

  const testBankAccountApi = React.useCallback(
    (bankAccount: IBankAccount) =>
      dispatch(createBankAccountAsync(bankAccount)),
    [dispatch]
  );

  const deleteBankAccountApi = React.useCallback(
    (bankAccount: IBankAccount) =>
      dispatch(actionAsyncCloseBankAccount(bankAccount)),
    [dispatch]
  );

  const validateIfDateIsValid = (dateParsed: string, creationDate: string) => {
    if (isNaN(parseFloat(dateParsed))) {
      return creationDate;
    }

    return dateParsed;
  };
  const columns: IColumnType<any>[] = [
    {
      key: "id",
      title: "Id",
      width: 200,
    },
    {
      key: "accountHolder",
      title: "Account holder",
      width: 200,
    },
    {
      key: "accountType",
      title: "Account type",
      width: 200,
    },
    {
      key: "balance",
      title: "Balance",
      width: 200,
    },
    {
      key: "creationDate",
      title: "Creation date",
      width: 200,
      render: (_, { creationDate }) => {
        var luxonDate = DateTime.fromISO(creationDate);
        let dateParsed = `${luxonDate.year}/${luxonDate.month}/${luxonDate.day}`;
        return validateIfDateIsValid(dateParsed, creationDate);
      },
    },
    {
      key: "actions",
      title: "Actions",
      width: 200,
      render: (
        _,
        { id, accountHolder, balance, accountType, creationDate }
      ) => {
        console.log(balance);
        let luxonDate = DateTime.fromISO(creationDate);
        let dateParsed = `${luxonDate.year}/${luxonDate.month}/${luxonDate.day}`;
        function handleSubmit(e: any, button: any) {
          if (button != "") {
            e.preventDefault();
            return history(
              `/bank/edit/${id}?accountHolder=${accountHolder}&balance=${balance}&accountType=${accountType}&creationDate=${validateIfDateIsValid(
                dateParsed,
                creationDate
              )}&withdraw=${button}`
            );
          }
          e.preventDefault();

          history(
            `/bank/edit/${id}?accountHolder=${accountHolder}&balance=${balance}&accountType=${accountType}&creationDate=${validateIfDateIsValid(
              dateParsed,
              creationDate
            )}`
          );
        }

        return (
          <>
            <button
              onClick={() => {
                modalComponent().then((result: any) => {
                  console.log(id);
                  if (result.isConfirmed) {
                    deleteBankAccountApi({
                      accountHolder,
                      accountType,
                      balance,
                      id,
                    });
                  }
                });
              }}
              className="btn btn-danger"
            >
              <i className="fa fa-trash" aria-hidden="true"></i>
            </button>
            <button
              onClick={(e) => {
                return handleSubmit(e, "");
              }}
              value="test"
              style={{ marginLeft: 10 }}
              className=" btn btn-info"
            >
              <i className="fa-solid fa-piggy-bank"></i>{" "}
            </button>

            <button
              onClick={(e) => {
                return handleSubmit(e, "withdraw");
              }}
              style={{ marginLeft: 10 }}
              className=" btn btn-info"
            >
              <i className="fa-solid fa-sack-dollar"></i>
            </button>
          </>
        );
      },
    },
  ];

  return (
    <>
      <h1> API REST CQRS BANK ACCOUNTS</h1>
      <PostBankAccount postBankAccount={testBankAccountApi} />
      <div className="col-sm-6 col-md-12 ">
        <Table
          data={bankAccountStore?.length >= 1 ? bankAccountStore : []}
          columns={columns}
        />
      </div>
    </>
  );
};

export default App;
