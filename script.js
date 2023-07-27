// Assignment code here
//variables has been assigned and convert arrays to a string.
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperCaseArr = upperCaseChar.split("");
console.log(upperCaseArr);

var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
var lowerCaseArr = lowerCaseChar.split("");
console.log(lowerCaseArr);

var numberChar = "0123456789";
var numberArr = numberChar.split("");
console.log(numberArr);

var specialChar = "!@#$%^&*()-=_+[]{}|;:,.<>?";
var specialCharArr = specialChar.split("");
console.log(specialCharArr);

//This is where the prompts starts.
function generatePasswordPrompts() {
  var passwordLength = parseInt(
    prompt("Enter your password between 8 - 128 characters.")
  );

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please only provide number between 8 to 128 characters.");
    return null;
  }

  var hasUpperCase = confirm(
    "Would you like to have an uppercase in your password?"
  );

  var hasLowerCase = confirm(
    "Would you like to have an lowercase in your password?"
  );

  var hasNumber = confirm("Would you like to have a number in your password?");

  var hasSpecialChar = confirm(
    "Would you like to have a Special Character in your password?"
  );

  if (
    hasUpperCase === false &&
    hasLowerCase === false &&
    hasNumber === false &&
    hasSpecialChar === false
  ) {
    alert("Please choose at least one characters to include to your password");
    return null;
  }
  var passwordPrompts = {
    length: passwordLength,
    hasUpper: hasUpperCase,
    hasLower: hasLowerCase,
    hasNumber: hasNumber,
    hasSpecial: hasSpecialChar,
  };
  return passwordPrompts;
}

//this is the codes to generate random password
function generateRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];
  return randomElement;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var options = generatePasswordPrompts();
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//call random function
//arrays
