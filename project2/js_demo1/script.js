
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
    my_Age = (incrementBy *multiplyBy)
    return my_Age
}
new_age = addsToMyAge(5,8)
console.log("The new age "+new_age)


function conditionalFunction(agesParameter){
    if (agesParameter > 18){
        return true
    }
    else {
        return false
    }   
}

function shouldIgetALicense(my_age,bribe){
    if(age<=18 && bribe >100 ){
        console.log('You Pass')
        return 
    }
    
    if(my_age > 18){
        console.log('This person is above 18')
        return
    }
    else{
        if(bribe >100){
            console.log('You passed')
        }else{
            console.log("This guy is below 18")
        }
    }
}

shouldIgetALicense(18,200)

function conditionalFunction(agesParameter){
    if (agesParameter > 18){
        return true
    }
    else {
        return false
    }   
}

console.log("The age limit+"+conditionalFunction(10))

const timer = document.querySelector('span')
console.log(timer)
makeConsoleLog()

setInterval(()=>{
    timer.innerText = new Date().toLocaleDateString()
},1000)