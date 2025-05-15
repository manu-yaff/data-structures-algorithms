/**
 * Pacific Atlantic Water Flow
 * Link: https://leetcode.com/problems/pacific-atlantic-water-flow/description/
 */
function pacificAtlantic(heights) {
  if (heights.length === 0) return [];

  const rows = heights.length,
    cols = heights[0].length;

  const pacific = new Set();
  const atlantic = new Set();

  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  function dfs(row, col, reachable) {
    reachable.add(row + '-' + col);

    for (const [x, y] of directions) {
      const newRow = row + x,
        newCol = col + y;

      // check if the cell is within bounds
      if (newRow < 0 || newCol < 0 || newRow >= rows || newCol >= cols) {
        continue;
      }

      // if cell has been visited, skip
      if (reachable.has(newRow + '-' + newCol)) {
        continue;
      }

      // the cell has to be >= than prev so that the water flows
      if (heights[newRow][newCol] < heights[row][col]) {
        continue;
      }

      // if we're here it means the cells is reachable
      dfs(newRow, newCol, reachable);
    }
  }

  // start from the oceans

  // iterate columns in the borders
  for (let i = 0; i < rows; i++) {
    dfs(i, 0, pacific);
    dfs(i, cols - 1, atlantic);
  }

  // iterate rows at the top and bottom
  for (let i = 0; i < cols; i++) {
    dfs(0, i, pacific);
    dfs(rows - 1, i, atlantic);
  }

  const result = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (atlantic.has(row + '-' + col) && pacific.has(row + '-' + col)) {
        result.push([row, col]);
      }
    }
  }

  return result;
}
