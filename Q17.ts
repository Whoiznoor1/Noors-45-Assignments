//Shrinking Guest List: You just found out that your new dinner
//table won’t arrive in time for the dinner, and you have space for only two guests.

//Creating a guest list array:
let guestName = ["laibay", "Shifa", "Mano"];

//Making variable for thos who cannot come:
let dontCome = guestName[1];

//Printing the name of guest who cannot come:
console.log(dontCome, "Nahi Aa sakti :(");

//Add or remove guest from guest names:
guestName.splice(1, 1, "Javi");

//Message print for bigger table;
console.log("Good news! we have made a big dinner table!");

//Adding a new guest at starting index of array:
guestName.unshift("Ahmed");

//Adding a new guest at the end of the array:
guestName.push("Bilal");

//Get a middle index of myGuestName array:
let middleName: number = (guestName.length / 2);

//Adding a new guest to middle of index of the array
guestName.splice(middleName, 1, "Tayaba");

//Print message of updated list:
console.log("Updated list of our guests name");

//Sending invitation message to our guest:
guestName.forEach(oneGuest => console.log(`"Salaam! ${oneGuest}, wanna have dinner with me?`));

//Informing that only two people can come to dine:
console.log("Unfortunately, the new dinner table would not arrive at time, so I can invite only two guest to dine with me");

//Using while loop to remove the guest from the array until only two names remains:
while(guestName.length > 2){
    let removedGuest = guestName.pop();
    console.log(`Sorry! ${removedGuest}, I can't invite you to dinner:(`);
};

//Sending invitation to the guest who are still invited:
console.log("Invitation to the last two guest");

//Printing message who are invited:
guestName.forEach(lasttwo => console.log(`Fortunately! ${lasttwo}, you are still invited to dine with me:)`));

//Removing the rest of guest:
guestName.pop();
guestName.pop();

console.log("Empty list:", guestName);

