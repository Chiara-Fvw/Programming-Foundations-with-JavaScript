function digitList(integer) {
  let array = integer.toString().split('');
  let arrayOfNumbers = [];
  for (let idx = 0; idx < array.length; idx++) {
    arrayOfNumbers.push(parseInt(array[idx], 10));
  }

  return arrayOfNumbers;
}
console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]

//using map
function digitList2(number) {
  let array = number.toString().split('');
  let arrayOfNumbers = array.map(value => parseInt(value, 10));
  return arrayOfNumbers;
}

console.log(digitList2(12345));       // [1, 2, 3, 4, 5]
console.log(digitList2(7));           // [7]
console.log(digitList2(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList2(444));         // [4, 4, 4]