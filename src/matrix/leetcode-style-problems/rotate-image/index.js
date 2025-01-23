/**
 * Rotate Image
 * Link: https://leetcode.com/problems/rotate-image/
 */
function rotate(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  // transpose the matrix
  for (let row = 0; row < rows; row++) {
    for (let col = row + 1; col < cols; col++) {
      // swap elements
      [matrix[col][row], matrix[row][col]] = [
        matrix[row][col],
        matrix[col][row],
      ];
    }
  }

  // reverse each row
  for (let row = 0; row < rows; row++) {
    matrix[row] = matrix[row].reverse();
  }

  return matrix;
}
