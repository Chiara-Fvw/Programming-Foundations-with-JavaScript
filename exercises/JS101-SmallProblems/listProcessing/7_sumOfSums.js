//Write a function that takes an array of numbers, and returns the sum of the sums of each leading subsequence for that array. You may assume that the array always contains at least one number.

function sumOfSums(numbers) {
  let sum = 0;

  for (let idx = 1; idx <= numbers.length; idx++) {
    sum += numbers.slice(0, idx).reduce((acc, val) => acc + val);
  }
  console.log(sum);
}

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35

//my solution
// function sums(array) {
//   let sums = [];
  
//   for (let idx = 0; idx < array.length; idx++) {
//     if (sums.length < 1) {
//       sums.push(array[0]);   
//     } else {
//       sums.push(sums[idx - 1] + array[idx]);
//     }
//   }
//   return sums;
// }

// function sumOfSums(array) {
//   console.log(sums(array).reduce((acc, val) => acc + val));
// }