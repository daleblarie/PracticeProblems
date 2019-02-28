var testArr = [1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]

Array.prototype.isEmpty = function () {
  if (this.length == 0){
    return true
  } else {
    return false
  }
};

function shuffle (array) {
  var len = array.length
  var half1 = []
  var half2 = []
  for (var i = 0; i < len / 2; i++) {
    half1.push(array[i])
  }
  for (var j = Math.ceil(len / 2); j < len; j++) {
    half2.push(array[j])
  }
  var shuffledDeck = []
  while (!half1.isEmpty() && !half2.isEmpty()) {
    shuffledDeck.push(half1.shift())
    shuffledDeck.push(half2.shift())
  }
  while (!half1.isEmpty()) {
    shuffledDeck.push(half1.shift())
  }
  while (!half2.isEmpty()) {
    shuffledDeck.push(half2.shift())
  }
  return shuffledDeck
}
var shuffled = shuffle(testArr)
console.log(shuffled)
