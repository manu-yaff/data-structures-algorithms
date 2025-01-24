/**
 * Number of Closed Islands
 * https://leetcode.com/problems/number-of-closed-islands/description/
 */
function closedIsland(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  let closedIslands = 0;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 0) {
        if (isClosedIsland(grid, row, col)) {
          closedIslands += 1;
        }
      }
    }
  }

  return closedIslands;
}

function isClosedIsland(grid, row, col) {
  if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) {
    return false;
  }

  if (grid[row][col] === 1) {
    return true;
  } else {
    // means we found land (0s)
    grid[row][col] = 1;

    const down = isClosedIsland(grid, row + 1, col);
    const up = isClosedIsland(grid, row - 1, col);
    const left = isClosedIsland(grid, row, col - 1);
    const right = isClosedIsland(grid, row, col + 1);

    return true && down && up && left && right;
  }
}
