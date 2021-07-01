/* Combine Two Lists

Write a function that combines two arrays passed as arguments, and returns a new array that contains all elements from both array arguments, with each element taken in alternation.

You may assume that both input arrays are non-empty, and that they have the same number of elements.

INPUT two arrayas
output one array


Example:

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

Algorithm:
Declare new variable: initializae to a new array
for loop to iterate the first array:
  push into new array 1st idx
  push into new array 2nd idx
return new array.
*/

function interleave(arr1, arr2) {
  let newArr = [];
  arr1.forEach((elem, idx) => {
    newArr.push(elem, arr2[idx]);
  })
  console.log(newArr);
}

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

function interMap(arr1, arr2) {
  return arr1.map((ele, idx) => [ele, arr2[idx]]).flat();
}

console.log(interMap([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

function interReduce(arr1, arr2) {
  return arr1.reduce((acc, cv, idx) => {
    acc.push(cv, arr2[idx]);
    return acc;
  }, [])
}

console.log(interReduce([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]