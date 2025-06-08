/**
 * Unique Path with Obstacles
 * Link: https://leetcode.com/problems/unique-paths-ii/description
 */
function uniquePathsWithObstacles(obstacleGrid) {
  const rows = obstacleGrid.length;
  const cols = obstacleGrid[0].length;

  const dp = {};

  function dfs(row, col) {
    const key = `${row}-${col}`;

    if (row >= rows || col >= cols) return 0;

    if (dp[key] !== undefined) return dp[key];

    if (obstacleGrid[row][col] === 1) return 0;

    if (row === rows - 1 && col === cols - 1) return 1;

    dp[key] = dfs(row + 1, col) + dfs(row, col + 1);

    return dp[key];
  }

  return dfs(0, 0);
}
