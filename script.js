// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  }

  function generatePassword() {
  //click to get a password
  var passwordNeeded = confirm("Would you like a secure password?");
  
  //loop for length of the password
  //password length
  function getPwLength() {
  while(true) {
    var passwordLength = prompt("Enter your password length. It must have at least 8 and no more than 128 charcters");
  //validate password length
  if (passwordLength >= 8 && 128 >= passwordLength && Number.isInteger(parseInt(passwordLength))) {
    var pwConf = confirm(`Your password length is set to ${passwordLength}.`);
    if (!pwConf) {
      return getPwLength()
    } else {
    break;
    }
  } else {
  alert("Please enter a valid password length. You must use numerical characters and set the length from 8 to 128.");
  }
  }
  }
  //call getPwLength()
  getPwLength();

    while(true) {
    // choose character options
    //lowercase
    var lowercase = confirm("Include lowercase letters in your password?");
    alert("OK!");
    //uppercase
    var uppercase = confirm("Include uppercase letters in your password?");
    alert("OK!");
    //numeric
    var numeric = confirm("Include numerical characters in your password?");
    alert("OK!");
    //special
    var special = confirm("Include special characters in your password?")
    alert("OK!");

    if (lowercase || uppercase || numeric || special) {
      break;
    }
    else if (!lowercase && !uppercase && !numeric && !special) {
      alert("You must include at least one character type for your password")
    }
  } 

  var chartypes = [];

  if (lowercase) {
    chartypes.push("lowercase letters")
  }
  if (uppercase) {
    chartypes.push("uppercase letters")
  }if (numeric) {
    chartypes.push("numerical characters")
  }if (special) {
    chartypes.push("special characters")
  }

  //message showing what character types were chosen
  alert("You have chosen to include the following in your password: " + chartypes.join(", "))
  

  //list of all characters included
  var availchar = "";

  if (lowercase) {
    availchar += "abcdefghijklmnopqrstuvwxyz"
  }
  if (uppercase) {
    availchar += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if (numeric) {
    availchar += "1234567890"
  }
  if (special) {
    availchar += ",.<>?;':/\"[]{}|=-+_)(*&^%$#@!)"
  }

  //take pick random characters from avail up to password length chosen
  var password = "";
  for (var i = 0; i < (passwordLength); i++) {
    var randomindex = Math.floor(Math.random()*availchar.length);
    password += availchar.charAt(randomindex);
  }

  return password
  
}
  

  
  
  //click to get a password
  //var passwordNeeded = confirm("Would you like a secure password?");
  //password length
  //var passwordLength = prompt("Enter your password length. It must have at least 8 and no more than 128 charcters");



