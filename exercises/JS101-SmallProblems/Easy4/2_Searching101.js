let readlineSync = require('readline-sync');

console.log("Enter the first number:");
let number1 = readlineSync.prompt();

console.log("Enter the 2nd number:");
let number2 = readlineSync.prompt();

console.log("Enter the 3rd number:");
let number3 = readlineSync.prompt();

console.log("Enter the 4th number:");
let number4 = readlineSync.prompt();

console.log("Enter the 5th number:");
let number5 = readlineSync.prompt();

console.log("Enter the last number:");
let number6 = readlineSync.prompt();


if ((number6 === number1) || (number6 === number2) || (number6 === number3) || (number6 === number4) || (number6 === number5)) {
  console.log( `The number ${number6} appears in ${number1}, ${number2}, ${number3}, ${number4}, ${number5}.` );
} else {
  console.log( `The number ${number6} doeas not appear in ${number1}, ${number2}, ${number3}, ${number4}, ${number5}.` );
}

//The Book solution

let numbers = [];

console.log("Enter the 1st number:");
numbers.push(Number(readlineSync.prompt()));
console.log("Enter the 2nd number:");
numbers.push(Number(readlineSync.prompt()));
console.log("Enter the 3rd number:");
numbers.push(Number(readlineSync.prompt()));
console.log("Enter the 4th number:");
numbers.push(Number(readlineSync.prompt()));
console.log("Enter the 5th number:");
numbers.push(Number(readlineSync.prompt()));
console.log("Enter the last number:");
const lastNumber = Number(readlineSync.prompt());

if (numbers.includes(lastNumber)) {
  console.log(`The number ${lastNumber} appears in ${numbers}.`);
} else {
  console.log(`The number ${lastNumber} doeas not appear in ${numbers}.`);
}

