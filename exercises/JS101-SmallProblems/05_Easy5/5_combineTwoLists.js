function interleave(arr1, arr2) {
  let combinedArray = [];
  for (let idx = 0; idx < arr1.length; idx += 1) {
    combinedArray.push(arr1[idx], arr2[idx]);
  }
  return combinedArray;
}
console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

// with forEach
function interleaveEach(arr1, arr2) {
  let combo = [];
  arr1.forEach((element, idx) => {
    combo.push(element, arr2[idx]);
  });
  return combo;
}
console.log(interleaveEach([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

// with reduce
function interleaveReduce(arr1, arr2) {
  let combo = [];
  arr1.reduce((acc, curVal, idx) => {
    combo.push(curVal, arr2[idx]);
  }, 0);
  return combo;
}
console.log(interleaveReduce([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

// with map
function interleaveMap(arr1, arr2){
  let combo = [];
  arr1.map((value, index) => combo.push(value, arr2[index]));
  return combo;
}
console.log(interleaveMap([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]