//Question no 6:-
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
//Make sure you use each character combination, "\t" and "\n", at least once. 
//Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

//Storing a name with whitespace characaters:
let whitespaceName = "\n\t Noor un Nisa Myman\t\n";
console.log(whitespaceName);

//Storing a name without whitespace characters:
let withoutWhitespaceName = whitespaceName.trim();
console.log(withoutWhitespaceName);

