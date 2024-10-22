interface Obj{
    bar:number,
    foo?:number
}

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
