/**
 * Gate and Walls
 * Link: https://leetcode.com/problems/walls-and-gates/description/
 */
function mapGateDistances(map) {
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const INF = 2147483647;

  const queue = [];
  const rows = map.length;
  const cols = map[0].length;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (map[row][col] === 0) {
        queue.push([row, col]);
      }
    }
  }

  while (queue.length > 0) {
    const [row, col] = queue.shift();

    for (const [deltaRow, deltaCol] of directions) {
      const totalRow = row + deltaRow;
      const totalCol = col + deltaCol;

      if (
        totalRow >= 0 &&
        totalRow < rows &&
        totalCol >= 0 &&
        totalCol < cols
      ) {
        if (map[totalRow][totalCol] === INF) {
          map[totalRow][totalCol] = map[row][col] + 1;
          queue.push([totalRow, totalCol]);
        }
      }
    }
  }

  return map;
}
