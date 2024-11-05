"use strict";
class BankAccount {
    constructor(accountNumber, accountName, accountBalance) {
        this.accountBalance = 0;
        this.debitCharges = 5;
        this.numberOfDebits = 0;
        this.accountNumber = accountNumber;
        this.accountName = accountName;
        this.accountBalance = accountBalance;
    }
    debit(amount) {
        if (amount >= 10) {
            this.numberOfDebits += 1;
            console.log(`Number of Debits  + ${this.numberOfDebits}`);
            console.log("Doing debit of", amount);
            if (this.numberOfDebits > 3) {
                console.log("Debit charge applied " + this.debitCharges);
                this.accountBalance = this.accountBalance - amount - this.debitCharges;
            }
            this.accountBalance = this.accountBalance - amount - this.debitCharges;
        }
        else {
            console.log("invalid amount");
        }
    }
    credit(amount) {
        if (amount >= 10) {
            console.log("Doing credit of", amount);
            console.log("Debit charges applied", this.debitCharges);
            this.accountBalance = this.accountBalance + amount;
        }
        else {
            console.log("invalid amount");
        }
    }
    showBalance() {
        console.log(`Balance is ${this.accountBalance}`);
    }
}
let account1 = new BankAccount(101, "Mluleki", 1500);
account1.credit(9);
account1.showBalance();
account1.debit(200);
account1.showBalance();
account1.debit(200);
account1.debit(200);
account1.showBalance();
account1.debit(200);
