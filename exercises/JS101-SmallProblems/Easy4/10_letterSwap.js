// de cada palabra intercambia la ultima y la primera letra
//1 convertir en array con split, 
//iterate through array with  for 
//create variable first letter --> (slice(0, 1))
//variable last letter --> (slice(-1))
//var remaining word --> (slice(1, length))
//push last + word + firts
// when the iteration ends, join all the words together.

function swap(string) {
  let arrayOfWords = string.split(' ');
  //let modifiedArray = []; (no necesario crear array)
  for (let idx = 0; idx < arrayOfWords.length; idx++) {
    arrayOfWords[idx] = swapFirstLastCharacters(arrayOfWords[idx]); // let word = arrayOfWords[idx]; no hace falta, manda a fnc
  }
 
  console.log(modifiedArray.join(' '));
}

function swapFirstLastCharacters(word) {
  /* if (word.length === 1) { 
      modifiedArray.push(word);             > Esto se puede simplificar en:
      continue;
    }; */
  if (word.length === 1) {                 // como no necesito el array, directamente return la palabra sin modificar
    return word;
  }

  /* let firstLetter = word.slice(0,1);
    let centerLetters = word.slice(1, -1);
    let lastLetter = word.slice(-1);                    >esto se simplifica en:
    
    modifiedArray.push(lastLetter + centerLetters + firstLetter); */
  
  return word[word.length - 1] + word.slice(1, -1) + word[0];
}


swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"