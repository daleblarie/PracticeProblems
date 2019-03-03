let testArr = [1, 7, 3, 4];

function productsOfInts(intArr) {
  let before = [1];
  before.push(intArr[0]);

  for (var i = 1; i < intArr.length - 1; i++) {
    before.push(intArr[i] * before[i]);
  }
  let after = [1];
  for (var i = intArr.length - 1; i > 0; i--) {
    after.push(intArr[i] * after[intArr.length - 1 - i]);
  }
  // after.push(1);
  let finalArr = [before[0] * after[after.length - 1]];
  for (var i = 1; i < before.length; i++) {
    finalArr.push(before[i] * after[after.length - 1 - i]);
  }
  return finalArr;
}

function otherProductsOfInts(intArray) {
  if (intArray.length < 2) {
    throw new Error('Getting the product of numbers at other indices requires at least 2 numbers');
  }

  const productsOfAllIntsExceptAtIndex = [];

  // For each integer, we find the product of all the integers
  // before it, storing the total product so far each time
  let productSoFar = 1;
  for (let i = 0; i < intArray.length; i++) {
    productsOfAllIntsExceptAtIndex[i] = productSoFar;
    productSoFar *= intArray[i];
  }

  // For each integer, we find the product of all the integers
  // after it. since each index in products already has the
  // product of all the integers before it, now we're storing
  // the total product of all other integers
  productSoFar = 1;
  for (let j = intArray.length - 1; j >= 0; j--) {
    productsOfAllIntsExceptAtIndex[j] *= productSoFar;
    productSoFar *= intArray[j];
  }

  return productsOfAllIntsExceptAtIndex;
}

console.log(productsOfInts(testArr));
console.log(otherProductsOfInts(testArr));
