function wordSizes(string){
  let arrayOfWords = string.replace(/[^A-Za-z0-9 ]/g, '').split(' ');
  let object = {};

  for (let idx = 0; idx < arrayOfWords.length; idx++) {
    let keyNumber = arrayOfWords[idx].length;
    if (keyNumber === 0) {
      continue;
    }

    object[keyNumber] = object[keyNumber] || 0; //short-circuit evalutation
    object[keyNumber] +=1;
  }
 console.log(object);
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}