//code runs when button is clicked
const element = document.getElementById("generate");
element.addEventListener("click", generateLength);
var passwordLength;
var numbers;
var lowercaseLetter;
var uppercaseLetter;
var specialChars;
var passwordString = "";


// gets the length of the password the user wants
function generateLength() {
    passwordLength = window.prompt("Select Password Length - between 8-128");
    //validate user inputs a required value and move to next prompt
    if (passwordLength <= 128 && passwordLength >= 8) {
        lowercasePrompt();
    }
    else {
        //non valid input results in an alert and repeats the function
        windowAlert("number between 8-128");
        generateLength();
    }
}

//find out if the users wants to user lowercase letters
function lowercasePrompt() {
    //validate user inputs a required value and move to next prompt
    lowercase = window.prompt("Would you like to use lowercase letters? y or n", "y");
    if (lowercase == "y" || lowercase == "n") {
        uppercasePrompt();
    }
    else {
    //non valid input results in an alert and repeats the function
    windowAlert("y or n");       
    lowercasePrompt();
    }
}

//find out if the user wants to use uppercase letters
function uppercasePrompt() {
    uppercase = window.prompt("would you like to use uppercase letters? y or n", "y");
    //validate user inputs a required value and move to next prompt
    if (uppercase == "y" || uppercase == "n") {
        numbersPrompt();
    }
    else {
        //non valid input results in an alert and repeats the function
        windowAlert("y or n");
        uppercasePrompt();
    }
}

//find out if the user wants to use numbers
function numbersPrompt() {
    numbers = window.prompt("would you like to use Numbers?", "y");
    //validate user inputs a required value and move to next prompt
    if (numbers == "y" || numbers == "n") {
        //console.log(numbers);
        specialCharsprompt();
    }
    else {
        //non valid input results in an alert and repeats the function
        windowAlert("y or n");
        numbersPrompt();
    }
}
//find out if the user wants to use special characters
function specialCharsprompt() {
    specialChars = window.prompt("would you like to use Special Characters? !@ # $ % & * y or n", "y");
    //validate user inputs a required value and move to next prompt
    if (specialChars == "y" || specialChars == "n") {
        passwordOptions();
    }
    else {
        //non valid input results in an alert and repeats the function
        window.alert("You must enter a y or n");
        specialCharsprompt();
    }
}
//when input is invalid this is the alert that is shown
function windowAlert(textValue){
window.alert("You must enter a " + textValue);
}

//makes sure the user picks at least one of the four options
function passwordOptions() {
    if (lowercase == "y" || uppercase == "y" || numbers == "y" || specialChars == "y") {
        randomFunction();

    }
    else {
        window.alert("You must select at least one option between lowercase, uppercase, numbers and special characters");
        lowercasePrompt();
    }
}
//creates the criteria for the password and randomizes it
function randomFunction() {
    let totalArray;
    let lowercaseArray;
    let uppercaseArray;
    let numberArray;
    let password = "";
    //lowercase criteria if selected
    if (lowercase == "y") {
        lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        totalArray = lowercaseArray;
    }
    else {
        //lower case criteria if not selected
        totalArray = [];
    }
    //uppercase criteria if selected - adds to previous array
    if (uppercase == "y") {
        uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        totalArray2 = totalArray.concat(uppercaseArray);

    }
    else {
        //uppercase criteria if not selected
        totalArray2 = totalArray;
    }
    //numbers criteria if selected adds to previous array
    if (numbers == "y") {
        numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9,0,1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9,0, 1, 2, 3, 4, 5, 6, 7, 8, 9,0];
        totalArray3 = totalArray2.concat(numberArray);
    }
    else {
        //numbers criteria if not selected
        totalArray3 = totalArray2;
    }
    //special character criteria if selected adds to previous array 
    if (specialChars == "y") {
        specialArray = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
        totalArray4 = totalArray3.concat(specialArray);
    }
    else {
        //special character criteria if not selected
        totalArray4 = totalArray3;
    }
    //takes the final array and generates a random number that corresponds to an item in the array for the users selected password length
    let randomNumber = Math.floor(Math.random() * totalArray4.length);
    for (iLength = 0; iLength < passwordLength; iLength++) {
        let randomNumber = Math.floor(Math.random() * totalArray4.length);
        //console.log(totalArray4[randomNumber]);
        passwordString = password.concat(totalArray4[randomNumber]);
        password = passwordString;
        
    }
    //runs the first validation function (lowercase)
    validateLowercase();
}
//checks to make sure the password string contains at least one lowercase letter
function containsAnyLowercase(str) {
    return /[a-z]/.test(str);
}
// checks to make sure the passwordstring contains at least one uppercase letter
function containsAnyUppercase(str) {
    return /[A-Z]/.test(str);
}
//checks to make sure the passwordstring contains at least one number
function containsAnyNumbers(str) {
    return /[1-9]/.test(str);
}
//checks to make sure the password string contains at least one special character
function containsAnySpecial(str) {
    const specialCharsSet = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialCharsSet.test(str);
}

//validates that the random password contains each requirement, if it does it moves to the next one, if not it created a new random string

function validateLowercase() {
    if (lowercase == "y" && containsAnyLowercase(passwordString) == true) {
        validateUppercase();
    }
    else if (lowercase == "n") {
        validateUppercase();
    }
    else {
        randomFunction();
    }
}
function validateUppercase() {
    if (uppercase == "y" && containsAnyUppercase(passwordString) == true) {
        validateNumbers();
    }
    else if (uppercase == "n") {
        validateNumbers();
    }
    else {
        randomFunction();
    }
}
function validateNumbers() {
    if (numbers == "y" && containsAnyNumbers(passwordString) == true) {
        validateSpecial();
    }
    else if (numbers == "n") {
        validateSpecial();
    }
    else {
        randomFunction();
    }

}
function validateSpecial() {
    if (specialChars == "y" && containsAnySpecial(passwordString) == true) {
        writePassword();

    }
    else if (specialChars == "n") {
        writePassword();
    }
    else {
        randomFunction();
    }
}
//writes the final password to the screen
function writePassword() {
    passwordText = document.querySelector("#password");
    passwordText.value = passwordString;
}