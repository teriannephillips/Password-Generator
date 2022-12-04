// Assignment code here

//code runs when button is clicked
const element = document.getElementById("generate");
element.addEventListener("click", generateLength);
let passwordLength = 0;

// gets the length of the password the user wants
function generateLength(){
  passwordLength = window.prompt("Select Password Length - between 8-128");
  console.log(passwordLength);
  if (passwordLength <= 128  && passwordLength >= 8){
    console.log("good");
    lowercasePrompt("yes");
  }
  else {
  window.alert("You must enter a number between 8-128")
  generateLength();
  } 
}

//find out if the users wants to user lowercase letters
function lowercasePrompt(){
  lowercase = window.prompt ("Would you like to use lowercase letters? y or n");
  if (lowercase == "y" || lowercase == "n"){
    uppercasePrompt();
  }
  else{
    console.log(lowercase);
    window.alert("You must enter a y or n");
    lowercasePrompt();
  }
}
//find out if the user wants to use uppercase letters
function uppercasePrompt(){
  uppercase = window.prompt ("would you like to use uppercase letters? y or n");
  if (uppercase == "y" || uppercase == "n"){
    numbersPrompt();
  }
  else{
    console.log(uppercase);
    window.alert("You must enter a y or n");
    uppercasePrompt();
  } 
}

//find out if the user wants to use numbers
function numbersPrompt(){
  numbers = window.prompt ("would you like to use Numbers?");
  if (numbers == "y" || numbers == "n"){
    console.log(numbers);
    specialCharsprompt();
  }
  else{
    window.alert("You must enter a y or n");
    NumbersPrompt();
  } 
}
//find out if the user wants to use special characters
function specialCharsprompt(){
  specialChars = window.prompt ("would you like to use Special Characters? !@ # $ % & * y or n");
  if (specialChars == "y" || specialChars == "n"){
    console.log(specialChars);
    passwordOptions();
  }
  else{
    console.log(specialChars);
    window.alert("You must enter a y or n");
    specialCharsprompt();
  } 
}

//makes sure the user picks at least one of the four options
function passwordOptions (){
  if(lowercase == "y"|| uppercase =="y" || numbers == "y"|| specialChars == "y"){
      console.log("success!");
  }
  else{
    window.alert("You must select at least one option between lowercase, uppercase, numbers and special characters");
    lowercasePrompt();

  }
 }
 
//generateLength();
//console.log(passwordLength);









// Get references to the #generate elemen t
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
