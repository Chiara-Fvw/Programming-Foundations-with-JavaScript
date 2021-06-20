/* This is a continuation of the previous exercise.

The British Empire adopted the Gregorian Calendar in 1752, which was a leap year. Prior to 1752, they used the Julian Calendar. Under the Julian Calendar, leap years occur in any year that is evenly divisible by 4.

Using this information, update the function from the previous exercise to determine leap years both before and after 1752.

If year is before 1752 = Julian
Julian leap every 4 years.

from 1752 gregorian.

ALGORTITH;
1. check if year is gregorian or not.
2. if gregorian > old function
    if julian > if divisible by 4.



*/

function isLeapYear(year) {

 if(year < 1752) {
    return year % 4 === 0;
  }
  return year % 400 === 0 || (year % 4 === 0) && (year % 100 !== 0); 
}

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
console.log(isLeapYear(240000));    // true
isLeapYear(240001);    // false
console.log(isLeapYear(2000));      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // true
console.log(isLeapYear(1));         // false
isLeapYear(100);       // true
isLeapYear(400);       // true