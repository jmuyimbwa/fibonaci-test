"use strict";
exports.__esModule = true;
exports.ProxyClient = void 0;
//  Real Object as Saving account
var SavingAccount = /** @class */ (function () {
    function SavingAccount() {
    }
    SavingAccount.prototype.debit = function () {
        console.log("Debit from Bank Account");
    };
    //  Validate Account from Bank
    SavingAccount.prototype.validate = function () {
        console.log("validate Bank Account");
        return true;
    };
    return SavingAccount;
}());
//  Proxy class for the real object of SavingAccount
var DebitCardProxy = /** @class */ (function () {
    function DebitCardProxy() {
    }
    DebitCardProxy.prototype.debit = function () {
        if ((this.savingAccount == null)) {
            this.savingAccount = new SavingAccount();
        }
        //  Doing some validation before debit from account
        if (!this.savingAccount.validate()) {
            return;
        }
        this.savingAccount.debit();
    };
    return DebitCardProxy;
}());
var ProxyClient = /** @class */ (function () {
    function ProxyClient() {
    }
    ProxyClient.main = function (any) {
        var account = new DebitCardProxy();
        account.debit();
    };
    return ProxyClient;
}());
exports.ProxyClient = ProxyClient;
