//Question no 3:-
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.


let mySelf: string = "Noor";

//lowercase
console.log(mySelf.toLowerCase());

//uppercase
console.log(mySelf.toUpperCase());

//titlecase
console.log(mySelf.replace(/\b\w/g, (box) => box.toUpperCase()));

