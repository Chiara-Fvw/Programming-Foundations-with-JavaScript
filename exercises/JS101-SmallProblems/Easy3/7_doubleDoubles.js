
function twice(number) {
  let array = number.toString().split('').map(Number);

  if ((array.length % 2) !== 0){
    console.log(number * 2);
  } else {
    let half = array.length / 2;
    let part1 = array.slice(0, (half)).join('');
    let part2 = array.slice(half, (half + half)).join('');

    if (part1 !== part2){
      console.log(number * 2);
    } else {
      console.log(number);
    }
  }
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676

//book solution

function twiceB(number) {
  if (isDoubleNumber(number)) {
    console.log(number);
  } else {
    console.log(number * 2);
  }
}

function isDoubleNumber(number) {
  let stringNumber = String(number);
  let center = Math.floor(stringNumber.length / 2);
  let leftNumber = stringNumber.substring(0, center);
  let rightNumber = stringNumber.substring(center);

  return leftNumber === rightNumber;
}

twiceB(37);          // 74
twiceB(44);          // 44
twiceB(334433);      // 668866
twiceB(444);         // 888
twiceB(107);         // 214
twiceB(103103);      // 103103
twiceB(3333);        // 3333
twiceB(7676);        // 7676