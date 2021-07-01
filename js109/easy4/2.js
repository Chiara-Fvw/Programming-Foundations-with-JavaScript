/* Searching 101

Write a program that solicits six numbers from the user and logs a message that describes whether the sixth number appears among the first five numbers.

Input: numbers
Output: string


Examples:


Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in 25,15,20,17,23.

Data structure:
Nubmers and string aray

Algorithm:
Declare a variable and initialize to an empty array.
Ask the user for the numbers and store the first 5 in the array.
Iterate the array and check if someone match the sixth number.

Rreturn the sentence.

 */

let rlSync = require('readline-sync');

let fiveNums = [];

console.log('Enter the 1st number');
fiveNums.push(rlSync.prompt());

console.log('Enter the 2nd number');
fiveNums.push(rlSync.prompt());

console.log('Enter the 3rd number');
fiveNums.push(rlSync.prompt());

console.log('Enter the 4th number');
fiveNums.push(rlSync.prompt());

console.log('Enter the 5th number');
fiveNums.push(rlSync.prompt());

console.log('Enter the last number');
let last = rlSync.prompt();

if (fiveNums.includes(last)) {
  console.log(`The number ${last} appears in ${fiveNums}.`);
} else {
  console.log(`The number ${last} does not appear in ${fiveNums}.`);
}

