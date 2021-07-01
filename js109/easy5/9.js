/* How Many?

Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").

input array
output string

case sensitive

Example:

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2

Data structure
array, strings object

Algorithm
initialize new variable to empty object.
Iterate the array
  check if the obejct has occurency as key:
    y: increment value by 1
    n: create property by occurency and set value to 1.
  
Iterate the object:
  for each property log 
  key ==> value


*/

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

function countOccurrences(array) {
  let counter = {};

  array.forEach(elem => {
    if (Object.keys(counter).includes(elem)) {
      counter[elem] += 1;
    } else {
      counter[elem] = 1;
    }
  });

  for (let occ in counter) {
    console.log(`${occ} => ${counter[occ]}`);
  }
}

countOccurrences(vehicles);

// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2
