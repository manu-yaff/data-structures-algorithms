/**
 * Coin change
 * Link: https://leetcode.com/problems/coin-change/description/
 */
function coinChange(coins, amount) {
  function dfs(coins, amount, sum) {
    if (sum > amount) return Infinity;
    if (sum === amount) return 0;

    if (memo[sum] != -1) return memo[sum];

    let ans = Infinity;

    for (const coin of coins) {
      let result = dfs(coins, amount, sum + coin);
      if (result === Infinity) continue;

      ans = Math.min(ans, result + 1);
    }

    return (memo[sum] = ans);
  }

  let memo = new Array(amount + 1).fill(-1);
  let result = dfs(coins, amount, 0);

  return result === Infinity ? -1 : result;
}

coinChange([1, 2, 5], 3);
