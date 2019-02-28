var testArr = ['c', 'a', 'k', 'e', ' ', 'd', 'o', 'n', 'g', ' ', 's', 't', 'e', 'a', 'l']
console.log(testArr.join(''))

function reverseArr (charArr) {
  var len = charArr.length
  var frontIndex = 0
  var backIndex = len
  while (frontIndex < backIndex) {
    var temp = charArr[frontIndex]
    charArr[frontIndex] = charArr[backIndex]
    charArr[backIndex] = temp
    frontIndex ++
    backIndex --
  }
}

function findSpaces (wordArr) {
  var returnArr = [-1]
  for (var i = 0; i < wordArr.length; i++) {
    if (wordArr[i] === ' ') {
      returnArr.push(i)
    }
  }
  returnArr.push(wordArr.length)
  return returnArr
}
function reverseWord (wordArr) {
  var spaces = findSpaces(wordArr)
  for (var i = 0; i < spaces.length - 1; i++) {
    var frontIndex = spaces[i] + 1
    var backIndex = spaces[i + 1] - 1
    while (frontIndex < backIndex) {
      var temp = wordArr[frontIndex]
      wordArr[frontIndex] = wordArr[backIndex]
      wordArr[backIndex] = temp
      frontIndex ++
      backIndex --
    }
    console.log(wordArr.join(''))
  }
}
reverseWord(testArr)
reverseArr(testArr)
console.log(testArr.join(''))


// MY SOLUTION ^^
// THEIR SOLUTION vv


// function reverseWords(message) {
//
//   // First we reverse all the characters in the entire message
//   reverseCharacters(message, 0, message.length - 1);
//   // This gives us the right word order
//   // but with each word backward
//
//   // Now we'll make the words forward again
//   // by reversing each word's characters
//
//   // We hold the index of the *start* of the current word
//   // as we look for the *end* of the current word
//   let currentWordStartIndex = 0;
//   for (let i = 0; i <= message.length; i++) {
//
//     // Found the end of the current word!
//     if (i === message.length || message[i] === ' ') {
//
//       // If we haven't exhausted the string our
//       // next word's start is one character ahead
//       reverseCharacters(message, currentWordStartIndex, i - 1);
//       currentWordStartIndex = i + 1;
//     }
//   }
// }
//
// function reverseCharacters(message, leftIndex, rightIndex) {
//
//   // Walk towards the middle, from both sides
//   while (leftIndex < rightIndex) {
//
//     // Swap the left char and right char
//     const temp = message[leftIndex];
//     message[leftIndex] = message[rightIndex];
//     message[rightIndex] = temp;
//     leftIndex++;
//     rightIndex--;
//   }
// }
