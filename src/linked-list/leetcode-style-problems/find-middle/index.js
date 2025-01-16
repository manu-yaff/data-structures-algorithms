/**
 * Middle of the Linked List
 * Link: https://leetcode.com/problems/middle-of-the-linked-list/description/
 */
function middleNode(head) {
  if (head.next === null) return head;

  let fast = head;
  let slow = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
}
