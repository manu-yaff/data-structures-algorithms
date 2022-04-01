// Time O(n), Space: O(1)
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
	let prev = new LinkedList(null);
	let current = linkedList;
	while (current !== null) {
		if (prev.value === current.value) {
			prev.next = current.next;
		} else {
			prev = current;
		}
		current = current.next;
	}
  return linkedList;
}
