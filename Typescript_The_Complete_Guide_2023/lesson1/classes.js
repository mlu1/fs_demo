"use strict";
class BankAccount {
    constructor(accountNumber, accountName, accountBalance) {
        this.accountBalance = 0;
        this.accountNumber = accountNumber;
        this.accountName = accountName;
        this.accountBalance = accountBalance;
    }
    debit() {
        console.log("debit called", this.accountNumber);
    }
    credit() {
        console.log("credit called", this.accountNumber);
    }
    showBalance() {
        console.log(`Balance is ${this.accountBalance}`);
    }
}
let account1 = new BankAccount(101, "Mluleki", 1500);
let account2 = new BankAccount(102, "Nazi", 1500);
let account3 = new BankAccount(103, "Phumie", 1500);
let account5 = new BankAccount(104, "Muki", 0);
account1.debit();
account2.credit();
account5.showBalance();
