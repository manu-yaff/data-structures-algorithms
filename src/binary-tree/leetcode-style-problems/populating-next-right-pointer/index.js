/**
 * Populating Next Right Pointers in Each Node
 * Link: https://leetcode.com/problems/populating-next-right-pointers-in-each-node/description/
 */
function connect(root) {
  if (root === null) return root;

  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;

    let prev = null;

    for (let i = 0; i < levelSize; i++) {
      const current = queue.shift();

      if (i === levelSize - 1) {
        current.next = null;
      }

      if (i === 0) {
        prev = current;
      }

      if (i > 0) {
        prev.next = current;
        prev = current;
      }

      if (current.left !== null) {
        queue.push(current.left);
      }

      if (current.right !== null) {
        queue.push(current.right);
      }
    }
  }

  return root;
}
