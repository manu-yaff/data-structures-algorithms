/**
 * Merge Two Sorted lists
 * Link: https://leetcode.com/problems/merge-two-sorted-lists/description/
 *
 */
function mergeTwoLists(list1, list2) {
  if (list1 === null && list2 === null) {
    return list1;
  }

  let c1 = list1;
  let c2 = list2;

  let temp = {};
  let copy = temp;

  while (c1 !== null && c2 !== null) {
    if (c1.val <= c2.val) {
      temp.next = c1;
      c1 = c1.next;
    } else {
      temp.next = c2;
      c2 = c2.next;
    }

    temp = temp.next;
  }

  if (c2 !== null) {
    temp.next = c2;
  }

  if (c1 !== null) {
    temp.next = c1;
  }

  return copy.next;
}
