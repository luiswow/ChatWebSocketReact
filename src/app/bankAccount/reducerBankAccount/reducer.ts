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
             

                return {
                    ...state,
                    bankAccountsData:
                        state?.bankAccountsData?.concat(action.bankAccountData),
                }
    }
    return state
}
