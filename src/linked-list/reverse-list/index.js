/**
 * Reverse Linked List
 *
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 *
 * Input: head = [1,2,3,4,5]
 * Output: [5,4,3,2,1]
 *
 */

// Time complexity O(n)
// Space complexity O(1)
function reverseList(head) {
  if (head === null || head.next === null) {
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
module.exports = reverseList;
