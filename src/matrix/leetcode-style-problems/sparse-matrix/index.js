/**
 * Sparse Matrix Multiplication
 * Link: https://leetcode.com/problems/sparse-matrix-multiplication/description/
 */
function multiply(mat1, mat2) {
  const n = mat1.length;
  const k = mat1[0].length;
  const m = mat2[0].length;

  const result = new Array(n).fill(null).map((_) => new Array(m).fill(0));

  for (let rowIndex = 0; rowIndex < n; rowIndex++) {
    for (let elementIndex = 0; elementIndex < k; elementIndex++) {
      for (let colIndex = 0; colIndex < m; colIndex++) {
        result[rowIndex][colIndex] +=
          mat1[rowIndex][elementIndex] * mat2[elementIndex][colIndex];
      }
    }
  }

  return result;
}
