let readlineSync = require('readline-sync');

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

function checkNumbers(arr, cond) {
  for (val = 0; val < numbers.length; val++) {
    if (arr.some((nx) => arr[val] > cond)) {
      return true;
    }
  }
  return false;
}

console.log(checkNumbers(numbers, 25));
