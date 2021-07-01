/* When Will I Retire?

Build a program that logs when the user will retire and how many more years the user has to work until retirement.

Example:
What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!

Data structure
strings and numbers.

Algorithm
Take the inputs from the user
Transform to numbers.

Make the calculations:
timeLeft =  retirement - age 
Year = currentYear + timeLeft

Output the strings with interpolation.

*/

let rlS = require('readline-sync');

let age = Number(rlS.question('How old are you?'));
let retirement = Number(rlS.question('At what age would you like to retire? '));
let today = new Date();
let currentYear = today.getFullYear();
let timeLeft = retirement - age;
let year = currentYear + timeLeft;

console.log(`It's ${currentYear}. You will retire in ${year}. \nYou have only ${timeLeft} years of work to go!`);