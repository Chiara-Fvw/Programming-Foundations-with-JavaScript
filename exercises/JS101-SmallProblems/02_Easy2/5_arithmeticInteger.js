//Write a program that prompts the user for two positive integers, and then prints the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input.


/* ==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 141050039560662968926103
 */

let rlSync = require('readline-sync');

let number1 = Number(rlSync.question("Enter the first number:\n"));
let number2 = Number(rlSync.question("Enter the second number:\n"));

console.log(`${number1} + ${number2} = ${number1 + number2}`);
console.log(`${number1} - ${number2} = ${number1 - number2}`);
console.log(`${number1} * ${number2} = ${number1 * number2}`);
console.log(`${number1} / ${number2} = ${Math.floor(number1 / number2)}`);
console.log(`${number1} % ${number2} = ${number1 % number2}`);
console.log(`${number1} ** ${number2} = ${Math.pow(number1, number2)}`);