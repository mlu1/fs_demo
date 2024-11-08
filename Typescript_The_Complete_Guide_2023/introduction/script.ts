console.log("hi from Typescript")
let b:number = 200

function onAdd(c:number):number{
    let  a:number =10;
    return a
}

function compare(n1:number,n2:number):void{
    if(typeof n1 ==="number" && typeof n2 === "number")
        if(n1>n2){
            console.log('n1 is bigger')
        }
        else{
            console.log('n2 is bigger')
    }
    else{
        console.log("Invalid input")
    }
}


function concatString(s1:string,s2:string):void{
    console.log(s1+s2)
}

console.log(b,onAdd(2))
compare(1,3)

for(let i=0;i<5;i++){
    console.log(i)
}

