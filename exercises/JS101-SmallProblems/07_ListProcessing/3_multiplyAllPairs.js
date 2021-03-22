//Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.

//You may assume that neither argument will be an empty array.

function multiplyAllPairs(arr1, arr2) {
  let combinedArray = [];

  for (let idx = 0; idx < arr1.length; idx++) {
    combinedArray.push(arr2.map(number => number * arr1[idx]));
  }

  console.log(combinedArray.flat().sort((a, b) => a - b));
}


multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]


//book solution
function multiplyAllPairs(array1, array2) {
  let products = [];
  array1.forEach(item1 => {
    array2.forEach(item2 => {
      products.push(item1 * item2);
    });
  });
  return products.sort((item1, item2) => item1 - item2);
}