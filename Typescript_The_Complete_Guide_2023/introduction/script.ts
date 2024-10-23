console.log("hi from Typescript")

let b:number = 200

function onAdd(c:number):number{
    let  a:number =10;
    return a
}

function compare(n1:number,n2:number){
    if(n1>n2){
        return n1;
    }else{
        return n2
    }
}
console.log(b,onAdd(2))
console.log(compare(1,3))

for(var i=0;i<5;i++){
    console.log(i)
}

