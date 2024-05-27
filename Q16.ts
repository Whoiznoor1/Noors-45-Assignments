//Question no 16:-
//More Guests: You just found a bigger dinner table, so now more space is available.
//Think of three more guests to invite to dinner.


//Creating a guest list array:
let myGuestName = ["laibay", "Shifa", "Mano"];

//Making variable for thos who cannot come:
let donotCome = myGuestName[1];

//Printing the name of guest who cannot come:
console.log(donotCome, "Nahi Aa sakti :(");

//Add or remove guest from guest names:
myGuestName.splice(1, 1, "Javi");

//Message print for bigger table;
console.log("Good news! we have made a big dinner table!");

//Adding a new guest at starting index of array:
myGuestName.unshift("Ahmed");

//Adding a new guest at the end of the array:
myGuestName.push("Bilal");

//Get a middle index of myGuestName array:
let middleIndex: number = (myGuestName.length / 2);

//Adding a new guest to middle of index of the array
myGuestName.splice(middleIndex, 1, "Tayaba");

//Print message of updated list:
console.log("Updated list of our guests name");

//Sending invitation message to our guest:
myGuestName.forEach(oneGuest => console.log(`"Salaam! ${oneGuest}, wanna have dinner with me?`));


