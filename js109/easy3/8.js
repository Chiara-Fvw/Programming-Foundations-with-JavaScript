/* Grade Book

Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.

Numerical score letter grade list:

90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'
Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.


Ex
getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"

Data Structure
numbers

Algortighm
define function takes 3 args. numbers
calculate the mean 
return the corresponding letter.

 */

function getGrade(first, second, third) {
  let mean = (first + second + third) / 3;
  
  switch (true) {
    case ((mean <= 100) && (mean >= 90)):
      return 'A';
    case ((mean < 90) && (mean >= 80)):
      return 'B';
    case ((mean < 80) && (mean >= 70)):
      return 'C';
    case ((mean < 70) && (mean >= 60)):
      return 'D';  
    default:
      return 'F';
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"