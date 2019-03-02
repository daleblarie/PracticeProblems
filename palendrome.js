let testStr = "ccii";

function palendromecheck(inputStr) {
  const unpairedChars = new Set();
  for(let char of inputStr){
    if (unpairedChars.has(char)){
      unpairedChars.delete(char);
    } else {
      unpairedChars.add(char);
    }
  }
  return unpairedChars.size <= 1;
}

console.log(palendromecheck(testStr));
