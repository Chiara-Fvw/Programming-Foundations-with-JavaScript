//QUESTION 1

let numbers = [1, 2, 3];
numbers[6] = 5; //This code won't cause an error as it would create 3 empty index (3, 4, 5) and create number 5 on index 6.

//BONUS
numbers[4]; // would retrun undefined

//QUESTION 2

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

console.log(str1.endsWith('!'));
console.log(str2.endsWith('!'));

//QUESTION 3
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
ages.hasOwnProperty('Spot');

//QUESTION 4

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

munstersDescription.charAt(0).toUpperCase() + 
  munstersDescription.substring(1).toLowerCase();

//QUESTION 6
let ages2 = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };

Object.assign(ages2, additionalAges);

//QUESTION 7

let str3 = "Few things in life are as important as house training your pet dinosaur.";
let str4 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(str3.includes("Dino"));
console.log(str4.includes("Dino"));

//QUESTION 8 - 9

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino", "Hoppy");

console.log(flintstones);

//QUESTION 10 

let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

advice.slice(0, advice.indexOf("house"));