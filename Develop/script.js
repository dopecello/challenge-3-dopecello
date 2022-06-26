var characterLength = 8;
var choiceArray =[];

var specialCharArr = ['!', '@', '#', '$', '%', '^', '&', '*', '|', '~'];
var lowerArr =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',]; 
var upperArr =['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
var numberArr =['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// Assignment code here
var generateBtn = document.querySelector("#generate");

//Add Event Listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  console.log("You clicked the button!")
  // 1. Prompt user for the password criteria
    //    a. Password length 1-128
 let passwordLength = window.prompt("Type in password length (8-128)")
 console.log(passwordLength)
  //    b. then, lower, upper, numbers, special char.
  // 2. Validate the input,
  // 3. Generate Password


  // 4. Display password on the page.

  return "Generated password will go here.";
}
