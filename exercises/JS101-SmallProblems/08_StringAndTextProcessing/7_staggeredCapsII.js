//Modify the function from the previous exercise so it ignores non-alphabetic characters when determining whether it should uppercase or lowercase each letter. The non-alphabetic characters should still be included in the return value; they just don't count when toggling the desired case.

function staggeredCase(string) {
  let count = 0;
  return string.split('').map(char => {
    if (!char.match(/[a-zA-z]/g)) {
      count += 0;
      return char;
    }
    if (count % 2 === 0) {
      count += 1;
      return char.toUpperCase();
    } else {
      count += 1;
      return char.toLowerCase();
    }
  }).join('');
} 


console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);