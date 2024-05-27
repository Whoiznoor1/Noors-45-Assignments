//Question no 32: Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.

let current_users = ["Laiba", "Ali", "Mano", "Shifa", "Javi"]

//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

let new_users = ["Afshan", "Laiba", "ali", "Ahmed", "Bilal"]

//• Loop through the new_users list to see if each new username has already been used. //case insensitive
//If it has, print a message that the person will need to enter a new username. If a username has not been used, 
//print a message saying that the username is available.



new_users.forEach(new_one_user => {
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())


if(our_condition){
    console.log(`Sorry ${new_one_user} is already taken!`)
}
else{
    console.log(`This ${new_one_user} is availabale`)
}
});


