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

//Union
let n:number| string = 'ABC';

function display(param: string|number|boolean){
    console.log(param)
}

display('abc')
display(123)
display(true)
display(n)

enum LogLevel{
    ERROR =6,
    INFO=10,
    WARNING=15
}

enum HttpStatus{
    BADREQUEST=400,
    INTERNALSERVERERROR = 500,

}

enum Directions{
    UP = "Up",
    DOWN = "Down",
}

function displayLog(logLevel:LogLevel,message:string){
    if(logLevel === LogLevel.ERROR){
        console.log("ERROR: "+message)
    }else if(logLevel === LogLevel.INFO){
        console.log("INFO: "+message )
    }
    else if(logLevel ===LogLevel.WARNING){
        console.log("WARNING:"+message);
    }
    console.log(message)
}

displayLog(LogLevel.INFO,"ALL GOOD")
displayLog(LogLevel.ERROR,"ARRAY INDEX ISSUE")
displayLog(LogLevel.WARNING,"CODE PATH NOT COVERED")

/*
    Tuples
*/

let t = [1,"AAB",true]

function displayTuple(pair:[string,number]){
    console.log(pair[0]);
    console.log(pair[1]);
}

displayTuple(['Mluleki',1])


function displayTupleParams([empName,empId]:[string,number]){
    console.log("Name:" +empName);
    console.log("Id:" +empId);
    
}

displayTupleParams(['mlu',10])