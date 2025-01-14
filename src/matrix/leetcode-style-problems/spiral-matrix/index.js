/*
 * Spiral Matrix
 * Link: https://leetcode.com/problems/spiral-matrix/description/
 */
function spiralOrder(matrix) {
  let colBegin = 0;
  let colEnd = matrix[0].length - 1;
  let rowBegin = 0;
  let rowEnd = matrix.length - 1;

  const output = [];

  while (rowBegin <= rowEnd && colBegin <= colEnd) {
    // from left to right
    for (let i = colBegin; i <= colEnd; i++) {
      output.push(matrix[rowBegin][i]);
    }

    rowBegin += 1;

    // from top to bottom
    for (let i = rowBegin; i <= rowEnd; i++) {
      output.push(matrix[i][colEnd]);
    }

    colEnd -= 1;

    // from right to left
    if (rowBegin <= rowEnd) {
      for (let i = colEnd; i >= colBegin; i--) {
        output.push(matrix[rowEnd][i]);
      }
    }

    rowEnd -= 1;

    // from bottom to top
    if (colBegin <= colEnd) {
      for (let i = rowEnd; i >= rowBegin; i--) {
        output.push(matrix[i][colBegin]);
      }
    }

    colBegin += 1;
  }

  return output;
}

module.exports = spiralOrder;
