"use strict";
console.log("hi from Typescript");
let b = 200;
function onAdd(c) {
    let a = 10;
    return a;
}
function compare(n1, n2) {
    if (n1 > n2) {
        return n1;
    }
    else {
        return n2;
    }
}
console.log(b, onAdd(2));
console.log(compare(1, 3));
for (var i = 0; i < 5; i++) {
    console.log(i);
}
