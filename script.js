// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }


let passwordLength = promt ('How long do you want your password to be between 8 to 128 characters')

  if ( passLength <8 || passLength > 128) {
    
    alert('Pick a valid number')
    
    return
  }
    
let upperConfirm = confirm('Do you want uppercase characters?')
let lowerConfirm = confirm('Do you want lowercase characters?')
let numberConfirm = confirm('Do you want numerical characters?')
let specialConfirm = confirm('Do you want special characters?')


let characters = {

  upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
  special = ['+', '-', '&','!' , '(', ')', '{', '}', '[', ']', '^', '~', '*', '?', ':']
}

let password = ""

for (let i = 0; i < passLength; i ++) {

  let pick = Math.floor(Math.random() * 4)
  
  if (pick === 0) {
    if (upperConfirm === true) {
      let change = characters.upperCase[Math.floor(Math.random() + characters.upperCase.length)]
      password= password + change
    } else {
      i--
    }
  }

  else if (pick === 1) {
    if (lowerConfirm === true) {
      let change = characters.lowerCase[Math.floor(Math.random() + characters.lowerCase.length)]
      password= password + change
    } else {
      i--
    }
  }

  else if (pick === 2) {
    if (numberConfirm === true) {
      let change = characters.numbers[Math.floor(Math.random() + characters.numbers.length)]
      password= password + change
    } else {
      i--
    }
  }

  else {
    if (specialConfirm === true) {
      let change = characters.specialCase[Math.floor(Math.random() + characters.specialCase.length)]
      password= password + change
    } else {
      i--
    }
  }



    
    
    
  


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);