//Question no 34: Pizzas: Think of at least three kinds of your favorite pizza. 
//Store these pizza names in a array, and then use a for loop to print the name of each pizza.

let pizzas = ["Afghani pizza", "Tikka pizza", "Fajita pizza"];

//• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. 
//For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

pizzas.forEach(pizza => {
    console.log(`${pizza} is my favorite one!`)
});

//• Add a line at the end of your program, outside the for loop, that states how much you like pizza.
console.log("Pizza is Love!");


