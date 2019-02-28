// var testString = 'abcdef gh'
// String.prototype.replaceAt = function (index, char) {
//     var firstHalf = this.slice(0, index)
//     var secondHalf = this.slice(index + 1, this.length)
//     var returnStr = firstHalf + char + secondHalf
//     return returnStr
// }
// function reverseString (string) {
//   var workingString = string
//   console.log(workingString)
//   for (var i = 0; i < workingString.length / 2; i++) {
//     var tempFront = workingString[i]
//     var tempBack = workingString[workingString.length - 1 - i]
//     workingString = workingString.replaceAt(i, tempBack)
//     // workingString[i] = workingString[workingString.length - i]
//     workingString = workingString.replaceAt(workingString.length - 1 - i, tempFront)
//   }
//   console.log(workingString)
// }
// reverseString(testString)

var testArr = ['a', 'b', 'c', ' ', 'd', 'e']
console.log(testArr)
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
reverseArr(testArr)
console.log(testArr)
