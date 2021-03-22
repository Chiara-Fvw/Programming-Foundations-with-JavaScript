function crunch(text) {
  let index = 0;
  let crunchText = '';

  while (index <= text.length -1) {
    if (text[index] !== text[index + 1]) {
      crunchText += text[index];
    }
    index += 1;
  }
  return crunchText;
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""