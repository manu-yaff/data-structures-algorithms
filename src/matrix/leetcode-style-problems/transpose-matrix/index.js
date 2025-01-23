/**
 * Transpose Matrix
 * Link: https://leetcode.com/problems/transpose-matrix/description/
 */
function transpose(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const transposeMatrix = new Array(cols)
    .fill(null)
    .map((_) => new Array(rows));

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      transposeMatrix[col][row] = matrix[row][col];
    }
  }

  return transposeMatrix;
}
// function transpose(matrix) {
//   const rows = matrix.length;
//   const cols = matrix[0].length;
//
//   const transposeMatrix = new Array(cols)
//     .fill(null)
//     .map((_) => new Array(rows));
//
//   for (let col = 0; col < cols; col++) {
//     let tempCol = [];
//
//     for (let row = 0; row < rows; row++) {
//       tempCol.push(matrix[row][col]);
//     }
//
//     let transposeRowIndex = col;
//
//     transposeMatrix[transposeRowIndex] = tempCol;
//   }
//
//   return transposeMatrix;
// }
