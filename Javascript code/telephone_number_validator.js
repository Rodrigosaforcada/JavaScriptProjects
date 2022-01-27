function telephoneCheck(str) {
  let regEx = /\D\S\D/g;
  if(regEx.test(str)) {
    console.log(str.match(regEx));
    return false;
  }

  for(let character in str) {
    character = parseInt(character);
    if(str.charAt(character) == '(' &&
    str.charAt((character+4)) != ')') {
      return false;
    } else if(str.charAt(character) == ')' &&
    str.charAt(character-4) != '(') {
      return false;
    }
  }

  let regEx2 = /\d+/g;
  let numberPhone = str.match(regEx2);
  if(numberPhone.length > 4) {
    return false;
  }
  let numPhoneNoSpaces = "";
  for(let piece in numberPhone) {
    numPhoneNoSpaces += numberPhone[piece];
  }
    
  if(numPhoneNoSpaces.length > 11 || numPhoneNoSpaces.length < 10) {
    return false;
  } else if(numPhoneNoSpaces.length == 11 && numPhoneNoSpaces[0] != 1) {
    return false;
  }
  return true;
}

console.log(telephoneCheck("1 (555) 555-5555"));