/**
 * Given the head of a singly linked list, your task is to reverse the list and
 * return its head. The singly linked list has nodes, and each node contains an
 * integer and a pointer to the next node. The last node in the list points to
 * null, indicating the end of the list.
 * Time complexity is O(n)
 */
function reverseList(head) {
  // if list is empty or only contains one element, return the head
  if (head === null || head.next === null) return head;

  let prev = null;
  let current = head;

  // point current to prev & update prev and current
  // use next as an aux so that current can keep moving
  while (current !== null) {
    let next = current.next;

    current.next = prev;

    prev = current;
    current = next;
  }

  return prev;
}

module.exports = reverseList;
