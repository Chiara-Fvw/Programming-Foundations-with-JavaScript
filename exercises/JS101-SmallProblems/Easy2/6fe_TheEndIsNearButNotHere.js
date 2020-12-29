function middleWord(string) {
  let word = string.split(' ');
  if (word.length % 2 !== 0) {
    return word[Math.floor(word.length / 2)];  
  } else {
    return 'There are no middle words...';
  }
}

console.log(middleWord("last word")); 
console.log(middleWord("Launch School is always great!")); 
console.log(middleWord(" "));
console.log(middleWord("Launch"));