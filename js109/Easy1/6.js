/* Sum or Product of Consecutive Integers

Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

Examples:


Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.


Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 720.

PROBLEM ****
INPUT: integer greater than 0
        sum or product

OUTPUT sum / product of all numbers from 1 to n.

- There will be no numbers?

EXAMPLES: *****

3, sum > 1 + 2 + 3 = 6.

Data structure ******
numbers.
Arrays.

ALGORTITTHM *****

take the number num.
take the opeartion: s or p.
Declare array and push all the numbers from 1 to n.
if sum:
  return reduce array to sum
if prod:
  return reduce array to prod.

 */

let rlS = require('readline-sync')

let num = parseInt(rlS.question('Insert a number greater than 0: \n'));
let operation = rlS.question('Do you want to operate a sum (s) or a product (p)?: \n');

let array = [];

for (let nx = 1; nx <= num; nx++){
  array.push(nx);
}

if (operation.toLowerCase() === 's') {
  let tot = array.reduce((a, b) => a + b);
  console.log(`The sum of the integers between 1 and ${num} is ${tot}.`);
} else {
  let tot = array.reduce((a, b) => a * b);
  console.log(`The product of the integers between 1 and ${num} is ${tot}.`);
}