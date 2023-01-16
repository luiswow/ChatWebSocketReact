import { toastComponent } from '../../components/swalComponent'
import * as actionTypes from './actions'
import { fetchApi } from './http/httpActions'
import { DispatchType, IBankAccount, BankAccountAction } from './types'
import { DateTime } from 'luxon';
import { apiUrlWriteBackend } from '../api';


export const createBankAccountAsync=(bankAccountData: IBankAccount)=> {
    
    const action: BankAccountAction = {
        type: actionTypes.OPEN_BANK_ACCOUNT,
        bankAccountData,
    }

    return httpRequestPostBank(action)
}


export const httpRequestPostBank=(action: BankAccountAction) =>{
    return (dispatch: DispatchType) => {
        fetchApi(
            `${apiUrlWriteBackend}/openBankAccount`,
            action.bankAccountData,"POST"
        ).then((data) => {
            console.log(data);
            action.bankAccountData.id=data.id
            action.bankAccountData.creationDate=DateTime.now();
            action.bankAccountData.balance= action.bankAccountData.openingBalance
            toastComponent(data)
            dispatch(action)
        })

 
    }
}





export const actionAsyncCloseBankAccount=(bankAccountData: IBankAccount)=> {
    
    const action = {
        type: actionTypes.CLOSE_BANK_ACCOUNT,
        bankAccountData,
    }

    return httpRequestDeleteBank(action)
}


export const httpRequestDeleteBank= (action:BankAccountAction)=>{
    return (dispatch: DispatchType) => {

        
        fetchApi(
            `${apiUrlWriteBackend}/closeBankAccount/${action.bankAccountData.id}`,
            action.bankAccountData,"DELETE"
        ).then((data) => {
     
            dispatch(action)
            toastComponent(data)
        })


    }


}


export const httpGetBankAccounts= (bankAccountData:IBankAccount)=>{
    
    return (dispatch: DispatchType) => {
        
    const action: BankAccountAction = {
        type: actionTypes.GET_BANK_ACCOUNTS,
        bankAccountData,
    }
            dispatch(action)

    }




}

export const callBankAccountDepositFundsAsync=(bankAccountData: IBankAccount)=> {
    
    const action: BankAccountAction = {
        type: actionTypes.EDIT_BANK_BALANCE,
        bankAccountData,
    }

    return httpDepositFundsRequestPutBank(action)
}

export const httpDepositFundsRequestPutBank=(action: BankAccountAction) =>{
    return (dispatch: DispatchType) => {

        fetchApi(
            `${apiUrlWriteBackend}/depositFunds/${action.bankAccountData?.id}`,
            action.bankAccountData,"PUT"
        ).then((data) => {
            toastComponent(data)
            dispatch(action)
            
        })

 
    }
}


export const withdrawFundsBankAccountAsync=(bankAccountData: IBankAccount)=> {
    
    const action: BankAccountAction = {
        type: actionTypes.WITHDRAWFUNDS_BANK,
        bankAccountData,
    }

    return httpWithDrawFundsRequestPutBank(action)
}


export const httpWithDrawFundsRequestPutBank=(action: BankAccountAction) =>{
    return (dispatch: DispatchType) => {
        fetchApi(
            `${apiUrlWriteBackend}/withdrawFunds/${action.bankAccountData?.id}`,
            action.bankAccountData,"PUT"
        ).then((data) => {
            toastComponent(data)
            dispatch(action)

            
        })

 
    }
}