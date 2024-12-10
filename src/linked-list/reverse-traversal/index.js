/**
 * Write a function to traverse a linked list in reverse order
 * return an array with the elements in reverse order
 * Time complexity is O(n^2)
 */
function reverseTraversal(head, tail) {
  if (head === null || head === tail) return head;

  const result = [];
  let currentTail = tail;

  while (currentTail !== head) {
    let prevTail = head;

    while (prevTail.next !== currentTail) {
      prevTail = prevTail.next;
    }

    result.push(currentTail.value);
    currentTail = prevTail;
  }

  result.push(head.value);

  return result;
}

module.exports = reverseTraversal;
