let rlSync = require('readline-sync');

let arr = rlSync.question('Please, enter a set of integers greater than 0 separated by comma: \n');
let integer = arr.split(",").map(function(item) {
  return parseInt(item,10);
})

let operation = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product.\n');

if (operation === "s") {
  let reducer = (accumulator, currentValue) => accumulator + currentValue;
  let total = integer.reduce(reducer);
  console.log(`The sum of the integers ${integer} is ${total}.`);
} else if (operation === "p") {
  let reducer = (accumulator, currentValue) => accumulator * currentValue;
  let total = integer.reduce(reducer);
  console.log(`The product of the integers ${integer} is ${total}.`);
} else {
  console.log("Oops. Unknown operation.");
} 


/* Further Exploration

What if the input was an array of integers instead of just a single integer? How would your computeSum and computeProduct functions change? Given that the input is an array, how might you make use of the Array.prototype.reduce() method? */