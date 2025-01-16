/**
 * Reverse Linked List
 * Link: https://leetcode.com/problems/reverse-linked-list/description/
 */
function reverseList(head) {
  if (head == null || head.next == null) {
    return head;
  }

  let prev = null;
  let current = head;

  while (current !== null) {
    let next = current.next;

    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}
