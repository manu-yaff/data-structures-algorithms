/**
 * Reshape the Matrix
 * Link: https://leetcode.com/problems/reshape-the-matrix/description/
 */
function matrixReshape(mat, newRows, newCols) {
  const rows = mat.length;
  const cols = mat[0].length;

  const output = new Array(newRows).fill(null).map((_) => new Array(newCols));

  if (rows * cols !== newRows * newCols) {
    return mat;
  }

  let i = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let newCol = i % newCols;
      let newRow = Math.floor(i / newCols);

      output[newRow][newCol] = mat[r][c];

      i++;
    }
  }

  return output;
}
