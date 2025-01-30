/**
 * Toeplitz Matrix
 * Link: https://leetcode.com/problems/toeplitz-matrix/description/
 */
function isToeplitzMatrix(mat) {
  const cols = mat[0].length;
  const rows = mat.length;

  for (let col = 0; col < cols; col++) {
    if (!isValidDiagonal(mat, 0, col, mat[0][col])) {
      return false;
    }
  }

  for (let row = 1; row < rows; row++) {
    if (!isValidDiagonal(mat, row, 0, mat[row][0])) {
      return false;
    }
  }

  return true;
}

function isValidDiagonal(mat, row, col, value) {
  while (row < mat.length && row >= 0 && col < mat[0].length && col >= 0) {
    if (mat[row][col] !== value) {
      return false;
    }
    row += 1;
    col += 1;
  }

  return true;
}
