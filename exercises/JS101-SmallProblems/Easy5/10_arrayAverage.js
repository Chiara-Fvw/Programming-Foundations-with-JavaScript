function average(array) {
return Math.floor(array.reduce((acc, curr) => acc + curr) / array.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40


function averageEach(array) {
  let result = 0;

  array.forEach(number => {
    result += number;
  });

  return Math.floor(result / array.length);
}


console.log(averageEach([1, 5, 87, 45, 8, 8]));       // 25
console.log(averageEach([9, 47, 23, 95, 16, 52]));    // 40