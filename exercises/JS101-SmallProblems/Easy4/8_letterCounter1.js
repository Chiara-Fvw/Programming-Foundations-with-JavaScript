function wordSizes(string){
  let arrayOfWords = string.split(' ');
  let object = {};

  for (let idx = 0; idx < arrayOfWords.length; idx++) {
    let keyNumber = arrayOfWords[idx].length;
    if (keyNumber === 0) {
      continue;
    }

    if (object[keyNumber]){
      object[keyNumber] += 1;
    } else {
      object[keyNumber] = 1;
    } 
  }
 console.log(object);
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}
