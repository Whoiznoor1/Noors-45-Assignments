//Question no 27: Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• Write three versions of this program, making sure each message is printed for the appropriate color alien.


//Version 1:-
//• If the alien is green, print a message that the player earned 5 points.

let AlienColor = "green"
if (AlienColor === "green") {
    console.log("(Version 1) WOW ! the player earned 5 points")
}
else if (AlienColor === "yellow") {
    console.log("the player earned 10 points!")
}
else if (AlienColor === "red") {
    console.log("the player earned 15 points!")
};

//Version 2:-
//• If the alien is yellow, print a message that the player earned 10 points.

AlienColor = "yellow"
if (AlienColor === "green") {
    console.log("the player earned 5 points!")
}
else if (AlienColor = "yellow") {
    console.log("(Version 2) WOW ! the player earned 10 points")
}
else if (AlienColor = "red") {
    console.log("the player earned 15 points")
};

//Version 3:-
//• If the alien is red, print a message that the player earned 15 points.

AlienColor = "red"
if (AlienColor === "green") {
    console.log("the player earned 5 points!")
}
else if(AlienColor === "yellow"){
    console.log("the player earned 10 points")
}
else if (AlienColor === "red") {
    console.log("(Version 3) WOW ! the player earned 15 points")
};
