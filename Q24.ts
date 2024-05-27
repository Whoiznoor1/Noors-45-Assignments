//Question no 24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests.
//Have at least one True and one False result for each of the following:


//Define variables:-
let apple = "apple";
let uppercaseApple = "APPLE";
let Eight = 8;
let Ten = 10;
let Twenty = 20;
let Fruits: string[] =  ["Apple", "Mango", "orange"];

//• Tests for equality and inequality with strings:-

console.log("\nIs apple is equal to apple?" ),
console.log(apple == "apple");

console.log("\nIs apple is not equal to apple?")
console.log(apple != apple);

//• Tests using the lower case function:-
console.log("\nIs APPLE is equal to apple after converting into lowercase?")
console.log(uppercaseApple.toLowerCase() == "apple");

console.log("\nIs APPLE is not equal to apple after converting into lowercase?")
console.log(uppercaseApple.toLowerCase() != "apple");


//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to:-

//Numericals Tests which are Greater than:
console.log("\nIs Eight is greater than 4?")
console.log(Eight > 4);


//Numericals Tests which are Less than:
console.log("\nIs Ten is less than 8?")
console.log(Ten < 8);

//Numericals tests which are greater than or equal to:-
console.log("\nIs Eight is greater than or equal to 16?")
console.log(Eight >= 16);


//Numericals tests which are less than or equal to:-
console.log("\nIs ten less than or equal to 20?");
console.log(Ten <= 20);

//• Tests using "and" and "or" operators:-
console.log("\nTwenty is not equal to 10 && 20 is greater than 10")
console.log(Twenty != 10 && 20 > 10);

console.log("\nEight is equal to 10 or Eight is greater than 45")
console.log(Eight == 10 || Eight > 45);


//• Test whether an item is in a array:-
console.log("\nIs orange include in my Fruits array");
console.log(Fruits.includes("orange"));

//• Test whether an item is not in a array:-
console.log("\nIs orange not include in my Fruits array?")
console.log(!Fruits.includes("banana"));







