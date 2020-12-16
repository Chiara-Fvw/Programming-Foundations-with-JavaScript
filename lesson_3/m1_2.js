
/* 
Separate each letter (split)
check and change from upper to lower
join
*/
let munstersDescription = "The Munsters are creepy and spooky.";

let changed = munstersDescription.split("").map(function(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join("");

console.log(changed);