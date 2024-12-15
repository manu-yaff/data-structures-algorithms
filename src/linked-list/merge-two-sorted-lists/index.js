/**
 * Merge Two Sorted Lists
 * 
 * You are given the heads of two sorted linked lists list1 and list2.

 * Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

 * Return the head of the merged linked list

 * Input: list1 = [1,2,4], list2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 * 
 */

// Time complexity O(n + m)
// Space complexity O(1)
function mergeTwoLists(list1, list2) {
  let dummyHead = { val: 0, next: null };
  let tail = dummyHead;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      tail.next = list1;
      tail = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      tail = list2;
      list2 = list2.next;
    }
  }

  if (list1) {
    tail.next = list1;
  }

  if (list2) {
    tail.next = list2;
  }

  return dummyHead.next;
}

module.exports = mergeTwoLists;
