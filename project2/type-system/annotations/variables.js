var age = 3;
var firstName = 'John';
var isMarried = false;
var noValue = null;
var notAssigned = undefined;
var today = new Date();
/**
 * Arrays
 */
var planets = ['Earth', 'Mars', 'Jupiter', 'Saturn'];
var luckyNumbers = [3, 5, 7];
var completed = [false, true, false, false];
/**
 * Classes
 */
var Phone = /** @class */ (function () {
    function Phone() {
    }
    return Phone;
}());
var phone = new Phone();
/**
 * Object Literals
 */
var product = {
    name: 'Mluleki',
    price: 15
};
/**
 * Functions
 */
var test = function (content) {
    console.log(content);
};
var place = '{"lat":45,"lon":-70}';
var newLocation = JSON.parse(place);
console.log(newLocation);
var forecast = ['sunny', 'rain', 'wind', 'cloud'];
/**
 * Simple loop with variable initialization
 */
var isSunny = true;
for (var i = 0; i < forecast.length; i++) {
    if (forecast[i] === 'sunny') {
        isSunny = true;
    }
}
/**
 * Type cant be infered correctly
 */
var temperature = [8, 5, -2];
var subzero = false;
for (var i = 0; i < temperature.length; i++) {
    if (temperature[i] < 0) {
        subzero = temperature[i];
    }
    console.log(subzero);
}
