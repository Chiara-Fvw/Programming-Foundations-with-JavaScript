/*
1. The Flintstones Rock! 10 times
2. Each line indent 1 space

Use a loop to output 10 times the sentence.
In the loop add one space each count. And make this be the number of spaces before the following sentence.


*/ 
const str = "The Flintstones Rock!";

for (let spc = 0; spc < 10; spc++) {
  console.log(str.padStart(str.length + spc));
}

// Book solution

for (let padding = 1; padding <= 10; padding++) {
  console.log(" ".repeat(padding) + "The Flinstones Rock!");
}
