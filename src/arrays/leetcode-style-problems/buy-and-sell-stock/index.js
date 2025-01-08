/**
 * Best Time to Buy and Sell Stock
 * Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
 */

function maxProfit(prices) {
  if (prices.length === 1) return 0;

  let min = Infinity;
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    profit = Math.max(profit, prices[i] - min);
  }

  return profit;
}

module.exports = maxProfit;
