var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, accountName, accountBalance) {
        this.accountBalance = accountBalance;
        this.accountName = accountName;
        this.accountNumber = accountNumber;
    }
    BankAccount.prototype.debit = function () {
        console.log("debit called", this.accountNumber);
    };
    BankAccount.prototype.credit = function () {
        console.log("credit called", this.accountNumber);
    };
    return BankAccount;
}());
var account1 = new BankAccount(101, 'Mluleki', 1500);
var account2 = new BankAccount(102, 'Nazi', 1500);
var account3 = new BankAccount(103, 'Phumie', 1500);
console.log(account1.accountNumber);
account1.debit();
account2.credit();
