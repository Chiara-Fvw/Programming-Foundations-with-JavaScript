/* Bannerizer

Write a function that will take a short line of text, and write it to the console log within a box.



Problem
Bannerize the string.
Input stirng
output string bannerized.

Examples:

logInBox('To boldly go where no one has gone before.');
will log on the console:

+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
logInBox('');
+--+
|  |
|  |
|  |
+--+
You may assume that the output will always fit in your browser window.

Data structure
strings and numbers.

Algorithm:
define a function that takes one string argument.

declare variable long set it to the length of the sring + 2 (the spaces to have around)
concatenate '+' 
return:
+ - (x length) + \n
| ' ' (x length + 2) | \n
| ' ' string ' ' | \n
| ' ' (x length + 2) | \n
+ - (x length) + 


C
*/

function logInBox(message) {
  let horizontalRule = `+${"-".repeat(message.length + 2)}+`;
  let emptyLine = `|${" ".repeat(message.length + 2)}|`;

  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(`| ${message} |`);
  console.log(emptyLine);
  console.log(horizontalRule); 
}

logInBox('To boldly go where no one has gone before.');