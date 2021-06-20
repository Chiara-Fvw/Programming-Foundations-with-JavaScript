/* How big is the room?

Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

Example:

Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet). */

let rlSync = require('readline-sync');

let length = Number(rlSync.question('Enter the length of the room in meters.\n'));
let width = Number(rlSync.question('Enter the width of hte room in meters. \n'));

const MT_TO_FEET = 10.7639;

let areaMt = length * width;
let areaFt = areaMt * MT_TO_FEET;

console.log(`The area of the room is ${areaMt.toFixed(2)} square meters (${areaFt.toFixed(2)} square feet).`);
