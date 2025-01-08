const age :number = 3
let firstName :string = 'John'
let isMarried:boolean = false

let noValue:null = null;
let notAssigned:undefined = undefined
let today:Date = new Date()

/**
 * Arrays
 */

let planets:string[] = ['Earth','Mars','Jupiter','Saturn']
let luckyNumbers:number[] = [3,5,7]
let completed:boolean[] = [false,true,false,false]

/**
 * Classes
 */
class Phone{}
let phone:Phone =new Phone()

/**
 * Object Literals
 */
let product:{name:string;price:number} = {
    name:'Mluleki',
    price:15
}

/**
 * Functions
 */
const test:(content:string) => void = (content:string) =>{
   console.log(content) 
}
const place = '{"lat":45,"lon":-70}'
const newLocation:{lat:number;lon:number} = JSON.parse(place)
console.log(newLocation)

const forecast = ['sunny','rain','wind','cloud']

/**
 * Simple loop with variable initialization
 */
let isSunny:boolean = true
for(let i =0;i<forecast.length;i++){
    if(forecast[i]  === 'sunny'){
        isSunny = true
    }
}

/**
 * Type cant be infered correctly
 */

let temperature = [8,5,-2]
let subzero:boolean | number =false

for (let i=0;i<temperature.length;i++){
    if(temperature[i]<0){
        subzero = temperature[i]
    }
    console.log(subzero)
}