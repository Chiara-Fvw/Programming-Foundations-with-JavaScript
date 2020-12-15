let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift();


//El método shift() elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.
//Sin shift se vería [ [ 'Barney', 2 ] ]
