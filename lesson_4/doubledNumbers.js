//Can you implement a doubleNumbers function that mutates its argument?
let myNumbers = [1, 4, 3, 7, 2, 6];

function doubleNumbers(numbers) {
  for (let count = 0; count < numbers.length; count++) {
    let currentNum = numbers[count];
    numbers[count] = currentNum * 2;
  }
  return numbers;
}

console.log(doubleNumbers(myNumbers)); // => [2, 8, 6, 14, 4, 12]
console.log(myNumbers);
