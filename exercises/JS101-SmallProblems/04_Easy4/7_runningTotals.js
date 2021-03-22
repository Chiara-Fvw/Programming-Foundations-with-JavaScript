//Write a function that takes an array of numbers, and returns an array with the same number of elements, with each element's value being the running total from the original array.
/* function runningTotal(array){
 let resultArray = [];
 let sum = 0;

 for (let idx = 0; idx < array.length; idx++) {
   resultArray.push((sum += array[idx]));
 }

 console.log(resultArray);
 } */

//furtherExploration alumn :

function runningTotal(arr) {
  let sum = 0;

  let result = arr.map((num, idx) => {
    return sum += num;
  });

  console.log(result);
}


runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []


