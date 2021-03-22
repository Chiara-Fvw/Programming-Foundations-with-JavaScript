/* function xor(one, two) {
  if (one || two) {
    if (one && two) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
} */

//Book solution:

function xor(value1, value2) {
  if ((value1 && !value2) || (value2 && !value1)){
    return true;
  } else {
    return false;
  }
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);