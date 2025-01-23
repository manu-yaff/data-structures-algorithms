/**
 * Max Area of Island
 * Link: https://leetcode.com/problems/max-area-of-island/description/
 */
function maxAreaOfIsland(grid) {
  let max = 0;

  const rows = grid.length;
  const cols = grid[0].length;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === '1') {
        const sizeArea = getSizeArea(grid, row, col);
        max = Math.max(max, sizeArea);
      }
    }
  }

  return max;
}

function getSizeArea(grid, row, col) {
  if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) {
    return 0;
  }

  if (grid[row][col] === '0') {
    return 0;
  } else {
    return (
      1 +
      getSizeArea(grid, row + 1, col) +
      getSizeArea(grid, row - 1, col) +
      getSizeArea(grid, row, col + 1) +
      getSizeArea(grid, row, col - 1)
    );
  }
}
