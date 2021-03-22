let rlSync = require('readline-sync');

let integer = parseFloat(rlSync.question('Please, enter an integer greater than 0: \n'));

let operation = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product.\n');

function retrieveSum(number) {
  let sum = 0;
  for (let i = 1; i <= number; i ++) {
    sum = sum + i;
  }
  return sum;
}

function retrieveProduct(number) {
  let prod = 1;
  for (let i = 1; i <= number; i ++) {
    prod = prod * i;
  }
  return prod;
}

if (operation === "s") {
  let total = retrieveSum(integer);
  console.log(`The sum of the integers between 1 and ${integer} is ${total}.`);
} else if (operation === "p") {
  let total = retrieveProduct(integer);
  console.log(`The product of the integers between 1 and ${integer} is ${total}.`);
} else {
  console.log("Oops. Unknown operation.");
}