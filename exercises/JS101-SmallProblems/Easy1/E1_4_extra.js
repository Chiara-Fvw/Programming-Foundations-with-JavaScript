//further exploration
let rlSync = require('readline-sync');

const SQMETERS_TO_SQFEET = 10.7639;
const SQFEET_TO_SQMETERS = 0.092903;

let length = Number(rlSync.question('Enter the length of the room:\n'));
let width = Number(rlSync.question('Enter2 the width of the room:\n'));
let unit = rlSync.question('Which unit you would like to use? (write M for meters or F for feets).\n').toUpperCase();

while (unit !== 'M' && unit !== 'F') {
    unit = rlSync.question('Which unit you would like to use? (write M for meters or F for feets).\n').toUpperCase();
  }

function area (length, width, unit) {
  if (unit === 'M') {
    let areaMt = length * width;
    let areaFt = (areaMt * SQMETERS_TO_SQFEET).toFixed(2);
    console.log(`The room size is ${areaMt} square meters ( ${areaFt} square feets)`);
  }
  if (unit === 'F') {
    let areaFt = length * width;
    let areaMt = (areaFt * SQFEET_TO_SQMETERS).toFixed(2);
    console.log(`The room size is ${areaFt} square feets ( ${areaMt} square meters)`);
  }

}

area(length, width, unit);