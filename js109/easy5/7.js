/* Multiply Lists

Write a function that takes two array arguments, each containing a list of numbers, and returns a new array that contains the product of each pair of numbers from the arguments that have the same index. You may assume that the arguments contain the same number of elements.
Input: 2 arrays
output: new array with the products
Example:

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]

Data structure arrays, numbers 

Algotithm:
1.
initialize new empty array
iterate the first array
  on each iteration multiply the same elemen t of each array and push it to the new one.
return the new array
 */

/* function multiplyList(arr1, arr2) {
  let newArray = [];

  for (let idx = 0; idx < arr1.length; idx++) {
    newArray.push(arr1[idx] * arr2[idx]);
  }

  console.log(newArray);
  return newArray;
} */

function multiplyList(arr1, arr2) {
  console.log(arr1.map((elem, idx) => elem * arr2[idx]));
}
multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]