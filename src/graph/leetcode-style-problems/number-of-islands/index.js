/**
 * Number of Islands
 * Link: https://leetcode.com/problems/number-of-islands/description/
 */
function numIslands(grid) {
  let islands = 0;

  const rows = grid.length;
  const cols = grid[0].length;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === '1') {
        islands += 1;
        dfs(grid, row, col);
      }
    }
  }

  return islands;
}

function dfs(grid, row, col) {
  const rows = grid.length;
  const cols = grid[0].length;

  if (col < 0 || col >= cols || row < 0 || row >= rows) {
    return;
  }

  if (grid[row][col] === '0') {
    return;
  }

  grid[row][col] = '0';

  dfs(grid, row - 1, col); // top
  dfs(grid, row + 1, col); // bottom
  dfs(grid, row, col - 1); // left
  dfs(grid, row, col + 1); // left
}
