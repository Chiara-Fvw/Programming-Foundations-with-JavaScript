/* Halvsies

Write a function that takes an array as an argument and returns an array that contains two elements, each of which is an array. Put the first half of the original array elements in the first element of the return value, and put the second half in the second element. If the original array contains an odd number of elements, place the middle element in the first half array.

Examples:

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]

Data structure:

arrays and numbers

Algorithm:
empty array assigned to new variable.
take the length of the given array.
divide in two.
slice array (ceil) push new
slice array ceil push new.
if empty return [],[]
if only 1 elemn [x],[]}


*/
function halvsies(array) {
  let newArray = [];

  let halves = Math.ceil((array.length) / 2);
  newArray.push(array.slice(0, halves));
  newArray.push(array.slice(halves));

  console.log(newArray);
  
}
halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]