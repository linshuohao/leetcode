/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];
    if (price < minPrice) {
      minPrice = price
    } else if (price - minPrice > maxProfit) {
      maxProfit = price - minPrice
    }
  }
  return maxProfit
};
// @lc code=end

