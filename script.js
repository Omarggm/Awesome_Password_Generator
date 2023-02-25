// Assignment Code
var generateBtn = document.querySelector("#generate");

// Where all password options will be held
var passwordCharacterOptions = "";

// Options for passwords depending on prompts
const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
const numericalCharacters = "1234567890";
const specialCharacters = "~!@#$%^&*()_+`-=";

// Write password to the #password input
function writePassword() {
  // resets password options for each run through
  passwordCharacterOptions = "";
  const passwordLength = parseInt(prompt("pick a number between 8 aand 128"));
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    return handleValidation("must pick number between 8 through 128");
  }

  const includeUppercase = confirm("do you want uppercase?");
  const includeLowercase = confirm("do you want lowercase?");
  const includeNumber = confirm("do you want numbers?");
  const includeSpecial = confirm("do you want special characters?");
  if (includeUppercase) {
    handleUppercase();
  }

  if (includeLowercase) {
    handleLowercase();
  }

  if (includeNumber) {
    handleNumbers();
  }

  if (includeSpecial) {
    handleSpecial();
  }

  if (passwordCharacterOptions === "") {
    const passwordText = document.querySelector("#password");
    passwordText.value = "";
    return handleValidation("At least one character type must be selected. Please click ok and try again.");
  }

  const password = generatePassword(passwordLength);
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Functions to handle yes or no of prompts
function handleUppercase() {
  return passwordCharacterOptions += uppercaseCharacters
}

function handleLowercase() {
  return passwordCharacterOptions += lowercaseCharacters
}

function handleNumbers() {
  return passwordCharacterOptions += numericalCharacters
}

function handleSpecial() {
  return passwordCharacterOptions += specialCharacters
}

// Error messages
function handleValidation(errorMessage) {
  return alert(errorMessage);
}

// Generate Password fuction
function generatePassword(passwordLength) {
  var generatedPassword = ""
  for (let i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * passwordCharacterOptions.length);
    var randomCharacter = passwordCharacterOptions[randomNumber]
    generatedPassword += randomCharacter
  }
  return generatedPassword
}

// Add event listeners to buttons
generateBtn.addEventListener("click", writePassword);


//Worked with Kate Rogers and used her code for refrence 
