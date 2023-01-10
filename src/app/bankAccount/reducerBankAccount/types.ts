
export interface IBankAccount {
    accountHolder: string
    accountType: string
    balance: number
    id?: string;
  }
  
 export  type BankAccountState = {
    bankAccountsData: IBankAccount[]
  }
  
 export  type BankAccountAction = {
    type: string
    bankAccountData: IBankAccount
  }

  export type DispatchType = (args: BankAccountAction) => BankAccountAction