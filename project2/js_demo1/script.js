
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

const timer = document.querySelector('span')
console.log(timer)

setInterval(()=>{
    timer.innerText = new Date().toLocaleDateString()
},1000)
