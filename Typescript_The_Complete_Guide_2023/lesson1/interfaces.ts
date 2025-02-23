interface ForexAccount{
    accountNumbers:number;
    accountNames:string;
    accountBalances:number;
}

class MvasiBankAccount implements ForexAccount{
    accountNumbers:number;
    accountNames:string;
    accountBalances:number;

    constructor(accountNumbers:number,
        accountNames:string,
        accountBalances:number){
        this.accountNumbers=accountNumbers;
        this.accountNames=accountNames;
        this.accountBalances = accountBalances;
    }
}

let studentAcc1 = new MvasiBankAccount(1,"",1000);