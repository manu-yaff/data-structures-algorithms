/**
 * Clone graph
 * Link: https://leetcode.com/problems/clone-graph/
 */
function cloneGraph(node) {
  if (node === null) return node;

  const visited = new Map();
  const queue = [node];

  visited.set(node, new _Node(node.val, []));

  while (queue.length > 0) {
    const currentNode = queue.shift();

    for (const neighbor of currentNode.neighbors) {
      if (!visited.has(neighbor)) {
        visited.set(neighbor, new _Node(neighbor.val, []));
        queue.push(neighbor);
      }

      // add the copy of the neighbor to the currentNode neighbors
      visited.get(currentNode).neighbors.push(visited.get(neighbor));
    }
  }

  return visited.get(node);
}
