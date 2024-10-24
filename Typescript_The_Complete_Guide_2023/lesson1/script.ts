/**
 * Objects
 */
let emp:{
    empName:string,
    companyName:string,
    salary:number,
    address:{
        country:string,
        city:string,
        area:string
    },
    display:()=>{
    }
}

emp = {
    empName:"Mlu",
    companyName:"ABC123",
    salary:1000,
    address:{
        country:'India',
        city:'New Dehli',
        area:'MBA'
    },
    display(){
        console.log(this.empName)
    },
};


let names:number[] = [1,2,3,4,5]
names.push(7)
console.log(names)

