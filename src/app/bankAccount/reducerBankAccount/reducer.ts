import {
    BankAccountState,
    IBankAccount,
    BankAccountAction,
} from './types'

import * as actionTypes from './actions'

export const bankAccountReducer = (
    state: BankAccountState = { bankAccountsData: [] },
    action: BankAccountAction 
): BankAccountState => {
    switch (action.type) {
        case actionTypes.OPEN_BANK_ACCOUNT:

            return {
                ...state,
                bankAccountsData:
                    state?.bankAccountsData?.concat(action.bankAccountData),
                    
            }
        case actionTypes.CLOSE_BANK_ACCOUNT:
            const updatedBankAccounts: IBankAccount[] =
                state?.bankAccountsData?.filter(
                    (bankAccount) =>
                        bankAccount?.id !== action?.bankAccountData?.id
                )
            return {
                ...state,
                bankAccountsData: updatedBankAccounts,
            }
            case actionTypes.GET_BANK_ACCOUNTS:

            if(state.bankAccountsData.length >=1){
             return {
                ...state
             }
            }else {
                return {
                    ...state,
                    bankAccountsData:
                        state?.bankAccountsData?.concat(action?.bankAccountData),
                }
            }
             
           
                
                case actionTypes.EDIT_BANK_BALANCE:

                    const updatedBankAccount: IBankAccount[] =
                    state?.bankAccountsData?.filter(
                        (bankAccount) =>
                            bankAccount?.id !== action?.bankAccountData?.id
                    )
                    return {
                        ...state,
                        bankAccountsData:updatedBankAccount?.concat(action.bankAccountData)
                    }
                    case actionTypes.WITHDRAWFUNDS_BANK:

                        const withDrawnBankAccount: IBankAccount[] =
                        state?.bankAccountsData?.filter(
                            (bankAccount) =>
                                bankAccount?.id !== action?.bankAccountData?.id
                        )
                        return {
                            ...state,
                            bankAccountsData:withDrawnBankAccount?.concat(action.bankAccountData)
                        }
    }
    return state
}
