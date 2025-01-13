/**
 * Set Matrix Zeroes
 * Link: https://leetcode.com/problems/set-matrix-zeroes/description/
 */
function setZeroes(matrix) {
  let rowFlag = false;
  let colFlag = false;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) {
        if (row === 0) rowFlag = true;
        if (col === 0) colFlag = true;
        if (row !== 0 && col !== 0) {
          // set the left most and the top most to 0
          matrix[row][0] = 0; // first element of the column
          matrix[0][col] = 0; // first element of the row
        }
      }
    }
  }

  for (let row = 1; row < matrix.length; row++) {
    for (let col = 1; col < matrix[0].length; col++) {
      // check if the element has a 0 to the left most position or to the top most position
      if (matrix[row][0] === 0 || matrix[0][col] === 0) {
        matrix[row][col] = 0;
      }
    }
  }

  if (rowFlag) {
    matrix[0].fill(0);
  }

  if (colFlag) {
    for (let row = 0; row < matrix.length; row++) {
      matrix[row][0] = 0;
    }
  }

  return matrix;
}

module.exports = setZeroes;
