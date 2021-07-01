/* Multiply All Pairs

Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.

You may assume that neither argument will be an empty array.

Example:

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16] 

Data structure:
input 2 arrays
output 1 array.

Algorithm:
declare a new variable and initialize it to empty array.
iterate the first array
  for the first element
    iterate the second array:
      multiply the element by all elemnts of the second
  for the second element
    iterate the second array:
      multiply the element by all elemnts of the second
  ...
return the array of multiplications

*/
function multiplyAllPairs(arr1, arr2) {
  let multiplied = [];

  arr1.forEach(elem => {
    arr2.forEach(num => multiplied.push(elem * num));
  })
  console.log(multiplied.sort((a, b) => a - b));
  return multiplied.sort((a, b) => a - b);
}


multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16] 
