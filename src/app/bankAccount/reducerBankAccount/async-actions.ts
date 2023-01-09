import { toastComponent } from '../../components/swalComponent'
import * as actionTypes from './actions'
import { fetchApi } from './http/httpActions'
import { BankAccountState, DispatchType, IBankAccount, BankAccountAction } from './types'

export const testBankAccountAsync=(bankAccountData: IBankAccount)=> {
    
    const action: BankAccountAction = {
        type: actionTypes.OPEN_BANK_ACCOUNT,
        bankAccountData,
    }

    return httpRequestPostBank(action)
}

// export function removeArticle(article: IArticle) {
//   const action: ArticleAction = {
//     type: actionTypes.REMOVE_ARTICLE,
//     article,
//   }
//   return httpRequestBank(action)
// }

export const httpRequestPostBank=(action: BankAccountAction) =>{
    return (dispatch: DispatchType) => {
        fetchApi(
            'http://localhost:5001/api/v1/openBankAccount',
            action.bankAccountData,"POST"
        ).then((data) => {
            action.bankAccountData.id=data.id
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

    return httpRequestPostBank(action)
}


export const httpRequestDeleteBank= (action:BankAccountAction)=>{
    return (dispatch: DispatchType) => {
        fetchApi(
            `http://localhost:5001/api/v1/closeBankAccount/${action.bankAccountData.id}`,
            action.bankAccountData,"DELETE"
        ).then((data) => {
            toastComponent(data)
            dispatch(action)

            // JSON data parsed by `data.json()` call
        })

        // api().then((data=>{

        //     console.log(data);
        //     dispatch(action)
        // }))
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

