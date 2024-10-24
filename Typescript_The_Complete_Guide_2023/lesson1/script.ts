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
};

let names:number[] = [1,2,3,4,5]
let surnames:readonly number[] = [5,4,3,2,1]

names.push(7)

let upDatedNumbers = names.filter((n)=>n>3)
let upDatedNumbers2 = names.map((n)=>n*3)

for (let i = 0;i<4;i++){
    console.log(names[i])
}

names.forEach(n =>{
    console.log(n)
})


console.log(upDatedNumbers)
console.log(upDatedNumbers2)


let listOfEmp = [
     {
        eName:"Mlu",
        eSalary:1200
    },
    {
        eName:"Nozi",
        eSalary:2000
    },{
        eName:"Phumis",
        eSalary:700
    }
]

console.log(listOfEmp)

let listOfNames:string[]= listOfEmp.map(ob=>ob.eName)
let listOfNamesUpdated1 = listOfEmp.filter(ob =>ob.eSalary>1000)
console.log(listOfNames)
console.log(listOfNamesUpdated1)

/**ARRAY DESTRUCTURING */
let [n1,n2] = [1,2]
console.log(n1)

//Array with constructor
let arr = new Array(1,2)