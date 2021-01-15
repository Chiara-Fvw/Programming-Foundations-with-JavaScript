function stringy(size) {
  let result = "";
  for (let times = 0; times < size; times++) {
    let number = ((times % 2) === 0) ? 1 : 0;
    result += number;
  }
 return result;
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"