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
