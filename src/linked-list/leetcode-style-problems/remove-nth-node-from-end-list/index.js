/**
 * Remove Nth Node From End of List
 * Link: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 */
function removeNthFromEnd(head, n) {
  let current = head;

  for (let i = 0; i < n; i++) {
    current = current.next;
  }

  if (current === null) return head.next;

  let temp = head;

  while (current.next !== null) {
    current = current.next;
    temp = temp.next;
  }

  temp.next = temp.next.next;

  return head;
}
