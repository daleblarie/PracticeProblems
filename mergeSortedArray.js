const myArray = [3, 4, 6, 10, 11, 15, 20]
const alicesArray = [1, 5, 8, 12, 14, 19]

function mergeArrays (arr1, arr2) {
  let i = 0
  let j = 0
  var finalArr = []
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      finalArr.push(arr1[i])
      i++
    } else if (arr1[i] > arr2[j]) {
      finalArr.push(arr2[j])
      j++
    }
  }

  if (i < arr1.length) {
    for (let k = i; k < arr1.length; k++) {
      finalArr.push(arr1[k])
    }
  }
  if (j < arr2.length) {
    for (let k = j; k < arr2.length; k++) {
      finalArr.push(arr2[k])
    }
  }
  return finalArr
}

console.log(mergeArrays(myArray, alicesArray))
