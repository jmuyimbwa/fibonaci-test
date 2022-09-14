// 
//  Initiate account functionalities
interface BankAccount {
    debit();
}

 //  Real Object as Saving account
class SavingAccount implements BankAccount {
    public debit() {
    console.log("Debit from Bank Account");
    }
    
    //  Validate Account from Bank
    public validate(): boolean {
    console.log("validate Bank Account");
    return true;
    }
}
 //  Proxy class for the real object of SavingAccount
class DebitCardProxy implements BankAccount {
    savingAccount: SavingAccount;

    public debit() {
    if ((this.savingAccount == null)) {

        this.savingAccount = new SavingAccount();
    }
    
        //  Doing some validation before debit from account
    if (!this.savingAccount.validate()) {
        return;
    }

    this.savingAccount.debit();
    }
}
export class ProxyClient {
    
    public static main(any: String[]) {
        let account: BankAccount = new DebitCardProxy();
        account.debit();
    }
}