class Person{
    private name:string = "N/A"

    public getName(){
        return this.name
    }

    public setName(name:string){
        this.name = name
    }
}

let p1 = new Person();
p1.setName("Mluleki");
console.log(names)