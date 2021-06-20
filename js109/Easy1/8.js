/* Leap Years (Part 1)

In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.

Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater than 0 as input and returns true if the year is a leap year, or false if it is not a leap year.

Examples:

Copy Code
isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true 

PROBLEM:
Leap year: every year evenly divisible by 4 (unless the year is also divisible by 100 (unless it is also divisible by 400))

Input: year greater than 0.
Output: boolean > true if leap / false if not.

DATA STRUCTURE:
Numbers.

ALGORTITHM:
Define a function with year param.

If year is / by 4 
  yes > if / by 100
    yes > if / 400
      yes > true
      no > false
    no > true
  no > false

*/

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}

function isLeapYear2(year) {
  return year % 400 === 0 || (year % 4 === 0) && (year % 100 !== 0); 
}

console.log(isLeapYear2(2016));     // true
console.log(isLeapYear2(2015));      // false
console.log(isLeapYear2(2100));      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
console.log(isLeapYear2(1700));      // false
console.log(isLeapYear2(1));         // false
isLeapYear(100);       // false
console.log(isLeapYear(400));       // true 
