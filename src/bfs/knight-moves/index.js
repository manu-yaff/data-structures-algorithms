/**
 * Minimum Knight Moves
 * Link: https://leetcode.com/problems/minimum-knight-moves/description/
 */
function getKnightShortestPath(x, y) {
  function getN(coord) {
    const cX = coord[0];
    const cY = coord[1];

    const deltaX = [-2, -1, 1, 2, 2, 1, -1, -2];
    const deltaY = [-1, -2, -2, -1, 1, 2, 2, 1];

    const result = [];

    for (let i = 0; i < deltaX.length; i++) {
      const nX = cX + deltaX[i];
      const nY = cY + deltaY[i];

      result.push([nX, nY]);
    }

    return result;
  }

  let moves = 0;

  const queue = [[0, 0]];
  const visited = new Set();

  visited.add('00');

  while (queue.length > 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const current = queue.shift();
      if (current[0] === x && current[1] === y) return moves;

      for (const neighbor of getN(current)) {
        const nKey = neighbor.join(',');

        if (visited.has(nKey)) continue;
        queue.push(neighbor);
        visited.add(nKey);
      }
    }

    moves++;
  }

  return moves;
}
