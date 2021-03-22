//divide array and make an array of the first halve and another array with the second halve and return an array of arrays.
// 1 let array1 and let array2.
// push array1 y push array2?

function halvsies(arrayToSplit) {
  /* let half1 = arrayToSplit.length % 2 === 0 ? arrayToSplit.slice(0, arrayToSplit.length / 2) 
                                            : arrayToSplit.slice(0, (arrayToSplit.length / 2) + 1);
  let half2 = arrayToSplit.length % 2 === 0 ? arrayToSplit.slice(arrayToSplit.length / 2, arrayToSplit.length)
                                        : arrayToSplit.slice((arrayToSplit.length / 2) + 1, arrayToSplit.length); */
  let half = Math.ceil(arrayToSplit.length / 2);
  let half1 = arrayToSplit.slice(0, half);
  let half2 = arrayToSplit.slice(half);
  return [half1,half2];
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]