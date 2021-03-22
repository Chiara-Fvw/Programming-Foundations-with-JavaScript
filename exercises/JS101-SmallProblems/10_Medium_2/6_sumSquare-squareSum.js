//Write a function that computes the difference between the square of the sum of the first count positive integers and the sum of the squares of the first count positive integers.

function sumSquareDifference(num) {
  let countPositive = [];

  for (let count = 1; count <= num; count ++) {
    countPositive.push(count);
  }

  return (countPositive.reduce((acc, value) => acc + value) ** 2) - 
          (countPositive.map(num => num ** 2).reduce((acc, value) => acc + value));
}

//book solution

function sumSquareDifferenceBook(count) {
  let sum = 0;
  let sumOfSquares = 0;
  for (let number = 1; number <= count; number++) {
    sum += number;
    sumOfSquares += Math.pow(number, 2);
  }

  return Math.pow(sum, 2) - sumOfSquares;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150