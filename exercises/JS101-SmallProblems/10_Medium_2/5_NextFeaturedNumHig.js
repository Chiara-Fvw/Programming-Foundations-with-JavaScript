// A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occuring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

// Write a function that takes an integer as an argument, and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

// NOTE: The largest possible featured number is 9876543201.

// MY SOLUTION

const MAX = 9876543201;

function featuredME(int) {
  let featuredNumber = 0;
  for (let num = int + 1; num <= MAX; num++) {
    if (checkOdd(num) && checkMultiple(num) && checkDifferent(num)) {
      featuredNumber = num;
      break;
    }
  }
  if (featuredNumber > 0) {
    console.log(featuredNumber);
  } else {
    console.log('There is no possible number that fulfills those requirements.');
  } 
}


function checkOdd(num) {
  return num % 2 !== 0;
}

function checkMultiple(num) {
  return num % 7 === 0;
}

function checkDifferent(num) {
  let arrayNum= num.toString().split('').sort();

  for (let idx = 1; idx <= arrayNum.length; idx++) {
    if (arrayNum[idx] === arrayNum[idx - 1]) return false;
  }

  return true;
}


function featured(number) {
  const MAX_FEATURED = 9876543201;
  let featuredNum = toOddMultipleOf7(number);

  do {
    if (allUnique(featuredNum)) {
      return featuredNum;
    }

    featuredNum += 14;
  } while (featuredNum < MAX_FEATURED);

  return 'There is no possible number that fulfills those requirements.';
}

function toOddMultipleOf7(number) {
  do {
    number += 1;
  } while (number % 2 === 0 || number % 7 !== 0);

  return number;
}

function allUnique(number) {
  let digits = String(number).split('');
  let seen = {};

  for (let idx = 0; idx <= digits.length; idx++) {
    if (seen[digits[idx]]) {
      return false;
    }
    seen[digits[idx]] === true;
  }

  return true;
}


console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
featured(999999987);    // 1023456987
featured(9876543200);   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."
