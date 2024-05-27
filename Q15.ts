//Question no 15:-
//Changing Guest List: You just heard that one of your guests can’t make the dinner,
// so you need to send out a new set of invitations.
// You’ll have to think of someone else to invite

//Guest names:
let guestName = ["laibay", "Shifa", "Mano"];

//The number of guest who is not coming:
let dontCome = guestName[1];

//Printing message who is not coming:
console.log(dontCome, "Nahi Aa sakti :(");

//Adding name instead of guest number 1:
guestName.splice(1, 1, "Javi");

//Printing message:
guestName.forEach(guest => console.log(`"Salaam! ${guest}, wanna have dinner with me?"`));
