/**
 * Island Perimeter
 * https://leetcode.com/problems/island-perimeter/description/
 */
function islandPerimeter(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (matrix[row][col] === 1) {
        return getIslandPerimeter(matrix, row, col, 0);
      }
    }
  }
}

function getIslandPerimeter(matrix, row, col, counter) {
  if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length) {
    return 1;
  }

  if (matrix[row][col] === 2) {
    return 0;
  }

  if (matrix[row][col] === 0) {
    return 1;
  } else {
    matrix[row][col] = 2;

    return (
      counter +
      getIslandPerimeter(matrix, row + 1, col, 0) +
      getIslandPerimeter(matrix, row - 1, col, 0) +
      getIslandPerimeter(matrix, row, col + 1, 0) +
      getIslandPerimeter(matrix, row, col - 1, 0)
    );
  }
}
