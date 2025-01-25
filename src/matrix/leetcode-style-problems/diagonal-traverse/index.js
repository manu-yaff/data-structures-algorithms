/**
 * Diagonal Traverse
 * Link: https://leetcode.com/problems/diagonal-traverse/description/
 */
function findDiagonalOrder(mat) {
  const map = new Map();

  const rows = mat.length;
  const cols = mat[0].length;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (map.get(row + col) === undefined) {
        map.set(row + col, [mat[row][col]]);
      } else {
        const arr = map.get(row + col);

        map.set(row + col, [...arr, mat[row][col]]);
      }
    }
  }

  const result = [];

  for (let entry of map.entries()) {
    if (entry[0] % 2 === 0) {
      result.push(...entry[1].reverse());
    } else {
      result.push(...entry[1]);
    }
  }

  return result;
}
