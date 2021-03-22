let rlSync = require('readline-sync');

let age = rlSync.question('How old are you?\n');
let desiredRetirement = rlSync.question('At what age would you like to retire?\n');

let today = new Date();
let year = today.getFullYear();

console.log(year);
let yearsLeft = desiredRetirement - age;
let yearRetirement = year + yearsLeft;

console.log(`It's ${year}. You will retire in ${yearRetirement}. \n You have only ${yearsLeft} years of work to go!`);