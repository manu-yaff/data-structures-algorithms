/**
 * Unique Paths III
 * Link: https://leetcode.com/problems/unique-paths-iii/description
 */
function uniquePathsIII(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  let start = null;

  const emptySquares = new Set();
  const visited = new Set();

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 1) {
        start = [row, col];
        emptySquares.add(`${row}-${col}`);
      } else if (grid[row][col] === 0) {
        emptySquares.add(`${row}-${col}`);
      }
    }
  }

  return dfs(grid, start[0], start[1], visited, emptySquares);
}

function areSetsEqual(s1, s2) {
  console.log(s1);
  console.log(s2);
  if (s1.size !== s2.size) return false;

  for (const value of s1.values()) {
    if (!s2.has(value)) return false;
  }

  return true;
}

function dfs(grid, row, col, visited, emptySquares) {
  const rows = grid.length;
  const cols = grid[0].length;
  const key = `${row}-${col}`;

  // out of bounds
  if (row < 0 || col < 0 || row >= rows || col >= cols) {
    return 0;
  }

  // has been visited
  if (visited.has(key)) return 0;

  // ending
  if (grid[row][col] === 2) {
    return areSetsEqual(visited, emptySquares) ? 1 : 0;
  }

  // obstacle
  if (grid[row][col] === -1) return 0;

  // add to set
  visited.add(key);

  const total =
    dfs(grid, row + 1, col, visited, emptySquares) +
    dfs(grid, row - 1, col, visited, emptySquares) +
    dfs(grid, row, col + 1, visited, emptySquares) +
    dfs(grid, row, col - 1, visited, emptySquares);

  visited.delete(key);

  return total;
}
