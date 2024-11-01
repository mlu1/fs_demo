class BankAccount{
    accountNumber:number;
    accountName:string;
    accountBalance:number;

    constructor(
        accountNumber:number,
        accountName:string,
        accountBalance:number
    ){
        this.accountBalance= accountBalance;
        this.accountName = accountName;
        this.accountNumber =accountNumber;
    }

    debit(){
        console.log("debit called",this.accountNumber)
    }

    credit(){
        console.log("credit called",this.accountNumber)
    }
}

let account1 = new BankAccount(101,'Mluleki',1500)
let account2 = new BankAccount(102,'Nazi',1500) 
let account3 = new BankAccount(103,'Phumie',1500)

console.log(account1.accountNumber)

account1.debit()
account2.credit()