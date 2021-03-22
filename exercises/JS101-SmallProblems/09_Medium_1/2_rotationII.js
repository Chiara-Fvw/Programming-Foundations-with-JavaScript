// Write a function that rotates the last count digits of a number. To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left.

function rotateString(string) {
  return string.slice(1) + String(string[0]);
}

function rotateRightmostDigits(digits, count) {
  let numberString = String(digits);
  let unmutable = numberString.slice(0, numberString.length - count);
  let toRotate = numberString.slice(numberString.length - count);
  let resultString = unmutable + rotateString(toRotate);

  return Number(resultString);
}

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917


/* 
MY SOLUTION
function rotateArray(array) {
  return array.slice(1).concat(array[0]);
}

function rotateRightmostDigits(digits, count) {
  let array = digits.toString().split('');
  let unmutable = array.slice(0, array.length - count);
  let toRotate = rotateArray(array.slice(array.length - count));

  return Number(unmutable.concat(toRotate).join(''));
} */