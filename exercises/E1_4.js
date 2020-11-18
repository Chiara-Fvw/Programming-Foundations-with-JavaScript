let rlSync = require('readline-sync');

let lengthMt = Number(rlSync.question('Enter the length of the room in meters:\n'));
let widthMt = Number(rlSync.question('Enter2 the width of the room in meters:\n'));

function area (length, width) {
  let areaMt = length * width;
  let areaFt = (areaMt * 10.7639).toFixed(2);
  console.log(`The room size is ${areaMt} square meters or ${areaFt} square feets`);
}

area(lengthMt, widthMt); 

//Book answer:

const SQMETERS_TO_SQFEET = 10.7639;

console.log("Enter the length of the room in meters:");
let length = readlineSync.prompt();
length = parseInt(length, 10);

console.log("Enter the width of the room in meters:");
let width = readlineSync.prompt();
width = parseInt(width, 10);

let areaInMeters = (length * width);
let areaInFeet = (areaInMeters * SQMETERS_TO_SQFEET);

console.log(
  `The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`
);


