const stockPrices = [12, 10, 7, 5, 4, 3, 1];

function getMaxProfit(prices) {
  let maxProfit = prices[1] - prices[0];
  let lowest = prices[0];
  let potentialProfit;
  for (var i = 1; i < prices.length; i++) {
    potentialProfit = prices[i] - lowest;
    if (potentialProfit > maxProfit) {
      maxProfit = potentialProfit;
    }

    if (lowest > prices[i]) {
      lowest = [prices[i]];
    }

  }
  return maxProfit;
}

console.log(getMaxProfit(stockPrices));
