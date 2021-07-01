/* Reversed Arrays

Write a function that takes an Array as an argument and reverses its elements in place. That is, mutate the Array passed into this method. The return value should be the same Array object.

Input: array
OUtput: mutated array

- You may not use Array.prototype.reverse().
- return the same mutated array

Examples:

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true 

Data structure: arrays
object?

Algorithm:

1, 2, 3, 4, 5
0  1  2  3  4

5, 4, 3, 2, 1
0  1  2  3  4

declare a new variable with a copy of hte array.
for loop:
  while there are items in the copy:
    pop from copy and push into original
    
return the original array.

*/
function reverse(array) {
  let copy = array.slice();
  
  for (let itm = 0; copy.length > 0; itm++) {
    array.shift();
    array.push(copy.pop());
  }

  return array;
}


let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true 


//launchSchool
function reverseLaunch(array) {
  let leftIdx = 0;
  let rightIdx = array.length - 1;

  while (leftIdx < array.length / 2){
    [array[leftIdx], array[rightIdx]] = [array[rightIdx], array[leftIdx]];
    leftIdx += 1;
    rightIdx -= 1;
  }
  
  return array;
}

let arr = [1, 2, 3, 4];
let resultLS = reverseLaunch(arr);
console.log(resultLS); // logs [4,3,2,1]
console.log(arr === resultLS); // logs true