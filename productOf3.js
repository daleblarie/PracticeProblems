const testArr = [1,2,3,4,5, -6, -6,2];

function greatestProduct(intArr) {
  let int0 = intArr[0];
  let int1 = intArr[1];
  let int2 = intArr[2];
  let maxProduct = int0 * int1 * int2;
  let lowest = Math.min(int0, int1, int2);
  let highest = Math.max(int0, int1, int2);
  let middle;
  let highestNeg = 0;
  let secondNeg = 0;
  if (int0 > lowest && int0 < highest) {
    middle = int0;
  } else if (int1 > lowest && int1 < highest) {
    middle = int1;
  } else {
    middle = int2;
  }

  for (var i = 3; i < intArr.length; i++) {
    if (intArr[i] < 0) {
      if (intArr[i] < highestNeg) {
        secondNeg = highestNeg;
        highestNeg = intArr[i];
      } else if (intArr[i] < secondNeg) {
        secondNeg = intArr[i];
      }
    }
    let potentialMaxNeg = highest * highestNeg * secondNeg;
    let potentialMax = middle * highest * intArr[i];
    if (potentialMax > maxProduct) {
      maxProduct = potentialMax;
      if (intArr[i] > highest) {
        lowest = middle;
        middle = highest;
        highest = intArr[i];
      } else if (intArr[i] > middle) {
        lowest = middle;
        middle = intArr[i];
      } else {
        lowest = intArr[i];
      }
    }
    if (potentialMaxNeg > maxProduct) {
      maxProduct = potentialMaxNeg;
    }

  }
  return maxProduct;
}

console.log(greatestProduct(testArr));
