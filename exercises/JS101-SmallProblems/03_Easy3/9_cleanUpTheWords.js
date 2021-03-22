//Given a string  
//write a function that returns that string with all of the non-alphabetic characters replaced by spaces.
/*
1. tengo que recorrer el string para ver si son letras o no.
2. si el caracter es no alfabetico, replazo por espacio.
3. si hay muchos espacios juntos, dejo 1
*/ 
//If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).

function cleanUp(string){
  const REGEX = /[a-z]/i;
  let cleanedString = ' ';

  for (let i = 0; i < string.length; i++) {
    if (string[i].match(REGEX)){
      cleanedString = cleanedString + string[i];
    } else if (cleanedString[cleanedString.length - 1] !== ' '){
      cleanedString = cleanedString + ' ';
    }
  }
  console.log(cleanedString);
}

cleanUp("---what's my +*& line?");    // " what s my line "

//shorter solution:
function cleanUp2(text) {
  console.log(text.replace(/[^a-z]/gi, " ").replace(/\s+/gi, " "));
}

cleanUp2("---what's my +*& line?");    // " what s my line "