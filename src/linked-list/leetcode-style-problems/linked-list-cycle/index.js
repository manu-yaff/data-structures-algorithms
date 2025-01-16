/**
 * Linked List Cycle
 * Link: https://leetcode.com/problems/linked-list-cycle/description/
 */
function hasCycle(head) {
  if (head === null || head.next === null) return false;

  let fast = head;
  let slow = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;

    if (fast === slow) {
      return true;
    }

    slow = slow.next;
  }

  return false;
}
