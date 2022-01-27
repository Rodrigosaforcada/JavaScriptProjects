function palindrome(str) {
  let regEx = /[a-z0-9]/ig;
  let noSpaceArr = str.match(regEx);
  
  let noSpaceStr = "";
  for(let elem in noSpaceArr) {
    noSpaceStr += noSpaceArr[elem];
  }

  console.log(noSpaceStr);

  for(let i=0; i<(parseInt(noSpaceStr.length/2)); i++) {
    if(!(noSpaceStr[i].toLowerCase() == 
    noSpaceStr[(noSpaceStr.length-1-i)].toLowerCase())) {
      console.log(noSpaceStr[i]);
      return false
    }
  }
  return true;
}

console.log(palindrome("0_0 (: /-\ :) 0-0"));