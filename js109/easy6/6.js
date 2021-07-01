/* Counting Up

Write a function that takes an integer argument and returns an array containing all integers between 1 and the argument (inclusive), in ascending order.

You may assume that the argument will always be a positive integer.
Input: integer
output: array

all numbers frrom 1 to n.
Examples:

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]

Ds : nubmers arrays

Algorithm:
declare an array variable and initialize to empty array
loop:
  each iteration adds element +1 to the array 
  stops when nubmer is === to integer given.
return array.
 */
function sequence(int) {
  let array = [];

  for (let n = 1; n <= int; n++) {
    array.push(n);
  }

  console.log(array);
}


sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]

function sequenceMap(num) {
  return [...Array(num)].map((_, idx) => idx + 1);
}