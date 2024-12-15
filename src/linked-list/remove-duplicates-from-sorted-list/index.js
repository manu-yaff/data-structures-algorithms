/**
 * Remove Duplicates from Sorted List
 *
 * Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
 *
 * Input: head = [1,1,2]
 * Output: [1,2]
 *
 */

// Time complexity O(n)
// Space complexity O(1)
function deleteDuplicates(head) {
  if (head === null || head.next === null) {
    return head;
  }

  const dummyNode = { val: null, next: null };
  let tail = dummyNode;

  while (head !== null) {
    if (head.val !== tail.val) {
      tail.next = head;
      tail = head;
    }

    head = head.next;
  }

  tail.next = null;

  return dummyNode.next;
}

module.exports = deleteDuplicates;
