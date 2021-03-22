/* function triangle(n) {
  let asteriscs = '';
  for (let counter = 0; counter <= n; counter++) {
    console.log(asteriscs.padStart(n, ' '));
    asteriscs = '*' + asteriscs;
  }
} */

//Book answer

function triangle(height) {
  let spaces = height - 1;
  let stars = 1;
  while (height > 0) {
    console.log(`${" ".repeat(spaces)}${"*".repeat(stars)}`);
    spaces -= 1;
    stars += 1;
    height -= 1;
  }
}

triangle(5);
triangle(9);
