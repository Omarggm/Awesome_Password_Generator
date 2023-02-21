// Assignment Code
var generateBtn = document.querySelector("#generate");

// the options given to user
const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
const numericalCharacters = "1234567890";
const specialCharacters = "~!@#$%^&*()_+`-=";

// This is the function that will generate the password
function generatePassword(){
console.log("Button was pressed");

//series of prompts
//2.uppercase
//3. lowercase
//4. numbers
//5. special

var passwordLength = parseInt(prompt("Choose a password length between 8 and 128 characters"));
if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
  return "Error. Please selected valid length for password."
}


//validating inputs from users
//Generate password with the info provided

return passwordLength
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
