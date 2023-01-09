import { bankAccountReducer } from '../app/bankAccount/reducerBankAccount/reducer'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { BankAccountState } from '../app/bankAccount/reducerBankAccount/types'

export interface RootState {
    bankAccountReducer: BankAccountState
}

export default createStore(
    combineReducers<RootState>({
        bankAccountReducer,
    }),
    applyMiddleware(thunk)
)
