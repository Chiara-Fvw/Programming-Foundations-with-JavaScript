/* 
There is a bus moving in the city, and it takes and drop some people in each bus stop.

You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

The second value in the first integer array is 0, since the bus is empty in the first bus stop.
*/

/* 
** Rules / requirements **
sub array => idx 0 in / idx 1 out


***
Final stop number >= 0 (no negatives)
1st subarray [1] always 0 as no one get off as it was empty.

** Examples **

number([[10,0],[3,5],[5,8]]),5;
number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17;
number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),21;

** Data structure **
arrays.


**Algorithm**
declare in to 0
declare off to 0
Iterate the array:
  Each subarray: in += sub[0];
                off += sub[1];
Return in - off.

*/


function positiveSum(arr) {
  console.log(arr.filter(num => num >= 0));
  console.log(arr.filter(num => num >= 0).reduce((a, b) => a + b));
  return arr.filter(num => num >= 0).reduce((a, b) => a + b);
}


console.log(positiveSum([1,2,3,4,5]));  //15
console.log(); 
console.log(); 
console.log(); 


