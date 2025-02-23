interface ForexAccount{
    accountNumbers:number;
    accountName:string;
    accountBalances:number;
}

class MvasiBankAccount{
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