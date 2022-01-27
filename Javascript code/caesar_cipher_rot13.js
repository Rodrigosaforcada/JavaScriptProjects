function rot13(str) {
  let regEx = /\w+/ig;
  let strNoSpaces = str.match(regEx);
  let regEx2 = /\W/g;
  let strSpecialChars = [];
  if(regEx2.test(str)) {
    strSpecialChars = str.match(regEx2);
  }
  
  let result = "";
  let stringToSearch = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for(let word in strNoSpaces) {
    for(let letter in strNoSpaces[word]) {
      for(let i=0; i<stringToSearch.length; i++) {
        if(strNoSpaces[word][letter] == stringToSearch[i]) {
          if(i+13 > 25) {
            result += stringToSearch[i+12-25];
          } else {
            result += stringToSearch[i+13];
          }
        }
      }
    }
    if(word < strSpecialChars.length) {
      result += strSpecialChars[word];
    } 
  }

  return result;
}

console.log(rot13("SERR PBQR PNZC"));

console.log(rot13("SERR CVMMN!"));
