"use strict";
/**
 * Objects
 */
let emp;
emp = {
    empName: "Mlu",
    companyName: "ABC123",
    salary: 1000,
    address: {
        country: 'India',
        city: 'New Dehli',
        area: 'MBA'
    },
};
let names = [1, 2, 3, 4, 5];
let surnames = [5, 4, 3, 2, 1];
names.push(7);
let upDatedNumbers = names.filter((n) => n > 3);
let upDatedNumbers2 = names.map((n) => n * 3);
for (let i = 0; i < 4; i++) {
    console.log(names[i]);
}
names.forEach(n => {
    console.log(n);
});
console.log(upDatedNumbers);
console.log(upDatedNumbers2);
let listOfEmp = [
    {
        eName: "Mlu",
        eSalary: 1200
    },
    {
        eName: "Nozi",
        eSalary: 2000
    }, {
        eName: "Phumis",
        eSalary: 700
    }, {
        eName: "Tetos",
        eSalary: 900
    }
];
console.log(listOfEmp);
let listOfNames = listOfEmp.map(ob => ob.eName);
let listOfNamesUpdated1 = listOfEmp.filter(ob => ob.eSalary > 1000);
console.log(listOfNames);
console.log(listOfNamesUpdated1);
/**ARRAY DESTRUCTURING */
let [n1, n2] = [1, 2];
console.log(n1);
//Array with constructor
let arr = new Array(1, 2);
//Union
let n = 'ABC';
function display(param) {
    console.log(param);
}
display('abc');
display(123);
display(true);
display(n);
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["ERROR"] = 6] = "ERROR";
    LogLevel[LogLevel["INFO"] = 10] = "INFO";
    LogLevel[LogLevel["WARNING"] = 15] = "WARNING";
})(LogLevel || (LogLevel = {}));
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["BADREQUEST"] = 400] = "BADREQUEST";
    HttpStatus[HttpStatus["INTERNALSERVERERROR"] = 500] = "INTERNALSERVERERROR";
})(HttpStatus || (HttpStatus = {}));
var Directions;
(function (Directions) {
    Directions["UP"] = "Up";
    Directions["DOWN"] = "Down";
})(Directions || (Directions = {}));
function displayLog(logLevel, message) {
    if (logLevel === LogLevel.ERROR) {
        console.log("ERROR: " + message);
    }
    else if (logLevel === LogLevel.INFO) {
        console.log("INFO: " + message);
    }
    else if (logLevel === LogLevel.WARNING) {
        console.log("WARNING:" + message);
    }
    console.log(message);
}
displayLog(LogLevel.INFO, "ALL GOOD");
displayLog(LogLevel.ERROR, "ARRAY INDEX ISSUE");
displayLog(LogLevel.WARNING, "CODE PATH NOT COVERED");
/**
 * Tuples
*/
let t = [1, "AAB", true];
function displayTuple(pair) {
    console.log("Name: " + pair[0]);
    console.log("Id: " + pair[1]);
}
displayTuple(['Mluleki', 1]);
function displayTupleParams([empName, empId]) {
    console.log("Name:" + empName);
    console.log("Id:" + empId);
}
displayTupleParams(['mlu', 10]);
/**
 * Literals
*/
let httpMethod = "GET";
function handlehttpRequest(url, method) {
    console.log(method + " :calling" + url);
}
handlehttpRequest("http://google.com", "GET");
handlehttpRequest("http://google.com", "POST");
/**
 * Compare values in function and ternary operation
 */
function CompareValues(s1, s2) {
    if (s1 === s2) {
        return 0;
    }
    else if (s1 > s2) {
        return 1;
    }
    else {
        return 2;
    }
}
function CompareValuesTernary(s3, s4) {
    return s3 === s4 ? -1 : s3 > s4 ? 1 : -1;
}
CompareValues("ABC", "abc");
CompareValuesTernary("BCD", "bcd");
/**
 * Functions
 */
//optional parameter
function add(n1, n2) {
    return (n1 + n2);
}
function add_modified(n1, n2, n3) {
    console.log(n1 + n2 + (n3 || 0));
}
console.log(add(5, 6));
add_modified(5, 6, 8);
function multiply(n4, n5, n6 = 0) {
    return (n4 * n5 * n6);
}
/**
 * REST PARAMS
 */
function displayLogs(...logs) {
    logs.forEach((log) => {
        console.log(log);
    });
}
displayLogs("LOG1", "LOG2", "LOG3", "LOG4");
/**
 * Arrow functions
 */
let addValues = (n10, n11) => {
    return (n10 + n11);
};
addValues(1, 2);
let Stringify = () => {
    return ("Hi");
};
Stringify();
function takeAction(n13, n14, fun) {
    return n13 + n14;
}
/**
 * function that takes another function as parameters
 */
takeAction(1, 2, (n15, n16) => {
    console.log((n15 / n16) * 3 * 4);
});
let subtractValues = function (n_1, n_2) {
    console.log(n_1 - +n_2);
};
/**
 * Function constructors
 */
let multi = new Function("n1", "n2", "return n1*n2");
console.log(multi(10, 4));
/**
 * Casting
 */
function displayLength(input) {
    if (typeof input === 'string') {
        console.log(input.length);
    }
    else {
        console.log("Sorry length calculation is not possible");
    }
}
displayLength("ABC");
displayLength(2);
/**
 * Casting HTML Example
 */
let input = document.getElementById("input1");
console.log(input.value);
