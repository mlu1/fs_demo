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
    },{
        eName:"Tetos",
        eSalary:900
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

/** 
 * Tuples
*/

let t = [1,"AAB",true]

function displayTuple(pair:[string,number]){
    console.log("Name: "+pair[0]);
    console.log("Id: "+pair[1]);
}

displayTuple(['Mluleki',1])


function displayTupleParams([empName,empId]:[string,number]){
    console.log("Name:" +empName);
    console.log("Id:" +empId); 
}

displayTupleParams(['mlu',10])

/**
 * Literals
*/
let httpMethod:"GET"| "POST" | "PUT" = "GET"

function handlehttpRequest(url:string,method:"GET"| "POST"|"PUT"){
    console.log(method+" :calling" +url)
}

handlehttpRequest("http://google.com","GET")
handlehttpRequest("http://google.com","POST")

/**
 * Compare values in function and ternary operation
 */
function CompareValues(s1:string,s2:string):number{
        if(s1 ===s2){
            return 0
        }
        else if(s1 > s2){
            return 1
        }
        else { return 2}
}

CompareValues("ABC","abc")

/**
 * Functions
 */
//optional parameter
function add(n1:number,n2:number):number{
    return (n1+n2)
}

console.log(add(5,6))

function multiply(n4:number,n5:number,n6:number=0):number{
    return(n4*n5*n6)
}

/**
 * REST PARAMS
 */
function displayLogs( ...logs:string[]){
    logs.forEach((log)=>{
        console.log(log)
    })
}

displayLogs("LOG1","LOG2","LOG3","LOG4")

/**
 * Arrow functions
 */

let addValues = (n10:number,n11:number):number=>{
    return (n10+n11)
}

addValues(1,2)

let Stringify = ()=>{
    return("Hi")
}

Stringify()
function takeAction(n13:number,n14:number,fun:any):number{
    return n13+n14;
}
/**
 * function that takes another function as parameters
 */
takeAction(1,2,(n15:number,n16:number)=>{
    console.log((n15/n16)*3*4)
});

let subtractValues = function(n_1:number,n_2:number){
    console.log(n_1-+n_2)
}

/**
 * Function constructors
 */
 let multi = new Function("n1","n2","return n1*n2");
console.log(multi(10,4))


/**
 * Casting 
 */

function displayLength(input:string|number):void{
    if(typeof input ==='string'){
        console.log(input.length)
    }else{
        console.log("Sorry length calculation is not possible")
    }
}

displayLength("ABC")
displayLength(2)

/**
 * Casting HTML Example 
 */

let input = document.getElementById("input1") as HTMLInputElement
console.log(input.value)
