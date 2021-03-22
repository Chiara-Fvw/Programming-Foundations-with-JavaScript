//Write a function that takes a floating point number representing an angle between 0 and 360 degrees, 
//and returns a string representing that angle in degrees, minutes, and seconds. 
//You should use a degree symbol (˚) to represent degrees, >> el número entero
//a single quote (') to represent minutes, >> el decimal * 60
//and a double quote (") to represent seconds. >> lo que queda del decimal * 60
//There are 60 minutes in a degree, and 60 seconds in a minute.

const DEGREE = '\xB0';
function dms(floatingNumber) {
  let degree = Math.floor(floatingNumber);
  let minutes = Math.floor((floatingNumber - degree) * 60);
  let seconds = Math.floor((((floatingNumber - degree) * 60) - minutes)*60);

  return String(degree) + DEGREE +padZeroes(minutes) + "'" + padZeroes(seconds) + '"';
}

function padZeroes(number) {
  let numString = String(number);
  return numString.length < 2 ? ('0' + numString) : numString;
}
console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"