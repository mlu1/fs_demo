interface Obj{
    bar:number,
    foo?:number
}

interface Person{
    name:string,
    age:number,
}

const john :Person = {
    name:'John',
    age:45
}

console.log(john.name)


let foo:string = 'bar'

function add (a:number,b:number):number{
    return a+b
}

const obj:Obj = {
    bar:10,
}

obj['bar'] = 10
obj['foo'] = 29

add(1,3)

let x = 0

loop :while(x<10){
    x++
}
function lesson9(){
    return;
    {
        x:true
    }
}

function log(msg:string,flag:boolean){
    const MEANING_OF_LIFE = 42
    if(msg.length>4){
        return null
    }
    console.log(msg)
}

function compare(arg:any){
    
    switch(typeof arg){
        case 'number':
        case 'string':
            console.log('Fallthrough case')
            break
        default:
            console.log('Default case')
    }
}
