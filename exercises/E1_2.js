//ODD NUMBERS
for (let number = 1; number <= 99; number += 1) {
  if (number % 2 === 0) {
    continue;
  }
  console.log(number);
}

// BOOK SOLUTION

for (let i = 1; i < 100; i += 2) {
  console.log(i);
} 

// Further exploration

let rlSync = require('readline-sync');

let startNumber = Number(rlSync.question('Enter the start number:'));
let endNumber = Number(rlSync.question('Enter the ending number:'));

while ( startNumber <= endNumber) {
  if (startNumber % 2 === 0) {
    startNumber = startNumber + 1;
  }
  console.log(startNumber);
  startNumber += 2;
}