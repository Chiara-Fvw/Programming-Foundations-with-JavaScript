//Write a function that takes a string argument consisting of a first name, a space, and a last name, and returns a new string consisting of the last name, a comma, a space, and the first name.

function swapName(string) {
  console.log(string.split(' ').reverse().join(','));
}
swapName('Joe Roberts');    // "Roberts, Joe"

//Further Exploration

//What if the person has one or more middle names? Refactor the current solution so that it can accommodate this; the middle names should be listed after the first name:

function swapName2(string) {
  let array = string.split(' ');
  let surname = array.pop();
  let names = array.join(' ');
  console.log(`${surname}, ${names}`);
}

swapName2('Karl Oskar Henriksson Ragvals');    // "Ragvals, Karl Oskar Henriksson"