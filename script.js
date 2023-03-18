// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword() {
    //click to get a password
    var passwordNeeded = confirm("Would you like a secure password?");
    
    //password length
    var passwordLength = prompt("Enter your password length. It must have at least 8 and no more than 128 charcters");
    
    //validate password length
    if (passwordLength < 8 || passwordLength>128 || !Number.isIntegar(passwordLength)) {
      alert("Please enter a valid password length. You must use numerical characters and set the length from 8 to 128.")
    } else {
      confirm(lengthConf);
    } 
    if (!lengthConf)
    return passwordLength
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
  //click to get a password
  //var passwordNeeded = confirm("Would you like a secure password?");
  //password length
  //var passwordLength = prompt("Enter your password length. It must have at least 8 and no more than 128 charcters");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
