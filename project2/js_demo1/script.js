
const myAge = 35
const amIAbove18 =true
const myName = "Mluleki"
const friends = [27,true,"neihul"]
let someSpeialValue
const beginNumber = 111111111111111111111111111111
let a = 250;
console.log(beginNumber);
const typeofMyAge = typeof myAge

console.log(typeofMyAge)


const friendShipAge = [20,19,22,21,23]
const sum = friendShipAge[0]+friendShipAge[1]+friendShipAge[2]+friendShipAge[3]+friendShipAge[4]
console.log("sum of friends",sum)
const totalFriends = friendShipAge.length

const averageAge = sum/totalFriends
console.log("Average friend age",averageAge)


/*
    Some simple functions
*/

let age = 35
let sumz =200
let totals = 5

function makeConsoleLog(){
    console.log("Hello from console log "+ totals)
}

function addsToMyAge(incrementBy,multiplyBy){
    let my_Age = (incrementBy *multiplyBy)
    return my_Age
}
let new_age = addsToMyAge(5,8)
console.log("The new age "+new_age)


function shouldIgetALicense(my_age,bribe,whiteListed){
    if(whiteListed){
        console.log('You are banned',whiteListed)
        return
    }

    if(my_age<=18 && bribe >100 ){
        console.log('You Pass [<18 and bribe >100]')
    }
    else if(my_age > 18){
        console.log('This person is above 18[cool qualify]')
    }
    else if (bribe <=100)   
    {
        console.log('This person is below 18 [bribe is too low]')   
    }
}

shouldIgetALicense(5,301,true)


let myFriends = ['default']

function addMyFriends(friend){
    myFriends.push(friend)
    console.log('Friend list '+ myFriends)
}

addMyFriends('Mluleki')
addMyFriends('Mtande')
addMyFriends(3)

const lastGuys = myFriends.pop()
console.log(myFriends,lastGuys)

/*
    Loops
*/
for (let k=0;k<=10;k++){
    myFriends.push(k)
}
console.log(myFriends)


let evenNumbers = []
let oddNumbers = []
let arr_numbers = [0,1,2,3,4,5,6,7,8,9,10]

function skipNumbers(arr_input,skip_number){
    for (let i =0;i<arr_input.length;i++){
        if (i %2 ==0 && i !==skip_number){
            evenNumbers.push(i)
        }
        else{
            oddNumbers.push(i)
        }
    }
    return evenNumbers
}

function skipNumbersv2(number){
    let evens = []
    for(let j=0;j<20;j++){
        if(j===number){
            break
        }
        if(j%2 ===0){
            evens.push(j)
        }
    }
    return evens
}

console.log(skipNumbersv2(10))
console.log(skipNumbers(arr_numbers,10))

/*
    Objects 
*/
const myObject = {
    'keyname':'value',
    'keyname2':'value2',
    'keyname3':{
            'keyname4': 'hello world Pro'        
    },
    'keyname5':'Mluleki'
}
console.log(myObject['keyname3']['keyname4'])

/* 
    pass by reference
*/

const myProfile = {
    name:"Mluleki",
    age:35
}

const secondProfile = {
    name:'John',
    age:36
}

function primitiveMutated(primitive){
    primitive++
    console.log(primitive)
}

function mutate(obj1){
    console.log(obj1.age++)
}

mutate(secondProfile)

let num = 100
primitiveMutated(num)

/*
    scoping- an area where a variable's lifetime is between curly braces
*/
function x(){
    const hello = 'world'
    console.log(hello)

    if(true){
        console.log(hello)
    }
}
x()
/*
    Document manipulation
*/
const heading = document.querySelector('h1')
console.log(heading)







