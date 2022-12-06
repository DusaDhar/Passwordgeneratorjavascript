// Assignment Code
var generateBtn = document.querySelector("#generate");
var 
var passwordlength = 8; 
var password = {
  var lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
  "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
  "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialcharacters: ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",",
  "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];

}

function showprompts() {
  var passwordlenght = prompt(
  "How many characters would you like in your password? Min 8 - Max 128 "
  );
  if (passwordlenght <8 || passwordlenght > 128 || isNAN(parseInt(passwordlenght))) {
    alert("Please enter a number between 8 and 128");
  }
}
else {
  var lowercase = confirm("Would you like to use any lowercase characters?");
  if(lowercase) { 
    allChar += lc
  };

  var uppercase = confirm("Would you like to use any uppercase characters?")
  if (uppercase) {
    allChar += uc 
  };
  
  var specialcharacters = confirm("Would you like to use any special characters?")
  if (specialcharacters) {
    allChar += spec
  };

  var numbers = confirm("Would you like to use any numbers?")
  if (numbers) {
    allChar += nb
  };

  if (
    lowerscase === false &&
  )

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var emptypassword = "";
}

else {
  if 
}

for (var i = 0; i<= passwordlenght; i++) {
  var randomNumber = Math.floor(Math.random() * ChannelSplitterNode.length);
  password += chars.substring(randomNumber, randomNumber +1);

}

return finalpassword;

