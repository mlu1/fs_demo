class BankAccount{
    public readonly accountNumber:number;
    public accountName:string;
    private accountBalance:number = 0;
    private debitCharges:number = 5;
    private numberOfDebits:number = 0;
    private static countNumberAccounts:number = 0;

    constructor(
        accountNumber:number,
        accountName:string,
        accountBalance:number,
    ){
        BankAccount.countNumberAccounts +=1;
        this.accountNumber= accountNumber;
        this.accountName = accountName;
        this.accountBalance = accountBalance;
    }

    public debit(amount:number){
        if(amount >=10){
            this.numberOfDebits +=1;
            console.log(`Number of Debits  + ${this.numberOfDebits}`)
            console.log("Doing debit of",amount)
            if(this.numberOfDebits >3){
                console.log("Debit charge applied " +this.debitCharges)
                this.accountBalance = this.accountBalance - amount-this.debitCharges
            }
            this.accountBalance = this.accountBalance - amount-this.debitCharges
        }else{
            console.log("invalid amount")
        }
    } 

    public credit(amount:number){
        if(amount >=10){
            console.log("Doing credit of",amount)
            console.log("Debit charges applied", this.debitCharges)
            this.accountBalance = this.accountBalance +amount
        }
        else{
            console.log("invalid amount")
        }
    }

    public showBalance(){
        console.log(`Balance is ${this.accountBalance}`)
    }

    public static getCount(){
        return BankAccount.countNumberAccounts
    }
}

let account1 = new BankAccount(101,"Mluleki",1500)
let account2 = new BankAccount(102,"Nazi",1000)

account1.credit(9)
account1.showBalance()
account1.debit(200)
account1.showBalance()
account1.debit(200)
account1.debit(200)
account1.showBalance()
account1.debit(200)

console.log(BankAccount.getCount())

let account3 = new BankAccount(102,"Teto",500)
console.log(BankAccount.getCount())

/**
 * Inheritance 
 * -Inherit from BankAccount
 */

class StudentBankAccount extends BankAccount{
    public collegeName:string;
    constructor(
        accountNumber:number,
        accountName:string,
        accountBalance:number,
        collegeName:string
    ){
        super(accountNumber,accountName,accountBalance)
        this.collegeName = collegeName 
     }

    public studentLoan(){
        console.log('student loan called!')
    }
}

class BusinessAccount extends BankAccount {
    private businessName:string;
    constructor(
        accountNumber:number,
        accountName:string,
        accountBalance:number,
        businessName:string
    ){
        super(accountNumber,accountName,accountBalance)
        this.businessName = businessName
    }

    public businessLoan(){
        console.log("business loan called!")
    }
}

let student1 = new StudentBankAccount(105,'M_D',5000,'ABC')
let student2 = new StudentBankAccount(106,'B_M',6000,'DEF')
student1.credit(100)
student1.debit(500)
student1.showBalance()
student1.studentLoan()

console.log('2ND STUDENT BALANCE')
student2.showBalance()

let business1 = new BusinessAccount(107,'D_K',100,'GHI')