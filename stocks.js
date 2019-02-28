const stockPrices = [10,9,8,7,6,5,4,0];


function getMaxProfit(prices) {
  var buy = prices[0];
  var sell = prices[1];
  var maxProfit = sell-buy;

  for (var i = 0; i < prices.length; i++) {
    if (prices[i] < buy) {
      buy = prices[i];
      // console.log(buy);
    }
    if (prices[i] > sell) {
      sell = prices[i];
      maxProfit = sell - buy;

    }
  }
  console.log(maxProfit)
  return maxProfit;
}

getMaxProfit(stockPrices);
// Returns 6 (buying for $5 and selling for $11)
var socks = [10, 20, 20, 10, 10, 30, 50, 10, 20];
var numSocks = 9;

function matchSocks(num, sockArr) {
  var numPairs = 0;
  var sockCount = {};
  var sockColors = {};
  for (var i = 0; i < sockArr.length; i++) {
    for (var j = i + 1; j < sockArr.length; j++) {
      if (sockArr[i] == sockArr[j]) {
        sockArr.splice(j,1)
        numPairs += 1;
        break;
      }
    }
  }
  console.log(numPairs);
}

matchSocks(numSocks, socks);

asdf

var step = 8;
var path = "UDDDUDUU";
function pathFinder(numSteps, pathString) {
  var start = 0;
  var vallyCount = 0;
  var vallyStart = 0;
  var vallyEnd = 0;
  for (var i = 0; i < pathString.length; i++) {
    if (pathString[i] == "U") {
      if (start == -1) {
        vallyCount += 1;
        vallyEnd = i;
        // console.log(vallyEnd);
      }
      start += 1;

    } else if (pathString[i] == "D") {
      if (start == 0) {
        vallyStart = i;
        // console.log(vallyStart);
      }
      start -=1;
    }
  }
  return vallyCount;
}
console.log(pathFinder(step, path));
