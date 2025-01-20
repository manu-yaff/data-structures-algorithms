/**
 * Spiral Matrix II
 * Link: https://leetcode.com/problems/spiral-matrix-ii/
 */
function generateMatrix(n) {
  const matrix = new Array(n).fill(null).map((_) => []);

  let counter = 1;

  let rowStart = 0;
  let rowEnd = n - 1;
  let colStart = 0;
  let colEnd = n - 1;

  while (colStart <= colEnd && rowStart <= rowEnd) {
    for (let i = colStart; i <= colEnd; i++) {
      matrix[rowStart][i] = counter;
      counter += 1;
    }

    rowStart += 1;

    for (let i = rowStart; i <= rowEnd; i++) {
      matrix[i][colEnd] = counter;
      counter += 1;
    }

    colEnd -= 1;

    if (rowStart <= rowEnd) {
      for (let i = colEnd; i >= colStart; i--) {
        matrix[rowEnd][i] = counter;
        counter += 1;
      }
    }

    rowEnd -= 1;

    if (colStart <= colEnd) {
      for (let i = rowEnd; i >= rowStart; i--) {
        matrix[i][colStart] = counter;
        counter += 1;
      }
    }

    colStart += 1;
  }

  return matrix;
}
