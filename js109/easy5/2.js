/* Combining Arrays

Write a function that takes two arrays as arguments and returns an array containing the union of the values from the two. 
no duplication of values in the returned array, even if there are duplicates in the original arrays. 
You may assume that both arguments will always be arrays.

Input: two arrays
Output: a combined array.

- is the order important? no

Example:

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

Data structure:
arrays

Algorithm:
iterate the second array:
  if first include the current element, ignore
  if dont append it.


 */


function copyNonDups(newArr, arr) {
  arr.forEach(elem => {
    if (!newArr.includes(elem)) newArr.push(elem);
  });
}

function union(arr1, arr2) {
  let newArray = [];

  copyNonDups(newArray, arr1);
  copyNonDups(newArray, arr2);

  return newArray;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
console.log(union([1, 3, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]