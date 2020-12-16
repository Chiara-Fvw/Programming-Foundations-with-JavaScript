for (let count = 2; count < 99; count += 2) {
  console.log(count);
}

// Book solution

for (let number = 1; number < 100; number += 1) {
  if (number % 2 === 1) {
    continue;
  }
  console.log(number);
}