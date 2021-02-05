// Here's an exercise for you: suppose we wanted to transform the numbers based on their position in the array rather than their value? Try coding a solution that doubles the numbers that have odd indices:

function doubleOddNumbers(numbers) {
  let doubledNums = [];

  for (let counter = 0; counter < numbers.length; counter += 1) {
    let currentNumber = numbers[counter];

    if (counter % 2 === 1) {
      doubledNums.push(currentNumber * 2);
    } else {
      doubledNums.push(currentNumber);
    }
  }

  return doubledNums;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(doubleOddNumbers(myNumbers));  // => [1, 8, 3, 14, 2, 12]

// not mutated
console.log(myNumbers);                    // => [1, 4, 3, 7, 2, 6]

// Input: Array;
// Output: same modified Array;
// Rules: transform only the numbers located in the odd indexes of the Array.

//[1, 2, 3, 4, 5] --> [1, 4, 3, 8, 5]

//Algorithm: 
// Iterate through all the array
// When the index is odd, modify the number in its position by multiplicating by 2.

// function doubleInOddIdx(numbers) {
//   for (let idx = 1; idx < numbers.length; idx += 2) {
//     numbers[idx] *= 2; 
//   }
//   return numbers;
// }

// console.log(doubleInOddIdx([1, 2, 3, 4, 5]));