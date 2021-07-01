/* Alphabetical Numbers

Write a function that takes an array of integers between 0 and 19 and returns an array of those integers sorted based on the English word for each number:

zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

Example:

alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

Data strucre: arrays integers, strings and object

AlgorithM:
create an object where key is the name of hte number and the value the number
make the array of keys, sort it and then use it to push into a result array the numbers by the order.
 */
let obj = {
  zero: 0,
  one: 1, 
  two: 2, 
  three: 3, 
  four: 4, 
  five: 5, 
  six: 6, 
  seven: 7, 
  eight: 8, 
  nine: 9, 
  ten: 10, 
  eleven: 11, 
  twelve: 12, 
  thirteen: 13, 
  fourteen: 14, 
  fifteen: 15, 
  sixteen: 16, 
  seventeen: 17, 
  eighteen: 18, 
  nineteen: 19
}

function alphabeticNumberSort(array) {
  let orderedArr = [];

  Object.keys(obj).sort().forEach(key => orderedArr.push(obj[key]));

  return orderedArr;
}


// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

const NUMBER_NAMES = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
function sorting(one, two) {
  if (NUMBER_NAMES[one] > NUMBER_NAMES[two]) {
    return 1;
  } else if (NUMBER_NAMES[one] < NUMBER_NAMES[two]) {
    return -1;
  } else {
    return 0;
  }
}

function alphabetLaunch(array) {
  return [...array].sort(sorting);
}

console.log(alphabetLaunch(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));