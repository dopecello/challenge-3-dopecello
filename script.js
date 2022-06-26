var characterLength = 8;
var choiceArray = [];

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
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");
  if (correctPrompts) {
  var newPassword = generatePassword();
  passwordText.value = newPassword;
  } else {
  passwordText.value = "";
  }
}

function generatePassword() {
  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArray.length)
    password = password + choiceArray[randomIndex];
  }
  return password;
}

function getPrompts() {
  choiceArray = [];
  characterLength = parseInt(prompt("How many characters do you want your password to be? (8-128 Characters)"));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length invalid: type an integer between 8-128. Please try again!");
    return false;
  }
  if (confirm("Would you like lowercase letters in your password? (OK = YES, Cancel = NO)")) {
      choiceArray = choiceArray.concat(lowerArr);
    }

  if (confirm("Would you like uppercase letters in your password? (OK = YES, Cancel = NO)")) {
      choiceArray = choiceArray.concat(upperArr);
    }

  if (confirm("Would you like numbers in your password? (OK = YES, Cancel = NO)")) {
      choiceArray = choiceArray.concat(numberArr); 
    }

  if (confirm("Would you like special characters in your password? (OK = YES, Cancel = NO)")) {
      choiceArray = choiceArray.concat(specialCharArr);
    }
    return true;
}