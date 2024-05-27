//Question no 29: Favorite Fruit: Make a array of your favorite fruits, 
//and then write a series of independent if statements that check for certain fruits in your array.



//Step no 1: Make a array of your three favorite fruits and call it favorite_fruits.
let favoriteFruits: string[] = ["Kiwi", "Strawberry", "Mango"];


//• Write five if statements. Each should check whether a certain kind of fruit is in your array. 
//If the fruit is in your array, the if block should print a statement, such as You really like bananas!

if (favoriteFruits.includes("Kiwi")) {
    console.log("I really like Kiwi!")
}

if (favoriteFruits.includes("Orange")) {
    console.log("I really like Orange!")
}

if (favoriteFruits.includes("Strawberry")) {
    console.log("I really like Strwaberries!") 
}

if (favoriteFruits.includes("Apple")) {
    console.log("I really like Apple!")
}

if (favoriteFruits.includes("Mango")) {
    console.log("I really like Mangoes!")
}

