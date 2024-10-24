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
    display() {
        console.log(this.empName);
    },
};
let names = [1, 2, 3, 4, 5];
names.push(7);
console.log(names);
