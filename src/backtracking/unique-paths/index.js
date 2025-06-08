/**
 * Unique Paths
 * Link: https://leetcode.com/problems/unique-paths/description/
 */
function uniquePaths(m, n) {
  const dp = {};

  function dfs(row, col) {
    if (dp[`${row}-${col}`] !== undefined) return dp[`${row}-${col}`];

    if (row < 0 || row >= m || col < 0 || col >= n) return 0;

    if (row === m - 1 && col === n - 1) {
      return 1;
    }

    dp[`${row}-${col}`] = dfs(row + 1, col) + dfs(row, col + 1);

    return dp[`${row}-${col}`];
  }

  return dfs(0, 0);
}
